import React, { Component } from 'react'
 import "./Mine.css"
 import set from "../../assets/img/set.png"
 import news from "../../assets/img/news.png"
 import hed from "../../assets/img/1.jpg"
 import good from "../../assets/img/icon_refund.png"
 import keep from "../../assets/img/keep.png"
export default class mine extends Component {
    render() {
        return (
           
              <div className="page">
    {/* <!-- 头部 --> */}
    <div className="header">
      <img className="header-left" src={set}  />
      <div className="header-center">个人中心</div>
      <div className="header-right">
        <img className="header-right-img" src={news}  />
        <div className="header-right-text">9+</div>
      </div>
    </div>

    {/* <!-- 头像 --> */}
    <div className="top">
      <img className="ava"  src={hed}  />
    </div>
    
    <div className="bottom">
      <div className="titlt">小不点儿</div>
      <div className="collection">
        <img className="xin" src={keep} />
        <div className="collction-text">我的收藏（5）</div>
      </div>
    </div>

    {/* <!-- 订单 --> */}
    <div className="order">
      <div className="order-top">
        <div className="order-top-left">我的订单</div>
        <div className="order-top-right">查看订单</div>
      </div>
      <div className="order-bottom">
        <div className="status">
          <div className="img-parent">
            <img className="status-img"  src={good}  />
          
          </div>
          <div className="status-info">待发货</div>
        </div>

        <div className="status">
          <div className="img-parent">
            <img className="status-img" src={good}  />
            <div className="status-text">3</div>
          </div>
          <div className="status-info">待发货</div>
        </div>
        <div className="status">
          <div className="img-parent">
            <img className="status-img" src={good}  />
            <div className="status-text">3</div>
          </div>
          <div className="status-info">待发货</div>
        </div>
        <div className="status">
          <div className="img-parent">
            <img className="status-img" src={good}  />
            <div className="status-text">3</div>
          </div>
          <div className="status-info">待发货</div>
        </div>
        <div className="status">
          <div className="img-parent">
            <img className="status-img" src={good}  />
            <div className="status-text">3</div>
          </div>
          <div className="status-info">待发货</div>
        </div>
      </div>
    </div>

    <div className="address">收货地址管理</div>
  </div>
            
        )
    }
}
