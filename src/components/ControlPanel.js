import React, {Component} from 'react';
import {render} from 'react-dom';

export class ControlPanel extends Component {
	constructor(props) {
		super(props);
	}	
	
	render() {
		// var d = this.props.date.toLocaleString(undefined,{day:'numeric',month:'numeric',year:'numeric',hour: '2-digit',minute: '2-digit'}); 
		// var d = this.props.date.toLocaleString(undefined,{hour: '2-digit',minute: '2-digit'});
		var d = new Date(this.props.date).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});
		//console.log(this.props);
		// const seconds = this.props.date % 86400; // Ensure it wraps around at 86400 seconds
		// const hours = Math.floor(seconds / 3600);
		// const minutes = Math.floor((seconds % 3600) / 60);
		// const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
		return (
			<div id="control-panel">
				<h1 id="title">Commuting trips in Gipuzkoa</h1>
				<hr/>
				<p>{"Create policies and determine the future of mobility systems"}</p>
				{/* <p>{new Date(this.props.tmin).toDateString()," ― ",new Date(this.props.tmax).toDateString()}</p> */}
				<hr/>
				<label>
					<p className="g" style={{ marginBottom: '0px' }}>
						<span className="animation-speed-label">{"Animation Speed"}</span>
						<input type="range" className="new-slider" value={this.props.animationSpeed} onChange={this.props.animationSpeedChange} max="30" min="1" step="0.5" data-show-value="false"/>
					{/* {this.props.animationSpeed} */}
					{/* {this.props.animationSpeed + "%"} */}
					</p>
					{/* <p className="g">{"Trail Length"}
					<input type="range" value={this.props.trailLength} onChange={this.props.trailLengthChange} max="200" min="1" step="1" data-show-value="true"/>
					{this.props.trailLength + "%"}
					</p> */}
					<p className="h" style={{ marginBottom: '1px', marginTop: '-30px' }}>{d}</p>

					{/* <p className="h">{d}</p> */}
					{/* <p className="g">{"Current Time: ", formattedTime}</p> */}
				</label>
				{/* <button onClick={this.props.onSwitchTripsData}>Change Trips Data</button> */}
				{/* <button onClick={this.props.onToggleArcLayer}>Toggle Arc Layer</button>
				<button onClick={this.props.onToggleTripsLayer}>Toggle Trips Layer</button> */}
				{/* <hr/> */}
				{/* <p>{"Hold ctrl + drag to tilt the map"}</p>
				<p>
					<a className="github-button" href="https://github.com/imartinezl" data-size="large" data-show-count="true" aria-label="Follow @imartinezl on GitHub">Follow @imartinezl</a>{"  "}
					<a className="github-button" href="https://github.com/imartinezl/bicing-deckgl" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star imartinezl/bicing-deckgl on GitHub">Star</a>
				</p> */}
			</div>
		);
	}
	//<p>{"Made with"} <a href="https://deck.gl/#/"> Deck.gl </a></p>
}