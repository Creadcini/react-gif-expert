import React, {useState} from 'react';
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Digimon']);

    //Cuando estaba asociado a un botón
    //const handleAdd = () => {
    //    setCategories([...categories, 'One Punch Man']);
    //    // Otra forma
    //    // setCategories(items => [...items, 'One Punch Man']);
    //};

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map((category, index) => (
                        <GifGrid key={category} category={category} />)
                    )
                }
            </ol>
        </>
    );
};

export default GifExpertApp;
