import React, { useState } from "react";
import TaskApi from "../API/TaskApi";
import ModalPopup from "./ModalPopup";

function AddUserModal(props) {

    // Form state & handlers
    // -----------------------------------------------------------------------
    const [inputValue, setInputValue] = useState('');
    const resetInputValue = () => setInputValue('');
    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value === null || value === undefined) resetInputValue();
        else setInputValue(value);
    };
    /**
     * Handler for add user to to do list
     */
    const handleSubmit = e => {
        e.preventDefault();
        if (!inputValue) return;
        TaskApi.saveUser(inputValue);
        resetInputValue();
        props.sendInputData(inputValue)
        props.sendModalShow(false)
    };
    return (
        <div>
            <>
                <ModalPopup
                    show={props.show}
                    onHide={props.onHide}
                    text={'Add User'}
                    onClick={handleSubmit}
                    handleOnChange={handleInputChange}
                    placeholder={'Enter user name'}
                />
            </>
        </div>
    )
}
export default AddUserModal