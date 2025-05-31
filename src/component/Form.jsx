
import  { useState   } from "react";
import { validateFormData } from "./form";
import "react-phone-input-2/lib/style.css"
import "./form.css"


export default function Form() {
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    
  const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        userName:"",
        password:"",
        confirmPassword:"",
        phone:"",
        pan:"",
        aadhar:"",
        country:"",
        city:"",
    });

    
    const [isFormVaild, setIsFormVaild] = useState(false);

    const inputHandle = (e) => {
        const{ name , value } =e.target;
        const updatedForm = {...formData, [name]: value};
        setFormData(updatedForm);

        const validationErrors = validateFormData(updatedForm);
        setErrors(validationErrors);
        setIsFormVaild(Object.keys(validationErrors).length === 0);
        console.log('error',validationErrors,Object.keys(validationErrors).length === 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormVaild){
            console.log("Submitting", formData);
        }
        alert('Form submitted!')
    }


 
  return (
    <div className=' container mx-auto'>
        <div className='max-w-[400px] mx-auto p-2 m-2 border-2 mt-5'>
        <form className='p-3' method="POST" onSubmit={(e)=>handleSubmit(e)}>
            <p className='text-2xl'>Sign Up</p>

        <div className='my-4' onSubmit={(e)=>handleSubmit(e)}>
             <label htmlFor="countries" className="block mb-2   text-gray-900 font-bold">First Name</label>
            <input value={formData.first_Name} onChange={(e)=>inputHandle(e)} name='first_name' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
            {errors.first_name && <p className="text-red-500">{errors.first_name}</p>}
        </div>
        
         <div className='my-4'>
             <label htmlFor="countries" className="block mb-2   text-gray-900 font-bold">Last  Name</label>
            <input value={formData.last_name} onChange={(e)=>inputHandle(e)} name='last_name' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" required />
            {errors.last_name && <p className="text-red-500">{errors.last_name}</p> }
        </div>
            <div className='my-4'>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
            <input value={formData.number} onChange={(e)=>inputHandle(e)} name='number' type="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder=""  required />
            {errors.number && <p className="text-red-500">{errors.number}</p> }
        </div>

         <div className='my-4'>
             <label htmlFor="countries" className="block mb-2   text-gray-900 font-bold">Username</label>
            <input value={formData.userName} onChange={(e)=>inputHandle(e)} name='userName' type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="XYZ" required />
            {errors.userName && <p className="text-red-500">{errors.userName}</p>}
        </div>

        <div className='my-4'>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
            <input value={formData.email} onChange={(e)=>inputHandle(e)} name='email' type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
            {errors.email && <p className="text-red-500">{errors.email}</p> }
        </div>

            <div className='my-4'>
                <label htmlFor="password" className="block mb-2  text-sn font-medium text-gray-900">Password</label>
                <input value={formData.password} onChange={(e)=>inputHandle(e)} name='password' type={showPassword?'text':'password'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="**********" required />
                <button type='button' onClick={()=>setShowPassword(!showPassword)} style={{marginLeft: '10px'}} className="text-white bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.2 me-2 mb-2 ">{showPassword ? 'hide' : 'show'}</button>
                {errors.password && <p className="text-red-500">{errors.password}</p> }
            </div>

            <div className='my-4'>
                <label htmlFor="confirmPassword" className="block mb-2 text-sn font-medium text-gray-900">Confirm Password</label>
                <input value={formData.confirmPassword} onChange={(e)=>inputHandle(e)} name='confirmPassword'  type={showPassword2?'text':'password'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="**********" required />
                <button type='button' onClick={()=>setShowPassword2(!showPassword2)} style={{marginLeft: '10px'}} className="text-white bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.2 me-2 mb-2 ">{showPassword2 ? 'hide' : 'show'}</button>
                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p> }
            </div>

            <div className='my-4'>
            <label htmlFor="countries" className="block mb-2   text-gray-900 font-bold">Select an Country</label>
            <select onChange={(e)=>inputHandle(e)} value={formData.country} name='country' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value="">Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
            {errors.country && <p className="text-red-500">{errors.country}</p> }
            </div>

            <div className='my-4'>
            <label htmlFor="city" className="block mb-2   text-gray-900 font-bold">Select an City</label>
            <select  onChange={(e)=>inputHandle(e)} value={formData.city} name='city' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
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
            {errors.city && <p className="text-red-500">{errors.city}</p>}
            </div>

            <div className='my-4'>
            <label htmlFor="pan no" className="block mb-2 text-sm font-medium text-gray-900 ">Pan no.</label>
            <input value={formData.pan} onChange={(e)=>inputHandle(e)} name='pan' type="text" maxLength="15"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="AAAAA1234A"  required />
            {errors.pan && <p className="text-red-500">{errors.pan}</p>}
            </div>

            <div className='my-4'>
            <label htmlFor="aadhar no." className="block mb-2 text-sm font-medium text-gray-900 "> Aadhar No.</label>
            <input value={formData.aadhar} onChange={(e)=>inputHandle(e)} name='aadhar' type="text" maxLength="15" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1234-4553-6738" required />
            {errors.aadhar && <p className="text-red-500">{errors.aadhar}</p>}
        </div>

            <div>
                <button disabled={!isFormVaild} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Submit</button>
            </div>

           

        </form>
        </div>
    </div>
  )
}

