import React from "react";

const Question = () => {
  return (
    <div className="container px-5 md:p-0">
      <h2 className="text-center text-5xl text-blue-300 my-10">Blog Page</h2>
      <div>
        <div className="mb-10">
          <h4 className="text-xl font-bold">
            1.What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h4>
          <p className="mt-5">
            <span className="font-bold">Ans:-</span>
            <span className="font-bold block underline">Refresh Token:</span>A
            refresh token just helps you re-validate a user without them having
            to re-enter their login credentials multiple times.
            <span className="font-bold underline  block">Access Token:</span>
            The access token is re-issued, provided the refresh token is a valid
            one requesting permission to access confidential resources.
          </p>
        </div>
        {/* Question end here  */}
        <div className="mb-4">
          <h4 className="text-xl font-bold">
            2. Compare SQL and NoSQL databases?
          </h4>
          <p>
            <span className="font-bold">Ans:-</span>
            <span className="block">
              1.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
            </span>
            <span className="block">
              2.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
            </span>
            <span className="block">
              3.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
            </span>
          </p>
        </div>
        {/* Question end here  */}
        <div className="mb-4">
          <h4 className="text-xl font-bold">
            3.What is express JS? What is Next JS?
          </h4>
          <p>
            <span className="font-bold">ExpressJs</span> is a Node. js-based web application framework to
            build APIs and server-side applications, on the other hand <span className="font-bold">NextJs</span> is
            a react-based framework used for creating static websites and SEO optimizations. Therefore, they are not intended to replace one
            another in any means or ways.
          </p>
        </div>
        {/* Question end here  */}
      </div>
    </div>
  );
};

export default Question;
