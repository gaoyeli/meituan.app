import React, { Component } from 'react'
import "./goodDetail.css"
import { reqgetDetail, reqaddShop } from "../../utils/request"
import shoucang from "../../assets/img/img/cart_on.png"
  import {successAlert} from "../../utils/alert"

export default class goodDetail extends Component {
    constructor() {
        super()
        this.state = {
            detail: {},
            data: false
        }
    }
    componentDidMount() {
        // var id = this.$route.query.id;
        let id = this.props.match.params.id;
        reqgetDetail(id).then(res => {
            this.setState({
                detail: res.data.list[0]
            })
        })
    }

    //返回
    goBack() {
        this.props.history.goBack()
    }
    //点击添加购物车
    toShop() {
        this.setState({
            ...this.state,
            data: true
        })

    }
    //蒙版消失
    hide(e) {
        if (e.target.className === "mask") {

            this.setState({
                data: false
            })

        }

    }

    //蒙版点击加入购物车
    toShop1() {
        reqaddShop({
            uid: sessionStorage.getItem("uid"),
            goodsid: this.props.match.params.id,
            num: 1
        }).then(res => {
            successAlert("加入购物车成功")
            this.setState({
                data:false
            })
        })
    }

    render() {

        const { detail, data } = this.state;


        if (this.refs.ddd) {
            this.refs.ddd.innerHTML = detail.description
        }

        console.log();
        return (
            <div className="good">
                <div className="good1">
                    <p>商品详情</p>
                    <div className="good11" onClick={() => this.goBack()}>返回</div>
                </div>

                <div className="box_img">
                    <img src={detail.img} alt="" />
                </div>
                <div className="con"><p>{detail.goodsname} <span><img src={shoucang} alt="" /></span>
                    <span className="wen">收藏</span>
                </p></div>
                <div>
                    <div className="price"><p className="price1">￥{detail.price}   </p>
                        <div className="ccon"> {detail.ishot === 1 ? (<div className="boxx1">热卖</div>) : null}
                            {detail.isnew === 1 ? (<div className="boxx1">新品</div>) : null}</div>

                        <p className="price2">￥{detail.market_price}</p></div>
                </div>

                <div ref="ddd" className="des">

                </div>



                <div className="bottom">
                    <div className="shop" onClick={() => this.toShop()}>加入购物车</div>
                </div>

                {/* 蒙版 */}
                {
                    data === true ? (<div className="mask" onClick={(e) => this.hide(e)}>
                        <div className="picker" >
                            <div className="info">
                                <img src={detail.img} />
                                <span>{detail.goodsname}</span>
                            </div>
                            <div className="sku">
                                <h3>{detail.specsname}</h3>

                                {/* {
                                    detail.specsattr ? 
                                    JSON.parse(detail.specsattr).map((item) => {
                                        return
                                        (<div className="attr"  key={item.specsid}>
                                            <span>{item}</span>
                                        </div>)
                                    }):null
                                 } */}



                                {
                                    JSON.parse(detail.specsattr).map(item => {
                                        return (<div className="attr" key={item}>
                                            <span>{item}</span>

                                        </div>)
                                    })
                                }

                            </div>
                            <div className="bbtn" onClick={() => this.toShop1()}>加入购物车</div>
                        </div>
                    </div>
                    ) : false
                }

            </div>
        )
    }
}
