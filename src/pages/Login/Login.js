import React, { Component } from 'react'
import "./Login.css"
import { reqlogin } from "../../utils/request"
import {successAlert} from "../../utils/alert"
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
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
    login(){
        reqlogin(this.state.user).then(res=>{
            if(res.data.code===200){
                sessionStorage.setItem("uid",res.data.list.uid);
                sessionStorage.setItem("token",res.data.list.token);

                // alert("登录成功")
                successAlert("登录成功")
                 
                this.props.history.push("/index")
            }else{
                successAlert("用户名或者密码错误")
            }
        })
    }
    toLogin(){

           this.props.history.push("/resiter")

    }
    render() {
        const { user } = this.state
        return (
            <div className="box">
                {/* 头部 */}
                <div className="header">
                    <span>登录</span>
                    <span className="a" onClick={()=>this.toLogin()}>注册</span>
                </div>
                {/* 输入框 */}
                <div className="input">
                    <div className="line1">
                        <div className="text">账 号：</div>
                        <input className="con1" type="text" value={user.phone} onChange={(e) => this.changeUser(e, "phone")} />
                    </div>
                    <div className="line1 line2">
                        <div className="text">密 码：</div>
                        <input className="con1" type="text" value={user.password} onChange={(e) => this.changeUser(e, "password")} />
                    </div>
                    <div className="forget">忘记密码</div>
                </div>
                {/* 登录 */}
                <div className="btnv" onClick={()=>this.login()}>登录</div>

            </div>
        )
    }
}
