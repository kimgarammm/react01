import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import MovieCont from "../includes/MovieCont";
import axios from "axios";
// function Movie() {
//   return (
//     <>
//       <Header />
//       <Contents>
//         <Title title={["Movie", "API"]} />
//         <MovieCont />
//         <Contact />
//       </Contents>
//       <Footer />
//     </>
//   );
// }

class Movie extends React.Component{
  state={
    isLoading : true,
    movies:[],
  }


  getPorts = async( )=>{
    const{
      data:{
        data:{ movies },
      },
    } = await axios.get();
    console.log(movies);
    this.setState({movies : movies});
  };
  componentDidMount(){
    this.getPorts();
  }

  render() {
    const {movies} = this.state;

    return(
      <>
      <Header />
      <Contents>
        <Title title={["Movie", "API"]} />
        <MovieCont movie={movies}/>
        <Contact />
      </Contents>
      <Footer />
    </>
    )

    }


}

export default Movie;
