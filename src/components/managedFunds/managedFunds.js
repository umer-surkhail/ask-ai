import React from 'react'
import data from './data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function ManagedFunds() {
	return (
		<div className="managed-fund-items">
			{data.map((mfitem,index) => (
				<div className="managed-fund-item" key={index}>
					<div className="inai-header d-flex justify-content-between align-items-center">
						<span className="mfi-name">{mfitem.name}</span>
						<div className="d-flex align-items-center">
							<span className="amount text-purple">{mfitem.amount}</span>
							<span className={`badge percentage ms-2 ${mfitem.profitLoss}`}>{mfitem.percentage}</span>
						</div>
					</div>
					<ul className="list-unstyled inai-list">
						{mfitem.mfitems.map((mf,index)=>(
							<li className="d-flex justify-content-between align-items-center" key={index}>
								<span className="mf-name">{mf.title}</span>
								<div className="d-flex align-items-center">
									<div className="d-flex flex-column align-items-end">
										<span className="amount">{mf.amount}</span>
										<span className={`percentage ${mf.profitLoss}`}>{mf.percentage}</span>
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