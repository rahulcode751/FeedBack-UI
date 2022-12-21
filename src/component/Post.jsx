/** @format */

import { useParams } from "react-router-dom";
import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

function Post() {
  const params = useParams();

  const navigate = useNavigate();

  const onClick = () => {
    console.log("hello");
    navigate("/about");
  };

  const status = 200;
  if (status === 404) {
    return <Navigate to='/notfound' />;
  }
  return (
    <div>
      {/* <h1>Post {params.id}</h1>
      <h3>Post {params.name}</h3> */}
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>Hello World</h1>} />
      </Routes>
    </div>
  );
}

export default Post;
