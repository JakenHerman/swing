import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";

const Home = () => {
  return (
    <div>
      <Head title="Home" />
      <Nav />

      <div>
        <h1>Welcome to Swing!</h1>
        <div>
          <Link href="/compount-interest-calculator">
            <>
              <h3>Getting Started &rarr;</h3>
              <p>Select a tool from the navigation bar above.</p>
            </>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
