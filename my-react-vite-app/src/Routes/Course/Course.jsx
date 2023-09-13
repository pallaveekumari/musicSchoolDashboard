import React from 'react';

const Course = () => {
  
  const courseList = [
    { Name: 'Classical Guitar', Description: 'Classical Guitar For...', Instructor: 'Ms. jane Doe', Instrument: 'Guitar', Day_of_Week: 'Wednesday', _of_Students:'26', Price:'$60', Status: 'Active',Actions:':'},
    { Name: 'Classical Guitar', Description: 'Classical Guitar For...', Instructor: 'Ms. jane Doe', Instrument: 'Guitar', Day_of_Week: 'Wednesday', _of_Students:'26', Price:'$60', Status: 'Active',Actions:':'},
    { Name: 'Classical Guitar', Description: 'Classical Guitar For...', Instructor: 'Ms. jane Doe', Instrument: 'Guitar', Day_of_Week: 'Wednesday', _of_Students:'26', Price:'$60', Status: 'Active',Actions:':'},
    { Name: 'Classical Guitar', Description: 'Classical Guitar For...', Instructor: 'Ms. jane Doe', Instrument: 'Guitar', Day_of_Week: 'Wednesday', _of_Students:'26', Price:'$60', Status: 'Active',Actions:':'},
    { Name: 'Classical Guitar', Description: 'Classical Guitar For...', Instructor: 'Ms. jane Doe', Instrument: 'Guitar', Day_of_Week: 'Wednesday', _of_Students:'26', Price:'$60', Status: 'Active',Actions:':'},
    { Name: 'Classical Guitar', Description: 'Classical Guitar For...', Instructor: 'Ms. jane Doe', Instrument: 'Guitar', Day_of_Week: 'Wednesday', _of_Students:'26', Price:'$60', Status: 'Active',Actions:':'},
    { Name: 'Classical Guitar', Description: 'Classical Guitar For...', Instructor: 'Ms. jane Doe', Instrument: 'Guitar', Day_of_Week: 'Wednesday', _of_Students:'26', Price:'$60', Status: 'Active',Actions:':'},
    { Name: 'Classical Guitar', Description: 'Classical Guitar For...', Instructor: 'Ms. jane Doe', Instrument: 'Guitar', Day_of_Week: 'Wednesday', _of_Students:'26', Price:'$60', Status: 'Active',Actions:':'},
    { Name: 'Classical Guitar', Description: 'Classical Guitar For...', Instructor: 'Ms. jane Doe', Instrument: 'Guitar', Day_of_Week: 'Wednesday', _of_Students:'26', Price:'$60', Status: 'Active',Actions:':'},
    { Name: 'Classical Guitar', Description: 'Classical Guitar For...', Instructor: 'Ms. jane Doe', Instrument: 'Guitar', Day_of_Week: 'Wednesday', _of_Students:'26', Price:'$60', Status: 'Active',Actions:':'},
    { Name: 'Classical Guitar', Description: 'Classical Guitar For...', Instructor: 'Ms. jane Doe', Instrument: 'Guitar', Day_of_Week: 'Wednesday', _of_Students:'26', Price:'$60', Status: 'Active',Actions:':'},
    { Name: 'Classical Guitar', Description: 'Classical Guitar For...', Instructor: 'Ms. jane Doe', Instrument: 'Guitar', Day_of_Week: 'Wednesday', _of_Students:'26', Price:'$60', Status: 'Active',Actions:':'},

  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Instructor</th>
            <th>Instrument</th>
            <th>Day_of_Week</th>
            <th>#_of_Students</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courseList.map((el, index) => (
            <tr key={index}>
              <td>{el.Name}</td>
              <td>{el.Description}</td>
              <td>{el.Instructor}</td>
              <td>{el.Instrument}</td>
              <td>{el.Day_of_Week}</td>
              <td>{el._of_Students}</td>
              <td>{el.Price}</td>
              <td>{el.Status}</td>
              <td>{el.Actions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Course;
