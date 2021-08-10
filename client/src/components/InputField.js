import React, { Component } from 'react';
import { store } from '../store/index'
import { setField } from '../store/actions';

class InputField extends Component {
    dispatchFieldAction = e => {
        const ip = e.target.value
        const action = e.target.dataset.action
        store.dispatch(setField(action, ip))
    }
    render() {

        return (
            <div>
                {this.props.fields.map((field, i) => (
                    <label key={`field-${i}`}>
                        {field}
                        <input
                            type='text'
                            data-action={`SET_${field}`}
                            className='field-form'
                            onChange={this.dispatchFieldAction} />
                    </label>
                ))}

            </div>
        );
    }
}

export default InputField;