import MovieCard from '@/components/MovieCard'
import SearchingBar from '@/components/SearchingBar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api'
import { updateSearchCount } from '@/services/appwrite'
import useFetch from '@/services/useFetch'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'

const Search = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  const {
    data: movies,
    dataDetails: details, 
    loading: moviesLoading, 
    refetch: loadMovies,
    reset,
    error: moviesError } = useFetch(() => fetchMovies({
    query: searchQuery}
), false)

  useEffect(() => {
    updateSearchCount(searchQuery, movies[0]);

    const timeoutId = setTimeout(async () => {
      if(searchQuery.trim()){
        await loadMovies();

        if(movies?.length > 0 && movies?.[0])
          await updateSearchCount(searchQuery, movies[0]);
      } else {
        reset()
      }
    }, 500);

    return () => clearTimeout(timeoutId)
  }, [searchQuery]);



  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="flex-1 absolute w-full z-0" resizeMode='cover'/>
      
      <FlatList 
        data={Array.isArray(movies) ? movies : []} 
        renderItem={( { item }) => {
        return <MovieCard {...item} />
      }}
        keyExtractor={(item) => item.imdbID.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16
        }}
        contentContainerStyle={{ paddingBottom: 100}}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20 items-center">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>
            <View className="my-5">
              <SearchingBar 
              placeholder="Search movies..." 
              value={searchQuery}
              onChangeText={(text: string) => setSearchQuery(text)}
              />
            </View>
            {moviesLoading && (
                <ActivityIndicator size="large" color="#0000ff" className='my-3'/>
            )} 
            {moviesError && (
                <Text className='text-xl text-white font-bold'>
                  Error : {moviesError.message}
                <Text className="text-accent">{searchQuery}</Text>
                </Text>)
            // ) && (console.log('Error:', movies.error))
            }

            {!moviesLoading && !moviesError && searchQuery.trim() && movies?.length > 0 && (
              <Text className='text-xl text-white font-bold'>
                Search Results for{' '}
                <Text className="text-accent">{searchQuery}</Text>
              </Text>
            )}

            {/* {!moviesLoading && !moviesError && searchQuery.trim() &&  (
              <Text className='text-xl text-white font-bold'>
                Search Results for{' '}
                <Text className="text-accent">{searchQuery}</Text>
              </Text>
            )} */}
          </>
        }
        ListEmptyComponent={
          !moviesLoading && !moviesError ? (
            <View className='mt-10 px-5'>
                <Text className='text-center text-gray-500'>
                  {searchQuery.trim() ? 'No movies found' : 'Search for a movie'}
                </Text>
            </View>
          ) : null 
        }
      />
    </View>
  )
}

export default Search