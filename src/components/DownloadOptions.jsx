import React from 'react';
import { FaCloudDownloadAlt, FaDropbox, FaGoogleDrive } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiMega } from "react-icons/si";




const DownloadOptions = () => {
  return (
     <div className="downloadContainer">
                    <div className="d-header">
                          <span>Download</span>
                          <span>Server</span>
                          <span>Size</span>
                          <span>Quality</span>
                    </div>
    
                    <div className="d-options">
                        <div className="d-option">
                           <span><FaCloudDownloadAlt /></span>
                              <span> <FaTelegram className='blue' /> Telegram  </span>
                           <span>1.5 GB</span>
                           <span>720HD</span>
                        </div>
    
                        <div className="d-option">
                           <span><FaCloudDownloadAlt /></span>
                              <span> <SiMega className='red' /> Mega </span>
                           <span>1.5 GB</span>
                           <span>720HD</span>
                        </div>
    
                        <div className="d-option">
                           <span><FaCloudDownloadAlt /></span>
                            <span> <FaGoogleDrive className='green' /> Google Drive </span>
                           <span>1.5 GB</span>
                           <span>720HD</span>
                        </div>
    
                        <div className="d-option">
                           <span><FaCloudDownloadAlt /></span>
                              <span> <FaDropbox className='blue' /> Dropbox </span>
                           <span>1.5 GB</span>
                           <span>720HD</span>
                        </div>
    
                        
                    </div>
                  </div>
    
  )
}

export default DownloadOptions