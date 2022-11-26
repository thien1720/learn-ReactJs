import {useContext} from "react"
import Context from "./Contact"

export const useStore= () =>{
    const [state, dispatch] = useContext(Context)

    return [state, dispatch]
}