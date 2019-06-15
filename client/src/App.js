import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import MainPage from './component/container/main-page';
import CreatePage from './component/container/create-page';
const App = function (props) {
  return (<BrowserRouter>
    <div>
      <Route exact path="/" component={MainPage} />
      <Route path="/create" component={CreatePage} />
    </div>
  </BrowserRouter>);
}

export default App;
