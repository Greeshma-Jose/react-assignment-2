import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import Input from './Input'
import ModalPopup from "./ModelPopup";

function AddUserModal(props) {

    return (
        <div>
            <>
                <ModalPopup
                    show={props.show}
                    onHide={props.onHide}
                    text={'Add User'}
                    placeholder={'Enter user name'}
                />
            </>
        </div>
    )
}
export default AddUserModal