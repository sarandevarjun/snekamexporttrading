import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";

const Contactform = () => {
  init("kG6djoM8rLVPAUiah");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bdmdapp",
        "template_da6t18n",
        form.current,
        "kG6djoM8rLVPAUiah"
      )
      .then(
        (result) => {
          console.log(result.text, ":: Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <h2>Feel free to contact us</h2>
      <p>
        Our Team is happy to answer your Questions. Fill out the form, and we’ll
        be in touch as soon as Possible.
      </p>

      <form className="cr-content-form" onSubmit={handleSubmit} ref={form}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="cr-form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="cr-form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="cr-form-control"
          />
        </div>
        <div className="form-group">
          <textarea
            className="cr-form-control"
            name="message"
            id="exampleFormControlTextarea1"
            rows={4}
            placeholder="Message"
            defaultValue={""}
          />
        </div>
        <button type="submit" className="cr-button">
          Contact Us
        </button>
      </form>
    </>
  );
};

export default Contactform;
