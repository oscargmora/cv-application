import { useState } from "react";
import PropTypes from 'prop-types';

const Input = ({label, id, handleChange, type}) => (
    <>
        <input label={label} id={id} name={id} onChange={handleChange} type={type || 'text'} />
    </>
)

Input.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    type: PropTypes.string
}

function Leadership() {
    return (
        <div className="leadership">

        </div>
    )
}

export default Leadership;