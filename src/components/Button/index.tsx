import React from 'react'
import css from './index.module.less'
import classNames from 'classnames'

export default function Button(props: React.HTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={classNames(css.btn, props.className)} />
}
