import { useState } from 'react';
import PropTypes from 'prop-types';

function PersonalEditor({ onInputChange }) {
  const [name, setName] = useState('Oscar Mora');
  const [address, setAddress] = useState('1823 Tamarind Ln Coconut Creek, FL 33063');
  const [phone, setPhone] = useState('754-715-2802');
  const [email, setEmail] = useState('oscgmora@gmail.com');

  // Function to handle input change and call onInputChange prop
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    const dataKey = event.target.getAttribute('data-key');
    
    if (dataKey === 'name') {
      setName(newValue);
    } else if (dataKey === 'address') {
      setAddress(newValue);
    } else if (dataKey === 'phone') {
      setPhone(newValue);
    } else if (dataKey === 'email') {
      setEmail(newValue);
    }

    // Call the onInputChange prop with the new value
    onInputChange(dataKey, newValue);
  };

  return (
    <>
      <div>
        {/* Use the handleInputChange function for the onChange event */}
        <input
          data-key='name'
          onChange={handleInputChange}
          type="text"
          placeholder="First and Last Name"
          value={name}
        />
        <input
          data-key='address'
          onChange={handleInputChange}
          type="text"
          placeholder="Address"
          value={address}
        />
        <input
          data-key='phone'
          onChange={handleInputChange}
          type="tel"
          placeholder="Phone Number"
          value={phone}
        />
        <input
          data-key='email'
          onChange={handleInputChange}
          type="email"
          placeholder="E-Mail"
          value={email}
        />
      </div>
    </>
  );
}

PersonalEditor.propTypes = {
    onInputChange: PropTypes.func.isRequired,
};

export default PersonalEditor;
