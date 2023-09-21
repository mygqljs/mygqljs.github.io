import React from 'react'
import css from './index.module.less'
import classNames from 'classnames'

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  size?: 'default' | 'small'
  type?: 'default' | 'primary'
}

export default function Button({ size, type, ...props }: Props) {
  return (
    <button
      {...props}
      className={classNames(css.btn, props.className)}
      data-size={size || 'default'}
      data-type={type || 'default'}
    />
  )
}
