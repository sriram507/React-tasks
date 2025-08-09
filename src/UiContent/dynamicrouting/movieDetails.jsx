import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "../profile/profileCard";
import axios from "axios";
import { Spinner } from "react-bootstrap";

export default function MovieDetails() {
  // const movies = [
  //   { id: "1", 
  //     movie: "pusha",
  //     cast: ["AA", "RASHMIKA", "SUKUMAR", "FAFA"],
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3ZD3eQoivQ0xJ4p_ILshOk74FwZ8NS-Kmw&s"

  //    },
  //   { id: 2, 
  //     movie: "DEVERA",
  //      cast: ["NTR", "JAHNAVI", "SHIVA", "PRAKASHRAJ"], 
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKFXnQPm3COQ9nPZiMmbhvfo-sAHvBozV_A&s"
  //     },
  //   { id: 3,
  //     movie: "OG",
  //     cast: ["PSPK", "PRIYANKA", "SUJITH", "PRABHAS"],
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3fGg33KuieCuoDec57yDDJCiFcNmSLMBSwg&s"
  //   },
  //   {
  //     id: 4,
  //     movie: "SALLAR",
  //     cast: ["PRABHAS", "SHRUTHI", "PRASANTHNEEL", "PRUDHVIRAJ"],
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTVW7qIPLFJ_alveDA1xU-P0mGXH0CF98Fw&s"
  //   },
  //   {
  //     id: "5",
  //     movie: "kanguva",
  //     cast: ["surya", "disha", "karthi"],
  //     image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytolQiIqEqIeVD2P8XXtepxWmZLyPNz5FuA&s"
  //   },
  // ];

const[movies,setMovies]=useState([])

useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) =>
       setMovies(res.data))
  }, []);

  const { id } = useParams();
  const movie = movies.find((a,b) => String(a.id) === id);
  // console.log(movie)
  if (!movie) {
    return(<Spinner/>);
  }
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      {/* <h1>{movie.movie}</h1>
      <img src={movie.image} hright="200" width="200" alt= {movie.movie} /> */}
    <ProfileCard img={movie.image} title={movie.movie}/>
    </div>
  );
}
