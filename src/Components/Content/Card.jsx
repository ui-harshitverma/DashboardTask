import React from 'react'
import { FiTrendingUp } from "react-icons/fi";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { BiDollar } from "react-icons/bi";
import { VscRocket } from "react-icons/vsc";
import { BsHandbag } from "react-icons/bs";
import "./Card.css"

function Card() {
	const CardData = [
		{
			tag: "Total Sales",
			totalCharge: "34,516",
			profit: "3%",
			shortIcon: <IoIosArrowDropupCircle />,
			shortPara: "last",
			month: 'month',
			mainIcon: <FiTrendingUp />,
			backgroundColor: "a",
			colorMain: "primary"
		},
		{
			tag: "Total Leads",
			totalCharge: "56,992",
			profit: "3%",
			shortIcon: <IoIosArrowDropupCircle />,
			shortPara: "last",
			month: 'month',
			mainIcon: <VscRocket />,
			backgroundColor: "b",
			colorMain: "secondary"
		},
		{
			tag: "Total Profit",
			totalCharge: "$42,567",
			profit: "3%",
			shortIcon: <IoIosArrowDropupCircle />,
			shortPara: "last",
			month: 'month',
			mainIcon: <BiDollar />,
			backgroundColor: "c",
			colorMain: "success"

		},
		{
			tag: "Total Cost",
			totalCharge: "$34,789",
			profit: "3%",
			shortIcon: <IoIosArrowDropupCircle />,
			shortPara: "last",
			month: 'month',
			mainIcon: <BsHandbag />,
			backgroundColor: "d",
			colorMain: "danger"

		}
	]
	return (
		<>
			<div className='card_container'>
				{CardData.map((item) => {
					return (
						<>
							<div className="card_container_item">
								<div className='card_items1'>
									<span>{item.tag}</span>
									<h3>{item.totalCharge}</h3>
									<p><span className={`m-5 ${item.colorMain}`}>{item.shortIcon}{item.profit}</span>{item.shortPara}</p>
									<p>{item.month}</p>
								</div>
								<div className={`card_items2 ${item.backgroundColor}`}>
									{item.mainIcon}
								</div>
							</div>
						</>
					)
				})}
			</div>

		</>
	)
}

export default Card;
