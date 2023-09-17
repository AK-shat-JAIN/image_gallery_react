//import css
import { Link } from 'react-router-dom';
import './ImageCard.css'

function ImageCard({ image, id, imageData }){
    return (
        <div className="outer-pic">
            <Link to={`/image/${id}`}>                
                <img className="pic" src={image} />
            </Link>
        </div>
    )
}

export default ImageCard;