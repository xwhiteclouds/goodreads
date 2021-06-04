import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";
import { useForm } from "react-hook-form";
import Img from '../imgs/signIn.png'



const SignIn = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const signInWithEmailAndPasswordHandler = (event,email, password) => {
      event.preventDefault();
      // auth.signInWithEmailAndPassword(email, password).catch(error => {
        // console.error("Error signing in with password and email", error);
      // });
    };

  return (
    <div className="mt-8">
      <div className="border">
        <img src={Img} />
        {/* {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>} */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.email && <p style={{color: 'red', width: '100%'}}>This field is required</p>}
          <input
          {...register("email", {required: true})}
            type="text"
            className="my-1 p-1 w-full"
            placeholder="Your Email"
            id="text"
           
            // {...register("exampleRequired", { required: true })}
            // {...errors.exampleRequired && <span>This field is required</span>}

          />
            {errors.password && <p style={{color: 'red', width: '100%'}}>This field is required</p>}
          
          <input
          {...register("password", {required: true, maxLength: 10})}
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            placeholder="Your Password"
            id="userPassword"

          
          />
          <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"  type = "submit">
            Sign in
          </button>
        </form>
        <button className="google"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          <img style={{width: '30px', marginTop: '7px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"/>
        </button>
        <Link to="passwordReset" className="text-blue-500 hover:text-blue-600">
            Forgot Password?
          </Link> 
      </div>
    </div>
  );
};

export default SignIn;