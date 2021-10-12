import './styles.css';
import Header from './Components/Header';
import Button from './Components/Button';
import { useState } from 'react';
import AddUserModal from './Components/AddUserModal';
import Card from './Components/Card'

export default function App() {

  const[addModalShow, setaddModalShow] = useState(false);
  const[userName, setuserName] = useState('');
  const addModalClose = () => setaddModalShow(false);

 /**
   * Handler for add item to list button
   */
  const handleAddUser = () => {
   setaddModalShow(true);
  };

  /**
   * Handler for add item to list button
   */
  
  // Render
  // -----------------------------------------------------------------------
  return (
    <div className='App'>
      {/* Header */}
      <br/>
      <br/>
      <Header assignmentNo={2} />
      <br />
      <hr className = "hr-style" />
      {/* Controlled Form */}
      <Button
        className="addUser-button btn btn-success" 
        text={'Add User'}
        onClick = {handleAddUser}
      />
      {userName ? <Card userName = {userName}
      sendModalShow={ addModalShow => setaddModalShow(addModalShow) }/> : ""}
      <AddUserModal
      show={addModalShow}
      onHide={addModalClose}
      sendInputData={ userName => setuserName(userName)}
      sendModalShow={ addModalShow => setaddModalShow(addModalShow) }
 />
    </div>
  );
}
