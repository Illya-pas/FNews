import React from 'react'
import './Result.scss'
import { useSelector } from "react-redux";

export default function Result() {

	const currentInfo = useSelector((state) => state.input.tag);

	return (
		<div className="result-container">
			{currentInfo}
		</div>
	)
}