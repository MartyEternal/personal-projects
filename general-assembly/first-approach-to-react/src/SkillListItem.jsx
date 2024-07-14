function SkillListItem({ name, level }) {
    return (
        <li className="SkillListItem">
            <span>{name}</span>
            <span className="level">{`LEVEL ${level}`}</span>
        </li>
    )
}

export default SkillListItem;