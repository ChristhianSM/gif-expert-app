import React, { useState } from 'react'
import { AddCategory } from './Componentes/AddCategory';
import { GifGrid } from './Componentes/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['Dragon ball', 'One punch Man']
    const [categories, setCategories] = useState(['Dragon ball']);
    // const handleApp = () =>{
    //     // setCategories([...categories, 'HunterxHunter']);
    //     setCategories( categ => [...categ, 'One piece'])
    // }
    return (
        <>
            <h2> GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr />
            <ol>
                {
                    categories.map( category => ( 
                            <GifGrid 
                                key = {category}
                                category = {category}
                            />
                    ))
                }
            </ol>
        </>
    )
}
