import { icons } from '@/constants/icons'
import { fetchMovieDetails } from '@/services/api'
import useFetchDetails from '@/services/useFetchDetails'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const MovieDetails = () => {

  const { id } = useLocalSearchParams(); 

  const idOnce = id.toString();
 
  const {
    data: movie,
    loading: moviesLoading, 
    error: moviesError } = useFetchDetails(() => fetchMovieDetails({id: idOnce}))

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
          {movie 
          ? <Image 
              source={{ uri: movie.Poster }} 
              className="w-full h-[550px]"          
            />
          : <Text>Loading...</Text>}
        </View>
        <View className='flex-col items-start justify-center mt-5 px-5'>
          <Text className="text-white font-bold text-xl">{movie?.Title}</Text>
          <View className='flex-row items-center gap-x-1 mt-2'>
            <Text className='text-light-200 text-sm'>{movie?.Year}</Text>
            <Text className='text-light-200 test-sm'>{movie?.Runtime}</Text>
          </View>
          <View className='flex-row items-center bg-dark-100 padding-x-2 py-1 rounded-md gap-x-1 mt-2'>
            <Image 
              source={icons.star}
              className='size-4' 
            />
            <Text className='text-white font-bold text-sm'>
              {`${parseInt(movie?.imdbRating,10)/2}/10` || "-"}
            </Text>

          </View>
        </View>


        
      </ScrollView>
    </View>
  )
}

export default MovieDetails