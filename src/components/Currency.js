import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// Currencies $ Dollar,£ Pound,€ Euro,₹ Ruppee
let currencies = [
    {
        name: 'Dollar',
        symbol: '$',
    },
    {
        name: 'Pound',
        symbol: '£',
    },
    {
        name: 'Euro',
        symbol: '€',
    },
    {
        name: 'Ruppee',
        symbol: '₹',
    },
];

const Currency = () => {
    const { currency } = useContext(AppContext);
    return (
        <div className="alert alert-secondary">
            {currency}
        </div>
    );
};

export default Currency;