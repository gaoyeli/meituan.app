import React, { Component } from 'react'
import "./Cate.css"
import { withRouter } from "react-router-dom"
// import { reqgetDetail } from "../../../utils/request"

class Cate extends Component {
    constructor() {
        super()
        this.state={
            detail:{}
        }
        
    }
    toDetail(id) {
        this.props.history.push("/gooddetail/"+id)
        // reqgetDetail(id).then(res => {
        //     this.setState({
               
        //         detail:res.data.list[0]
        //     })
        //     this.props.history.push("/gooddetail/"+id)
                   
        // })
    }
    render() {
        const { goods } = this.props
        return (
            <div>
                {
                    goods.map(item => {
                        return (
                            <div className="index_list" key={item.id} onClick={() => this.toDetail(item.id)} >
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
                                        <button >立即抢购</button>
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

export default withRouter(Cate)
