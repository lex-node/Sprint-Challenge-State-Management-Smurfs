import React from 'react';
import {useInput} from '../hooks/useInput';

export function SmurfForm(props) {
    const {value: name, bind: bindName, reset: resetName} = useInput('');
    const {value: age, bind: bindAge, reset: resetAge} = useInput('');
    const {value: height, bind: bindHeight, reset: resetHeight} = useInput('');


    const handleSubmit = (evt) => {
        evt.preventDefault();
        resetName();
        resetAge();
        resetHeight();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Smurf Name:
                <input type="text" {...bindName} />
            </label>
            <label>
                Smurf Age:
                <input type="text" {...bindAge} />
            </label>
            <label>
                Smurf Height (In Cm):
                <input type="text" {...bindHeight} />
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default SmurfForm;