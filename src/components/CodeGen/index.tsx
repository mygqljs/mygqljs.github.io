import JSON5 from 'json5'
import { useMemo, useState } from 'react'
import { convertSchema } from 'generate-graphql-client'
import CodeEditor from '../CodeEditor'
import example from './example.json'
import Button from '../Button'
import css from './index.module.less'
import CopyButton from '../CopyButton'

export default function CodeGen() {
  const [tab, setTab] = useState<'input' | 'output'>('input')
  const [input, setInput] = useState(getExampleJSON)

  const result = useMemo<{
    error?: string
    code?: string
    time?: number
  }>(() => {
    if (tab === 'output') {
      try {
        const intro = JSON5.parse(input)
        if (intro && intro.data && intro.data.__schema) {
          const ctx = convertSchema(intro.data.__schema, {})
          return { code: ctx.getCode() }
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
  }, [tab, input])

  console.log(result)

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
            <b>Output</b> (ts readonly)
          </div>
        </div>

        {tab === 'input' ? (
          <>
            <div className={css.input}>
              <CodeEditor
                lang="json"
                value={input}
                onChange={(val) => setInput(val)}
              />
            </div>
            <div className={css.actions}>
              <Button type="primary" onClick={() => setTab('output')}>
                Convert to TypeScript
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className={css.output}>
              <CodeEditor lang="ts" value={result.code} readOnly />
            </div>
            <div className={css.actions}>
              <CopyButton value={result.code} />
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
