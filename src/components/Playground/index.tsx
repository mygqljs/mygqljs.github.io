import GraphQL from '../GraphQL'
import CodeGen from '../CodeGen'
import { useEffect, useRef } from 'react'

export default function Playground() {
  const ref = useRef({ hash: location.hash })
  useEffect(() => {
    location.hash = ''

    setTimeout(() => {
      location.hash = ref.current.hash
    }, 16)
  }, [ref])

  return (
    <>
      <GraphQL />
      <CodeGen />
    </>
  )
}
