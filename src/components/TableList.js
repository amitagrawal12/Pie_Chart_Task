import React from "react";
import { JsonData } from "../common/JsonData";
import HeaderTitle from '../common/HeaderTitle';
import ViewTable from "../common/ViewTable";

const TableList = () => {

  return (
    <>
      <HeaderTitle title={'Responsive Data List Summary'} />
      <ViewTable tdata={JsonData} />
    </>
  );
};

export default TableList;
