import AllCategories from "./ComponentsMain/AllCategories/AllCategories";

const Home = () => {
  return (
    <div className="grid grid-cols-9 mx-auto container gap-3 mt-4">
      <div className=" col-span-2">
        <AllCategories />
      </div>
      <div className="bg-purple-300 col-span-5">All news</div>
      <div className="bg-amber-300 col-span-2">All socials</div>
    </div>
  );
};

export default Home;
