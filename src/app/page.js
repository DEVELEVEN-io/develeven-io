"use client";
// src/app/pages.js
import { Header, Work, Services, Team, Tech, Navbar, Contact, Footer } from '../../components';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    function stickyNav() {
      var navbar = document.querySelector(".navbar");
      navbar.classList.toggle("scrolled", window.pageYOffset > 0);
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
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
}
