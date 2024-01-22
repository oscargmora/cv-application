import PropTypes from 'prop-types';

const Input = ({label, id, handleChange, type, autoComplete, className}) => (
    <input label={label} className={className} placeholder={label} id={id} name={id} onChange={handleChange} type={type || 'text'} autoComplete={autoComplete || 'off'} />
)

Input.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    autoComplete: PropTypes.string,
    className: PropTypes.string,
}

export default Input