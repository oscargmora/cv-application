import { useState } from "react";
import EducationEditor from "./EducationEditor";

function Education() {
  const [universityValue, setUniversityValue] = useState('University of Florida');
  const [universityMajorValue, setUniversityMajorValue] = useState('School of Economics');
  const [universityGraduationDateValue, setUniversityGraduationDateValue] = useState('April 2022');
  const [universityDegreeValue, setUniversityDegreeValue] = useState('Bachelor in Economics');
  const [universityCityValue, setUniversityCityValue] = useState('Gainesville, FL');
  const [universityGPAValue, setUniversityGPAValue] = useState('3.54 Cum Laude');
  const [highSchoolValue, setHighSchoolValue] = useState('College Academy');
  const [highSchoolGraduationDateValue, setHighSchoolGraduationDateValue] = useState('June 2019');
  const [highSchoolSpecializationValue, setHighSchoolSpecializationValue] = useState('Associate of Arts');
  const [highSchoolCityValue, setHighSchoolCityValue] = useState('Coconut Creek, FL');
  const [highSchoolGPAValue, setHighSchoolGPAValue] = useState('3.72 Magna Cum Laude');

  const handleEducationInputChange = (dataKey, value) => {
    if (dataKey === 'university') {
      setUniversityValue(value);
    } else if (dataKey === 'universityMajor') {
      setUniversityMajorValue(value);
    } else if (dataKey === 'universityGraduationDate') {
      setUniversityGraduationDateValue(value);
    } else if (dataKey === 'universityDegree') {
      setUniversityDegreeValue(value);
    } else if (dataKey === 'universityCity') {
      setUniversityCityValue(value);
    } else if (dataKey === 'universityGPA') {
      setUniversityGPAValue(value);
    } else if (dataKey === 'highSchool') {
      setHighSchoolValue(value);
    } else if (dataKey === 'highSchoolGraduationDate') {
      setHighSchoolGraduationDateValue(value);
    } else if (dataKey === 'highSchoolSpecialization') {
      setHighSchoolSpecializationValue(value);
    } else if (dataKey === 'highSchoolCity') {
      setHighSchoolCityValue(value);
    } else if (dataKey === 'highSchoolGPA') {
      setHighSchoolGPAValue(value);
    }
  };

  return (
    <>
      <div>
        <EducationEditor onInputChange={handleEducationInputChange} />
        <h2>Education</h2>
        <h3>{universityValue}</h3>
        <p>{universityMajorValue}</p>
        <p>{universityGraduationDateValue}</p>
        <p>{universityDegreeValue}</p>
        <p>{universityCityValue}</p>
        <p>{universityGPAValue}</p>
        <h3>{highSchoolValue}</h3>
        <p>{highSchoolGraduationDateValue}</p>
        <p>{highSchoolSpecializationValue}</p>
        <p>{highSchoolCityValue}</p>
        <p>{highSchoolGPAValue}</p>
      </div>
    </>
  )
}

export default Education