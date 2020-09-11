import React, { Component } from 'react'
import "./Resiter.css"
import { reqregister } from "../../utils/request"
// import {successAlert,errorAlert} from "../../utils/alert"
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                nickname: "",
                password: ""
            }
        }
    }
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
        console.log(this.state.user);
        console.log(this.props);
    }
    login() {
        reqregister(this.state.user).then(res => {
             if(res.data.msg){
                 alert("注册成功")
                // successAlert("注册成功")
            this.props.history.push("/login")
             }else{
                // errorAlert(res.data.msg)
                alert(res.data.msg)
             }
        })
    }
    back(){
        this.props.history.goBack()
    }
    render() {
        const { user } = this.state;
        return (
            <div className="res">
                {/* 头部 */}
                <div className="header">
                    <span className="back" onClick={()=>this.back()}>返回</span>
                    <span>注册</span>
                </div>
                {/* 输入框 */}
                <div className="input">
                    <div className="line1">
                        <div className="text">手机号：</div>
                        <input className="con" type="text" value={user.phone} onChange={(e) => this.changeUser(e, "phone")} />
                    </div>
                    <div className="line1 line2">
                        <div className="text">昵 称：</div>
                        <input className="con" type="text" value={user.nickname} onChange={(e) => this.changeUser(e, "nickname")} />
                    </div>
                    <div className="line1 line2">
                        <div className="text">密 码：</div>
                        <input className="con" type="text" value={user.password} onChange={(e) => this.changeUser(e, "password")} />
                    </div>
                </div>
                {/*  登录 */}
                <div className="btn" onClick={() => this.login()}>注册</div>




            </div >
        )
    }
}
