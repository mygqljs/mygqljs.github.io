import { useMemo, useState } from 'react'
import { generateQuery } from 'generate-graphql-query'
import CodeEditor from '../CodeEditor'
import CodeViewer from '../CodeViewer'
import Button from '../Button'
import css from './index.module.less'
import CopyButton from '../CopyButton'

export default function GraphQL() {
  const [input, setInput] = useState(getInitialValue)

  const { error, value } = useMemo<{ error?: string; value?: string }>(() => {
    const { value, error } = parseInput(input)

    if (error) {
      return { error: `${error.message || 'unknown error.'}` }
    } else if (value) {
      try {
        const query = generateQuery(value)
        return { value: query }
      } catch (err) {
        return { error: `${(err as Error).message || 'unknown error.'}` }
      }
    }

    return {}
  }, [input])

  return (
    <div className={css.container}>
      <div className={css.content}>
        <h2 id="graphql">
          <a href="#graphql">Generate GraphQL query from JavaScript object</a>
        </h2>
        <p>
          Try to change the argument of the{' '}
          <code className="g-code">generateQuery</code> function, and see the
          new result.
        </p>
        <div className={css.inputContainer}>
          <div className={css.left}>
            <div className={css.editor}>
              <CodeEditor
                value={input}
                onChange={(val) => setInput(val)}
                height="400px"
              />
            </div>
            <div className={css.actions}>
              <Button
                type="primary"
                onClick={() => setInput(getInitialValue())}
              >
                Reset
              </Button>
            </div>
          </div>
          <div className={css.sep}></div>
          <div className={css.right}>
            <div className={css.viewer}>
              {value && <CodeViewer value={value} lang="graphql" />}
              {error ? (
                <div className={css.error}>Invalid input: {error}</div>
              ) : null}
            </div>
            {value && (
              <div className={css.actions}>
                <CopyButton value={value} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function parseInput(input: string): { value?: any; error?: Error } {
  let lines = input.replace('\r', '\n').split(/\n+/)
  let i = 0

  for (i = 0; i < lines.length; i += 1) {
    if (lines[i].replace(/\s+/g, '').startsWith('generateQuery({')) {
      break
    }
  }

  lines = lines.slice(i)
  lines.reverse()

  for (i = 0; i < lines.length; i += 1) {
    if (lines[i].replace(/\s+/g, '').endsWith('})')) {
      break
    }
  }

  lines = lines.slice(i)
  lines.reverse()

  const inputCode = lines.join('\n').trim()

  let value: any | undefined
  let error: any | undefined

  if (inputCode) {
    const code = [
      '(function () { ',
      '  return function (generateQuery) {',
      inputCode,
      '  }',
      '})()'
    ].join('\n')

    try {
      const fn = eval(code) as (cb: (val: any) => void) => void
      fn((val) => {
        value = val
      })
    } catch (err) {
      error = err
    }
  }

  return { value, error }
}

function getInitialValue() {
  return [
    "import { generateQuery } from 'generate-graphql-query'",
    '',
    'generateQuery({',
    '  query: {',
    '    countries: {',
    '      $args: {',
    '        filter: {',
    "          continent: { in: ['AF'] }",
    '        }',
    '      },',
    '',
    '      code: true,',
    '      name: true',
    '    }',
    '  }',
    '})',
    ''
  ].join('\n')
}
