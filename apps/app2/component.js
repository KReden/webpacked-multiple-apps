export default (text = 'App2') => {
  const element = document.createElement('div')

  element.innerHTML = text

  return element
}
