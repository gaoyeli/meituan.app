import React from 'react'

import {Switch,Route,Redirect} from "react-router-dom"
import Login from "./pages/Login/Login"
import Resiter from "./pages/Resiter/Resiter"
import Index from "./pages/Index/Index"
import goodDetail from "./pages/goodDetail/goodDetail"
import List from "./pages/List/List"
import MyRoute from "./pages/MyRoute/MyRoute"
export default function App() {
    return (
        <div className="app">
            {/* Switch-路由出口 Route配置规则 Redirect-重定向  一级路由出口 */}
            <Switch>
                <Route path="/login" component={Login}></Route> 
                <MyRoute path="/resiter" component={Resiter}></MyRoute>
                <MyRoute path="/index" component={Index}></MyRoute>
                <MyRoute path="/gooddetail/:id" component={goodDetail}></MyRoute>
                <MyRoute path="/list/:id" component={List}></MyRoute>
                <Redirect to="/login"></Redirect>
            </Switch>
        </div>
    )
}

