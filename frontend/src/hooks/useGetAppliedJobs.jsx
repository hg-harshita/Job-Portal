import { setAllAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useDispatch } from "react-redux";
import {useEffect} from 'react'

const useGetAppliedJobs = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
     const fetchAppliedJobs = async() => {
      try{
          const res = await axios.get(`${APPLICATION_API_END_POINT}/get`, {withCredentials:true});
          console.log(res.data);
          if(res.data.success){
                 dispatch(setAllAppliedJobs(res.data.application));
          }
      }catch(error){
                 console.log(error);
      }
     }
      fetchAppliedJobs();
    },[]);
}

export default useGetAppliedJobs;