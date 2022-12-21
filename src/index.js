import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode> {/*Just like the React Fragment, the React StrictMode Component does not render any visible UI. The React StrictMode can be viewed as a helper component that allows developers to code efficiently and brings to their attention any suspicious code which might have been accidentally added to the application. */}
        <App />
    </React.StrictMode>,
    document.getElementById('root')
); 