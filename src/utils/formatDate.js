const padZero = (target, length = 2, padString = '0') => (
  target.toString().padStart(length, padString)
)

export default (date) => {
  const year = date.getFullYear()
  const month = padZero(date.getMonth() + 1)
  const day = padZero(date.getDate())
  const hour = padZero(date.getHours())
  const minute = padZero(date.getMinutes())
  const second = padZero(date.getSeconds())
  const milliSec = padZero(date.getMilliseconds(), 3)

  return `${year}${month}${day}${hour}${minute}${second}${milliSec}`
}
