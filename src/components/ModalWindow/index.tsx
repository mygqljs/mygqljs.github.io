import React from 'react'
import Modal from '../Modal'

import css from './index.module.less'
import Button from '../Button'

export interface Props {
  title?: React.ReactNode
  visible?: boolean
  hideFooter?: boolean
  noScrollBody?: boolean
  children?: React.ReactNode
  onClose?: () => void
}

export default function ModalWindow({
  visible,
  title,
  children,
  noScrollBody,
  hideFooter,
  onClose
}: Props) {
  return visible ? (
    <Modal>
      <div
        className={css.window}
        data-hide-footer={!!hideFooter}
        data-no-scroll-body={!!noScrollBody}
      >
        <div className={css.header}>
          <b>{title}</b>
        </div>
        <div className={css.body}>{children}</div>
        {!hideFooter && (
          <div className={css.footer}>
            <Button onClick={onClose} size="small">
              Close
            </Button>
          </div>
        )}
      </div>
    </Modal>
  ) : null
}
