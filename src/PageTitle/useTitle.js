import { useEffect } from "react"


const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Kids Place`;
    },[title])
}
export default useTitle;