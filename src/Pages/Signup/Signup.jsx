import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";

const Signup = () => {
  const { createUser, updateUser ,signInWithGoogle} = useContext(AuthContext);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    setError(null);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        toast.success("Successfully Registered!");
        return updateUser(name, photo); 
      })
      .then(() => {
        console.log("Successfully updated");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        console.log("Successfully signed in with Google");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error signing in with Google:", error);
      });
  };
  return (
    <div className="bg-[#C2E0EB] pt-32 pb-20">
      <form
        onSubmit={handleCreateUser}
        className="w-full md:w-[570px] mx-auto  p-10 border border-warning bg-white rounded-lg text-black"
      >
        <h3 className="text-2xl font-bold mb-5">Create an account</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full"
            required
          />
        </div>
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
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Please enter a photoURL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="flex gap-4 cursor-pointer mt-4">
            <input type="checkbox" className="checkbox" required />
            <span className="label-text">Accept terms & conditions</span>
          </label>
        </div>
        <div className="form-control mt-6 mb-3">
          <button className="btn btn-warning">Create an account</button>
        </div>
        <div className="form-control mt-4">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleGoogleSignIn}
          >
            Sign up with Google
          </button>
        </div>
        {error && <p className="text-center text-error mb-2">{error}</p>}
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-warning underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
