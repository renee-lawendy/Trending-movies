import React, { useState } from 'react';

import * as Yup from "yup"
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, seterrorMessage] = useState("")
  let navigate = useNavigate()

  async function handleRegisteration(values) {
    setIsLoading(true)
    let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values).catch((error)=>{
      console.log(error.response.data.message)
      setIsLoading(false)
      seterrorMessage(error.response.data.message)
    })
 console.log(data)
    if (data.message === 'success') {
      setIsLoading(false)
      navigate('/login')
    }
  }

  // function validate (values){
  //   const errors ={}
  //  if(!values.name){
  //   errors.name='name is required';

  //  }
  //  else if(values.name.length < 3){
  //   errors.name="name minlength is 3"
  //  }
  //  else if(values.name.length > 10){
  //   errors.name="name maxlength is 10"
  //  }
  //  if(!values.email){
  //   errors.email='email is required'
  //  }
  //  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
  //   errors.email="Invalid email address"
  //  }
  //  if(!values.password){
  //   errors.password='password is required'
  //  }
  //  else if(!/^[A-z][a-z0-9]{5,10}$/i.test(values.password)){
  //   errors.password="password must start with uppercase and from 5 to 10 characters"
  //  }
  //  if(!values.phone){
  //   errors.phone='phone is required'
  //  }
  //  else if(!/^01[0125][0-9]{}8$/i.test(values.phone)){
  //   errors.phone="phone must be 11 length at start with 01"
  //  }

  //  if(!values.rePassword){
  //   errors.rePassword='rePassword is required'
  //  }
  //  else if(values.password!== values.rePassword){
  //   errors.rePassword="password and rePassword doesnt match"
  //  }


  //   return errors
  // }
  let validationSchema = Yup.object({
    name: Yup.string().required("name is required").min(3, "min length 3").max(10, "max length is 10"),
    password: Yup.string().required("password is required").matches(/^[A-Z][a-z0-9]{5,10}$/, "password must start with uppercase and from 5 to 10 characters"),
    rePassword: Yup.string().required("rePassword is required").oneOf([Yup.ref("password")], "password and rePassword doesnt match"),
    email: Yup.string().required("email is required").email("Invalid email address"),
    phone: Yup.string().required("phone is required").matches(/^01[0125][0-9]{8}$/, "phone must be 11 length at start with 01")
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    },
    // validate,
    validationSchema,

    onSubmit: handleRegisteration
  })

  return <>

    <div className="w-75 mx-auto py-4">
      <h3 className='mb-5'>Register Now</h3>
      {errorMessage.length> 0? <div className='alert alert-danger'>{errorMessage}</div>:null}
      <form onSubmit={formik.handleSubmit} >
        <label htmlFor="name">Name</label>
        <input id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name} className='form-control mb-2'

        />

        {formik.touched.name && formik.errors.name ? <div className='alert alert-danger'>{formik.errors.name}</div> : null}
        <label htmlFor="email">Email</label>
        <input className='form-control mb-2'
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email} onBlur={formik.handleBlur}
        />

        {formik.touched.email && formik.errors.email ? <div className='alert alert-danger'>{formik.errors.email}</div> : null}
        <label htmlFor="password">Password</label>
        <input className='form-control mb-2'
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password} onBlur={formik.handleBlur}
        />

        {formik.touched.password && formik.errors.password ? <div className='alert alert-danger'>{formik.errors.password}</div> : null}
        <label htmlFor="rePassword">RePassword</label>
        <input className='form-control mb-2'
          id="rePassword"
          name="rePassword"
          type="Password"
          onChange={formik.handleChange}
          value={formik.values.rePassword} onBlur={formik.handleBlur}
        />
        {formik.touched.rePassword && formik.errors.rePassword ? <div className='alert alert-danger'>{formik.errors.rePassword}</div> : null}
        <label htmlFor="phone">Phone</label>
        <input className='form-control mb-2'
          id="phone"
          name="phone"
          type="tel"
          onChange={formik.handleChange}
          value={formik.values.phone} onBlur={formik.handleBlur}
        />
        {formik.touched.phone && formik.errors.phone ? <div className='alert alert-danger'>{formik.errors.phone}</div> : null}

        {isLoading ? <button type="button" className='btn bg-white text-dark'><i className='fas fa-spinner fa-spin'></i></button> : <button disabled={!(formik.isValid && formik.dirty)} type="submit" className='btn bg-white text-dark'>Register</button>
        }
      </form>
    </div>
  </>

}