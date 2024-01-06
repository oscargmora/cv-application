import { useState } from 'react';
import PersonalEditor from './PersonalEditor';

function Personal() {
  // State to manage the input value from PersonalEditor
  const [personalValue, setPersonalValue] = useState('Oscar Mora');
  const [addressValue, setAddressValue] = useState('1823 Tamarind Ln Coconut Creek, FL 33063');
  const [phoneValue, setPhoneValue] = useState('754-715-2802');
  const [emailValue, setEmailValue] = useState('oscgmora@gmail.com');

  // Function to update the state with the input value
  const handlePersonalInputChange = (dataKey, value) => {
    if (dataKey === 'name') {
      setPersonalValue(value);
    } else if (dataKey === 'address') {
      setAddressValue(value);
    } else if (dataKey === 'phone') {
      setPhoneValue(value);
    } else if (dataKey === 'email') {
      setEmailValue(value);
    }
  };

  return (
    <>
      <div>
        {/* Pass the function as a prop to PersonalEditor */}
        <PersonalEditor onInputChange={handlePersonalInputChange} />
        {/* Use the state value in the h1 element */}
        <h1>{personalValue}</h1>
        <p>{addressValue}</p>
        <p>{phoneValue}</p>
        <p>{emailValue}</p>
      </div>
    </>
  );
}

export default Personal;