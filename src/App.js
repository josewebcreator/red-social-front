import './App.css';
import Landing from './components/landing/Landing';
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
      <div className="App">
        <Landing />
      </div>
    </MyProvider>
  );
}
export default App;
