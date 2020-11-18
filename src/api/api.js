// 实际上引入过来的就是axios
import http from './http'
import{
	nowplayinglisturl,
	comingsoonlisturl
} from '@/config/url'
// import { nowplayinglisturl } from '../config/url'

// 暴露出
export const nowplayinglistdata=(page=1)=>{
	return http.get(nowplayinglisturl+page)
}

// nowplayinglisturl    "/gateway?cityId=110100&pageSize=30&type=1&k=5155219&pageNum=";