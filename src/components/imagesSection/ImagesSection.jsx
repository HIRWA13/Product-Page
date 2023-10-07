import { useState } from "react"
import item from "../../assets/itemData/item"

const activeStyles = {
   opacity: 0.5
}

export default function ImagesSection() {
    const [cover, setCover] = useState("image-product-1.jpg")
    const imageData = item.data.images

    const images = imageData.map((image, index) => {
        return <img 
                    key={index} 
                    src={`/images/${image}`}
                    className="rounded-lg opacity-90 hover:opacity-50 active:opacity-100 cursor-pointer"
                    onClick={()=> setCover(`${image}`)}
                    style={image === cover ? activeStyles: null}
                    />
    })

    return(
        <>
            <section className="w-full select-none">
                <img src={`/images/${cover}`} className="p-2 rounded-2xl"/>
                <div className="w-full grid grid-cols-4 gap-3 p-2 mt-2">
                    {images}
                </div>
            </section>
        </>
    )
}