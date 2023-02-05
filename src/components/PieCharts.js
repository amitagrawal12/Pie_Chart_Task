import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import HeaderTitle from "../common/HeaderTitle";
import { JsonData } from "../common/JsonData";
import '../styles/PieCharts.scss'

const PieCharts = () => {

  let trueFilterData = JsonData?.filter((val) => val.status === true);
  let falseFilterData = JsonData?.filter((val) => val.status === false);
  let resultData = [
    { length: trueFilterData.length, data: trueFilterData },
    { length: falseFilterData.length, data: falseFilterData },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div>
          <div className="ant-popover-arrow" />
          {payload[0]?.payload?.data?.map((val) => (
            <div className="customTooltip">
              <span className="tooltipLabel">{`Id:${val.id}, Name: ${val.name}, Status: ${val.status}`}</span>
            </div>
          ))}
        </div>
      );
    }
  };

  const COLORS = [ "green", "orange"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <>
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      </>
    );
  };

  return (
    <>
    <HeaderTitle title={'Pie Chart Based On Status'} />
    <PieChart width={800} height={800}  margin={{ left: 800 , bottom:300}}>
      <Pie
        data={resultData}
        cx="50%"
        cy="50%"
        outerRadius={200}
        fill="#8884d8"
        dataKey="length"
        label={renderCustomizedLabel}
      >
        {resultData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
    </PieChart>
    <div className="legendStylePie">
        <span className="nameStylePie"></span>
        <p className="legendNamePie">True</p>
        <span className="resultStylePie"></span>
        <p className="legendResultPie">False</p>
      </div>
    </>
  );
};

export default PieCharts;
