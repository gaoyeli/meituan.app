import React, { Component } from 'react'
import "./Home.css"

import ava from "../../assets/img/img/home/logo.jpg"
import aa from "../../assets/img/img/home/1.jpg"

import { reqgetBanner,  reqgetIndexGoods } from "../../utils/request"
 import Banner from "./components/Banner"
 import Cate from "./components/Cate"
export default class home extends Component {
    constructor() {
        super()
        this.state = {
            banner: [],
            goods:[]
        }
    }
    componentDidMount() {
        //请求轮播图
        reqgetBanner().then(res => {
            this.setState({
                banner: res.data.list
            })
        })
        //获取商品信息
        reqgetIndexGoods().then(res=>{
            this.setState({
                goods:res.data.list[0].content
            })
        })
    }
    render() {
        const {banner,goods}=this.state
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
                    
                  {/* 商品渲染 */}

                <Cate goods={goods}></Cate>


            </div>
        )
    }
}
