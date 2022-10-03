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
                    
                      <option selected>Select Category</option>
                      {/* <div href="/math">Math</div> */}
                       <option><a href="/history">History</a></option>
                      <option href="/math">Science</option>
                      <option value="4">Computer Science</option>
                      <option value="5">Literature</option>
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