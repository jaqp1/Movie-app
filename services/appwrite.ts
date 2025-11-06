//track the searches made by user
 
import { Client, Databases, ID, Query } from 'react-native-appwrite';


const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;
const SAVED_MOVIES_ID = process.env.EXPO_PUBLIC_APPWRITE_SAVED_ID!;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

const database = new Databases(client);


type FetchResult<DataType, DetailsType> = {
  data: DataType;
  dataDetails: DetailsType;
};

export const updateSearchCount = async (query: string, movie: Movie) => {
    
    try{
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal('searchTerm', query)
        ])

        if(result.documents.length > 0) {
            const existingMovie = result.documents[0];

            await database.updateDocument(
                DATABASE_ID,
                COLLECTION_ID,
                existingMovie.$id,
                {
                    count: existingMovie.count + 1
                }
            )
        } else {
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm: query, 
                movie_id: movie.imdbID,
                count: 1,
                title: movie.Title,
                poster_url: movie.Poster,
            })
        }
    }catch (error) {
        console.log(error);
        throw error;
    }

    // check if a record of that search has already been stored
    // if a document is found incerment the searchCount field
    //if no document is found 
        //create a new document in Appwrite database -> 1
        //console.log(movie.imdbID)
        
}

export const updateSavedMovies = async (movie: Movie) => {
    
    try{
        const result = await database.listDocuments(DATABASE_ID, SAVED_MOVIES_ID, [
            Query.equal('movie_id', movie.imdbID)
        ])
        if(result.documents.length === 0){
            await database.createDocument(DATABASE_ID, SAVED_MOVIES_ID, ID.unique(), {
        title: movie.Title,
        poster_url: movie.Poster,
        movie_id: movie.imdbID
        })
        console.log("Dodaono nowy ulubiony film")
        }else{
            console.log("Ten film został już dodany do listy ulobionych")
        }
        
        } catch (error){
            console.log(error);
            
            throw error;
        }
}


export const getTrendingMovies = async(): Promise<FetchResult<TrendingMovie[], unknown>> => {
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(5),
            Query.orderDesc('count'),
        ])

        return { data: result.documents as unknown as TrendingMovie[], dataDetails: undefined };
    } catch (error){
        console.log(error);
        return { data: [], dataDetails: (error as Error).message ?? String(error) };
    }

}

export const deleteSavedMovie = async (movie: Movie) => {

    const result = await database.listDocuments(DATABASE_ID, SAVED_MOVIES_ID, [
            Query.equal('movie_id', movie.imdbID)
        ])
    try{
        if(result.documents.length > 0){
            await database.deleteDocument(DATABASE_ID, SAVED_MOVIES_ID, result.documents[0].$id)
        }
        console.log("Pomyślnie usunięto film z ulubionych")
    } catch (error){
        console.log(error, "Usuwanie z ulubionych zakończone niepowodzeniem");
        throw error;
    }
}

export const checkIfSaved = async (movie: Movie) => {
    let saved = false
    const result = await database.listDocuments(DATABASE_ID, SAVED_MOVIES_ID, [
    Query.equal('movie_id', movie.imdbID)
    ])
    if(result.documents.length > 0){
        saved = true
        return saved
    }else{
        
        return saved
    }
}
   

