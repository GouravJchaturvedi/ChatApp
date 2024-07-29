import React from 'react'
import GenderCheckBox from './GenderCheckBox';

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full w-full p-6 bg-yellow-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-2 border-gray-100'>
        <h1 className='text-3xl font-semibold text-center text-gray-300 mb-4'>
          Sign Up 
          <span className='text-black font-black'> ChatApp</span>
        </h1>
        <form className='space-y-4'>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type="text"
              placeholder='Enter full name'
              className='w-full input input-bordered h-10'
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type="text"
              placeholder='Enter username'
              className='w-full input input-bordered h-10'
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type="text"
              placeholder='Enter password'
              className='w-full input input-bordered h-10'
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder='Enter confirm password'
              className='w-full input input-bordered h-10'
            />
          </div>

          <GenderCheckBox/>
          <a href="#" className='text-sm hover:text-gray-950 mt-2 inline-block'>
            Already have an account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2 font-bold'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
