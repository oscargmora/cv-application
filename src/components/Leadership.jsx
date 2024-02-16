import { useState } from "react";
import Input from './InputFactory';
import map from 'lodash/map';
import { startCase } from "lodash";
import close from '../assets/close.png'
import pen from '../assets/pen.png'
import checkMark from '../assets/check-mark.png'

function LeadershipDetail() {
    const [detail, setDetail] = useState([
        {id: `detail ${Date.now().toString()}`, detail: 'Leadership Detail'},
    ]);

    const handleChange = (e) => {
        setDetail(prevDetail => {
            return prevDetail.map(detail => 
                detail.id === e.target.id ? {...detail, detail: e.target.value} : detail
            )
        })
    }

    const deleteDetail = (id) => {
        setDetail(prevDetail => prevDetail.filter(detail => detail.id !== id));
    }

    const addDetail = () => {
        setDetail(prevDetail => {
            const newDetail = [...prevDetail];
            const newAddition = {id: `detail ${Date.now().toString()}`, detail: 'Leadership Detail'};
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
        <div className="leadership-detail">
            <div className="leadership-detail-elements">
                {
                    detail.map((detail) => (
                        <div className="detail-element-div" key={`detail-element-${detail.id}`}>
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
                {
                    detail.map((detail) => (
                        <div id={`div-${detail.id}`} className='description-detail-hidden' key={`detail-element-${detail.id}`}>
                            <Input label={detail.detail} id={detail.id} handleChange={handleChange} />
                            <button onClick={() => submitDetail(detail.id)} className="submit-button">
                                <img className="detail-check-mark-button-img" src={checkMark} alt="" />
                            </button>
                        </div>
                    ))
                }
                
            </div>
            <button className="add-button hidden" onClick={addDetail}>Add Leadership Detail</button>
        </div>
    )
}

function Leadership() {    
    const [Leadership, setLeadership] = useState(
        [
            {organization: 'Student Ambassadors at Broward College', startDate: 'Sep 2017', endDate: 'Jul 2018', jobTitle: 'Orientation Leader', city: 'Coconut Creek', state: 'FL', description: 'A volunteer program that allowed students in the organization to plan and run events for the rest of the students at Broward College. Served to also show students what classes they should take as a freshman if promoted.'}
        ]
    )
    
    function handleChange(e, index) {
        setLeadership(prevLeadership => {
            const newLeadership = [...prevLeadership];
            newLeadership[index][e.target.className] = e.target.value;
            return newLeadership;
        })
    }

    function deleteLeadership(index) {
        setLeadership(prevLeadership => {
            const newLeadership = [...prevLeadership];
            newLeadership.splice(index, 1);
            return newLeadership;
        })
    }

    function addLeadership() {
        setLeadership(prevLeadership => {
            const newLeadership = [...prevLeadership];
            const addedLeadership = {organization: 'Student Ambassadors at Broward College', startDate: 'Sep 2017', endDate: 'Jul 2018', jobTitle: 'Orientation Leader', city: 'Coconut Creek', state: 'FL', description: 'A volunteer program that allowed students in the organization to plan and run events for the rest of the students at Broward College. Served to also show students what classes they should take as a freshman if promoted.'};
            newLeadership.push(addedLeadership);
            console.log(newLeadership)
            return newLeadership;
        })
    }
    
    return (
        <div className="Leadership">
            <h1 className="leadership-title">LEADERSHIP</h1>
            {
                Leadership.map((company, index) => (
                    <div key={index} className="leadership-div">
                        <div className='company-elements resume-page'>
                            {
                                map(company, (val, key) => (
                                    <p className={`leadership-${key}`} key={key}>{val}</p>
                                ))
                            }
                            <LeadershipDetail />
                        </div>
                        <div className='company-input-card left-inputs'>
                            <h2>Leadership</h2>
                            <div className="company-inputs">
                                {
                                    map(company, (val, key) => (
                                        <Input key={`company-input-${key}`} label={startCase(key)} className={key} id={'Leadership-' + index + '-' + val} handleChange={(e) => handleChange(e, index)} />
                                    ))
                                }
                            </div>
                            <button className="delete-button"  onClick={() => deleteLeadership(index)}>Delete Leadership</button>
                        </div>
                    </div>
                ))
            }
            <button className="add-button left-inputs" onClick={addLeadership}>Add Leadership</button>
        </div>
    )
}

export default Leadership