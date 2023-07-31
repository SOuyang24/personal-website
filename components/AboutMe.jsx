import React from "react";
import userData from "@constants/data";
import SocialLink from "./SocialLink";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800  md:pl-10">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left dark:text-white">
          About Me
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900 text-gray-700 dark:text-gray-200" >
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently working in{" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentCompanyUrl}
              target="_blank"
            >
              {userData.about.currentCompany} ✈️
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any inquery, shoot me an{" "}
                <a
                  target="_blank"
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  email
                </a>{" "}
                and I'll get back as soon as I can.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                New Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm open for new opportunities, If you see me as a good fit, reach me in <a href={`${userData.linkedin}`}  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300" target="_blank">Linkedin</a> or <a href={`mailto:${userData.email}`}  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300" target="_blank">Email</a>. I would love to hear more from your part.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-1 ml-4">
              {/* peerlist */}
              {userData.socialLinks.peerlist && (
              <SocialLink title="PeerList" link={userData.socialLinks.peerlist}  />
              )}
              {/* facebook */}
              {userData.socialLinks.facebook && (<SocialLink title="Facebook" link={userData.socialLinks.facebook}  />)}
               {/* twitter */}
              {userData.socialLinks.twitter && (<SocialLink title="Twitter" link={userData.socialLinks.twitter}  />)}
              {/* github */}
              {userData.socialLinks.github && (<SocialLink title="Github" link={userData.socialLinks.github}  />)}
              {userData.socialLinks.linkedin && (<SocialLink title="Linkedin" link={userData.socialLinks.linkedin}  />)}
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>

            <div className="flex flex-row flex-wrap mt-8">
              <img
                alt="TypeScript"
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/TypeScript.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                alt="JavaScript"
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/JavaScript.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                alt="Java"
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/Java-Dark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img alt="Python" src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/Python-Dark.svg" className="h-20 w-20 mx-4 my-4"  />

              <img
               alt="HTML"
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/HTML.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                alt="CSS"
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/CSS.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                alt="Sass"
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/Sass.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img 
                alt="React" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/React-Dark.svg" 
                className="h-20 w-20 mx-4 my-4" 
              />
              <img 
                alt="NextJS" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/NextJS-Dark.svg" 
                className="h-20 w-20 mx-4 my-4" 
              />
              <img 
                alt="Gatsby" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/Gatsby.svg" 
                className="h-20 w-20 mx-4 my-4" 
              />
              <img 
                alt="Redux" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/Redux.svg" 
                className="h-20 w-20 mx-4 my-4" 
              />
              <img 
                alt="MaterialUI" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/MaterialUI-Dark.svg" 
                className="h-20 w-20 mx-4 my-4" 
              />
              <img 
                alt="TailwindCSS" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/TailwindCSS-Dark.svg" 
                className="h-20 w-20 mx-4 my-4" 
              />
              <img 
                alt="Webpack" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/Webpack-Dark.svg" 
                className="h-20 w-20 mx-4 my-4" 
              />
              <img 
                alt="GraphQL" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/GraphQL-Dark.svg" 
                className="h-20 w-20 mx-4 my-4" 
              />
              <img 
                alt="NodeJS" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/NodeJS-Dark.svg" 
                className="h-20 w-20 mx-4 my-4" 
              />
              <img 
              alt="Django" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/Django.svg" className="h-20 w-20 mx-4 my-4" 
              />
              <img
                alt="Spring" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/Spring-Dark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                alt="Hibernate" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/Hibernate-Dark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                alt="MySQL" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/MySQL-Dark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                alt="PostgreSQL" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/PostgreSQL-Dark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                alt="MongoDB" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/MongoDB.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                alt="Redis" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/Redis-Dark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                alt="AWS" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/AWS-Dark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                alt="Docker" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/Docker.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                alt="Kubernates" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/Kubernetes.svg"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                alt="Jenkins" 
                src="https://raw.githubusercontent.com/SOuyang24/skill-icons-example/main/icons/Jenkins-Dark.svg"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
