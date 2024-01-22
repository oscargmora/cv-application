import { useState } from "react";
import Input from "./InputFactory";

function Skills() {
    const [skills, setSkills] = useState([
            {id: `skill-${Date.now().toString()}`, skill: 'Skill'},
    ]);

    const handleChange = (e) => {
        setSkills(prevSkills => {
            return prevSkills.map(skill => 
                skill.id === e.target.id ? {...skill, skill: e.target.value} : skill
            )
        })
    }

    const deleteSkill = (id) => {
        setSkills(prevSkills => {
            return prevSkills.filter((skill) => skill.id !== id)
        })
    }

    const addSkill = () => {
        setSkills(prevSkills => {
            const newSkills = [...prevSkills];
            const newSkill = {id: `skill-${Date.now().toString()}`, skill: 'Skill'};
            newSkills.push(newSkill);
            return newSkills;
        })
    }

    return (
        <div className="skills-">
            {
                skills.map((skill) => (
                    <div key={`skill-element-${skill.id}`}>
                        <p>{skill.skill}</p>
                        <button onClick={() => deleteSkill(skill.id)}>Delete Skill</button>
                    </div>
                ))
            }
            {
                skills.map((skill) => (
                    <div key={`skill-input-${skill.id}`}>
                        <Input label={skill.skill} id={skill.id} handleChange={(e) => handleChange(e)} />
                    </div>
                ))
            }
            <button onClick={addSkill}>Add Skill</button>
        </div>
    )
}

export default Skills