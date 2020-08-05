export const func = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Dio : One second has passed.')
    }, 1000)
  })
}
