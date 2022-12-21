import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {  /// we are wrapping
    const [feedback, setFeedback] = useState(FeedbackData
        //    [
        //     {
        //         id: 1,
        //         text: 'Thisfeedback item 1',
        //         rating: 10
        //     },
        //     {
        //         id: 2,
        //         text: 'This item is from context 2',
        //         rating: 9
        //     }
        // ]
    )
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    // delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    // add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }
    /// Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback: feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;