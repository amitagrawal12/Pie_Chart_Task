import React from "react";
const CustomTooltip = ({ active, payload, index }) => {
  const style = {
    color: "white",
  };
  if (active && payload && payload.length) {
    return (
      <>
        <div style={{ background: "gray", opacity: "0.8" }} key={index}>
          <p style={style}>{`${"Id"} : ${payload[1]?.payload.id}`}</p>
          <p style={style}>{`${"Name"} : ${payload[1]?.payload.name}`}</p>
          <p style={style}>{`${"Email"} : ${payload[1]?.payload.email}`}</p>
          <p style={style}>{`${"Phone"} : ${payload[1]?.payload.phone}`}</p>
          <p style={style}>{`${"Date"} : ${payload[1]?.payload.date}`}</p>
          <p style={style}>{`${"Status"} : ${payload[1]?.payload.status}`}</p>
          <p style={style}>{`${"Result"} : ${payload[1]?.payload.result}`}</p>
        </div>
      </>
    );
  }
  return null;
};

export default CustomTooltip;
