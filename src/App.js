import React from 'react'

import {Switch,Route,Redirect} from "react-router-dom"
import Login from "./pages/Login/Login"
import Resiter from "./pages/Resiter/Resiter"
import Index from "./pages/Index/Index"
 import goodDetail from "./pages/goodDetail/goodDetail"
export default function App() {
    return (
        <div className="app">
            {/* Switch-路由出口 Route配置规则 Redirect-重定向 */}
            <Switch>
                <Route path="/login" component={Login}></Route> 
                <Route path="/resiter" component={Resiter}></Route>
                <Route path="/index" component={Index}></Route>
                <Route path="/gooddetail" component={goodDetail}></Route>
                {/* <Redirect to="/login"></Redirect> */}
            </Switch>
        </div>
    )
}
