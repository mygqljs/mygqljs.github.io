import './home.less'

const Prism = (
  window as {
    Prism?: {
      highlightElement: (element: HTMLElement) => void
    }
  }
).Prism

document.querySelectorAll('pre').forEach((pre) => {
  if (pre.className.includes('language-')) {
    Prism?.highlightElement(pre)
    pre.classList.add('g-highlight')
  }
})
