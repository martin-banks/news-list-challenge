
export default function (date) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const parts = date
    .split('-')
    .map(p => parseInt(p, 10))

  return `${parts[2]} ${months[parts[1]]} ${parts[0]}`
}
