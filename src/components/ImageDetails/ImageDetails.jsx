import { useParams } from "react-router-dom";
import ImageCard from "../ImageCard/ImageCard";
import useImageList from "../../hooks/useImageList";

import './ImageDetails.css'


function ImageDetails(){
    const {id} = useParams();
    const { imageList, isLoading } = useImageList(id);

    return(
        <div className="container">
            {
                isLoading && <h1 style={{color:"white"}}>Loading...</h1>
            }
            <img className="img" src={imageList.url} />
            <div className="text">
                <h1 className="title">{imageList.title}</h1>
                <p className="description">{imageList.description}</p>
            </div>
        </div>
    )
}

export default ImageDetails;