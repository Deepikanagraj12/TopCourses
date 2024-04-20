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
  <div>
    <div>
      <Nav></Nav>
    </div>
    <div>
      <Filter filterData={filterData}></Filter>
    </div>
    <div>  {
      loading ? (<Loader/>) : (<Cards courses={courses}/>)
    }
    </div>
  </div>
  )
};

export default App;
