import { useLoaderData } from "@remix-run/react";
import ScrollAnimation from "react-animate-on-scroll";
import { LodeDataType } from "~/routes/_index";

const index = () => {
  const { successCanditates } = useLoaderData<LodeDataType>();
  return (
    <ScrollAnimation animateIn="fadeInUp">
      <section
        className="w-dvw flex items-center justify-center bg-gray-50"
        id="gallery"
      >
        <div className="w-10/12 flex flex-col py-5">
          <div className="flex flex-col gap-10">
            <h1 className="self-center font-semibold text-orange-500 capitalize text-xl">
              Successful canditates
            </h1>
            <div className="flex gap-8 justify-center flex-wrap">
              {successCanditates.map((value, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center mb-4"
                >
                  <div className="h-48 w-48 rounded-full overflow-hidden border border-orange-300 p-2 mb-5">
                    <img
                      src={value.img_url}
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                  <p className="font-semibold text-blue-900 capitalize">
                    {value.name}
                  </p>
                  <p className="font-medium text-gray-500 capitalize">
                    {value.position}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default index;
