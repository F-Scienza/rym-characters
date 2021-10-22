import React from 'react';
import './Styles/ChScroll.css'
import RyMProfile from '../images/rym_jpg.jpg';
function ChScroll() {
    return (
			<section className="ChScroll-Container">
				<ul className="ChScroll-ul">
					<li className="ChScroll-li">
						<div className="ChScroll-ChImg-Alive">
							<img 
								className="Profile-Picture" 
								src={RyMProfile}
								alt="profilepic" 
							/>
						</div>
					</li>
					<li className="ChScroll-li">
						<div className="ChScroll-ChImg-Dead">
							<img 
								className="Profile-Picture" 
								src={RyMProfile}
								alt="profilepic" 
							/>
						</div>
					</li>
					<li className="ChScroll-li">
						<div className="ChScroll-ChImg-Unknow">
							<img 
								className="Profile-Picture" 
								src={RyMProfile}
								alt="profilepic" 
							/>
						</div>
					</li>
				</ul>
			</section>
		);
}

export { ChScroll };