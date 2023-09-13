import React, { useState } from "react";
import styles from "./Course.module.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { courseList } from "../../assets/courseList";

const Course = () => {
  const [courseData, setCourseData] = useState(courseList);

  const handleSearch = (val) => {
    if(val=="" || val == undefined || val == null){
      setCourseData(courseList);
    }
    else{

      let searchedResult = courseData.filter((el, i) => {
        return (
          el.Name.includes(val) ||
          el.Description.includes(val) ||
        el.Instructor.includes(val) ||
        el.Instrument.includes(val) ||
        el.Day_of_Week.includes(val) ||
        el._of_Students.includes(val) ||
        el.Price.includes(val) ||
        el.Status.includes(val) ||
        el.Actions.includes(val)
        );
      });
    setCourseData(searchedResult)
  }
  };
  return (
    <div className={styles.mainContainer}>
      <Sidebar />
      <div className={styles.contentContainer}>
        <div className={styles.heading}>Courses</div>
        <div className={styles.subHeadingContainer}>
          <div className={styles.subHeading}>Courses List</div>
          <div>
            <input
            onChange={(e)=>handleSearch(e.target.value)}
              className={styles.input}
              type="text"
              placeholder="Search here"
            />
          </div>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.row}>
                <th className={styles.td}>Name</th>
                <th className={styles.td}>Description</th>
                <th className={styles.td}>Instructor</th>
                <th className={styles.td}>Instrument</th>
                <th className={styles.td}>Day_of_Week</th>
                <th className={styles.td}>#_of_Students</th>
                <th className={styles.td}>Price</th>
                <th className={styles.td}>Status</th>
                <th className={styles.td}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courseData.map((el, index) => (
                <tr key={index} className={styles.rows}>
                  <td className={styles.td}>{el.Name}</td>
                  <td className={styles.td}>{el.Description}</td>
                  <td className={styles.td}>{el.Instructor}</td>
                  <td className={styles.td}>{el.Instrument}</td>
                  <td className={styles.td}>{el.Day_of_Week}</td>
                  <td className={styles.td}>{el._of_Students}</td>
                  <td className={styles.td}>{el.Price}</td>
                  <td className={styles.td}>{el.Status}</td>
                  <td className={styles.td}>{el.Actions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Course;
