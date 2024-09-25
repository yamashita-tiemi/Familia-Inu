// src/app/page.tsx

import Footer from '../_components/footer';
import {Navbar} from '../_components/navbar';
import RegistrationAreaTutor from '../_components/RegistrationAreaTutor';

export default function Page() {
  return (
    <>
        <Navbar />
        <RegistrationAreaTutor />
        <Footer/>
    </>
  );
}
