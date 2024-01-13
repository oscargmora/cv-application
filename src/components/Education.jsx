import { useState } from "react";
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { startCase } from "lodash";

const Input = ({label, id, handleChange, type, }) => (
    <>
        <input placeholder={label} label={label} id={id} name={id} type={type || 'text'} onChange={handleChange} />
    </>
)

Input.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    type: PropTypes.string,
}

function EducationSection({ education, handleChange }) {
    return (
        <div className="education-section">
            {
                map(education, (val, key) => (
                    <p key={key}>{`${startCase(key)}: ${val}`}</p>
                ))
            }
            <Input label='School' id='school' handleChange={handleChange} />
            <Input label='School Major' id='school-major' handleChange={handleChange} />
            <Input label='Graduation Date' id='date' handleChange={handleChange} />
            <Input label='Degree' id='degree' handleChange={handleChange} />
            <Input label='City' id='city' handleChange={handleChange} />
            <Input label='GPA' id='gpa' handleChange={handleChange} />
        </div>
    )
}

EducationSection.propTypes = {
    education: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
}

function Education() {
    const [educations, setEducations] = useState([
        { school: 'University of Florida', schoolMajor: 'Liberal Sciences School of Economics', graduationDate: 'April 2019', degree: 'Bachelor of Arts in Economics', city: 'Gainesville, FL', GPA: '3.54 Cum Laude' }
    ])

    const handleChange = () => {
        setEducations(prevEducations => [...prevEducations, { school: 'University of Florida', schoolMajor: 'Liberal Sciences School of Economics', graduationDate: 'April 2019', degree: 'Bachelor of Arts in Economics', city: 'Gainesville, FL', GPA: '3.54 Cum Laude' }]);
    }

    const handleSectionChange = (index, field, value) => {
        setEducations(prevEducations => {
            const newEducations = [...prevEducations];
            newEducations[index] = {
                ...newEducations[index],
                [field]: value
            };
            return newEducations;
        });
    }

    return (
        <div className="education">
            {educations.map((education, index) => (
                <EducationSection key={index} education={education} handleChange={(e) => handleSectionChange(index, e.target.name, e.target.value)} />
            ))}
            <button onClick={handleChange}>Add Education</button>
        </div>
    );
}

export default Education;