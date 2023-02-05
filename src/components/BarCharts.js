import React from "react";
import { BarChart } from "recharts";
import { JsonData } from "../common/JsonData";
import CustomTooltip from "../common/CustomTooltip";
import HeaderTitle from "../common/HeaderTitle";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
} from "recharts";
import '../styles/BarCharts.css'

const BarCharts = () => {
  return (
    <>
      <HeaderTitle title={'Bar Chart Based on Results'} />
      <div className="barStyle">
        <BarChart
          className="recharts-surface"
          width={1000}
          height={500}
          data={JsonData}
          barGap={10}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" interval={0} angle={-18} dx={-20} />
          <YAxis tickCount={110} type="number" domain={[0, "dataMax + 20"]} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="name" fill="grey" barSize={30} />
          <Bar dataKey="result" fill="green" barSize={30} />
        </BarChart>
      </div>
      <div className="legendStyle">
        <span className="nameStyle"></span>
        <p className="legendName">Name</p>
        <span className="resultStyle"></span>
        <p className="legendResult">Result</p>
      </div>
    </>
  );
};

export default BarCharts;
