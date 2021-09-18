import '../css/App.css';
import '../css/Day.css';
import '../css/Popup.css';
import '../css/NextFiveDays.css'

import Day from './Day';
import Popup from './Popup';
import NextFiveDays from './NextFiveDays';

function App() {
  return (
    <div className="App">
      <Day/>
      <Popup />
      <NextFiveDays />
    </div>
  );
}

export default App;
