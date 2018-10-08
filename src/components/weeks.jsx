import { Link } from 'react-router-dom';
import range from '../util/range';

const Weeks = ({ term, week: currentWeek }) => (
  <nav style={{ marginTop: 4 }}>
    {range(1, 9).map(week => (
      <Link to={`/${term}/${week}`} className={'navbar-item'+((week == currentWeek) ? ' active' : '')}>
        Week {week}
      </Link>
    ))}
  </nav>
);

export default Weeks;
