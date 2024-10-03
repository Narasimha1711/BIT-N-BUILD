import React, { useState } from 'react';
import './AddFund.css'; // Ensure you create or update this CSS file for styling
import SellerSidebar from '../../components/sidebar';
import { useAddFundMutation } from '../../redux/service/adminSlice';

const AddFund = () => {
    const [fundAmount, setFundAmount] = useState('');
    const [domain, setDomain] = useState('');
    const [equity, setEquity] = useState('');
    const [purpose, setPurpose] = useState('');

    const [fun, { isLoading, isError, error, data }] = useAddFundMutation();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // console.log({ fundAmount, domain, equity });
        fun({ fundAmount, domain, equity, purpose })
    };

    return (
        <div className='home'>
        <SellerSidebar />
        <div className="add-fund-container homeContainer">
            <h1 className="form-title">Add Grants to Startups</h1>
            <form onSubmit={handleSubmit} className="add-fund-form">
                <div className="form-group">
                    <label htmlFor="fundAmount" className="form-label">Fund Amount</label>
                    <input
                        type="number"
                        id="fundAmount"
                        value={fundAmount}
                        onChange={(e) => setFundAmount(e.target.value)}
                        className="form-input"
                        placeholder="Enter fund amount"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="domain" className="form-label">Domain of Company</label>
                    <input
                        type="text"
                        id="domain"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        className="form-input"
                        placeholder="Enter domain of the company"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="equity" className="form-label">Equity (%)</label>
                    <input
                        type="number"
                        id="equity"
                        value={equity}
                        onChange={(e) => setEquity(e.target.value)}
                        className="form-input"
                        placeholder="Enter equity percentage"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="purpose" className="form-label">Grant Purpose </label>
                    <input
                        type="text"
                        id="purpose"
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                        className="form-input"
                        placeholder="Enter purpose"
                        required
                    />
                </div>

                <button type="submit" className="submit-button">{isLoading ? 'Loading...' : 'Add Fund'}</button>
            </form>
        </div>
        </div>
    );
};

export default AddFund;
