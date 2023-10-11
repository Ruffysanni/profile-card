/* eslint-disable react/prop-types */
export default function Skill({ skill, color, level }) {
  // let skillObj.color;
  // let styles = {
  //   backgroundColor: {{skillObj,color}}
  // }
  // let levelPop = level;
  // let emoji;
  // if (levelPop === "Advanced") {
  //   emoji = "💪";
  // } else if (levelPop === "Intermediate") {
  //   emoji = "👍";
  // } else if (levelPop === "Beginner") {
  //   emoji = "👶";
  // }
  return (
    <>
      <div className="skill" style={{ backgroundColor: color }}>
        <span>{skill}</span>
        <span>{level === "Advanced" && "💪"}</span>
        <span>{level === "Intermediate" && "👍"}</span>
        <span>{level === "Beginner" && "👶"}</span>
        {/* <span> {emoji}</span> */}
      </div>
    </>
  );
}
