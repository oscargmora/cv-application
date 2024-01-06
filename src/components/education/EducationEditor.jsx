import { useState } from "react";
import PropTypes from 'prop-types';

function EducationEditor({ onInputChange }) {
    const [university, setUniversity] = useState('University of Florida');
    const [universityMajor, setUniversityMajor] = useState('School of Economics');
    const [universityGraduationDate, setUniversityGraduationDate] = useState('April 2022');
    const [universityDegree, setUniversityDegree] = useState('Bachelor in Economics');
    const [universityCity, setUniversityCity] = useState('Gainesville, FL');
    const [universityGPA, setUniversityGPA] = useState('3.54 Cum Laude');
    const [highSchool, setHighSchool] = useState('College Academy');
    const [highSchoolGraduationDate, setHighSchoolGraduationDate] = useState('June 2019');
    const [highSchoolSpecialization, setHighSchoolSpecialization] = useState('Associate of Arts');
    const [highSchoolCity, setHighSchoolCity] = useState('Coconut Creek, FL');
    const [highSchoolGPA, setHighSchoolGPA] = useState('3.72 Magna Cum Laude');

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        const dataKey = event.target.getAttribute('data-key');

        if (dataKey === 'university') {
            setUniversity(newValue);
        } else if (dataKey === 'universityMajor') {
            setUniversityMajor(newValue);
        } else if (dataKey === 'universityGraduationDate') {
            setUniversityGraduationDate(newValue);
        } else if (dataKey === 'universityDegree') {
            setUniversityDegree(newValue);
        } else if (dataKey === 'universityCity') {
            setUniversityCity(newValue);
        } else if (dataKey === 'universityGPA') {
            setUniversityGPA(newValue);
        } else if (dataKey === 'highSchool') {
            setHighSchool(newValue);
        } else if (dataKey === 'highSchoolGraduationDate') {
            setHighSchoolGraduationDate(newValue);
        } else if (dataKey === 'highSchoolSpecialization') {
            setHighSchoolSpecialization(newValue);
        } else if (dataKey === 'highSchoolCity') {
            setHighSchoolCity(newValue);
        } else if (dataKey === 'highSchoolGPA') {
            setHighSchoolGPA(newValue);
        }

        onInputChange(dataKey, newValue);
    }

    return (
        <>
          <div>
            <input
              data-key='university'
              onChange={handleInputChange}
              type="text"
              placeholder="University"
              value={university}
            />
            <input
              data-key='universityMajor'
              onChange={handleInputChange}
              type="text"
              placeholder="University Major"
              value={universityMajor}
            />
            <input
              data-key='universityGraduationDate'
              onChange={handleInputChange}
              type="text"
              placeholder="University Graduation Date"
              value={universityGraduationDate}
            />
            <input
              data-key='universityDegree'
              onChange={handleInputChange}
              type="text"
              placeholder="University Degree"
              value={universityDegree}
            />
            <input
              data-key='universityCity'
              onChange={handleInputChange}
              type="text"
              placeholder="University City"
              value={universityCity}
            />
            <input
              data-key='universityGPA'
              onChange={handleInputChange}
              type="text"
              placeholder="University GPA"
              value={universityGPA}
            />
            <input
              data-key='highSchool'
              onChange={handleInputChange}
              type="text"
              placeholder="High School"
              value={highSchool}
            />
            <input
              data-key='highSchoolGraduationDate'
              onChange={handleInputChange}
              type="text"
              placeholder="High School Graduation Date"
              value={highSchoolGraduationDate}
            />
            <input
              data-key='highSchoolSpecialization'
              onChange={handleInputChange}
              type="text"
              placeholder="High School Specialization"
              value={highSchoolSpecialization}
            />
            <input
              data-key='highSchoolCity'
              onChange={handleInputChange}
              type="text"
              placeholder="High School City"
              value={highSchoolCity}
            />
            <input
              data-key='highSchoolGPA'
              onChange={handleInputChange}
              type="text"
              placeholder="High School GPA"
              value={highSchoolGPA}
            />
          </div>
        </>
    );
}

EducationEditor.propTypes = {
    onInputChange: PropTypes.func.isRequired,
};

export default EducationEditor;