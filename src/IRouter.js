/**
 * Created by Ljili on 2020/6/5.
 */
import React from 'react'
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Main from './Main'
import Home from './views/home'
import List from './views/list'
import About from './views/about'
import Editor from './views/editor'
class IRouter extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <HashRouter>
        <Switch>
          <Main>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/list" exact={true} component={List} />
              <Route path="/about" exact={true} component={About} />
              <Route path="/editor" exact={true} component={Editor} />
            </Switch>
          </Main>
        </Switch>
      </HashRouter>
    )
  }
}
export default IRouter
