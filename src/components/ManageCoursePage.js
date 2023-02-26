import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

import { getOneCourseDataApi, upDateCourseApi } from "../API/courseApi";
const ManageCoursePage = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // const { title, slug, authorId, category } = location.state;

  const [formData, setFormData] = useState({
    title: "",
    authorId: "",
    category: "",
    slug: "",
  });

  useEffect(() => {
    getOneCourseDataApi(location.state._id).then((data) => {
      const { authorId, category, slug, title } = data;
      setFormData({
        title,
        authorId,
        category,
        slug,
      });
    });
  }, [location.state._id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    upDateCourseApi(location.state._id, formData);

    setFormData({
      title: "",
      authorId: "",
      category: "",
      slug: "",
    });
    navigate("/course");
  };

  return (
    <>
      <h1>this is ManageCoursePage</h1>
      <h3>details of course with {params.slug} slug</h3>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Course Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAuthorId">
          <Form.Label>Author Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Course Author Id"
            value={formData.authorId}
            onChange={(e) => setFormData({ ...formData, authorId: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Course Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSlug">
          <Form.Label>Slug</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Course Slug"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ManageCoursePage;
