/**
 * Created by Ljili on 2020/6/5.
 */
import React from 'react'
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Main from './Main'
import PrivateRouter from './PrivateRouter'
import Home from './views/home'
import Login from './views/login'
import House from './views/house'
import Ent from './views/ent'
import Editor from './views/editor'
class IRouter extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <HashRouter>
        <Switch>
          <Login path="/login" exact={true} component={Login}></Login>
          <PrivateRouter path="/">
            <Main>
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/house" exact={true} component={House} />
                <Route path="/ent" exact={true} component={Ent} />
              </Switch>
            </Main>
          </PrivateRouter>
        </Switch>
      </HashRouter>
    )
  }
}
export default IRouter
