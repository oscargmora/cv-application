import { useState } from "react";
import Input from './InputFactory';
import map from 'lodash/map';
import { startCase } from "lodash";

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
    
    return (
        <div className="Leadership-detail">
            <div className="leadership-detail-elements">
                {
                    detail.map((detail) => (
                        <div key={`detail-element-${detail.id}`}>
                            <p>• {detail.detail}</p>
                            <button onClick={() => deleteDetail(detail.id)}>Delete Leadership Detail</button>
                        </div>
                    ))
                }
                {
                    detail.map((detail) => (
                        <div key={`detail-element-${detail.id}`}>
                            <Input label={detail.detail} id={detail.id} handleChange={handleChange} />
                        </div>
                    ))
                }
            </div>
            <button onClick={addDetail}>Add Leadership Detail</button>
        </div>
    )
}

function Leadership() {    
    const [Leadership, setLeadership] = useState(
        [
            {organization: 'Student Ambassadors at Broward College', startDate: 'Sep 2017', endDate: 'Jul 2018', title: 'Orientation Leader', city: 'Coconut Creek', state: 'FL', description: 'A volunteer program that allowed students in the organization to plan and run events for the rest of the students at Broward College. Served to also show students what classes they should take as a freshman if promoted.'}
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
            const addedLeadership = {organization: 'Student Ambassadors at Broward College', startDate: 'Sep 2017', endDate: 'Jul 2018', title: 'Orientation Leader', city: 'Coconut Creek', state: 'FL', description: 'A volunteer program that allowed students in the organization to plan and run events for the rest of the students at Broward College. Served to also show students what classes they should take as a freshman if promoted.'};
            newLeadership.push(addedLeadership);
            return newLeadership;
        })
    }
    
    return (
        <div className="Leadership">
            {
                Leadership.map((company, index) => (
                    <div key={index} className="company">
                        <div className={'company-elements'}>
                            {
                                map(company, (val, key) => (
                                    <p key={key}>{val}</p>
                                ))
                            }
                            <LeadershipDetail />
                        </div>
                        <div className={'company-input-card'}>
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
            <button onClick={addLeadership}>Add Leadership</button>
        </div>
    )
}

export default Leadership