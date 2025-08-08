import React from 'react';
import { useParams } from 'react-router-dom';



export default function MovieDetails() {
  const movies = [
    { id: "1", movie: "pusha", cast: ["AA", "RASHMIKA", "SUKUMAR", "FAFA"] },
    { id: 2, movie: "DEVERA", cast: ["NTR", "JAHNAVI", "SHIVA", "PRAKASHRAJ"] },
    { id: 3, movie: "OG", cast: ["PSPK", "PRIYANKA", "SUJITH", "PRABHAS"] },
    {
      id: 4,
      movie: "SALLAR",
      cast: ["PRABHAS", "SHRUTHI", "PRASANTHNEEL", "PRUDHVIRAJ"],
    },
    {
        id:"5",
        movie:"kanguva",
        cast:["surya","disha","karthi"]
    }
  ];

const { id } = useParams();
const movie = movies.find((a) => String(a.id) === id );

if(!movie){return(<h1> movie not found</h1>)}
  return (
  

    <div>
        <h1>{movie.movie}</h1>
    </div>
  
//   return (
//  <div>
//     {movies.map((a,b)=>(<ul>
//         <li key={b}> <Link to={`/movies/${a.id}`}> {a.movie}</Link></li>
//     </ul>)
// )}
//     </div>
  );
}
