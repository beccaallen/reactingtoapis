import React, { useState, useEffect } from "react";
import Hero from "./components/hero";

const App = () => {
  // film
  const [films, setFilms] = useState([]);
  const [filmsLoaded, setFilmsLoaded] = useState(false);
  const handleFilmLoad = () => {
    setFilmsLoaded(true);
    setPeopleLoaded(false);
  };
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => setFilms(data));
  }, [filmsLoaded]);
  // people
  const [people, setPeople] = useState([]);
  const [peopleLoaded, setPeopleLoaded] = useState(false);
  const handlePeopleLoad = () => {
    setPeopleLoaded(true);
    setFilmsLoaded(false);
  };
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, [peopleLoaded]);

  if (filmsLoaded) {
    return (
      <main className="container">
        <div className="nav my-4 align-items-center justify-content-flex-start">
          <div className="col-3">
            <h1 role="button" onClick={() => window.location.reload(true)}>
              Studio Ghibli
            </h1>
          </div>
          <div className="col-9">
            <button
              className="btn btn-outline-secondary m-4"
              role="button"
              onClick={handleFilmLoad}
            >
              Films
            </button>
            <button
              className="btn btn-outline-secondary m-4"
              role="button"
              onClick={handlePeopleLoad}
            >
              People
            </button>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          {films.map((film) => (
            <div className="col-md-5 d-flex align-content-space-between" key={`film-card-${film.id}`}>
              <div className="card shadow my-4">
                <div className="card-body p-5">
                  <h4 className="card-title">{film.title}</h4>
                  <p className="card-subtitle">{film.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  } else if (peopleLoaded) {
    return (
      <main className="container people">
        <div className="nav my-4 align-items-center justify-content-flex-start">
          <div className="col-3">
            <h1 role="button" onClick={() => window.location.reload(true)}>
              Studio Ghibli
            </h1>
          </div>
          <div className="col-9">
            <button
              className="btn btn-outline-secondary m-4"
              role="button"
              onClick={handleFilmLoad}
            >
              Films
            </button>
            <button
              className="btn btn-outline-secondary m-4"
              role="button"
              onClick={handlePeopleLoad}
            >
              People
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          {people.map((people) => (
            <div className="col-md-5" key={`people-card-${people.id}`}>
              <div className="card shadow my-2">
                <div className="card-body p-5">
                  <h4 className="card-title">{people.name}</h4>
                  <p className="card-subtitle">
                    {" "}
                    <em>Age : </em>
                    {people.age}
                  </p>
                  <p className="card-subtitle">
                    {" "}
                    <em> Gender : </em> {people.gender}
                  </p>
                  <a
                    className="card-subtitle"
                    target="_blank"
                    href={people.url}
                  >
                    Full Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  } else {
    return (
      <main className="container">
        <div className="nav my-4 align-items-center justify-content-flex-start">
          <div className="col-3">
            <h1 role="button" onClick={() => window.location.reload(true)}>
              Studio Ghibli
            </h1>
          </div>
          <div className="col-9">
            <button
              className="btn btn-outline-secondary m-4"
              role="button"
              onClick={handleFilmLoad}
            >
              Films
            </button>
            <button
              className="btn btn-outline-secondary m-4"
              role="button"
              onClick={handlePeopleLoad}
            >
              People
            </button>
          </div>
         
        <Hero />
        </div>
      </main>
    );
  }
};

export default App;
