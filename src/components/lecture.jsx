import colorFromString from '../util/colorFromString';

const Lecture = ({ content }) => (
  <div
    className="lecture"
    style={{
      height: `${96 * (content.hourEnd - content.hourStart)}px`,
      backgroundColor: colorFromString(content.name),
    }}
  >
    <div className="lecture-name">
      {content.name}
    </div>
    <div className="lecture-location">
      {content.location}
    </div>
    <div className="lecture-border" />
  </div>
);

export default Lecture;
