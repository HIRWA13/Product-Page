import { useState } from "react"
import item from "../../assets/itemData/item"

export default function ImagesSection() {
    const [cover, setCover] = useState("image-product-1.jpg")
    const imageData = item.data.images

    const images = imageData.map((image, index) => {
        return <img 
                    key={index} 
                    src={`/images/${image}`}
                    className="rounded-lg opacity-90 hover:opacity-50 active:opacity-100"
                    onClick={()=> setCover(`${image}`)}
                    />

    })

    return(
        <>
            <section className="w-2/4">
                <img src={`/images/${cover}`} className="p-2 rounded-2xl"/>
                <div className="w-full grid grid-cols-4 gap-3 p-2 mt-2">
                    {images}
                </div>
            </section>
        </>
    )
}