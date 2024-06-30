"use client";
import { useEffect } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";

const Contact = () => {
  useEffect(() => {
    const initializeCustomSelects = () => {
      const customSelects = document.querySelectorAll(".custom-select");

      customSelects.forEach((customSelect) => {
        const selectElement = customSelect.querySelector("select");
        const existingSelectedDiv = customSelect.querySelector(".select-selected");
        const existingOptionsDiv = customSelect.querySelector(".select-items");

        // Ensure no duplicate custom elements are added
        if (existingSelectedDiv || existingOptionsDiv) {
          if (existingSelectedDiv) existingSelectedDiv.remove();
          if (existingOptionsDiv) existingOptionsDiv.remove();
        }

        const selectedDiv = document.createElement("div");
        selectedDiv.setAttribute("class", "select-selected");
        selectedDiv.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
        customSelect.appendChild(selectedDiv);

        const optionsDiv = document.createElement("div");
        optionsDiv.setAttribute("class", "select-items select-hide");

        Array.from(selectElement.options).forEach((option, index) => {
          if (index === 0) return; // Skip the placeholder option
          const optionDiv = document.createElement("div");
          optionDiv.innerHTML = option.innerHTML;
          optionDiv.addEventListener("click", function () {
            selectElement.selectedIndex = index;
            selectedDiv.innerHTML = this.innerHTML;
            const sameAsSelected = optionsDiv.getElementsByClassName("same-as-selected");
            Array.from(sameAsSelected).forEach((el) => el.removeAttribute("class"));
            this.setAttribute("class", "same-as-selected");
            selectedDiv.click();
          });
          optionsDiv.appendChild(optionDiv);
        });

        customSelect.appendChild(optionsDiv);

        selectedDiv.addEventListener("click", function (e) {
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
        });
      });
    };

    function closeAllSelect(elmnt) {
      const items = document.querySelectorAll(".select-items");
      const selected = document.querySelectorAll(".select-selected");
      items.forEach((item, index) => {
        if (elmnt !== selected[index]) {
          selected[index].classList.remove("select-arrow-active");
          item.classList.add("select-hide");
        }
      });
    }

    document.addEventListener("click", closeAllSelect);
    initializeCustomSelects();

    return () => {
      document.removeEventListener("click", closeAllSelect);
    };
  }, []);

  return (
    <section id="contact" className="contact container flex flex-col justify-between mx-auto mt-7 w-full">
      <div className="flex flex-row">
        <form
          className="contact-form bg-bglight px-12 py-8 rounded-lg mr-4 w-full"
          action="https://formspree.io/f/mdobjjbo"
          method="POST"
        >
          <h1 className="text-4xl font-bold text-gradient my-4">
            Let&apos;s work together!
          </h1>
          <p className="text-white mb-6">
            Our team would reach out to you as soon as possible.
          </p>
          <input
            name="name"
            type="text"
            className="form-input"
            placeholder="Full Name"
            required
          />
          <input
            name="email"
            type="email"
            className="form-input"
            placeholder="Email address"
            required
          />
          <div className="custom-select text-sm" style={{ width: "100%" }}>
            <select name="serviceType" id="serviceType">
              <option value="">--Please choose an option--</option>
              <option value="website">Website</option>
              <option value="backend">Backend</option>
              <option value="api">APIs</option>
              <option value="other">Others</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Your message"
            className="form-input"
            rows={10}
            required
          ></textarea>
          <input
            type="submit"
            className="submit-button w-48 btnGradient"
            value="Send Message"
          />
        </form>
      
        <div className="contact-info bg-bgdark p-4 rounded-lg ml-4 my-auto w-full text-white">

          <div className="contactInfoHolder flex flex-row items-center my-4">
            <div className="contactIcon text-3xl bgGradientTop w-16 h-16 rounded-full flex justify-center items-center mr-4">
              <LuPhoneCall/>
            </div>
            <div className="py-8">
              <p><strong>Phone</strong></p>
              <p>+88 019 50 422 568</p>
            </div>
          </div>

          <div className="contactInfoHolder flex flex-row items-center my-4">

            <div className="contactIcon text-3xl bgGradientTop w-16 h-16 rounded-full flex justify-center items-center mr-4">
              <IoMailOutline/>
            </div>

            <div className="py-8">
              <p><strong>Email</strong></p>
              <p>develeven@outlook.com</p>
            </div>
          </div>

          <div className="contactInfoHolder flex flex-row items-center my-4">
            <div className="contactIcon text-3xl bgGradientTop w-16 h-16 rounded-full flex justify-center items-center mr-4">
              <IoLocationOutline/>
            </div>
            <div className="py-8">
              <p><strong>Address</strong></p>
              <p>Rangpur, Bangladesh</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
