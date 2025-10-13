import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const MovieCard = ({Title,imdbID,Poster,Year,Runtime}: Movie) => {


  return (
    <Link href={`/movie/${imdbID}`} asChild>
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
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCard