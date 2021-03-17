import React, { Component} from "react"
import {CardList} from "./components/card-list/card-list.component"
import {Search} from "./components/search/search.component"
import './App.css';
import CustomCursor from "./components/cursor/cursor.component"
class App extends Component{
//   const [state,setState]=useState([]) 
//   const [searchField,setSearchFied]=useState(" ")
  constructor(){
    super();
    this.state={ 
      monsters:[],
      searchFeild:" "
  }
}
    // useEffect(()=>
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(response=>response.json())
    // .then(users => setState(users))
    // )
    componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp=>resp.json())
      .then(data=>this.setState({monsters:data}))
    }
    render(){
      const {monsters,searchFeild} =this.state;
      const monstersFiltered=monsters.filter(m=> 
        m.name.toLowerCase().includes(searchFeild.toLowerCase())
        )
        console.log(monstersFiltered);
    return(
      <div className="App">
      {/* <input type="search" placeholder="search monsters" onChange={e=>{ 
      setSearchFied(e.target.value),
      ()=>{
        console.log("hello")    f 
      } 
       } }/> */}
       <CustomCursor />
       <h1>Monsters Rolodex</h1>
       <Search 
       placeholder="SEARCH HERE"
       handleChange={e=>{
          this.setState({searchFeild:e.target.value})}}
          /> 
      <CardList monsters={monstersFiltered} />
      </div>
    );
  } 
} 
export default App;
