import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { Tabs, Tab, Table } from 'react-bootstrap';
import NetBlock from '../netBlock/netBlock';
import './home.css'


export default function Home() {
	return (
		<div className="home-page">
			<NetBlock blockName="net-assets-block" />
			<div className="add-btns-holder d-flex justify-content-between">
				<Link to="" className="btn btn-outline d-flex justify-content-center align-items-center">
					<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path d="M18.1844 10.7719C17.9143 10.565 17.6004 10.4231 17.2667 10.357C16.933 10.2909 16.5887 10.3024 16.2602 10.3906L13.4375 11.0359C13.4375 11.0031 13.4375 10.9703 13.4375 10.9375C13.4375 10.2745 13.1741 9.63857 12.7053 9.16973C12.2364 8.70089 11.6005 8.4375 10.9375 8.4375H7.02656C6.65717 8.43649 6.29124 8.50875 5.94995 8.65009C5.60867 8.79143 5.2988 8.99905 5.03828 9.26094L3.35938 10.9375H1.5625C1.1481 10.9375 0.750671 11.1021 0.457646 11.3951C0.16462 11.6882 0 12.0856 0 12.5L0 15.625C0 16.0394 0.16462 16.4368 0.457646 16.7299C0.750671 17.0229 1.1481 17.1875 1.5625 17.1875H9.375C9.45165 17.1875 9.52801 17.1781 9.60234 17.1594L14.6023 15.9094C14.6502 15.8976 14.6969 15.882 14.7422 15.8625L17.775 14.5703C17.793 14.5633 17.8102 14.5555 17.8273 14.5469C18.1665 14.3772 18.457 14.124 18.6713 13.8111C18.8856 13.4982 19.0168 13.1359 19.0525 12.7584C19.0882 12.3808 19.0273 12.0003 18.8754 11.6528C18.7235 11.3053 18.4857 11.0021 18.1844 10.7719ZM2.8125 15.3125H1.875V12.8125H2.8125V15.3125ZM17.0062 12.8602L14.0758 14.1102L9.25937 15.3125H4.6875V12.2656L6.36406 10.5891C6.45072 10.5015 6.5539 10.4319 6.66762 10.3844C6.78133 10.337 6.90334 10.3125 7.02656 10.3125H10.9375C11.1033 10.3125 11.2622 10.3783 11.3794 10.4956C11.4967 10.6128 11.5625 10.7717 11.5625 10.9375C11.5625 11.1033 11.4967 11.2622 11.3794 11.3794C11.2622 11.4967 11.1033 11.5625 10.9375 11.5625H8.75C8.50136 11.5625 8.2629 11.6613 8.08709 11.8371C7.91127 12.0129 7.8125 12.2514 7.8125 12.5C7.8125 12.7486 7.91127 12.9871 8.08709 13.1629C8.2629 13.3387 8.50136 13.4375 8.75 13.4375H11.25C11.3207 13.4375 11.3912 13.4297 11.4602 13.4141L16.6945 12.2102L16.7313 12.2008C16.7846 12.1863 16.8406 12.1842 16.8949 12.1948C16.9492 12.2055 17.0003 12.2284 17.0442 12.262C17.0882 12.2955 17.1239 12.3387 17.1484 12.3883C17.173 12.4378 17.1858 12.4924 17.1859 12.5477C17.1863 12.611 17.1699 12.6733 17.1383 12.7282C17.1068 12.7831 17.0612 12.8286 17.0062 12.8602ZM12.8125 7.8125C12.9478 7.81234 13.083 7.80347 13.2172 7.78594C13.4958 8.2798 13.9036 8.68854 14.3968 8.96836C14.8899 9.24818 15.45 9.38854 16.0168 9.3744C16.5837 9.36026 17.136 9.19214 17.6147 8.88807C18.0933 8.584 18.4801 8.15543 18.7338 7.64829C18.9874 7.14115 19.0983 6.57455 19.0546 6.0092C19.0108 5.44385 18.814 4.90107 18.4854 4.439C18.1567 3.97694 17.7085 3.61301 17.1888 3.38621C16.6691 3.15942 16.0974 3.0783 15.5352 3.15156C15.2649 2.67275 14.8732 2.27371 14.3994 1.99472C13.9257 1.71574 13.3867 1.56667 12.8369 1.56259C12.2871 1.5585 11.746 1.69953 11.2681 1.97145C10.7903 2.24336 10.3926 2.63653 10.1153 3.11127C9.83799 3.58601 9.69083 4.12551 9.68869 4.6753C9.68654 5.2251 9.82948 5.76573 10.1031 6.24262C10.3767 6.7195 10.7713 7.11577 11.247 7.39141C11.7227 7.66704 12.2627 7.8123 12.8125 7.8125ZM15.9375 5C16.1847 5 16.4264 5.07331 16.632 5.21066C16.8375 5.34801 16.9977 5.54324 17.0924 5.77165C17.187 6.00005 17.2117 6.25139 17.1635 6.49386C17.1152 6.73634 16.9962 6.95907 16.8214 7.13388C16.6466 7.3087 16.4238 7.42775 16.1814 7.47598C15.9389 7.52421 15.6876 7.49946 15.4591 7.40485C15.2307 7.31024 15.0355 7.15002 14.8982 6.94446C14.7608 6.7389 14.6875 6.49723 14.6875 6.25C14.6875 5.91848 14.8192 5.60054 15.0536 5.36612C15.288 5.1317 15.606 5 15.9375 5ZM12.8125 3.4375C13.0096 3.43741 13.2039 3.48394 13.3796 3.57328C13.5553 3.66262 13.7074 3.79224 13.8234 3.95156C13.259 4.46885 12.9048 5.17576 12.8281 5.9375H12.8125C12.481 5.9375 12.163 5.8058 11.9286 5.57138C11.6942 5.33696 11.5625 5.01902 11.5625 4.6875C11.5625 4.35598 11.6942 4.03804 11.9286 3.80362C12.163 3.5692 12.481 3.4375 12.8125 3.4375Z" fill="white"/>
					</svg>
					Add new asset
				</Link>
				<Link to="" className="btn btn-outline d-flex justify-content-center align-items-center">
					<svg viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
						<path d="M18.75 15.9375H17.8125V7.50001C17.8125 7.0856 17.6479 6.68818 17.3549 6.39515C17.0618 6.10213 16.6644 5.93751 16.25 5.93751H13.4375V2.50001C13.4374 2.23735 13.3711 1.97895 13.2447 1.7487C13.1183 1.51845 12.9359 1.32378 12.7144 1.18268C12.4928 1.04157 12.2393 0.958599 11.9772 0.941419C11.7151 0.924238 11.4529 0.973407 11.2148 1.08438L3.08984 4.87657C2.82055 5.00272 2.59271 5.20289 2.43293 5.4537C2.27315 5.70451 2.18803 5.9956 2.1875 6.29297V15.9375H1.25C1.00136 15.9375 0.762903 16.0363 0.587087 16.2121C0.411272 16.3879 0.3125 16.6264 0.3125 16.875C0.3125 17.1236 0.411272 17.3621 0.587087 17.5379C0.762903 17.7137 1.00136 17.8125 1.25 17.8125H18.75C18.9986 17.8125 19.2371 17.7137 19.4129 17.5379C19.5887 17.3621 19.6875 17.1236 19.6875 16.875C19.6875 16.6264 19.5887 16.3879 19.4129 16.2121C19.2371 16.0363 18.9986 15.9375 18.75 15.9375ZM15.9375 7.81251V15.9375H13.4375V7.81251H15.9375ZM4.0625 6.49141L11.5625 2.99219V15.9375H4.0625V6.49141ZM10.3125 8.75001V9.68751C10.3125 9.93615 10.2137 10.1746 10.0379 10.3504C9.8621 10.5262 9.62364 10.625 9.375 10.625C9.12636 10.625 8.8879 10.5262 8.71209 10.3504C8.53627 10.1746 8.4375 9.93615 8.4375 9.68751V8.75001C8.4375 8.50136 8.53627 8.26291 8.71209 8.08709C8.8879 7.91128 9.12636 7.81251 9.375 7.81251C9.62364 7.81251 9.8621 7.91128 10.0379 8.08709C10.2137 8.26291 10.3125 8.50136 10.3125 8.75001ZM7.1875 8.75001V9.68751C7.1875 9.93615 7.08873 10.1746 6.91291 10.3504C6.7371 10.5262 6.49864 10.625 6.25 10.625C6.00136 10.625 5.7629 10.5262 5.58709 10.3504C5.41127 10.1746 5.3125 9.93615 5.3125 9.68751V8.75001C5.3125 8.50136 5.41127 8.26291 5.58709 8.08709C5.7629 7.91128 6.00136 7.81251 6.25 7.81251C6.49864 7.81251 6.7371 7.91128 6.91291 8.08709C7.08873 8.26291 7.1875 8.50136 7.1875 8.75001ZM7.1875 12.8125V13.75C7.1875 13.9986 7.08873 14.2371 6.91291 14.4129C6.7371 14.5887 6.49864 14.6875 6.25 14.6875C6.00136 14.6875 5.7629 14.5887 5.58709 14.4129C5.41127 14.2371 5.3125 13.9986 5.3125 13.75V12.8125C5.3125 12.5639 5.41127 12.3254 5.58709 12.1496C5.7629 11.9738 6.00136 11.875 6.25 11.875C6.49864 11.875 6.7371 11.9738 6.91291 12.1496C7.08873 12.3254 7.1875 12.5639 7.1875 12.8125ZM10.3125 12.8125V13.75C10.3125 13.9986 10.2137 14.2371 10.0379 14.4129C9.8621 14.5887 9.62364 14.6875 9.375 14.6875C9.12636 14.6875 8.8879 14.5887 8.71209 14.4129C8.53627 14.2371 8.4375 13.9986 8.4375 13.75V12.8125C8.4375 12.5639 8.53627 12.3254 8.71209 12.1496C8.8879 11.9738 9.12636 11.875 9.375 11.875C9.62364 11.875 9.8621 11.9738 10.0379 12.1496C10.2137 12.3254 10.3125 12.5639 10.3125 12.8125Z" fill="#475569"/>
					</svg>
					Add new entity
				</Link>
			</div>
			<div className="perf-block">
				<h2>Protfolio perfromance</h2>
				<Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
					<Tab eventKey="all" title="All">
						<Table responsive>
							<tbody>
								<tr>
									<td>Month</td>
									<td>
										<div className="d-flex justify-content-end align-items-center">
											<span className="price">+$401,321</span>
											<span className="price-change">
												<FontAwesomeIcon icon={faArrowTrendUp} />
												+0.5%
											</span>
										</div>
									</td>
								</tr>
								<tr>
									<td>Quarter</td>
									<td>
										<div className="d-flex justify-content-end align-items-center">
											<span className="price">+$814,603</span>
											<span className="price-change">
												<FontAwesomeIcon icon={faArrowTrendUp} />
												+1.1%
											</span>
										</div>
									</td>
								</tr>
								<tr>
									<td>FY2024</td>
									<td>
										<div className="d-flex justify-content-end align-items-center">
											<span className="price">+$3,285,372</span>
											<span className="price-change">
												<FontAwesomeIcon icon={faArrowTrendUp} />
												+4.6%
											</span>
										</div>
									</td>
								</tr>
							</tbody>
						</Table>
					</Tab>
					<Tab eventKey="realised-gains" title="Realised gains">
						<Table responsive>
							<tbody>
								<tr>
									<td>Month</td>
									<td>
										<div className="d-flex justify-content-end align-items-center">
											<span className="price">+$401,321</span>
											<span className="price-change">
												<FontAwesomeIcon icon={faArrowTrendUp} />
												+0.5%
											</span>
										</div>
									</td>
								</tr>
								<tr>
									<td>Quarter</td>
									<td>
										<div className="d-flex justify-content-end align-items-center">
											<span className="price">+$814,603</span>
											<span className="price-change">
												<FontAwesomeIcon icon={faArrowTrendUp} />
												+1.1%
											</span>
										</div>
									</td>
								</tr>
								<tr>
									<td>FY2024</td>
									<td>
										<div className="d-flex justify-content-end align-items-center">
											<span className="price">+$3,285,372</span>
											<span className="price-change">
												<FontAwesomeIcon icon={faArrowTrendUp} />
												+4.6%
											</span>
										</div>
									</td>
								</tr>
							</tbody>
						</Table>
					</Tab>
					<Tab eventKey="unrealised-gains" title="Unrealised gains">
						<Table responsive>
							<tbody>
								<tr>
									<td>Month</td>
									<td>
										<div className="d-flex justify-content-end align-items-center">
											<span className="price">+$401,321</span>
											<span className="price-change">
												<FontAwesomeIcon icon={faArrowTrendUp} />
												+0.5%
											</span>
										</div>
									</td>
								</tr>
								<tr>
									<td>Quarter</td>
									<td>
										<div className="d-flex justify-content-end align-items-center">
											<span className="price">+$814,603</span>
											<span className="price-change">
												<FontAwesomeIcon icon={faArrowTrendUp} />
												+1.1%
											</span>
										</div>
									</td>
								</tr>
								<tr>
									<td>FY2024</td>
									<td>
										<div className="d-flex justify-content-end align-items-center">
											<span className="price">+$3,285,372</span>
											<span className="price-change">
												<FontAwesomeIcon icon={faArrowTrendUp} />
												+4.6%
											</span>
										</div>
									</td>
								</tr>
							</tbody>
						</Table>
					</Tab>
				</Tabs>
			</div>
			<NetBlock blockName="gross-income-block" />
		</div>
	)
}