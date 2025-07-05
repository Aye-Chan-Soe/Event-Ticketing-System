import { CarouselSlide } from "@/components/Home/CarouselSlide";
import HomeEventList from "@/components/Home/HomeEventList";

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
      {/* Venue List */}
    </div>
  );
};

export default Home;
