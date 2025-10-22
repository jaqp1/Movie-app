export const TMDB_CONFIG = {
    BASE_URL: 'http://www.omdbapi.com',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json'
    }
}


export const fetchMovies = async ({ query }: {query: string}) =>    {

    const endpoint = query 
    ? `${TMDB_CONFIG.BASE_URL}/?apikey=${TMDB_CONFIG.API_KEY}&s=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/?apikey=${TMDB_CONFIG.API_KEY}&s=How`;
 
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,

    });

    if(!response.ok){
        throw new Error(`Failed to fetch movies ${response.statusText}`);

    }   

    const res = await response.json();

    // const resDetail = await fetch(`${TMDB_CONFIG.BASE_URL}/?apikey=${TMDB_CONFIG.API_KEY}&i=${res.Search[0].imdbID}`)

    const data = res.Search

    const dataDetails = await Promise.all(
        data.map(async (movie: any) => {
            const resDetail = await fetch(`${TMDB_CONFIG.BASE_URL}/?apikey=${TMDB_CONFIG.API_KEY}&i=${movie.imdbID}`);
            const details = await resDetail.json();
            return details
        })
    );

  


    return {dataDetails, data};

};