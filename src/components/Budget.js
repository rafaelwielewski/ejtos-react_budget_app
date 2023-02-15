import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {budget, dispatch, totalExpenses} = useContext(AppContext);

    const handleChange = (event) => {
        const newBudget = event.target.value;
        const maxBudget = 20000;

        if(newBudget > maxBudget)
        {
            alert('Budget cannot exceed £' + maxBudget);
        }
        else if(newBudget < totalExpenses)
        {
            alert('You cannot reduce the value lower than the spending £' + totalExpenses);
        }
        else
        {
            dispatch({
                type:    'SET_BUDGET',
                payload: newBudget,
            });
        }
    }


    return (
        <div className='alert alert-secondary'>
                <form>
                    <label htmlFor="budget">Budget: £ </label>
                    <input
                        style={{width: '70%'}}
                        name="budget"
                        type="number"
                        onInput={handleChange}
                        value={budget}
                        step="10"
                    />
                </form>
        </div>
    );
};

export default Budget;