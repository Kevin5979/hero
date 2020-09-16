import dayjs from 'dayjs'
export const formatDate = (value, pattern) => {
  return dayjs(value).format(pattern)
}
