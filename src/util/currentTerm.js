import DatesOfTerm from '../data/datesOfTerm.json';

export default function currentTerm() {
  return DatesOfTerm.reduce((memo, term) => {
    const memoDate = new Date(...memo.date);
    const termDate = new Date(...term.date);
    return (termDate < Date.now() && memoDate < termDate) ? term : memo;
  });
}