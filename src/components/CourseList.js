import { Table, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { DeleteCourseApi } from "../API/courseApi";

const CourseList = ({ coursesData }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    await DeleteCourseApi(id);
    navigate(0);
  };
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author Id</th>
            <th>Category</th>
            <th colSpan={2}>Slug</th>
          </tr>
        </thead>
        <tbody>
          {coursesData?.map((course) => {
            const { _id, title, slug, authorId, category } = course;
            return (
              <tr key={_id}>
                <td>
                  <Link to={`/course/${slug}`} state={course}>
                    {title}
                  </Link>
                </td>
                <td>{authorId}</td>
                <td>{category}</td>
                <td>{slug}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(_id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default CourseList;
