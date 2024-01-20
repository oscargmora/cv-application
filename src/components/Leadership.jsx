import { useState } from "react";
import PropTypes from 'prop-types';
import map from 'lodash/map';

const Input = ({label, id, handleChange, type}) => (
    <>
        <input placeholder={label} label={label} id={id} name={id} onChange={handleChange} type={type || 'text'} />
    </>
)

Input.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    type: PropTypes.string
}

function LeadershipSection({leadership, handleChange}) {
    const [details, setDetails] = useState(['Leadership Details', 'Leadership Details', 'Leadership Details']);

    return (
        <div className="leadership-details">
            {
                map(leadership, (val, key) => (
                    <p key={key}>{val}</p>
                ))
            }
            <Input label="Location"  id="location" handleChange={handleChange} />
            <Input label="Start Date"  id="start-date" handleChange={handleChange} />
            <Input label="End Date"  id="end-date" handleChange={handleChange} />
            <Input label="Title"  id="title" handleChange={handleChange} />
            <Input label="City"  id="city" handleChange={handleChange} />
            <Input label="Description"  id="description" handleChange={handleChange} />
        </div>
    )
}

function Leadership() {
    const [leadership, setLeadership] = useState([
        {location: 'Student Ambassadors at Broward College', startDate: 'Sep 2017', endDate:'Jul 2018', title: 'Orientation Leader', city: 'Coconut Creek, FL', description: 'A volunteer program that allowed students in the organization to plan and run events for the rest of the students at Broward College. Served to also show students what classes they should take as a freshman if promoted.'}
    ])

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="leadership">
            {
                leadership.map((leadership, index) => (
                    <LeadershipSection key={`leadership-section-${index}`} leadership={leadership} handleChange={(e) => handleChange(e)} />
                ))
            }
            
        </div>
    )
}

export default Leadership;