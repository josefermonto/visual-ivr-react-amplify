// App.js
import logo from './phone-call.png';
import './App.css';
import AddressForm from './AddressForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-image" alt="logo" />
        <p>Non-Emergency Services Additional Information to Log your Request</p>
        <AddressForm />
        <a href="https://www.flaticon.com/free-icons/call" title="call icons">Call icons created by Freepik - Flaticon</a>
      </header>

    </div>
  );
}

export default App;
