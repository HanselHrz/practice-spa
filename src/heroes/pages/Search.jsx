import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroByName } from "../helpers";

export const Search = () => {
  const navigate = useNavigate(); //Obtener la función para navegar
  const location = useLocation(); //Obtener la ubicación actual

  const query = queryString.parse(location.search);
  const { q = "" } = query;
  const heroes = getHeroByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  console.log(heroes);
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>

      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="search a hero"
              name="searchText"
              autoComplete="off"
              className="form-control "
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn m-1 btn-block btn-outline-primary">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div
            className="animate__animated animate__fadeIn alert alert-info"
            style={{ display: showSearch ? "" : "none" }}
          >
            <p>Search a hero</p>
          </div>

          <div
            className="animate__animated animate__fadeIn alert alert-danger"
            style={{ display: showError ? "" : "none" }}
          >
            <p>
              No hero with <b>{q}</b>
            </p>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
