import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-[#C2E0EB] pt-32 pb-20">
      <form
        //   onSubmit={handleLogin}
        className="w-full md:w-[570px] mx-auto  p-10 border border-warning bg-white rounded-lg text-black"
      >
        <h3 className="text-2xl font-bold mb-5">Login</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <Link className="underline text-error">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control">
          <label className="flex gap-4 cursor-pointer mt-4">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">Remember me</span>
          </label>
        </div>
        <div className="form-control mt-6 mb-3">
          <button className="btn btn-warning">Login</button>
        </div>
        {/* {error && <p className="text-center text-error mb-2">{error}</p>} */}
        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-warning underline">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;