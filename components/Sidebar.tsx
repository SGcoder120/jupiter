import { useRouter } from 'next/router';
import React from 'react';

const mainCats = ['Home', 'History', 'Liked', 'Events'] as const;
const moreCats = ['Settings', 'About', 'Feedback'] as const;

type union = (typeof mainCats)[number] | (typeof moreCats)[number];
const routeMap: {
  [key in union[number]]: string;
} = {
  Home: '/',
  History: '/history',
  Liked: '/liked',
  Events: '/events',
};

// Keep in mind that in all routes we need pl-72 for the sidebar
const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="h-full w-72 bg-slate-100 absolute z-10">
      <div className="w-full py-10">
        <h1 className="text-2xl font-medium text-center">Jupiter</h1>
      </div>
      <div className="w-full py-5 pl-5">
        <h1 className="text-xs font-light capitalize text-slate-500">
          Main Categories
        </h1>
        <div className="my-2">
          {mainCats.map((cat, key) => {
            return (
              <div
                key={key}
                className={`${
                  router.pathname === routeMap[cat]
                    ? 'bg-white'
                    : 'bg-transparent'
                } w-[95%] h-10 flex items-center justify-start px-3 cursor-pointer hover:bg-slate-100 rounded-lg`}
                onClick={() => router.push(routeMap[cat])}
              >
                {/* Route Icon :) */}
                <h1
                  className={`text-sm font-medium capitalize text-slate-500 ${
                    router.pathname === routeMap[cat] ? 'text-blue-400' : ''
                  }`}
                >
                  {cat}
                  {/* Small chevron here :) */}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full py-5 pl-5">
        <h1 className="text-xs font-light capitalize text-slate-500">More</h1>
        <div className="my-2">
          {moreCats.map((cat, key) => {
            return (
              <div
                key={key}
                className={`${
                  router.pathname === routeMap[cat]
                    ? 'bg-white'
                    : 'bg-transparent'
                } w-[95%] h-10 flex items-center justify-start px-3 cursor-pointer hover:bg-slate-100 rounded-lg`}
                onClick={() => router.push(routeMap[cat])}
              >
                {/* Route Icon :) */}
                <h1
                  className={`text-sm font-medium capitalize text-slate-500 ${
                    router.pathname === routeMap[cat] ? 'text-blue-400' : ''
                  }`}
                >
                  {cat}
                  {/* Small chevron here :) */}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
