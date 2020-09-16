import React, { Component } from 'react'
import "./List.css"
import { reqgetCateList } from "../../utils/request"
export default class list extends Component {
    constructor() {
        super()
        this.state = {
            goodList: []
        }
    }
    componentDidMount() {
        var id = this.props.match.params.id;
        reqgetCateList({ fid: id }).then(res => {
            this.setState({
                ...this.state,
                goodList: res.data.list
            })
        })
    }
    togoodDetail(id){
        this.props.history.push("/goodDetail/"+id)
    }
    render() {
        const { goodList } = this.state
        return (
            <div className="page">
                <div className="header">
                    <span className="back" onClick={() => this.props.history.go(-1)}>返回</span>
                    <span> </span>
                </div>

                {/* <!-- 数据列表 --> */}
                <div className="list">

                    {
                        goodList.map(item => {
                            return (
                                <div className="item" key={item.id}>
                                    <img className="item-img" src={item.img}/>
                                    <div className="item-con">
                            <div className="goodsname">{item.goodsname}</div>
                            <div className="price">￥{item.price}</div>
                                        <div className="bbtn" onClick={()=>this.togoodDetail(item.id)}>立即抢购</div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
