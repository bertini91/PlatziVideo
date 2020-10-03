import {useState, useEffect} from "react";

const useInitialState = (API) => {
    console.log(API)
    /* const [videos, setVideos] = useState([]); */
    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
    
    useEffect(()=>{
      fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data))
    }, []);
    console.log(videos)
    return videos;
}

export default useInitialState;