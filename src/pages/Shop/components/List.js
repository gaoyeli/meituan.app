import React, { Component } from 'react'
import "./List.css"
import store from "../../../assets/img/store.png"
import radio_nor from "../../../assets/img/radio_nor.png"
import radio_hig from "../../../assets/img/radio_hig.png"
export default class List extends Component {
    render() {
        const { shopList, selectOne, add, down, allEdit,del } = this.props;
        return (
            //外面总的
            <div className="shopTop">


                {
                    shopList.map((item, index) => {
                        return (
                            // {/* 一个商品整体外面大盒子 */}
                            <div className="shopCn" key={item.id}>
                                {/* 里面顶部文字  */}
                                <div className="shopImg">
                                    <img src={store} alt="" />
                                    <div> 杭州保税仓库</div>
                                </div>
                                {/* 图片 总价 */}
                                <div className="shop_con">
                                    <div className={allEdit ? "shop_con_left" : "shop_con_left1"}>


                                        {/* 左边选中 */}
                                        <div className="shop_con_img1" onClick={() => selectOne(index)}>
                                            {
                                                item.checked ? (<img src={radio_hig} alt="" />) : (<img src={radio_nor} alt="" />)
                                            }
                                        </div>

                                        <div className="shop_con_img2">
                                            <img src={item.img} alt="" />
                                        </div>

                                        <div className="shop_con_con">
                                            <p>{item.goodsname}</p>
                                            <div className="num">
                                                <div className="num1" onClick={() => down(item.id, item.num)}>-</div>
                                                <div className="num1">{item.num}</div>
                                                <div className="num1" onClick={() => add(item.id)}>+</div>
                                            </div>

                                            <div className="numtotal">总价{item.price * item.num}</div>
                                        </div>

                                        <div className="numone">￥{item.price}</div>


                                    </div>

                                    {
                                        allEdit ? (
                                            <div className="del" onClick={()=>del(item.id)}>删除</div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        )
                    })
                }








            </div>
        )
    }
}
