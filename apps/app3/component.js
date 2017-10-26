export default (text = 'App3') => {
  const element = document.createElement('div')

  element.innerHTML = text

  return element
}
