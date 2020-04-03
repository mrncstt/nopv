import React from 'react';
import { Link } from 'react-router-dom';
import Chart from "react-apexcharts";

import '../../styles/styles.css'

class DirectTreasure extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      chart01: {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009]
          }
        },
        series: [
          {
            name: "series-1",
            data: [3, 10, 45, 50, 49, 60, 70, 81, 93, 95]
          },
          {
            name: "series-2",
            data: [2, 13, 15, 30, 59, 30, 50, 92, 91, 97]
          }
        ]
      },
      chart02: {
        options: {
          chart: {
            id: 'line',
          },
          xaxis: {
            categories: [1980, 1990, 2000, 2010, 2020, 2030, 2040, 2050],
          },
        },
        series: [
          {
            data: [10.4, 20, 20.5, 10.5, 20.5, 20.8, 30.8, 40.6],
          },
          {
            data: [20, 29, 37, 36, 44, 45, 50, 58],
          },
        ],
        yaxis: [
          {
            title: {
              text: 'Series A',
            },
          },
          {
            opposite: true,
            title: {
              text: 'Series B',
            },
          },
        ],
      }
  }
}

  render() {

  return (
    <div className="main-content">

      <div><Link className="back" to="/">Back</Link></div>
      
      <h2>Month Chart Static</h2>
      <div className="container">
        <div className="mixed-chart">
          <Chart
            options={this.state.chart01.options}
            series={this.state.chart01.series}
            type="line"
            width="100%"
          />
        </div>
      </div>

      <h2>Month Chart Dynamic</h2>
      <div className="container">
        <div className="mixed-chart">
          <Chart
            options={this.state.chart02.options}
            series={this.state.chart02.series}
            type="line"
          />
        </div>
      </div>

      <div><Link className="back" to="/">Back</Link></div>
      
    </div>
  );

  }
}

export default DirectTreasure;