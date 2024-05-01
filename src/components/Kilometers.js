// import React, { Component } from 'react';
// import {render} from 'react-dom';

// export class Kilometers extends Component {
//     componentDidMount() {
//         if (typeof Chart === 'undefined') {
//             console.error('Chart.js no está cargado');
//             return;
//         }

//         const ctx = document.getElementById('barChart').getContext('2d');
//         const barChart = new Chart(ctx, {
//             type: 'bar', // Tipo de gráfico de barras
//             data: {
//                 labels: ['CAR', 'PT', 'WALK'], // Etiquetas
//                 datasets: [{
//                     // label: ' ',
//                     data: this.props.data, // Utiliza los datos pasados como props
//                     backgroundColor: [
//                         'rgba(255, 133, 133, 0.9)',
//                         'rgba(33, 197, 255, 0.9)',
//                         'rgba(115, 211, 126, 0.9)'
//                     ]
//                 }]
//             },
            // options: {
            //     indexAxis: 'y', // Esto hace que las barras sean horizontales
            //     plugins: {
            //         legend: {
            //             display: false // Asegura que no se muestre la leyenda
            //         }
            //     },
            //     scales: {
            //         x: { // Ahora la escala 'x' define el rango de los valores
            //             beginAtZero: true,
            //             min: 0, // Define aquí tu valor mínimo fijo, si es necesario
            //             max: 1000, // Define aquí tu valor máximo fijo
            //         },
            //         y: { // La escala 'y' se usa para las etiquetas
            //             // No es necesario definir 'beginAtZero', 'min', o 'max' aquí
            //         }
            //     }
            // }
//         });
//     }

//     render() {
//         return (
//             <div id="kilometersplot" style={{ padding: "5px" }}>
//                 <h1 id="title" style={{ marginTop: "10px"}}>Travelled Distance (km)</h1>
//                 {/* <h1 id="title">(kms)</h1> */}
//                 <canvas id="barChart" width="200" height="80"></canvas>
//             </div>
//         );
//     }
// }

import React, { Component } from 'react';
// Asegúrate de importar Chart.js si aún no lo has hecho

export class Kilometers extends Component {
    constructor(props) {
        super(props);
        this.barChart = null; // Inicializa la referencia del gráfico como null
    }

    componentDidMount() {
        if (typeof Chart === 'undefined') {
            console.error('Chart.js no está cargado');
            return;
        }

        const ctx = document.getElementById('barChart').getContext('2d');
        this.barChart = new Chart(ctx, {
            type: 'bar', // Tipo de gráfico de barras
            data: {
                labels: ['CAR', 'PT', 'WALK'], // Etiquetas
                datasets: [{
                    data: this.props.data, // Utiliza los datos pasados como props
                    backgroundColor: [
                        'rgba(255, 133, 133, 0.9)',
                        'rgba(33, 197, 255, 0.9)',
                        'rgba(115, 211, 126, 0.9)'
                    ]
                }]
            },
            options: {
                indexAxis: 'y', // Esto hace que las barras sean horizontales
                plugins: {
                    legend: {
                        display: false // Asegura que no se muestre la leyenda
                    }
                },
                scales: {
                    x: { // Ahora la escala 'x' define el rango de los valores
                        beginAtZero: true,
                        min: 0, // Define aquí tu valor mínimo fijo, si es necesario
                        max: 42604, // Define aquí tu valor máximo fijo
                    },
                    y: { // La escala 'y' se usa para las etiquetas
                        // No es necesario definir 'beginAtZero', 'min', o 'max' aquí
                    }
                }
            }
        });
    }

    componentDidUpdate(prevProps) {
        // Comprobar si los nuevos datos son diferentes de los anteriores
        if (this.props.data !== prevProps.data) {
            // Aquí deberías actualizar el gráfico con los nuevos datos
            this.barChart.data.datasets[0].data = this.props.data;
            this.barChart.update();
        }
    }

    render() {
        return (
            <div id="kilometersplot" style={{ padding: "5px" }}>
                <h1 id="title" style={{ marginTop: "10px"}}>Travelled Distance (km)</h1>
                <canvas id="barChart" width="200" height="80"></canvas>
            </div>
        );
    }
}

