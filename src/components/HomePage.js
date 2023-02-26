import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <h1>this is HomePage</h1>
      <Link to="/about">go to AboutPage</Link>
    </>
  );
};

export default HomePage;
