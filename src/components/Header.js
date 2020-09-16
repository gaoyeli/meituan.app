import React, { Component } from 'react'
import "./Header.css"
import {withRouter} from "react-router-dom"
class Header extends Component {
    goBack(){
        this.props.history.goBack()
    }
    render() {
        const {title,back}=this.props
        return (
            <div className="header">
                {
                    back?<i className="header-btn " onClick={()=>this.goBack()}></i>:null
                }
                <div className="header-title">
                    {title}
                </div>
            </div>
        )
    }
}
export default withRouter(Header)
