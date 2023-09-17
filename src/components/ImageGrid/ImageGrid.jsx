import useImageList from "../../hooks/useImageList";
import ImageCard from "../ImageCard/ImageCard";

import './ImageGrid.css'

function ImageGrid(){

    const { imageList, isLoading } = useImageList();

    return (
        <>
            <div className="image-grid">
                {
                    isLoading && <h1>Loading...</h1>
                }
                {imageList.map((imageData) => {
                    return (
                        <ImageCard key={imageData.id} image={imageData.url} id={imageData.id} data={imageData} />
                    )
                })}
            </div>
        </>
    )
}

export default ImageGrid;