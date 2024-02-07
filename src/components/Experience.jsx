import { useState } from "react";
import Input from './InputFactory';
import map from 'lodash/map';
import { startCase } from "lodash";
import close from '../assets/close.png'
import pen from '../assets/pen.png'
import checkMark from '../assets/check-mark.png'

function ExperienceDetail() {
    const [detail, setDetail] = useState(
        [
            {id: `detail-experience-${Date.now().toString()}`, detail: 'Job Detail'},
        ]
    );

    const handleChange = (e) => {
        setDetail(prevDetail => {
            return prevDetail.map(detail =>
                detail.id === e.target.id ? {...detail, detail: e.target.value} : detail
            )
        })
    }

    const deleteDetail = (id) => {
        setDetail(prevDetail => prevDetail.filter((detail) => detail.id !== id))
    }

    const addDetail = () => {
        setDetail(prevDetail => {
            const newDetail = [...prevDetail];
            const newAddition = {id: `detail-experience-${Date.now().toString()}`, detail: 'Job Detail'};
            newDetail.push(newAddition);
            return newDetail;
        })
    }

    const editDetail = (id) => {
        const input = document.getElementById(`div-${id}`)
        input.classList.replace('description-detail-hidden', 'description-detail')
    }

    const submitDetail = (id) => {
        const input = document.getElementById(`div-${id}`)
        input.classList.replace('description-detail', 'description-detail-hidden')
    }

    return (
        <div className="experience-detail">
            <div className="experience-detail-elements">
                {
                    detail.map((detail) => (
                        <div className="detail-element-div" key={`experience-detail-elements-${detail.id}`}>
                            <p>• {detail.detail}</p>
                            <div className="detail-buttons hidden">
                                <button className="detail-delete-button" onClick={() => deleteDetail(detail.id)}>
                                    <img className="detail-delete-button-img" src={close} alt="" />
                                </button>
                                <button className="detail-edit-button" onClick={() => editDetail(detail.id)}>
                                    <img className="detail-edit-button-img" src={pen} alt="" />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="experience-detail-inputs">
                {
                    detail.map((detail) => (
                        <div id={`div-${detail.id}`} className='description-detail-hidden' key={`experience-detail-inputs-${detail.id}`}>
                            <Input label={detail.detail} id={detail.id} handleChange={handleChange} />
                            <button onClick={() => submitDetail(detail.id)} className="submit-button">
                                <img className="detail-check-mark-button-img" src={checkMark} alt="" />
                            </button>
                        </div>
                    ))
                }
            </div>
            <button className="add-button hidden" onClick={addDetail}>Add Job Detail</button>
        </div>
    )
}

function Experience() {    
    const [experience, setExperience] = useState(
        [
            {company: 'Seawood Builders II, LLC', startDate: 'June 2021', endDate: 'Current', jobTitle: 'Accountant', city: 'Deerfield Beach', state: 'FL', referenceName: 'Brigitte Gomez', referencePhoneNumber: '954-914-2716', description: 'Worked together with a team of accountants, managing costs and handling accounts when dealing with our construction projects and owner/subcontractor work.'},
        ]
    )
    
    function handleChange(e, index) {
        setExperience(prevExperience => {
            const newExperience = [...prevExperience];
            newExperience[index][e.target.className] = e.target.value;
            return newExperience;
        })
    }

    function deleteExperience(index) {
        setExperience(prevExperience => {
            const newExperience = [...prevExperience];
            newExperience.splice(index, 1);
            return newExperience;
        })
    }

    function addExperience() {
        setExperience(prevExperience => {
            const newExperience = [...prevExperience];
            const addedExperience = {company: 'Ross, Inc.', startDate: 'September 2019', endDate: 'January 2021', jobTitle: 'Sales Associate', city: 'Gainesville', state: 'FL', referenceName: 'Daniel Kane', referenceNumber: '727-452-2450', description: 'Supported multiple stages of the retailing process to increase customer satisfaction, reduce loss of items through shoplifting, and organize clothes and accessories, resulting in our store having the most sales out of any other in the area.'};
            newExperience.push(addedExperience);
            return newExperience;
        })
    }
    
    return (
        <div className="experience">
            <h1 className="experience-title">EXPERIENCE</h1>
            {
                experience.map((company, index) => (
                    <div key={index} className="company-div">
                        <div className='company-elements resume-page'>
                            {
                                map(company, (val, key) => (
                                    <p className={`experience-${key}`} key={key}>{val}</p>
                                ))
                            }
                            <ExperienceDetail />
                        </div>
                        <div className='company-input-card left-inputs'>
                            <h2 id="experience-header">Work Experience</h2>
                            <div className={'company-inputs'}>
                                {
                                    map(company, (val, key) => (
                                        <Input key={`company-input-${key}`} label={startCase(key)} className={key} id={'experience-' + index + '-' + val} handleChange={(e) => handleChange(e, index)} />
                                    ))
                                }
                            </div>
                            <button className="delete-button" onClick={() => deleteExperience(index)}>Delete Experience</button>
                        </div>
                    </div>
                ))
            }
            <button className="add-button left-inputs" onClick={addExperience}>Add Experience</button>
        </div>
    )
}

export default Experience