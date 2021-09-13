import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Home } from './Pages/Home'
import PostForm from './Pages/PostForm'
export const App = () => {

  return (
    <div className="App">
      <Router>
        <Link to="/post-form">Create A post</Link>
        <Link to="/">Home page</Link>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/post-form" exact component={ PostForm } />
        </Switch>
      </Router>
    </div>
  )
}


export default App;


// import React, { Component } from 'react'

// export class App extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

// export default App


// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;
