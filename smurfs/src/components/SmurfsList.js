import React from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions/getSmurfs';
import Smurf from './Smurf';

const mapStateToProps = state => ({
    smurfs: state.smurfs
});


class SmurfsList extends React.Component {
    render() {
        return (
            <div className='smurfsListContainer'>
                <button onClick={() => this.props.getSmurfs()}>Get Smurfs List</button>
                {
                    this.props.smurfs.map(smurf => (
                        <Smurf smurf={smurf}/>
                    ))
                }
            </div>

        )
    }
};

export default connect(
    mapStateToProps,
    {getSmurfs}
)(SmurfsList);


