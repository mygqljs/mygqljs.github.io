import { useEffect, useRef } from 'react'
import css from './index.module.less'

export interface Props {
  lang?: 'ts' | 'graphql'
  value?: string
}

export default function CodeViewer({ lang, value }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current

    if (container && value) {
      const pre = document.createElement('pre')
      const code = document.createElement('code')
      const text = document.createTextNode(value)

      pre.className = `language-${lang}`
      code.className = `language-${lang}`

      code.appendChild(text)
      pre.appendChild(code)

      container.innerHTML = ''
      container.appendChild(pre)

      const Prism = (
        window as {
          Prism?: {
            highlightElement: (element: HTMLElement) => void
          }
        }
      ).Prism

      if (Prism) {
        console.log(code)
        Prism.highlightElement(code)
      }
    } else if (container) {
      container.innerHTML = ''
    }
  }, [ref, value, lang])

  return <div ref={ref} className={css.codeViewer} />
}
