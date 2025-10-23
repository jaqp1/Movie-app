import { fetchMovieDetails } from '@/services/api'
import useFetchDetails from '@/services/useFetchDetails'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Image, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const MovieDetails = () => {

  const { id } = useLocalSearchParams(); 

  const idOnce = id.toString();
 
  const {
    data: movie,
    loading: moviesLoading, 
    error: moviesError } = useFetchDetails(() => fetchMovieDetails({id: 'tt1375666'}))

  console.log(movie)

//       useEffect(() => {
//   (async () => {
//     const data = await fetchMovieDetails({ id: 'tt1375666' });
//     console.log(data);
//   })();
// }, []);

  return (
    <View className='bg-primary flex-1'>
      <ScrollView contentContainerStyle={{
        paddingBottom: 80
      }}>
        <View>
          <Image 
            source={{ uri: movie.Poster }} 
            className="w-full h-[500px]"
            />
        </View>

      </ScrollView>
    </View>
  )
}

export default MovieDetails