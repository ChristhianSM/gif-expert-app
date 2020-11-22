import React from 'react'
import { useFetchGrid } from '../hooks/useFetchGrid'

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([])
    const {data:images, loading} = useFetchGrid(category);
    console.log(loading)

    return (
        <>
            <h2 className = "animate__animated animate__fadeIn">{category}</h2>
            <hr></hr>
            {
                loading && <p className = "animate__animated animate__flash">Loading ...</p>
            }
            <div className = "card-grid">   
                    {
                        images.map(image => 
                            (<GifGridItem 
                                key = {image.id}
                                {...image}
                            />)
                        )
                    }
            </div>
        </>
    )
}
