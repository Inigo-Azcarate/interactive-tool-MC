// import React, { Component } from 'react';

// export class Circle extends Component {
//     // Función para calcular el color basado en el radio
//     calculateColor(radius) {
//         // Valores de color para el gradiente
//         const startColor = [0, 255, 0]; // Rojo para radio=90
//         const endColor = [255, 0, 0]; // Verde para radio=5
//         // Calcula la proporción del radio actual entre 5 y 90
//         const ratio = (radius - 5) / (100 - 5);
//         // Interpola los colores
//         const color = startColor.map((start, i) => {
//             return Math.round(start + (endColor[i] - start) * ratio);
//         });
//         // Retorna el color en formato rgb
//         return `rgb(${color[0]},${color[1]},${color[2]})`;
//     }

//     render() {
//         const { radius } = this.props; // Extraer el radio del prop
//         const radius2 = radius * 4;
//         const diameter = radius2 * 2;
//         const fillColor = this.calculateColor(radius2); // Calcula el color del círculo basado en el radio
//         const area = 3.141592*radius*radius/1000; // It's in kg so now in To
//         const areaRounded = Number(area.toFixed(2));

//         return (
//             <div id="circle_co2" style={{ padding: "0px" }}>
//                 <div style={{ marginTop: "0px" }}>
//                 {/* <p x="50%" y="50%" textAnchor="middle" fill="#FFFFFF" fontWeight="900" dy="-0.4em">{`${areaRounded} T CO2`}</p> */}
//                 {/* <p>{"Create policies and determine the future of mobility systems"}</p> */}
//                     <svg width={diameter} height={diameter}>
//                         <circle cx={radius2} cy={radius2} r={radius2} fill={fillColor} />
//                         <text x="50%" y="50%" textAnchor="middle" fill="#FFFFFF" fontWeight="900" fontSize="24px" dy="0em">{`${areaRounded} T CO2`}</text>
//                         {/* <text x="50%" y="50%" textAnchor="middle" fill="#000" fontWeight="900" dy="1.1em">CO2</text> */}
//                     </svg>
//                 </div>
//             </div>
//         );
//     }
// }

import React, { Component } from 'react';

export class Circle extends Component {
    calculateColor(radius) {
        const startColor = [0, 255, 0]; // Verde para radio=90
        const endColor = [255, 0, 0]; // Rojo para radio=5
        const ratio = (radius - 5) / (100 - 5);
        const color = startColor.map((start, i) => (
            Math.round(start + (endColor[i] - start) * ratio)
        ));
        return `rgb(${color[0]},${color[1]},${color[2]})`;
    }

    render() {
        const { radius } = this.props;
        const radius2 = radius * 2.3; /*4*/
        const diameter = radius2 * 2;
        const fillColor = this.calculateColor(radius2);
        const area = (Math.PI * radius * radius / 1000) * 300 / 2300;
        const areaRounded = Number(area.toFixed(2));

        // Ajuste de estilos
        // const containerStyle = {
        //     position: 'relative', // Contenedor relativo para el texto absoluto
        //     width: `${diameter}px`,
        //     height: `${diameter}px`
        // };

        const textStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Centrar el texto
            color: '#FFFFFF',
            fontWeight: '900',
            fontSize: '24px',
        };

        return (
            <div id="circle_co2" style={{ padding: "0px" }}>
                <div style={{ marginTop: "0px" }}></div>
                    <svg width={diameter} height={diameter}>
                        <circle cx={radius2} cy={radius2} r={radius2} fill={fillColor} />
                    </svg>
                <div style={textStyle}>{`${areaRounded} T CO2`}</div>
            </div>
        );
    }
}



