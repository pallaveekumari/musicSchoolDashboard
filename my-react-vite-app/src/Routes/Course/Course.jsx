import React from 'react';

const Course = () => {
  
  const data = [
    { enrollmentNumber: '001', studentName: 'John Doe', courseName: 'Mathematics', fees: '$500', enrollmentDate: '2023-09-13' },
    { enrollmentNumber: '002', studentName: 'Jane Smith', courseName: 'Physics', fees: '$450', enrollmentDate: '2023-09-14' },
    
  ];

  return (
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
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.enrollmentNumber}</td>
              <td>{item.studentName}</td>
              <td>{item.courseName}</td>
              <td>{item.fees}</td>
              <td>{item.enrollmentDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Course;
