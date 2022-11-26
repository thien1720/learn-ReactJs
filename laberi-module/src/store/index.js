// Action constants

import counterSlice from "./reducer/couter.slice"
import {configureStore} from '@reduxjs/toolkit'
// const store = createStore(counterSlice)

const store = configureStore({
    reduder:{
        counter : counterSlice
    }
})
// console.log(store.getState())

//get state : trả về trạng thái hiện Tại
// subcribe đăng ký hàm chạy thay đổi trạng thái
// dispatch kích hoạt action on

export default store