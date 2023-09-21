import { useRef, useState } from 'react'
import Button from '../Button'
import copyToClipboard from '@/utils/copyToClipboard'

export interface Props {
  value?: string
}

export default function CopyButton({ value }: Props) {
  const [copied, setCopied] = useState(false)
  const ref = useRef({ id: 0 })

  return (
    <Button
      type="primary"
      onClick={() => {
        if (value) {
          copyToClipboard(value).then(() => {
            setCopied(true)
            ref.current.id += 1
            const { id } = ref.current
            setTimeout(() => {
              if (id === ref.current.id) {
                setCopied(false)
              }
            }, 3000)
          })
        }
      }}
    >
      {copied ? 'Copied!' : 'Copy to Clipboard'}
    </Button>
  )
}
