// import React, { Component } from 'react';
// import {render} from 'react-dom';

// export class Share extends Component {
//     componentDidMount() {
//         if (typeof Chart === 'undefined') {
//             console.error('Chart.js is not loaded');
//             return;
//         }

//         const ctx = document.getElementById('pieChart').getContext('2d');
//         const {data} = this.props;
//         const pieChart = new Chart(ctx, {
//             type: 'pie',
//             data: {
//                 labels: ['CAR', 'PT', 'WALK'],
//                 datasets: [{
//                     // label: 'Transportation Share',
//                     data: data, // Utilizar los datos pasados como props
//                     backgroundColor: [
//                         'rgba(255, 133, 133, 0.9)',
//                         'rgba(33, 197, 255, 0.9)',
//                         'rgba(115, 211, 126, 0.9)'
//                     ],
//                     borderColor: [
//                         'rgb(255, 133, 133)',
//                         'rgb(33, 197, 255)',
//                         'rgb(115, 211, 126)'
//                     ],
//                     borderWidth: 1
//                 }]
//             },
            // options: {
            //     plugins: {
            //         legend: {
            //             position: 'left', // Posiciona la leyenda a la derecha
            //             labels: {
            //                 color: 'white', // Cambia el color del texto a blanco
            //                 font: {
            //                     weight: 'bold', // Aplica negrita al texto
            //                 },
            //                 // padding: 20, // Ajusta la separación interna entre los ítems de la leyenda
            //             }
            //         }
            //     },
            //     layout: {
            //         padding: {
            //             left: 0 // Ajusta la separación externa entre la leyenda y el gráfico
            //         }
            //     }
            // }
//         });
//     }

//     render() {
//         return (
//             <div id="shareplot" style={{ padding: "0px" }}>
//                 <h1 id="title" style={{ marginBottom: "0px" , marginTop: "10px"}}>Transportation Share</h1>
//                 <canvas id="pieChart" style={{ marginTop: "-30px" }} width="130" height="130"></canvas>
//             </div>
//         );
//     }
// }

import React, { Component } from 'react';
// Asegúrate de importar Chart.js si aún no lo has hecho

export class Share extends Component {
    constructor(props) {
        super(props);
        this.pieChart = null; // Inicializa la referencia del gráfico como null
    }

    componentDidMount() {
        if (typeof Chart === 'undefined') {
            console.error('Chart.js is not loaded');
            return;
        }

        const ctx = document.getElementById('pieChart').getContext('2d');
        this.pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['CAR', 'PT', 'WALK'],
                datasets: [{
                    data: this.props.data, // Utilizar los datos pasados como props
                    backgroundColor: [
                        'rgba(255, 133, 133, 0.9)',
                        'rgba(33, 197, 255, 0.9)',
                        'rgba(115, 211, 126, 0.9)'
                    ],
                    borderColor: [
                        'rgb(255, 133, 133)',
                        'rgb(33, 197, 255)',
                        'rgb(115, 211, 126)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    legend: {
                        position: 'left', // Posiciona la leyenda a la derecha
                        labels: {
                            color: 'white', // Cambia el color del texto a blanco
                            font: {
                                weight: 'bold', // Aplica negrita al texto
                            },
                            // padding: 20, // Ajusta la separación interna entre los ítems de la leyenda
                        }
                    }
                },
                layout: {
                    padding: {
                        left: 0 // Ajusta la separación externa entre la lelyenda y el gráfico
                    }
                }
            }
        });
    }

    componentDidUpdate(prevProps) {
        // Comprobar si los nuevos datos son diferentes de los anteriores
        if (this.props.data !== prevProps.data) {
            // Aquí deberías actualizar el gráfico con los nuevos datos
            this.pieChart.data.datasets[0].data = this.props.data;
            this.pieChart.update();
        }
    }

    render() {
        return (
            <div id="shareplot" style={{ padding: "0px" }}>
                <h1 id="title" style={{ marginBottom: "0px" , marginTop: "10px"}}>Transportation Share</h1>
                <canvas id="pieChart" style={{ marginTop: "-30px" }} width="50" height="50"></canvas>
            </div>
        );
    }
}


