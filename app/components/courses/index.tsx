import { useLoaderData } from "@remix-run/react";
import { LodeDataType } from "~/routes/_index";

const index = () => {
  const { courses } = useLoaderData<LodeDataType>();
  return (
    <section className="w-dvw flex items-center justify-center" id="courses">
      <div className="w-10/12 py-10 flex flex-col">
        <h1 className="capitalize font-semibold text-xl text-orange-500 self-center mb-5">
          courses
        </h1>
        <div className="w-full flex flex-row gap-5 flex-wrap">
          {courses.map((value, i) => {
            let des = value.description;
            return (
              <div
                key={i}
                className="w-[500px] h-max bg-white shadow rounded-md p-5 flex flex-col"
              >
                <div>
                  <h1 className="text-lg font-medium text-orange-500 capitalize">
                    {value.title}
                  </h1>
                  <p className="capitalize text-gray-600">
                    duration: {value.duration}
                  </p>
                </div>
                <p>{des}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default index;
