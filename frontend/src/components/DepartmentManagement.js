import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies } from '../store/companySlice';

const CompanyManagement = () => {
    const dispatch = useDispatch();
    const companies = useSelector((state) => state.companies.entities);

    useEffect(() => {
        dispatch(fetchCompanies());
    }, [dispatch]);

    return (
        <div>
            <h1>Companies</h1>
            <ul>
                {companies.map((company) => (
                    <li key={company.id}>{company.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyManagement;
