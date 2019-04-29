import Lecture from './lecture';
import Weeks from './weeks';
import renderDayPlan from '../util/renderDayPlan';
import range from '../util/range';
import currentWeek from '../util/currentWeek';
import michaelmasData from '../data/michaelmas.json';
import hilaryData from '../data/hilary.json';
import trinityData from '../data/trinity.json';

const termData = {
  michaelmas: michaelmasData,
  hilary: hilaryData,
  trinity: trinityData
};

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const hourStart = 9;
const hourEnd = 18;

const tableHeader = days => (
  <thead>
    <tr>
      <th />
      {
        days.map((day, index) => (
          <th colSpan={day.columns}>
            {daysOfWeek[index]}
          </th>
        ))
      }
    </tr>
  </thead>
);

const dayToGrid = (day) => {
  const grid = Array(hourEnd - hourStart).fill().map(() => Array(day.columns||1).fill(<td />));
  for (let hour = hourStart; hour < hourEnd; hour += 1) {
    for (let column = 0; column < day.columns; column += 1) {
      const lectureStarting = day.find(lecture => (
        Math.floor(lecture.hourStart) === hour
        && lecture.column === column
      ));
      if (lectureStarting !== undefined) {
        grid[hour - hourStart][column] = (
          <td rowSpan={(Math.ceil(lectureStarting.hourEnd) - Math.floor(lectureStarting.hourStart))}>
            <Lecture content={lectureStarting} />
          </td>
        );
        if (lectureStarting.hourEnd - lectureStarting.hourStart > 1) {
          for (let occupiedHour = Math.floor(lectureStarting.hourStart) + 1;
            occupiedHour < lectureStarting.hourEnd;
            occupiedHour += 1) {
            grid[occupiedHour - hourStart][column] = null;
          }
        }
      }
    }
  }
  return grid;
};

const tableBody = (days) => {
  const grid = days.map(dayToGrid);
  return range(hourStart, hourEnd).map(hour => (
    <tr>
      <td className="label">
        {`${hour}:00 - ${hour + 1}:00`}
      </td>
      {
        grid.map(subgrid => subgrid[hour - hourStart].reduce((acc, val) => acc.concat(val), [])) // flatten
      }
    </tr>
  ));
};

const Table = ({ match }) => {
  const { term } = match.params;
  const week = match.params.week || currentWeek();

  console.log(term, term in termData);
  if (!(term in termData))
    return (
      <div className="soon">
        soon.
      </div>
    )

  console.log({ week, term })
  const days = range(5).map(day => renderDayPlan(day + 1, week, termData[term]));
  return (
    <div>
      <Weeks week={week} term={term} />
      <table>
        {tableHeader(days)}
        {tableBody(days)}
      </table>
    </div>
  );
};

export default Table;
