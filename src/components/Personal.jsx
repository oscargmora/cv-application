import { useState } from "react";
import Input from "./InputFactory";
import map from 'lodash/map'

function Personal() {
    const [personal, setPersonal] = useState(
        {firstName: 'Oscar', lastName: 'Mora', address: '1823 Tamarind Ln', city: 'Coconut Creek', state: 'FL', zipCode: '33063', phoneNumber: '754-715-2802', email: 'moragoscar@outlook.com'}
    );

    const handleChange = (e) => {
        setPersonal(prevPersonal => {
            const newPersonal = {...prevPersonal};
            newPersonal[e.target.id] = e.target.value;
            return newPersonal;
        })
    }

    return (
        <div className="personal">
            <div className="personal-elements">
                {
                    map(personal, (val, key) => (
                        <div key={key}>
                            <p className="personal-element">{val}</p>
                        </div>
                    ))
                }
            </div>
            <div className="personal-details">
                <h2 id="personal-details-input-header">Personal Details</h2>
                <div className="personal-inputs">
                    <Input label='First Name' id="firstName" autoComplete='given-name' handleChange={(e) => handleChange(e)} />
                    <Input label='Last Name' id="lastName" autoComplete='family-name' handleChange={(e) => handleChange(e)} />
                    <Input label='Address' id="address" autoComplete='street-address' handleChange={(e) => handleChange(e)} />
                    <Input label='City' id="city" handleChange={(e) => handleChange(e)} />
                    <Input label='State' id="state" handleChange={(e) => handleChange(e)} />
                    <Input label='Zip Code' id="zipCode" autoComplete='postal-code' handleChange={(e) => handleChange(e)} />
                    <Input label='Phone Number' id="phoneNumber" type='tel' autoComplete='tel' handleChange={(e) => handleChange(e)} />
                    <Input label='Email' id="email" autoComplete='email' type='email'  handleChange={(e) => handleChange(e)} />
                </div>
            </div>
        </div>
    )
}

export default Personal