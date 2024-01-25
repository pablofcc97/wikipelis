import { useState, useEffect } from "react"

export const useGetData = (callback) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect( ()=>{
        setLoading(true)
        callback()
            .then(response=>setData(response))
            .finally(() => setLoading(false))
    },[])

    return {data, loading}
}
