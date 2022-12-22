/** @format */
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

// function FeedbackList({ feedback, handleDelete }) { /// without context
function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback yet</p>;
  } else {
    console.log(feedback);
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              // handleDelete={handleDelete} // we will not pas it as props bcz of useContext and this FeedbackContext
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  // return (
  // <div className='feedback-list'>
  //   <AnimatePresence>
  //     {feedback.map((item) => (
  //       <motion.div
  //         key={item.id}
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //         exit={{ opacity: 0 }}
  //       >
  //         <FeedbackItem
  //           key={item.id}
  //           item={item}
  //           // handleDelete={handleDelete} // we will not pas it as props bcz of useContext and this FeedbackContext
  //         />
  //       </motion.div>
  //     ))}
  //   </AnimatePresence>
  // </div>
  // );

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
}

// FeedbackList.propTypes = {
//   //   feedback: PropTypes.array.isRequired,
//   // or
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };

export default FeedbackList;
