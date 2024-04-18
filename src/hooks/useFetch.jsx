import { useState, useEffect } from "react"
const useFetch = (url) =>{
    const [data, setData]=useState(null);
    useEffect(()=>{
      fetch(url, {
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YThmYzZjMmQ4OGZiN2I1ZDU4MDE0OTc3YWQwMDI1ZSIsInN1YiI6IjY1ZmJlODFlMGMxMjU1MDE3ZTBhNzc1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwoVansyGDWn4UeHiB3DhBwd3nkWhH23zeh1HqiQlf4'}
      })
      .then(resp =>
        resp.json()
      ).then(data=>{
        setData(data);
      })
    }, [url])
    return data;
}
export default useFetch;