import { redirect } from "next/navigation";

export const metadata = {
  title: "Home | Dragon News",
  description:
    "Welcome to Dragon News - Your source for latest breaking news and stories from around the world",
};

const Home = () => {
  return redirect("/categorynews/01");
};

export default Home;
