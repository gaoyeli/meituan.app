import axios from "axios"
import qs from "qs"
const baseUrl = ""

//响应拦截
axios.interceptors.response.use(res => {
    console.group("====本次请求的地址是：" + res.config.url + "======");
    console.log(res);
    console.groupEnd()
    return res
})

//注册
export const reqregister = (data) => axios({
    url: baseUrl + "/api/register",
    method: "post",
    data: qs.stringify(data)
})




//登录
export const reqlogin = (data) => axios({
    url: baseUrl + "/api/login",
    method: "post",
    data: qs.stringify(data)
})

//首页分类
export const reqgetCate = () => axios({
    url: baseUrl + "/api/getcatetree"
})

//轮播
export const reqgetBanner = () => axios({
    url: baseUrl + "/api/getbanner"
})

//秒杀
export const reqgetseckill = () => axios({
    url: baseUrl + "/api/getseckill"
})

//首页数据
export const reqgetIndexGoods = () => axios({
    url: baseUrl + "/api/getindexgoods"
})

//商品详情
export const reqgetDetail = (id) => axios({
    url: baseUrl + "/api/getgoodsinfo",
    params: {
        id
    }
})

// 购物车添加
export const reqaddShop = (data) => axios({
    url: baseUrl + "/api/cartadd",
    method: "post",
    data: qs.stringify(data)
})

//分类列表
export const reqgetCateList = (id) => axios({
    url: baseUrl + "/api/getgoods",
    params: {
        fid: id
    }
})

// 购物车列表
export const reqshopList = (id) => axios({
    url: baseUrl + "/api/cartlist",
    params: {
        uid: id
    }
})


// 购物车删除
export const reqshopDel = (id) => axios({
    url: baseUrl + "/api/cartdelete",
    method: "post",
    data: qs.stringify({
        id: id
    })
})
// 购物车修改
export const reqshopEdit = (data) => axios({
    url: baseUrl + "/api/cartedit",
    method: "post",
    data: qs.stringify(data)
})

