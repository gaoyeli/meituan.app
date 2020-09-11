import React, { Component } from 'react'
import "./Index.css"
import aa from "../../assets/img/img/home/1.jpg"
import ava from "../../assets/img/img/home/logo.jpg"
import home from "../../assets/img/tab_home_nor.png"
import fenlei from "../../assets/img/tab_menu_nor.png"
import che from "../../assets/img/tab_shopping_nor.png"
import eo from "../../assets/img/tab_me_nor.png"
import Banner from "./components/Banner"
import { reqgetBanner, reqgetCate } from "../../utils/request"
import Cate from "./components/cate"
export default class Index extends Component {
    constructor() {
        super()
        this.state = {
            banner: [],
            cate: []
        }
    }
    componentDidMount() {
        reqgetBanner().then(res => {
            this.setState({
                banner: res.data.list
            })
        })

        reqgetCate().then(res => {
            this.setState({
                cate: res.data.list
            })
        })
    }
    render() {

        const { banner ,cate} = this.state
        return (
            <div className="index">
                <div className="index1">
                    <div className="index11"><img src={ava} alt="" /></div>
                    <div className="index2">寻找商品</div>
                </div>

                <div className="index3" >
                    {
                        banner.length > 0 ? (<Banner banner={banner}></Banner>) : null
                    }
                </div>

                <div className="index4">
                    <div><img src={aa} alt="" />
                        <p>限时抢购</p>
                    </div>
                    <div><img src={aa} alt="" />
                        <p>积分商城</p></div>
                    <div><img src={aa} alt="" />
                        <p>联系我们</p></div>
                    <div><img src={aa} alt="" />
                        <p>商品分类</p></div>
                </div>
               <div>
                    <Cate cate={cate}></Cate>
               </div>

                <div className="index6">
                    <div className="index61">
                        <img src={home} alt="" />
                        <p>首页</p>
                    </div>
                    <div className="index61">
                        <img src={fenlei} alt="" />
                        <p>分类</p>
                    </div>
                    <div className="index61">
                        <img src={che} alt="" />
                        <p>购物车</p>
                    </div>
                    <div className="index61">
                        <img src={eo} alt="" />
                        <p>我的</p>
                    </div>
                </div>


            </div>
        )
    }
}
