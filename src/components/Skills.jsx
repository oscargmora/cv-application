import { useState } from "react";
import PropTypes from 'prop-types';

const Input = ({label, id, handleChange, type}) => (
    <>
        <input placeholder={label} label={label} id={id} name={id} onChange={handleChange} type={type || 'text'} />
    </>
)

Input.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    type: PropTypes.string
}

function Skills() {
    const [skills, setSkills] = useState([
        { id: '1', skill: 'HTML' },
        { id: '2', skill: 'JavaScript' },
        { id: '3', skill: 'CSS' }
    ]);

    const handleChange = (id, e) => {
        setSkills(prevSkills => {
            return prevSkills.map(skill => 
                skill.id === id ? { ...skill, skill: e.target.value } : skill
            );
        });
    }
    
    const addSkill = () => {
        setSkills(prevSkills => [...prevSkills, { id: Date.now().toString(), skill: '' }]);
    }

    const deleteSkill = (id) => {
        setSkills(prevSkills => prevSkills.filter(skill => skill.id !== id));
    }

    return (
        <div className="skills">
            {skills.map(({ id, skill }) => (
                <div key={`skill-${id}`}>
                    <p>{skill}</p>
                    <button onClick={() => deleteSkill(id)}>Delete Skill</button>
                </div>
            ))}
            {skills.map(({ id }) => (
                <div key={`input-${id}`}>
                    <Input label='Skill' id={id} handleChange={(e) => handleChange(id, e)} />
                </div>
            ))}
            <button onClick={addSkill}>Add New Skill</button>
        </div>
    )
}

export default Skills;
