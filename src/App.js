/**
 * 应用的根组件
 */
 import React, { Component } from 'react'
 import { BrowserRouter, Route, Switch ,Redirect} from 'react-router-dom'
 import Login from './pages/login/login'
 import Admin from './pages/admin/admin'
 
 export default class App extends Component {
 
     render() {
         return (
             
                 <BrowserRouter>
                     <Switch>  {/*只匹配其中一个路由*/}
                         <Route path='/login' component={Login}></Route>
                         <Route path='/admin' component={Admin}></Route>
                     </Switch>
                 </BrowserRouter>
             
         )
     }
 }
 