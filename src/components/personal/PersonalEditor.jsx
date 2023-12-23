import { useState } from 'react';
import PropTypes from 'prop-types';

function PersonalEditor({ onInputChange }) {
  const [name, setName] = useState('Oscar Mora');
  const [address, setAddress] = useState('1823 Tamarind Ln Coconut Creek, FL 33063');

  // Function to handle input change and call onInputChange prop
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setName(newValue);

    // Call the onInputChange prop with the new value
    onInputChange(newValue);
  };

  return (
    <>
      <div>
        {/* Use the handleInputChange function for the onChange event */}
        <input
          data-key='fullName'
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
      </div>
    </>
  );
}

PersonalEditor.propTypes = {
    onInputChange: PropTypes.func.isRequired,
};

export default PersonalEditor;
