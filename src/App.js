import './App.css';
import Weather from './components/weather/Weather';

function App() {
  return (
    <div className="weatherApp">
      <div className="weatherApp-container">
        <Weather defaultCity="Uzice"/>
      </div>
    </div>
  );
}

export default App;
