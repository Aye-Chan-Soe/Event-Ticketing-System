import { CarouselSlide } from "@/components/Home/CarouselSlide";
import HomeEventList from "@/components/Home/HomeEventList";
import TotalCountContainer from "@/components/Home/TotalCountContainer";

const Home = () => {
  return (
    <div>
      {/* Carousel Slide */}
      <div className="mb-20">
        <CarouselSlide />
      </div>
      {/* Event List */}
      <HomeEventList />
      {/* Total Details */}
      <TotalCountContainer />
      {/* Venue List */}
    </div>
  );
};

export default Home;
