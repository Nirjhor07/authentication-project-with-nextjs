import { newsByCategories } from "@/lib/fetchdata";
import AllCategories from "../../ComponentsMain/AllCategories/AllCategories";
import RightHomeSide from "../../ComponentsMain/RightHome/RightHomeSide";
import NewsCard from "./NewsCard/NewsCard";

const categoryNames = {
  "01": "Politics",
  "02": "Technology",
  "03": "Business",
  "04": "Sports",
  "05": "Entertainment",
  "06": "Health",
  "07": "World",
  "08": "Science",
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const categoryName = categoryNames[id] || "News";

  return {
    title: `${categoryName} News | Dragon News`,
    description: `Latest ${categoryName.toLowerCase()} news and stories. Stay updated with breaking news in ${categoryName.toLowerCase()} on Dragon News`,
    keywords: `${categoryName.toLowerCase()} news, ${categoryName.toLowerCase()} stories, breaking news`,
  };
}

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
                //adding newd card component
                <NewsCard key={index} news={news} />
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
