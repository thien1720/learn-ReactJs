import {memo } from "react"
function Button ({ onIncrease }) {
    console.log('re-render')
    return (
        <>
        <h1>Hello anh Em đang Học</h1>
        <button onClick={onIncrease}>
            click em đi !!!
        </button>
        </>
    )
}

export default memo(Button)