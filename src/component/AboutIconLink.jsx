/** @format */
import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

function AboutIconLink() {
  return (
    <div className='about-link'>
      {/* <Link to='/about'>
        <FaQuestion size={30} />
      </Link> */}
      <Link
        to={{
          pathname: "/about",
          //   search: "?sort=name", /// ad some suffix to url
          //   hash: "#hello",
        }}
      >
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
