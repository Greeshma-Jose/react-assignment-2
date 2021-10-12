import React from "react"
import '../styles.css'
import Button from './Button'
import { useState } from "react";
import ModalPopup from "./ModalPopup";
import TaskApi from "../API/TaskApi";

function Card(props) {
    const [addModalShow, setaddModalShow] = useState(false);
    const addModalClose = () => setaddModalShow(false);

    // Form state & handlers
    // -----------------------------------------------------------------------
    const [inputValue, setInputValue] = useState({
        userName: '',
        taskName: '',
        taskDes: ''
    });
    const resetInputValue = () => setInputValue('');
    function handleInputChange(e) {
        const value = e.target.value;
        if (value === null || value === undefined) resetInputValue();
        else setInputValue({ ...inputValue, taskName: value });
    };
    function handleOnTaskDesChange(e) {
        const value = e.target.value;
        if (value === null || value === undefined) resetInputValue();
        else setInputValue({ ...inputValue, taskDes: value });
    };
    /**
       * Handler for Modal Popup
       */
    const handleAddTask = () => {
        setInputValue({ 'userName': props.userName });
        setaddModalShow(true)
    };
    /**
 * Handler for add task to user
 */
    const handleSubmit = e => {
        e.preventDefault();
        if (!inputValue) return;
        TaskApi.saveTask(inputValue);
        resetInputValue();
        addModalClose();
    };
    return (
        <div>
            <div className="card border-secondary mb-3 card-style">
                <div className="card-header">{props.userName}
                    <i className="fas fa-edit"></i>
                </div>
                <div className="card-body text-secondary">
                    <p className="card-text">Done<hr /></p>
                    <Button
                        className="addUser-button btn btn-success"
                        text={'Add Task'}
                        onClick={handleAddTask}
                    />
                </div>
            </div>
            {addModalShow === true &&
                <ModalPopup
                    show={addModalShow}
                    onHide={addModalClose}
                    text={'Add Task'}
                    onClick={handleSubmit}
                    handleOnChange={e => { handleInputChange(e)}}
                    handleOnTaskDesChange = {handleOnTaskDesChange}
                    placeholder={'Enter task'}
                    placeholderSecond={'Enter task description'}
                />
            }
        </div>
    )
}
export default Card