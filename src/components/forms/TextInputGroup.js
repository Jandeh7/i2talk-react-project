import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';

import '../../App.css';
import '../../styles/signUp.css'

const TextInputGroup = ({
    label,
    name,
    value,
    // placeholder,
    type,
    onChange, 
    error
}) => {
    return (
        <div className="field">
            <input 
                type={type}
                name={name}
                // className={classnames('form-control form-control-lg', {
                //     'is-invalid': error
                // })}
                // placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <label htmlFor={name}>{label} </label>
            {error && <div className="invalid-feedback">
                {error}</div>}
            
        </div>
    );
};

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

TextInputGroup.defaultProps = {
    type: 'text'
}

export default TextInputGroup;