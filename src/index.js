import React from "react";
import { createRoot } from "react-dom/client"

import './index.css';
import App from './App';

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// ReactDOM.render(<App />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<App />)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
