import SkillListItem from "./SkillListItem";

function SkillList({ skills }) {
    return (
        <div className="SkillList">
            <ul>
                {skills.map((skill, index) => (
                    <SkillListItem key={index} name={skill.name} level={skill.level} />
                ))}
            </ul>
        </div>
    );
}

export default SkillList;