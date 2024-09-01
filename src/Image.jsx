import { useState, useEffect } from "react";

const Image = () => {
    const [imageUrl, setImageURL] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    const URLString = "https://jsonplaceholder.typicode.com/photos"

    useEffect(() => {
        fetch(URLString, { mode: "cors",})
            .then((response) => {
                if(response.status >= 400) {
                    throw new Error
                }
                return response.json()
            })
            .then((response) =>  {
                setImageURL(response[0].url)
            })
            .catch(error => setError(error))
            .finally(() => setLoading(false))

    
    }, [])


    
    if(loading) return <p> Loading ....</p>;
    if(error) return <p> A network error was encountered</p>;

    return (
            <>
            <h1>An image</h1>`
            <img src={imageUrl} alt={'Placeholder text'} />
            </>
    )
}

export default Image