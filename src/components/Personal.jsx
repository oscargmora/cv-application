import { useState } from "react";
import PropTypes from "prop-types";
import map from 'lodash/map';
import { startCase } from "lodash";

const Input = ({label, id, handleChange, type}) => (
    <>
        <input placeholder={label} type={type || 'text'} id={id} name={id} onChange={handleChange} />
    </>
)

Input.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    type: PropTypes.string,
};

function Personal() {
    const [form, setForm] = useState({name: 'Oscar Mora', address: '1823 Tamarind Ln', city: 'Coconut Creek', state: 'FL', zipCode: '33063', phoneNumber: '754-715-2802', email: 'oscgmora@gmail.com'});

    function handleChange(e) {
        const {name, value} = e.target;

        setForm(prevState => ({
            ...prevState,
            [name]:value,
        }))
    }

    return (
        <div className="personal">
        {
            map(form, (val, key) => (
                <p key={key}>{`${startCase(key)}: ${val}`}</p>
            ))
        }
        <Input label='Name' id='name' handleChange={handleChange} />
        <Input label='Address' id='address' handleChange={handleChange} />
        <Input label='City' id='city' handleChange={handleChange} />
        <Input label='State' id='state' handleChange={handleChange} />
        <Input label='Zip Code' id='zip-code' handleChange={handleChange} />
        <Input label='Phone Number' id='phone-number' type='tel' handleChange={handleChange} />
        <Input label='Email' id='email' type='email' handleChange={handleChange} />
        </div>
    )
}

export default Personal;