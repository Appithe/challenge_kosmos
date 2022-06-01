/* eslint-disable react/prop-types */
import React from "react";
import "./select.css";

const Select = (props) => {

    const { label, options, _uid } = props;

    return (
        <>
            <label className="select-label" htmlFor={_uid}>{label}</label>
            <select className="select-options" id={_uid}>
                {options.map((option, index) => {
                    return <option key={index}>{option}</option>;
                })}
            </select>
        </>
    );
};

export default Select;