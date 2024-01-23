import { useState } from "react";
import Input from "./InputFactory";
import map from 'lodash/map';
import { startCase } from "lodash";

function Education() {
    const [education, setEducation] = useState(
        [
            {university: 'University of Florida', school: 'Liberal Sciences School of Economics', graduationDate: 'April 2022', degree: 'Bachelor of Arts in Economics', city: 'Gainesville', state: 'FL', GPA: '3.54 Cum Laude'},
            {university: 'College Academy', school: 'Broward College', graduationDate: 'June 2019', degree: 'Associate of Arts', city: 'Coconut Creek', state: 'FL', GPA: '3.72 Magna Cum Laude'}
        ]
    )

    function handleChange(e, index) {
        setEducation(prevEducation => {
            const newEducation = [...prevEducation];
            newEducation[index][e.target.className] = e.target.value;
            return newEducation;
        })
    }

    function deleteEducation(index) {
        setEducation(prevEducation => {
            const newEducation = [...prevEducation];
            newEducation.splice(index, 1);
            return newEducation;
        })
    }

    function addEducation() {
        setEducation(prevEducation => {
            const newEducation = [...prevEducation];
            const addedEducation = {university: 'College Academy', school: 'Broward College', graduationDate: 'June 2019', degree: 'Associate of Arts', city: 'Coconut Creek', state: 'FL', GPA: '3.72 Magna Cum Laude'};
            newEducation.push(addedEducation);
            return newEducation;
        })
    }

    return (
        <div className="education">
            {
                education.map((school, index) => (
                    <div key={`school-${index}`} id={`school-${index}`} className="school">
                        <div key={`${school}-element`} className="school-elements">
                            {
                                map(school, (val, key) => (
                                    <p key={`school-element-${key}`}>{val}</p>
                                ))
                            }
                        </div>
                        <div className="school-input-card">
                            <h2 id="education-header">Education</h2>
                            <div className="school-inputs">
                                {
                                    map(school, (val, key) => (
                                        <Input key={`school-input-${key}`} label={startCase(key)} className={key} id={'education-' + index + '-' + val} handleChange={(e) => handleChange(e, index)} />
                                    ))
                                }
                            </div>
                            <button className="delete-button" onClick={() => deleteEducation(index)}>Delete</button>
                        </div>
                    </div>
                ))
            }
            <button onClick={addEducation}>Add Education</button>
        </div>
    )
}

export default Education