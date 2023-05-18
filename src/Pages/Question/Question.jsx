import React from "react";

const Question = () => {
  return (
    <div className="container px-5 md:p-0">
      <h2 className="text-center text-5xl text-blue-300 my-10">Blog Page</h2>
      <div>
        <div className="mb-10">
          <h4 className="text-xl font-bold">
            1.What is an access token and refresh token? How do they work and where should we store them on the client-side?
          </h4>
          <p className="mt-5">
            <span className="font-bold">Ans:-</span>
            <span className="font-bold block underline">Refresh Token:</span>
            A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times.
            <span className="font-bold underline  block">Access Token:</span>
            The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.
          </p>
        </div>
        {/* <div className="mb-4">
          <h4>2.How to validate React props using PropTypes?</h4>
          <p>
            <span className="fw-bold">Ans:-</span>Props and PropTypes are
            important mechanisms for passing read-only attributes between React
            components.We can use React props, short for properties, to send
            data from one component to another. If a component receives the
            wrong type of props, it can cause bugs and unexpected errors in your
            app.
          </p>
        </div>
        <div className="mb-4">
          <h4>3.Tell us the difference between nodejs and express js.?</h4>
          <p>
            <span className="fw-bold">Ans:-</span>
            <span className="fw-bold">NodeJS</span> is the package, which
            provides the JavaScript run-time environment, whereas{" "}
            <span className="fw-bold">Express</span> is a framework that sits on
            top of NodeJS and helps us to handle requests and responses.
          </p>
        </div>
        <div className="mb-4">
          <h4>
            3.What is a custom hook, and why will you create a custom hook?
          </h4>
          <p>
            <span className="fw-bold">Ans:-</span>Custom React JS hooks offer
            reusability as when a custom hook is created, it can be reused
            easily, which makes the code cleaner and reduces the time to write
            the code. It also enhances the rendering speed of the code as a
            custom hook does not need to be rendered again and again while
            rendering the whole code.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Question;
