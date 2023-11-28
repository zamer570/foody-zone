import './App.css';
import Header from './components/header/Header';
import Main from './components/Main/Main';
import React,{useState,useEffect} from 'react';

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data,setData] = useState(null);
  const [filteredData,setFilteredData] = useState(null);

  useEffect(() => {
    // console.log("inside use effect");
    const fetchData = async () => {
      try{
        const response = await fetch(BASE_URL);
        if(!response.ok){
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setFilteredData(result);
        // console.log(result);
      }
      catch(error){
        console.error("There was problem fetching data: ",error);
      }
    };
    fetchData();
  },[]);

  const inputFilter = (e) =>{
    console.log(e.target.value)
    let filteredValues = data.filter(val =>{
      return val.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredData(filteredValues);
  }

  const buttonFilter = (filterVal) =>{
    if(filterVal.toLowerCase() === "all"){
      setFilteredData(data);
      return;
    }
    let filteredValues = data.filter(val =>{
      return val.type.toLowerCase().includes(filterVal.toLowerCase());
    });
    setFilteredData(filteredValues);
  }

  return (
    <div className='app'>
      <Header inputFilter={inputFilter} buttonFilter={buttonFilter}></Header>
      <Main data={filteredData}></Main>
    </div>
  );
}

export default App;
