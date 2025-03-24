import './App.css';
import Landing from './components/landing/Landing.jsx';
import Feed from './components/feed/Feed.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MyProvider } from './context/context.jsx';



function App() {

  return (
    <MyProvider>
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/feed" element={<Feed />} />
                </Routes>
            </div>
        </Router>
    </MyProvider>
);
}
export default App;
