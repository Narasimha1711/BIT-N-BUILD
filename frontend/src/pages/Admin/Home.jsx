import React from 'react';
import './home.css';
import Widgets from '../../components/Widget';
import SellerSidebar from '../../components/sidebar';
import BloodtypeSharpIcon from "@mui/icons-material/BloodtypeSharp";
import MedicalInformationSharpIcon from "@mui/icons-material/MedicalInformationSharp";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import { useGetCompaniesQuery, useGetCompaniesPendingQuery } from '../../redux/service/adminSlice';

const Home = () => {
  const { data: companiesData, isLoading: isLoadingCompanies, isError: isErrorCompanies, error: errorCompanies } = useGetCompaniesQuery();
  const { data: pendingRequestsData, isLoading: isLoadingPendingRequests, isError: isErrorPendingRequests, error: errorPendingRequests } = useGetCompaniesPendingQuery();

  // Log the entire responses for debugging
  console.log('Companies Data:', companiesData);
  console.log('Pending Requests Data:', pendingRequestsData);

  // Loading state check
  if (isLoadingCompanies || isLoadingPendingRequests) {
    return <div>Loading...</div>;
  }

  // Error handling
  if (isErrorCompanies || isErrorPendingRequests) {
    return <div>Error loading data: {errorCompanies?.message || errorPendingRequests?.message}</div>;
  }

  // Handle cases where data might be undefined
  const companiesCount = companiesData?.length || 0; // Default to 0 if data is not available
  const pendingRequestsCount = pendingRequestsData?.length || 0; // Default to 0 if data is not available

  return (
    <div className="home">
      <SellerSidebar />
      <div className="homeContainer">
        <div className="widgets">
          <Widgets 
            name="Companies" 
            count={companiesCount} 
            see="See The Medicines" 
            path='/getCompanies' 
            icon={<BloodtypeSharpIcon />} 
          />
          <Widgets 
            name="Pending Requests" 
            count={pendingRequestsCount} 
            see="See The Medicines" 
            path='/getCompaniesPending'
            icon={<MedicalInformationSharpIcon />} 
          />
          <Widgets 
            name="Add Grants" 
            see="See The Details" 
            icon={<PersonAddAltSharpIcon />} 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
