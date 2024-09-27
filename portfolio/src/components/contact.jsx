import React from 'react';

function Contact () {
    return (
        <React.Fragment>
            <section className='contact-section'>
                <h1>Get in Touch</h1>
                <div className='contact-details'>
                    <ul className='contact-links'>
                        <li>
                            <img src='#'/>
                            <a href='tel' target='_blank'>+233 55 707 1538</a>
                        </li>
                    </ul>
                    <ul className='contact-links'>
                        <li>
                            <img src='#'/>
                            <a href='mailto:leoisqualified@gmail.com' target='_blank'>
                            leoisqualified@gmail.com</a>
                        </li>
                    </ul>
                    <ul className='contact-links'>
                        <li>
                            <img src='#'/>
                            <a href='#' target='_blank'>leoisqualified</a>
                        </li>
                    </ul>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Contact;