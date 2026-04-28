import { newsByCategories } from "@/lib/fetchdata";
import AllCategories from "../../ComponentsMain/AllCategories/AllCategories";
import RightHomeSide from "../../ComponentsMain/RightHome/RightHomeSide";

const CategoryNewsPage = async ({ params }) => {
  const { id } = await params;

  const newsByCat = await newsByCategories(id);

  return (
    <div className="grid grid-cols-9 mx-auto container gap-3 mt-4">
      {/* left side panel */}
      <div className=" col-span-2">
        <AllCategories />
      </div>

      {/* all news */}
      <div className="col-span-5">
        <div>
          <p className="text-2xl font-bold">News By category</p>
          <div className="container mx-auto">
            {newsByCat.data.length > 0 ? (
              newsByCat.data?.map((news, index) => (
                <ul className="border mt-2" key={index}>
                  <li>{news.details}</li>
                </ul>
              ))
            ) : (
              <h2 className="text-2xl font-bold text-center mt-4">
                No-Data Found in this category
              </h2>
            )}
          </div>
        </div>
      </div>
      {/* righ side panel */}
      <div className=" col-span-2">
        <RightHomeSide />
      </div>
    </div>
  );
};

export default CategoryNewsPage;
