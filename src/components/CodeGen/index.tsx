import { useEffect, useMemo, useRef, useState } from 'react'
import CodeEditor from '../CodeEditor'
import CodeViewer from '../CodeViewer'
import example from './example.json'
import JSON5 from 'json5'
import type { Introspection } from '@mygql/codegen/lib/types/introspection'
import { convertSchema } from '@mygql/codegen/lib/core/convertSchema'
import css from './index.module.less'
import Button from '../Button'
import copyToClipboard from '@/utils/copyToClipboard'

export default function CodeGen() {
  const [tab, setTab] = useState<'input' | 'output'>('input')
  const [copied, setCopied] = useState(false)
  const ref = useRef<{ timer?: number }>({})
  const [input, setInput] = useState(() => {
    const saved = localStorage.getItem('@mygql/codegen')
    return saved === null ? getExampleJSON() : saved
  })

  const result = useMemo<{
    error?: string
    code?: string
  } | null>(() => {
    if (tab === 'output') {
      try {
        const intro = JSON5.parse(input) as Introspection

        if (intro && intro.data && intro.data.__schema) {
          const { code } = convertSchema(intro.data.__schema)
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
    } else {
      setCopied(false)
    }

    return null
  }, [tab, input])

  useEffect(() => {
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
            Input
          </div>
          <div
            className={css.tab}
            data-active={tab === 'output'}
            onClick={() => setTab('output')}
          >
            Output
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
            <div className={css.actions}>
              <Button onClick={() => setTab('output')}>
                Convert to TypeScript
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className={css.output}>
              {result?.code && <CodeViewer lang="ts" value={result.code} />}
            </div>
            <div className={css.actions}>
              <Button
                onClick={() => {
                  if (result?.code) {
                    if (ref.current.timer !== undefined) {
                      clearTimeout(ref.current.timer)
                    }
                    copyToClipboard(result?.code).then(() => {
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

function getExampleJSON() {
  return JSON.stringify(example, null, 2)
}
