import React, { memo } from 'react'

const SocialLink = ({title, link}) => {
    return (
        <div className="flex flex-row justify-start items-center ">
                <a
                  href={link}
                  className="flex flex-row items-center space-x-4 group"
                  target="_blank"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    {title}
                  </div>
                </a>
        </div>
    )
}

export default memo(SocialLink)