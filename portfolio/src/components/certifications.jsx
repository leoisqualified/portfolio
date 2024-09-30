import React from "react";

/* Import images */
import excel from '../assets/img/excel.png'; 

function Certificates() {
    const certificatesList = [
        {imageUrl: '#', link: 'See Credential'}, 
        {imageUrl: excel, link: 'See Credential'},
        {imageUrl: '#', link: 'See Credential'}, 
        {imageUrl: '#', link: 'See Credential'}, 
        {imageUrl: '#', link: 'See Credential'}, 
        {imageUrl: '#', link: 'See Credential'}, 
    ];

    return (
        <section className="certificate-section">
            <h2>Certifications</h2>
            <div className="certificate-grid">
                {
                    certificatesList.map((certificate, index) => (
                        <div className="certificate-card" key={index}>
                            <img src={certificate.imageUrl} alt={`Certificate ${index + 1}`} />
                            <a href={certificate.link} className="certificate-link">See Credential</a>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Certificates;
