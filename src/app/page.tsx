'use client';

import { useEffect, useState } from "react";
import Footer from "./_components/footer";
import {Navbar} from "./_components/navbar";
import { SectionIndexDaily, SectionIndexPrimary, SectionIndexReview } from "./_components/section";

export default function Home() {
  //const [token, setToken] = useState(localStorage.getItem("TOKEN"));

  if (global?.window !== undefined) {
    const [token, setToken] = useState(localStorage.getItem("TOKEN"));
  }

  return (
    <>
      <Navbar/>
      <SectionIndexPrimary/>
      <SectionIndexDaily/>
      <Footer/>
    </>
  );
}
