// Import css in the module because we are cool like that
// If you don't use an evergreen browser, this will prob not work.
// Tested working in chrome, not working in safari. :(
import styleCss from './style.css' assert { type: 'css' }

document.adoptedStyleSheets = [styleCss]

const contributorContainer = document.querySelector('#contributors')
const { default: contributors } = await import('./contributors.json', {
  assert: { type: 'json' },
})

contributors.forEach(contributor => {
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.innerText = contributor.name
  a.href = `https://github.com/${contributor.github}`
  li.appendChild(a)
  contributorContainer.appendChild(li)
})
