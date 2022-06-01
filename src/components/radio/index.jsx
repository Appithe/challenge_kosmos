/* eslint-disable react/prop-types */
import React from "react";
import "./radio.css";

const Radio = (props) => {
    
    const { label, type, options, _uid } = props;
    
    return (
        <div className="form-group">
            <label className="radio-label" htmlFor={_uid}>{label}</label>
            <div className="form-check">
                {options.map((option, index) => (
                    <div className="form-check" key={index}>
                        <input className="form-check-input" type={type} id={`${_uid}-${index}`} />
                        <label className="form-check-label" htmlFor={`${_uid}-${index}`}>{option}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Radio;