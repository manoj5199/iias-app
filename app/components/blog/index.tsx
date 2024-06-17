import { useActionData, useLoaderData } from "@remix-run/react";
import ScrollAnimation from "react-animate-on-scroll";
import { LodeDataType } from "~/routes/_index";

const index = () => {
  const blogCategory = ["current affairs", "general studies", "optional"];
  const { blogData } = useLoaderData<LodeDataType>();
  return (
    <ScrollAnimation animateIn="fadeInUp">
      <section
        className="w-dvw flex items-center justify-center mt-10"
        id="blogs"
      >
        <div className="w-10/12 h-max flex flex-wrap justify-between gap-5">
          {blogCategory.map((category, i) => (
            <div
              className="bg-gray-50 min-w-[300px] flex-1 rounded-lg px-6 py-4"
              key={i}
            >
              <h1 className="font-semibold text-slate-900 capitalize mb-6">
                {category}
              </h1>
              <div className="flex max-h-[600px] overflow-scroll no-scrollbar rounded-sm flex-col gap-5 h-max">
                {blogData.map((value, i) => {
                  if (value.category === category) {
                    return (
                      <a
                        href={value.document}
                        download
                        className="bg-gray-200 block rounded-md px-5 py-2"
                        key={i}
                      >
                        <h1 className="capitalize font-semibold text-slate-900">
                          {value.title}
                        </h1>
                        <p>{value.description}</p>
                      </a>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default index;
