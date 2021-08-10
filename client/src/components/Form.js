import React, { Component } from 'react';
import InputField from './InputField';
import { connect } from 'react-redux'
import { submitFields } from '../store/Thunk';

const mapStateToProps = state => {
    return {
        region: state.reg,
        meter: state.meter,
        contractlength: state.contractlength,
        commission: state.commission
    }
}

class Form extends Component {

    render() {
        return (
            <div>
                <InputField fields={["REGION", "METER", "CONTRACTLENGTH", "COMMISSION"]} />
                <button type='submit' onClick={() => { this.props.submitFields(this.props.region, this.props.meter, this.props.contractlength, this.props.commission) }}>Get Quote</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, { submitFields })(Form);