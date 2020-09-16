import React, { Component } from 'react'
import "./Shop.css"
import Header from "../../components/Header"
import Footer from "./components/Footer"
import List from "./components/List"
import { reqShopList, reqShopEdit, reqShopDel } from "../../utils/request"
import { successAlert, confirmAlert } from "../../utils/alert"
export default class shop extends Component {
    constructor() {
        super()
        this.state = {
            shopList: [],
            allChecked: false,//全选
            allEdit: false,//编辑
            totalNum: 0
        }
    }
    componentDidMount() {
        reqShopList({ uid: sessionStorage.getItem("uid") }).then(res => {
            this.setState({
                shopList: res.data.list
            }, () => console.log(this.state.shopList))
        })

    }
    //全选
    selectAll() {
        const { shopList } = this.state
        this.setState({
            // ...this.state,
            allChecked: !this.state.allChecked,
            shopList: [...shopList.map(item => {
                item.checked = !this.state.allChecked;
                return item;
            })]
        })
        //计算价格
        if (this.state.shopList.length > 0) {
            let sum = 0;
            this.state.shopList.forEach(item => {
                if (item.checked) {
                    sum += item.price * item.num
                }
            })
            this.setState({
                totalNum: sum
            })
        }
    }

    //单选
    selectOne(index) {
        const { shopList } = this.state
        shopList[index].checked = !shopList[index].checked

        this.setState({
            shopList: [...shopList],
            allChecked: shopList.every(item => item.checked)

        })
        //计算价格
        if (this.state.shopList.length > 0) {
            let sum = 0;
            this.state.shopList.forEach(item => {
                if (item.checked) {
                    sum += item.price * item.num
                }
            })
            this.setState({
                totalNum: sum
            })
        }
    }

    //编辑
    changeEdit() {
        this.setState({
            ...this.state,
            allEdit: !this.state.allEdit,
        })
    }

    //    增加
    add(id) {
        reqShopEdit({ id: id, type: 2 }).then(res => {
            reqShopList({ uid: sessionStorage.getItem("uid") }).then(res => {
                this.setState({
                    ...this.state,
                    shopList: res.data.list ? res.data.list : []
                })
            })
        })


    }
    //减少
    down(id, num) {
        if (num <= 1) {
            return (successAlert("亲，宝贝不能再减少了"))

        }
        reqShopEdit({ id: id, type: 1 }).then(res => {
            reqShopList({ uid: sessionStorage.getItem("uid") }).then(res => {
                this.setState({
                    ...this.state,
                    shopList: res.data.list ? res.data.list : []
                })
            })
        })


    }

    //删除
    del(id) {
        confirmAlert(() => {
            reqShopDel({ id: id }).then(res => {
                reqShopList({ uid: sessionStorage.getItem("uid") }).then(res => {
                    this.setState({
                        shopList: res.data.list ? res.data.list : [],
                        allEdit: false,//全部编辑
                    })
                    if (this.state.shopList.length > 0) {
                        this.state.shopList.forEach(item => {
                            item.checked = false
                        })
                    }
                })
                this.setState({
                    allPirce: 0
                })
            })
        })


    }


    render() {
        const { shopList, allChecked, allEdit, totalNum } = this.state;
        return (
            <div>1
                <Header title="购物车"></Header>
                {/* 内容 */}
                {
                    shopList.length > 0 ? (<List shopList={shopList}
                        //单选
                        selectOne={this.selectOne.bind(this)}
                        //增加
                        add={this.add.bind(this)}
                        down={this.down.bind(this)}
                        //删除
                        allEdit={allEdit}
                        del={this.del.bind(this)}
                    ></List>) : null
                }

                {/* 底部 */}
                {
                    shopList.length > 0 ? (<Footer selectAll={() => this.selectAll()}
                        allChecked={allChecked}
                        changeEdit={() => this.changeEdit()}
                        allEdit={allEdit}
                        totalNum={totalNum}
                    ></Footer>) : null
                }
            </div>
        )
    }
}
