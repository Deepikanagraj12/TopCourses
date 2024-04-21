import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {apiUrl, filterData} from "./data";
import { toast } from "react-toastify";
import Loader from "./components/Loader"

const App = () => {

  const[courses , Setcourses] = useState(null);
  const[loading , Setloading] = useState(true);
  const[category, Setcategory] = useState(filterData[0].title);

  async function fetchData() {
    Setloading(true);
    try{
       let response = await fetch(apiUrl);
       let output = await response.json();
       Setcourses(output.data);
    }
    catch(error){
      toast.error("Network issue")
    }
    Setloading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])
  


  return (
  <div className="min-h-screen flex flex-col bg-bgDark2">
    <div>
      <Nav></Nav>
    </div>
    <div className="bg-bgDark2">
    <div >
      <Filter  filterData={filterData} category ={category} Setcategory={Setcategory}> </Filter>
    </div>
    <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">  {
      loading ? (<Loader/>) : (<Cards courses={courses} category={category}/>)
    }
    </div>
    </div>
  </div>
  )
};

export default App;
