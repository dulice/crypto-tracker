import React from 'react'
import SignInSide from '../components/SingInSide'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const SignIn = () => {
  return (
    <div>
              <div  data-aos-duration="1100" data-aos="zoom-in">
        <SignInSide />
        </div>
    </div>
  )
}

export default SignIn