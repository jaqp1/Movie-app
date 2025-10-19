import { icons } from '@/constants/icons'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const MovieCard = ({Title,imdbID,Poster,Year,Runtime, Ratings}: Movie) => {


  const [error, setError] = useState(false);

  return (
    <Link href={`/movies/${imdbID}`} asChild> 
        <TouchableOpacity className="w-[30%]">
            <Image
                source={
                Poster && !error && Poster !== "N/A"
                ? {uri: Poster}
                : require('../assets/images/unavailable.png')  
                }
                className='w-full h-52 rounded-lg'
                resizeMode='cover'
                onError={() => setError(true)}
            />
            <Text className='text-sm font-bold text-white mt-2' numberOfLines={1}>{Title}</Text>

            <View className="flex-row items-center justify-start gap-x-1">
                <Image source={icons?.star} className='size-4'/>
                  <Text className='text-xs text-white font-bold uppercase'>{parseInt(Ratings?.[0]?.Value,10)/2 || "-"}</Text>
            </View>
            <View className="flex-row items-center justify-between">
              <Text className='text-xs text-light-300 font-bold uppercase'>{Year}</Text>
            </View>
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCard