import React, { Component } from 'react'
import "./FenLei.css"
import { reqgetCate, reqgetCateTree } from "../../utils/request"
export default class fenlei extends Component {
    constructor() {
        super()
        this.state = {
            cate: [],
            n:0
           
        }
    }
    componentDidMount() {
        reqgetCateTree().then(res => {
            this.setState({
                cate: res.data.list,            
            })
        })
        
    }
    login(id,index) {  
        this.setState({
            n:index,
        })
           
    }
    todd(id){
         this.props.history.push("/list/"+id)
    }
    render() {
        const { cate,n } = this.state
        var cateRight=cate.length>0?cate[n].children:[];
        
        return (
            <div>
                <div className="header">分类</div>
                {/* 内容 */}
                <div className="mainn">

                    {/* 左侧导航 */}
                    <div className="leftw" >
                        {
                            cate.map((item,index) => {
                                return (
                                    <div className={index===n?'nvv nvv-select':'nvv'}  key={item.id} onClick={() => this.login(item.id,index)}> {item.catename} </div>
                                )
                            })
                        }
                    </div>
                    {/* 右侧  */}
                    <div className="rightt">
                        {/* 右侧每个小盒子 */}
                        {
                            cateRight.map(item => {
                                return (
                                    <div className="everyy " key={item.id} onClick={()=>this.todd(item.id)}>
                                        <img src={item.img} alt="" />
                                        <div className="ccwy">{item.catename}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div >
        )
    }
}
