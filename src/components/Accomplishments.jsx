import { useState } from "react";
import Input from "./InputFactory";

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
                            <button onClick={() => deleteAccomplishment(accomplishment.id)}>Delete Accomplishment</button>
                        </div>
                    ))
                }
            </div>
            <div className="accomplishments-inputs">
                {
                    accomplishments.map((accomplishment) => (
                        <div key={`accomplishments-input-${accomplishment.id}`}>
                            <Input label={accomplishment.accomplishment} id={accomplishment.id} handleChange={(e) => handleChange(e)} />
                        </div>
                    ))
                }
            </div>
            <button onClick={addAccomplishment}>Add Accomplishment</button>
        </div>
    )
}

export default Accomplishments