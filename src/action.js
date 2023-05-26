
import axios from "axios";
export const jobData = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      "https://jabama-devjobs-api.vercel.app/api/v1/jobs/"
    );
    const jobresult=data.result
    const jobdata=jobresult.items
    dispatch({ type: "get_job_succes", payload: [...jobdata] });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: "get_job_failed", payload: error.message });
  }
};

export const searchFulltime = (search1,search2) => async (dispatch, getState) => {
  const help=getState().job
  const filtered = help.filter(obj => {
    return obj.contract === 'Full Time';
  })       
      const filtered1 = filtered.filter(obj => {
        return (obj.location).toLowerCase().includes(search2) 
      }); 
      const filtered2 = filtered1.filter(obj => {
        return (obj.position).toLowerCase().includes(search1) ||(obj.company).toLowerCase().includes(search1)
      });    
  dispatch({ type: "search", payload: filtered2});
};

export const searchData = (search1,search2) => async (dispatch, getState) => {
  const help=getState().job
  const filtered = help     
      const filtered1 = filtered.filter(obj => {
        return (obj.location).toLowerCase().includes(search2) 
      }); 
      const filtered2 = filtered1.filter(obj => {
        return (obj.position).toLowerCase().includes(search1) ||(obj.company).toLowerCase().includes(search1)
      });   
  dispatch({ type: "search", payload: filtered2});
};

export const mobsearchData = (search3) => async (dispatch, getState) => {
  const help=getState().job  
  const filtered2 = help.filter(obj => {
    return (obj.position).toLowerCase().includes(search3) ||(obj.company).toLowerCase().includes(search3)||
    (obj.contract).toLowerCase().includes(search3) ||(obj.location).toLowerCase().includes(search3) 
  });  
     
  dispatch({ type: "search", payload: filtered2});
};

export const emptyFilter = () => (dispatch, getState) => {
  dispatch({ type: "emptyFilter", payload: [] });
};