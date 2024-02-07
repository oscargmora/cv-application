import { useState } from "react";
import Input from "./InputFactory";
import trash from '../assets/trash-bin.png'

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
        <div className="skills">
                <div className="skill-elements resume-page">
                    <h1 className="skills-title">Skills</h1>
                    {
                        skills.map((skill) => (
                            <div key={`skill-element-${skill.id}`}>
                                <p>{skill.skill}</p>
                            </div>
                        ))
                    }
                </div>
            <div className="skill-input-card left-inputs">
                <h2>Skills</h2>
                {
                    skills.map((skill) => (
                        <div className="skill-input" key={`skill-input-${skill.id}`}>
                            <Input label={skill.skill} id={skill.id} handleChange={(e) => handleChange(e)} />
                            <button className="delete-button-skill-accomplishments" onClick={() => deleteSkill(skill.id)}>
                                <img className="delete-button-img" src={trash} alt="" />
                            </button>
                        </div>
                    ))
                }
            </div>
            <button className="add-button-skill-accomplishments left-inputs" onClick={addSkill}>Add Skill</button>
        </div>
    )
}

export default Skills