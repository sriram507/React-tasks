import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import display from "../functionalComps/pureComponents/display";
import axios from "axios";
import { Spinner } from "react-bootstrap";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  // const movies = [
  //   { id: "1", movie: "pusha", cast: ["AA", "RASHMIKA", "SUKUMAR", "FAFA"] },
  //   { id: 2, movie: "DEVERA", cast: ["NTR", "JAHNAVI", "SHIVA", "PRAKASHRAJ"] },
  //   { id: 3, movie: "OG", cast: ["PSPK", "PRIYANKA", "SUJITH", "PRABHAS"] },
  //   {
  //     id: 4,
  //     movie: "SALLAR",
  //     cast: ["PRABHAS", "SHRUTHI", "PRASANTHNEEL", "PRUDHVIRAJ"],
  //   },
  //   {
  //     id: "5",
  //     movie: "kanguva",
  //     cast: ["surya", "disha", "karthi"],
  //   },
  // ];

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) =>
       setMovies(res.data))
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
     
     {movies.length>0?(movies.map((a, b) => (  
    <ul key={a.id}>
  <li>
    <Link to={`/movies/${a.id}`}>{a.title}</Link>
  </li>
</ul>

      ))):<Spinner/>}
    </div>
  );
}
