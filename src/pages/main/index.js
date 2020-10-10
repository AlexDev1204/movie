import React, { useEffect, useState, Fragmet, Fragment } from "react";

import Api from "../../helpers/api";

import { Flex, Card, Image } from "./styled";

export const Main = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const movies = await Api.getMovies(page).catch((e) => console.log(e));
    if (movies) setMovies(movies.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const renderMovies = () => {
    return movies.map(({ poster_path, original_title, id }) => (
      <Card key={original_title} to={`/details/${id}`}>
        {poster_path ? (
          <Image alt={poster_path} src={`${Api.imageUrl}${poster_path}`} />
        ) : (
          <div>no image</div>
        )}
      </Card>
    ));
  };

  const onChangePage = (next = true) => () => {
    setPage(next ? page + 1 : page - 1);
  };

  useEffect(() => {
    if (movies.length) {
      getMovies();
    }
  }, [page]);

  if (!movies.length) {
    return <div>load</div>;
  } else {
    return (
      <Fragment>
        <Flex>{renderMovies()}</Flex>
        <button onClick={onChangePage()}>next</button>
        <button onClick={onChangePage(false)}>Prev</button>
      </Fragment>
    );
  }
};
