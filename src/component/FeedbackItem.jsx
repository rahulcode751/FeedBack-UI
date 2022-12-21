/** @format */
import { FaTimes } from "react-icons/fa";
import { useState } from "react"; /// use state hook
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

// function FeedbackItem({ item, handleDelete }) { // without useContext hook
function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext);
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState("This is example of Feedback item");

  // const handleClick = () => {
  //   /// in this way previous vaue of state can be acces and updated
  //   setRating((prev) => {
  //     console.log(prev);
  //     return prev + 1;
  //   });
  // };

  return (
    // <Card reverse={true}>
    <Card>
      <div className='num-display'>{item.rating}</div>
      {/* <button onClick={() => handleDelete(item.id)} className='close'> */}{" "}
      {/* // without use of context */}
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
      {/* <button onClick={handleClick}>Press</button> */}
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
