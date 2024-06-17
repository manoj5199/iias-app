import { useNavigate } from "@remix-run/react";
import { Carousel } from "react-responsive-carousel";
import hero_1 from "~/assets/hero_1.jpg";
import hero_2 from "~/assets/hero_2.jpg";
import hero_3 from "~/assets/hero_3.jpg";

const images = [hero_1, hero_2, hero_3];

function index() {
  const navigate = useNavigate();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="w-dvw relative flex items-center justify-center">
      <div className="md:w-10/12 flex flex-col lg:flex-row gap-2">
        <div className="hiddden lg:block lg:w-[30%] overflow-hidden">
          <Carousel
            axis="horizontal"
            autoPlay={true}
            showIndicators={true}
            showThumbs={false}
            showStatus={false}
            interval={3000}
            infiniteLoop={true}
            stopOnHover={true}
            swipeable={false}
            onClickItem={() => {
              navigate("#contact");
            }}
          >
            <img
              src={hero_1}
              className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full object-fill"
            />
            <img
              src={hero_1}
              className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full object-cover"
            />
          </Carousel>
        </div>
        <div className="w-full lg:w-[70%]">
          <Carousel
            axis="horizontal"
            autoPlay={true}
            showIndicators={true}
            showThumbs={false}
            showStatus={false}
            interval={3000}
            infiniteLoop={true}
            swipeable={false}
            onClickItem={() => {
              navigate("#contact");
            }}
          >
            {images.map((img, i) => (
              <img
                src={img}
                key={i}
                className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default index;
