import { getDiscoverMovies } from "@/lib/getMovies";
import CarouselHero from "./CarouselHero";


const CarouselBanner =async ({id, keywords}) => {
    const movies = await getDiscoverMovies(id, keywords);
  return (
    <CarouselHero movies={movies}  />
  )
}

export default CarouselBanner