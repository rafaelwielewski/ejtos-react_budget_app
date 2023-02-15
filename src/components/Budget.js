import React, {useState, useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {expenses, budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:'SET_BUDGET', payload:newBudget});
    };

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-secondary'>
        Budget: <b>{currency}</b>
        <input 
            type="number"
            step={10}
            value={`${newBudget}`}
            onChange={(e) => {
                const upperLimit = 20000;
                const updatedBudget = Number(e.target.value);
                
                console.log(`total expenses: ${totalExpenses}`);
                if (updatedBudget <= upperLimit && updatedBudget >= totalExpenses) {
                    setNewBudget(Number(updatedBudget));
                    handleSubmit(e);
                }
                else if (updatedBudget < totalExpenses) {
                    alert('Budget cannot be less than total spending!');
                }
                else {
                    alert(`Budget cannot exceed ${currency} ${upperLimit}`)
                }
            }}
        />
        </div>
    );
};

export default Budget;
