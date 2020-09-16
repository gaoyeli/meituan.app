import axios from "axios"
import qs from "qs"
const baseUrl = ""

// 请求拦截
  axios.interceptors.request.use(config => {
    config.headers.authorization = sessionStorage.getItem('token')
    return config;
})

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


//首页 分类分类信息
export const reqgetCate = () => axios({
    method: "get",
    url: baseUrl + "/api/getcate"
})

//首页，分类右边树形结构
export const reqgetCateTree = () => axios({
    url: baseUrl + "/api/getcatetree",
    type: "get"
})

//分类列表 详情
export const reqgetCateList = (params) => axios({
    url: baseUrl + "/api/getgoods",
    method: "get",
    params
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



// 购物车列表
export const reqShopList = (params) => axios({
    url: baseUrl + "/api/cartlist",
    params:params
})


// 购物车删除
export const reqShopDel = (id) => axios({
    url: baseUrl + "/api/cartdelete",
    method: "post",
    data: qs.stringify(id)
})
// 购物车修改
export const reqShopEdit = (data) => axios({
    url: baseUrl + "/api/cartedit",
    method: "post",
    data: qs.stringify(data)
})

