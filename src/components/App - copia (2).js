 /* global window */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {StaticMap} from 'react-map-gl';
import DeckGL, {ArcLayer, PolygonLayer,ScatterplotLayer,GeoJsonLayer, LinearInterpolator, HexagonLayer} from 'deck.gl';
import {TripsLayer} from '@deck.gl/experimental-layers';

const transitionInterpolator = new LinearInterpolator(['bearing']);


import {Graph} from './Graph.js'
import {ControlPanel} from './ControlPanel.js'
import {LayerPanel} from './LayerPanel.js'
import {InterventionPanel} from './InterventionPanel.js'
import {Circle} from './Circle.js';
import {RadarPlot} from './RadarPlot.js';
import {Share} from './Share.js';
import {Kilometers} from './Kilometers.js';

import hexagon_layer_O1_100 from '../../file_generation/results/hexagons/hexagons_layer_O1_100.json';
import hexagon_layer_O2_100 from '../../file_generation/results/hexagons/hexagons_layer_O2_100.json';
import hexagon_layer_O3_100 from '../../file_generation/results/hexagons/hexagons_layer_O3_100.json';
import hexagon_layer_O4_100 from '../../file_generation/results/hexagons/hexagons_layer_O4_100.json';
import hexagon_layer_O5_100 from '../../file_generation/results/hexagons/hexagons_layer_O5_100.json';

import hexagon_layer_D1_100 from '../../file_generation/results/hexagons/hexagons_layer_D1_100.json';
import hexagon_layer_D2_100 from '../../file_generation/results/hexagons/hexagons_layer_D2_100.json';
import hexagon_layer_D3_100 from '../../file_generation/results/hexagons/hexagons_layer_D3_100.json';
import hexagon_layer_D4_100 from '../../file_generation/results/hexagons/hexagons_layer_D4_100.json';
import hexagon_layer_D5_100 from '../../file_generation/results/hexagons/hexagons_layer_D5_100.json';


import arc_layer_O1_100 from '../../file_generation/results/arcs/arc_layer_O1_100.json';
import arc_layer_O1_80 from '../../file_generation/results/arcs/arc_layer_O1_80.json';
import arc_layer_O1_60 from '../../file_generation/results/arcs/arc_layer_O1_60.json';
import arc_layer_O1_40 from '../../file_generation/results/arcs/arc_layer_O1_40.json';

import arc_layer_O2_100 from '../../file_generation/results/arcs/arc_layer_O2_100.json';
import arc_layer_O2_80 from '../../file_generation/results/arcs/arc_layer_O2_80.json';
import arc_layer_O2_60 from '../../file_generation/results/arcs/arc_layer_O2_60.json';
import arc_layer_O2_40 from '../../file_generation/results/arcs/arc_layer_O2_40.json';

import arc_layer_O3_100 from '../../file_generation/results/arcs/arc_layer_O3_100.json';
import arc_layer_O3_80 from '../../file_generation/results/arcs/arc_layer_O3_80.json';
import arc_layer_O3_60 from '../../file_generation/results/arcs/arc_layer_O3_60.json';
import arc_layer_O3_40 from '../../file_generation/results/arcs/arc_layer_O3_40.json';

import arc_layer_O4_100 from '../../file_generation/results/arcs/arc_layer_O4_100.json';
import arc_layer_O4_80 from '../../file_generation/results/arcs/arc_layer_O4_80.json';
import arc_layer_O4_60 from '../../file_generation/results/arcs/arc_layer_O4_60.json';
import arc_layer_O4_40 from '../../file_generation/results/arcs/arc_layer_O4_40.json';

import arc_layer_O5_100 from '../../file_generation/results/arcs/arc_layer_O5_100.json';
import arc_layer_O5_80 from '../../file_generation/results/arcs/arc_layer_O5_80.json';
import arc_layer_O5_60 from '../../file_generation/results/arcs/arc_layer_O5_60.json';
import arc_layer_O5_40 from '../../file_generation/results/arcs/arc_layer_O5_40.json';

import arc_layer_D1_100 from '../../file_generation/results/arcs/arc_layer_D1_100.json';
import arc_layer_D1_80 from '../../file_generation/results/arcs/arc_layer_D1_80.json';
import arc_layer_D1_60 from '../../file_generation/results/arcs/arc_layer_D1_60.json';
import arc_layer_D1_40 from '../../file_generation/results/arcs/arc_layer_D1_40.json';

import arc_layer_D2_100 from '../../file_generation/results/arcs/arc_layer_D2_100.json';
import arc_layer_D2_80 from '../../file_generation/results/arcs/arc_layer_D2_80.json';
import arc_layer_D2_60 from '../../file_generation/results/arcs/arc_layer_D2_60.json';
import arc_layer_D2_40 from '../../file_generation/results/arcs/arc_layer_D2_40.json';

import arc_layer_D3_100 from '../../file_generation/results/arcs/arc_layer_D3_100.json';
import arc_layer_D3_80 from '../../file_generation/results/arcs/arc_layer_D3_80.json';
import arc_layer_D3_60 from '../../file_generation/results/arcs/arc_layer_D3_60.json';
import arc_layer_D3_40 from '../../file_generation/results/arcs/arc_layer_D3_40.json';

import arc_layer_D4_100 from '../../file_generation/results/arcs/arc_layer_D4_100.json';
import arc_layer_D4_80 from '../../file_generation/results/arcs/arc_layer_D4_80.json';
import arc_layer_D4_60 from '../../file_generation/results/arcs/arc_layer_D4_60.json';
import arc_layer_D4_40 from '../../file_generation/results/arcs/arc_layer_D4_40.json';

import arc_layer_D5_100 from '../../file_generation/results/arcs/arc_layer_D5_100.json';
import arc_layer_D5_80 from '../../file_generation/results/arcs/arc_layer_D5_80.json';
import arc_layer_D5_60 from '../../file_generation/results/arcs/arc_layer_D5_60.json';
import arc_layer_D5_40 from '../../file_generation/results/arcs/arc_layer_D5_40.json';

import trips_count from '../json/departure_counts.json'
import trips_init from '../json/trips_init_sample.json'


import moment from 'moment';

var tmin = trips_init.tmin*1000;
var tmax = trips_init.tmax*1000;
// var tmin = 0;
// var tmax = 86400;
var maxCount = trips_init.maxCount;
var tSpan = tmax-tmin;

// const MAPBOX_TOKEN = process.env.MapboxAccessToken; // eslint-disable-line
const MAPBOX_TOKEN = "pk.eyJ1IjoiaW5pZ29hemNhcmF0ZSIsImEiOiJjbHR4ZzZwbjUwNXdoMmtyYW4zYmJrM3BkIn0.XiEHu-zuEyAH8RQBmY7-WA";

const c_O1 = 46.9;
const c_O2 = 38.9;
const c_O3 = 29.7;
const c_O4 = 14.36;
const c_O5 = 8.12;
const c_D1 = 45.37;
const c_D2 = 38.75;
const c_D3 = 29.72;
const c_D4 = 13.11;
const c_D5 = 4.35;

const data_O1 = [2440, 40, 15];
const data_O2 = [2386, 60, 44];
const data_O3 = [2230, 86, 18];
const data_O4 = [964, 222, 348];
const data_O5 = [311, 50, 2145];
const data_D1 = [2316, 39, 33];
const data_D2 = [2309, 45, 84];
const data_D3 = [2141, 84, 144];
const data_D4 = [918, 205, 1084];
const data_D5 = [98, 28, 2345];

const bardata_O1 = [42603.735184, 119.210983, 23.262132];
const bardata_O2 = [29251.999429000003, 191.512996, 60.34532];
const bardata_O3 = [16998.939349, 268.386867, 25.395682];
const bardata_O4 = [3686.6227599999997, 634.394294, 478.450956];
const bardata_O5 = [1201.2042490000001, 157.75809999999998, 6435.0];
const bardata_D1 = [39871.370271, 109.077959, 47.610502000000004];
const bardata_D2 = [29064.42686, 119.702095, 117.70874099999999];
const bardata_D3 = [17009.864004, 251.361861, 172.270959];
const bardata_D4 = [3089.256395, 499.32029600000004, 1207.528794];
const bardata_D5 = [334.17537599999997, 66.988276, 1668.178886];

import tripsDataOriginal from '../json/trips_layer.json';
import tripsDataCopy from '../json/trips_sample_copia.json';

const LIGHT_SETTINGS = {
  lightsPosition: [2.12, 41.4, 8000, 2.5, 42, 5000],
  ambientRatio: 0.05,
  diffuseRatio: 0.6,
  specularRatio: 0.8,
  lightsStrength: [2.0, 0.0, 0.0, 0.0],
  numberOfLights: 2
};

export const INITIAL_VIEW_STATE = {
	longitude: -2.181505, 
	latitude: 43.217635,
	zoom: 9.5,
	maxZoom: 16,
	pitch: 60,
	bearing: 0,
};

		
export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  time: 0,
		  date: 0,
		  animationSpeed: 0.5,
		  trailLength: 5,
		  loopLength: 86400,
		  viewState: INITIAL_VIEW_STATE,
		  showArcLayer: true,
    	  showTripsLayer: false,
		  showHexagonLayer: false,

		  show_WFM: [true, false, false, false, false],
		  
		  currentTripsData: tripsDataOriginal,
		  currentArcData: arc_layer_O1_100, 
		  currentHexagonData: hexagon_layer_O1_100,
		  dataForCO2: c_O1,
		  dataForShare: data_O1,
		  dataForBar: bardata_O1,
		  brtSliderValue: '1',
		};
		this.animationSpeedChange = this.animationSpeedChange.bind(this);
		// this.trailLengthChange = this.trailLengthChange.bind(this);
		
		this._onViewStateChange = this._onViewStateChange.bind(this);

		this.toggleArcLayerVisibility = this.toggleArcLayerVisibility.bind(this);
		this.toggleTripsLayerVisibility = this.toggleTripsLayerVisibility.bind(this);
		this.toggleHexagonLayerVisibility = this.toggleHexagonLayerVisibility.bind(this);

		this.toggleWFM = this.toggleWFM.bind(this);

		this.handleFirstSliderChange = this.handleFirstSliderChange.bind(this);
		this.handleSecondSliderChange = this.handleSecondSliderChange.bind(this);
		this.handleBRTSliderChange = this.handleBRTSliderChange.bind(this);
		this.updateDataBasedOnSliders = this.updateDataBasedOnSliders.bind(this);

	}
	toggleArcLayerVisibility() {
		this.setState(prevState => ({ showArcLayer: !prevState.showArcLayer }));
	  }
	toggleTripsLayerVisibility() {
		this.setState(prevState => ({ showTripsLayer: !prevState.showTripsLayer }));
	}
	toggleHexagonLayerVisibility() {
		this.setState(prevState => ({ showHexagonLayer: !prevState.showHexagonLayer }));
	}

	toggleWFM(index) {
		this.setState(prevState => {
		  const updatedShowWFM = prevState.show_WFM.map((item, idx) => idx === index);
		  return { show_WFM: updatedShowWFM };
		}, () => console.log(this.state.show_WFM));
	  }
	

	// handleFirstSliderChange(value) {
	// 	// let originalValueForSecondSlider = '5';
	// 	// let newArcData;
	// 	// let newHexagonData;
	// 	// let newCO2Data;
	// 	// let newShareData;
	// 	// let newBarData;
		
	// 	// switch (value) {
	// 	//   case '1':
	// 	// 	newArcData = arc_layer_O1_100;
	// 	// 	newHexagonData = hexagon_layer_O1_100;
	// 	// 	newCO2Data = c_O1;
	// 	// 	newShareData = data_O1;
	// 	// 	newBarData = bardata_O1;
	// 	// 	break;
	// 	//   case '2':
	// 	// 	newArcData = arc_layer_O2_100;
	// 	// 	newHexagonData = hexagon_layer_O2_100;
	// 	// 	newCO2Data = c_O2;
	// 	// 	newShareData = data_O2;
	// 	// 	newBarData = bardata_O2;
	// 	// 	break;
	// 	//   case '3':
	// 	// 	newArcData = arc_layer_O3_100;
	// 	// 	newHexagonData = hexagon_layer_O3_100;
	// 	// 	newCO2Data = c_O3;
	// 	// 	newShareData = data_O3;
	// 	// 	newBarData = bardata_O3;
	// 	// 	break;
	// 	//   case '4':
	// 	// 	newArcData = arc_layer_O4_100;
	// 	// 	newHexagonData = hexagon_layer_O4_100;
	// 	// 	newCO2Data = c_O4;
	// 	// 	newShareData = data_O4;
	// 	// 	newBarData = bardata_O4;
	// 	// 	break;
	// 	//   case '5':
	// 	// 	newArcData = arc_layer_O5_100;
	// 	// 	newHexagonData = hexagon_layer_O5_100;
	// 	// 	newCO2Data = c_O5;
	// 	// 	newShareData = data_O5;
	// 	// 	newBarData = bardata_O5;
	// 	// 	break;
	// 	//   default:
	// 	// 	newArcData = arc_layer_O1_100;
	// 	// 	newHexagonData = hexagon_layer_O1_100;
	// 	// 	newCO2Data = c_O1;
	// 	// 	newShareData = data_O1;
	// 	// 	newBarData = bardata_O1;
	// 	// }
	
	// 	this.setState({ 
	// 		// currentArcData: newArcData,
	// 		// currentHexagonData: newHexagonData,
	// 		// dataForCO2: newCO2Data,
	// 		// dataForShare: newShareData,
	// 		// dataForBar: newBarData,
	// 		// shareClassRadius: radiusValues[value] || 10,
	// 		// currentCO2Data: newCO2Data,
	// 	  	// currentShareData: newShareData,
	// 	  	// currentBarData: newBarData,
	// 		// Aquí asumiríamos que tienes un estado para el segundo slider, por ejemplo, `secondSliderValue`
	// 		firstSliderValue: value,
	// 		// secondSliderValue: originalValueForSecondSlider 
	// 	});
	// }
	// handleSecondSliderChange(value) {
	// 	// let originalValueForFirstSlider = '1';
	// 	// let newArcData;
	// 	// let newHexagonData;
	// 	// let newCO2Data;
	// 	// let newShareData;
	// 	// let newBarData;
	// 	// switch (value) {
	// 	//   case '1':
	// 	// 	newArcData = arc_layer_D5_100;
	// 	// 	newHexagonData = hexagon_layer_O1_100;
	// 	// 	newCO2Data = c_D5;
	// 	// 	newShareData = data_D5;
	// 	// 	newBarData = bardata_D5;
	// 	// 	break;
	// 	//   case '2':
	// 	// 	newArcData = arc_layer_D4_100;
	// 	// 	newHexagonData = hexagon_layer_O1_100;
	// 	// 	newCO2Data = c_D4;
	// 	// 	newShareData = data_D4;
	// 	// 	newBarData = bardata_D4;
	// 	// 	break;
	// 	//   case '3':
	// 	// 	newArcData = arc_layer_D3_100;
	// 	// 	newHexagonData = hexagon_layer_O1_100;
	// 	// 	newCO2Data = c_D3;
	// 	// 	newShareData = data_D3;
	// 	// 	newBarData = bardata_D3;
	// 	// 	break;
	// 	//   case '4':
	// 	// 	newArcData = arc_layer_D2_100;
	// 	// 	newHexagonData = hexagon_layer_O1_100;
	// 	// 	newCO2Data = c_D2;
	// 	// 	newShareData = data_D2;
	// 	// 	newBarData = bardata_D2;
	// 	// 	break;
	// 	//   case '5':
	// 	// 	newArcData = arc_layer_D1_100;
	// 	// 	newHexagonData = hexagon_layer_O1_100;
	// 	// 	newCO2Data = c_D1;
	// 	// 	newShareData = data_D1;
	// 	// 	newBarData = bardata_D1;
	// 	// 	break;
	// 	//   default:
	// 	// 	newArcData = arc_layer_D5_100;
	// 	// 	newHexagonData = hexagon_layer_O1_100;
	// 	// 	newCO2Data = c_D5;
	// 	// 	newShareData = data_D5;
	// 	// 	newBarData = bardata_D5;
	// 	// }
	
	// 	this.setState({ 
	// 		// currentArcData: newArcData,
	// 		// currentHexagonData: newHexagonData,
	// 		// dataForCO2: newCO2Data,
	// 		// dataForShare: newShareData,
	// 		// dataForBar: newBarData,
	// 		// shareClassRadius: radiusValues[value] || 10,
	// 		// currentCO2Data: newCO2Data,
	// 	  	// currentShareData: newShareData,
	// 	  	// currentBarData: newBarData,
	// 		// Asumiendo un estado para el primer slider, por ejemplo, `firstSliderValue`
	// 		secondSliderValue: value,
	// 		// firstSliderValue: originalValueForFirstSlider 
	// 	});
	// }

	// handleBRTSliderChange(value) {
	// 	this.setState({
	// 		brtSliderValue: value
	// 	});
	// 	// this.updateDataBasedOnSliders(); 
	// }

	handleFirstSliderChange(value) {
		this.setState({
			firstSliderValue: value,
			secondSliderValue: '5' 
		}, () => {
			this.updateDataBasedOnSliders();
		});
	}
	handleSecondSliderChange(value) {
		this.setState({
			secondSliderValue: value,
			firstSliderValue: '1' 
		}, () => {
			this.updateDataBasedOnSliders();
		});
	}
	handleBRTSliderChange(value) {
		this.setState({
			brtSliderValue: value
		}, () => {
			this.updateDataBasedOnSliders();
		});
	}

	updateDataBasedOnSliders() {
		const { firstSliderValue, secondSliderValue, brtSliderValue } = this.state;

		// console.log(`First ${firstSliderValue}`);

		let newArcFile;
		let newHexagonData;
		let newCO2Data;
		let newShareData;
		let newBarData;

    	if(firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '1') {
			newArcFile = arc_layer_O1_100;
    	} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '2') {
			newArcFile = arc_layer_O1_80;
		} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '3') {
			newArcFile = arc_layer_O1_60;
		} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '4') {
			newArcFile = arc_layer_O1_40;
		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '1') {
			newArcFile = arc_layer_O2_100;
		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '2') {
			newArcFile = arc_layer_O2_80;
		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '3') {
			newArcFile = arc_layer_O2_60;
		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '4') {
			newArcFile = arc_layer_O2_40;
		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '1') {
			newArcFile = arc_layer_O3_100;
		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '2') {
			newArcFile = arc_layer_O3_80;
		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '3') {
			newArcFile = arc_layer_O3_60;
		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '4') {
			newArcFile = arc_layer_O3_40;
		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '1') {
			newArcFile = arc_layer_O4_100;
		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '2') {
			newArcFile = arc_layer_O4_80;
		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '3') {
			newArcFile = arc_layer_O4_60;
		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '4') {
			newArcFile = arc_layer_O4_40;
		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '1') {
			newArcFile = arc_layer_O5_100;
		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '2') {
			newArcFile = arc_layer_O5_80;
		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '3') {
			newArcFile = arc_layer_O5_60;
		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '4') {
			newArcFile = arc_layer_O5_40;
		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '1') {
			newArcFile = arc_layer_D2_100;
		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '2') {
			newArcFile = arc_layer_D2_80;
		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '3') {
			newArcFile = arc_layer_D2_60;
		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '4') {
			newArcFile = arc_layer_D2_40;
		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '1') {
			newArcFile = arc_layer_D3_100;
		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '2') {
			newArcFile = arc_layer_D3_80;
		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '3') {
			newArcFile = arc_layer_D3_60;
		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '4') {
			newArcFile = arc_layer_D3_40;
		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '1') {
			newArcFile = arc_layer_D4_100;
		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '2') {
			newArcFile = arc_layer_D4_80;
		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '3') {
			newArcFile = arc_layer_D4_60;
		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '4') {
			newArcFile = arc_layer_D4_40;
		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '1') {
			newArcFile = arc_layer_D5_100;
		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '2') {
			newArcFile = arc_layer_D5_80;
		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '3') {
			newArcFile = arc_layer_D5_60;
		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '4') {
			newArcFile = arc_layer_D5_40;
		}
		else {
			newArcFile = arc_layer_O3_100; 
		}

		this.setState({ currentArcData: newArcFile });
	}
	
	_onViewStateChange({viewState}) {
		this.setState({viewState});
	}

	componentDidMount() {
		this._animate();
		// this.updateDataBasedOnSliders();
		document.addEventListener("keypress", (event) => {
			if( event.which === 32) {
				console.log(this.state.time);
				console.log(this.state.date);
			}
		})
	}

	componentWillUnmount() {
		if (this._animationFrame) {
		  window.cancelAnimationFrame(this._animationFrame);
		}
	}

	_animate() {
		const loopLength = this.state.loopLength;
		const animationSpeed = this.state.animationSpeed*loopLength/100;
		const timestamp = Date.now() / 1000;
		const loopTime = loopLength / animationSpeed;
		// const utcDelay = 2*3600*1000;

		let currentTime = ((timestamp % loopTime) / loopTime) * loopLength;

		// Adjust the date state to reflect the real-world timestamp for the start of the animation day
		let startDate = new Date(); // You can adjust this to set a specific start date
		startDate.setHours(0, 0, 0, 0); // Reset to start of the day

		// Calculate the new date by adding the current time in the animation to the start date
		let newDate = new Date(startDate.getTime() + currentTime * 1000); // Convert seconds to milliseconds
		
		this.setState({
		//   time: ((timestamp % loopTime) / loopTime) * loopLength,
		//   date: (this.state.time/this.state.loopLength*tSpan+tmin-utcDelay)
			time: currentTime,
			date: newDate.getTime() // Store as a timestamp for flexibility
		});
		this._animationFrame = window.requestAnimationFrame(this._animate.bind(this));
	}

	_renderTooltip() {
		const {hoveredObject, pointerX, pointerY} = this.state || {};
		if (!hoveredObject) {
		  return null;
		}
		return (
		  <div className="tooltip" style={{pointerEvents: 'none', left: pointerX, top: pointerY}}>
			<div>{"ID: ",hoveredObject.id}</div>
			<div>{"NAME: ",hoveredObject.streetName}</div>
			<div>{"LATITUDE: ",hoveredObject.latitude}</div>
			<div>{"LONGITUDE: ",hoveredObject.longitude}</div>
		  </div>
		);
	}
	
	animationSpeedChange(event) {
		this.setState({animationSpeed: event.target.value});
	}
	// trailLengthChange(event) {
	// 	this.setState({trailLength: event.target.value});
	// }

	_renderLayers() {
	
	const layers = [];

	if (this.state.showTripsLayer) {
		layers.push(new TripsLayer({
			id: 'trips',
			data: this.state.currentTripsData,
			getPath: d => d.segments,
			getColor: [255, 255, 0], // d => (d.vendor === 0 ? [253, 128, 93] : [23, 184, 190]), //[50, 255, 255], [23, 184, 190]
			// getColor: this.state.currentTripsColor,
			opacity: 0.9,
			strokeWidth: 5,
			lineWidthScale: 5,
			trailLength: this.state.trailLength*this.state.loopLength/100,
			currentTime: this.state.time
		}));
	}
	
	if (this.state.showArcLayer) {
		layers.push(new ArcLayer({
			id: 'arc-layer',
			data: this.state.currentArcData,
			// pickable: true,
			getWidth: 8,
			getSourcePosition: d => d.from.coordinates,
			getTargetPosition: d => d.to.coordinates,
			getSourceColor: d => {
				switch (d.inbound) {
					case 1:
						return [255, 0, 0];
					case 2:
						return [0, 255, 0];
					case 3:
						return [0, 0, 255];
					default:
						return [200, 200, 200];
				}
			},
			getTargetColor: d => {
				switch (d.inbound) {
					case 1:
						return [255, 0, 0];
					case 2:
						return [0, 255, 0];
					case 3:
						return [0, 0, 255];
					default:
						return [200, 200, 200];
				}
			},
		}));
	}

	if (this.state.showHexagonLayer) {
		layers.push(new HexagonLayer({
			id: 'hexagon-layer',
			data: this.state.currentHexagonData,
			pickable: true,
			extruded: true,
			radius: 200,
			elevationScale: 4,
			getPosition: d => d.COORDINATES
		}));
	}
	
	return layers // Filtra los layers falsy
	}

	render() {
	//const {viewState, controller = true, baseMap = true} = this.props;
	const {controller = true, baseMap = true} = this.props;
	const viewState = this.state.viewState;
	return (
		<div>
			<ControlPanel 
			date={new Date(this.state.date)}
			animationSpeed={this.state.animationSpeed}
			animationSpeedChange={this.animationSpeedChange}
			/>
			<LayerPanel 
			onToggleArcLayer={this.toggleArcLayerVisibility}
    		onToggleTripsLayer={this.toggleTripsLayerVisibility}
			onToggleHexagonLayer={this.toggleHexagonLayerVisibility}
			/>
			<InterventionPanel 
			onFirstSliderChange={this.handleFirstSliderChange} 
			onSecondSliderChange={this.handleSecondSliderChange}
			onBRTSliderChange={this.handleBRTSliderChange}
			onToggleWFM={this.toggleWFM}

			/>
			<Circle radius={this.state.dataForCO2} />
    		<Share data={this.state.dataForShare} />
			<Kilometers data={this.state.dataForBar} />
			<div>
				<DeckGL
				layers={this._renderLayers()}
				initialViewState={INITIAL_VIEW_STATE}
				viewState={viewState}
				controller={controller}
				onLoad={this._onLoad}
        		onViewStateChange={this._onViewStateChange}
				>
					{baseMap && (
    					<StaticMap
      					reuseMaps
      					mapStyle="mapbox://styles/mapbox/dark-v10"
						// mapStyle="mapbox://styles/inigoazcarate/clu25a1ks02rm01qe2mls8lfp"
      					preventStyleDiffing={true}
      					mapboxApiAccessToken={MAPBOX_TOKEN}
    					/>
  					)}
  					{this._renderTooltip()}
				</DeckGL>
			</div>
		</div>
	);
	}
}

export function renderToDOM(container) {
  render(<App />, container);
}

