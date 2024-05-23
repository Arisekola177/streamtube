import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react";
import Link from "next/link";
  

const Genre = async () => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
      },
      next: {
        revalidate: 60 * 60 * 24,
      },
    };
  
    const response = await fetch(url, options);
    const data = await response.json()
  
  return (
    <DropdownMenu>
    <DropdownMenuTrigger>
        <div className="flex items-center space-x-2">
        Genre
        <ChevronDown /> 
        </div>
       
   </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Select a genre</DropdownMenuLabel>
      <DropdownMenuSeparator />
        {
            data.genres.map((genre) => (
                <DropdownMenuItem key={genre.id}>
                   <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                    {genre.name}
                   </Link>
                </DropdownMenuItem> 
            ))
        }
    </DropdownMenuContent>
  </DropdownMenu>
  
  )
}

export default Genre