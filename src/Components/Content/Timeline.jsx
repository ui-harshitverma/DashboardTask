import React from "react";
import './Timeline.css'
import { FaUserPlus, FaComment, FaThumbsUp, FaEnvelope, FaShoppingBag, FaChrome, FaOpera, FaFirefox, FaInternetExplorer, FaAndroid } from "react-icons/fa";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";


export const Timeline = () => {
	const Timelinedata = [
		{
			icons: <FaUserPlus />,
			name: ' Mr John',
			content: "Started following you",
			date: "01 June 2020",
			bgColor: "bg-primary-transparent",
			min: "1m",
			textColor: "text-primary",
			minBgcolor: "bg-primary"
		},
		{
			icons: <FaComment />,
			name: ' Mr John',
			content: "Started following you",
			date: "01 June 2020",
			bgColor: "bg-secondary-transparent",
			min: "1m",
			textColor: "text-secondary",
			minBgcolor: "bg-danger"
		},
		{
			icons: <FaThumbsUp />,
			name: ' Mr John',
			content: "Started following you",
			date: "01 June 2020",
			bgColor: "bg-success-transparent",
			min: "1m",
			textColor: "text-success",
			minBgcolor: "bg-warning"
		},
		{
			icons: <FaEnvelope />,
			name: ' Mr John',
			content: "Started following you",
			date: "01 June 2020",
			bgColor: "bg-info-transparent",
			min: "1m",
			textColor: "text-info",
			minBgcolor: "bg-info"
		},
		{
			icons: <FaShoppingBag />,
			name: ' Mr John',
			content: "Started following you",
			date: "01 June 2020",
			bgColor: "bg-secondary-transparent",
			min: "1m",
			textColor: "text-danger",
			minBgcolor: "bg-warning"
		}
	]

	const Daily = [
		{
			heading2: "Task Finished",
			date: "29 Oct 2020",
			content: "Adam Berry finished task on",
			title: "Project Management"
		},
		{
			heading2: "New Comment",
			date: "25 Oct 2020",
			content: "Victoria commented on Project ",
			title: "AngularJS Template"
		},
		{
			heading2: "New Comment",
			date: "25 Oct 2020",
			content: "Victoria commented on Project ",
			title: "AngularJS Template"
		},
		{
			heading2: "Task Overdue",
			date: "14 Oct 2020",
			content: "Petey Cruiser finished task",
			title: "Integrated management"
		},
		{
			heading2: "Task Overdue",
			date: "29 Oct 2020",
			content: "Petey Cruiser finished task",
			title: "Integrated management"
		}
	]

	return (
		<>
			<div className="main_container_timeline">
				<div className="timeline common-width">
					<div class="card-header">
						<h3 class="card-title">Timeline</h3>
					</div>
					<div class="card-body pb-0 pt-4">
						{Timelinedata.map((item) => {
							return (
								<>
									<div class="activity1">
										<div class="activity-blog">
											<div class={`activity-img brround ${item.bgColor} ${item.textColor}`}>
												{item.icons}
											</div>
											<div class="activity-details d-flex">
												<div>
													<b><span class="text-dark"> {item.name} </span> </b> {item.content} <span class="d-flex text-muted fs-11">{item.date}</span>
												</div>
												<div class="ms-auto fs-13 text-dark fw-semibold">
													<span class={`badge ${item.minBgcolor} text-white`}>{item.min}</span>
												</div>
											</div>
										</div>
									</div>
								</>
							)
						})}
					</div>
				</div>
				<div className="timeline common-width">
					<div class="card-header">
						<h4 class="card-title fw-semibold ">Browser Usage</h4>
					</div>
					<div className="card-body">
						<div class="d-md-flex align-items-center browser-stats">
							<div class="d-flex d-2">
								<i class="fa fa-chrome bg-secondary-gradient text-white me-2 icons-style">
									<FaChrome />
								</i>

								<p class="fs-16 my-auto mb-0">Chrome</p>
							</div> <div class="ms-auto my-auto">
								<div class="d-flex">
									<span class="my-auto fs-16">35,502</span>
									<span class="text-success fs-15">
										<i class="fe fe-arrow-up">
											<IoIosArrowRoundUp />
										</i>12.75%</span>
								</div>
							</div>
						</div>
						<div class="d-md-flex align-items-center browser-stats">
							<div class="d-flex d-2">
								<i class="fa fa-opera text-white bg-danger-gradient me-2 icons-style"><FaOpera /></i>
								<p class="fs-16 my-auto mb-0">Opera</p>
							</div>
							<div class="ms-auto my-auto">
								<div class="d-flex d-2">
									<span class="my-auto fs-16">12,563</span>
									<span class="text-danger fs-15"><i class="fe fe-arrow-down"><IoIosArrowRoundDown /></i>15.12%</span>
								</div>
							</div>
						</div>
						<div class="d-md-flex align-items-center browser-stats">
							<div class="d-flex d-2">
								<i class="fa fa-firefox text-white bg-purple-gradient me-2 icons-style"><FaInternetExplorer /></i>
								<p class="fs-16 my-auto mb-0">IE</p>
							</div>
							<div class="ms-auto my-auto">
								<div class="d-flex d-2">
									<span class="my-auto fs-16">25,364</span>
									<span class="text-success fs-15"><i class="fe fe-arrow-up"><IoIosArrowRoundUp /></i>24.37%</span>
								</div>
							</div>
						</div>
						<div class="d-md-flex align-items-center browser-stats">
							<div class="d-flex d-2">
								<i class="fa fa-edge text-white bg-info-gradient me-2 icons-style"><FaFirefox /></i>
								<p class="fs-16 my-auto mb-0">Firefox</p>
							</div>
							<div class="ms-auto my-auto">
								<div class="d-flex d-2">
									<span class="my-auto fs-16">14,635</span>
									<span class="text-success fs-15">
										<i class="fe fe-arrow-up"><IoIosArrowRoundUp /></i>15,63%</span>
								</div>
							</div>
						</div>
						<div class="d-md-flex align-items-center browser-stats">
							<div class="d-flex d-2">
								<i class="fa fa-android text-white bg-success-gradient me-2 icons-style"><FaAndroid /></i>
								<p class="fs-16 my-auto mb-0">Android</p>
							</div> <div class="ms-auto my-auto">
								<div class="d-flex d-2">
									<span class="my-auto fs-16">15,453</span>
									<span class="text-danger fs-15"><i class="fe fe-arrow-down"><IoIosArrowRoundDown /></i>23.70%</span>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div className="timeline common-width">
					<div class="card-header">
						<h4 class="card-title fw-semibold">Daily Activity</h4>
					</div>
					<div className="card-body">
						{Daily.map((item) => {
							return (
								<>
									<ul class="task-list">
										<li>
											<i class="task-icon bg-primary"></i>
											<h6>{item.heading2}<span class="text-muted fs-11 mx-2">{item.date}</span></h6>
											<p class="text-muted fs-12">{item.content}<a href="https://www.google.com" class="fw-semibold">{item.title}</a></p>
										</li>
									</ul>
								</>
							)
						})}

					</div>
				</div>

			</div>

		</>
	)
}