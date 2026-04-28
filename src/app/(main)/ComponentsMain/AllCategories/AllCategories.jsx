"use client";

import { allCat } from "@/lib/fetchdata";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const AllCategories = () => {
  const pathname = usePathname();
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const allcatData = await allCat();
        const data = allcatData.data.news_category;
        setCategoryData(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading categories...</div>;
  }

  // Extract category_id from pathname (e.g., /categorynews/01 -> 01)
  const getActiveCategoryId = () => {
    const match = pathname.match(/\/categorynews\/(\d+)/);
    return match ? match[1] : null;
  };

  const activeCategoryId = getActiveCategoryId();

  return (
    <div>
      <h2>All categories</h2>
      <div className="mt-3 flex flex-col gap-2">
        {categoryData.map((cat, ind) => {
          const isActive = activeCategoryId === cat.category_id;
          return (
            <ul key={ind}>
              <Link href={`/categorynews/${cat.category_id}`}>
                <li>
                  <button
                    className={`btn w-full transition-all ${
                      isActive
                        ? "btn-primary bg-blue-600 text-white hover:bg-blue-700"
                        : "btn-outline hover:btn-primary"
                    }`}
                  >
                    {cat.category_name}
                  </button>
                </li>
              </Link>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default AllCategories;
