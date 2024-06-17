import { useEffect, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";

const index = () => {
  return (
    <ScrollAnimation animateIn="fadeInUp">
      <section
        className="w-dvw flex items-center justify-center tracking-wider leading-6"
        id="about"
      >
        <div className="w-10/12 flex py-10 flex-col">
          <div className="flex flex-col items-center justify-center">
            <h1 className="capitalize lg:text-xl text-orange-400 mb-4">
              about us
            </h1>
            <p className="self-center text-orange-400 font-medium text-xl md:text-2xl lg:text-3xl mb-8">
              Welcome to Integrations
            </p>
          </div>
          <div className="flex flex-row gap-10 md:text-base lg:text-lg mb-10">
            <div className="flex flex-col flex-1 gap-6">
              <p className="text-justify text-sm md:text-base lg:text-xl">
                Your Path to Success in the Civil Services! Integrations is a
                premier IAS coaching academy dedicated to empower aspiring civil
                servants with the knowledge and skills needed to crack the
                toughest examinations. With a proven track record of success, we
                have earned the trust and admiration of hundreds of students who
                have achieved their dreams under our guidance. Our meticulously
                designed curriculum covers all the essential subjects and
                topics, ensuring you have a strong foundation in some areas such
                as General Studies, CSAT, and subjects like Anthropology,
                History, Geography, Polity, Economy, and more. What sets
                Integrations apart is our personalized approach to coaching. We
                understand that every student is unique, with their strengths
                and weaknesses. That's why our faculty members go the extra mile
                to provide individual attention and guidance, identifying your
                areas of improvement and helping you overcome challenges.
                Whether you are a working professional, a college student, or a
                graduate preparing for the exams, Integrations offers flexible
                timings and batch options to suit your schedule. We believe in
                nurturing talent irrespective of background or limitations, and
                our affordable fee structure reflects our commitment to making
                quality education accessible to all. Embark on your journey to
                becoming an IAS officer with Integrations, where excellence is
                nurtured, and success is a way of life. Join us now and unlock
                your true potential. Your dream of serving the nation awaits!
              </p>
            </div>
            {/* <div className="rounded hidden lg:block overflow-hidden lg:w-[500px]">
            <img src={hero_1} className="h-full w-full object-cover"></img>
            </div> */}
          </div>
          <div className="flex flex-col rounded-md bg-slate-50 p-10 mb-10">
            <h1 className="capitalize lg:text-xl text-orange-400 mb-4 self-center">
              our mission
            </h1>
            <p className="text-justify text-sm md:text-base lg:text-xl">
              Empowering future leaders through excellence in education. Our
              academy is committed to providing comprehensive coaching,
              personalized guidance, and a nurturing environment to aspirants,
              equipping them with the knowledge, skills, and values necessary
              for success in the competitive world of civil services. Together,
              we aim to shape a brighter tomorrow.
            </p>
          </div>
          <div className="flex flex-col rounded-md bg-slate-50 p-10 mb-10">
            <h1 className="capitalize lg:text-xl text-orange-400 mb-4 self-center">
              our vision
            </h1>
            <p className="text-justify text-sm md:text-base lg:text-xl">
              To emerge as a significant "social impact organization grooming
              the future generation of our Nation and Society. Our vision is to
              promote a new ecosystem that enables aspirants to excel in exams
              and influence others with their knowledge, skills, and personal
              ethics. Together, we envision a new ecosystem of Moralities,
              Virtues, and wisdom in public life.
            </p>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default index;
