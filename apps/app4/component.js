export default (text = 'App4') => {
  const element = document.createElement('div')

  element.innerHTML = text

  return element
}
