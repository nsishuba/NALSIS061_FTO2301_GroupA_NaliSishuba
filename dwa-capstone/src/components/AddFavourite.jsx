import blackHeart from "../images/blackHeart.png"
import redHeart from "../images/redHeart.png"

const AddFavourite = (prop) => {
    const { isFilled, handleFavourite } = prop
    const likeIcon = isFilled ? redHeart : blackHeart
    return (
        <>
            <img onClick={handleFavourite} src={likeIcon} height={23}/> 
        </>
    )
}

export default AddFavourite