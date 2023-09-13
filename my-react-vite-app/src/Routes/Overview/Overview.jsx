import React from 'react';

const Overview = () => {
  
  const latestEnrolments = [
    { enrollmentNumber: '1563124', studentName: 'John Doe', courseName: 'Percussion', fees: '$120', enrollmentDate: '12-08-223' },
    { enrollmentNumber: 'column', studentName: 'column', courseName: 'column', fees: 'column', enrollmentDate: 'column' },
    { enrollmentNumber: 'column', studentName: 'column', courseName: 'column', fees: 'column', enrollmentDate: 'column' },
    { enrollmentNumber: 'column', studentName: 'column', courseName: 'column', fees: 'column', enrollmentDate: 'column' },
    { enrollmentNumber: 'column', studentName: 'column', courseName: 'column', fees: 'column', enrollmentDate: 'column' },
    { enrollmentNumber: 'column', studentName: 'column', courseName: 'column', fees: 'column', enrollmentDate: 'column' },

  ];


  const bestStudents=[
    {registeredNumber:'43422', firstName:'john', lastName:'Doe', Course:'3', totalFees:'$300', registeredDate:'01-6-2023'},
    {registeredNumber:'column', firstName:'john', lastName:'Doe', Course:'3', totalFees:'$300', registeredDate:'01-6-2023'},

    {registeredNumber:'43422', firstName:'john', lastName:'Doe', Course:'3', totalFees:'$300', registeredDate:'01-6-2023'},

    {registeredNumber:'43422', firstName:'john', lastName:'Doe', Course:'3', totalFees:'$300', registeredDate:'01-6-2023'},

    {registeredNumber:'43422', firstName:'john', lastName:'Doe', Course:'3', totalFees:'$300', registeredDate:'01-6-2023'},

    {registeredNumber:'43422', firstName:'john', lastName:'Doe', Course:'3', totalFees:'$300', registeredDate:'01-6-2023'},

  ]
  return (
    <>
    <div>
      <table>
        <thead>
          <tr>
            <th>Enr. No</th>
            <th>S.Name</th>
            <th>C.Name</th>
            <th>Fees</th>
            <th>Enr. Date</th>
          </tr>
        </thead>
        <tbody>
          {latestEnrolments.map((el, index) => (
            <tr key={index}>
              <td>{el.enrollmentNumber}</td>
              <td>{el.studentName}</td>
              <td>{el.courseName}</td>
              <td>{el.fees}</td>
              <td>{el.enrollmentDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>




<div>
<table>
  <thead>
    <tr>
      <th>Reg. No</th>
      <th>F.Name</th>
      <th>L.Name</th>
      <th>Course#</th>
      <th>Total Fees</th>
      <th>Reg. Date</th>
    </tr>
  </thead>
  <tbody>
    {bestStudents.map((el, index) => (
      <tr key={index}>
        <td>{el.registeredNumber}</td>
        <td>{el.firstName}</td>
        <td>{el.lastName}</td>
        <td>{el.Course}</td>
        <td>{el.totalFees}</td>
        <td>{el.registeredDate}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>
</>
  );
};

export default Overview;
