
export const jobReducer = (
  state = [],
  action
) => {
  switch (action.type) {
    case "get_job_succes":
      return action.payload;
    case "get_job_failed":
      return action.payload;
     
    default:
      return state;
  }
};

export const filterReducer = (
  state = [],
  action
) => {
  switch (action.type) {
    case "search":
      return  action.payload;
    case "emptyFilter"  :
        return  action.payload ;  
    default:
      return state;
  }
};
