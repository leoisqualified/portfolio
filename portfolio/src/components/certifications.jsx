import React from "react";

/* importing images */
import excel from '../assets/img/excel.png';

function Certificates() {
    const certificatesList = [
        {imageUrl:'#', link:'See Credential'},
        {imageUrl:excel, link:'See Credential'},
        {imageUrl:'#', link:'See Credential'},
        {imageUrl:'#', link:'See Credential'},
        {imageUrl:'#', link:'See Credential'},
        {imageUrl:'#', link:'See Credential'},
    ]

    return ( 
        <React.Fragment>
            <div className="certificates-section">
                <h3>My <i>Certifications</i></h3>
                <div className="certificates-grid">
                    {
                        certificatesList.map((certificate, index) =>
                        (
                            <div className="certificates-card" key={index}>
                                <img src={certificate.imageUrl} />
                                <a href={certificate.link}>See Credential</a>
                            </div>
                        ))}
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Certificates;