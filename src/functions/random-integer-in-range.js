
export default (a, b) => {
  const randomNumber = Math.random() * (b - a) + a
  return Math.round(randomNumber)
}
