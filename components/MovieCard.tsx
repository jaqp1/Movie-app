import { icons } from '@/constants/icons'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const MovieCard = ({Title,imdbID,Poster,Year,Runtime, Ratings}: Movie) => {

  //console.log("Ratings:", Ratings); 

  return (
    <Link href={`/movies/${imdbID}`} asChild> 
        <TouchableOpacity className="w-[30%]">
            <Image
                source={{
                uri: Poster
                ? `${Poster}`
                : 'https://placeholder.co/600x400/1a1a1a/ffffff.png'
                }}
                className='w-full h-52 rounded-lg'
                resizeMode='cover'
            />
            <Text className='text-sm font-bold text-white mt-2'>{Title}</Text>

            <View className="flex-row items-center justify-start gap-x-1">
                <Image source={icons.star} className='size-4'/>
                  <Text className='text-xs text-white font-bold uppercase'>{parseInt(Ratings?.[0]?.Value,10)/2 || "-"}</Text>
            </View>
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCard