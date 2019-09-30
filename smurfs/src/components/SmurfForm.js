import React from 'react';
import {useInput} from '../hooks/useInput';
import {postSmurfs} from "../actions/postSmurfs";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    smurfs: state.smurfs
});

const SmurfForm = (props) => {
    const {value: name, bind: bindName, reset: resetName} = useInput('');
    const {value: age, bind: bindAge, reset: resetAge} = useInput('');
    const {value: height, bind: bindHeight, reset: resetHeight} = useInput('');


    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log({name: name, age: age, height: height});
        props.postSmurfs({name: name, age: age, height: height});
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

export default connect(
    mapStateToProps,
    {postSmurfs}
)(SmurfForm);