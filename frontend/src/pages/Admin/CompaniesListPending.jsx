import React from 'react'
import './CompaniesList.css'
import { useGetByIdAcceptMutation, useGetByIdRejectMutation, useGetCompaniesPendingQuery } from '../../redux/service/adminSlice';
import { Link } from 'react-router-dom';
import { Button as BaseButton, buttonClasses } from '@mui/material';
import SellerSidebar from '../../components/sidebar';

const CompaniesListPending = () => {

    const { isError, error, data, isLoading } = useGetCompaniesPendingQuery();
    const [ fun, { data: data1, error: error1, isError: isError1, isLoading: isLoading1 }] = useGetByIdAcceptMutation()
    const [ fun1, { data: data2, error: error2, isError: isError2, isLoading: isLoading2 }] = useGetByIdRejectMutation()
    

    const handleClick = (id) => {
        fun(id);
    }

    const handleClick1 = (id) => {
        fun1(id);
    }
    
  return (
    <div>

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

                        <div className="button-group">
                            <button onClick={() => {handleClick(item._id)}} className="simple-button accept-button">Accept</button>
                            <button onClick={() => {handleClick1(item._id)}} className="simple-button reject-button">Reject</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      
    </div>
      
    </div>
  )
}

export default CompaniesListPending
