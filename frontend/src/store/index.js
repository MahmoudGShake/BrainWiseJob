import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './companySlice';
import departmentReducer from './departmentSlice';
import employeeReducer from './employeeSlice';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        companies: companyReducer,
        departments: departmentReducer,
        employees: employeeReducer,
        users: userReducer,
    },
});

export default store;
