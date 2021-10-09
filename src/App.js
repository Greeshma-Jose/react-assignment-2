import './styles.css';
import Header from './Components/Header';
import Button from './Components/Button';

export default function App() {
  
  // Render
  // -----------------------------------------------------------------------
  return (
    <div className='App'>
      {/* Header */}
      <br/>
      <br/>
      <Header assignmentNo={2} />
      <br />
      <hr />
      {/* Controlled Form */}
      <Button
        className="addUser-button btn btn-success" 
        text={'Add User'}
      />
    </div>
  );
}