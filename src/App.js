import { BrowserRouter, Switch, Route } from 'react-router-dom'

// page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Info from './pages/info/Info'
import About  from './pages/about/About'
// styles
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/info/:id">
            <Info />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App