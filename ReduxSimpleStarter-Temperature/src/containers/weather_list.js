import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;

    const temps = cityData.list.map(weather => weather.main.temp);
  //  const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp -272);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;

    const { lon, lat } = cityData.city.coord;

    console.log(temps);
// <td>{ name } </td>

      return (
        <tr key={ name }>
          <td><GoogleMap lon={lon} lat={lat} /></td>
          <td>
            <Chart data={temps} color="blue" units="K"/>
          </td>
          <td>
            <Chart data={pressure} color="red" units="hPa"/>
          </td>
          <td>
            <Chart data={humidity} color="green" units="%"/>
          </td>
        </tr>
      );
  }

  render() {
    return(
    <table className="table table-hover">
      <thead>
        <tr>
          <th>CITY</th>
          <th>TEMPERATURE (K)</th>
          <th>PRESSURE (hPa)</th>
          <th>HUMIDITY (%)</th>
        </tr>
      </thead>
      <tbody>
        { this.props.weather.map(this.renderWeather) }
      </tbody>
    </table>
  );
  }
}

// function mapStateToProps(state) {
//   return { weather: state.weather };
// }
//
// function mapStateToProps({ weather }) {
//   return { weather: weather };
// }

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
