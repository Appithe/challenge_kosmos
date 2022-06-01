/* eslint-disable react/prop-types */
import React from "react";
import "./text.css";

const Text = (props) => {

    const { label, placeholder, type, _uid, isChecked } = props;

    return (
        <>
            <label className="text-label" htmlFor={_uid}>{label}</label>
            <input type={type} className="text-input" id={_uid} placeholder={placeholder} />
        </>
    );
};

export default Text;