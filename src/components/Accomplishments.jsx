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
        setAccomplishments(prevAccomplishments => {
            return prevAccomplishments.map(accomplishment => 
                accomplishment.id === id ? { ...accomplishment, accomplishment: e.target.value } : accomplishment
            );
        });
    }

    const addAccomplishments = () => {
        setAccomplishments(prevState => {
            const newState = [...prevState];
            const newId = Date.now().toString();
            newState.push({id: newId, accomplishment: ''});
            return newState;
        })
    }

    const deleteAccomplishment = (e) => {
        setAccomplishments(prevState => {
            const newState = [...prevState];
            const id = (e.target.getAttribute('data-key'));
            const alteredState = newState.filter(accomplishment => id !== accomplishment.id);
            return alteredState;
        })
    }

    return (
        <div className="accomplishments">
            {accomplishments.map(({ id, accomplishment }) => (
                <div key={`accomplishment-${id}`}>
                    <p>{accomplishment}</p>
                    <button data-key={id} onClick={(e) => deleteAccomplishment(e)}>Delete Accomplishment</button>
                </div>
            ))}
            {accomplishments.map(({ id }) => (
                <div key={`accomplishment-input-${id}`}>
                    <Input label='Accomplishment' id={id} handleChange={(e) => handleChange(id, e)} />
                </div>
            ))}
            <button onClick={addAccomplishments}>Add Accomplishment</button>
        </div>
    )
}

export default Accomplishments