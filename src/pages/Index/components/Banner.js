import React, { Component } from 'react'
import "./Banner.css"
import {Carousel} from "antd-mobile"
export default class Order extends Component {
    render() {
        const {banner}=this.props;
        return (
            <div className="banner">
                  <Carousel
                   autoplay
                   infinite
                  >
                     {
                         banner.map(item=>{
                              return(
                               <img src={item.img} key={item.id} alt=""/>   
                              )
                         })
                     }
                  </Carousel>
            </div>
        )
    }
}
