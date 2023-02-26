import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const AboutPage = () => {
  const navigate = useNavigate();
  const [showPage, setShowPage] = useState(false);
  const [inputsData, setInputsData] = useState({ email: "", description: "" });
  const [formSubmit, setFormSubmit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmit(inputsData.description);
    setInputsData({ ...inputsData, description: "" });
  };

  return (
    <>
      <h1>this is AboutPage</h1>
      <Link to="/">go to HomePage</Link>
      <br />
      <Button
        variant="info"
        onClick={() => {
          if (!showPage) {
            navigate("community");
            setShowPage(true);
          } else {
            navigate("/about");
            setShowPage(false);
          }
        }}
      >
        Community
      </Button>
      <br />
      <Outlet />
      <br />

      <form onSubmit={handleSubmit}>
        <label htmlFor="inputEmail">Email:</label>
        <input
          type={"text"}
          name="inputEmail"
          id="inputEmail"
          value={inputsData.email}
          onChange={(e) => setInputsData({ ...inputsData, email: e.target.value })}
        />
        <label htmlFor="inputDescription">Description:</label>
        <input
          type={"text"}
          name="inputDescription"
          id="inputDescription"
          value={inputsData.description}
          onChange={(e) => setInputsData({ ...inputsData, description: e.target.value })}
        />
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </form>
      {formSubmit && <p>{formSubmit}</p>}
      {inputsData.email && <p>{inputsData.email}</p>}
    </>
  );
};

export default AboutPage;
