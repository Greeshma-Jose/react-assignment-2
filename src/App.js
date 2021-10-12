import './styles.css';
import Header from './Components/Header';
import Button from './Components/Button';
import { useState } from 'react';
import AddUserModal from './Components/AddUserModal';

export default function App() {

  const [addModalShow, setaddModalShow] = useState(false);
  const addModalClose = () => setaddModalShow(false);

  /**
    * Handler for Modal popup
    */
  const handleAddUser = () => {
    setaddModalShow(true);
  };

  // Render
  // -----------------------------------------------------------------------
  return (
    <div className='App'>
      {/* Header */}
      <br />
      <br />
      <Header assignmentNo={2} />
      <br />
      <hr className="hr-style" />
      {/* Controlled Form */}
      <Button
        className="addUser-button btn btn-success"
        text={'Add User'}
        onClick={handleAddUser}
      />
      <AddUserModal
        show={addModalShow}
        onHide={addModalClose}
      />
    </div>
  );
}