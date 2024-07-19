import React from 'react'
import data from './data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function PrivateEquity() {
	return (
		<div className="private-equities">
			{data.map((equity,index)=>(
				<div className="private-equity" key={index}>
					<div className="inai-header d-flex justify-content-between align-items-center">
						<div className="d-flex align-items-center">
							<strong className="bank-name">{equity.name}</strong>
						</div>
						<div className="d-flex align-items-center">
							<strong className="bank-amount text-purple">{equity.amount}</strong>
							<span className={`badge percentage ms-1 ${equity.pofitLoss}`}>{equity.percentage}</span>
						</div>
					</div>
					<ul className="list-unstyled inai-list">
						{equity.equities.map((equityItem,index)=>(
							<li className="d-flex justify-content-between align-items-center" key={index}>
								<span className="el-name">{equityItem.title}</span>
								<div className="d-flex align-items-center">
									<div className="d-flex flex-column align-items-end">
										<span className="amount">{equityItem.amount}</span>
										<span className={`percentage ${equityItem.profitLoss}`}>{equityItem.percentage}</span>
									</div>
									<FontAwesomeIcon icon={faChevronRight} className="ms-2" />
								</div>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}