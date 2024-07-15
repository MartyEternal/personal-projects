import { useState } from "react";

function NewSkillForm({ onSubmit }) {
    const [newSkill, setNewSkill] = useState({
        name: "",
        level: 3,
    });

    function handleChange(evt) {
        const { name, value } = evt.target;
        setNewSkill({
            ...newSkill,
            [name]: name === "level" ? parseInt(value) : value,
        });
    }

    function handleAddSkill(evt) {
        evt.preventDefault();
        onSubmit(newSkill);
        setNewSkill({ name: "", level: 3 });
    }

    return (
        <div>
            <form className="NewSkillForm" onSubmit={handleAddSkill}>
                <label for="skill">Skill</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={newSkill.name}
                    onChange={handleChange}
                    required
                    placeholder="New Skill Here"
                />

                <label for="level">Level</label>
                <select
                    id="level"
                    name="level"
                    value={newSkill.level}
                    onChange={handleChange}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>

                <button type="submit">ADD SKILL</button>
            </form>
        </div>
    )
}

export default NewSkillForm;