import { fetchMovieDetails } from '@/services/api'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Image, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const MovieDetails = () => {

  const { id } = useLocalSearchParams(); 

  const idOnce = id.toString();
 
 
  
    const data = fetchMovieDetails({id:'tt1375666'})
    console.log(data)
  //console.log(movie);

  return (
    <View className='bg-primary flex-1'>
      <ScrollView contentContainerStyle={{
        paddingBottom: 80
      }}>
        <View>
          <Image 
            // source={{ uri: movies?.Poster }} 
            className="w-full h-[500px]"
            />
        </View>

      </ScrollView>
    </View>
  )
}

export default MovieDetails