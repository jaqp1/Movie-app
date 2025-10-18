import MovieCard from '@/components/MovieCard'
import SearchingBar from '@/components/SearchingBar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api'
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
    const func = async () => {
      if(searchQuery.trim()){
        await loadMovies()
      } else {
        reset()
      }
    }
    func();
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
              <Text className="text-red-500 px-5 my-3">
                Error: {moviesError.message}
              </Text>
            )}

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
      />
    </View>
  )
}

export default Search