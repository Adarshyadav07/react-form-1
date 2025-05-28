import React, { useState } from 'react'
import "react-phone-input-2/lib/style.css"
import "./form.css"
export const Form = () => {
    const [name, setName] = useState('')
    const [password, setPassworsd] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [email, setEmail] = useState()
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [validation,setValidation] = useState({vaildate:false,fields:{}})
    const [formData, setFormData] = useState({})
    const [selectOption, setSelectOption] = useState()


    const inputHandler = (e)=>{
        setFormData(prev=>({...prev,[e.target.name]:e.target.value}));

    }
 


const handleSubmit = (event) =>{
    event.preventDefault();

    console.log('formData--', formData);
    if(name && email && password && confirmPassword){

        if(password === confirmPassword){
            alert('Sign Up Successfully')
        }else{
            alert('ERR : Password & ConfirmPassword Must Be Same !')
        }
    }else{
        alert('All Fields are Mandatory')
    }

}

  return (
    <div className=' container mx-auto'>
        <div className='max-w-[400px] mx-auto p-2 m-2 border-2 mt-5'>
        <form className='p-3' onSubmit={handleSubmit}>
            <p className='text-2xl'>Sign Up</p>

        <div className='my-4'>
             <label htmlFor="countries" className="block mb-2   text-gray-900 font-bold">First Name</label>
            <input  onChange={(e)=>inputHandler(e)} name='first_name' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
        </div>
        
         <div className='my-4'>
             <label htmlFor="countries" className="block mb-2   text-gray-900 font-bold">Last  Name</label>
            <input  onChange={(e)=>inputHandler(e)} name='last_name' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" required />
        </div>
            <div className='my-4'>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
            
            <input  onChange={(e)=>inputHandler(e)} name='phone_number' type="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder=""  required />
        </div>

         <div className='my-4'>
             <label htmlFor="countries" className="block mb-2   text-gray-900 font-bold">Username</label>
            <input  onChange={(e)=>inputHandler(e)} name='usrername' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="XYZ" required />
        </div>

        <div className='my-4'>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
            <input  onChange={(e)=>inputHandler(e)} name='email_address' type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
        </div>

            <div className='my-4'>
                <label htmlFor="password" className="block mb-2  text-sn font-medium text-gray-900">Password</label>
                <input onChange={(e)=>inputHandler(e)} name='password' type={showPassword?'text':'password'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="**********" required />
                <p className='text-red-500'>{password? "" : "Password is required"}</p>
                <button type='button' onClick={()=>setShowPassword(!showPassword)} style={{marginLeft: '10px'}} className="text-white bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.2 me-2 mb-2 ">{showPassword ? 'hide' : 'show'}</button>
            </div>
             <div className='my-4'>
                <label htmlFor="confirmPassword" className="block mb-2 text-sn font-medium text-gray-900">Confirm Password</label>
                <input  onChange={(e)=>inputHandler(e)} name='confirm_password'  type={showPassword2?'text':'password'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="**********" required />
                
                <p className='text-red-500'>{confirmPassword? "" : "Confirm Password is required"}</p>
                <button type='button' onClick={()=>setShowPassword2(!showPassword2)} style={{marginLeft: '10px'}} className="text-white bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.2 me-2 mb-2 ">{showPassword2 ? 'hide' : 'show'}</button>
            </div>

            <div className='my-4'>
            <label htmlFor="countries" className="block mb-2   text-gray-900 font-bold">Select an Country</label>
            <select  onChange={(e)=>inputHandler(e)} value={formData?.country} name='country' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value="">Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
            </div>

            <div className='my-4'>
            <label htmlFor="city" className="block mb-2   text-gray-900 font-bold">Select an City</label>
            <select  onChange={(e)=>inputHandler(e)} value={formData?.country} name='city' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option >Choose a City</option>
                <option value="US">New York City, New York</option>
                <option value="US">Los Angeles, California</option>
                <option value="CA">Toronto, Ontario</option>
                <option value="CA">Vancouver, British Columbia</option>
                <option value="CA">Calgary, Alberta</option>
                <option value="CA">Montreal, Quebec</option>
                <option value="FR">Paris</option>
                <option value="DE">Berlin </option>
            </select>
            </div>

            <div className='my-4'>
            <label htmlFor="pan no" className="block mb-2 text-sm font-medium text-gray-900 ">Pan no.</label>
            
            <input  onChange={(e)=>inputHandler(e)} name='pan_no.' type="text" maxLength="15"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-485-678"  required />
            </div>

             <div className='my-4'>
            <label htmlFor="aadhar no." className="block mb-2 text-sm font-medium text-gray-900 "> Aadhar No.</label>
            
            <input  onChange={(e)=>inputHandler(e)} name='aadhar_no.' type="text" maxLength="15" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-455-678" required />
        </div>

            <div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Submit</button>
            </div>

           

        </form>
        </div>
    </div>
  )
}

