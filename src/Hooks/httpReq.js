import React, {useState, useEffect} from "react";
import axios from "axios";

export function useAxiosGet(url){
    const [request, setRequest] = useState({
        Loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setRequest({
            Loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(Response => {
            setRequest({
                Loading: false,
                data: Response.data,
                error: false
        })
        })
        .catch(() => {
            setRequest({
                Loading: false,
                data: null,
                error: true
            })
        })
    }, [url])

    return request
}