import React from 'react';
import '../styles/TableList.css';

const ViewTable = ({ tdata }) => {
  return (
    <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date</th>
            <th scope="col">Result</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {tdata && tdata?.map((el, index) => {
            return (
              <tr key={index}>
                <td data-label="ID">{el.id}</td>
                <td data-label="Name">{el.name}</td>
                <td data-label="Email">{el.email}</td>
                <td data-label="Phone">{el.phone}</td>
                <td data-label="Date">{el.date}</td>
                <td data-label="Result">{el.result}</td>
                <td data-label="Status">{el.status.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
  )
}

export default ViewTable;