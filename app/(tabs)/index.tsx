import MovieCard from "@/components/MovieCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";



export default function Index() {

  const router = useRouter();

  const {
    data: movies,
    dataDetails: details,
    loading: moviesLoading, 
    error: moviesError } = useFetch(() => fetchMovies({
    query: ''}
))

//   useEffect(() => {
//   (async () => {
//     const data = await fetchMovies({ query: 'How' });
//     console.log(data);
//   })();
// }, []);



 const fullMovies = movies?.map((movie: any, index: number) => ({
    ...movie,
     Ratings: details?.[index].Ratings,
     Plot: details?.[index].Plot,
     Director: details?.[index].Director,
  })) || [];
 

  return (
    <View className="flex-1 bg-primary">
        <Image source={images.bg} className="absolute w-full z-0" />

        <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: "100%", paddingBottom: 10}}>
          <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

          {moviesLoading ? (
            <ActivityIndicator
              size="large"
              color="#0000ff"
              className="mt-10 self-center"
            />
          ) : moviesError ? (
            <Text>Error: {moviesError.message}</Text>
          ) : (
            <View className="flex-1 mt-5">
              {/* <SearchingBar 
                  onPress={() => router.push("/search")}
                  placeholder="Search for a movie" value={""} 
                   onChangeText={function (text: string): void {
                    throw new Error("Function not implemented.");
                  } }              /> */}
              <>
                <Text className="text-lg text-white font-bold mt-5 mb-3">Latest movies</Text>

                <FlatList 
                  data={fullMovies}
                  renderItem={({item}) => (
                    <MovieCard 
                      {... item}
                    />
                  )}
                  keyExtractor={(item) => item.imdbID.toString()}
                  numColumns={3}
                  columnWrapperStyle={{
                    justifyContent: 'flex-start',
                    gap: 20,
                    paddingRight: 5,
                    marginBottom: 10
                  }}
                  className="mt-2 pb-32"
                  scrollEnabled={false}
                />
              </>
            </View>
          )}

          
        </ScrollView>
    </View>
  );
}
