// import Dropdown from 'react';


const Navbar = () => {
  return (

   <nav class="bg-white from-green-300 via-blue-500 to-purple-600 w-full">
  <div class="">
    <svg class="fill-current h-8 w-8 mr-2 justify-content" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d=""/></svg>
    <span class="font-semibold text-xl tracking-tight">ExamCram</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <div className="flex flex-col text-gray-600 py-2 font-poppins">
                  <select
                    className="form-select rounded-lg mt-2 p-2 w-full border-solid border-2 border-blue-300/80 focus:border-purple-500 focus:bg-gray-100 transition ease-in-out"
                    aria-label="Default select example"
                  >
                    <option selected>Select Category</option>
                    <option href="Cardlist">Math</option>
                    <option><a href="https://codesandbox.io/s/9y877loq1w?file=/index.js">History</a></option>
                    <option href="Cardlist">Science</option>
                    <option value="4">Computer Science</option>
                    <option value="5">Literature</option>
                  </select>
                </div>
              </div>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        My Dashboard
      </a>
    </div>
</nav> 








   
   );
  };


export default Navbar