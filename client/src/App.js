import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Pages/Home'
import PostForm from './Pages/PostForm'
import Navbar from './Pages/Navbar'
import Post from './Pages/Post'
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import { ToastContainer } from 'react-toastify';

export const App = () => {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/post-form" exact component={ PostForm } />
          <Route path="/post/:id" exact component={ Post } />
          <Route path="/login" exact component={ Login }></Route>
          <Route path="/register" exact component={ Registration }></Route>
        </Switch>
      </Router>
      <ToastContainer />
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
