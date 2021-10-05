import react from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'
import Cookies from 'js-cookie'


import ApplicationCard from '../../../../components/ApplicationCard/Card'

const MyJobApplications = ()=>{
  const [applications,setApplications] = useState(null);

  useEffect(()=>{
    const fetch_data = async ()=>{
      const res = await axios.get('/api/jobs/applications/',{
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
      <h1>My Job applications will appear here</h1>
      <div className="card-list">
      {
        applications?.map((application)=><ApplicationCard key={application.id} application={application} />)
      }
      </div>
    </div>
  )
}

export default MyJobApplications
