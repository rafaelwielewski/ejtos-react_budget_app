import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch, currency } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	const increaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense
		});

	}

	const decreaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};

		dispatch({
			type: 'RED_EXPENSE',
			payload: expense
		});

	}

	return (
		<tr>
		<td>{props.name}</td>
		<td>{currency}{props.cost}</td>
		<td><button onClick={event=> increaseAllocation(props.name)} className="btn btn-circle"
		style={{
				backgroundColor:"#218f00",
				width: "50px",
  				height: "50px",
  				borderRadius: "40px",
  				fontSize: 62,
  				display: "flex",
  				justifyContent: "center",
  				alignItems: "center",
  				textAlign: "center",
				color: "white"
				
			}}
		>+</button></td>
		<td><button onClick={event=> decreaseAllocation(props.name)} className="btn btn-circle"
		style={{
				backgroundColor:"#b51c1c",
				width: "50px",
  				height: "50px",
  				borderRadius: "40px",
  				fontSize: 62,
  				display: "flex",
  				justifyContent: "center",
  				alignItems: "center",
  				textAlign: "center",
				color: "white"
				
			}}
		>-</button></td>
		<td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
		</tr>
	);
};

export default ExpenseItem;