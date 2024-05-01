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

// NEW TRY

import arc_layer_0_O1_100 from '../../file_generation/results2/arcs/arc_layer_0_O1_100.json';
import arc_layer_0_O2_100 from '../../file_generation/results2/arcs/arc_layer_0_O2_100.json';
import arc_layer_0_O3_100 from '../../file_generation/results2/arcs/arc_layer_0_O3_100.json';
import arc_layer_0_O4_100 from '../../file_generation/results2/arcs/arc_layer_0_O4_100.json';
import arc_layer_0_O5_100 from '../../file_generation/results2/arcs/arc_layer_0_O5_100.json';
import arc_layer_0_D1_100 from '../../file_generation/results2/arcs/arc_layer_0_D1_100.json';
import arc_layer_0_D2_100 from '../../file_generation/results2/arcs/arc_layer_0_D2_100.json';
import arc_layer_0_D3_100 from '../../file_generation/results2/arcs/arc_layer_0_D3_100.json';
import arc_layer_0_D4_100 from '../../file_generation/results2/arcs/arc_layer_0_D4_100.json';
import arc_layer_0_D5_100 from '../../file_generation/results2/arcs/arc_layer_0_D5_100.json';

import arc_layer_1_O1_100 from '../../file_generation/results2/arcs/arc_layer_1_O1_100.json';
import arc_layer_1_O2_100 from '../../file_generation/results2/arcs/arc_layer_1_O2_100.json';
import arc_layer_1_O3_100 from '../../file_generation/results2/arcs/arc_layer_1_O3_100.json';
import arc_layer_1_O4_100 from '../../file_generation/results2/arcs/arc_layer_1_O4_100.json';
import arc_layer_1_O5_100 from '../../file_generation/results2/arcs/arc_layer_1_O5_100.json';
import arc_layer_1_D1_100 from '../../file_generation/results2/arcs/arc_layer_1_D1_100.json';
import arc_layer_1_D2_100 from '../../file_generation/results2/arcs/arc_layer_1_D2_100.json';
import arc_layer_1_D3_100 from '../../file_generation/results2/arcs/arc_layer_1_D3_100.json';
import arc_layer_1_D4_100 from '../../file_generation/results2/arcs/arc_layer_1_D4_100.json';
import arc_layer_1_D5_100 from '../../file_generation/results2/arcs/arc_layer_1_D5_100.json';

import arc_layer_2_O1_100 from '../../file_generation/results2/arcs/arc_layer_2_O1_100.json';
import arc_layer_2_O2_100 from '../../file_generation/results2/arcs/arc_layer_2_O2_100.json';
import arc_layer_2_O3_100 from '../../file_generation/results2/arcs/arc_layer_2_O3_100.json';
import arc_layer_2_O4_100 from '../../file_generation/results2/arcs/arc_layer_2_O4_100.json';
import arc_layer_2_O5_100 from '../../file_generation/results2/arcs/arc_layer_2_O5_100.json';
import arc_layer_2_D1_100 from '../../file_generation/results2/arcs/arc_layer_2_D1_100.json';
import arc_layer_2_D2_100 from '../../file_generation/results2/arcs/arc_layer_2_D2_100.json';
import arc_layer_2_D3_100 from '../../file_generation/results2/arcs/arc_layer_2_D3_100.json';
import arc_layer_2_D4_100 from '../../file_generation/results2/arcs/arc_layer_2_D4_100.json';
import arc_layer_2_D5_100 from '../../file_generation/results2/arcs/arc_layer_2_D5_100.json';

import arc_layer_3_O1_100 from '../../file_generation/results2/arcs/arc_layer_3_O1_100.json';
import arc_layer_3_O2_100 from '../../file_generation/results2/arcs/arc_layer_3_O2_100.json';
import arc_layer_3_O3_100 from '../../file_generation/results2/arcs/arc_layer_3_O3_100.json';
import arc_layer_3_O4_100 from '../../file_generation/results2/arcs/arc_layer_3_O4_100.json';
import arc_layer_3_O5_100 from '../../file_generation/results2/arcs/arc_layer_3_O5_100.json';
import arc_layer_3_D1_100 from '../../file_generation/results2/arcs/arc_layer_3_D1_100.json';
import arc_layer_3_D2_100 from '../../file_generation/results2/arcs/arc_layer_3_D2_100.json';
import arc_layer_3_D3_100 from '../../file_generation/results2/arcs/arc_layer_3_D3_100.json';
import arc_layer_3_D4_100 from '../../file_generation/results2/arcs/arc_layer_3_D4_100.json';
import arc_layer_3_D5_100 from '../../file_generation/results2/arcs/arc_layer_3_D5_100.json';

import arc_layer_4_O1_100 from '../../file_generation/results2/arcs/arc_layer_4_O1_100.json';
import arc_layer_4_O2_100 from '../../file_generation/results2/arcs/arc_layer_4_O2_100.json';
import arc_layer_4_O3_100 from '../../file_generation/results2/arcs/arc_layer_4_O3_100.json';
import arc_layer_4_O4_100 from '../../file_generation/results2/arcs/arc_layer_4_O4_100.json';
import arc_layer_4_O5_100 from '../../file_generation/results2/arcs/arc_layer_4_O5_100.json';
import arc_layer_4_D1_100 from '../../file_generation/results2/arcs/arc_layer_4_D1_100.json';
import arc_layer_4_D2_100 from '../../file_generation/results2/arcs/arc_layer_4_D2_100.json';
import arc_layer_4_D3_100 from '../../file_generation/results2/arcs/arc_layer_4_D3_100.json';
import arc_layer_4_D4_100 from '../../file_generation/results2/arcs/arc_layer_4_D4_100.json';
import arc_layer_4_D5_100 from '../../file_generation/results2/arcs/arc_layer_4_D5_100.json';

import arc_layer_0_O1_80 from '../../file_generation/results2/arcs/arc_layer_0_O1_80.json';
import arc_layer_0_O2_80 from '../../file_generation/results2/arcs/arc_layer_0_O2_80.json';
import arc_layer_0_O3_80 from '../../file_generation/results2/arcs/arc_layer_0_O3_80.json';
import arc_layer_0_O4_80 from '../../file_generation/results2/arcs/arc_layer_0_O4_80.json';
import arc_layer_0_O5_80 from '../../file_generation/results2/arcs/arc_layer_0_O5_80.json';
import arc_layer_0_D1_80 from '../../file_generation/results2/arcs/arc_layer_0_D1_80.json';
import arc_layer_0_D2_80 from '../../file_generation/results2/arcs/arc_layer_0_D2_80.json';
import arc_layer_0_D3_80 from '../../file_generation/results2/arcs/arc_layer_0_D3_80.json';
import arc_layer_0_D4_80 from '../../file_generation/results2/arcs/arc_layer_0_D4_80.json';
import arc_layer_0_D5_80 from '../../file_generation/results2/arcs/arc_layer_0_D5_80.json';

import arc_layer_1_O1_80 from '../../file_generation/results2/arcs/arc_layer_1_O1_80.json';
import arc_layer_1_O2_80 from '../../file_generation/results2/arcs/arc_layer_1_O2_80.json';
import arc_layer_1_O3_80 from '../../file_generation/results2/arcs/arc_layer_1_O3_80.json';
import arc_layer_1_O4_80 from '../../file_generation/results2/arcs/arc_layer_1_O4_80.json';
import arc_layer_1_O5_80 from '../../file_generation/results2/arcs/arc_layer_1_O5_80.json';
import arc_layer_1_D1_80 from '../../file_generation/results2/arcs/arc_layer_1_D1_80.json';
import arc_layer_1_D2_80 from '../../file_generation/results2/arcs/arc_layer_1_D2_80.json';
import arc_layer_1_D3_80 from '../../file_generation/results2/arcs/arc_layer_1_D3_80.json';
import arc_layer_1_D4_80 from '../../file_generation/results2/arcs/arc_layer_1_D4_80.json';
import arc_layer_1_D5_80 from '../../file_generation/results2/arcs/arc_layer_1_D5_80.json';

import arc_layer_2_O1_80 from '../../file_generation/results2/arcs/arc_layer_2_O1_80.json';
import arc_layer_2_O2_80 from '../../file_generation/results2/arcs/arc_layer_2_O2_80.json';
import arc_layer_2_O3_80 from '../../file_generation/results2/arcs/arc_layer_2_O3_80.json';
import arc_layer_2_O4_80 from '../../file_generation/results2/arcs/arc_layer_2_O4_80.json';
import arc_layer_2_O5_80 from '../../file_generation/results2/arcs/arc_layer_2_O5_80.json';
import arc_layer_2_D1_80 from '../../file_generation/results2/arcs/arc_layer_2_D1_80.json';
import arc_layer_2_D2_80 from '../../file_generation/results2/arcs/arc_layer_2_D2_80.json';
import arc_layer_2_D3_80 from '../../file_generation/results2/arcs/arc_layer_2_D3_80.json';
import arc_layer_2_D4_80 from '../../file_generation/results2/arcs/arc_layer_2_D4_80.json';
import arc_layer_2_D5_80 from '../../file_generation/results2/arcs/arc_layer_2_D5_80.json';

import arc_layer_3_O1_80 from '../../file_generation/results2/arcs/arc_layer_3_O1_80.json';
import arc_layer_3_O2_80 from '../../file_generation/results2/arcs/arc_layer_3_O2_80.json';
import arc_layer_3_O3_80 from '../../file_generation/results2/arcs/arc_layer_3_O3_80.json';
import arc_layer_3_O4_80 from '../../file_generation/results2/arcs/arc_layer_3_O4_80.json';
import arc_layer_3_O5_80 from '../../file_generation/results2/arcs/arc_layer_3_O5_80.json';
import arc_layer_3_D1_80 from '../../file_generation/results2/arcs/arc_layer_3_D1_80.json';
import arc_layer_3_D2_80 from '../../file_generation/results2/arcs/arc_layer_3_D2_80.json';
import arc_layer_3_D3_80 from '../../file_generation/results2/arcs/arc_layer_3_D3_80.json';
import arc_layer_3_D4_80 from '../../file_generation/results2/arcs/arc_layer_3_D4_80.json';
import arc_layer_3_D5_80 from '../../file_generation/results2/arcs/arc_layer_3_D5_80.json';

import arc_layer_4_O1_80 from '../../file_generation/results2/arcs/arc_layer_4_O1_80.json';
import arc_layer_4_O2_80 from '../../file_generation/results2/arcs/arc_layer_4_O2_80.json';
import arc_layer_4_O3_80 from '../../file_generation/results2/arcs/arc_layer_4_O3_80.json';
import arc_layer_4_O4_80 from '../../file_generation/results2/arcs/arc_layer_4_O4_80.json';
import arc_layer_4_O5_80 from '../../file_generation/results2/arcs/arc_layer_4_O5_80.json';
import arc_layer_4_D1_80 from '../../file_generation/results2/arcs/arc_layer_4_D1_80.json';
import arc_layer_4_D2_80 from '../../file_generation/results2/arcs/arc_layer_4_D2_80.json';
import arc_layer_4_D3_80 from '../../file_generation/results2/arcs/arc_layer_4_D3_80.json';
import arc_layer_4_D4_80 from '../../file_generation/results2/arcs/arc_layer_4_D4_80.json';
import arc_layer_4_D5_80 from '../../file_generation/results2/arcs/arc_layer_4_D5_80.json';

import arc_layer_0_O1_60 from '../../file_generation/results2/arcs/arc_layer_0_O1_60.json';
import arc_layer_0_O2_60 from '../../file_generation/results2/arcs/arc_layer_0_O2_60.json';
import arc_layer_0_O3_60 from '../../file_generation/results2/arcs/arc_layer_0_O3_60.json';
import arc_layer_0_O4_60 from '../../file_generation/results2/arcs/arc_layer_0_O4_60.json';
import arc_layer_0_O5_60 from '../../file_generation/results2/arcs/arc_layer_0_O5_60.json';
import arc_layer_0_D1_60 from '../../file_generation/results2/arcs/arc_layer_0_D1_60.json';
import arc_layer_0_D2_60 from '../../file_generation/results2/arcs/arc_layer_0_D2_60.json';
import arc_layer_0_D3_60 from '../../file_generation/results2/arcs/arc_layer_0_D3_60.json';
import arc_layer_0_D4_60 from '../../file_generation/results2/arcs/arc_layer_0_D4_60.json';
import arc_layer_0_D5_60 from '../../file_generation/results2/arcs/arc_layer_0_D5_60.json';

import arc_layer_1_O1_60 from '../../file_generation/results2/arcs/arc_layer_1_O1_60.json';
import arc_layer_1_O2_60 from '../../file_generation/results2/arcs/arc_layer_1_O2_60.json';
import arc_layer_1_O3_60 from '../../file_generation/results2/arcs/arc_layer_1_O3_60.json';
import arc_layer_1_O4_60 from '../../file_generation/results2/arcs/arc_layer_1_O4_60.json';
import arc_layer_1_O5_60 from '../../file_generation/results2/arcs/arc_layer_1_O5_60.json';
import arc_layer_1_D1_60 from '../../file_generation/results2/arcs/arc_layer_1_D1_60.json';
import arc_layer_1_D2_60 from '../../file_generation/results2/arcs/arc_layer_1_D2_60.json';
import arc_layer_1_D3_60 from '../../file_generation/results2/arcs/arc_layer_1_D3_60.json';
import arc_layer_1_D4_60 from '../../file_generation/results2/arcs/arc_layer_1_D4_60.json';
import arc_layer_1_D5_60 from '../../file_generation/results2/arcs/arc_layer_1_D5_60.json';

import arc_layer_2_O1_60 from '../../file_generation/results2/arcs/arc_layer_2_O1_60.json';
import arc_layer_2_O2_60 from '../../file_generation/results2/arcs/arc_layer_2_O2_60.json';
import arc_layer_2_O3_60 from '../../file_generation/results2/arcs/arc_layer_2_O3_60.json';
import arc_layer_2_O4_60 from '../../file_generation/results2/arcs/arc_layer_2_O4_60.json';
import arc_layer_2_O5_60 from '../../file_generation/results2/arcs/arc_layer_2_O5_60.json';
import arc_layer_2_D1_60 from '../../file_generation/results2/arcs/arc_layer_2_D1_60.json';
import arc_layer_2_D2_60 from '../../file_generation/results2/arcs/arc_layer_2_D2_60.json';
import arc_layer_2_D3_60 from '../../file_generation/results2/arcs/arc_layer_2_D3_60.json';
import arc_layer_2_D4_60 from '../../file_generation/results2/arcs/arc_layer_2_D4_60.json';
import arc_layer_2_D5_60 from '../../file_generation/results2/arcs/arc_layer_2_D5_60.json';

import arc_layer_3_O1_60 from '../../file_generation/results2/arcs/arc_layer_3_O1_60.json';
import arc_layer_3_O2_60 from '../../file_generation/results2/arcs/arc_layer_3_O2_60.json';
import arc_layer_3_O3_60 from '../../file_generation/results2/arcs/arc_layer_3_O3_60.json';
import arc_layer_3_O4_60 from '../../file_generation/results2/arcs/arc_layer_3_O4_60.json';
import arc_layer_3_O5_60 from '../../file_generation/results2/arcs/arc_layer_3_O5_60.json';
import arc_layer_3_D1_60 from '../../file_generation/results2/arcs/arc_layer_3_D1_60.json';
import arc_layer_3_D2_60 from '../../file_generation/results2/arcs/arc_layer_3_D2_60.json';
import arc_layer_3_D3_60 from '../../file_generation/results2/arcs/arc_layer_3_D3_60.json';
import arc_layer_3_D4_60 from '../../file_generation/results2/arcs/arc_layer_3_D4_60.json';
import arc_layer_3_D5_60 from '../../file_generation/results2/arcs/arc_layer_3_D5_60.json';

import arc_layer_4_O1_60 from '../../file_generation/results2/arcs/arc_layer_4_O1_60.json';
import arc_layer_4_O2_60 from '../../file_generation/results2/arcs/arc_layer_4_O2_60.json';
import arc_layer_4_O3_60 from '../../file_generation/results2/arcs/arc_layer_4_O3_60.json';
import arc_layer_4_O4_60 from '../../file_generation/results2/arcs/arc_layer_4_O4_60.json';
import arc_layer_4_O5_60 from '../../file_generation/results2/arcs/arc_layer_4_O5_60.json';
import arc_layer_4_D1_60 from '../../file_generation/results2/arcs/arc_layer_4_D1_60.json';
import arc_layer_4_D2_60 from '../../file_generation/results2/arcs/arc_layer_4_D2_60.json';
import arc_layer_4_D3_60 from '../../file_generation/results2/arcs/arc_layer_4_D3_60.json';
import arc_layer_4_D4_60 from '../../file_generation/results2/arcs/arc_layer_4_D4_60.json';
import arc_layer_4_D5_60 from '../../file_generation/results2/arcs/arc_layer_4_D5_60.json';

import arc_layer_0_O1_40 from '../../file_generation/results2/arcs/arc_layer_0_O1_40.json';
import arc_layer_0_O2_40 from '../../file_generation/results2/arcs/arc_layer_0_O2_40.json';
import arc_layer_0_O3_40 from '../../file_generation/results2/arcs/arc_layer_0_O3_40.json';
import arc_layer_0_O4_40 from '../../file_generation/results2/arcs/arc_layer_0_O4_40.json';
import arc_layer_0_O5_40 from '../../file_generation/results2/arcs/arc_layer_0_O5_40.json';
import arc_layer_0_D1_40 from '../../file_generation/results2/arcs/arc_layer_0_D1_40.json';
import arc_layer_0_D2_40 from '../../file_generation/results2/arcs/arc_layer_0_D2_40.json';
import arc_layer_0_D3_40 from '../../file_generation/results2/arcs/arc_layer_0_D3_40.json';
import arc_layer_0_D4_40 from '../../file_generation/results2/arcs/arc_layer_0_D4_40.json';
import arc_layer_0_D5_40 from '../../file_generation/results2/arcs/arc_layer_0_D5_40.json';

import arc_layer_1_O1_40 from '../../file_generation/results2/arcs/arc_layer_1_O1_40.json';
import arc_layer_1_O2_40 from '../../file_generation/results2/arcs/arc_layer_1_O2_40.json';
import arc_layer_1_O3_40 from '../../file_generation/results2/arcs/arc_layer_1_O3_40.json';
import arc_layer_1_O4_40 from '../../file_generation/results2/arcs/arc_layer_1_O4_40.json';
import arc_layer_1_O5_40 from '../../file_generation/results2/arcs/arc_layer_1_O5_40.json';
import arc_layer_1_D1_40 from '../../file_generation/results2/arcs/arc_layer_1_D1_40.json';
import arc_layer_1_D2_40 from '../../file_generation/results2/arcs/arc_layer_1_D2_40.json';
import arc_layer_1_D3_40 from '../../file_generation/results2/arcs/arc_layer_1_D3_40.json';
import arc_layer_1_D4_40 from '../../file_generation/results2/arcs/arc_layer_1_D4_40.json';
import arc_layer_1_D5_40 from '../../file_generation/results2/arcs/arc_layer_1_D5_40.json';

import arc_layer_2_O1_40 from '../../file_generation/results2/arcs/arc_layer_2_O1_40.json';
import arc_layer_2_O2_40 from '../../file_generation/results2/arcs/arc_layer_2_O2_40.json';
import arc_layer_2_O3_40 from '../../file_generation/results2/arcs/arc_layer_2_O3_40.json';
import arc_layer_2_O4_40 from '../../file_generation/results2/arcs/arc_layer_2_O4_40.json';
import arc_layer_2_O5_40 from '../../file_generation/results2/arcs/arc_layer_2_O5_40.json';
import arc_layer_2_D1_40 from '../../file_generation/results2/arcs/arc_layer_2_D1_40.json';
import arc_layer_2_D2_40 from '../../file_generation/results2/arcs/arc_layer_2_D2_40.json';
import arc_layer_2_D3_40 from '../../file_generation/results2/arcs/arc_layer_2_D3_40.json';
import arc_layer_2_D4_40 from '../../file_generation/results2/arcs/arc_layer_2_D4_40.json';
import arc_layer_2_D5_40 from '../../file_generation/results2/arcs/arc_layer_2_D5_40.json';

import arc_layer_3_O1_40 from '../../file_generation/results2/arcs/arc_layer_3_O1_40.json';
import arc_layer_3_O2_40 from '../../file_generation/results2/arcs/arc_layer_3_O2_40.json';
import arc_layer_3_O3_40 from '../../file_generation/results2/arcs/arc_layer_3_O3_40.json';
import arc_layer_3_O4_40 from '../../file_generation/results2/arcs/arc_layer_3_O4_40.json';
import arc_layer_3_O5_40 from '../../file_generation/results2/arcs/arc_layer_3_O5_40.json';
import arc_layer_3_D1_40 from '../../file_generation/results2/arcs/arc_layer_3_D1_40.json';
import arc_layer_3_D2_40 from '../../file_generation/results2/arcs/arc_layer_3_D2_40.json';
import arc_layer_3_D3_40 from '../../file_generation/results2/arcs/arc_layer_3_D3_40.json';
import arc_layer_3_D4_40 from '../../file_generation/results2/arcs/arc_layer_3_D4_40.json';
import arc_layer_3_D5_40 from '../../file_generation/results2/arcs/arc_layer_3_D5_40.json';

import arc_layer_4_O1_40 from '../../file_generation/results2/arcs/arc_layer_4_O1_40.json';
import arc_layer_4_O2_40 from '../../file_generation/results2/arcs/arc_layer_4_O2_40.json';
import arc_layer_4_O3_40 from '../../file_generation/results2/arcs/arc_layer_4_O3_40.json';
import arc_layer_4_O4_40 from '../../file_generation/results2/arcs/arc_layer_4_O4_40.json';
import arc_layer_4_O5_40 from '../../file_generation/results2/arcs/arc_layer_4_O5_40.json';
import arc_layer_4_D1_40 from '../../file_generation/results2/arcs/arc_layer_4_D1_40.json';
import arc_layer_4_D2_40 from '../../file_generation/results2/arcs/arc_layer_4_D2_40.json';
import arc_layer_4_D3_40 from '../../file_generation/results2/arcs/arc_layer_4_D3_40.json';
import arc_layer_4_D4_40 from '../../file_generation/results2/arcs/arc_layer_4_D4_40.json';
import arc_layer_4_D5_40 from '../../file_generation/results2/arcs/arc_layer_4_D5_40.json';

// TRIPS LAYER

import trips_layer_0_O1_100 from '../../file_generation/results2/trips/trips_layer_0_O1_100.json';
import trips_layer_0_O2_100 from '../../file_generation/results2/trips/trips_layer_0_O2_100.json';
import trips_layer_0_O3_100 from '../../file_generation/results2/trips/trips_layer_0_O3_100.json';
import trips_layer_0_O4_100 from '../../file_generation/results2/trips/trips_layer_0_O4_100.json';
import trips_layer_0_O5_100 from '../../file_generation/results2/trips/trips_layer_0_O5_100.json';
import trips_layer_0_D1_100 from '../../file_generation/results2/trips/trips_layer_0_D1_100.json';
import trips_layer_0_D2_100 from '../../file_generation/results2/trips/trips_layer_0_D2_100.json';
import trips_layer_0_D3_100 from '../../file_generation/results2/trips/trips_layer_0_D3_100.json';
import trips_layer_0_D4_100 from '../../file_generation/results2/trips/trips_layer_0_D4_100.json';
import trips_layer_0_D5_100 from '../../file_generation/results2/trips/trips_layer_0_D5_100.json';

// HEXAGONS

import hexagon_layer_0_O1_100 from '../../file_generation/results2/hexagons/hexagons_layer_0_O1_100.json';
import hexagon_layer_0_O2_100 from '../../file_generation/results2/hexagons/hexagons_layer_0_O2_100.json';
import hexagon_layer_0_O3_100 from '../../file_generation/results2/hexagons/hexagons_layer_0_O3_100.json';
import hexagon_layer_0_O4_100 from '../../file_generation/results2/hexagons/hexagons_layer_0_O4_100.json';
import hexagon_layer_0_O5_100 from '../../file_generation/results2/hexagons/hexagons_layer_0_O5_100.json';
import hexagon_layer_0_D1_100 from '../../file_generation/results2/hexagons/hexagons_layer_0_D1_100.json';
import hexagon_layer_0_D2_100 from '../../file_generation/results2/hexagons/hexagons_layer_0_D2_100.json';
import hexagon_layer_0_D3_100 from '../../file_generation/results2/hexagons/hexagons_layer_0_D3_100.json';
import hexagon_layer_0_D4_100 from '../../file_generation/results2/hexagons/hexagons_layer_0_D4_100.json';
import hexagon_layer_0_D5_100 from '../../file_generation/results2/hexagons/hexagons_layer_0_D5_100.json';

import hexagon_layer_1_O1_100 from '../../file_generation/results2/hexagons/hexagons_layer_1_O1_100.json';
import hexagon_layer_1_O2_100 from '../../file_generation/results2/hexagons/hexagons_layer_1_O2_100.json';
import hexagon_layer_1_O3_100 from '../../file_generation/results2/hexagons/hexagons_layer_1_O3_100.json';
import hexagon_layer_1_O4_100 from '../../file_generation/results2/hexagons/hexagons_layer_1_O4_100.json';
import hexagon_layer_1_O5_100 from '../../file_generation/results2/hexagons/hexagons_layer_1_O5_100.json';
import hexagon_layer_1_D1_100 from '../../file_generation/results2/hexagons/hexagons_layer_1_D1_100.json';
import hexagon_layer_1_D2_100 from '../../file_generation/results2/hexagons/hexagons_layer_1_D2_100.json';
import hexagon_layer_1_D3_100 from '../../file_generation/results2/hexagons/hexagons_layer_1_D3_100.json';
import hexagon_layer_1_D4_100 from '../../file_generation/results2/hexagons/hexagons_layer_1_D4_100.json';
import hexagon_layer_1_D5_100 from '../../file_generation/results2/hexagons/hexagons_layer_1_D5_100.json';

import hexagon_layer_2_O1_100 from '../../file_generation/results2/hexagons/hexagons_layer_2_O1_100.json';
import hexagon_layer_2_O2_100 from '../../file_generation/results2/hexagons/hexagons_layer_2_O2_100.json';
import hexagon_layer_2_O3_100 from '../../file_generation/results2/hexagons/hexagons_layer_2_O3_100.json';
import hexagon_layer_2_O4_100 from '../../file_generation/results2/hexagons/hexagons_layer_2_O4_100.json';
import hexagon_layer_2_O5_100 from '../../file_generation/results2/hexagons/hexagons_layer_2_O5_100.json';
import hexagon_layer_2_D1_100 from '../../file_generation/results2/hexagons/hexagons_layer_2_D1_100.json';
import hexagon_layer_2_D2_100 from '../../file_generation/results2/hexagons/hexagons_layer_2_D2_100.json';
import hexagon_layer_2_D3_100 from '../../file_generation/results2/hexagons/hexagons_layer_2_D3_100.json';
import hexagon_layer_2_D4_100 from '../../file_generation/results2/hexagons/hexagons_layer_2_D4_100.json';
import hexagon_layer_2_D5_100 from '../../file_generation/results2/hexagons/hexagons_layer_2_D5_100.json';

import hexagon_layer_3_O1_100 from '../../file_generation/results2/hexagons/hexagons_layer_3_O1_100.json';
import hexagon_layer_3_O2_100 from '../../file_generation/results2/hexagons/hexagons_layer_3_O2_100.json';
import hexagon_layer_3_O3_100 from '../../file_generation/results2/hexagons/hexagons_layer_3_O3_100.json';
import hexagon_layer_3_O4_100 from '../../file_generation/results2/hexagons/hexagons_layer_3_O4_100.json';
import hexagon_layer_3_O5_100 from '../../file_generation/results2/hexagons/hexagons_layer_3_O5_100.json';
import hexagon_layer_3_D1_100 from '../../file_generation/results2/hexagons/hexagons_layer_3_D1_100.json';
import hexagon_layer_3_D2_100 from '../../file_generation/results2/hexagons/hexagons_layer_3_D2_100.json';
import hexagon_layer_3_D3_100 from '../../file_generation/results2/hexagons/hexagons_layer_3_D3_100.json';
import hexagon_layer_3_D4_100 from '../../file_generation/results2/hexagons/hexagons_layer_3_D4_100.json';
import hexagon_layer_3_D5_100 from '../../file_generation/results2/hexagons/hexagons_layer_3_D5_100.json';

import hexagon_layer_4_O1_100 from '../../file_generation/results2/hexagons/hexagons_layer_4_O1_100.json';
import hexagon_layer_4_O2_100 from '../../file_generation/results2/hexagons/hexagons_layer_4_O2_100.json';
import hexagon_layer_4_O3_100 from '../../file_generation/results2/hexagons/hexagons_layer_4_O3_100.json';
import hexagon_layer_4_O4_100 from '../../file_generation/results2/hexagons/hexagons_layer_4_O4_100.json';
import hexagon_layer_4_O5_100 from '../../file_generation/results2/hexagons/hexagons_layer_4_O5_100.json';
import hexagon_layer_4_D1_100 from '../../file_generation/results2/hexagons/hexagons_layer_4_D1_100.json';
import hexagon_layer_4_D2_100 from '../../file_generation/results2/hexagons/hexagons_layer_4_D2_100.json';
import hexagon_layer_4_D3_100 from '../../file_generation/results2/hexagons/hexagons_layer_4_D3_100.json';
import hexagon_layer_4_D4_100 from '../../file_generation/results2/hexagons/hexagons_layer_4_D4_100.json';
import hexagon_layer_4_D5_100 from '../../file_generation/results2/hexagons/hexagons_layer_4_D5_100.json';

import hexagon_layer_0_O1_80 from '../../file_generation/results2/hexagons/hexagons_layer_0_O1_80.json';
import hexagon_layer_0_O2_80 from '../../file_generation/results2/hexagons/hexagons_layer_0_O2_80.json';
import hexagon_layer_0_O3_80 from '../../file_generation/results2/hexagons/hexagons_layer_0_O3_80.json';
import hexagon_layer_0_O4_80 from '../../file_generation/results2/hexagons/hexagons_layer_0_O4_80.json';
import hexagon_layer_0_O5_80 from '../../file_generation/results2/hexagons/hexagons_layer_0_O5_80.json';
import hexagon_layer_0_D1_80 from '../../file_generation/results2/hexagons/hexagons_layer_0_D1_80.json';
import hexagon_layer_0_D2_80 from '../../file_generation/results2/hexagons/hexagons_layer_0_D2_80.json';
import hexagon_layer_0_D3_80 from '../../file_generation/results2/hexagons/hexagons_layer_0_D3_80.json';
import hexagon_layer_0_D4_80 from '../../file_generation/results2/hexagons/hexagons_layer_0_D4_80.json';
import hexagon_layer_0_D5_80 from '../../file_generation/results2/hexagons/hexagons_layer_0_D5_80.json';

import hexagon_layer_1_O1_80 from '../../file_generation/results2/hexagons/hexagons_layer_1_O1_80.json';
import hexagon_layer_1_O2_80 from '../../file_generation/results2/hexagons/hexagons_layer_1_O2_80.json';
import hexagon_layer_1_O3_80 from '../../file_generation/results2/hexagons/hexagons_layer_1_O3_80.json';
import hexagon_layer_1_O4_80 from '../../file_generation/results2/hexagons/hexagons_layer_1_O4_80.json';
import hexagon_layer_1_O5_80 from '../../file_generation/results2/hexagons/hexagons_layer_1_O5_80.json';
import hexagon_layer_1_D1_80 from '../../file_generation/results2/hexagons/hexagons_layer_1_D1_80.json';
import hexagon_layer_1_D2_80 from '../../file_generation/results2/hexagons/hexagons_layer_1_D2_80.json';
import hexagon_layer_1_D3_80 from '../../file_generation/results2/hexagons/hexagons_layer_1_D3_80.json';
import hexagon_layer_1_D4_80 from '../../file_generation/results2/hexagons/hexagons_layer_1_D4_80.json';
import hexagon_layer_1_D5_80 from '../../file_generation/results2/hexagons/hexagons_layer_1_D5_80.json';

import hexagon_layer_2_O1_80 from '../../file_generation/results2/hexagons/hexagons_layer_2_O1_80.json';
import hexagon_layer_2_O2_80 from '../../file_generation/results2/hexagons/hexagons_layer_2_O2_80.json';
import hexagon_layer_2_O3_80 from '../../file_generation/results2/hexagons/hexagons_layer_2_O3_80.json';
import hexagon_layer_2_O4_80 from '../../file_generation/results2/hexagons/hexagons_layer_2_O4_80.json';
import hexagon_layer_2_O5_80 from '../../file_generation/results2/hexagons/hexagons_layer_2_O5_80.json';
import hexagon_layer_2_D1_80 from '../../file_generation/results2/hexagons/hexagons_layer_2_D1_80.json';
import hexagon_layer_2_D2_80 from '../../file_generation/results2/hexagons/hexagons_layer_2_D2_80.json';
import hexagon_layer_2_D3_80 from '../../file_generation/results2/hexagons/hexagons_layer_2_D3_80.json';
import hexagon_layer_2_D4_80 from '../../file_generation/results2/hexagons/hexagons_layer_2_D4_80.json';
import hexagon_layer_2_D5_80 from '../../file_generation/results2/hexagons/hexagons_layer_2_D5_80.json';

import hexagon_layer_3_O1_80 from '../../file_generation/results2/hexagons/hexagons_layer_3_O1_80.json';
import hexagon_layer_3_O2_80 from '../../file_generation/results2/hexagons/hexagons_layer_3_O2_80.json';
import hexagon_layer_3_O3_80 from '../../file_generation/results2/hexagons/hexagons_layer_3_O3_80.json';
import hexagon_layer_3_O4_80 from '../../file_generation/results2/hexagons/hexagons_layer_3_O4_80.json';
import hexagon_layer_3_O5_80 from '../../file_generation/results2/hexagons/hexagons_layer_3_O5_80.json';
import hexagon_layer_3_D1_80 from '../../file_generation/results2/hexagons/hexagons_layer_3_D1_80.json';
import hexagon_layer_3_D2_80 from '../../file_generation/results2/hexagons/hexagons_layer_3_D2_80.json';
import hexagon_layer_3_D3_80 from '../../file_generation/results2/hexagons/hexagons_layer_3_D3_80.json';
import hexagon_layer_3_D4_80 from '../../file_generation/results2/hexagons/hexagons_layer_3_D4_80.json';
import hexagon_layer_3_D5_80 from '../../file_generation/results2/hexagons/hexagons_layer_3_D5_80.json';

import hexagon_layer_4_O1_80 from '../../file_generation/results2/hexagons/hexagons_layer_4_O1_80.json';
import hexagon_layer_4_O2_80 from '../../file_generation/results2/hexagons/hexagons_layer_4_O2_80.json';
import hexagon_layer_4_O3_80 from '../../file_generation/results2/hexagons/hexagons_layer_4_O3_80.json';
import hexagon_layer_4_O4_80 from '../../file_generation/results2/hexagons/hexagons_layer_4_O4_80.json';
import hexagon_layer_4_O5_80 from '../../file_generation/results2/hexagons/hexagons_layer_4_O5_80.json';
import hexagon_layer_4_D1_80 from '../../file_generation/results2/hexagons/hexagons_layer_4_D1_80.json';
import hexagon_layer_4_D2_80 from '../../file_generation/results2/hexagons/hexagons_layer_4_D2_80.json';
import hexagon_layer_4_D3_80 from '../../file_generation/results2/hexagons/hexagons_layer_4_D3_80.json';
import hexagon_layer_4_D4_80 from '../../file_generation/results2/hexagons/hexagons_layer_4_D4_80.json';
import hexagon_layer_4_D5_80 from '../../file_generation/results2/hexagons/hexagons_layer_4_D5_80.json';

import hexagon_layer_0_O1_60 from '../../file_generation/results2/hexagons/hexagons_layer_0_O1_60.json';
import hexagon_layer_0_O2_60 from '../../file_generation/results2/hexagons/hexagons_layer_0_O2_60.json';
import hexagon_layer_0_O3_60 from '../../file_generation/results2/hexagons/hexagons_layer_0_O3_60.json';
import hexagon_layer_0_O4_60 from '../../file_generation/results2/hexagons/hexagons_layer_0_O4_60.json';
import hexagon_layer_0_O5_60 from '../../file_generation/results2/hexagons/hexagons_layer_0_O5_60.json';
import hexagon_layer_0_D1_60 from '../../file_generation/results2/hexagons/hexagons_layer_0_D1_60.json';
import hexagon_layer_0_D2_60 from '../../file_generation/results2/hexagons/hexagons_layer_0_D2_60.json';
import hexagon_layer_0_D3_60 from '../../file_generation/results2/hexagons/hexagons_layer_0_D3_60.json';
import hexagon_layer_0_D4_60 from '../../file_generation/results2/hexagons/hexagons_layer_0_D4_60.json';
import hexagon_layer_0_D5_60 from '../../file_generation/results2/hexagons/hexagons_layer_0_D5_60.json';

import hexagon_layer_1_O1_60 from '../../file_generation/results2/hexagons/hexagons_layer_1_O1_60.json';
import hexagon_layer_1_O2_60 from '../../file_generation/results2/hexagons/hexagons_layer_1_O2_60.json';
import hexagon_layer_1_O3_60 from '../../file_generation/results2/hexagons/hexagons_layer_1_O3_60.json';
import hexagon_layer_1_O4_60 from '../../file_generation/results2/hexagons/hexagons_layer_1_O4_60.json';
import hexagon_layer_1_O5_60 from '../../file_generation/results2/hexagons/hexagons_layer_1_O5_60.json';
import hexagon_layer_1_D1_60 from '../../file_generation/results2/hexagons/hexagons_layer_1_D1_60.json';
import hexagon_layer_1_D2_60 from '../../file_generation/results2/hexagons/hexagons_layer_1_D2_60.json';
import hexagon_layer_1_D3_60 from '../../file_generation/results2/hexagons/hexagons_layer_1_D3_60.json';
import hexagon_layer_1_D4_60 from '../../file_generation/results2/hexagons/hexagons_layer_1_D4_60.json';
import hexagon_layer_1_D5_60 from '../../file_generation/results2/hexagons/hexagons_layer_1_D5_60.json';

import hexagon_layer_2_O1_60 from '../../file_generation/results2/hexagons/hexagons_layer_2_O1_60.json';
import hexagon_layer_2_O2_60 from '../../file_generation/results2/hexagons/hexagons_layer_2_O2_60.json';
import hexagon_layer_2_O3_60 from '../../file_generation/results2/hexagons/hexagons_layer_2_O3_60.json';
import hexagon_layer_2_O4_60 from '../../file_generation/results2/hexagons/hexagons_layer_2_O4_60.json';
import hexagon_layer_2_O5_60 from '../../file_generation/results2/hexagons/hexagons_layer_2_O5_60.json';
import hexagon_layer_2_D1_60 from '../../file_generation/results2/hexagons/hexagons_layer_2_D1_60.json';
import hexagon_layer_2_D2_60 from '../../file_generation/results2/hexagons/hexagons_layer_2_D2_60.json';
import hexagon_layer_2_D3_60 from '../../file_generation/results2/hexagons/hexagons_layer_2_D3_60.json';
import hexagon_layer_2_D4_60 from '../../file_generation/results2/hexagons/hexagons_layer_2_D4_60.json';
import hexagon_layer_2_D5_60 from '../../file_generation/results2/hexagons/hexagons_layer_2_D5_60.json';

import hexagon_layer_3_O1_60 from '../../file_generation/results2/hexagons/hexagons_layer_3_O1_60.json';
import hexagon_layer_3_O2_60 from '../../file_generation/results2/hexagons/hexagons_layer_3_O2_60.json';
import hexagon_layer_3_O3_60 from '../../file_generation/results2/hexagons/hexagons_layer_3_O3_60.json';
import hexagon_layer_3_O4_60 from '../../file_generation/results2/hexagons/hexagons_layer_3_O4_60.json';
import hexagon_layer_3_O5_60 from '../../file_generation/results2/hexagons/hexagons_layer_3_O5_60.json';
import hexagon_layer_3_D1_60 from '../../file_generation/results2/hexagons/hexagons_layer_3_D1_60.json';
import hexagon_layer_3_D2_60 from '../../file_generation/results2/hexagons/hexagons_layer_3_D2_60.json';
import hexagon_layer_3_D3_60 from '../../file_generation/results2/hexagons/hexagons_layer_3_D3_60.json';
import hexagon_layer_3_D4_60 from '../../file_generation/results2/hexagons/hexagons_layer_3_D4_60.json';
import hexagon_layer_3_D5_60 from '../../file_generation/results2/hexagons/hexagons_layer_3_D5_60.json';

import hexagon_layer_4_O1_60 from '../../file_generation/results2/hexagons/hexagons_layer_4_O1_60.json';
import hexagon_layer_4_O2_60 from '../../file_generation/results2/hexagons/hexagons_layer_4_O2_60.json';
import hexagon_layer_4_O3_60 from '../../file_generation/results2/hexagons/hexagons_layer_4_O3_60.json';
import hexagon_layer_4_O4_60 from '../../file_generation/results2/hexagons/hexagons_layer_4_O4_60.json';
import hexagon_layer_4_O5_60 from '../../file_generation/results2/hexagons/hexagons_layer_4_O5_60.json';
import hexagon_layer_4_D1_60 from '../../file_generation/results2/hexagons/hexagons_layer_4_D1_60.json';
import hexagon_layer_4_D2_60 from '../../file_generation/results2/hexagons/hexagons_layer_4_D2_60.json';
import hexagon_layer_4_D3_60 from '../../file_generation/results2/hexagons/hexagons_layer_4_D3_60.json';
import hexagon_layer_4_D4_60 from '../../file_generation/results2/hexagons/hexagons_layer_4_D4_60.json';
import hexagon_layer_4_D5_60 from '../../file_generation/results2/hexagons/hexagons_layer_4_D5_60.json';

import hexagon_layer_0_O1_40 from '../../file_generation/results2/hexagons/hexagons_layer_0_O1_40.json';
import hexagon_layer_0_O2_40 from '../../file_generation/results2/hexagons/hexagons_layer_0_O2_40.json';
import hexagon_layer_0_O3_40 from '../../file_generation/results2/hexagons/hexagons_layer_0_O3_40.json';
import hexagon_layer_0_O4_40 from '../../file_generation/results2/hexagons/hexagons_layer_0_O4_40.json';
import hexagon_layer_0_O5_40 from '../../file_generation/results2/hexagons/hexagons_layer_0_O5_40.json';
import hexagon_layer_0_D1_40 from '../../file_generation/results2/hexagons/hexagons_layer_0_D1_40.json';
import hexagon_layer_0_D2_40 from '../../file_generation/results2/hexagons/hexagons_layer_0_D2_40.json';
import hexagon_layer_0_D3_40 from '../../file_generation/results2/hexagons/hexagons_layer_0_D3_40.json';
import hexagon_layer_0_D4_40 from '../../file_generation/results2/hexagons/hexagons_layer_0_D4_40.json';
import hexagon_layer_0_D5_40 from '../../file_generation/results2/hexagons/hexagons_layer_0_D5_40.json';

import hexagon_layer_1_O1_40 from '../../file_generation/results2/hexagons/hexagons_layer_1_O1_40.json';
import hexagon_layer_1_O2_40 from '../../file_generation/results2/hexagons/hexagons_layer_1_O2_40.json';
import hexagon_layer_1_O3_40 from '../../file_generation/results2/hexagons/hexagons_layer_1_O3_40.json';
import hexagon_layer_1_O4_40 from '../../file_generation/results2/hexagons/hexagons_layer_1_O4_40.json';
import hexagon_layer_1_O5_40 from '../../file_generation/results2/hexagons/hexagons_layer_1_O5_40.json';
import hexagon_layer_1_D1_40 from '../../file_generation/results2/hexagons/hexagons_layer_1_D1_40.json';
import hexagon_layer_1_D2_40 from '../../file_generation/results2/hexagons/hexagons_layer_1_D2_40.json';
import hexagon_layer_1_D3_40 from '../../file_generation/results2/hexagons/hexagons_layer_1_D3_40.json';
import hexagon_layer_1_D4_40 from '../../file_generation/results2/hexagons/hexagons_layer_1_D4_40.json';
import hexagon_layer_1_D5_40 from '../../file_generation/results2/hexagons/hexagons_layer_1_D5_40.json';

import hexagon_layer_2_O1_40 from '../../file_generation/results2/hexagons/hexagons_layer_2_O1_40.json';
import hexagon_layer_2_O2_40 from '../../file_generation/results2/hexagons/hexagons_layer_2_O2_40.json';
import hexagon_layer_2_O3_40 from '../../file_generation/results2/hexagons/hexagons_layer_2_O3_40.json';
import hexagon_layer_2_O4_40 from '../../file_generation/results2/hexagons/hexagons_layer_2_O4_40.json';
import hexagon_layer_2_O5_40 from '../../file_generation/results2/hexagons/hexagons_layer_2_O5_40.json';
import hexagon_layer_2_D1_40 from '../../file_generation/results2/hexagons/hexagons_layer_2_D1_40.json';
import hexagon_layer_2_D2_40 from '../../file_generation/results2/hexagons/hexagons_layer_2_D2_40.json';
import hexagon_layer_2_D3_40 from '../../file_generation/results2/hexagons/hexagons_layer_2_D3_40.json';
import hexagon_layer_2_D4_40 from '../../file_generation/results2/hexagons/hexagons_layer_2_D4_40.json';
import hexagon_layer_2_D5_40 from '../../file_generation/results2/hexagons/hexagons_layer_2_D5_40.json';

import hexagon_layer_3_O1_40 from '../../file_generation/results2/hexagons/hexagons_layer_3_O1_40.json';
import hexagon_layer_3_O2_40 from '../../file_generation/results2/hexagons/hexagons_layer_3_O2_40.json';
import hexagon_layer_3_O3_40 from '../../file_generation/results2/hexagons/hexagons_layer_3_O3_40.json';
import hexagon_layer_3_O4_40 from '../../file_generation/results2/hexagons/hexagons_layer_3_O4_40.json';
import hexagon_layer_3_O5_40 from '../../file_generation/results2/hexagons/hexagons_layer_3_O5_40.json';
import hexagon_layer_3_D1_40 from '../../file_generation/results2/hexagons/hexagons_layer_3_D1_40.json';
import hexagon_layer_3_D2_40 from '../../file_generation/results2/hexagons/hexagons_layer_3_D2_40.json';
import hexagon_layer_3_D3_40 from '../../file_generation/results2/hexagons/hexagons_layer_3_D3_40.json';
import hexagon_layer_3_D4_40 from '../../file_generation/results2/hexagons/hexagons_layer_3_D4_40.json';
import hexagon_layer_3_D5_40 from '../../file_generation/results2/hexagons/hexagons_layer_3_D5_40.json';

import hexagon_layer_4_O1_40 from '../../file_generation/results2/hexagons/hexagons_layer_4_O1_40.json';
import hexagon_layer_4_O2_40 from '../../file_generation/results2/hexagons/hexagons_layer_4_O2_40.json';
import hexagon_layer_4_O3_40 from '../../file_generation/results2/hexagons/hexagons_layer_4_O3_40.json';
import hexagon_layer_4_O4_40 from '../../file_generation/results2/hexagons/hexagons_layer_4_O4_40.json';
import hexagon_layer_4_O5_40 from '../../file_generation/results2/hexagons/hexagons_layer_4_O5_40.json';
import hexagon_layer_4_D1_40 from '../../file_generation/results2/hexagons/hexagons_layer_4_D1_40.json';
import hexagon_layer_4_D2_40 from '../../file_generation/results2/hexagons/hexagons_layer_4_D2_40.json';
import hexagon_layer_4_D3_40 from '../../file_generation/results2/hexagons/hexagons_layer_4_D3_40.json';
import hexagon_layer_4_D4_40 from '../../file_generation/results2/hexagons/hexagons_layer_4_D4_40.json';
import hexagon_layer_4_D5_40 from '../../file_generation/results2/hexagons/hexagons_layer_4_D5_40.json';

// CO2

const c_0_O1_100 = 46.39869194255834;
const c_0_O1_80 = 45.996579302411874;
const c_0_O1_60 = 44.88697714500968;
const c_0_O1_40 = 43.450074686695885;
const c_0_O2_100 = 38.588717377752964;
const c_0_O2_80 = 38.01966500772041;
const c_0_O2_60 = 37.00403508751603;
const c_0_O2_40 = 36.23715480692595;
const c_0_O3_100 = 29.07562811728788;
const c_0_O3_80 = 28.374196789029472;
const c_0_O3_60 = 27.572394396619824;
const c_0_O3_40 = 27.31358784312484;
const c_0_O4_100 = 14.300210056158665;
const c_0_O4_80 = 13.799923984536894;
const c_0_O4_60 = 13.61265671396965;
const c_0_O4_40 = 13.749330438251269;
const c_0_O5_100 = 6.9038627249815505;
const c_0_O5_80 = 6.8026332339306625;
const c_0_O5_60 = 6.837810256509108;
const c_0_O5_40 = 7.103642686679406;
const c_1_O1_100 = 44.08078162951985;
const c_1_O1_80 = 43.70815647369767;
const c_1_O1_60 = 42.6226684188654;
const c_1_O1_40 = 41.42702526328605;
const c_1_O2_100 = 36.57179746312595;
const c_1_O2_80 = 36.062378004231924;
const c_1_O2_60 = 35.2509146932016;
const c_1_O2_40 = 34.30271866467396;
const c_1_O3_100 = 27.547795352712978;
const c_1_O3_80 = 26.871792605687965;
const c_1_O3_60 = 26.101080085348993;
const c_1_O3_40 = 25.85525559853946;
const c_1_O4_100 = 13.569314908464253;
const c_1_O4_80 = 13.115095277210669;
const c_1_O4_60 = 12.884618933178976;
const c_1_O4_40 = 13.036139239725276;
const c_1_O5_100 = 6.345914204257332;
const c_1_O5_80 = 6.33889601949711;
const c_1_O5_60 = 6.32938592681255;
const c_1_O5_40 = 6.550577711751758;
const c_2_O1_100 = 41.76690823181861;
const c_2_O1_80 = 41.41571903600274;
const c_2_O1_60 = 40.43525697084267;
const c_2_O1_40 = 39.14794188268391;
const c_2_O2_100 = 34.29326340310731;
const c_2_O2_80 = 33.906102091727455;
const c_2_O2_60 = 32.99954201145923;
const c_2_O2_40 = 32.14304518730172;
const c_2_O3_100 = 26.23672212305703;
const c_2_O3_80 = 25.563245692845104;
const c_2_O3_60 = 24.860704403573784;
const c_2_O3_40 = 24.575698604157385;
const c_2_O4_100 = 12.883051473098517;
const c_2_O4_80 = 12.460986285058155;
const c_2_O4_60 = 12.28218546053538;
const c_2_O4_40 = 12.417875271489855;
const c_2_O5_100 = 5.801704550951025;
const c_2_O5_80 = 5.624775125821126;
const c_2_O5_60 = 5.703519335662952;
const c_2_O5_40 = 5.890185916148082;
const c_3_O1_100 = 38.809424837362855;
const c_3_O1_80 = 38.464553720683604;
const c_3_O1_60 = 37.52910992375713;
const c_3_O1_40 = 36.328253417395864;
const c_3_O2_100 = 32.222682058351154;
const c_3_O2_80 = 31.79716057391296;
const c_3_O2_60 = 30.936739685759093;
const c_3_O2_40 = 30.200289195560046;
const c_3_O3_100 = 24.53738164411731;
const c_3_O3_80 = 24.015668722679035;
const c_3_O3_60 = 23.373785158978677;
const c_3_O3_40 = 23.033140393127237;
const c_3_O4_100 = 12.156287172609003;
const c_3_O4_80 = 11.680343064675613;
const c_3_O4_60 = 11.562009144928881;
const c_3_O4_40 = 11.635392689800794;
const c_3_O5_100 = 5.78139580931069;
const c_3_O5_80 = 5.737203444694064;
const c_3_O5_60 = 5.682505747821993;
const c_3_O5_40 = 5.961180834063564;
const c_4_O1_100 = 35.98607253999276;
const c_4_O1_80 = 35.66232290495314;
const c_4_O1_60 = 34.77600594136335;
const c_4_O1_40 = 33.842753548733214;
const c_4_O2_100 = 29.76028547527953;
const c_4_O2_80 = 29.454527165721096;
const c_4_O2_60 = 28.703580432009367;
const c_4_O2_40 = 27.815731349069395;
const c_4_O3_100 = 22.6235868599158;
const c_4_O3_80 = 22.100941112033112;
const c_4_O3_60 = 21.46433335168197;
const c_4_O3_40 = 21.171946039435387;
const c_4_O4_100 = 11.349430037107897;
const c_4_O4_80 = 10.889568088948621;
const c_4_O4_60 = 10.740526215681724;
const c_4_O4_40 = 10.903010624926925;
const c_4_O5_100 = 5.472375118907772;
const c_4_O5_80 = 5.286288000660313;
const c_4_O5_60 = 5.300104751707173;
const c_4_O5_40 = 5.4026005969998705;
const c_0_D1_100 = 44.55834830169431;
const c_0_D1_80 = 44.052495303597695;
const c_0_D1_60 = 43.23279897790697;
const c_0_D1_40 = 42.89375292840902;
const c_0_D2_100 = 38.00753911654597;
const c_0_D2_80 = 37.50257082730343;
const c_0_D2_60 = 36.79407921193505;
const c_0_D2_40 = 36.83858213993079;
const c_0_D3_100 = 29.12147258583687;
const c_0_D3_80 = 28.74726821463875;
const c_0_D3_60 = 28.355945891490094;
const c_0_D3_40 = 28.51468369502347;
const c_0_D4_100 = 12.259850671568074;
const c_0_D4_80 = 12.13224568083274;
const c_0_D4_60 = 12.047356615950468;
const c_0_D4_40 = 12.13860996176246;
const c_0_D5_100 = 3.713429988039218;
const c_0_D5_80 = 3.636272963140651;
const c_0_D5_60 = 3.7597683161611224;
const c_0_D5_40 = 3.7445730761301816;
const c_1_D1_100 = 42.68131394474412;
const c_1_D1_80 = 42.23275532699544;
const c_1_D1_60 = 41.330805592969234;
const c_1_D1_40 = 40.94114618545741;
const c_1_D2_100 = 36.39639020809738;
const c_1_D2_80 = 35.873910150516664;
const c_1_D2_60 = 35.231424648437795;
const c_1_D2_40 = 35.20682250780206;
const c_1_D3_100 = 27.67701267813536;
const c_1_D3_80 = 27.359945293102744;
const c_1_D3_60 = 27.11265125350693;
const c_1_D3_40 = 27.191057413616175;
const c_1_D4_100 = 11.932804684763347;
const c_1_D4_80 = 11.862416995318016;
const c_1_D4_60 = 11.787997711494228;
const c_1_D4_40 = 11.81396789294119;
const c_1_D5_100 = 3.577939449527282;
const c_1_D5_80 = 3.467734393481971;
const c_1_D5_60 = 3.4858996165969005;
const c_1_D5_40 = 3.5513171280219944;
const c_2_D1_100 = 40.325675065453225;
const c_2_D1_80 = 39.73400886871498;
const c_2_D1_60 = 38.78698494540839;
const c_2_D1_40 = 38.956201873199156;
const c_2_D2_100 = 34.32677081297682;
const c_2_D2_80 = 33.804717232406965;
const c_2_D2_60 = 33.28395295626164;
const c_2_D2_40 = 33.28982359200781;
const c_2_D3_100 = 26.221696019552557;
const c_2_D3_80 = 25.847308626970513;
const c_2_D3_60 = 25.633328466615158;
const c_2_D3_40 = 25.751683265395492;
const c_2_D4_100 = 11.280413711840147;
const c_2_D4_80 = 11.217390339996296;
const c_2_D4_60 = 11.133379747176614;
const c_2_D4_40 = 11.143121442586267;
const c_2_D5_100 = 3.292824703715312;
const c_2_D5_80 = 3.229736925781192;
const c_2_D5_60 = 3.2412708537086914;
const c_2_D5_40 = 3.2961487752224072;
const c_3_D1_100 = 37.63246739914048;
const c_3_D1_80 = 37.09269721949703;
const c_3_D1_60 = 36.42182594349612;
const c_3_D1_40 = 36.3329342162985;
const c_3_D2_100 = 32.02901289694754;
const c_3_D2_80 = 31.596288310322336;
const c_3_D2_60 = 30.971618145957738;
const c_3_D2_40 = 31.02187501968611;
const c_3_D3_100 = 24.548168085531433;
const c_3_D3_80 = 24.230135352680477;
const c_3_D3_60 = 24.01753436327891;
const c_3_D3_40 = 23.971379356353037;
const c_3_D4_100 = 10.334045664453413;
const c_3_D4_80 = 10.272047680121423;
const c_3_D4_60 = 10.1599102373373;
const c_3_D4_40 = 10.230432211868816;
const c_3_D5_100 = 2.8551968204925315;
const c_3_D5_80 = 2.836511521374948;
const c_3_D5_60 = 2.7973202067904936;
const c_3_D5_40 = 2.858001074263143;
const c_4_D1_100 = 34.74432496310558;
const c_4_D1_80 = 34.30461555599309;
const c_4_D1_60 = 33.59484489332862;
const c_4_D1_40 = 33.41173886350195;
const c_4_D2_100 = 29.9244788184498;
const c_4_D2_80 = 29.40956019267089;
const c_4_D2_60 = 29.038969563410713;
const c_4_D2_40 = 28.99306744657593;
const c_4_D3_100 = 22.876950254214375;
const c_4_D3_80 = 22.68021271120853;
const c_4_D3_60 = 22.37057589808562;
const c_4_D3_40 = 22.435869722925613;
const c_4_D4_100 = 9.675570783955845;
const c_4_D4_80 = 9.64945381463777;
const c_4_D4_60 = 9.579655275901434;
const c_4_D4_40 = 9.599154093755297;
const c_4_D5_100 = 2.7089373308633595;
const c_4_D5_80 = 2.6379722335217908;
const c_4_D5_60 = 2.6682105196892993;
const c_4_D5_40 = 2.74794771116403;

const data_0_O1_100 = [2321, 170, 4];
const data_0_O1_80 = [2171, 320, 4];
const data_0_O1_60 = [1913, 576, 6];
const data_0_O1_40 = [1649, 840, 6];
const data_0_O2_100 = [2276, 192, 21];
const data_0_O2_80 = [2084, 391, 14];
const data_0_O2_60 = [1832, 645, 12];
const data_0_O2_40 = [1690, 786, 13];
const data_0_O3_100 = [2037, 276, 14];
const data_0_O3_80 = [1809, 508, 10];
const data_0_O3_60 = [1548, 771, 8];
const data_0_O3_40 = [1523, 791, 13];
const data_0_O4_100 = [938, 461, 134];
const data_0_O4_80 = [753, 680, 100];
const data_0_O4_60 = [702, 722, 109];
const data_0_O4_40 = [793, 591, 149];
const data_0_O5_100 = [223, 60, 2223];
const data_0_O5_80 = [204, 78, 2224];
const data_0_O5_60 = [209, 69, 2228];
const data_0_O5_40 = [232, 71, 2203];
const data_1_O1_100 = [2087, 158, 4];
const data_1_O1_80 = [1965, 280, 4];
const data_1_O1_60 = [1745, 500, 4];
const data_1_O1_40 = [1517, 727, 5];
const data_1_O2_100 = [2047, 176, 17];
const data_1_O2_80 = [1869, 354, 17];
const data_1_O2_60 = [1657, 575, 8];
const data_1_O2_40 = [1501, 724, 15];
const data_1_O3_100 = [1829, 251, 8];
const data_1_O3_80 = [1610, 473, 5];
const data_1_O3_60 = [1382, 695, 11];
const data_1_O3_40 = [1381, 696, 11];
const data_1_O4_100 = [846, 425, 107];
const data_1_O4_80 = [675, 627, 76];
const data_1_O4_60 = [620, 661, 97];
const data_1_O4_40 = [713, 532, 133];
const data_1_O5_100 = [185, 63, 2007];
const data_1_O5_80 = [172, 86, 1997];
const data_1_O5_60 = [179, 66, 2010];
const data_1_O5_40 = [197, 67, 1991];
const data_2_O1_100 = [1865, 130, 2];
const data_2_O1_80 = [1752, 242, 3];
const data_2_O1_60 = [1554, 441, 2];
const data_2_O1_40 = [1340, 656, 1];
const data_2_O2_100 = [1805, 165, 16];
const data_2_O2_80 = [1687, 287, 12];
const data_2_O2_60 = [1469, 506, 11];
const data_2_O2_40 = [1322, 653, 11];
const data_2_O3_100 = [1650, 208, 7];
const data_2_O3_80 = [1453, 405, 7];
const data_2_O3_60 = [1257, 603, 5];
const data_2_O3_40 = [1233, 628, 4];
const data_2_O4_100 = [746, 392, 100];
const data_2_O4_80 = [603, 571, 64];
const data_2_O4_60 = [558, 611, 69];
const data_2_O4_40 = [632, 502, 104];
const data_2_O5_100 = [160, 43, 1801];
const data_2_O5_80 = [139, 60, 1805];
const data_2_O5_60 = [146, 53, 1805];
const data_2_O5_40 = [155, 63, 1786];
const data_3_O1_100 = [1642, 101, 3];
const data_3_O1_80 = [1545, 200, 1];
const data_3_O1_60 = [1354, 392, 0];
const data_3_O1_40 = [1183, 561, 2];
const data_3_O2_100 = [1598, 132, 9];
const data_3_O2_80 = [1474, 257, 8];
const data_3_O2_60 = [1280, 452, 7];
const data_3_O2_40 = [1169, 565, 5];
const data_3_O3_100 = [1445, 188, 6];
const data_3_O3_80 = [1292, 346, 1];
const data_3_O3_60 = [1124, 512, 3];
const data_3_O3_40 = [1101, 532, 6];
const data_3_O4_100 = [675, 327, 66];
const data_3_O4_80 = [531, 471, 66];
const data_3_O4_60 = [505, 489, 74];
const data_3_O4_40 = [554, 422, 92];
const data_3_O5_100 = [155, 44, 1554];
const data_3_O5_80 = [141, 65, 1547];
const data_3_O5_60 = [143, 50, 1560];
const data_3_O5_40 = [158, 62, 1533];
const data_4_O1_100 = [1405, 91, 1];
const data_4_O1_80 = [1314, 180, 3];
const data_4_O1_60 = [1165, 329, 3];
const data_4_O1_40 = [1025, 468, 4];
const data_4_O2_100 = [1385, 103, 6];
const data_4_O2_80 = [1296, 193, 5];
const data_4_O2_60 = [1135, 356, 3];
const data_4_O2_40 = [1003, 490, 1];
const data_4_O3_100 = [1243, 155, 6];
const data_4_O3_80 = [1102, 297, 5];
const data_4_O3_60 = [951, 449, 4];
const data_4_O3_40 = [932, 466, 6];
const data_4_O4_100 = [585, 272, 61];
const data_4_O4_80 = [456, 403, 59];
const data_4_O4_60 = [426, 424, 68];
const data_4_O4_40 = [493, 344, 81];
const data_4_O5_100 = [143, 38, 1321];
const data_4_O5_80 = [122, 54, 1326];
const data_4_O5_60 = [125, 47, 1330];
const data_4_O5_40 = [131, 49, 1322];
const data_0_D1_100 = [2061, 303, 32];
const data_0_D1_80 = [1929, 436, 31];
const data_0_D1_60 = [1770, 595, 31];
const data_0_D1_40 = [1742, 625, 29];
const data_0_D2_100 = [1982, 375, 71];
const data_0_D2_80 = [1849, 510, 69];
const data_0_D2_60 = [1721, 634, 73];
const data_0_D2_40 = [1740, 617, 71];
const data_0_D3_100 = [1795, 476, 158];
const data_0_D3_80 = [1679, 593, 157];
const data_0_D3_60 = [1588, 685, 156];
const data_0_D3_40 = [1635, 637, 157];
const data_0_D4_100 = [765, 351, 979];
const data_0_D4_80 = [732, 368, 995];
const data_0_D4_60 = [733, 328, 1034];
const data_0_D4_40 = [759, 311, 1025];
const data_0_D5_100 = [73, 36, 2371];
const data_0_D5_80 = [67, 39, 2374];
const data_0_D5_60 = [69, 34, 2377];
const data_0_D5_40 = [70, 30, 2380];
const data_1_D1_100 = [1873, 256, 22];
const data_1_D1_80 = [1765, 364, 22];
const data_1_D1_60 = [1618, 511, 22];
const data_1_D1_40 = [1574, 556, 21];
const data_1_D2_100 = [1815, 323, 50];
const data_1_D2_80 = [1691, 444, 53];
const data_1_D2_60 = [1580, 553, 55];
const data_1_D2_40 = [1581, 552, 55];
const data_1_D3_100 = [1600, 455, 134];
const data_1_D3_80 = [1507, 553, 129];
const data_1_D3_60 = [1448, 603, 138];
const data_1_D3_40 = [1487, 562, 140];
const data_1_D4_100 = [720, 317, 851];
const data_1_D4_80 = [700, 341, 847];
const data_1_D4_60 = [694, 319, 875];
const data_1_D4_40 = [713, 304, 871];
const data_1_D5_100 = [78, 33, 2114];
const data_1_D5_80 = [63, 45, 2117];
const data_1_D5_60 = [63, 40, 2122];
const data_1_D5_40 = [72, 32, 2121];
const data_2_D1_100 = [1679, 222, 26];
const data_2_D1_80 = [1562, 338, 27];
const data_2_D1_60 = [1405, 496, 26];
const data_2_D1_40 = [1433, 469, 25];
const data_2_D2_100 = [1603, 293, 56];
const data_2_D2_80 = [1486, 412, 54];
const data_2_D2_60 = [1390, 505, 57];
const data_2_D2_40 = [1403, 490, 59];
const data_2_D3_100 = [1421, 399, 126];
const data_2_D3_80 = [1312, 508, 126];
const data_2_D3_60 = [1268, 553, 125];
const data_2_D3_40 = [1305, 512, 129];
const data_2_D4_100 = [624, 296, 758];
const data_2_D4_80 = [614, 302, 762];
const data_2_D4_60 = [603, 291, 784];
const data_2_D4_40 = [620, 273, 785];
const data_2_D5_100 = [57, 32, 1893];
const data_2_D5_80 = [48, 38, 1896];
const data_2_D5_60 = [51, 35, 1896];
const data_2_D5_40 = [54, 36, 1892];
const data_3_D1_100 = [1446, 213, 24];
const data_3_D1_80 = [1343, 317, 23];
const data_3_D1_60 = [1246, 414, 23];
const data_3_D1_40 = [1243, 416, 24];
const data_3_D2_100 = [1412, 241, 46];
const data_3_D2_80 = [1317, 336, 46];
const data_3_D2_60 = [1209, 440, 50];
const data_3_D2_40 = [1229, 422, 48];
const data_3_D3_100 = [1244, 346, 112];
const data_3_D3_80 = [1170, 418, 114];
const data_3_D3_60 = [1126, 461, 115];
const data_3_D3_40 = [1132, 455, 115];
const data_3_D4_100 = [549, 227, 686];
const data_3_D4_80 = [536, 239, 687];
const data_3_D4_60 = [525, 229, 708];
const data_3_D4_40 = [548, 207, 707];
const data_3_D5_100 = [48, 23, 1668];
const data_3_D5_80 = [48, 29, 1662];
const data_3_D5_60 = [44, 22, 1673];
const data_3_D5_40 = [47, 22, 1670];
const data_4_D1_100 = [1242, 174, 20];
const data_4_D1_80 = [1164, 256, 16];
const data_4_D1_60 = [1064, 356, 16];
const data_4_D1_40 = [1044, 377, 15];
const data_4_D2_100 = [1196, 224, 39];
const data_4_D2_80 = [1107, 309, 43];
const data_4_D2_60 = [1048, 367, 44];
const data_4_D2_40 = [1054, 364, 41];
const data_4_D3_100 = [1062, 307, 100];
const data_4_D3_80 = [1015, 355, 99];
const data_4_D3_60 = [959, 404, 106];
const data_4_D3_40 = [980, 386, 103];
const data_4_D4_100 = [470, 213, 578];
const data_4_D4_80 = [465, 223, 573];
const data_4_D4_60 = [459, 202, 600];
const data_4_D4_40 = [472, 191, 598];
const data_4_D5_100 = [40, 18, 1431];
const data_4_D5_80 = [36, 23, 1430];
const data_4_D5_60 = [38, 21, 1430];
const data_4_D5_40 = [43, 19, 1427];

const bardata_0_O1_100 = [40874.86, 1770.16, 4.88];
const bardata_0_O1_80 = [39452.89, 3190.65, 6.36];
const bardata_0_O1_60 = [35592.73, 7047.32, 9.85];
const bardata_0_O1_40 = [30730.69, 11908.35, 10.86];
const bardata_0_O2_100 = [28193.60, 1384.34, 36.83];
const bardata_0_O2_80 = [26509.68, 3082.33, 22.76];
const bardata_0_O2_60 = [23588.14, 6006.24, 20.39];
const bardata_0_O2_40 = [21439.14, 8152.27, 23.35];
const bardata_0_O3_100 = [15732.72, 1339.70, 31.02];
const bardata_0_O3_80 = [14180.52, 2900.45, 22.47];
const bardata_0_O3_60 = [12457.55, 4627.90, 18.00];
const bardata_0_O3_40 = [11925.45, 5147.56, 30.43];
const bardata_0_O4_100 = [3449.94, 1044.40, 213.46];
const bardata_0_O4_80 = [2872.27, 1662.13, 173.41];
const bardata_0_O4_60 = [2682.63, 1844.55, 180.62];
const bardata_0_O4_40 = [2894.37, 1562.64, 250.79];
const bardata_0_O5_100 = [834.35, 182.18, 6826.63];
const bardata_0_O5_80 = [780.62, 236.49, 6826.05];
const bardata_0_O5_60 = [803.26, 209.49, 6830.41];
const bardata_0_O5_40 = [871.93, 215.96, 6755.27];
const bardata_1_O1_100 = [36948.38, 1485.47, 4.62];
const bardata_1_O1_80 = [35695.10, 2738.75, 4.62];
const bardata_1_O1_60 = [32105.03, 6328.62, 4.82];
const bardata_1_O1_40 = [28257.61, 10173.29, 7.58];
const bardata_1_O2_100 = [25378.79, 1131.30, 29.38];
const bardata_1_O2_80 = [23962.65, 2545.94, 30.88];
const bardata_1_O2_60 = [21725.77, 4803.15, 10.55];
const bardata_1_O2_40 = [19212.50, 7302.65, 24.31];
const bardata_1_O3_100 = [14092.90, 1263.06, 15.08];
const bardata_1_O3_80 = [12675.16, 2689.34, 6.55];
const bardata_1_O3_60 = [11125.86, 4223.40, 21.78];
const bardata_1_O3_40 = [10641.02, 4703.63, 26.39];
const bardata_1_O4_100 = [3091.57, 970.18, 184.06];
const bardata_1_O4_80 = [2577.19, 1535.83, 132.79];
const bardata_1_O4_60 = [2381.72, 1696.36, 167.74];
const bardata_1_O4_40 = [2584.20, 1440.55, 221.06];
const bardata_1_O5_100 = [686.31, 191.64, 6151.07];
const bardata_1_O5_80 = [651.05, 259.56, 6118.42];
const bardata_1_O5_60 = [678.26, 199.71, 6151.05];
const bardata_1_O5_40 = [731.95, 202.87, 6094.20];
const bardata_2_O1_100 = [33221.67, 1231.46, 2.79];
const bardata_2_O1_80 = [32103.42, 2348.74, 3.76];
const bardata_2_O1_60 = [29027.79, 5425.41, 2.72];
const bardata_2_O1_40 = [25101.44, 9353.12, 1.36];
const bardata_2_O2_100 = [22233.88, 1158.90, 35.03];
const bardata_2_O2_80 = [21210.99, 2193.36, 23.46];
const bardata_2_O2_60 = [18879.92, 4531.90, 15.99];
const bardata_2_O2_40 = [16745.00, 6664.07, 18.74];
const bardata_2_O3_100 = [12845.12, 1020.68, 10.66];
const bardata_2_O3_80 = [11508.56, 2357.23, 10.66];
const bardata_2_O3_60 = [10149.83, 3717.54, 9.09];
const bardata_2_O3_40 = [9610.12, 4257.15, 9.19];
const bardata_2_O4_100 = [2757.95, 932.89, 160.99];
const bardata_2_O4_80 = [2300.55, 1439.07, 112.21];
const bardata_2_O4_60 = [2147.07, 1576.12, 128.63];
const bardata_2_O4_40 = [2328.27, 1340.82, 182.74];
const bardata_2_O5_100 = [587.97, 131.18, 5519.49];
const bardata_2_O5_80 = [524.04, 181.25, 5533.36];
const bardata_2_O5_60 = [551.71, 160.25, 5526.69];
const bardata_2_O5_40 = [578.71, 190.56, 5469.38];
const bardata_3_O1_100 = [28760.11, 907.99, 3.35];
const bardata_3_O1_80 = [27736.72, 1933.83, 0.90];
const bardata_3_O1_60 = [25012.31, 4659.13, 0.00];
const bardata_3_O1_40 = [21618.15, 8049.39, 3.91];
const bardata_3_O2_100 = [19699.75, 882.00, 15.77];
const bardata_3_O2_80 = [18654.82, 1928.19, 14.51];
const bardata_3_O2_60 = [16582.00, 4005.96, 9.56];
const bardata_3_O2_40 = [14853.99, 5737.08, 6.45];
const bardata_3_O3_100 = [11210.16, 943.16, 13.37];
const bardata_3_O3_80 = [10229.72, 1933.82, 3.16];
const bardata_3_O3_60 = [9066.90, 3094.00, 5.79];
const bardata_3_O3_40 = [8467.08, 3687.84, 11.77];
const bardata_3_O4_100 = [2500.02, 740.58, 115.51];
const bardata_3_O4_80 = [2066.03, 1173.90, 116.18];
const bardata_3_O4_60 = [1966.68, 1267.07, 122.36];
const bardata_3_O4_40 = [2063.75, 1137.35, 155.00];
const bardata_3_O5_100 = [582.77, 132.47, 4766.51];
const bardata_3_O5_80 = [542.02, 195.00, 4744.73];
const bardata_3_O5_60 = [552.05, 150.16, 4779.54];
const bardata_3_O5_40 = [597.05, 186.47, 4698.24];
const bardata_4_O1_100 = [24711.10, 814.44, 1.43];
const bardata_4_O1_80 = [23825.19, 1697.49, 4.28];
const bardata_4_O1_60 = [21433.34, 4089.34, 4.28];
const bardata_4_O1_40 = [18982.56, 6537.38, 7.03];
const bardata_4_O2_100 = [16813.45, 733.12, 13.31];
const bardata_4_O2_80 = [16116.39, 1433.67, 9.82];
const bardata_4_O2_60 = [14438.57, 3116.20, 5.11];
const bardata_4_O2_40 = [12513.50, 5043.86, 2.51];
const bardata_4_O3_100 = [9566.55, 727.13, 10.25];
const bardata_4_O3_80 = [8667.41, 1629.93, 6.58];
const bardata_4_O3_60 = [7604.96, 2692.29, 6.67];
const bardata_4_O3_40 = [7132.93, 3158.61, 12.39];
const bardata_4_O4_100 = [2182.57, 638.64, 98.70];
const bardata_4_O4_80 = [1800.63, 1010.46, 108.82];
const bardata_4_O4_60 = [1686.31, 1115.36, 118.24];
const bardata_4_O4_40 = [1838.93, 944.40, 136.58];
const bardata_4_O5_100 = [524.37, 114.16, 4044.96];
const bardata_4_O5_80 = [461.84, 162.16, 4059.49];
const bardata_4_O5_60 = [475.05, 141.16, 4067.28];
const bardata_4_O5_40 = [493.36, 147.16, 4042.97];
const bardata_0_D1_100 = [36963.50, 3117.19, 46.40];
const bardata_0_D1_80 = [35244.27, 4838.40, 44.42];
const bardata_0_D1_60 = [32503.08, 7579.64, 44.37];
const bardata_0_D1_40 = [31381.09, 8704.97, 41.04];
const bardata_0_D2_100 = [26625.49, 2811.63, 100.79];
const bardata_0_D2_80 = [25159.44, 4283.01, 95.46];
const bardata_0_D2_60 = [23148.63, 6287.77, 101.49];
const bardata_0_D2_40 = [23271.54, 6167.58, 98.79];
const bardata_0_D3_100 = [15217.94, 2486.92, 184.25];
const bardata_0_D3_80 = [14387.83, 3317.51, 183.77];
const bardata_0_D3_60 = [13527.94, 4181.27, 179.90];
const bardata_0_D3_40 = [13874.67, 3833.64, 180.79];
const bardata_0_D4_100 = [2494.48, 851.10, 1151.04];
const bardata_0_D4_80 = [2399.87, 920.45, 1176.30];
const bardata_0_D4_60 = [2382.15, 875.73, 1238.74];
const bardata_0_D4_40 = [2451.52, 821.93, 1223.17];
const bardata_0_D5_100 = [240.74, 54.03, 1869.35];
const bardata_0_D5_80 = [223.60, 66.45, 1874.06];
const bardata_0_D5_60 = [243.28, 62.46, 1858.37];
const bardata_0_D5_40 = [243.34, 57.86, 1862.91];
const bardata_1_D1_100 = [34114.04, 2456.84, 30.47];
const bardata_1_D1_80 = [32656.10, 3913.40, 31.84];
const bardata_1_D1_60 = [29767.18, 6803.69, 30.47];
const bardata_1_D1_40 = [28538.19, 8033.48, 29.68];
const bardata_1_D2_100 = [24518.87, 2370.02, 67.46];
const bardata_1_D2_80 = [23076.31, 3808.37, 71.67];
const bardata_1_D2_60 = [21330.18, 5550.28, 75.89];
const bardata_1_D2_40 = [21264.52, 5615.18, 76.64];
const bardata_1_D3_100 = [13683.71, 2371.91, 150.55];
const bardata_1_D3_80 = [13008.25, 3054.43, 143.48];
const bardata_1_D3_60 = [12507.43, 3539.60, 159.13];
const bardata_1_D3_40 = [12673.48, 3370.54, 162.14];
const bardata_1_D4_100 = [2388.07, 755.87, 1015.40];
const bardata_1_D4_80 = [2322.11, 823.66, 1013.57];
const bardata_1_D4_60 = [2292.65, 814.20, 1052.49];
const bardata_1_D4_40 = [2313.43, 796.20, 1049.71];
const bardata_1_D5_100 = [220.99, 55.21, 1659.39];
const bardata_1_D5_80 = [197.86, 71.57, 1666.17];
const bardata_1_D5_60 = [203.34, 65.43, 1666.83];
const bardata_1_D5_40 = [223.20, 43.28, 1669.11];
const bardata_2_D1_100 = [30533.03, 2029.76, 35.92];
const bardata_2_D1_80 = [28721.18, 3838.60, 38.93];
const bardata_2_D1_60 = [25869.52, 6693.04, 36.15];
const bardata_2_D1_40 = [26372.61, 6190.90, 35.20];
const bardata_2_D2_100 = [21743.65, 2241.91, 79.09];
const bardata_2_D2_80 = [20378.05, 3610.48, 76.11];
const bardata_2_D2_60 = [19044.54, 4938.85, 81.25];
const bardata_2_D2_40 = [19061.97, 4918.89, 83.78];
const bardata_2_D3_100 = [12330.71, 2031.41, 148.12];
const bardata_2_D3_80 = [11582.54, 2780.92, 146.77];
const bardata_2_D3_60 = [11159.12, 3205.75, 145.36];
const bardata_2_D3_40 = [11398.24, 2960.37, 151.62];
const bardata_2_D4_100 = [2124.61, 694.67, 897.59];
const bardata_2_D4_80 = [2075.55, 738.33, 902.99];
const bardata_2_D4_60 = [2039.41, 737.77, 939.69];
const bardata_2_D4_40 = [2053.56, 717.65, 945.67];
const bardata_2_D5_100 = [181.39, 58.49, 1493.71];
const bardata_2_D5_80 = [165.71, 74.06, 1493.81];
const bardata_2_D5_60 = [173.17, 61.89, 1498.52];
const bardata_2_D5_40 = [177.22, 67.78, 1488.59];
const bardata_3_D1_100 = [26482.99, 1986.08, 32.87];
const bardata_3_D1_80 = [24936.22, 3534.36, 31.36];
const bardata_3_D1_60 = [23046.71, 5423.87, 31.36];
const bardata_3_D1_40 = [22801.32, 5666.82, 33.80];
const bardata_3_D2_100 = [19014.46, 1781.05, 64.13];
const bardata_3_D2_80 = [17959.22, 2836.73, 63.69];
const bardata_3_D2_60 = [16468.47, 4320.66, 70.51];
const bardata_3_D2_40 = [16584.58, 4207.87, 67.18];
const bardata_3_D3_100 = [10819.91, 1754.23, 129.85];
const bardata_3_D3_80 = [10227.36, 2344.93, 131.69];
const bardata_3_D3_60 = [9834.41, 2737.84, 131.74];
const bardata_3_D3_40 = [9750.26, 2821.27, 132.46];
const bardata_3_D4_100 = [1810.56, 527.35, 819.40];
const bardata_3_D4_80 = [1759.64, 580.30, 817.37];
const bardata_3_D4_60 = [1709.83, 591.17, 856.30];
const bardata_3_D4_40 = [1763.59, 538.79, 854.93];
const bardata_3_D5_100 = [141.71, 33.16, 1291.07];
const bardata_3_D5_80 = [133.35, 45.93, 1286.67];
const bardata_3_D5_60 = [133.97, 36.00, 1295.98];
const bardata_3_D5_40 = [139.34, 38.59, 1288.01];
const bardata_4_D1_100 = [22615.96, 1608.05, 27.76];
const bardata_4_D1_80 = [21446.58, 2783.76, 21.44];
const bardata_4_D1_60 = [19599.74, 4631.07, 20.97];
const bardata_4_D1_40 = [19128.29, 5103.93, 19.55];
const bardata_4_D2_100 = [16559.59, 1632.03, 54.20];
const bardata_4_D2_80 = [15395.25, 2790.02, 60.54];
const bardata_4_D2_60 = [14567.02, 3616.60, 62.20];
const bardata_4_D2_40 = [14459.51, 3729.70, 56.61];
const bardata_4_D3_100 = [9380.06, 1557.47, 116.81];
const bardata_4_D3_80 = [9033.13, 1908.03, 113.17];
const bardata_4_D3_60 = [8509.53, 2420.53, 124.28];
const bardata_4_D3_40 = [8617.13, 2317.54, 119.67];
const bardata_4_D4_100 = [1566.04, 505.09, 689.60];
const bardata_4_D4_80 = [1534.17, 549.80, 676.75];
const bardata_4_D4_60 = [1526.38, 512.87, 721.47];
const bardata_4_D4_40 = [1537.99, 504.05, 718.69];
const bardata_4_D5_100 = [123.49, 38.11, 1128.29];
const bardata_4_D5_80 = [111.20, 48.10, 1130.59];
const bardata_4_D5_60 = [116.49, 43.68, 1129.72];
const bardata_4_D5_40 = [127.10, 39.17, 1123.63];




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
		  currentArcData: arc_layer_0_O1_100, 
		  currentHexagonData: hexagon_layer_0_O1_100,
		  dataForCO2: c_0_O1_100,
		  dataForShare: data_0_O1_100,
		  dataForBar: bardata_0_O1_100,
		//   currentArcData: arc_layer_O1_100, 
		//   currentHexagonData: hexagon_layer_O1_100,
		//   dataForCO2: c_O1,
		//   dataForShare: data_O1,
		//   dataForBar: bardata_O1,
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
		}, () => 
		// console.log(this.state.show_WFM), 
		this.updateDataBasedOnSliders());
	  }

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
		const { firstSliderValue, secondSliderValue, brtSliderValue, show_WFM } = this.state;

		const activeWFMIndex = show_WFM.findIndex(value => value === true);

		// console.log(`First ${firstSliderValue}`);

		let newArcData;
		let newHexagonData;
		let newCO2Data;
		let newShareData;
		let newBarData;
		let newTripsData;

		console.log(`First ${activeWFMIndex}`);
		console.log(`First ${firstSliderValue}`);
		console.log(`First ${secondSliderValue}`);
		console.log(`First ${brtSliderValue}`);

		if (activeWFMIndex === 0) {
			if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_0_O1_100;
				newHexagonData = hexagon_layer_0_O1_100;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_0_O1_100;
				newShareData = data_0_O1_100;
				newBarData = bardata_0_O1_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_0_O1_80;
				newHexagonData = hexagon_layer_0_O1_80;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_0_O1_80;
				newShareData = data_0_O1_80;
				newBarData = bardata_0_O1_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_0_O1_60;
				newHexagonData = hexagon_layer_0_O1_60;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_0_O1_60;
				newShareData = data_0_O1_60;
				newBarData = bardata_0_O1_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_0_O1_40;
				newHexagonData = hexagon_layer_0_O1_40;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_0_O1_40;
				newShareData = data_0_O1_40;
				newBarData = bardata_0_O1_40;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_0_O2_100;
				newHexagonData = hexagon_layer_0_O2_100;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_0_O2_100;
				newShareData = data_0_O2_100;
				newBarData = bardata_0_O2_100;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_0_O2_80;
				newHexagonData = hexagon_layer_0_O2_80;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_0_O2_80;
				newShareData = data_0_O2_80;
				newBarData = bardata_0_O2_80;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_0_O2_60;
				newHexagonData = hexagon_layer_0_O2_60;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_0_O2_60;
				newShareData = data_0_O2_60;
				newBarData = bardata_0_O2_60;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_0_O2_40;
				newHexagonData = hexagon_layer_0_O2_40;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_0_O2_40;
				newShareData = data_0_O2_40;
				newBarData = bardata_0_O2_40;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_0_O3_100;
				newHexagonData = hexagon_layer_0_O3_100;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_0_O3_100;
				newShareData = data_0_O3_100;
				newBarData = bardata_0_O3_100;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_0_O3_80;
				newHexagonData = hexagon_layer_0_O3_80;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_0_O3_80;
				newShareData = data_0_O3_80;
				newBarData = bardata_0_O3_80;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_0_O3_60;
				newHexagonData = hexagon_layer_0_O3_60;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_0_O3_60;
				newShareData = data_0_O3_60;
				newBarData = bardata_0_O3_60;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_0_O3_40;
				newHexagonData = hexagon_layer_0_O3_40;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_0_O3_40;
				newShareData = data_0_O3_40;
				newBarData = bardata_0_O3_40;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_0_O4_100;
				newHexagonData = hexagon_layer_0_O4_100;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_0_O4_100;
				newShareData = data_0_O4_100;
				newBarData = bardata_0_O4_100;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_0_O4_80;
				newHexagonData = hexagon_layer_0_O4_80;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_0_O4_80;
				newShareData = data_0_O4_80;
				newBarData = bardata_0_O4_80;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_0_O4_60;
				newHexagonData = hexagon_layer_0_O4_60;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_0_O4_60;
				newShareData = data_0_O4_60;
				newBarData = bardata_0_O4_60;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_0_O4_40;
				newHexagonData = hexagon_layer_0_O4_40;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_0_O4_40;
				newShareData = data_0_O4_40;
				newBarData = bardata_0_O4_40;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_0_O5_100;
				newHexagonData = hexagon_layer_0_O5_100;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_0_O5_100;
				newShareData = data_0_O5_100;
				newBarData = bardata_0_O5_100;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_0_O5_80;
				newHexagonData = hexagon_layer_0_O5_80;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_0_O5_80;
				newShareData = data_0_O5_80;
				newBarData = bardata_0_O5_80;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_0_O5_60;
				newHexagonData = hexagon_layer_0_O5_60;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_0_O5_60;
				newShareData = data_0_O5_60;
				newBarData = bardata_0_O5_60;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_0_O5_40;
				newHexagonData = hexagon_layer_0_O5_40;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_0_O5_40;
				newShareData = data_0_O5_40;
				newBarData = bardata_0_O5_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '1') {
				newArcData = arc_layer_0_D2_100;
				newHexagonData = hexagon_layer_0_D2_100;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_0_D2_100;
				newShareData = data_0_D2_100;
				newBarData = bardata_0_D2_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '2') {
				newArcData = arc_layer_0_D2_80;
				newHexagonData = hexagon_layer_0_D2_80;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_0_D2_80;
				newShareData = data_0_D2_80;
				newBarData = bardata_0_D2_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '3') {
				newArcData = arc_layer_0_D2_60;
				newHexagonData = hexagon_layer_0_D2_60;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_0_D2_60;
				newShareData = data_0_D2_60;
				newBarData = bardata_0_D2_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '4') {
				newArcData = arc_layer_0_D2_40;
				newHexagonData = hexagon_layer_0_D2_40;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_0_D2_40;
				newShareData = data_0_D2_40;
				newBarData = bardata_0_D2_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '1') {
				newArcData = arc_layer_0_D3_100;
				newHexagonData = hexagon_layer_0_D3_100;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_0_D3_100;
				newShareData = data_0_D3_100;
				newBarData = bardata_0_D3_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '2') {
				newArcData = arc_layer_0_D3_80;
				newHexagonData = hexagon_layer_0_D3_80;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_0_D3_80;
				newShareData = data_0_D3_80;
				newBarData = bardata_0_D3_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '3') {
				newArcData = arc_layer_0_D3_60;
				newHexagonData = hexagon_layer_0_D3_60;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_0_D3_60;
				newShareData = data_0_D3_60;
				newBarData = bardata_0_D3_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '4') {
				newArcData = arc_layer_0_D3_40;
				newHexagonData = hexagon_layer_0_D3_40;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_0_D3_40;
				newShareData = data_0_D3_40;
				newBarData = bardata_0_D3_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '1') {
				newArcData = arc_layer_0_D4_100;
				newHexagonData = hexagon_layer_0_D4_100;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_0_D4_100;
				newShareData = data_0_D4_100;
				newBarData = bardata_0_D4_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '2') {
				newArcData = arc_layer_0_D4_80;
				newHexagonData = hexagon_layer_0_D4_80;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_0_D4_80;
				newShareData = data_0_D4_80;
				newBarData = bardata_0_D4_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '3') {
				newArcData = arc_layer_0_D4_60;
				newHexagonData = hexagon_layer_0_D4_60;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_0_D4_60;
				newShareData = data_0_D4_60;
				newBarData = bardata_0_D4_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '4') {
				newArcData = arc_layer_0_D4_40;
				newHexagonData = hexagon_layer_0_D4_40;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_0_D4_40;
				newShareData = data_0_D4_40;
				newBarData = bardata_0_D4_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '1') {
				newArcData = arc_layer_0_D5_100;
				newHexagonData = hexagon_layer_0_D5_100;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_0_D5_100;
				newShareData = data_0_D5_100;
				newBarData = bardata_0_D5_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '2') {
				newArcData = arc_layer_0_D5_80;
				newHexagonData = hexagon_layer_0_D5_80;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_0_D5_80;
				newShareData = data_0_D5_80;
				newBarData = bardata_0_D5_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '3') {
				newArcData = arc_layer_0_D5_60;
				newHexagonData = hexagon_layer_0_D5_60;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_0_D5_60;
				newShareData = data_0_D5_60;
				newBarData = bardata_0_D5_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '4') {
				newArcData = arc_layer_0_D5_40;
				newHexagonData = hexagon_layer_0_D5_40;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_0_D5_40;
				newShareData = data_0_D5_40;
				newBarData = bardata_0_D5_40;
			} else {
				newArcData = arc_layer_0_O1_100;
				newHexagonData = hexagon_layer_0_O1_100;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_0_O1_100;
				newShareData = data_0_O1_100;
				newBarData = bardata_0_O1_100;
			}
		} else if (activeWFMIndex === 1) {
			if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_1_O1_100;
				newHexagonData = hexagon_layer_1_O1_100;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_1_O1_100;
				newShareData = data_1_O1_100;
				newBarData = bardata_1_O1_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_1_O1_80;
				newHexagonData = hexagon_layer_1_O1_80;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_1_O1_80;
				newShareData = data_1_O1_80;
				newBarData = bardata_1_O1_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_1_O1_60;
				newHexagonData = hexagon_layer_1_O1_60;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_1_O1_60;
				newShareData = data_1_O1_60;
				newBarData = bardata_1_O1_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_1_O1_40;
				newHexagonData = hexagon_layer_1_O1_40;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_1_O1_40;
				newShareData = data_1_O1_40;
				newBarData = bardata_1_O1_40;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_1_O2_100;
				newHexagonData = hexagon_layer_1_O2_100;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_1_O2_100;
				newShareData = data_1_O2_100;
				newBarData = bardata_1_O2_100;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_1_O2_80;
				newHexagonData = hexagon_layer_1_O2_80;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_1_O2_80;
				newShareData = data_1_O2_80;
				newBarData = bardata_1_O2_80;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_1_O2_60;
				newHexagonData = hexagon_layer_1_O2_60;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_1_O2_60;
				newShareData = data_1_O2_60;
				newBarData = bardata_1_O2_60;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_1_O2_40;
				newHexagonData = hexagon_layer_1_O2_40;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_1_O2_40;
				newShareData = data_1_O2_40;
				newBarData = bardata_1_O2_40;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_1_O3_100;
				newHexagonData = hexagon_layer_1_O3_100;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_1_O3_100;
				newShareData = data_1_O3_100;
				newBarData = bardata_1_O3_100;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_1_O3_80;
				newHexagonData = hexagon_layer_1_O3_80;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_1_O3_80;
				newShareData = data_1_O3_80;
				newBarData = bardata_1_O3_80;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_1_O3_60;
				newHexagonData = hexagon_layer_1_O3_60;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_1_O3_60;
				newShareData = data_1_O3_60;
				newBarData = bardata_1_O3_60;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_1_O3_40;
				newHexagonData = hexagon_layer_1_O3_40;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_1_O3_40;
				newShareData = data_1_O3_40;
				newBarData = bardata_1_O3_40;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_1_O4_100;
				newHexagonData = hexagon_layer_1_O4_100;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_1_O4_100;
				newShareData = data_1_O4_100;
				newBarData = bardata_1_O4_100;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_1_O4_80;
				newHexagonData = hexagon_layer_1_O4_80;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_1_O4_80;
				newShareData = data_1_O4_80;
				newBarData = bardata_1_O4_80;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_1_O4_60;
				newHexagonData = hexagon_layer_1_O4_60;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_1_O4_60;
				newShareData = data_1_O4_60;
				newBarData = bardata_1_O4_60;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_1_O4_40;
				newHexagonData = hexagon_layer_1_O4_40;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_1_O4_40;
				newShareData = data_1_O4_40;
				newBarData = bardata_1_O4_40;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_1_O5_100;
				newHexagonData = hexagon_layer_1_O5_100;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_1_O5_100;
				newShareData = data_1_O5_100;
				newBarData = bardata_1_O5_100;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_1_O5_80;
				newHexagonData = hexagon_layer_1_O5_80;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_1_O5_80;
				newShareData = data_1_O5_80;
				newBarData = bardata_1_O5_80;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_1_O5_60;
				newHexagonData = hexagon_layer_1_O5_60;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_1_O5_60;
				newShareData = data_1_O5_60;
				newBarData = bardata_1_O5_60;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_1_O5_40;
				newHexagonData = hexagon_layer_1_O5_40;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_1_O5_40;
				newShareData = data_1_O5_40;
				newBarData = bardata_1_O5_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '1') {
				newArcData = arc_layer_1_D2_100;
				newHexagonData = hexagon_layer_1_D2_100;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_1_D2_100;
				newShareData = data_1_D2_100;
				newBarData = bardata_1_D2_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '2') {
				newArcData = arc_layer_1_D2_80;
				newHexagonData = hexagon_layer_1_D2_80;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_1_D2_80;
				newShareData = data_1_D2_80;
				newBarData = bardata_1_D2_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '3') {
				newArcData = arc_layer_1_D2_60;
				newHexagonData = hexagon_layer_1_D2_60;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_1_D2_60;
				newShareData = data_1_D2_60;
				newBarData = bardata_1_D2_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '4') {
				newArcData = arc_layer_1_D2_40;
				newHexagonData = hexagon_layer_1_D2_40;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_1_D2_40;
				newShareData = data_1_D2_40;
				newBarData = bardata_1_D2_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '1') {
				newArcData = arc_layer_1_D3_100;
				newHexagonData = hexagon_layer_1_D3_100;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_1_D3_100;
				newShareData = data_1_D3_100;
				newBarData = bardata_1_D3_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '2') {
				newArcData = arc_layer_1_D3_80;
				newHexagonData = hexagon_layer_1_D3_80;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_1_D3_80;
				newShareData = data_1_D3_80;
				newBarData = bardata_1_D3_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '3') {
				newArcData = arc_layer_1_D3_60;
				newHexagonData = hexagon_layer_1_D3_60;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_1_D3_60;
				newShareData = data_1_D3_60;
				newBarData = bardata_1_D3_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '4') {
				newArcData = arc_layer_1_D3_40;
				newHexagonData = hexagon_layer_1_D3_40;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_1_D3_40;
				newShareData = data_1_D3_40;
				newBarData = bardata_1_D3_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '1') {
				newArcData = arc_layer_1_D4_100;
				newHexagonData = hexagon_layer_1_D4_100;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_1_D4_100;
				newShareData = data_1_D4_100;
				newBarData = bardata_1_D4_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '2') {
				newArcData = arc_layer_1_D4_80;
				newHexagonData = hexagon_layer_1_D4_80;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_1_D4_80;
				newShareData = data_1_D4_80;
				newBarData = bardata_1_D4_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '3') {
				newArcData = arc_layer_1_D4_60;
				newHexagonData = hexagon_layer_1_D4_60;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_1_D4_60;
				newShareData = data_1_D4_60;
				newBarData = bardata_1_D4_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '4') {
				newArcData = arc_layer_1_D4_40;
				newHexagonData = hexagon_layer_1_D4_40;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_1_D4_40;
				newShareData = data_1_D4_40;
				newBarData = bardata_1_D4_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '1') {
				newArcData = arc_layer_1_D5_100;
				newHexagonData = hexagon_layer_1_D5_100;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_1_D5_100;
				newShareData = data_1_D5_100;
				newBarData = bardata_1_D5_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '2') {
				newArcData = arc_layer_1_D5_80;
				newHexagonData = hexagon_layer_1_D5_80;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_1_D5_80;
				newShareData = data_1_D5_80;
				newBarData = bardata_1_D5_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '3') {
				newArcData = arc_layer_1_D5_60;
				newHexagonData = hexagon_layer_1_D5_60;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_1_D5_60;
				newShareData = data_1_D5_60;
				newBarData = bardata_1_D5_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '4') {
				newArcData = arc_layer_1_D5_40;
				newHexagonData = hexagon_layer_1_D5_40;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_1_D5_40;
				newShareData = data_1_D5_40;
				newBarData = bardata_1_D5_40;
			} else {
				newArcData = arc_layer_1_O1_100;
				newHexagonData = hexagon_layer_1_O1_100;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_1_O1_100;
				newShareData = data_1_O1_100;
				newBarData = bardata_1_O1_100;
			}
		} else if (activeWFMIndex === 2) {
			if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_2_O1_100;
				newHexagonData = hexagon_layer_2_O1_100;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_2_O1_100;
				newShareData = data_2_O1_100;
				newBarData = bardata_2_O1_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_2_O1_80;
				newHexagonData = hexagon_layer_2_O1_80;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_2_O1_80;
				newShareData = data_2_O1_80;
				newBarData = bardata_2_O1_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_2_O1_60;
				newHexagonData = hexagon_layer_2_O1_60;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_2_O1_60;
				newShareData = data_2_O1_60;
				newBarData = bardata_2_O1_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_2_O1_40;
				newHexagonData = hexagon_layer_2_O1_40;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_2_O1_40;
				newShareData = data_2_O1_40;
				newBarData = bardata_2_O1_40;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_2_O2_100;
				newHexagonData = hexagon_layer_2_O2_100;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_2_O2_100;
				newShareData = data_2_O2_100;
				newBarData = bardata_2_O2_100;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_2_O2_80;
				newHexagonData = hexagon_layer_2_O2_80;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_2_O2_80;
				newShareData = data_2_O2_80;
				newBarData = bardata_2_O2_80;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_2_O2_60;
				newHexagonData = hexagon_layer_2_O2_60;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_2_O2_60;
				newShareData = data_2_O2_60;
				newBarData = bardata_2_O2_60;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_2_O2_40;
				newHexagonData = hexagon_layer_2_O2_40;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_2_O2_40;
				newShareData = data_2_O2_40;
				newBarData = bardata_2_O2_40;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_2_O3_100;
				newHexagonData = hexagon_layer_2_O3_100;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_2_O3_100;
				newShareData = data_2_O3_100;
				newBarData = bardata_2_O3_100;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_2_O3_80;
				newHexagonData = hexagon_layer_2_O3_80;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_2_O3_80;
				newShareData = data_2_O3_80;
				newBarData = bardata_2_O3_80;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_2_O3_60;
				newHexagonData = hexagon_layer_2_O3_60;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_2_O3_60;
				newShareData = data_2_O3_60;
				newBarData = bardata_2_O3_60;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_2_O3_40;
				newHexagonData = hexagon_layer_2_O3_40;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_2_O3_40;
				newShareData = data_2_O3_40;
				newBarData = bardata_2_O3_40;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_2_O4_100;
				newHexagonData = hexagon_layer_2_O4_100;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_2_O4_100;
				newShareData = data_2_O4_100;
				newBarData = bardata_2_O4_100;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_2_O4_80;
				newHexagonData = hexagon_layer_2_O4_80;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_2_O4_80;
				newShareData = data_2_O4_80;
				newBarData = bardata_2_O4_80;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_2_O4_60;
				newHexagonData = hexagon_layer_2_O4_60;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_2_O4_60;
				newShareData = data_2_O4_60;
				newBarData = bardata_2_O4_60;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_2_O4_40;
				newHexagonData = hexagon_layer_2_O4_40;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_2_O4_40;
				newShareData = data_2_O4_40;
				newBarData = bardata_2_O4_40;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_2_O5_100;
				newHexagonData = hexagon_layer_2_O5_100;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_2_O5_100;
				newShareData = data_2_O5_100;
				newBarData = bardata_2_O5_100;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_2_O5_80;
				newHexagonData = hexagon_layer_2_O5_80;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_2_O5_80;
				newShareData = data_2_O5_80;
				newBarData = bardata_2_O5_80;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_2_O5_60;
				newHexagonData = hexagon_layer_2_O5_60;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_2_O5_60;
				newShareData = data_2_O5_60;
				newBarData = bardata_2_O5_60;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_2_O5_40;
				newHexagonData = hexagon_layer_2_O5_40;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_2_O5_40;
				newShareData = data_2_O5_40;
				newBarData = bardata_2_O5_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '1') {
				newArcData = arc_layer_2_D2_100;
				newHexagonData = hexagon_layer_2_D2_100;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_2_D2_100;
				newShareData = data_2_D2_100;
				newBarData = bardata_2_D2_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '2') {
				newArcData = arc_layer_2_D2_80;
				newHexagonData = hexagon_layer_2_D2_80;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_2_D2_80;
				newShareData = data_2_D2_80;
				newBarData = bardata_2_D2_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '3') {
				newArcData = arc_layer_2_D2_60;
				newHexagonData = hexagon_layer_2_D2_60;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_2_D2_60;
				newShareData = data_2_D2_60;
				newBarData = bardata_2_D2_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '4') {
				newArcData = arc_layer_2_D2_40;
				newHexagonData = hexagon_layer_2_D2_40;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_2_D2_40;
				newShareData = data_2_D2_40;
				newBarData = bardata_2_D2_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '1') {
				newArcData = arc_layer_2_D3_100;
				newHexagonData = hexagon_layer_2_D3_100;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_2_D3_100;
				newShareData = data_2_D3_100;
				newBarData = bardata_2_D3_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '2') {
				newArcData = arc_layer_2_D3_80;
				newHexagonData = hexagon_layer_2_D3_80;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_2_D3_80;
				newShareData = data_2_D3_80;
				newBarData = bardata_2_D3_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '3') {
				newArcData = arc_layer_2_D3_60;
				newHexagonData = hexagon_layer_2_D3_60;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_2_D3_60;
				newShareData = data_2_D3_60;
				newBarData = bardata_2_D3_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '4') {
				newArcData = arc_layer_2_D3_40;
				newHexagonData = hexagon_layer_2_D3_40;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_2_D3_40;
				newShareData = data_2_D3_40;
				newBarData = bardata_2_D3_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '1') {
				newArcData = arc_layer_2_D4_100;
				newHexagonData = hexagon_layer_2_D4_100;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_2_D4_100;
				newShareData = data_2_D4_100;
				newBarData = bardata_2_D4_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '2') {
				newArcData = arc_layer_2_D4_80;
				newHexagonData = hexagon_layer_2_D4_80;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_2_D4_80;
				newShareData = data_2_D4_80;
				newBarData = bardata_2_D4_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '3') {
				newArcData = arc_layer_2_D4_60;
				newHexagonData = hexagon_layer_2_D4_60;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_2_D4_60;
				newShareData = data_2_D4_60;
				newBarData = bardata_2_D4_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '4') {
				newArcData = arc_layer_2_D4_40;
				newHexagonData = hexagon_layer_2_D4_40;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_2_D4_40;
				newShareData = data_2_D4_40;
				newBarData = bardata_2_D4_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '1') {
				newArcData = arc_layer_2_D5_100;
				newHexagonData = hexagon_layer_2_D5_100;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_2_D5_100;
				newShareData = data_2_D5_100;
				newBarData = bardata_2_D5_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '2') {
				newArcData = arc_layer_2_D5_80;
				newHexagonData = hexagon_layer_2_D5_80;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_2_D5_80;
				newShareData = data_2_D5_80;
				newBarData = bardata_2_D5_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '3') {
				newArcData = arc_layer_2_D5_60;
				newHexagonData = hexagon_layer_2_D5_60;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_2_D5_60;
				newShareData = data_2_D5_60;
				newBarData = bardata_2_D5_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '4') {
				newArcData = arc_layer_2_D5_40;
				newHexagonData = hexagon_layer_2_D5_40;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_2_D5_40;
				newShareData = data_2_D5_40;
				newBarData = bardata_2_D5_40;
			} else {
				newArcData = arc_layer_2_O1_100;
				newHexagonData = hexagon_layer_2_O1_100;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_2_O1_100;
				newShareData = data_2_O1_100;
				newBarData = bardata_2_O1_100;
			}
		} else if (activeWFMIndex === 3) {
			if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_3_O1_100;
				newHexagonData = hexagon_layer_3_O1_100;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_3_O1_100;
				newShareData = data_3_O1_100;
				newBarData = bardata_3_O1_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_3_O1_80;
				newHexagonData = hexagon_layer_3_O1_80;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_3_O1_80;
				newShareData = data_3_O1_80;
				newBarData = bardata_3_O1_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_3_O1_60;
				newHexagonData = hexagon_layer_3_O1_60;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_3_O1_60;
				newShareData = data_3_O1_60;
				newBarData = bardata_3_O1_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_3_O1_40;
				newHexagonData = hexagon_layer_3_O1_40;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_3_O1_40;
				newShareData = data_3_O1_40;
				newBarData = bardata_3_O1_40;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_3_O2_100;
				newHexagonData = hexagon_layer_3_O2_100;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_3_O2_100;
				newShareData = data_3_O2_100;
				newBarData = bardata_3_O2_100;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_3_O2_80;
				newHexagonData = hexagon_layer_3_O2_80;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_3_O2_80;
				newShareData = data_3_O2_80;
				newBarData = bardata_3_O2_80;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_3_O2_60;
				newHexagonData = hexagon_layer_3_O2_60;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_3_O2_60;
				newShareData = data_3_O2_60;
				newBarData = bardata_3_O2_60;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_3_O2_40;
				newHexagonData = hexagon_layer_3_O2_40;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_3_O2_40;
				newShareData = data_3_O2_40;
				newBarData = bardata_3_O2_40;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_3_O3_100;
				newHexagonData = hexagon_layer_3_O3_100;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_3_O3_100;
				newShareData = data_3_O3_100;
				newBarData = bardata_3_O3_100;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_3_O3_80;
				newHexagonData = hexagon_layer_3_O3_80;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_3_O3_80;
				newShareData = data_3_O3_80;
				newBarData = bardata_3_O3_80;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_3_O3_60;
				newHexagonData = hexagon_layer_3_O3_60;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_3_O3_60;
				newShareData = data_3_O3_60;
				newBarData = bardata_3_O3_60;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_3_O3_40;
				newHexagonData = hexagon_layer_3_O3_40;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_3_O3_40;
				newShareData = data_3_O3_40;
				newBarData = bardata_3_O3_40;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_3_O4_100;
				newHexagonData = hexagon_layer_3_O4_100;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_3_O4_100;
				newShareData = data_3_O4_100;
				newBarData = bardata_3_O4_100;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_3_O4_80;
				newHexagonData = hexagon_layer_3_O4_80;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_3_O4_80;
				newShareData = data_3_O4_80;
				newBarData = bardata_3_O4_80;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_3_O4_60;
				newHexagonData = hexagon_layer_3_O4_60;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_3_O4_60;
				newShareData = data_3_O4_60;
				newBarData = bardata_3_O4_60;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_3_O4_40;
				newHexagonData = hexagon_layer_3_O4_40;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_3_O4_40;
				newShareData = data_3_O4_40;
				newBarData = bardata_3_O4_40;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_3_O5_100;
				newHexagonData = hexagon_layer_3_O5_100;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_3_O5_100;
				newShareData = data_3_O5_100;
				newBarData = bardata_3_O5_100;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_3_O5_80;
				newHexagonData = hexagon_layer_3_O5_80;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_3_O5_80;
				newShareData = data_3_O5_80;
				newBarData = bardata_3_O5_80;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_3_O5_60;
				newHexagonData = hexagon_layer_3_O5_60;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_3_O5_60;
				newShareData = data_3_O5_60;
				newBarData = bardata_3_O5_60;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_3_O5_40;
				newHexagonData = hexagon_layer_3_O5_40;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_3_O5_40;
				newShareData = data_3_O5_40;
				newBarData = bardata_3_O5_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '1') {
				newArcData = arc_layer_3_D2_100;
				newHexagonData = hexagon_layer_3_D2_100;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_3_D2_100;
				newShareData = data_3_D2_100;
				newBarData = bardata_3_D2_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '2') {
				newArcData = arc_layer_3_D2_80;
				newHexagonData = hexagon_layer_3_D2_80;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_3_D2_80;
				newShareData = data_3_D2_80;
				newBarData = bardata_3_D2_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '3') {
				newArcData = arc_layer_3_D2_60;
				newHexagonData = hexagon_layer_3_D2_60;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_3_D2_60;
				newShareData = data_3_D2_60;
				newBarData = bardata_3_D2_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '4') {
				newArcData = arc_layer_3_D2_40;
				newHexagonData = hexagon_layer_3_D2_40;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_3_D2_40;
				newShareData = data_3_D2_40;
				newBarData = bardata_3_D2_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '1') {
				newArcData = arc_layer_3_D3_100;
				newHexagonData = hexagon_layer_3_D3_100;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_3_D3_100;
				newShareData = data_3_D3_100;
				newBarData = bardata_3_D3_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '2') {
				newArcData = arc_layer_3_D3_80;
				newHexagonData = hexagon_layer_3_D3_80;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_3_D3_80;
				newShareData = data_3_D3_80;
				newBarData = bardata_3_D3_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '3') {
				newArcData = arc_layer_3_D3_60;
				newHexagonData = hexagon_layer_3_D3_60;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_3_D3_60;
				newShareData = data_3_D3_60;
				newBarData = bardata_3_D3_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '4') {
				newArcData = arc_layer_3_D3_40;
				newHexagonData = hexagon_layer_3_D3_40;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_3_D3_40;
				newShareData = data_3_D3_40;
				newBarData = bardata_3_D3_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '1') {
				newArcData = arc_layer_3_D4_100;
				newHexagonData = hexagon_layer_3_D4_100;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_3_D4_100;
				newShareData = data_3_D4_100;
				newBarData = bardata_3_D4_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '2') {
				newArcData = arc_layer_3_D4_80;
				newHexagonData = hexagon_layer_3_D4_80;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_3_D4_80;
				newShareData = data_3_D4_80;
				newBarData = bardata_3_D4_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '3') {
				newArcData = arc_layer_3_D4_60;
				newHexagonData = hexagon_layer_3_D4_60;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_3_D4_60;
				newShareData = data_3_D4_60;
				newBarData = bardata_3_D4_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '4') {
				newArcData = arc_layer_3_D4_40;
				newHexagonData = hexagon_layer_3_D4_40;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_3_D4_40;
				newShareData = data_3_D4_40;
				newBarData = bardata_3_D4_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '1') {
				newArcData = arc_layer_3_D5_100;
				newHexagonData = hexagon_layer_3_D5_100;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_3_D5_100;
				newShareData = data_3_D5_100;
				newBarData = bardata_3_D5_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '2') {
				newArcData = arc_layer_3_D5_80;
				newHexagonData = hexagon_layer_3_D5_80;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_3_D5_80;
				newShareData = data_3_D5_80;
				newBarData = bardata_3_D5_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '3') {
				newArcData = arc_layer_3_D5_60;
				newHexagonData = hexagon_layer_3_D5_60;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_3_D5_60;
				newShareData = data_3_D5_60;
				newBarData = bardata_3_D5_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '4') {
				newArcData = arc_layer_3_D5_40;
				newHexagonData = hexagon_layer_3_D5_40;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_3_D5_40;
				newShareData = data_3_D5_40;
				newBarData = bardata_3_D5_40;
			} else {
				newArcData = arc_layer_3_O1_100;
				newHexagonData = hexagon_layer_3_O1_100;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_3_O1_100;
				newShareData = data_3_O1_100;
				newBarData = bardata_3_O1_100;
			}
		} else if (activeWFMIndex === 4) {
			if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_4_O1_100;
				newHexagonData = hexagon_layer_4_O1_100;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_4_O1_100;
				newShareData = data_4_O1_100;
				newBarData = bardata_4_O1_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_4_O1_80;
				newHexagonData = hexagon_layer_4_O1_80;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_4_O1_80;
				newShareData = data_4_O1_80;
				newBarData = bardata_4_O1_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_4_O1_60;
				newHexagonData = hexagon_layer_4_O1_60;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_4_O1_60;
				newShareData = data_4_O1_60;
				newBarData = bardata_4_O1_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_4_O1_40;
				newHexagonData = hexagon_layer_4_O1_40;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_4_O1_40;
				newShareData = data_4_O1_40;
				newBarData = bardata_4_O1_40;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_4_O2_100;
				newHexagonData = hexagon_layer_4_O2_100;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_4_O2_100;
				newShareData = data_4_O2_100;
				newBarData = bardata_4_O2_100;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_4_O2_80;
				newHexagonData = hexagon_layer_4_O2_80;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_4_O2_80;
				newShareData = data_4_O2_80;
				newBarData = bardata_4_O2_80;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_4_O2_60;
				newHexagonData = hexagon_layer_4_O2_60;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_4_O2_60;
				newShareData = data_4_O2_60;
				newBarData = bardata_4_O2_60;
			} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_4_O2_40;
				newHexagonData = hexagon_layer_4_O2_40;
				newTripsData = trips_layer_0_O2_100;
				newCO2Data = c_4_O2_40;
				newShareData = data_4_O2_40;
				newBarData = bardata_4_O2_40;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_4_O3_100;
				newHexagonData = hexagon_layer_4_O3_100;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_4_O3_100;
				newShareData = data_4_O3_100;
				newBarData = bardata_4_O3_100;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_4_O3_80;
				newHexagonData = hexagon_layer_4_O3_80;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_4_O3_80;
				newShareData = data_4_O3_80;
				newBarData = bardata_4_O3_80;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_4_O3_60;
				newHexagonData = hexagon_layer_4_O3_60;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_4_O3_60;
				newShareData = data_4_O3_60;
				newBarData = bardata_4_O3_60;
			} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_4_O3_40;
				newHexagonData = hexagon_layer_4_O3_40;
				newTripsData = trips_layer_0_O3_100;
				newCO2Data = c_4_O3_40;
				newShareData = data_4_O3_40;
				newBarData = bardata_4_O3_40;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_4_O4_100;
				newHexagonData = hexagon_layer_4_O4_100;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_4_O4_100;
				newShareData = data_4_O4_100;
				newBarData = bardata_4_O4_100;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_4_O4_80;
				newHexagonData = hexagon_layer_4_O4_80;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_4_O4_80;
				newShareData = data_4_O4_80;
				newBarData = bardata_4_O4_80;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_4_O4_60;
				newHexagonData = hexagon_layer_4_O4_60;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_4_O4_60;
				newShareData = data_4_O4_60;
				newBarData = bardata_4_O4_60;
			} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_4_O4_40;
				newHexagonData = hexagon_layer_4_O4_40;
				newTripsData = trips_layer_0_O4_100;
				newCO2Data = c_4_O4_40;
				newShareData = data_4_O4_40;
				newBarData = bardata_4_O4_40;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '1') {
				newArcData = arc_layer_4_O5_100;
				newHexagonData = hexagon_layer_4_O5_100;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_4_O5_100;
				newShareData = data_4_O5_100;
				newBarData = bardata_4_O5_100;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '2') {
				newArcData = arc_layer_4_O5_80;
				newHexagonData = hexagon_layer_4_O5_80;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_4_O5_80;
				newShareData = data_4_O5_80;
				newBarData = bardata_4_O5_80;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '3') {
				newArcData = arc_layer_4_O5_60;
				newHexagonData = hexagon_layer_4_O5_60;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_4_O5_60;
				newShareData = data_4_O5_60;
				newBarData = bardata_4_O5_60;
			} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '4') {
				newArcData = arc_layer_4_O5_40;
				newHexagonData = hexagon_layer_4_O5_40;
				newTripsData = trips_layer_0_O5_100;
				newCO2Data = c_4_O5_40;
				newShareData = data_4_O5_40;
				newBarData = bardata_4_O5_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '1') {
				newArcData = arc_layer_4_D2_100;
				newHexagonData = hexagon_layer_4_D2_100;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_4_D2_100;
				newShareData = data_4_D2_100;
				newBarData = bardata_4_D2_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '2') {
				newArcData = arc_layer_4_D2_80;
				newHexagonData = hexagon_layer_4_D2_80;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_4_D2_80;
				newShareData = data_4_D2_80;
				newBarData = bardata_4_D2_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '3') {
				newArcData = arc_layer_4_D2_60;
				newHexagonData = hexagon_layer_4_D2_60;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_4_D2_60;
				newShareData = data_4_D2_60;
				newBarData = bardata_4_D2_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '4') {
				newArcData = arc_layer_4_D2_40;
				newHexagonData = hexagon_layer_4_D2_40;
				newTripsData = trips_layer_0_D2_100;
				newCO2Data = c_4_D2_40;
				newShareData = data_4_D2_40;
				newBarData = bardata_4_D2_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '1') {
				newArcData = arc_layer_4_D3_100;
				newHexagonData = hexagon_layer_4_D3_100;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_4_D3_100;
				newShareData = data_4_D3_100;
				newBarData = bardata_4_D3_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '2') {
				newArcData = arc_layer_4_D3_80;
				newHexagonData = hexagon_layer_4_D3_80;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_4_D3_80;
				newShareData = data_4_D3_80;
				newBarData = bardata_4_D3_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '3') {
				newArcData = arc_layer_4_D3_60;
				newHexagonData = hexagon_layer_4_D3_60;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_4_D3_60;
				newShareData = data_4_D3_60;
				newBarData = bardata_4_D3_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '4') {
				newArcData = arc_layer_4_D3_40;
				newHexagonData = hexagon_layer_4_D3_40;
				newTripsData = trips_layer_0_D3_100;
				newCO2Data = c_4_D3_40;
				newShareData = data_4_D3_40;
				newBarData = bardata_4_D3_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '1') {
				newArcData = arc_layer_4_D4_100;
				newHexagonData = hexagon_layer_4_D4_100;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_4_D4_100;
				newShareData = data_4_D4_100;
				newBarData = bardata_4_D4_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '2') {
				newArcData = arc_layer_4_D4_80;
				newHexagonData = hexagon_layer_4_D4_80;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_4_D4_80;
				newShareData = data_4_D4_80;
				newBarData = bardata_4_D4_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '3') {
				newArcData = arc_layer_4_D4_60;
				newHexagonData = hexagon_layer_4_D4_60;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_4_D4_60;
				newShareData = data_4_D4_60;
				newBarData = bardata_4_D4_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '4') {
				newArcData = arc_layer_4_D4_40;
				newHexagonData = hexagon_layer_4_D4_40;
				newTripsData = trips_layer_0_D4_100;
				newCO2Data = c_4_D4_40;
				newShareData = data_4_D4_40;
				newBarData = bardata_4_D4_40;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '1') {
				newArcData = arc_layer_4_D5_100;
				newHexagonData = hexagon_layer_4_D5_100;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_4_D5_100;
				newShareData = data_4_D5_100;
				newBarData = bardata_4_D5_100;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '2') {
				newArcData = arc_layer_4_D5_80;
				newHexagonData = hexagon_layer_4_D5_80;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_4_D5_80;
				newShareData = data_4_D5_80;
				newBarData = bardata_4_D5_80;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '3') {
				newArcData = arc_layer_4_D5_60;
				newHexagonData = hexagon_layer_4_D5_60;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_4_D5_60;
				newShareData = data_4_D5_60;
				newBarData = bardata_4_D5_60;
			} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '4') {
				newArcData = arc_layer_4_D5_40;
				newHexagonData = hexagon_layer_4_D5_40;
				newTripsData = trips_layer_0_D5_100;
				newCO2Data = c_4_D5_40;
				newShareData = data_4_D5_40;
				newBarData = bardata_4_D5_40;
			} else {
				newArcData = arc_layer_4_O1_100;
				newHexagonData = hexagon_layer_4_O1_100;
				newTripsData = trips_layer_0_O1_100;
				newCO2Data = c_4_O1_100;
				newShareData = data_4_O1_100;
				newBarData = bardata_4_O1_100;
			}
		}
		this.setState({ 
			currentArcData: newArcData,
			currentHexagonData: newHexagonData,
			currentTripsData: newTripsData,
			dataForCO2: newCO2Data,
			dataForShare: newShareData,
			dataForBar: newBarData, });
	}

	// updateDataBasedOnSliders() {
	// 	const { firstSliderValue, secondSliderValue, brtSliderValue, show_WFM } = this.state;

	// 	const activeWFMIndex = show_WFM.findIndex(value => value === true);

	// 	// console.log(`First ${firstSliderValue}`);

	// 	let newArcData;
	// 	let newHexagonData;
	// 	let newCO2Data;
	// 	let newShareData;
	// 	let newBarData;

	// 	console.log(`First ${activeWFMIndex}`);
	// 	console.log(`First ${firstSliderValue}`);
	// 	console.log(`First ${secondSliderValue}`);
	// 	console.log(`First ${brtSliderValue}`);

	// 	if (activeWFMIndex === 0) {
	// 		if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_0_O1_100;
	// 			newHexagonData = hexagon_layer_0_O1_100;
	// 			newCO2Data = c_0_O1_100;
	// 			newShareData = data_0_O1_100;
	// 			newBarData = bardata_0_O1_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_0_O1_80;
	// 			newHexagonData = hexagon_layer_0_O1_80;
	// 			newCO2Data = c_0_O1_80;
	// 			newShareData = data_0_O1_80;
	// 			newBarData = bardata_0_O1_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_0_O1_60;
	// 			newHexagonData = hexagon_layer_0_O1_60;
	// 			newCO2Data = c_0_O1_60;
	// 			newShareData = data_0_O1_60;
	// 			newBarData = bardata_0_O1_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_0_O1_40;
	// 			newHexagonData = hexagon_layer_0_O1_40;
	// 			newCO2Data = c_0_O1_40;
	// 			newShareData = data_0_O1_40;
	// 			newBarData = bardata_0_O1_40;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_0_O2_100;
	// 			newHexagonData = hexagon_layer_0_O2_100;
	// 			newCO2Data = c_0_O2_100;
	// 			newShareData = data_0_O2_100;
	// 			newBarData = bardata_0_O2_100;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_0_O2_80;
	// 			newHexagonData = hexagon_layer_0_O2_80;
	// 			newCO2Data = c_0_O2_80;
	// 			newShareData = data_0_O2_80;
	// 			newBarData = bardata_0_O2_80;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_0_O2_60;
	// 			newHexagonData = hexagon_layer_0_O2_60;
	// 			newCO2Data = c_0_O2_60;
	// 			newShareData = data_0_O2_60;
	// 			newBarData = bardata_0_O2_60;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_0_O2_40;
	// 			newHexagonData = hexagon_layer_0_O2_40;
	// 			newCO2Data = c_0_O2_40;
	// 			newShareData = data_0_O2_40;
	// 			newBarData = bardata_0_O2_40;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_0_O3_100;
	// 			newHexagonData = hexagon_layer_0_O3_100;
	// 			newCO2Data = c_0_O3_100;
	// 			newShareData = data_0_O3_100;
	// 			newBarData = bardata_0_O3_100;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_0_O3_80;
	// 			newHexagonData = hexagon_layer_0_O3_80;
	// 			newCO2Data = c_0_O3_80;
	// 			newShareData = data_0_O3_80;
	// 			newBarData = bardata_0_O3_80;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_0_O3_60;
	// 			newHexagonData = hexagon_layer_0_O3_60;
	// 			newCO2Data = c_0_O3_60;
	// 			newShareData = data_0_O3_60;
	// 			newBarData = bardata_0_O3_60;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_0_O3_40;
	// 			newHexagonData = hexagon_layer_0_O3_40;
	// 			newCO2Data = c_0_O3_40;
	// 			newShareData = data_0_O3_40;
	// 			newBarData = bardata_0_O3_40;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_0_O4_100;
	// 			newHexagonData = hexagon_layer_0_O4_100;
	// 			newCO2Data = c_0_O4_100;
	// 			newShareData = data_0_O4_100;
	// 			newBarData = bardata_0_O4_100;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_0_O4_80;
	// 			newHexagonData = hexagon_layer_0_O4_80;
	// 			newCO2Data = c_0_O4_80;
	// 			newShareData = data_0_O4_80;
	// 			newBarData = bardata_0_O4_80;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_0_O4_60;
	// 			newHexagonData = hexagon_layer_0_O4_60;
	// 			newCO2Data = c_0_O4_60;
	// 			newShareData = data_0_O4_60;
	// 			newBarData = bardata_0_O4_60;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_0_O4_40;
	// 			newHexagonData = hexagon_layer_0_O4_40;
	// 			newCO2Data = c_0_O4_40;
	// 			newShareData = data_0_O4_40;
	// 			newBarData = bardata_0_O4_40;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_0_O5_100;
	// 			newHexagonData = hexagon_layer_0_O5_100;
	// 			newCO2Data = c_0_O5_100;
	// 			newShareData = data_0_O5_100;
	// 			newBarData = bardata_0_O5_100;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_0_O5_80;
	// 			newHexagonData = hexagon_layer_0_O5_80;
	// 			newCO2Data = c_0_O5_80;
	// 			newShareData = data_0_O5_80;
	// 			newBarData = bardata_0_O5_80;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_0_O5_60;
	// 			newHexagonData = hexagon_layer_0_O5_60;
	// 			newCO2Data = c_0_O5_60;
	// 			newShareData = data_0_O5_60;
	// 			newBarData = bardata_0_O5_60;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_0_O5_40;
	// 			newHexagonData = hexagon_layer_0_O5_40;
	// 			newCO2Data = c_0_O5_40;
	// 			newShareData = data_0_O5_40;
	// 			newBarData = bardata_0_O5_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_0_D2_100;
	// 			newHexagonData = hexagon_layer_0_D2_100;
	// 			newCO2Data = c_0_D2_100;
	// 			newShareData = data_0_D2_100;
	// 			newBarData = bardata_0_D2_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_0_D2_80;
	// 			newHexagonData = hexagon_layer_0_D2_80;
	// 			newCO2Data = c_0_D2_80;
	// 			newShareData = data_0_D2_80;
	// 			newBarData = bardata_0_D2_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_0_D2_60;
	// 			newHexagonData = hexagon_layer_0_D2_60;
	// 			newCO2Data = c_0_D2_60;
	// 			newShareData = data_0_D2_60;
	// 			newBarData = bardata_0_D2_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_0_D2_40;
	// 			newHexagonData = hexagon_layer_0_D2_40;
	// 			newCO2Data = c_0_D2_40;
	// 			newShareData = data_0_D2_40;
	// 			newBarData = bardata_0_D2_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_0_D3_100;
	// 			newHexagonData = hexagon_layer_0_D3_100;
	// 			newCO2Data = c_0_D3_100;
	// 			newShareData = data_0_D3_100;
	// 			newBarData = bardata_0_D3_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_0_D3_80;
	// 			newHexagonData = hexagon_layer_0_D3_80;
	// 			newCO2Data = c_0_D3_80;
	// 			newShareData = data_0_D3_80;
	// 			newBarData = bardata_0_D3_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_0_D3_60;
	// 			newHexagonData = hexagon_layer_0_D3_60;
	// 			newCO2Data = c_0_D3_60;
	// 			newShareData = data_0_D3_60;
	// 			newBarData = bardata_0_D3_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_0_D3_40;
	// 			newHexagonData = hexagon_layer_0_D3_40;
	// 			newCO2Data = c_0_D3_40;
	// 			newShareData = data_0_D3_40;
	// 			newBarData = bardata_0_D3_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_0_D4_100;
	// 			newHexagonData = hexagon_layer_0_D4_100;
	// 			newCO2Data = c_0_D4_100;
	// 			newShareData = data_0_D4_100;
	// 			newBarData = bardata_0_D4_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_0_D4_80;
	// 			newHexagonData = hexagon_layer_0_D4_80;
	// 			newCO2Data = c_0_D4_80;
	// 			newShareData = data_0_D4_80;
	// 			newBarData = bardata_0_D4_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_0_D4_60;
	// 			newHexagonData = hexagon_layer_0_D4_60;
	// 			newCO2Data = c_0_D4_60;
	// 			newShareData = data_0_D4_60;
	// 			newBarData = bardata_0_D4_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_0_D4_40;
	// 			newHexagonData = hexagon_layer_0_D4_40;
	// 			newCO2Data = c_0_D4_40;
	// 			newShareData = data_0_D4_40;
	// 			newBarData = bardata_0_D4_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_0_D5_100;
	// 			newHexagonData = hexagon_layer_0_D5_100;
	// 			newCO2Data = c_0_D5_100;
	// 			newShareData = data_0_D5_100;
	// 			newBarData = bardata_0_D5_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_0_D5_80;
	// 			newHexagonData = hexagon_layer_0_D5_80;
	// 			newCO2Data = c_0_D5_80;
	// 			newShareData = data_0_D5_80;
	// 			newBarData = bardata_0_D5_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_0_D5_60;
	// 			newHexagonData = hexagon_layer_0_D5_60;
	// 			newCO2Data = c_0_D5_60;
	// 			newShareData = data_0_D5_60;
	// 			newBarData = bardata_0_D5_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_0_D5_40;
	// 			newHexagonData = hexagon_layer_0_D5_40;
	// 			newCO2Data = c_0_D5_40;
	// 			newShareData = data_0_D5_40;
	// 			newBarData = bardata_0_D5_40;
	// 		} else {
	// 			newArcData = arc_layer_0_O1_100;
	// 			newHexagonData = hexagon_layer_0_O1_100;
	// 			newCO2Data = c_0_O1_100;
	// 			newShareData = data_0_O1_100;
	// 			newBarData = bardata_0_O1_100;
	// 		}
	// 	} else if (activeWFMIndex === 1) {
	// 		if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_1_O1_100;
	// 			newHexagonData = hexagon_layer_1_O1_100;
	// 			newCO2Data = c_1_O1_100;
	// 			newShareData = data_1_O1_100;
	// 			newBarData = bardata_1_O1_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_1_O1_80;
	// 			newHexagonData = hexagon_layer_1_O1_80;
	// 			newCO2Data = c_1_O1_80;
	// 			newShareData = data_1_O1_80;
	// 			newBarData = bardata_1_O1_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_1_O1_60;
	// 			newHexagonData = hexagon_layer_1_O1_60;
	// 			newCO2Data = c_1_O1_60;
	// 			newShareData = data_1_O1_60;
	// 			newBarData = bardata_1_O1_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_1_O1_40;
	// 			newHexagonData = hexagon_layer_1_O1_40;
	// 			newCO2Data = c_1_O1_40;
	// 			newShareData = data_1_O1_40;
	// 			newBarData = bardata_1_O1_40;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_1_O2_100;
	// 			newHexagonData = hexagon_layer_1_O2_100;
	// 			newCO2Data = c_1_O2_100;
	// 			newShareData = data_1_O2_100;
	// 			newBarData = bardata_1_O2_100;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_1_O2_80;
	// 			newHexagonData = hexagon_layer_1_O2_80;
	// 			newCO2Data = c_1_O2_80;
	// 			newShareData = data_1_O2_80;
	// 			newBarData = bardata_1_O2_80;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_1_O2_60;
	// 			newHexagonData = hexagon_layer_1_O2_60;
	// 			newCO2Data = c_1_O2_60;
	// 			newShareData = data_1_O2_60;
	// 			newBarData = bardata_1_O2_60;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_1_O2_40;
	// 			newHexagonData = hexagon_layer_1_O2_40;
	// 			newCO2Data = c_1_O2_40;
	// 			newShareData = data_1_O2_40;
	// 			newBarData = bardata_1_O2_40;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_1_O3_100;
	// 			newHexagonData = hexagon_layer_1_O3_100;
	// 			newCO2Data = c_1_O3_100;
	// 			newShareData = data_1_O3_100;
	// 			newBarData = bardata_1_O3_100;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_1_O3_80;
	// 			newHexagonData = hexagon_layer_1_O3_80;
	// 			newCO2Data = c_1_O3_80;
	// 			newShareData = data_1_O3_80;
	// 			newBarData = bardata_1_O3_80;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_1_O3_60;
	// 			newHexagonData = hexagon_layer_1_O3_60;
	// 			newCO2Data = c_1_O3_60;
	// 			newShareData = data_1_O3_60;
	// 			newBarData = bardata_1_O3_60;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_1_O3_40;
	// 			newHexagonData = hexagon_layer_1_O3_40;
	// 			newCO2Data = c_1_O3_40;
	// 			newShareData = data_1_O3_40;
	// 			newBarData = bardata_1_O3_40;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_1_O4_100;
	// 			newHexagonData = hexagon_layer_1_O4_100;
	// 			newCO2Data = c_1_O4_100;
	// 			newShareData = data_1_O4_100;
	// 			newBarData = bardata_1_O4_100;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_1_O4_80;
	// 			newHexagonData = hexagon_layer_1_O4_80;
	// 			newCO2Data = c_1_O4_80;
	// 			newShareData = data_1_O4_80;
	// 			newBarData = bardata_1_O4_80;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_1_O4_60;
	// 			newHexagonData = hexagon_layer_1_O4_60;
	// 			newCO2Data = c_1_O4_60;
	// 			newShareData = data_1_O4_60;
	// 			newBarData = bardata_1_O4_60;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_1_O4_40;
	// 			newHexagonData = hexagon_layer_1_O4_40;
	// 			newCO2Data = c_1_O4_40;
	// 			newShareData = data_1_O4_40;
	// 			newBarData = bardata_1_O4_40;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_1_O5_100;
	// 			newHexagonData = hexagon_layer_1_O5_100;
	// 			newCO2Data = c_1_O5_100;
	// 			newShareData = data_1_O5_100;
	// 			newBarData = bardata_1_O5_100;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_1_O5_80;
	// 			newHexagonData = hexagon_layer_1_O5_80;
	// 			newCO2Data = c_1_O5_80;
	// 			newShareData = data_1_O5_80;
	// 			newBarData = bardata_1_O5_80;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_1_O5_60;
	// 			newHexagonData = hexagon_layer_1_O5_60;
	// 			newCO2Data = c_1_O5_60;
	// 			newShareData = data_1_O5_60;
	// 			newBarData = bardata_1_O5_60;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_1_O5_40;
	// 			newHexagonData = hexagon_layer_1_O5_40;
	// 			newCO2Data = c_1_O5_40;
	// 			newShareData = data_1_O5_40;
	// 			newBarData = bardata_1_O5_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_1_D2_100;
	// 			newHexagonData = hexagon_layer_1_D2_100;
	// 			newCO2Data = c_1_D2_100;
	// 			newShareData = data_1_D2_100;
	// 			newBarData = bardata_1_D2_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_1_D2_80;
	// 			newHexagonData = hexagon_layer_1_D2_80;
	// 			newCO2Data = c_1_D2_80;
	// 			newShareData = data_1_D2_80;
	// 			newBarData = bardata_1_D2_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_1_D2_60;
	// 			newHexagonData = hexagon_layer_1_D2_60;
	// 			newCO2Data = c_1_D2_60;
	// 			newShareData = data_1_D2_60;
	// 			newBarData = bardata_1_D2_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_1_D2_40;
	// 			newHexagonData = hexagon_layer_1_D2_40;
	// 			newCO2Data = c_1_D2_40;
	// 			newShareData = data_1_D2_40;
	// 			newBarData = bardata_1_D2_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_1_D3_100;
	// 			newHexagonData = hexagon_layer_1_D3_100;
	// 			newCO2Data = c_1_D3_100;
	// 			newShareData = data_1_D3_100;
	// 			newBarData = bardata_1_D3_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_1_D3_80;
	// 			newHexagonData = hexagon_layer_1_D3_80;
	// 			newCO2Data = c_1_D3_80;
	// 			newShareData = data_1_D3_80;
	// 			newBarData = bardata_1_D3_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_1_D3_60;
	// 			newHexagonData = hexagon_layer_1_D3_60;
	// 			newCO2Data = c_1_D3_60;
	// 			newShareData = data_1_D3_60;
	// 			newBarData = bardata_1_D3_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_1_D3_40;
	// 			newHexagonData = hexagon_layer_1_D3_40;
	// 			newCO2Data = c_1_D3_40;
	// 			newShareData = data_1_D3_40;
	// 			newBarData = bardata_1_D3_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_1_D4_100;
	// 			newHexagonData = hexagon_layer_1_D4_100;
	// 			newCO2Data = c_1_D4_100;
	// 			newShareData = data_1_D4_100;
	// 			newBarData = bardata_1_D4_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_1_D4_80;
	// 			newHexagonData = hexagon_layer_1_D4_80;
	// 			newCO2Data = c_1_D4_80;
	// 			newShareData = data_1_D4_80;
	// 			newBarData = bardata_1_D4_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_1_D4_60;
	// 			newHexagonData = hexagon_layer_1_D4_60;
	// 			newCO2Data = c_1_D4_60;
	// 			newShareData = data_1_D4_60;
	// 			newBarData = bardata_1_D4_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_1_D4_40;
	// 			newHexagonData = hexagon_layer_1_D4_40;
	// 			newCO2Data = c_1_D4_40;
	// 			newShareData = data_1_D4_40;
	// 			newBarData = bardata_1_D4_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_1_D5_100;
	// 			newHexagonData = hexagon_layer_1_D5_100;
	// 			newCO2Data = c_1_D5_100;
	// 			newShareData = data_1_D5_100;
	// 			newBarData = bardata_1_D5_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_1_D5_80;
	// 			newHexagonData = hexagon_layer_1_D5_80;
	// 			newCO2Data = c_1_D5_80;
	// 			newShareData = data_1_D5_80;
	// 			newBarData = bardata_1_D5_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_1_D5_60;
	// 			newHexagonData = hexagon_layer_1_D5_60;
	// 			newCO2Data = c_1_D5_60;
	// 			newShareData = data_1_D5_60;
	// 			newBarData = bardata_1_D5_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_1_D5_40;
	// 			newHexagonData = hexagon_layer_1_D5_40;
	// 			newCO2Data = c_1_D5_40;
	// 			newShareData = data_1_D5_40;
	// 			newBarData = bardata_1_D5_40;
	// 		} else {
	// 			newArcData = arc_layer_1_O1_100;
	// 			newHexagonData = hexagon_layer_1_O1_100;
	// 			newCO2Data = c_1_O1_100;
	// 			newShareData = data_1_O1_100;
	// 			newBarData = bardata_1_O1_100;
	// 		}
	// 	} else if (activeWFMIndex === 2) {
	// 		if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_2_O1_100;
	// 			newHexagonData = hexagon_layer_2_O1_100;
	// 			newCO2Data = c_2_O1_100;
	// 			newShareData = data_2_O1_100;
	// 			newBarData = bardata_2_O1_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_2_O1_80;
	// 			newHexagonData = hexagon_layer_2_O1_80;
	// 			newCO2Data = c_2_O1_80;
	// 			newShareData = data_2_O1_80;
	// 			newBarData = bardata_2_O1_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_2_O1_60;
	// 			newHexagonData = hexagon_layer_2_O1_60;
	// 			newCO2Data = c_2_O1_60;
	// 			newShareData = data_2_O1_60;
	// 			newBarData = bardata_2_O1_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_2_O1_40;
	// 			newHexagonData = hexagon_layer_2_O1_40;
	// 			newCO2Data = c_2_O1_40;
	// 			newShareData = data_2_O1_40;
	// 			newBarData = bardata_2_O1_40;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_2_O2_100;
	// 			newHexagonData = hexagon_layer_2_O2_100;
	// 			newCO2Data = c_2_O2_100;
	// 			newShareData = data_2_O2_100;
	// 			newBarData = bardata_2_O2_100;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_2_O2_80;
	// 			newHexagonData = hexagon_layer_2_O2_80;
	// 			newCO2Data = c_2_O2_80;
	// 			newShareData = data_2_O2_80;
	// 			newBarData = bardata_2_O2_80;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_2_O2_60;
	// 			newHexagonData = hexagon_layer_2_O2_60;
	// 			newCO2Data = c_2_O2_60;
	// 			newShareData = data_2_O2_60;
	// 			newBarData = bardata_2_O2_60;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_2_O2_40;
	// 			newHexagonData = hexagon_layer_2_O2_40;
	// 			newCO2Data = c_2_O2_40;
	// 			newShareData = data_2_O2_40;
	// 			newBarData = bardata_2_O2_40;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_2_O3_100;
	// 			newHexagonData = hexagon_layer_2_O3_100;
	// 			newCO2Data = c_2_O3_100;
	// 			newShareData = data_2_O3_100;
	// 			newBarData = bardata_2_O3_100;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_2_O3_80;
	// 			newHexagonData = hexagon_layer_2_O3_80;
	// 			newCO2Data = c_2_O3_80;
	// 			newShareData = data_2_O3_80;
	// 			newBarData = bardata_2_O3_80;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_2_O3_60;
	// 			newHexagonData = hexagon_layer_2_O3_60;
	// 			newCO2Data = c_2_O3_60;
	// 			newShareData = data_2_O3_60;
	// 			newBarData = bardata_2_O3_60;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_2_O3_40;
	// 			newHexagonData = hexagon_layer_2_O3_40;
	// 			newCO2Data = c_2_O3_40;
	// 			newShareData = data_2_O3_40;
	// 			newBarData = bardata_2_O3_40;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_2_O4_100;
	// 			newHexagonData = hexagon_layer_2_O4_100;
	// 			newCO2Data = c_2_O4_100;
	// 			newShareData = data_2_O4_100;
	// 			newBarData = bardata_2_O4_100;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_2_O4_80;
	// 			newHexagonData = hexagon_layer_2_O4_80;
	// 			newCO2Data = c_2_O4_80;
	// 			newShareData = data_2_O4_80;
	// 			newBarData = bardata_2_O4_80;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_2_O4_60;
	// 			newHexagonData = hexagon_layer_2_O4_60;
	// 			newCO2Data = c_2_O4_60;
	// 			newShareData = data_2_O4_60;
	// 			newBarData = bardata_2_O4_60;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_2_O4_40;
	// 			newHexagonData = hexagon_layer_2_O4_40;
	// 			newCO2Data = c_2_O4_40;
	// 			newShareData = data_2_O4_40;
	// 			newBarData = bardata_2_O4_40;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_2_O5_100;
	// 			newHexagonData = hexagon_layer_2_O5_100;
	// 			newCO2Data = c_2_O5_100;
	// 			newShareData = data_2_O5_100;
	// 			newBarData = bardata_2_O5_100;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_2_O5_80;
	// 			newHexagonData = hexagon_layer_2_O5_80;
	// 			newCO2Data = c_2_O5_80;
	// 			newShareData = data_2_O5_80;
	// 			newBarData = bardata_2_O5_80;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_2_O5_60;
	// 			newHexagonData = hexagon_layer_2_O5_60;
	// 			newCO2Data = c_2_O5_60;
	// 			newShareData = data_2_O5_60;
	// 			newBarData = bardata_2_O5_60;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_2_O5_40;
	// 			newHexagonData = hexagon_layer_2_O5_40;
	// 			newCO2Data = c_2_O5_40;
	// 			newShareData = data_2_O5_40;
	// 			newBarData = bardata_2_O5_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_2_D2_100;
	// 			newHexagonData = hexagon_layer_2_D2_100;
	// 			newCO2Data = c_2_D2_100;
	// 			newShareData = data_2_D2_100;
	// 			newBarData = bardata_2_D2_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_2_D2_80;
	// 			newHexagonData = hexagon_layer_2_D2_80;
	// 			newCO2Data = c_2_D2_80;
	// 			newShareData = data_2_D2_80;
	// 			newBarData = bardata_2_D2_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_2_D2_60;
	// 			newHexagonData = hexagon_layer_2_D2_60;
	// 			newCO2Data = c_2_D2_60;
	// 			newShareData = data_2_D2_60;
	// 			newBarData = bardata_2_D2_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_2_D2_40;
	// 			newHexagonData = hexagon_layer_2_D2_40;
	// 			newCO2Data = c_2_D2_40;
	// 			newShareData = data_2_D2_40;
	// 			newBarData = bardata_2_D2_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_2_D3_100;
	// 			newHexagonData = hexagon_layer_2_D3_100;
	// 			newCO2Data = c_2_D3_100;
	// 			newShareData = data_2_D3_100;
	// 			newBarData = bardata_2_D3_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_2_D3_80;
	// 			newHexagonData = hexagon_layer_2_D3_80;
	// 			newCO2Data = c_2_D3_80;
	// 			newShareData = data_2_D3_80;
	// 			newBarData = bardata_2_D3_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_2_D3_60;
	// 			newHexagonData = hexagon_layer_2_D3_60;
	// 			newCO2Data = c_2_D3_60;
	// 			newShareData = data_2_D3_60;
	// 			newBarData = bardata_2_D3_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_2_D3_40;
	// 			newHexagonData = hexagon_layer_2_D3_40;
	// 			newCO2Data = c_2_D3_40;
	// 			newShareData = data_2_D3_40;
	// 			newBarData = bardata_2_D3_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_2_D4_100;
	// 			newHexagonData = hexagon_layer_2_D4_100;
	// 			newCO2Data = c_2_D4_100;
	// 			newShareData = data_2_D4_100;
	// 			newBarData = bardata_2_D4_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_2_D4_80;
	// 			newHexagonData = hexagon_layer_2_D4_80;
	// 			newCO2Data = c_2_D4_80;
	// 			newShareData = data_2_D4_80;
	// 			newBarData = bardata_2_D4_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_2_D4_60;
	// 			newHexagonData = hexagon_layer_2_D4_60;
	// 			newCO2Data = c_2_D4_60;
	// 			newShareData = data_2_D4_60;
	// 			newBarData = bardata_2_D4_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_2_D4_40;
	// 			newHexagonData = hexagon_layer_2_D4_40;
	// 			newCO2Data = c_2_D4_40;
	// 			newShareData = data_2_D4_40;
	// 			newBarData = bardata_2_D4_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_2_D5_100;
	// 			newHexagonData = hexagon_layer_2_D5_100;
	// 			newCO2Data = c_2_D5_100;
	// 			newShareData = data_2_D5_100;
	// 			newBarData = bardata_2_D5_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_2_D5_80;
	// 			newHexagonData = hexagon_layer_2_D5_80;
	// 			newCO2Data = c_2_D5_80;
	// 			newShareData = data_2_D5_80;
	// 			newBarData = bardata_2_D5_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_2_D5_60;
	// 			newHexagonData = hexagon_layer_2_D5_60;
	// 			newCO2Data = c_2_D5_60;
	// 			newShareData = data_2_D5_60;
	// 			newBarData = bardata_2_D5_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_2_D5_40;
	// 			newHexagonData = hexagon_layer_2_D5_40;
	// 			newCO2Data = c_2_D5_40;
	// 			newShareData = data_2_D5_40;
	// 			newBarData = bardata_2_D5_40;
	// 		} else {
	// 			newArcData = arc_layer_2_O1_100;
	// 			newHexagonData = hexagon_layer_2_O1_100;
	// 			newCO2Data = c_2_O1_100;
	// 			newShareData = data_2_O1_100;
	// 			newBarData = bardata_2_O1_100;
	// 		}
	// 	} else if (activeWFMIndex === 3) {
	// 		if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_3_O1_100;
	// 			newHexagonData = hexagon_layer_3_O1_100;
	// 			newCO2Data = c_3_O1_100;
	// 			newShareData = data_3_O1_100;
	// 			newBarData = bardata_3_O1_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_3_O1_80;
	// 			newHexagonData = hexagon_layer_3_O1_80;
	// 			newCO2Data = c_3_O1_80;
	// 			newShareData = data_3_O1_80;
	// 			newBarData = bardata_3_O1_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_3_O1_60;
	// 			newHexagonData = hexagon_layer_3_O1_60;
	// 			newCO2Data = c_3_O1_60;
	// 			newShareData = data_3_O1_60;
	// 			newBarData = bardata_3_O1_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_3_O1_40;
	// 			newHexagonData = hexagon_layer_3_O1_40;
	// 			newCO2Data = c_3_O1_40;
	// 			newShareData = data_3_O1_40;
	// 			newBarData = bardata_3_O1_40;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_3_O2_100;
	// 			newHexagonData = hexagon_layer_3_O2_100;
	// 			newCO2Data = c_3_O2_100;
	// 			newShareData = data_3_O2_100;
	// 			newBarData = bardata_3_O2_100;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_3_O2_80;
	// 			newHexagonData = hexagon_layer_3_O2_80;
	// 			newCO2Data = c_3_O2_80;
	// 			newShareData = data_3_O2_80;
	// 			newBarData = bardata_3_O2_80;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_3_O2_60;
	// 			newHexagonData = hexagon_layer_3_O2_60;
	// 			newCO2Data = c_3_O2_60;
	// 			newShareData = data_3_O2_60;
	// 			newBarData = bardata_3_O2_60;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_3_O2_40;
	// 			newHexagonData = hexagon_layer_3_O2_40;
	// 			newCO2Data = c_3_O2_40;
	// 			newShareData = data_3_O2_40;
	// 			newBarData = bardata_3_O2_40;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_3_O3_100;
	// 			newHexagonData = hexagon_layer_3_O3_100;
	// 			newCO2Data = c_3_O3_100;
	// 			newShareData = data_3_O3_100;
	// 			newBarData = bardata_3_O3_100;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_3_O3_80;
	// 			newHexagonData = hexagon_layer_3_O3_80;
	// 			newCO2Data = c_3_O3_80;
	// 			newShareData = data_3_O3_80;
	// 			newBarData = bardata_3_O3_80;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_3_O3_60;
	// 			newHexagonData = hexagon_layer_3_O3_60;
	// 			newCO2Data = c_3_O3_60;
	// 			newShareData = data_3_O3_60;
	// 			newBarData = bardata_3_O3_60;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_3_O3_40;
	// 			newHexagonData = hexagon_layer_3_O3_40;
	// 			newCO2Data = c_3_O3_40;
	// 			newShareData = data_3_O3_40;
	// 			newBarData = bardata_3_O3_40;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_3_O4_100;
	// 			newHexagonData = hexagon_layer_3_O4_100;
	// 			newCO2Data = c_3_O4_100;
	// 			newShareData = data_3_O4_100;
	// 			newBarData = bardata_3_O4_100;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_3_O4_80;
	// 			newHexagonData = hexagon_layer_3_O4_80;
	// 			newCO2Data = c_3_O4_80;
	// 			newShareData = data_3_O4_80;
	// 			newBarData = bardata_3_O4_80;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_3_O4_60;
	// 			newHexagonData = hexagon_layer_3_O4_60;
	// 			newCO2Data = c_3_O4_60;
	// 			newShareData = data_3_O4_60;
	// 			newBarData = bardata_3_O4_60;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_3_O4_40;
	// 			newHexagonData = hexagon_layer_3_O4_40;
	// 			newCO2Data = c_3_O4_40;
	// 			newShareData = data_3_O4_40;
	// 			newBarData = bardata_3_O4_40;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_3_O5_100;
	// 			newHexagonData = hexagon_layer_3_O5_100;
	// 			newCO2Data = c_3_O5_100;
	// 			newShareData = data_3_O5_100;
	// 			newBarData = bardata_3_O5_100;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_3_O5_80;
	// 			newHexagonData = hexagon_layer_3_O5_80;
	// 			newCO2Data = c_3_O5_80;
	// 			newShareData = data_3_O5_80;
	// 			newBarData = bardata_3_O5_80;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_3_O5_60;
	// 			newHexagonData = hexagon_layer_3_O5_60;
	// 			newCO2Data = c_3_O5_60;
	// 			newShareData = data_3_O5_60;
	// 			newBarData = bardata_3_O5_60;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_3_O5_40;
	// 			newHexagonData = hexagon_layer_3_O5_40;
	// 			newCO2Data = c_3_O5_40;
	// 			newShareData = data_3_O5_40;
	// 			newBarData = bardata_3_O5_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_3_D2_100;
	// 			newHexagonData = hexagon_layer_3_D2_100;
	// 			newCO2Data = c_3_D2_100;
	// 			newShareData = data_3_D2_100;
	// 			newBarData = bardata_3_D2_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_3_D2_80;
	// 			newHexagonData = hexagon_layer_3_D2_80;
	// 			newCO2Data = c_3_D2_80;
	// 			newShareData = data_3_D2_80;
	// 			newBarData = bardata_3_D2_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_3_D2_60;
	// 			newHexagonData = hexagon_layer_3_D2_60;
	// 			newCO2Data = c_3_D2_60;
	// 			newShareData = data_3_D2_60;
	// 			newBarData = bardata_3_D2_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_3_D2_40;
	// 			newHexagonData = hexagon_layer_3_D2_40;
	// 			newCO2Data = c_3_D2_40;
	// 			newShareData = data_3_D2_40;
	// 			newBarData = bardata_3_D2_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_3_D3_100;
	// 			newHexagonData = hexagon_layer_3_D3_100;
	// 			newCO2Data = c_3_D3_100;
	// 			newShareData = data_3_D3_100;
	// 			newBarData = bardata_3_D3_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_3_D3_80;
	// 			newHexagonData = hexagon_layer_3_D3_80;
	// 			newCO2Data = c_3_D3_80;
	// 			newShareData = data_3_D3_80;
	// 			newBarData = bardata_3_D3_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_3_D3_60;
	// 			newHexagonData = hexagon_layer_3_D3_60;
	// 			newCO2Data = c_3_D3_60;
	// 			newShareData = data_3_D3_60;
	// 			newBarData = bardata_3_D3_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_3_D3_40;
	// 			newHexagonData = hexagon_layer_3_D3_40;
	// 			newCO2Data = c_3_D3_40;
	// 			newShareData = data_3_D3_40;
	// 			newBarData = bardata_3_D3_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_3_D4_100;
	// 			newHexagonData = hexagon_layer_3_D4_100;
	// 			newCO2Data = c_3_D4_100;
	// 			newShareData = data_3_D4_100;
	// 			newBarData = bardata_3_D4_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_3_D4_80;
	// 			newHexagonData = hexagon_layer_3_D4_80;
	// 			newCO2Data = c_3_D4_80;
	// 			newShareData = data_3_D4_80;
	// 			newBarData = bardata_3_D4_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_3_D4_60;
	// 			newHexagonData = hexagon_layer_3_D4_60;
	// 			newCO2Data = c_3_D4_60;
	// 			newShareData = data_3_D4_60;
	// 			newBarData = bardata_3_D4_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_3_D4_40;
	// 			newHexagonData = hexagon_layer_3_D4_40;
	// 			newCO2Data = c_3_D4_40;
	// 			newShareData = data_3_D4_40;
	// 			newBarData = bardata_3_D4_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_3_D5_100;
	// 			newHexagonData = hexagon_layer_3_D5_100;
	// 			newCO2Data = c_3_D5_100;
	// 			newShareData = data_3_D5_100;
	// 			newBarData = bardata_3_D5_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_3_D5_80;
	// 			newHexagonData = hexagon_layer_3_D5_80;
	// 			newCO2Data = c_3_D5_80;
	// 			newShareData = data_3_D5_80;
	// 			newBarData = bardata_3_D5_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_3_D5_60;
	// 			newHexagonData = hexagon_layer_3_D5_60;
	// 			newCO2Data = c_3_D5_60;
	// 			newShareData = data_3_D5_60;
	// 			newBarData = bardata_3_D5_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_3_D5_40;
	// 			newHexagonData = hexagon_layer_3_D5_40;
	// 			newCO2Data = c_3_D5_40;
	// 			newShareData = data_3_D5_40;
	// 			newBarData = bardata_3_D5_40;
	// 		} else {
	// 			newArcData = arc_layer_3_O1_100;
	// 			newHexagonData = hexagon_layer_3_O1_100;
	// 			newCO2Data = c_3_O1_100;
	// 			newShareData = data_3_O1_100;
	// 			newBarData = bardata_3_O1_100;
	// 		}
	// 	} else if (activeWFMIndex === 4) {
	// 		if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_4_O1_100;
	// 			newHexagonData = hexagon_layer_4_O1_100;
	// 			newCO2Data = c_4_O1_100;
	// 			newShareData = data_4_O1_100;
	// 			newBarData = bardata_4_O1_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_4_O1_80;
	// 			newHexagonData = hexagon_layer_4_O1_80;
	// 			newCO2Data = c_4_O1_80;
	// 			newShareData = data_4_O1_80;
	// 			newBarData = bardata_4_O1_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_4_O1_60;
	// 			newHexagonData = hexagon_layer_4_O1_60;
	// 			newCO2Data = c_4_O1_60;
	// 			newShareData = data_4_O1_60;
	// 			newBarData = bardata_4_O1_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_4_O1_40;
	// 			newHexagonData = hexagon_layer_4_O1_40;
	// 			newCO2Data = c_4_O1_40;
	// 			newShareData = data_4_O1_40;
	// 			newBarData = bardata_4_O1_40;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_4_O2_100;
	// 			newHexagonData = hexagon_layer_4_O2_100;
	// 			newCO2Data = c_4_O2_100;
	// 			newShareData = data_4_O2_100;
	// 			newBarData = bardata_4_O2_100;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_4_O2_80;
	// 			newHexagonData = hexagon_layer_4_O2_80;
	// 			newCO2Data = c_4_O2_80;
	// 			newShareData = data_4_O2_80;
	// 			newBarData = bardata_4_O2_80;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_4_O2_60;
	// 			newHexagonData = hexagon_layer_4_O2_60;
	// 			newCO2Data = c_4_O2_60;
	// 			newShareData = data_4_O2_60;
	// 			newBarData = bardata_4_O2_60;
	// 		} else if (firstSliderValue === '2' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_4_O2_40;
	// 			newHexagonData = hexagon_layer_4_O2_40;
	// 			newCO2Data = c_4_O2_40;
	// 			newShareData = data_4_O2_40;
	// 			newBarData = bardata_4_O2_40;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_4_O3_100;
	// 			newHexagonData = hexagon_layer_4_O3_100;
	// 			newCO2Data = c_4_O3_100;
	// 			newShareData = data_4_O3_100;
	// 			newBarData = bardata_4_O3_100;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_4_O3_80;
	// 			newHexagonData = hexagon_layer_4_O3_80;
	// 			newCO2Data = c_4_O3_80;
	// 			newShareData = data_4_O3_80;
	// 			newBarData = bardata_4_O3_80;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_4_O3_60;
	// 			newHexagonData = hexagon_layer_4_O3_60;
	// 			newCO2Data = c_4_O3_60;
	// 			newShareData = data_4_O3_60;
	// 			newBarData = bardata_4_O3_60;
	// 		} else if (firstSliderValue === '3' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_4_O3_40;
	// 			newHexagonData = hexagon_layer_4_O3_40;
	// 			newCO2Data = c_4_O3_40;
	// 			newShareData = data_4_O3_40;
	// 			newBarData = bardata_4_O3_40;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_4_O4_100;
	// 			newHexagonData = hexagon_layer_4_O4_100;
	// 			newCO2Data = c_4_O4_100;
	// 			newShareData = data_4_O4_100;
	// 			newBarData = bardata_4_O4_100;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_4_O4_80;
	// 			newHexagonData = hexagon_layer_4_O4_80;
	// 			newCO2Data = c_4_O4_80;
	// 			newShareData = data_4_O4_80;
	// 			newBarData = bardata_4_O4_80;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_4_O4_60;
	// 			newHexagonData = hexagon_layer_4_O4_60;
	// 			newCO2Data = c_4_O4_60;
	// 			newShareData = data_4_O4_60;
	// 			newBarData = bardata_4_O4_60;
	// 		} else if (firstSliderValue === '4' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_4_O4_40;
	// 			newHexagonData = hexagon_layer_4_O4_40;
	// 			newCO2Data = c_4_O4_40;
	// 			newShareData = data_4_O4_40;
	// 			newBarData = bardata_4_O4_40;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_4_O5_100;
	// 			newHexagonData = hexagon_layer_4_O5_100;
	// 			newCO2Data = c_4_O5_100;
	// 			newShareData = data_4_O5_100;
	// 			newBarData = bardata_4_O5_100;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_4_O5_80;
	// 			newHexagonData = hexagon_layer_4_O5_80;
	// 			newCO2Data = c_4_O5_80;
	// 			newShareData = data_4_O5_80;
	// 			newBarData = bardata_4_O5_80;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_4_O5_60;
	// 			newHexagonData = hexagon_layer_4_O5_60;
	// 			newCO2Data = c_4_O5_60;
	// 			newShareData = data_4_O5_60;
	// 			newBarData = bardata_4_O5_60;
	// 		} else if (firstSliderValue === '5' && secondSliderValue === '5' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_4_O5_40;
	// 			newHexagonData = hexagon_layer_4_O5_40;
	// 			newCO2Data = c_4_O5_40;
	// 			newShareData = data_4_O5_40;
	// 			newBarData = bardata_4_O5_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_4_D2_100;
	// 			newHexagonData = hexagon_layer_4_D2_100;
	// 			newCO2Data = c_4_D2_100;
	// 			newShareData = data_4_D2_100;
	// 			newBarData = bardata_4_D2_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_4_D2_80;
	// 			newHexagonData = hexagon_layer_4_D2_80;
	// 			newCO2Data = c_4_D2_80;
	// 			newShareData = data_4_D2_80;
	// 			newBarData = bardata_4_D2_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_4_D2_60;
	// 			newHexagonData = hexagon_layer_4_D2_60;
	// 			newCO2Data = c_4_D2_60;
	// 			newShareData = data_4_D2_60;
	// 			newBarData = bardata_4_D2_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '4' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_4_D2_40;
	// 			newHexagonData = hexagon_layer_4_D2_40;
	// 			newCO2Data = c_4_D2_40;
	// 			newShareData = data_4_D2_40;
	// 			newBarData = bardata_4_D2_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_4_D3_100;
	// 			newHexagonData = hexagon_layer_4_D3_100;
	// 			newCO2Data = c_4_D3_100;
	// 			newShareData = data_4_D3_100;
	// 			newBarData = bardata_4_D3_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_4_D3_80;
	// 			newHexagonData = hexagon_layer_4_D3_80;
	// 			newCO2Data = c_4_D3_80;
	// 			newShareData = data_4_D3_80;
	// 			newBarData = bardata_4_D3_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_4_D3_60;
	// 			newHexagonData = hexagon_layer_4_D3_60;
	// 			newCO2Data = c_4_D3_60;
	// 			newShareData = data_4_D3_60;
	// 			newBarData = bardata_4_D3_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '3' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_4_D3_40;
	// 			newHexagonData = hexagon_layer_4_D3_40;
	// 			newCO2Data = c_4_D3_40;
	// 			newShareData = data_4_D3_40;
	// 			newBarData = bardata_4_D3_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_4_D4_100;
	// 			newHexagonData = hexagon_layer_4_D4_100;
	// 			newCO2Data = c_4_D4_100;
	// 			newShareData = data_4_D4_100;
	// 			newBarData = bardata_4_D4_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_4_D4_80;
	// 			newHexagonData = hexagon_layer_4_D4_80;
	// 			newCO2Data = c_4_D4_80;
	// 			newShareData = data_4_D4_80;
	// 			newBarData = bardata_4_D4_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_4_D4_60;
	// 			newHexagonData = hexagon_layer_4_D4_60;
	// 			newCO2Data = c_4_D4_60;
	// 			newShareData = data_4_D4_60;
	// 			newBarData = bardata_4_D4_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '2' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_4_D4_40;
	// 			newHexagonData = hexagon_layer_4_D4_40;
	// 			newCO2Data = c_4_D4_40;
	// 			newShareData = data_4_D4_40;
	// 			newBarData = bardata_4_D4_40;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '1') {
	// 			newArcData = arc_layer_4_D5_100;
	// 			newHexagonData = hexagon_layer_4_D5_100;
	// 			newCO2Data = c_4_D5_100;
	// 			newShareData = data_4_D5_100;
	// 			newBarData = bardata_4_D5_100;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '2') {
	// 			newArcData = arc_layer_4_D5_80;
	// 			newHexagonData = hexagon_layer_4_D5_80;
	// 			newCO2Data = c_4_D5_80;
	// 			newShareData = data_4_D5_80;
	// 			newBarData = bardata_4_D5_80;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '3') {
	// 			newArcData = arc_layer_4_D5_60;
	// 			newHexagonData = hexagon_layer_4_D5_60;
	// 			newCO2Data = c_4_D5_60;
	// 			newShareData = data_4_D5_60;
	// 			newBarData = bardata_4_D5_60;
	// 		} else if (firstSliderValue === '1' && secondSliderValue === '1' && brtSliderValue === '4') {
	// 			newArcData = arc_layer_4_D5_40;
	// 			newHexagonData = hexagon_layer_4_D5_40;
	// 			newCO2Data = c_4_D5_40;
	// 			newShareData = data_4_D5_40;
	// 			newBarData = bardata_4_D5_40;
	// 		} else {
	// 			newArcData = arc_layer_4_O1_100;
	// 			newHexagonData = hexagon_layer_4_O1_100;
	// 			newCO2Data = c_4_O1_100;
	// 			newShareData = data_4_O1_100;
	// 			newBarData = bardata_4_O1_100;
	// 		}
	// 	}
	// 	this.setState({ 
	// 		currentArcData: newArcData,
	// 		currentHexagonData: newHexagonData,
	// 		dataForCO2: newCO2Data,
	// 		dataForShare: newShareData,
	// 		dataForBar: newBarData, });
	// }
	
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
			getColor: [255, 255, 0], // d => (d.vendor === 0 ? [253, 128, 93] : [23, 184, 190]), //[50, 255, 255], [23, 184, 190]n
			// getColor: this.state.currentTripsColor,
			opacity: 0.9,
			strokeWidth: 5,
			lineWidthScale: 5,
			// trailLength: this.state.trailLength*this.state.loopLength/100,
			trailLength: 300,
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
						return [255, 30, 30];
					case 2:
						return [33, 197, 255];
					case 3:
						return [115, 211, 126];
					default:
						return [200, 200, 200];
				}
			},
			getTargetColor: d => {
				switch (d.inbound) {
					case 1:
						return [255, 30, 30];
					case 2:
						return [33, 197, 255];
					case 3:
						return [115, 211, 126];
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

