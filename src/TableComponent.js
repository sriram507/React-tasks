import React from "react";

const TableComponent = () => {
  const data = [
    { name: "John", age: 25, country: "USA" },
    { name: "Sara", age: 30, country: "UK" },
    { name: "Mike", age: 28, country: "Canada" },
  ];

  return (
    <table border="1" cellPadding="10" style={{ margin: "20px auto", textAlign: "center" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
