import React, { useState } from 'react';
import * as Yup from "yup"
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Login({saveUserData}) {
 
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  let navigate = useNavigate()

  async function handleLogin(values) {
    setIsLoading(true)
    let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values).catch((error)=>{
      console.log(error.response)
      setIsLoading(false)
      setErrorMessage(error.response.data.message)
    })
 console.log(data)
    if (data.message === 'success') {
      localStorage.setItem("userToken",data.token)
      saveUserData()
      setIsLoading(false)
      navigate('/')
      console.log("yes")
    }
  }

 
  let validationSchema = Yup.object({
    
    password: Yup.string().required("password is required").matches(/^[A-Z][a-z0-9]{5,10}$/, "password must start with uppercase and from 5 to 10 characters"),
    email: Yup.string().required("email is required").email("Invalid email address")
   
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
     
    },
    // validate,
    validationSchema,

    onSubmit: handleLogin
  })

  return <>

    <div className="w-75 mx-auto py-4">
      <h3 className='mb-5'>Login Now</h3>
      {errorMessage.length> 0? <div className='alert alert-danger'>{errorMessage}</div>:null}
      <form onSubmit={formik.handleSubmit} >
       

        
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
       

        {isLoading ? <button type="button" className='btn btn-primary text-white'><i className='fas fa-spinner fa-spin'></i></button> : <button disabled={!(formik.isValid && formik.dirty)} type="submit" className='btn btn-primary text-white'>Login</button>
        }
      </form>
    </div>
  </>
}
