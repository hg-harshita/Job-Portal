import React, {useEffect} from 'react'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant';
import { useDispatch } from 'react-redux';
import { setAllJobs } from '@/redux/jobSlice';

const userGetSingleJob = () => {
   const dispatch = useDispatch();
   
}

export default userGetSingleJob