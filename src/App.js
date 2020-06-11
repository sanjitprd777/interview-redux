import React from 'react'
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';
import './App.css'
import Navbar from "./Navbar"
import Bottombar from "./Bottombar"
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import DeletePage from "./pages/DeletePage";
import InterviewsPage from './pages/InterviewsPage'
import ShowPage from './pages/ShowPage'
import NewPage from './pages/NewPage'

// Step 1: Import page and Set Route path
function App() {
    return (
      <Router>
        <Navbar/>
        <Bottombar/>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/interviews" exact component={InterviewsPage} />
          <Route path="/interviews/new" exact component={NewPage} />
          <Route path="/interviews/:id" exact component={ShowPage} />
          <Route path="/interviews/:id/edit" exact component={EditPage} />
          <Route path="/interviews/:id/delete" exact component={DeletePage} />
        </Switch>
      </div>
      </Router>
    );
}

export default App;
