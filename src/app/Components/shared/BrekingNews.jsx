import Marquee from "react-fast-marquee";

const BrekingNews = () => {
  return (
    <div className="container mx-auto flex gap-4">
      <button className="btn btn-error">Latest News</button>
      <Marquee>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem
          optio, natus quam culpa numquam minima itaque harum atque nostrum
          veniam? Eligendi culpa rerum, sunt maxime numquam porro voluptas
          veritatis.
        </p>
      </Marquee>
    </div>
  );
};

export default BrekingNews;
