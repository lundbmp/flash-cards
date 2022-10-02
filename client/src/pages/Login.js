// import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { LOGIN } from "../utils/mutations";
// import Auth from "../utils/auth";

// const Login = (props) => {
//   const [formState, setFromState] = useState({ email: "", password: "" });
//   const [login, { error }] = useMutation(LOGIN);

//   // update state based on form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFromState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await login({
//         variables: { ...formState },
//       });

//       Auth.login(data.login.token);
//     } catch (e) {
//       console.error(e);
//     }
//     setFromState({
//       email: "",
//       password: "",
//     });
//   };

//   //return ();
// };

// export default Login;
