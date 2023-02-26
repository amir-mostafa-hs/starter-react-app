import { useState, useEffect } from "react";
import CourseList from "./CourseList";
// import coursesData from "./data";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getAllCourseDataApi } from "../API/courseApi";

const CoursePage = () => {
  const navigate = useNavigate();
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    getAllCourseDataApi().then((data) => setCoursesData(data));
  }, []);
  return (
    <>
      <h1>this is CoursePage</h1>
      <Button variant="success" onClick={() => navigate("/create-course")}>
        Create Course
      </Button>
      <CourseList coursesData={coursesData} />
    </>
  );
};

export default CoursePage;
