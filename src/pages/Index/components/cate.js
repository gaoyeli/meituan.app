import React, { Component } from 'react'
 import "./cate.css"
export default class cate extends Component {
    
    render() {
        const{cate}=this.props
        return (
            <div>
                 {
                    cate.map(item => {
                        return (
                            <div className="index_list" key={item.id}>
                                <div className="index_goodsPic">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className='index_text'>
                                    <p className='index_title'>{item.goodsname}</p>
                                    <p>
                                        <span className='index_color'>¥</span>
                                        <span className='index_price index_color'>{item.price}</span>
                                    </p>
                                    <p className='index_buy'>
                                        <button>立即抢购</button>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
