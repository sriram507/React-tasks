import React from "react";
import { Link, useParams } from "react-router-dom";

export default function MovieList() {
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

return (<div>

{movies.map((a,b)=>(<ul>
<li key={b}> <Link to={`/movies/${a.id}`}>{a.movie}</Link></li>
</ul>)
)}
</div>
);
}
