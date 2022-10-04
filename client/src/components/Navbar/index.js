import Dropdown from 'react';


const Navbar = () => {
  return (

   <nav class="flex flex-row justify-center gap-4 container-xl">

    {/* <div class="content-center flex-auto content-evenly">
      <a href="/" class="flex">ExamCram</a>
    </div> */}

    <div class="flex flex-auto text-gray-600 py-2 font-poppins">

    <div class="content-center flex-auto content-evenly">
      <a href="/" class="flex">ExamCram</a>
    </div>
      <div></div>
      <Dropdown arrowClassName="arrowclass"/>




      <div class="flex justify-end">
        <div class="mb-3 xl:w-96">
                    <select
                      class="form-select rounded-lg mt-2 p-2 w-full border-solid border-2 border-gray-100"
                      aria-label="Default select example">
                    
                    <option selected>Select Area of Study</option>
                    <option value="CS">Computer Science</option>
                    <option value="HS">History</option>
                    <option value="LIT">Literature</option>
                    <option value="MTH">Math</option>
                    <option value="SCI">Science</option>
                    </select>
                  </div>
                </div>
                <div class= "m-8">
      <a className="Dashboard" class="flex-row justify" href="/Dashboard"> Dashboard</a>
    </div>        
      </div>

   


</nav> 








   
   );
  };


export default Navbar