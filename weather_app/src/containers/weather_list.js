import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

	renderWeather(cityData) {
		const name = cityData.city.name;

		const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273.15);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		//var must have the same name as the key in the data
		const { lon, lat } = cityData.city.coord;

		return(
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td>
					<Chart data={temps} colour="orange" units="C" />
				</td>
				<td>
					<Chart data={pressure} colour="blue" units="hPa" />
				</td>
				<td>
					<Chart data={humidity} colour="green" units="%" />
				</td>
			</tr>
		);
	}

	render() {
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({weather}) {
	return { weather }; // { weather } = { weather: weather }
}

//We are exporting the connected version of WeatherList
export default connect(mapStateToProps)(WeatherList);