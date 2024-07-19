import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faChevronRight, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

export default function NetBlock(props) {
	return (
		<div className={`${props.blockName}`}>
			<div className="d-flex justify-content-between align-items-center mb-3">
					<h2>{props.blockName==="net-assets-block" ? "Net assets": props.blockName==="gross-income-block" ? "Gross iconme":"Net asset"}</h2>
					<FontAwesomeIcon icon={faEllipsisVertical} className="cursor-pointer" />
				</div>
				<div className="price-holder d-flex justify-content-between align-items-center">
					<div className="price-block d-flex flex-column">
						<strong className="price">{props.blockName==="net-assets-block" ? "$74,769,618": props.blockName==="gross-income-block" ? "$1,210,000":"$74,769,618"}</strong>
						{props.blockName==="net-assets-block" &&
							<ul className="list-unstyled asset-stats d-flex align-items-center">
								<li className="d-flex justify-content-center align-items-center active">
									<FontAwesomeIcon icon={faArrowTrendUp} />
									+0.1%
								</li>
								<li className="d-flex justify-content-center align-items-center">
									last day
								</li>
							</ul>
						}
						{props.blockName==="gross-income-block" &&
							<ul className="list-unstyled asset-stats d-flex align-items-center">
								<li className="d-flex justify-content-center align-items-center text-success-bg-success">
									<FontAwesomeIcon icon={faArrowTrendUp} />
									+0.1%
								</li>
								<li>vs</li>
								<li className="d-flex justify-content-center align-items-center">
									last day
								</li>
							</ul>
						}
						{props.blockName==='net-asset-block' && 
							<span className="returns-block d-flex align-items-center mt-2 mb-3">
								Returns:
								<strong className="text-success mx-1">+$3,285,372</strong>
								<span className="badge bg-success-dark text-white d-flex align-items-center">
									<FontAwesomeIcon icon={faArrowTrendUp} className="me-2" /> 4.6%
								</span>
							</span>
						}
					</div>
					<Link to="/net-assets" className="icon-holder transition justify-content-center align-items-center cursor-pointer">
						<FontAwesomeIcon icon={faChevronRight} />
					</Link>
				</div>
				{props.blockName==="net-asset-block" && 
					<React.Fragment>
						<ul className="calculate-asset-stats list-unstyled">
							<li className="d-flex align-items-center">
								<span>Realised gains:</span>
								<strong className="text-success-dark">+$1,219,000</strong>
							</li>
							<li>
								<span>Unrealised gains:</span>
								<strong className="text-success-dark">+$2,066,372</strong>
							</li>
						</ul>
						<ul className="stat-spans list-unstyled d-flex justify-content-between">
							<li className="transition cursor-pointer">Day</li>
							<li className="transition cursor-pointer">Month</li>
							<li className="transition cursor-pointer">Quarter</li>
							<li className="transition cursor-pointer active">FY2024</li>
						</ul>
					</React.Fragment>
				}
				{props.blockName==="net-assets-block" &&
					<ul className="calculate-asset-stats list-unstyled">
						<li className="d-flex align-items-center">
							<span>Gross assets:</span>
							<strong>$78,789,618</strong>
						</li>
						<li>
							<span>Liabilities:</span>
							<strong className="text-orange">$4,020,000</strong>
						</li>
					</ul>
				}
				{props.blockName==="gross-income-block" &&
					<React.Fragment>
						<ul className="calculate-asset-stats list-unstyled">
							<li className="d-flex align-items-center">
								<span>Less expenses:</span>
								<strong className="text-danger">-$608,950</strong>
							</li>
							<li>
								<span>Net income:</span>
								<strong>$601,050</strong>
							</li>
						</ul>
						<ul className="stat-spans list-unstyled d-flex justify-content-between">
							<li>Day</li>
							<li>Month</li>
							<li>Quarter</li>
							<li className="active">FY2024</li>
						</ul>
					</React.Fragment>
				}
		</div>
	)
}