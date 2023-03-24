import React from 'react';
import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  AreaChart,
  CartesianGrid,
  Area,
  ResponsiveContainer,
} from 'recharts';

interface Props {
  data: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }[];
  xAxisDataKey: string;
  yAxisDataKey: string;
  barFill: string;
  background: string;
  className?: any;
}

const AreaChartComp: React.FC<Props> = ({
  data,
  xAxisDataKey,
  yAxisDataKey,
  barFill,
  background,
  className,
  ...rest
}) => {
  return (
    <ResponsiveContainer height={400}>
      <AreaChart data={data} {...rest}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey={xAxisDataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="uv" stroke={barFill} fill={'#8884d8'} gradientTransform='yellow' />
        <Bar dataKey={yAxisDataKey} fill={barFill} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComp;
