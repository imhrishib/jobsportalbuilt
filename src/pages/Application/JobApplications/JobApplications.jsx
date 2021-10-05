import react from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'
import Cookies from 'js-cookie'


import ApplicationCard from '../../../components/ApplicationCard/Card'
import {useParams} from 'react-router-dom'

const MyJobApplications = ()=>{
  const [applications,setApplications] = useState(null);
  const {id} = useParams()
  useEffect(()=>{
    const fetch_data = async ()=>{
      const res = await axios.get(`/api/jobs/${id}/applications/`,{
        headers: {
            Authorization: 'Bearer ' + Cookies.get("access")
          }
        })
      setApplications(res.data)
    }
    fetch_data()
  },[])

  return (
    <div>
      <h1>Applications for Job with job id {id}</h1>
      <div className="card-list">
      {
        applications?.map((application)=><ApplicationCard key={application.id} application={application} />)
      }
      </div>
    </div>
  )
}

export default MyJobApplications
