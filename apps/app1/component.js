export default (text = 'App 1') => {
  const element = document.createElement('div')

  element.innerHTML = text

  return element
}
