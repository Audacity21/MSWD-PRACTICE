import Home from'./js-codes/home';
import { Helmet } from 'react-helmet'
import ID from './js-codes/id';
import Counter from './js-codes/counter';
import Form from './js-codes/form'
import Quiz from './js-codes/quiz'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Helmet>
          <title>Skill Project</title>
        </Helmet>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/id">
              <ID />
            </Route>
            <Route exact path="/counter">
              <Counter />
            </Route>
            <Route exact path="/form">
              <Form />
            </Route>
            <Route exact path="/quiz">
              <Quiz />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
