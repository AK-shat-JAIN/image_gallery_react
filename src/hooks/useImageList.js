import axios from "axios";
import { useState, useEffect } from "react";


function useImageList(ID){

    const [imageList, setImageList] = useState([]);

    async function downloadData(){
        if(ID){
            const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${ID}`);
            setImageList(response.data.photo);
            // console.log(response.data.photo);
        }
        else{
            const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?limit=20");
            setImageList(response.data.photos);
            // console.log(response.data.photos);
        }
    }


    useEffect(() => {
        downloadData();
    }, []);

    return { imageList, setImageList};
}

export default useImageList;