// fetching the api datas allcategories
const allCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  return res.json();
};

const AllCategories = async () => {
  const allcatData = await allCategories();
  const data = allcatData.data.news_category;
  //   console.log(data);
  return (
    <div>
      <h2>All categories</h2>
      <div className=" mt-3 flex flex-col gap-2">
        {data.map((cat, ind) => (
          <ul key={ind}>
            <li>
              <button className="btn w-full">{cat.category_name}</button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
