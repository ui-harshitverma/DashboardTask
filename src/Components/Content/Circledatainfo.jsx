import React from "react";
import './charts.css'

export const Circledatainfo = () => {
	const circleData = [
		{
			status: 'Delivered',
			number: '5238',
			month: 'Last 6 months',
			classNameColor : 'purpple'
		},
		{
			status: 'Cancelled',
			number: '3467',
			month: 'Last 6 months',
			classNameColor : 'orange'
		}
	]
	return (
		<>
			{circleData.map((item) => {
				return (
					<>
						<div class="product-infomation_items">
							<p className={`${item.classNameColor}`}>{item.status}</p>
							<h3>{item.number}</h3>
							<div>
								<p className="light-color">{item.month}</p>
							</div>
						</div>
					</>
				)
			})}
		</>
	)
}