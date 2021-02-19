import React from 'react'
import './App.scss'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import AboutProject from './components/AboutProject'
import Result from './components/Result'

function App() {
  return (
    <div className="bg-main ">
      <div className="cont-main container">
        <Router>
          <Header/>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/about-us' component={AboutUs}/>
            <Route exact path='/about-project' component={AboutProject}/>
            <Route exact path='/result' component={Result}/>
          </Switch>
          <Footer/>
        </Router>
      </div>
    </div>
  )
}



export default App;