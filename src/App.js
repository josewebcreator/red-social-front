import './App.css';
import Landing from './components/landing/Landing';
import Feed from './components/feed/Feed';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';
import { reducer } from './reducer/reducer.jsx';
import { MyProvider } from './context/context.jsx';
import initialState from './reducer/initialState.jsx';


function App() {

  const [appState, dispatch] = useReducer(reducer, initialState);

  const providerState = {
    appState,
    dispatch
  }

  return (

    <MyProvider value={providerState}>
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
