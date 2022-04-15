import React, {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';

// Old Version
// ReactDom.render(<App />, document.getElementById('root'));

// React 18
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)