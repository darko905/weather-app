import './App.css';
import Weather from './components/weather/Weather';

function App() {
  return (
    <div className="WeatherApp">
      <div className="WeatherApp-container">
        <Weather defaultCity="Uzice"/>
      </div>
    </div>
  );
}

export default App;
