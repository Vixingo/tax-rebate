import React from "react";
import ActNow from "../components/ActNow";
import Begin from "../components/Begin";
import Hero from "../components/Hero";
import NotSold from "../components/NotSold";
import ERC from "../components/ERC";
import Qualify from "../components/Qualify";
import FAQ from "../components/FAQ";
function Home() {
    return (
        <>
            <Hero />
            <NotSold />
            <ActNow />
            <Begin />
            <ERC />
            <Qualify />
            <FAQ />
        </>
    );
}

export default Home;
