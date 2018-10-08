export default function range(from, to) {
  if (to === undefined) return range(0, from);
  return Array(to - from).fill(0).map((_, i) => from + i);
}
