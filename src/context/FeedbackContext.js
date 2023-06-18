import { createContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from 'uuid'
import FeedbackData from "../data/FeedbackData";


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {  /// we are wrapping
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]
        //FeedbackData
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

    useEffect(() => {
        //console.log(123)
        fetchFeedback();
    }, []);

    /// Fetch feedback
    const fetchFeedback = async () => {
        // const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)  
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        ///feedback 
        /// proxy me dal dia local host link package.json me
        /// it will sort on the bases on id in descending order  . fetch api promise return krta h
        const data = await response.json();
        //console.log(data);
        setFeedback(data);
        setIsLoading(false);
    }

    // delete feedback
    const deleteFeedback = async (id) => {
        // if (window.confirm('Are you sure you want to delete?')) {
        //     setFeedback(feedback.filter((item) => item.id !== id))
        // }
        if (window.confirm('Are you sure you want to delete?')) {
            await fetch(`/feedback/${id}`, { method: 'DELETE' })

            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    // add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        //  newFeedback.id = uuidv4()
        const data = await response.json();
        console.log(newFeedback)
        setFeedback([data, ...feedback])
    }
    /// Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    /// update feedback item
    const updateFeedback = async (id, updItem) => {
        // console.log(id, updItem);
        // setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem),
        })

        const data = await response.json()

        // NOTE: no need to spread data and item
        setFeedback(feedback.map((item) => (item.id === id ? data : item)))
        setFeedbackEdit({
            item: {},
            edit: false,
        })
    }
    return <FeedbackContext.Provider value={{
        feedback: feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext; 