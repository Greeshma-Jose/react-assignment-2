import { Modal, Button } from 'react-bootstrap';
import Input from './Input'
import Textarea from './Textarea';

function ModalPopup(props) {
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{props.text}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <Input handleOnChange={props.handleOnChange}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder={props.placeholder} />
                    <br />
                    {props.text === 'Add Task' &&
                        <Textarea handleOnTaskDesChange={props.handleOnTaskDesChange}
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="2"
                            placeholder={props.placeholderSecond} />
                    }
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={props.onClick}>
                    Submit
                </Button>
                {props.text === 'Add Task' &&
                    <Button variant="danger" >
                        Delete
                    </Button>
                }
            </Modal.Footer>
        </Modal>
    )
}
export default ModalPopup