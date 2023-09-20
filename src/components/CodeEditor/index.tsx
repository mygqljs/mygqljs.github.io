import type { ViewUpdate } from '@uiw/react-codemirror'
import CodeMirror from '@uiw/react-codemirror'
import { useMemo } from 'react'
import { json } from '@codemirror/lang-json'
import { javascript } from '@codemirror/lang-javascript'
import css from './index.module.less'

export interface Props {
  lang?: 'ts' | 'json'
  value?: string
  onChange?: (value: string, viewUpdate: ViewUpdate) => void
  height?: string
}

export default function CodeEditor({ lang, value, onChange, height }: Props) {
  const extensions = useMemo(
    () => [lang === 'json' ? json() : javascript({ typescript: true })],
    [lang]
  )

  return (
    <CodeMirror
      value={value}
      className={css.editor}
      extensions={extensions}
      onChange={onChange}
      height={height || '400px'}
    />
  )
}
