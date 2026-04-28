import { newsByCategories } from "@/lib/fetchdata";
import Marquee from "react-fast-marquee";

const BrekingNews = async () => {
  const response = await newsByCategories("07");
  const brekingNews = response.data || [];
  // console.log(brekingNews);

  // Combine all details with a separator
  const allDetails = brekingNews.map((news) => news.details).join(" | ");

  return (
    <div className="container mx-auto flex gap-4">
      <button className="btn btn-error">Latest News</button>
      <Marquee pauseOnHover={true}>{allDetails}</Marquee>
    </div>
  );
};

export default BrekingNews;
