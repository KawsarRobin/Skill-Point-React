import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutPage from './components/aboutPage/AboutPage';
import BlogPage from './components/BlogPage/BlogPage';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound';
import ServicePage from './components/ServicePage/ServicePage';

function App() {
  const Styles = {
    color: '#0e1133',
  };
  return (
    <div style={Styles} className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/home">
            <HomePage></HomePage>
          </Route>
          <Route path="/about">
            <AboutPage></AboutPage>
          </Route>
          <Route path="/services">
            <ServicePage></ServicePage>
          </Route>
          <Route path="/blogs">
            <BlogPage></BlogPage>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
