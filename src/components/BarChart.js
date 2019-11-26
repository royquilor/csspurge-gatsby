import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Text,
} from 'recharts';

import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: var(--sans-serif);
  font-size: var(--f7);
  max-width: 48rem;
  max-width: 58.5rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--space-xxl);
`;

const colorsList = ['#e53935', '#6db65b', '#4aae9b', '#dfa612'];

class ExampleChart extends PureComponent {
  render() {
    return (
      <Wrapper style={{ width: '100%', height: 800 }}>
        <ResponsiveContainer>

          <BarChart
            textWidth={200}
            data={this.props.data}
            layout="vertical"
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
            <XAxis type="number"  />
            <YAxis type="category" dataKey="name" width={150} />
            <Tooltip />
            {this.props.bars.map((bar, i) => (
              <Bar
                dataKey={bar}
                fill={colorsList[i]}
                key={`bar_${i}`}
              />
            ))}
          </BarChart>

        </ResponsiveContainer>
      </Wrapper>
    );
  }
}

export default ExampleChart;
