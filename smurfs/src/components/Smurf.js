import React from 'react';

const Smurf = props => {
    return (
        <div className='smurfContainer'>
            <h1>Name: {props.smurf.name}</h1>
            <h1>Age: {props.smurf.age}</h1>
            <h1>Height: {props.smurf.height}</h1>
        </div>
    )
}

export default Smurf;
