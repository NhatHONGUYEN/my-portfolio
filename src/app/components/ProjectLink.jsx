import React from 'react';
import Link from 'next/link';

const ProjectLink = ({ href, text }) => {
  return (
    <Link href={href} passHref>
      <div className="cta flex items-center group">
        <span className="hover-underline-animation text-black uppercase text-sm tracking-wide pr-4  relative">
          {text}
          <span className="block w-full h-0.5 bg-black scale-x-0 transform origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
        </span>
        <svg
          id="arrow-horizontal"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="10"
          viewBox="0 0 46 16"
          className="transform -translate-x-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-active:scale-90"
        >
          <path
            id="Path_10"
            data-name="Path 10"
            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
            transform="translate(30)"
          ></path>
        </svg>
      </div>
    </Link>
  );
};

export default ProjectLink;
