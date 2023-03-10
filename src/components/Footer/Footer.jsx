import React from 'react';
import '../Footer/Footer.css'
import AdbIcon from '@mui/icons-material/Adb';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-h2'>
				<AdbIcon/>
				<h2>NERDGAMES</h2>
				</div>
				<div className="footer-links">
					<div >
						<ul>
							<li className='main-li'><a href="">Main</a></li>
							<li><a href="/games">Library</a></li>
							<li><a href="/list">Products</a></li>
							<li><a href="/about">About Us</a></li>
						</ul>
					</div>
					<div>
						<ul>
							
						<li className='main-li'><a href="">Support</a></li>
							<li><a href="">Contacts</a></li>
							<li><a href="">Tech-Support</a></li>
							<li><a href="">Reports</a></li>
						</ul>
					</div>
					<div>
						<ul>
							
						<li className='main-li'><a href="">Social Medias</a></li>
							<li><a href=""><InstagramIcon/></a></li>
							<li><a href=""><TwitterIcon/></a></li>
							<li><a href=""><TelegramIcon/></a></li>
						</ul>
					</div>
				</div>
		</div>
	);
};

export default Footer;