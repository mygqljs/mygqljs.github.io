import React from 'react'
import css from './index.module.less'

export interface Props {
  children?: React.ReactNode
}

export default function Modal({ children }: Props) {
  return (
    <div className={css.modal}>
      <div className={css.body}>
        <div className={css.content}>{children}</div>
      </div>
    </div>
  )
}
