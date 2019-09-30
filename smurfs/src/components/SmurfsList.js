import React from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions/getSmurfs';
import Smurf from './Smurf';

class SmurfsList extends React.Component {

    render() {
        return (
            <Smurf/>
        )
    }
};


