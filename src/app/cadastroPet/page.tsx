// src/app/page.tsx

import Footer from "@/app/_components/footer";
import { Navbar } from "@/app/_components/navbar";
import RegistrationAreaPet from "@/app/_components/RegistrationAreaPet";

export default function cadastroPet() {
  return (
    <>
        <Navbar />
        <RegistrationAreaPet />
        <Footer/>
    </>
  );
}
