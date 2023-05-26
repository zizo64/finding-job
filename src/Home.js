import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jobData , searchData, emptyFilter, searchFulltime, mobsearchData} from './action';

export const Home = () => {
  const dispatch=useDispatch()
  const product= useSelector((state)=>state.job)
  const filtered= useSelector((state)=>state.filter)
  const [search, setSearch] = useState(true);
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");
  const [page,setPage]= useState("");
  const time=[]
  useEffect(()=>{  
     dispatch(jobData())
   },[]
  ) 

  let now =new Date("2022-10-30T00:00:08.036Z").getTime();
  product.map((item)=>{return(  
  time.push(((now-new Date(item.postedAt).getTime())/3600000))  
  ) })
  return (<div className='containerDiv'>
    {(filtered.length) ?  <div><div className='cards'>
       {filtered.map((item,index)=>{return( <div key={item.id} 
       className="card">
    <img src={item.logo} ></img>
    <div className='cardInformation'><div style={{marginBottom:10}}>
    {time[index]<24 ? <span > {(time[index]).toFixed()} Hours ago </span>:
    (time[index]<168 ? <span > {(time[index]/24).toFixed()} Days ago </span>:
    (time[index]<504 ? <span > {(time[index]/168).toFixed()} Weeks ago </span>:
    <span> {(time[index]/720).toFixed()} Months ago </span>
    ))}
    <span> , </span>
    <span > {item.contract} </span></div>
    <p className='position' > {item.position}</p>
    <p > {item.company}</p>
    <p className='location' > {item.location}</p></div>
    </div>)})
    }</div> <button className='back' onClick={()=>{
      dispatch(emptyFilter())
      setSearch1("");
      setSearch2("");
      setSearch3("");
      setSearch(false);
         }}> Back </button> </div> : 
    <div>
       <div><header>
      <div className='inputholder' ><span className="material-icons-outlined" style={{color:"rgb(8, 113, 113)"}}>search</span>
      <input placeholder="Filter by title,company"  onChange={(e) => 
        setSearch1(e.target.value.toLowerCase())}>
      </input></div>
      <div  className='inputholder'><span class="material-icons" style={{color:"rgb(8, 113, 113)"}}>location_on</span>
      <input placeholder="Filter by location"  onChange={(e) =>
         setSearch2(e.target.value.toLowerCase())} >
      </input></div>
       <div className='search'>
         <div className='fulltimeholder'> <input type="checkbox" checked={search} onChange=
       {()=>{
         setSearch(!search); 
       }} />
         <span className='fulltime'>Full Time Only</span></div>
       <button onClick={()=>
       {{search ? dispatch(searchFulltime(search1,search2))
        :dispatch(searchData(search1,search2))
       }}}
       >Search</button></div> 
     </header></div>
    <div className='header1'>
      <input placeholder="Filter by title..."  onChange={(e) => 
        setSearch3(e.target.value.toLowerCase())}>
      </input>
      <span class="material-icons">filter_alt</span>
      <span className="material-icons-outlined" style={{backgroundColor:"aqua", color:"white"}} onClick={()=>
        dispatch(mobsearchData(search3))} 
       >search</span>
     </div>
    <div className='cards' >
        {product.slice(0,page+9)
        .map((item,index)=>{return( <div key={item.id} 
          className="card">
    <img src={item.logo} ></img>
    <div className='cardInformation'><div style={{marginBottom:10}}>
    {time[index]<24 ? <span > {(time[index]).toFixed()} Hours ago </span>:
    (time[index]<168 ? <span > {(time[index]/24).toFixed()} Days ago </span>:
    (time[index]<504 ? <span > {(time[index]/168).toFixed()} Weeks ago </span>:
    <span > {(time[index]/720).toFixed()} Months ago </span>
    ))}
    <span> , </span>
       <span> {item.contract} </span> 
    </div> 
       <p className='position'> {item.position}</p>
    <p > {item.company}</p>
    <p  className='location'> {item.location}</p></div>
    </div>)})}
    </div>
    {page < (product.length-9) &&  <button className='loadmore' onClick=
       {()=>{
         setPage(page+9); 
       }}>LoadMore</button> }
    </div> }
    </div>

  )
}