import React, {useState} from 'react';
import {postSmurfs} from '../actions/postSmurfs';


const AddSmurf = () => {
    const [inputs, setInputs] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        return postSmurfs(inputs);
    }

    const handleInputChange = e => {
        setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Add A New Smurf!</h1>
                <label>Smurf Name</label>
                <input type="text" name="name" onChange={handleInputChange} value={inputs.smurfName} required/>
                <label>Smurf Age</label>
                <input type="text" name="age" onChange={handleInputChange} value={inputs.smurfAge} required/>
            </div>
            <div>
                <label>Smurf Height (in cm)</label>
                <input type="text" name="height" onChange={handleInputChange} value={inputs.smurfHeight} required/>
            </div>
            <button type="submit">Submit Smurf!</button>
        </form>
    )
}

export default AddSmurf;