import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';

const TrendingCard = ({ movie: {movie_id, title, poster_url}, index }: TrendingCardProps) => {

    const [error, setError] = useState(false);

  return (
    <Link href={`/movies/${movie_id}`} asChild>
        <TouchableOpacity className='w-32 relative pl-5'>
            <Image
                source={poster_url && !error && poster_url !== "N/A" 
                    ? {uri: poster_url} 
                    : require('../assets/images/unavailable.png')}
                className="w-32 h-48 reunded-lg"
                resizeMode="cover"
                onError={() => setError(true)}
            />
        </TouchableOpacity>
    </Link>
  )
}

export default TrendingCard