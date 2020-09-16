import React, { Component } from 'react'
import "./Index.css"

import homes from "../../assets/img/tab_home_hig.png"
import home from "../../assets/img/tab_home_nor.png"
import fenleis from "../../assets/img/tab_menu_hig.png"
import fenlei from "../../assets/img/tab_menu_nor.png"
import shops from "../../assets/img/tab_shopping_hig.png"
import shop from "../../assets/img/tab_shopping_nor.png"
import mines from "../../assets/img/tab_me_hig.png"
import mine from "../../assets/img/tab_me_nor.png"

import Home from "../Home/Home"
import Mine from "../Mine/Mine"
import Shop from "../Shop/Shop"
import FenLei from "../FenLei/FenLei"

import { Switch, NavLink, Route, Redirect } from "react-router-dom"
export default class Index extends Component {
    constructor() {
        super()
        this.state = {
            navs: [
                {
                    name: "首页",
                    selected: homes,
                    noSelected: home,
                    path: "/index/home"
                },
                {
                    name: "分类",
                    selected: fenleis,
                    noSelected: fenlei,
                    path: "/index/fenlei"
                },
                {
                    name: "购物车",
                    selected: shops,
                    noSelected: shop,
                    path: "/index/shop"
                },
                {
                    name: "我的",
                    selected: mines,
                    noSelected: mine,
                    path: "/index/mine"
                },

            ]
        }
    }
    render() {
        return (
            <div >

               

                {/* 二级路由出口 */}
                <Switch>

                    <Route path="/index/home" component={Home}></Route>
                    <Route path="/index/mine" component={Mine}></Route>
                    <Route path="/index/shop" component={Shop}></Route>
                    <Route path="/index/fenlei" component={FenLei}></Route>
                    
                  
                    <Redirect to="/index/home"></Redirect>
                </Switch>







                {/* 底部导航带icon */}


                <footer className="index-footer footer2">
                    {
                        this.state.navs.map(item => {
                            return (
                                <NavLink activeClassName="select" key={item.path} to={item.path}>
                                    <img src={this.props.location.pathname === item.path ? item.selected : item.noSelected} alt="" />
                                    <div>{item.name}</div>
                                </NavLink>
                            )
                        })
                    }

                </footer>
            </div>
        )
    }
}
