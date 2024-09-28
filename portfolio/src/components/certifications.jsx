import React from "react";

function Certificates() {
    const certificatesList = [
        {imageUrl:'#', link:'See Credential'},
        {imageUrl:'#', link:'See Credential'},
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
                                <img src='{certificate.imgUrl}' />
                                <a href={certificate.link}>See Credential</a>
                            </div>
                        ))}
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Certificates;