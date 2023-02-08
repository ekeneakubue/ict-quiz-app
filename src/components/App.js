import '../styles/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './Main'
import Navbar from './Navbar'
import Quiz from './Quiz'
import Result from './Result'

function App() {
  return (
    <div className="App container">    
      <Navbar/>     
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Main />
          </Route>

          <Route path = '/quiz'>
            <Quiz />
          </Route>

          <Route path = '/result'>
            <Result />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
