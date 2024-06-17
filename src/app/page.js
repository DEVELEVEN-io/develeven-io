"use client";
// src/app/pages.js
import { Header, Work, Services, Team, Navbar, Contact, Footer } from '../../components';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    function stickyNav() {
      var navbar = document.querySelector(".navbar");
      navbar.classList.toggle("sticky", window.pageYOffset > 0);
    }

    window.addEventListener("scroll", stickyNav);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", stickyNav);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <Work />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
