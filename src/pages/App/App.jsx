import React, { useEffect, useState } from "react";
import Text from "../../components/text";
import Select from "../../components/select";
import Radio from "../../components/radio";
import "./App.css";

function App() {

    const [fields, setFields] = useState([]);

    const json = {
        "fields": [{
            "component": "text",
            "label": "Name",
            "placeholder": "Enter your name",
            "type": "text",
            "_uid": "85f52527-3116-4599-814c-249aca7ff7bb"
        },
        {
            "component": "text",
            "label": "Email",
            "placeholder": "Enter your email",
            "type": "email",
            "_uid": "9345dcfe-7d66-4aa5-aee7-a0c5ab9fa360"
        },
        {
            "component": "select",
            "label": "City",
            "type": "select",
            "options": [
                "Select your option",
                "Option 1",
                "Option 2",
                "Option 3"
            ],
            "_uid": "b7fc88f7-d98e-4284-a4c0-96ca7e5aac99"
        },
        {
            "component": "text",
            "label": "Phone",
            "placeholder": "Enter your phone",
            "type": "tel",
            "_uid": "9f5ef8df-ddc5-4c12-91dd-eb34475df1d7"
        },
        {
            "component": "text",
            "label": "Message",
            "placeholder": "Enter your message",
            "type": "textarea",
            "_uid": "81f78469-d3e4-4d0b-bb64-e75f74a986ce"
        },
        {
            "component": "radio",
            "label": "Radio",
            "type": "radio",
            "options": [
                "Option 1",
                "Option 2",
                "Option 3"
            ],
            "_uid": "23fb008c-ed64-48ae-a17b-ad390d336ec3"
        },
        {
            "component": "submit",
            "label": "Submit",
            "type": "submit",
            "_uid": "144dee6b-3c39-438c-99b6-955c14664aa5"
        }
        ]
    };

    useEffect(() => {
        setFields(json);
    }, []);


    return (
        <main className="container">
            <aside className="fields">
                <h1 className="header">Fields</h1>
                <ul>
                    {fields.fields?.map((field, index) => {
                        return (
                            <li key={index} className="list-item" >
                                <label className="list-label">{field.label}
                                    <input type="checkbox" ></input>
                                </label>
                            </li>
                        );
                    })}
                </ul>
            </aside>
            <form className="form">
                {
                    !fields.fields ? null : fields.fields.map((field, index) => {
                        switch (field.component) {
                        case "text":
                            return <Text key={index} {...field} />;
                        case "select":
                            return <Select key={index} {...field} />;
                        case "radio":
                            return <Radio key={index} {...field} />;
                        default:
                            return null;
                        }
                    }
                    )
                }
            </form>
        </main>
    );
}

export default App;
