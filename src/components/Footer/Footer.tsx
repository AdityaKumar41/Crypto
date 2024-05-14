import React, { useContext } from 'react'
import DarkModeContext from "../../store/DarkModeContext";
import { NewsLatter } from '../Form/NewsLatter';
const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <footer className={`flex justify-center px-4 text-gray-800 ${darkMode ? 'dark bg-black' : 'bg-white'} dark:text-white dark:bg-gray-900 sticky`}>
    <div className="container px-6 py-6">
        <h1 className={`text-lg font-bold text-center lg:text-2xl ${darkMode ? 'dark' : ''} dark:text-white`}>
            Join 31,000+ other and never miss <br/> out on new tips, tutorials, and more.
        </h1>

        <NewsLatter/>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col items-center justify-between md:flex-row">
            <a href="#">
                <img className="w-auto h-7" src="https://campus-crypto.s3.eu-north-1.amazonaws.com/favicon-logo.png" alt=""/>
            </a>

            <div className="flex mt-4 md:m-0">
                <div className="-mx-4">
                    <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">About</a>
                    <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Blog</a>
                    <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">News</a>
                    <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Contact</a>
                </div>
            </div>
        </div>
    </div>
</footer>
    </>
  )
}

export default Footer;
