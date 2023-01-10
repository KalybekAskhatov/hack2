import React from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import '../AboutUs/AboutUs.css'
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const navigate = useNavigate()
    return (
        <div>
            {/* <div className='aboutus-block1'>
            <video className='aboutus-video1' width="1484px" id="background-video-aboutus" loop autoPlay muted>
                <source src={require("./pexels-shvets-production-7547574.mp4")} type="video/mp4" />
            </video>
            </div> */}
            <div className="aboutus-block1">
              
            <div>
                <div className='aboutus-text1'>
                    <h2><AdbIcon/> NERDGAMES</h2>
                    <span>NerdGames is the ultimate destination for playing, discussing, and creating games.</span>
                    <div className='download'>
                        <div><ul className='ul-ul'>
                            <li className='li-li'>Downloaded players<DownloadDoneIcon/></li>
                            <li className='li-li2'>101.607</li>
                        </ul>
                        </div>
                        <div>
                        <ul className='ul-ul'>
                            <li className='li-li'>Playing players <VideogameAssetIcon/></li>
                            <li className='li-li2'>50.116</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="aboutus-video1">
            <video width="" id="aboutus-video" loop autoPlay muted>
                <source src={require("./pexels-shvets-production-7547574.mp4")} type="video/mp4" />
            </video> 
            <button onClick={()=> navigate('/list')} className='video-btn'>Join Us</button>
            </div>
            </div>
            
            <div className="aboutus-block2">
                <h1>

                </h1>
            </div>
        </div>
    );
};

export default AboutUs;