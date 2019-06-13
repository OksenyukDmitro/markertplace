export default function initials(name) {
  let initials = '';
  const parts = name.split(' ');
  for (let i in parts) {
    if (parts[i].length > 0 && parts[i] !== '') {
      initials += parts[i][0];
    }
  }
  return initials;
}
