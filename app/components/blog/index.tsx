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
              className={`bg-gray-50 min-w-[300px] flex-1 rounded-lg px-6 py-4 ${
                category === blogCategory[0]
                  ? "bg-amber-50"
                  : category === blogCategory[1]
                  ? "bg-sky-50"
                  : "bg-purple-50"
              }`}
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
                        className={`block rounded-md px-5 py-2 ${
                          category === blogCategory[0]
                            ? "bg-amber-100 hover:bg-amber-200"
                            : category === blogCategory[1]
                            ? "bg-sky-100 hover:bg-sky-200"
                            : "bg-purple-100 hover:bg-purple-200"
                        }`}
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
