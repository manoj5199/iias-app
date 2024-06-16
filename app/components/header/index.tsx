import { useEffect, useRef, useState } from "react";
import { Logo } from "..";
import { NavList } from "../navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "@remix-run/react";

const index = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const nav_ele = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    let click = (e: any) => {
      if (nav_ele.current && !nav_ele.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    addEventListener("click", click, true);

    return () => {
      removeEventListener("click", click, true);
    };
  }, []);

  useEffect(() => {
    let drag = (e: any) => {
      setIsOpen(false);
    };
    window.addEventListener("resize", drag, true);
    return () => {
      removeEventListener("drag", drag);
    };
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="w-10/12 flex justify-between">
      <a id="logo" href="/">
        <Logo />
      </a>
      {isOpen && (
        <div className="absolute top-0 left-0 w-dvw h-dvh bg-black bg-opacity-10 backdrop-blur-sm z-40"></div>
      )}
      <div
        ref={nav_ele}
        className={`h-dvh ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-[280px] md:w-auto transition-all md:-translate-x-0 bg-white md:bg-transparent md:h-auto absolute md:relative left-0 md:left-auto top-0 md:top-auto overflow-hidden md:overflow-visible z-50`}
      >
        <NavList
          data={[
            { title: "about", to: "#about" },
            { title: "courses", to: "#courses" },
            { title: "blogs", to: "#blogs" },
            { title: "gallery", to: "#gallery" },
            { title: "Contact us", to: "#contact" },
          ]}
        ></NavList>
      </div>
      <div className="self-center">
        <button className="md:hidden" onClick={() => setIsOpen((st) => !st)}>
          <RxHamburgerMenu size={35} />
        </button>
      </div>
    </div>
  );
};

export default index;

{
  /* <header className="w-full shadow-2xl flex justify-center">
        <div className="w-10/12 flex justify-between">
          <Logo />
          {isOpen && (
            <div className="absolute top-0 left-0 w-dvw h-dvh bg-black bg-opacity-10 backdrop-blur-sm z-40"></div>
          )}
          <div
            ref={nav_ele}
            className={`h-dvh ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } md:w-auto transition-all md:-translate-x-0 bg-white md:bg-transparent md:h-auto absolute md:relative left-0 md:left-auto top-0 md:top-auto overflow-hidden md:overflow-visible z-50`}
          >
            <NavList
              data={[
                {
                  title: "about us",
                  to: "/about",
                  sub_nav: [
                    {
                      title: "java master class",
                    },
                    {
                      title: "Selenium java for begineors",
                    },
                    {
                      title: "10 - days of java",
                    },
                  ],
                },
                {
                  title: "course",
                  to: "/courses",
                  sub_nav: [
                    {
                      title: "java master class",
                    },
                    {
                      title: "Selenium java for begineors",
                    },
                    {
                      title: "10 - days of java",
                    },
                  ],
                },
                {
                  title: "courses",
                  to: "/courses",
                  sub_nav: [
                    {
                      title: "java master class",
                    },
                    {
                      title: "Selenium java for begineors",
                    },
                    {
                      title: "10 - days of java",
                    },
                  ],
                },
              ]}
            />
          </div>
          <div className="flex items-center">
            <button className="hidden md:block bg-orange-500 capitalize px-6 py-3 rounded-md text-gray-100">
              register Course
            </button>
            <button
              className="md:hidden"
              onClick={() => setIsOpen((st) => !st)}
            >
              <RxHamburgerMenu size={35} />
            </button>
          </div>
        </div>
      </header> */
}
