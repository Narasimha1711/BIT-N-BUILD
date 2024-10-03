import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetCompaniesQuery } from '../../redux/service/adminSlice'
import { bring } from '../../redux/features/getCompanies'
import './companiesList.css'
import { Link } from 'react-router-dom'
import SellerSidebar from '../../components/sidebar'
const CompaniesList = () => {

    const dispatch = useDispatch();
    const { isError, error, data, isLoading } = useGetCompaniesQuery();
    

    // useEffect(() => {
    //     if(data) {
    //         console.log(data)
    //         dispatch(bring(data))
    //     }
    // }, [data])
    
  return (
    <div className='home'>
    <SellerSidebar />
<div className="companies-list homeContainer">
            <h1 className="header">Companies List</h1>
            <div className="grid">
            
                {data?.map((item) => (
                    <div key={item._id} className="card">
                        <h2 className="company-name">{item.company_name}</h2>
                        <p style={{fontSize: '20px'}} className="company-id">Company ID: {item.company_domain}</p>
                        <Link
                            to={`/companies/${item._id}`}
                            className="more-button"
                        >
                            More
                        </Link>
                    </div>
                ))}
            </div>
        </div>

      
    </div>
  )
}

export default CompaniesList
