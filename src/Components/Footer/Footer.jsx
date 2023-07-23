import React from 'react'

export default function Footer() {
  return (
    <footer class="fixed-bottom py-2">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 mt-2">
          <h5>Copyright 2017. All rights reserved.</h5>
        </div>
        <div class="col-sm-6 ms-auto text-right media">
          <span class="face"><i class="fab fa-facebook-f"></i></span>
          <span class="google"><i class="fab fa-google"></i></span>
          <span class="in"><i class="fab fa-linkedin-in"></i></span>
          <span class="twitter"><i class="fab fa-twitter"></i></span>
        </div>
      </div>
    </div>
  </footer>
    // <footer className=' py-2 fixed-bottom text-center'><h3 className='text-white'>Footer</h3></footer>
    )
}
