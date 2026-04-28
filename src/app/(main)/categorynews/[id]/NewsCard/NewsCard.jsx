import Image from "next/image";
import { FaEye, FaFire, FaStar, FaClock, FaShare } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

const NewsCard = ({ news }) => {
  const publishedTime = news.published_date
    ? formatDistanceToNow(new Date(news.published_date), { addSuffix: true })
    : "Recently";

  return (
    <div className="group card bg-white shadow-md hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden mb-6 border border-gray-100 hover:border-blue-200">
      {/* Image Section with Overlay */}
      <div className="relative overflow-hidden h-72 bg-gray-200">
        <Image
          src={news.image_url}
          alt={news.title || "News Article"}
          height={400}
          width={600}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {news.category_id === "01" && "Politics"}
            {news.category_id === "02" && "Technology"}
            {news.category_id === "03" && "Business"}
            {news.category_id === "04" && "Sports"}
            {news.category_id === "05" && "Entertainment"}
            {news.category_id === "06" && "Health"}
            {news.category_id === "07" && "World"}
            {news.category_id === "08" && "Science"}
          </span>
        </div>

        {/* Status Badges */}
        <div className="absolute top-4 right-4 flex gap-2">
          {news.others_info?.is_trending && (
            <span className="badge badge-error text-white gap-1">
              <FaFire /> Trending
            </span>
          )}
          {news.others_info?.is_todays_pick && (
            <span className="badge badge-warning text-white gap-1">
              <FaStar /> Pick
            </span>
          )}
        </div>

        {/* Rating Badge */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-lg flex items-center gap-1">
          <FaStar className="text-yellow-500" />
          <span className="text-sm font-bold">
            {news.rating?.number || "N/A"}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col h-full">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors cursor-pointer">
          {news.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {news.details}
        </p>

        {/* Author & Date Info */}
        <div className="flex items-center gap-3 py-3 border-t border-b border-gray-200">
          {/* Author Avatar */}
          <div className="flex items-center gap-2 flex-1">
            {news.author?.img ? (
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
                <Image
                  src={news.author.img}
                  alt={news.author.name || "Author"}
                  height={40}
                  width={40}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
            )}

            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-800 truncate">
                {news.author?.name || "News Wire"}
              </p>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <FaClock size={12} />
                <span>{publishedTime}</span>
              </div>
            </div>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-xs text-gray-600 whitespace-nowrap">
            <FaEye size={14} />
            <span>{(news.total_view / 1000).toFixed(1)}k</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-between items-center pt-3 gap-2">
          <button className="btn btn-sm btn-ghost gap-1 text-xs">
            <FaShare size={14} />
            Share
          </button>
          <Link href={`/newsdetails/${news._id}`}>
            <button className="btn btn-sm btn-primary text-white">
              Read Full Story
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
