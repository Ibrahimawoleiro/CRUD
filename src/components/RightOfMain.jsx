import { useState } from 'react'
import Home from './Home'
import CreatematePage from './CreatematePage'
import Gallery from './Gallery'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function RightOfMain() {
    const [count, setCount] = useState(0)

    return (
        <Router>
            <div className='RightOfMain'>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/Createmate">
                        <CreatematePage></CreatematePage>
                    </Route>
                    <Route exact path="/Gallery">
                        <Gallery></Gallery>
                    </Route>
                </Switch>

            </div>
        </Router>

    )
}

export default RightOfMain
