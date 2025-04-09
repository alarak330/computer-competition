import apiService from '../utils/service'
import {token} from '../utils/token'

export default {
    cates(data) {
        return apiService({
            url: '/public_information.json',
            method: 'get',
            headers:{
            //    token: ` Bearer ${token.token}`
            },
            params: data
        })
    },
}

