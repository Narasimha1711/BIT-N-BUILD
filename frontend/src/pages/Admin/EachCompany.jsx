import React, { useEffect } from 'react';
import './eachCompany.css';
import { useParams } from 'react-router-dom';
import { useGetByIdQuery, useGetChartDataMutation } from '../../redux/service/adminSlice';
import MonthlyRevenueChart from '../../components/MonthlyRevenue';
import Burn from '../../components/Burn';
import MonthlyActiveUsersChart from '../../components/MonthlyActiveUser';

const eachCompany = () => {

    const { id } = useParams();

  if (!id) {
    return <div>Loading...</div>;
  }

  const {isLoading, error, isError, data } = useGetByIdQuery(id);

  const [fun, { data: data1, isError: isError1, error: error1, isLoading: isLoading1 }] = useGetChartDataMutation();

  useEffect(() => {
    if (id) {
      try {

        fun(id).unwrap();
      }
      catch(err) {
        console.log(err)
      }
    }
}, [id]);
  
  console.log(data)

  if(isLoading || isLoading1) {
    return <div>Loading...</div>;
  }

  

  return (
    <>
    <div className="company-details-container">
      <h1 className="company-name">{data.company_name}</h1>
      <div className="company-info-grid">
        <div className="company-card">
          <h3>Contact Information</h3>
          {/* <p><strong>Device Token:</strong> {company.deviceToken || 'N/A'}</p> */}
          <p><strong>Contact Representative:</strong> {data.contact_representative || 'N/A'}</p>
          <p><strong>Registered Address:</strong> {data.registered_address}</p>
        </div>

        <div className="company-card">
          <h3>Registration Details</h3>
          <p><strong>Registration Month:</strong> {data.registration_month}</p>
          <p><strong>Registration Year:</strong> {data.registration_year}</p>
          <p><strong>Business Structure:</strong> {data.business_structure}</p>
        </div>

        <div className="company-card">
          <h3>Company Information</h3>
          <p><strong>Domain:</strong> {data.company_domain}</p>
          <p><strong>Sub-Domain:</strong> {data.sub_domain || 'N/A'}</p>
          <p><strong>Number of Employees:</strong> {data.number_of_employees}</p>
        </div>

        <div className="company-card">
          <h3>Legal Documents</h3>
          <p><strong>Memorandum of Association:</strong> {data.memorandum_of_association}</p>
          <p><strong>Articles of Association:</strong> {data.articles_of_association}</p>
          <p><strong>Intellectual Property:</strong> {data.intellectual_property || 'N/A'}</p>
        </div>

        <div className="company-card">
          <h3>Financial Information</h3>
          <p><strong>Latest Financial Report:</strong> {data.latest_financial_report}</p>
          <p><strong>Funding Status:</strong> {data.current_funding_status}</p>
          <p><strong>Pending Status:</strong> {data.isPending ? 'Yes' : 'No'}</p>
        </div>
      </div>

    </div>
      <MonthlyRevenueChart data1={data1}/>
      <Burn data1={data1}/>
      <MonthlyActiveUsersChart data1={data1} />
      </>
  );
};

export default eachCompany;
