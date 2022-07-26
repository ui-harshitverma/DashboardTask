import React from 'react'
import Card from './Card';
import { ApexChart } from '../Content/slopeChart'
import { ApexChartCircle } from './CircleChart';
import './charts.css'
import './Content.jsx'
import { Timeline } from './Timeline'
import { ProductSales } from './ProductSales';

function Content() {
	const headingData = [
		{
			heading: 'Total Transactions',
			Content: <ApexChart />,
			width: 'w-75'
		},
		{
			heading: 'Recent Orders',
			Content: <ApexChartCircle />,
			width: 'w-25'
		}
	]
	return (
		<>
			<div>
				<Card />
				<div className='charts'>
					{headingData.map((item) => {
						return (
							<>
								<div className={`circlechart ${item.width}`}>
									<div className='chart_container'>
										<div class="card-header">
											<h3 class="card-title">{item.heading}</h3>
										</div>
										<div className='chart-body'>
											{item.Content}
										</div>
									</div>
								</div>
							</>
						)
					})}
				</div>
				<Timeline/>
				<ProductSales/>
			</div>
		</>
	)
}
export default Content;
