import type {
  ActionFunctionArgs,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  About,
  Achievements,
  Blogs,
  Contact,
  ContactForm,
  Courses,
  Footer,
  Header,
  Hero,
} from "~/components";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

import { json, useLoaderData, useNavigate } from "@remix-run/react";
import {
  blogs,
  courses as coursesDB,
  customers,
  gallery,
} from "~/database/index.server";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Integrations IAS" },
    { name: "description", content: "Welcome to Integrations IAS!" },
  ];
};
export type LodeDataType = {
  successCanditates: [{ name: string; position: string; img_url: string }];
  facultiesData: [{ name: string; position: string; img_url: string }];
  blogData: [
    { title: string; description: string; document: string; category: string }
  ];
  courses: [
    { title: string; description: string; category: string; duration: string }
  ];
};

export const loader: LoaderFunction = async ({}) => {
  const galleryData = await gallery.find().toArray();
  const blogData = await blogs.find().toArray();
  const courses = await coursesDB.find().toArray();
  const successCanditates = galleryData.filter(
    (value) => value.type === "candidate"
  );
  const facultiesData = galleryData.filter((value) => value.type === "faculty");

  return json({ successCanditates, facultiesData, blogData, courses });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const data = await request.json();

  if (data.type === "contact") {
    const { firstname, lastname, email, subject } = data.data;

    if (!firstname || !lastname || !email || !subject) {
      return json({ error: false, message: "invalid input" });
    }
    let id = (await customers.insertOne(data.data)).insertedId;
    console.log(id);
    return json({ error: false, message: "success", data: data.data });
  }
  // console.log(data);

  return null;
};

export default function Index() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      <ContactForm overlay={true} />
      <section className="flex h-14 w-full bg-slate-800 items-center justify-center">
        <div className="w-10/12 flex items-center justify-between text-gray-100 text-xs sm:text-sm lg:text-base">
          <p className="flex gap-2 items-center">
            <MdOutlineMailOutline />
            integrationsacademy@gmail.com
            <span>|</span> <FaPhone /> 9940079880{" "}
            <span className="hidden md:block">/</span> 9382154124
          </p>
        </div>
      </section>
      <header className="flex justify-center">
        <Header />
      </header>
      <main>
        <Hero />
        <Blogs />
        <Courses />
        <About />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
