import React from 'react'
import css from './index.module.less'
import classNames from 'classnames'

export interface Props {
  checked?: boolean
  onClick?: () => void
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export default function Checkbox({
  checked,
  onClick,
  children,
  style,
  className
}: Props) {
  return (
    <label className={classNames(css.checkbox, className)} style={style}>
      <input type="checkbox" checked={checked} onClick={onClick} /> {children}
    </label>
  )
}
