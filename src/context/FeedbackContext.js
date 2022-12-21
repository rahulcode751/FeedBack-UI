import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {  /// we are wrapping
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        },
        {
            id: 2,
            text: 'This item is from context 2',
            rating: 9
        }
    ])
    return <FeedbackContext.Provider value={{
        feedback: feedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;