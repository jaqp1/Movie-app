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
    : `${TMDB_CONFIG.BASE_URL}/?apikey=${TMDB_CONFIG.API_KEY}&s=inception`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,

    });

    if(!response.ok){
        throw new Error(`Failed to fetch movies ${response.statusText}`);

    }

    const data = await response.json();

    return data.Search || [];

};