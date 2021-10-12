import { Modal, Button } from 'react-bootstrap';
import Input from './Input'

function ModalPopup(props) {
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{props.text}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <Input
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder={props.placeholder} />
                    <br />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success">
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ModalPopup