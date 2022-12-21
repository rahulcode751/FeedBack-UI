import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./component/AboutIconLink";
import Card from "./component/shared/Card";
import Post from "./component/Post";
import { FeedbackProvider } from "./context/FeedbackContext";
import { v4 as uuidv4 } from 'uuid'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);
    // const title = 'Blog Post'
    // const body = 'This is my post'
    // const comments = [
    //     { id: 1, text: 'Comment One' },
    //     { id: 2, text: 'Comment Two' },
    //     { id: 3, text: 'Comment Three' },
    //     { id: 4, text: 'Comment Four' }
    // ]

    // const loading = false
    // const showComments = true
    // if (loading) return <h1>Loading...</h1>

    // const commentBlock = (<div className="comments">
    //     <h3>Comments ({comments.length})</h3>
    //     <ul>
    //         {comments.map((comment, index) => (
    //             <li key={index}>{comment.text}</li>
    //         ))}
    //     </ul>
    // </div>)
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                {/* <FeedbackForm handleAdd={addFeedback} /> */}
                                <FeedbackForm />
                                {/* <FeedbackStats feedback={feedback} /> */}
                                <FeedbackStats />
                                {/* <FeedbackList handleDelete={deleteFeedback} /> */}
                                <FeedbackList handleDelete={deleteFeedback} />
                            </>
                        }>
                        </Route>
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router >
        </FeedbackProvider>
        // <Router>
        //     {/* <Header bgColor="blue" textColor="white" text="Feedback" /> */}
        //     <Header />
        //     <div className="container">
        //         <Routes>
        //             <Route exact path='/' element={
        //                 <>
        //                     <FeedbackForm handleAdd={addFeedback} />
        //                     <FeedbackStats feedback={feedback} />
        //                     <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        //                 </>
        //             }>
        //             </Route>
        //             <Route path='/about' element={<AboutPage />} />
        //             {/* <Route path='/post/:id' element={<Post />} />
        //             <Route path='/post/:id/:name' element={<Post />} /> */}
        //             {/* <Route path='/post/*' element={<Post />} /> */}
        //         </Routes>
        //         {/* <Card>
        //             <NavLink to="/" activeClassName='active'>
        //                 Home
        //             </NavLink>
        //             <NavLink to="/about" activeClassName='active'>
        //                 About
        //             </NavLink>
        //         </Card> */}
        //         <AboutIconLink />
        //     </div>
        //     {/* <Routes path='/about'>This is the home page</Routes> */}

        //     {/* <Routes>
        //             <Route path="/" component={AboutPage}></Route>
        //         </Routes>  */}
        //     {/* <h1>{title}</h1>
        //     <p>{body}</p>
        //     {showComments ? (
        //         <div className="comments">
        //             <h3>Comments ({comments.length})</h3>
        //             <ul>
        //                 {comments.map((comment, index) => (
        //                     <li key={index}>{comment.text}</li>
        //                 ))}
        //             </ul>
        //         </div>) : null
        //     }
        //     {showComments && (
        //         <div className="comments">
        //             <h3>Comments ({comments.length})</h3>
        //             <ul>
        //                 {comments.map((comment, index) => (
        //                     <li key={index}>{comment.text}</li>
        //                 ))}
        //             </ul>
        //         </div>)
        //     }
        //     {showComments && commentBlock} */}
        // </Router >
    )
}
export default App;