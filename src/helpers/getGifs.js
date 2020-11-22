export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=3wTWkiTCNGmaq3gXNOiu9MKxZqdCYDmw&q=${encodeURI(category)}&limit=10`;

    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    // console.log(data)

    const gifs = data.map(gif => {
            return {
                id : gif.id,
                title : gif.title,
                url: gif.images.downsized_medium.url
            }
    });
    console.log(gifs);
    return gifs;
}