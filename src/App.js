import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
import Remaining from './components/Remaining';
import ExpenseItem from './components/ExpenseItem'; 
import ExpenseTotal from './components/ExpenseTotal';
import AllocationForm from './components/AllocationForm';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            /* Add Budget component here */
                                            // Budget component
                    <div className='col-sm'>
                    <Budget />
                </div>
                        }        

                        {
                            /* Add Remaining component here*/
                                             //Remaining component
                    <div className='col-sm'>
                    <Remaining />
                </div>
                        }        

                        {
                            /* Add ExpenseTotal component here */
                                             //ExpenseTotal component
                    <div className='col-sm'>
                    <ExpenseTotal />
                </div>
                        }        
                       
                        {
                            /* Add ExpenseList component here */
                            <ExpenseList />
                        }         

                        {
                            /* Add ExpenseItem component here */
                            <ExpenseItem />
                            
                        }        

                        {
                            /* Add AllocationForm component here under */
                            <AllocationForm />
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
