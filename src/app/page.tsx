import Footer from "./_components/footer";
import {Navbar} from "./_components/navbar";
import { SectionIndexDaily, SectionIndexPrimary, SectionIndexReview } from "./_components/section";

export default function Home() {
  return (
    <>
      <Navbar/>
      <SectionIndexPrimary/>
      <SectionIndexReview/>
      <SectionIndexDaily/>
      <Footer/>
    </>
  );
}
