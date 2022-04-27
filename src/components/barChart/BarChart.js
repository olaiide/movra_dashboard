import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Text,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "0",
    "TASK COMPLETED": 93,
    "NUMBER OF VISITS": 75,
    "SOME OTHER DATA": 73,
    amt: 2400,
  },
  {
    name: "1",
    "TASK COMPLETED": 66,
    "NUMBER OF VISITS": 27,
    "SOME OTHER DATA": 50,
    amt: 2210,
  },
  {
    name: "2",
    "TASK COMPLETED": 78,
    "NUMBER OF VISITS": 52,
    "SOME OTHER DATA": 67,
    amt: 2290,
  },
  {
    name: "3",
    "TASK COMPLETED": 25,
    "NUMBER OF VISITS": 75,
    "SOME OTHER DATA": 15,
  },
];

export default function App() {
  return (
    <ResponsiveContainer width='100%' height='97%'>
      {/* <Text>CHART VIEW</Text> */}
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 80,
          left: 20,
          right: 60,
        }}
      >
        <CartesianGrid strokeDasharray='' />

        <XAxis dataKey='name' />
        <YAxis />

        {/* <Tooltip /> */}
        <Legend layout='vertical' verticalAlign='bottom' />
        <Bar dataKey='TASK COMPLETED' fill='#848884' />
        <Bar dataKey='NUMBER OF VISITS' fill='#D3D3D3' />
        <Bar dataKey='SOME OTHER DATA' fill='black' />
      </BarChart>
    </ResponsiveContainer>
  );
}
