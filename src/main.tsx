import './index.less'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Playground from './components/Playground'

const root = document.getElementById('root') as HTMLElement

root.innerHTML = ''

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Playground />
  </React.StrictMode>
)
