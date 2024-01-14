import { useState } from "react";
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { startCase } from "lodash";

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
    const [skills, setSkills] = useState(['HTML', 'JavaScript']);

    const handleChange = (index, e) => {
        setSkills(prevSkill => {
            const newSkill = [...prevSkill];
            newSkill[index] = e.target.value
            return newSkill;
        })
    }
    
    const addSkill = () => {
        setSkills(prevSkill => [...prevSkill, ''])
    }

    const deleteSkill = (index) => {
        setSkills(prevSkill => {
            const oldSkill = [...prevSkill];
            oldSkill.splice(index, 1);
            return oldSkill
        })
    }

    return (
        <div className="skills">
            {skills.map((val, index) => (
                <>
                    <p>{val}</p>
                    <button onClick={(e) => deleteSkill(index, e)}>Delete Skill</button>
                </>
            ))}
            {skills.map((val, index) => (
                <>
                    <Input label='Skill' id={val} handleChange={(e) => handleChange(index, e)} />
                </>
            ))}
            <button onClick={addSkill}>Add New Skill</button>
        </div>
    )
}

export default Skills