//category by id page fetching datas dynamically fetch data when clicked respective id
export const newsByCategories = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`,
  );
  return res.json();
};

// fetching the api datas allcategories
export const allCat = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  return res.json();
};
