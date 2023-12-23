import { useState } from 'react';
import PersonalEditor from './PersonalEditor';

function Personal() {
  // State to manage the input value from PersonalEditor
  const [personalValue, setPersonalValue] = useState('Oscar Mora');
  const [addressValue, setAddressValue] = useState('1823 Tamarind Ln Coconut Creek, FL 33063');

  // Function to update the state with the input value
  const handlePersonalInputChange = (value) => {
    setPersonalValue(value);
  };

  return (
    <>
      <div>
        {/* Pass the function as a prop to PersonalEditor */}
        <PersonalEditor onInputChange={handlePersonalInputChange} />
        {/* Use the state value in the h1 element */}
        <h1>{personalValue}</h1>
        <p>{addressValue}</p>
        <p>754-715-2802</p>
        <p>moragoscar@outlook.com</p>
      </div>
    </>
  );
}

export default Personal;