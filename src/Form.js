import React, { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function Form() {
    const [showPassword, setShowPassword] = useState(false);

  return ( 
    <div className='form-container'>
        <form>
            <div className='input-container'>
              <input
                type={showPassword ? "text" : "password"}
                placeholder='Password'
                className='form-input'
                />
              {showPassword ? (
                <AiFillEye
                  className='eye-icon'
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEyeInvisible 
                  className='eye-icon'
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
        </form>
    </div>
  )
}

export default Form