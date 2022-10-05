



import { valueFromAST } from 'graphql';
import  React, {useState}from 'react';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [value,setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
   navigate(`/${value}`);
  }
  return (

   <nav className="flex flex-row justify-center gap-4 container-xl">

    {/* <div class="content-center flex-auto content-evenly">
      <a href="/" class="flex">ExamCram</a>
    </div> */}

    <div className="flex flex-auto text-gray-600 py-2 font-poppins">

    <div className="content-center flex-auto content-evenly">
      <a href="/" className="flex">ExamCram</a>
    </div>
      <div></div>
      {/* <Dropdown arrowClassName="arrowclass"/> */}

      <div className="flex justify-end">
        <div className="mb-3 xl:w-96">
                    <select value={value} onSelect={handleChange}
                      className="form-select rounded-lg mt-2 p-2 w-full border-solid border-2 border-gray-100"
                      aria-label="Default select example">
                    
                    <option defaultValue><Link to="/math"> Select Area of Study </Link></option>
                    <option defaultValue="default">Computer Science</option>
                    <option defaultValue="HS">History</option>
                    <option defaultValue="LIT">Literature</option>
                    <option defaultValue="MTH">Math</option>
                    <option defaultValue="SCI">Science</option>
                    </select>
                  </div>
                </div>
                <div className= "m-8">
      <a className="Dashboard flex-row justify" href="/Dashboard"> Dashboard</a>
    </div>        
      </div>

   


</nav> 








   
   );
  };


export default Navbar