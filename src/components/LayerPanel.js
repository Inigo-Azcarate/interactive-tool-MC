import React, {Component} from 'react';
import {render} from 'react-dom';

export class LayerPanel extends Component {
	constructor(props) {
		super(props);
	}	
	
	render() {
		return (
			<div id="layer-panel">
				<h1 id="title">Layers</h1>

				<div className="button-row">
                    <button class="custom-button" onClick={this.props.onToggleArcLayer}>ARCS</button>
                    <button class="custom-button" onClick={this.props.onToggleTripsLayer}>TRIPS</button>
                </div>
                <div className="button-row">
                    <button class="custom-button" onClick={this.props.onToggleHexagonLayer}>HEXAGONS</button>
                    <button class="custom-button" onClick={this.props.onToggleTripsLayer}>TRAFFIC</button>
                </div>
			</div>
		);
	}
	//<p>{"Made with"} <a href="https://deck.gl/#/"> Deck.gl </a></p>
}