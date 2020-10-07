import React, {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom'
import axios from 'axios'
import Add from './components/Add'
import Home from './components/Home'
import List from './components/List'


const App = () => {

    const padding = {
        padding: 5
    }

    return (
        <div className="container">
            <Router>
                <div>
                    <Link style={padding} to="/">home</Link>
                    <Link style={padding} to="/add">add</Link>
                    <Link style={padding} to="/list">list</Link>
                </div>

                <Switch>
                    <Route path="/add">
                        <Add />
                    </Route>
                    <Route path="/list">
                        <List />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

                <div>
                    <i>Esimerkkivalikko </i>
                    <i>perustuu HY:n fullstackopen-kurssimateriaaliin</i>
                </div>
            </Router>
        </div>
    )
}

export default App
