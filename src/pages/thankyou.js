import React from "react";
import { Link } from "react-router-dom";
const thankyou = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="text-center mt-5">
              <p>&nbsp;</p>
              <h1>Thank You!</h1>
              <p>Your message has been successfully submitted.</p>
              <p>We will get back to you as soon as possible.</p>
              <Link to="/">Back to Home</Link>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default thankyou;
