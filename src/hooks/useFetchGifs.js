import {useState, useEffect} from 'react';
import {getGifs} from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    /**
     * Para que solo se ejecute cada vez que cambie la categoría
     */
    useEffect(() => {

        getGifs(category)
            .then(imgs => {
                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false
                    });
                }, 2000);
            });

    }, [category]);

    return state;
}
