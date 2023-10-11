import Skill from "./Skill";
import skills from "./SkillInfo";

export default function SkillList() {
  const skillMap = skills.map((skill) => {
    return (
      <Skill
        key={skill.color}
        skill={skill.skill}
        color={skill.color}
        level={skill.level}
        // skillObj={skill}
        // emoji=""
      />
    );
  });
  return (
    <>
      <h3>Skillsets:</h3>
      <div className="skill-list">{skillMap}</div>
    </>
  );
}

{
  /* <Skill skill="React" emoji="👍" color={{ backgroundColor: "blue" }} />
        <Skill
          skill="HTML+CSS"
          emoji="💪"
          color={{ backgroundColor: "yellow" }}
        />
        <Skill
          skill="C# Programming"
          emoji="💪"
          color={{ backgroundColor: "gold" }}
        />
        <Skill
          skill="Svelte"
          emoji="👶"
          color={{ backgroundColor: "violet" }} 
        />*/
}
