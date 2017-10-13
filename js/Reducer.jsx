export default (clicks = 0, action) => {
  switch (action.type) {
    case 'Add':
      return clicks + 1
    default:
      return clicks
  }
}
