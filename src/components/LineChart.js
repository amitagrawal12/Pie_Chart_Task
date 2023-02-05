import React from "react";
import { JsonData } from "../common/JsonData";
import CustomTooltip from "../common/CustomTooltip";
import HeaderTitle from "../common/HeaderTitle";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import '../styles/LineCharts.css'

const LineCharts = () => {
  return (
    <>
      <HeaderTitle title={'Line Chart Based on Results'} />
      <LineChart
        width={1200}
        height={500}
        data={JsonData}
        margin={{ left: 250, bottom: 50 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={0} angle={-25} dx={-20} />
        <YAxis tickCount={110} type="number" domain={[0, "dataMax + 20"]} />
        <Tooltip content={<CustomTooltip />} />
        <Line dataKey="name" fill="green" />
        <Line type="monotone" dataKey="result" fill="green" />
      </LineChart>
      <div className="legendStyleLine">
        <span className="nameStyle"></span>
        <p className="legendName">Name</p>
        <span className="resultStyle"></span>
        <p className="legendResult">Result</p>
      </div>
    </>
  );
};

export default LineCharts;
