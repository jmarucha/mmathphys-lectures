import currentTerm from './currentTerm'

const oneWeek = 7 * 24 * 60 * 60 * 1000

export default function currentWeek() {
  const termStart = new Date (...(currentTerm().date));
  const computedWeek = Math.floor((Date.now() - termStart.getTime()) / oneWeek);

  if (computedWeek == 0) return 1;
  else if (computedWeek >= 8) return 8;
  else return computedWeek;
}