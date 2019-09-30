import React from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions/getSmurfs';
import Smurf from './Smurf';

const mapStateToProps = state => {
    smurfs: state.smurfs
}


class SmurfsList extends React.Component {
    render() {
        return (
            <Smurf/>
        )
    }
};

export default connect(
    mapStateToProps,
    {getSmurfs}
)(SmurfsList);


