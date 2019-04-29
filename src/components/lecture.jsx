import colorFromString from '../util/colorFromString';

const Lecture = ({ content }) => {
  let height = content.hourEnd - content.hourStart;
  let offsetTop = content.hourStart % 1;
  let offsetBottom = Math.ceil(content.hourEnd) - content.hourEnd;
  return (<div
    className="lecture"
    style={{
      marginTop: `${96 * offsetTop}px`,
      marginBottom: `${96 * offsetBottom}px`,
      height: `${96 * height}px`,
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
  </div>)
};

export default Lecture;
