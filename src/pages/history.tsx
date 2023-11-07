import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';
import React from 'react';

const History = () => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://jupiter.utdnebula.com/history"
          key="canonical"
        />
        <meta property="og:url" content="https://jupiter.utdnebula.com/history" />
        <meta name="description" content="History - Jupiter" />
      </Head>
			<main className="h-full md:pl-72">
				<Header />
				<div className="w-full pt-20 flex items-center place-content-center">
            <Image
              src="/nebula-logo.png"
              alt = ""
              width={300}
              height={300}
            />
				</div>
				<div className="h-full">
          <h1 className=" pt-5 text-3xl font-bold text-black-500 text-center">
            The History Page is Under Construction!
					</h1>
					<h1 className=" pt-2 text-2xl font-bold text-black-500 text-center">
            Please Come Back Later!
					</h1>
				</div>
			</main>
		</>
  );
};

export default History;