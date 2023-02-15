import React, {useState, useContext} from 'react';
import {AppContext} from '../context/AppContext';
import styles from '../Dropdown.css'

const CurrencyDropdown = () => {
    const GBP = '£';
	const USD = '$';
	const EUR = "€"
	const INR = "₹"

    const { dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState(GBP);

    console.log(currency);

	const handleCurrencyChange = (event) => {
		let value = event.target.value;
        setCurrency(value);
		dispatch({
			type: 'CHG_CURRENCY',
			payload: value
		})
	}

    return (
        <div id='currency-box' className='alert alert-primary'
        style={{
                backgroundColor:`rgba(96, 244, 110, 0.8)`
            }}
        >
            <select id='currency-selection' onChange={handleCurrencyChange} className='form-select'
            style={{
                backgroundColor:`rgba(255, 255, 255, 0.38)`
            }}
            >
                <option className="currencyOption" selected disabled>Currency: {currency}</option>
                <option className="currencyOption" value={GBP}>{GBP} GBP</option>
                <option className="currencyOption" value={USD}>{USD} USD</option>
                <option className="currencyOption" value={EUR}>{EUR} Euro</option>
                <option className="currencyOption" value={INR}>{INR} INR</option>
            </select>
        </div>

    );
};

export default CurrencyDropdown;