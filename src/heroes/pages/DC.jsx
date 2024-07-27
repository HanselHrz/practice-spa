import { HeroList } from "../components";

export const DC = () => {
  const publisher = "DC Comics";

  return (
    <>
      <h1>DC</h1>
      <hr />
      <HeroList publisher={publisher} />
    </>
  );
};
