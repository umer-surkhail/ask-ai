import React from 'react'
import data from './data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function PrivateProperty() {
	return (
		<div className="fixed-incomes">
			{data.map((fixedIncome,index)=>(
				<div className="listed-share" key={index}>
					<div className="inai-header d-flex justify-content-between align-items-center">
						<div className="d-flex align-items-center">
							<strong className="bank-name">{fixedIncome.name}</strong>
						</div>
						<div className="d-flex align-items-center">
							<strong className="bank-amount text-purple">{fixedIncome.amount}</strong>
							<span className={`badge percentage ms-1 ${fixedIncome.pofitLoss}`}>{fixedIncome.percentage}</span>
						</div>
					</div>
					<ul className="list-unstyled inai-list">
						{fixedIncome.incomes.map((income,index) => (
							<li className="d-flex justify-content-between align-items-center" key={index}>
								<div className="d-flex flex-column align-items-start">
									<span className="income-name">{income.title}</span>
								</div>
								<div className="d-flex align-items-center">
									<div className="d-flex flex-column align-items-end">
										<span className="amount">{income.amount}</span>
										<span className={`percentage ${income.profitLoss}`}>{income.percentage}</span>
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