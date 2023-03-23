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

const BarChart: React.FC<Props> = ({
  data,
  xAxisDataKey,
  yAxisDataKey,
  barFill,
  background,
  className,
  ...rest
}) => {
  return (
    <ResponsiveContainer width={500} height={400}>
      <AreaChart width={600} height={400} data={data} {...rest}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey={xAxisDataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="uv" stroke={barFill} fill={background} />
        <Bar dataKey={yAxisDataKey} fill={barFill} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
