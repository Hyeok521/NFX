import React, { useEffect, userEffect } from "react";
import { movieAction } from "../redux/actions/MovieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRateMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  return (
    <div>
      {popularMovies.result && <Banner movie={popularMovies.results[0]} />}
    </div>
  );
};

export default Home;
