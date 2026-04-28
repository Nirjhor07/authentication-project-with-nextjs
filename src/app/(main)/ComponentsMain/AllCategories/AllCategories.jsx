import { allCat } from "@/lib/fetchdata";
import Link from "next/link";

const AllCategories = async () => {
  const allcatData = await allCat();
  const data = allcatData.data.news_category;
  // console.log(data);
  return (
    <div>
      <h2>All categories</h2>
      <div className=" mt-3 flex flex-col gap-2">
        {data.map((cat, ind) => (
          <ul key={ind}>
            {/* need to update the link route dynamically */}
            <Link href={`/categorynews/${cat.category_id}`}>
              <li>
                <button className="btn w-full">{cat.category_name}</button>
              </li>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
