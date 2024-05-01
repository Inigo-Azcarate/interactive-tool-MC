import React, {Component} from 'react';
import {render} from 'react-dom';

// import origin from '../images/origin.png';
// import destination from '../images/destination.png';

export class InterventionPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
            firstSliderValue: 1, // Estado inicial del primer slider
            secondSliderValue: 5, // Estado inicial del segundo slider
			brtSliderValue: 1,
		};
		this.handleFirstSliderChange = this.handleFirstSliderChange.bind(this);
		this.handleSecondSliderChange = this.handleSecondSliderChange.bind(this);
		this.handleBRTSliderChange = this.handleBRTSliderChange.bind(this);
	}	
	handleFirstSliderChange(event) {
		const newValue = event.target.value;
		this.props.onFirstSliderChange(newValue);
		this.setState({
			firstSliderValue: newValue,
			secondSliderValue: 5 });
	}
	handleSecondSliderChange(event) {
		const newValue = event.target.value;
		this.props.onSecondSliderChange(newValue);
		this.setState({ 
			secondSliderValue: newValue,
			firstSliderValue: 1 });
	}
	handleBRTSliderChange(event) {
    	const newValue = event.target.value;
    	this.props.onBRTSliderChange(newValue); // Asume que este método se implementará en el componente padre
    	this.setState({
        	brtSliderValue: newValue
    });
	}
	
	render() {

		// const flexContainerStyle = {
        //     display: 'flex', // Activa Flexbox
        //     alignItems: 'center', // Centra los elementos verticalmente
        //     justifyContent: 'space-between', // Espacia los elementos uniformemente
        //     padding: '10px', // Un poco de padding para que no esté todo pegado a los bordes
        // };
		const sliderContainerStyle = {
			display: 'flex', // Usa flexbox
			flexDirection: 'column', // Organiza los sliders verticalmente
			gap: '6px', // Espacio entre los sliders
			position: 'relative', // Posicionamiento relativo para el contenedor
        	height: 'auto',
			justifyContent: 'center',
		};
		// const textStyle = {
        //     margin: '0 20px', // Asegura un espaciado uniforme alrededor del texto
        // };

		const marksContainerStyle = {
			position: 'relative',
			width: '100%',
			display: 'flex',
			justifyContent: 'space-between',
			paddingTop: '-20px', // Ajusta según la necesidad para alinear con el slider
		};
	
		const markStyle = {
			width: '3px',
			height: '4px',
			// border-radius: 50%;
			backgroundColor: '#FFFFFF',
		};
	
		const marks = [1, 2, 3, 4, 5].map((value, index) => (
			<div key={index} style={markStyle} />
		));
		const whiteDotStyle = {
            height: '4px', // Altura del punto
            width: '4px', // Anchura del punto
            backgroundColor: '#FFFFFF', // Color de fondo blanco
            borderRadius: '50%', // Hace el div circular
            alignSelf: 'center', // Centra el punto dentro del contenedor
			margin: '8px 0',
			// marginTop: '1px 0',
			// marginBottom: '3px 0',
        };
		// const sliderStyle = {
		// 	position: 'absolute', // Posicionamiento absoluto
		// 	top: '15px', // Ajusta este valor según sea necesario
		// 	left: 0,
		// 	width: '100%', // Asegura que los sliders ocupen todo el ancho del contenedor
		// };

		const buttonContainerStyle = {
			display: 'flex', // Activa Flexbox para el contenedor
			flexDirection: 'row', // Alinea los elementos horizontalmente
			justifyContent: 'center', // Centra los elementos en el eje principal
			gap: '-30px', // Espacio entre los botones
		  };

		const panelContainerStyle = {
            display: 'flex', // Activa Flexbox
            flexDirection: 'column', // Organiza los elementos verticalmente
            alignItems: 'center', // Centra los elementos horizontalmente
            justifyContent: 'center', // Centra los elementos verticalmente
            height: '0%', // Altura total para asegurar el centrado vertical
            padding: '0px', // Un poco de padding
        };

		return (
			// <div id="intervention-panel" style={flexContainerStyle}>
			<div id="intervention-panel">
				<h1 id="title">Interventions</h1>
				{/* Texto "origin" a la izquierda */}
                {/* <span >O</span> */}
				<div style={{height: '20px'}}></div>
                {/* Imagen a la izquierda */}
                {/* <img src={origen} alt="" style={{ maxWidth: '100px', marginRight: '20px' }} /> */}
                {/* Contenedor para los sliders, para un control más fino si es necesario */}
                <div style={sliderContainerStyle}>
                    <input
                        type="range"
                        min="1"
                        max="5"
                        value={this.state.firstSliderValue}
                        className="slider"
                        id="SmyRange"
                        onChange={this.handleFirstSliderChange}
						// style={sliderStyle}
                    />
					{/* Contenedor de marcas para el primer slider */}
					{/* <div style={marksContainerStyle}>{marks}</div> */}
                    <input
                        type="range"
                        min="1"
                        max="5"
                        value={this.state.secondSliderValue}
                        className="slider"
                        id="newRange"
                        onChange={this.handleSecondSliderChange}
						// style={sliderStyle}
                    />
					{/* Punto blanco entre el segundo slider y el texto BRT */}
                    <div style={whiteDotStyle}></div>
					{/* Texto "destination" a la derecha */}
					{/* <span >D</span> */}
					{/* Contenedor de marcas para el segundo slider */}
					{/* <div style={marksContainerStyle}>{marks}</div> */}
					<div style={{height: '2px'}}></div>
					{/* <span >Bus Rapid Transit (BRT)</span> */}
					<p style={{ marginBottom: '5px', marginTop: '-10px' }}>Bus Rapid Transit (BRT)</p>
					<input
                        type="range"
                        min="1"
                        max="4"
                        value={this.state.brtSliderValue}
                        className="slider"
                        id="brtRange"
                        onChange={this.handleBRTSliderChange}
						// style={sliderStyle}
                    />

					<div style={whiteDotStyle}></div>
					<div style={{height: '2px'}}></div>
					{/* <p>Remote working (Nº days/week)</p> */}
					<p style={{ marginBottom: '5px', marginTop: '-10px' }}>Remote working (Nº days)</p>
					<div style={buttonContainerStyle}>
						{/* <button class="circular-button" onClick={this.props.onToggleWFM_0}>0</button>
						<button class="circular-button" onClick={this.props.onToggleWFM_1}>1</button>
						<button class="circular-button" onClick={this.props.onToggleWFM_2}>2</button>
						<button class="circular-button" onClick={this.props.onToggleWFM_3}>3</button>
						<button class="circular-button" onClick={this.props.onToggleWFM_4}>4</button> */}
						<button className="circular-button" onClick={() => this.props.onToggleWFM(0)}>0</button>
						<button className="circular-button" onClick={() => this.props.onToggleWFM(1)}>1</button>
						<button className="circular-button" onClick={() => this.props.onToggleWFM(2)}>2</button>
						<button className="circular-button" onClick={() => this.props.onToggleWFM(3)}>3</button>
						<button className="circular-button" onClick={() => this.props.onToggleWFM(4)}>4</button>

					</div>
					{/* <button class="circular-button" onClick={this.props.onToggleTripsLayer}>1</button>
					<button class="circular-button" onClick={this.props.onToggleTripsLayer}>2</button>
					<button class="circular-button" onClick={this.props.onToggleTripsLayer}>3</button>
					<button class="circular-button" onClick={this.props.onToggleTripsLayer}>4</button>
					<button class="circular-button" onClick={this.props.onToggleTripsLayer}>5</button> */}
                </div>
                {/* Imagen a la derecha */}
                {/* <img src={desination} alt="" style={{ maxWidth: '100px', marginLeft: '20px' }} /> */}
            </div>
		);
	}
	//<p>{"Made with"} <a href="https://deck.gl/#/"> Deck.gl </a></p>
}
  



