export default function renderDayPlan(day, week, data) {
  const lectures = data.map(lectureSerie => lectureSerie.lectures
    .filter(({ dayOfWeek, weekStart, weekEnd }) => day === dayOfWeek
      && weekStart <= week
      && weekEnd >= week)
    .map(subserie => ({
      name: lectureSerie.name,
      lecturer: lectureSerie.lecturer,
      ...subserie,
    }))).flat().sort((a, b) => a.hourStart - b.hourStart);
  lectures.columns = 0;
  lectures.forEach((lecture) => {
    for (let column = 0; ; column += 1) {
      // check if some lectures collide
      const collides = lectures.some(collidingLecture => collidingLecture.column === column
        && collidingLecture.hourStart < lecture.hourEnd
        && lecture.hourStart < collidingLecture.hourEnd,
      );
      if (!collides) {
        lecture.column = column; // eslint-disable-line no-param-reassign
        lectures.columns = Math.max(lectures.columns, column + 1);
        return;
      }
    }
  });
  return lectures;
}
