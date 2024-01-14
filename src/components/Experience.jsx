import { useState } from "react";
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { startCase } from "lodash";

const Input = ({label, id, handleChange, type}) => (
    <>
        <input placeholder={label} label={label} id={id} name={id} onChange={handleChange} type={type || 'text'} />
    </>
)

Input.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
    handleJobDetailSection: PropTypes.func,
    type: PropTypes.string,
}

function JobDetailSection({ details, handleJobDetailSection }) {
    const [jobDetails, setJobDetails] = useState(['Head Accountant for project “Beachside”, managing all aspects of financial responsibilities, and leading a team of other accountants towards the completion of the job, whilst working closely with the owner.', 'Head accountant for Construction Specialties of America, a materials and framing subcontractor for Seawood. I managed all AP and AR for this company, working closely with project managers, and the GCs for the job.', 'Commandeered project start-ups by calculating projected estimates and creating spreadsheets to aid in day-to-day operations of daily tasks, such as balance sheets, change orders, check releases, etc.']);

    const handleInputChange = (index, value) => {
        setJobDetails(prevDetails => {
            const newDetails = [...prevDetails];
            newDetails[index] = value;
            return newDetails;
        });
        handleJobDetailSection && handleJobDetailSection(index, value);
    };

    return (
        <div className="job-details">
            {details.map((val, index) => (
                <>
                    <p key={index}>{`• ${jobDetails[index]}`}</p>
                    <Input
                        key={index}
                        className="job-detail-input"
                        label={val}
                        id={`jobDetail-${index}`}
                        handleChange={(e) => handleInputChange(index, e.target.value)}
                    />
                </>
            ))}
        </div>
    );
}

JobDetailSection.propTypes = {
    details: PropTypes.array.isRequired,
    handleJobDetailSection: PropTypes.func
}

function ExperienceSection({ experience, handleChange }) {
    const [details, setDetails] = useState(['Job Detail', 'Job Detail', 'Job Detail']);

    const handleJobDetailSection = (index, value) => {
        setDetails(prevDetails => {
            const newDetails = [...prevDetails];
            newDetails[index] = value;
            return newDetails;
        });
    };
    
    return (
        <div>
            {
                map(experience, (val, key) => (
                    <p key={key}>{`${startCase(key)}: ${val}`}</p>
                ))
            }
            <JobDetailSection details={details} handleJobDetailSection={handleJobDetailSection} />
            <Input label="Company" id="company" handleChange={handleChange} />
            <Input label="Start Date" id="startDate" handleChange={handleChange} />
            <Input label="End Date" id="endDate" handleChange={handleChange} />
            <Input label="Job Title" id="jobTitle" handleChange={handleChange} />
            <Input label="City" id="city" handleChange={handleChange} />
            <Input label="Reference" id="reference" handleChange={handleChange} />
            <Input label='Reference Email' id='referenceEmail' type='email' handleChange={handleChange} />
            <Input label="Reference Phone Number" id="referencePhoneNumber" type='tel' handleChange={handleChange} />
            <Input label="Job Summary" id="jobSummary" handleChange={handleChange} />
        </div>
    )
}

ExperienceSection.propTypes = {
    experience: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
}

function Experience() {
    const [experiences, setExperiences] = useState([
        {company: 'Seawood Builders', startDate: 'June 2021', endDate: 'Current', jobTitle: 'Accountant', city: 'Deerfield Beach', reference: 'Brigitte Gomez', referenceEmail: 'bgomez@seawoodbuilders.com', referencePhoneNumber: '954-914-2716', jobSummary: 'Worked together with a team of accountants, managing costs and handling accounts when dealing with our construction projects and owner/subcontractor work.'}
    ])

    const handleChange = () => {
        setExperiences(prevState => [...prevState, {company: 'Seawood Builders', startDate: 'June 2021', endDate: 'Current', jobTitle: 'Accountant', city: 'Deerfield Beach', reference: 'Brigitte Gomez', referencePhoneNumber: '954-914-2716', jobSummary: 'Worked together with a team of accountants, managing costs and handling accounts when dealing with our construction projects and owner/subcontractor work.'}])
    }

    const handleSectionChange = (index, name, value) => {
        setExperiences(prevState => {
            const newExperiences = [...prevState];
            newExperiences[index] = {
                ...newExperiences[index],
                [name]: value
            }
            return newExperiences
        });
    }

    return (
        <div className="experience">
            {
                experiences.map((experience, index) => (
                    <ExperienceSection key={index} experience={experience} handleChange={(e) =>  handleSectionChange(index, e.target.name, e.target.value)} />
                ))
            }
            <button onClick={handleChange}>Add Experience</button>
        </div>
    )
}

export default Experience