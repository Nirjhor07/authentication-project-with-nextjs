import { newsDetailsByIds } from "@/lib/fetchdata";
import Image from "next/image";
import Link from "next/link";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const newsDetails = await newsDetailsByIds(id);
  const newsDetail = newsDetails.data[0];
  console.log(newsDetail);

  if (!newsDetail) {
    return <div className="text-center py-12 text-red-500">News not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto bg-base-100 border border-base-300 rounded-md shadow-sm p-4 md:p-6">
      {/* Image */}

      <div className="relative w-full  rounded-md overflow-hidden flex justify-center items-center">
        <Image
          src={newsDetail.image_url}
          alt={newsDetail.author.name}
          height={500}
          width={500}
        />
      </div>

      {/* Content */}
      <div className="mt-6 space-y-4">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold leading-snug text-base-content">
          {newsDetail.title}
        </h1>

        {/* Meta */}
        <p className="text-sm text-gray-500 leading-6">
          Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe,
          Joe Biden, Military, News, Security, UK, Ukraine, United States
        </p>

        {/* Description */}
        <p className="text-gray-600 leading-7 text-justify">
          {newsDetail.details}
        </p>

        {/* Button */}
        <div className="pt-4">
          <Link href={`/categorynews/${newsDetail.category_id}`}>
            <button className="btn bg-pink-600 hover:bg-pink-700 text-white border-none rounded-none px-6">
              ← All news in this category
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
