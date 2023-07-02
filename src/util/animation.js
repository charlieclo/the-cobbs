export function animate(selector, properties, timeout, onComplete = () => {}) {
  $(`${selector}`).animate(properties, timeout, onComplete)
}