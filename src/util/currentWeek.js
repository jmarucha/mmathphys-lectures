import currentTerm from './currentTerm'

const oneWeek = 7 * 24 * 60 * 60 * 1000

export default function currentWeek() {
  const termStart = new Date (...(currentTerm().date));
  return Math.ceil((Date.now() - termStart.getTime()) / oneWeek);
}