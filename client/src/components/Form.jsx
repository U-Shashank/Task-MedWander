import React, { useEffect } from 'react'
import Codes from './Codes'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';

const Form = ({ formType, setFormType, getUsers }) => {
  const [code, setCode] = React.useState('+91')
  const [dropDown, setDropDown] = React.useState(false)

  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue, reset, isS } = useForm()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setCode(user.phone.split(" ")[0])
      setValue('name', user.name)
      setValue('phone', user.phone.split(" ")[1])
    }
  }, [])

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_HOST_URI}/user`, {
        ...data,
        phone: `${code} ${data.phone}`,
        formType: formType,
      })
      toast.success("Form submitted")
      reset()
      localStorage.removeItem('user')
      getUsers()

      console.log(res)
    } catch (error) {
      toast.error("Something went wrong")
      console.log(error)
    }
  }

  const storeUserData = (data) => {
    const userData = {
      formType,
      name: data.name,
      phone: `${code} ${data.phone}`,
    }
    localStorage.setItem('user', JSON.stringify(userData))
  }

  return (
    <div className="mx-auto w-76 sm:w-md p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">{formType}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            name="name"
            {...register('name', {
              required: 'Please enter your name',
              pattern: {
                value: /^[a-zA-Z\s'-]+$/,
                message: 'Please enter a valid name'
              },
              onChange: handleSubmit(storeUserData)
            })}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div className="flex gap-2">
          <button
            className="relative px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            onClick={(e) => {
              e.preventDefault();
              setDropDown((prev) => !prev);
            }}
          >
            {code}
            <Codes setCode={setCode} dropDown={dropDown} />
          </button>
          <input
            type="text"
            name="phone"
            {...register('phone', {
              required: 'Please enter a valid number',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Please enter a valid number'
              },
              validate: (value) => {
                let len = 10
                switch (code) {
                  case "+91":
                    len = 10
                    break
                  case "+1":
                    len = 10
                    break
                  case "+44":
                    len = 11
                    break
                  case "+86":
                    len = 11
                    break
                  case "+52":
                    len = 10
                    break
                }
                if (value.length !== len) {
                  return `Please enter a valid number ${len} digtis`
                }
                return true
              },
              onChange: handleSubmit(storeUserData)
            })}
            className="px-4 py-2 border border-gray-300 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Phone Number"
          />
        </div>
        {errors.phone && <p className="text-red-500 text-sm -mt-2">{errors.phone.message}</p>}
        <button
        disabled = {isSubmitting}
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 disabled:bg-gray-700"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form