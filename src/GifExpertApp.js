import React, { useState } from 'react'
import { AddCategory } from './Componentes/AddCategory';
import { Footer } from './Componentes/Footer';
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
            <h1> GifExpertApp</h1>
            <AddCategory setCategories = {setCategories}/>
            
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

            <Footer />
        </>
    )
}
