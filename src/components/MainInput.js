import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { checkFakeArticle } from '../redux/actions'
import {NavLink} from 'react-router-dom'

export default function MainInput() {

	const dispatch = useDispatch();

	const checkArticle = (event) => {
		event.preventDefault()
		setInputValue('')
		dispatch(checkFakeArticle(inputValue))
	}

	const [inputValue, setInputValue] = useState('')

	return (
		<form>
			<div className="form-group">
		    <label htmlFor="inputArticle">Введіть текст статті:</label>
		    <textarea 
		    	placeholder='Ваше повідомлення...' 
		    	className="form-control"
		    	value={inputValue}
		    	onChange={event => setInputValue(event.target.value)}
		    	id="inputArticle" 
		    	rows="10"></textarea>
		    <span  onClick={checkArticle}>
		    	<NavLink to="/result" className="btn btn-dark">Перевірити</NavLink>
		    </span>
		  </div>
		</form>
	)
}