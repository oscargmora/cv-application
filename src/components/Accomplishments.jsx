import { useState } from "react";
import PropTypes from 'prop-types';

const Input = ({label, id, handleChange, type}) => (
    <>
        <input placeholder={label} label={label} name={id} id={id} onChange={handleChange} type={type || 'text'} />
    </>
)

Input.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    type: PropTypes.string
}

function Accomplishments() {
    const [accomplishments, setAccomplishments] = useState([
        {id: '5', accomplishment: 'Kaizen Award'},
        {id: '6', accomplishment: "President's Award"},
        {id: '7', accomplishment: 'Drummer for Farewell to Arms'}
    ])

    const handleChange = (id, e) => {
        setAccomplishments(prevSkills => {
            return prevSkills.map(skill => 
                skill.id === id ? { ...skill, skill: e.target.value } : skill
            );
        });
    }

    const addAccomplishments = () => {
        setAccomplishments(prevState => {
            const newState = [...prevState];
            console.log(newState);
        })
    }

    const deleteAccomplishment = () => {
        console.log(accomplishments)
    }

    return (
        <div className="accomplishments">
            {accomplishments.map(({ id, accomplishment }) => (
                <div key={`accomplishment-${id}`}>
                    <p>{accomplishment}</p>
                    <button onClick={deleteAccomplishment}>Delete Accomplishment</button>
                </div>
            ))}
            {accomplishments.map(({ id }) => (
                <div key={`accomplishment-input-${id}`}>
                    <Input label='Accomplishment' id={id} handleChange={(e) => handleChange(id, e)} />
                </div>
            ))}
        </div>
    )
}

export default Accomplishments