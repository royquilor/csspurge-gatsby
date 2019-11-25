import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class StackedBarChart extends PureComponent {
  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={this.props.data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {this.props.bars.map((bar, i) => (
        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
        ))}
        {this.props.bars.map((bar, i) => (
        <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        ))}
      </BarChart>
    );
  }
}

export default StackedBarChart;
