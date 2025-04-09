import axios from "axios";
// import Store from '../store/index'

console.info('当前的环境是',process.env.NODE_ENV,process.env.NODE_ENV == 'development')
const service = axios.create({
    // baseURL:  process.env.NODE_ENV == 'development' ?  "/"  :'/test',  // api 的 base_url test   // 线上
    baseURL: "api/",  // api 本地
    timeout: 150000  // 请求超时时间
})


// let userInfo = localStorage.getItem('userInfo')
// if (userInfo) {
//     service.defaults.headers['token'] = JSON.parse(localStorage.getItem('userInfo')).token
// }
// 添加请求拦截器
service.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        // console.info("正在加载中...")
		// Store.state.isShow=true
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
service.interceptors.response.use(
    function (response) {
        // 对响应数据做点什么
        // console.info("加载结束了...")
        const responseCode = response.status
        if (responseCode === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }

    },
    function (error) {
        // 对响应错误做点什么
        // return Promise.reject(error);
        const errorCode = error.response.status
        switch (errorCode) {
            case 401:
                break
            case 403:
                break
            case 404:
                break
            default:
                'err'
        }
        return Promise.reject(error);

    }
);

export default service