import Navbar from "./_components/navbar";
import { SectionIndexPrimary, SectionIndexReview } from "./_components/section";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <SectionIndexPrimary></SectionIndexPrimary>
      <SectionIndexReview></SectionIndexReview>
    </>
  );
}
