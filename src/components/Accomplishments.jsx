import { useState } from "react";
import Input from "./InputFactory";
import trash from '../assets/trash-bin.png'

function Accomplishments() {
    const [accomplishments, setAccomplishments] = useState([
            {id: `detail-${Date.now().toString()}`, accomplishment: 'Accomplishment'},
    ]);

    const handleChange = (e) => {
        setAccomplishments(prevAccomplishments => {
            return prevAccomplishments.map(accomplishment =>
                accomplishment.id === e.target.id ? {...accomplishment, accomplishment: e.target.value}: accomplishment
            )
        })
    }

    const deleteAccomplishment = (id) => {
        setAccomplishments(prevAccomplishments => prevAccomplishments.filter(accomplishment => accomplishment.id !== id));
    }

    const addAccomplishment = () => {
        setAccomplishments(prevAccomplishments => {
            const newAccomplishments = [...prevAccomplishments];
            const newAccomplishment = {id: `detail-${Date.now().toString()}`, accomplishment: 'Accomplishment'};
            newAccomplishments.push(newAccomplishment);
            return newAccomplishments;
        })
    }

    return (
        <div className="accomplishments">
            <div className="accomplishments-elements">
                {
                    accomplishments.map((accomplishment) => (
                        <div key={`accomplishments-element-${accomplishment.id}`}>
                            <p>{accomplishment.accomplishment}</p>
                        </div>
                    ))
                }
            </div>
            <div className="accomplishments-input-card">
                <h2>Accomplishments</h2>
                {
                    accomplishments.map((accomplishment) => (
                        <div className="accomplishment-input" key={`accomplishments-input-${accomplishment.id}`}>
                            <Input label={accomplishment.accomplishment} id={accomplishment.id} handleChange={(e) => handleChange(e)} />
                            <button className="delete-button-skill-accomplishments" onClick={() => deleteAccomplishment(accomplishment.id)}>
                                <img className="delete-button-img" src={trash} alt="" />
                            </button>
                        </div>
                    ))
                }
            </div>
            <button className="add-button-skill-accomplishments" onClick={addAccomplishment}>Add Accomplishment</button>
        </div>
    )
}

export default Accomplishments