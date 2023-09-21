import JSON5 from 'json5'
import { useEffect, useMemo, useRef, useState } from 'react'
import { convertSchema } from '@mygql/codegen/lib/core/convertSchema'
import type { Introspection } from '@mygql/codegen/lib/types/introspection'
import type { Options } from '@mygql/codegen/lib/types/options'
import CodeEditor from '../CodeEditor'
import CodeViewer from '../CodeViewer'
import example from './example.json'
import Button from '../Button'
import copyToClipboard from '@/utils/copyToClipboard'
import Checkbox from '../Checkbox'
import css from './index.module.less'

export default function CodeGen() {
  const ref = useRef<{ timer?: number }>({})
  const [tab, setTab] = useState<'input' | 'output'>('input')
  const [copied, setCopied] = useState(false)
  const [input, setInput] = useState(() => {
    const saved = localStorage.getItem('@mygql/codegen')
    return saved === null ? getExampleJSON() : saved
  })

  const [options, setOptions] = useState<Options>({})

  const result = useMemo<{
    error?: string
    code?: string
    time?: number
  }>(() => {
    if (tab === 'output') {
      try {
        const intro = JSON5.parse(input) as Introspection
        if (intro && intro.data && intro.data.__schema) {
          const { code } = convertSchema(intro.data.__schema, options)
          return { code }
        } else {
          return { error: 'The input is a introspection JSON.' }
        }
      } catch (err) {
        if (err && typeof (err as Error).message === 'string') {
          return { error: (err as Error).message }
        }
        return { error: 'Something went wrong :(' }
      }
    }
    return {}
  }, [tab, input, options])

  useEffect(() => {
    setCopied(false)

    try {
      JSON5.parse(input)
      localStorage.setItem('@mygql/codegen', input)
    } catch (err) {
      // ignore invalid JSON
    }
  }, [input])

  return (
    <div className={css.container}>
      <div className={css.content}>
        <h2 id="codegen">
          <a href="#codegen">
            Generate TypeScript code from GraphQL introspection
          </a>
        </h2>
        <p>
          Input your GraphQL introspection JSON to convert it to TypeScript
          code.
        </p>

        <blockquote>
          Don't know where to find the GraphQL introspection? Please read:{' '}
          <a
            className="g-link"
            target="_blank"
            href="https://www.npmjs.com/package/@mygql/codegen#how-to-get-graphql-introspection"
          >
            How to get GraphQL introspection?
          </a>
        </blockquote>

        <div className={css.tabs}>
          <div
            className={css.tab}
            data-active={tab === 'input'}
            onClick={() => setTab('input')}
          >
            <b>Input</b> (json)
          </div>
          <div
            className={css.tab}
            data-active={tab === 'output'}
            onClick={() => setTab('output')}
          >
            <b>Output</b> (ts)
          </div>
        </div>

        {tab === 'input' ? (
          <>
            <div className={css.input}>
              <CodeEditor
                lang="json"
                value={input}
                onChange={(value) => {
                  setInput(value)
                }}
              />
            </div>
            <GenOptions options={options} onChange={setOptions} />
            <div className={css.actions}>
              <Button onClick={() => setTab('output')}>
                Convert to TypeScript
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className={css.output}>
              <CodeViewer lang="ts" value={result.code} />
            </div>
            <GenOptions options={options} onChange={setOptions} />
            <div className={css.actions}>
              <Button
                onClick={() => {
                  if (result.code) {
                    if (ref.current.timer !== undefined) {
                      clearTimeout(ref.current.timer)
                    }
                    copyToClipboard(result.code).then(() => {
                      setCopied(true)
                      ref.current.timer = setTimeout(() => {
                        setCopied(false)
                      }, 3000)
                    })
                  }
                }}
              >
                {copied ? 'Copied!' : 'Copy to Clipboard'}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function GenOptions({
  options,
  onChange
}: {
  options: Options
  onChange: (options: Options) => void
}) {
  const keys: (keyof Options)[] = [
    'skipGeneratedTip',
    'skipLintComments',
    'skipWrappingArgsEnum',
    'skipArgs',
    'skipFields',
    'skipFactory',
    'skipQuery',
    'skipQueries',
    'skipMutation',
    'skipMutations'
  ]
  return (
    <div className={css.options}>
      {keys.map((key) => (
        <Checkbox
          className={css.option}
          key={key}
          checked={!!options[key]}
          onClick={() => {
            onChange({
              ...options,
              [key]: !options[key]
            })
          }}
        >
          {key}
        </Checkbox>
      ))}
    </div>
  )
}

function getExampleJSON() {
  return JSON.stringify(example, null, 2)
}
