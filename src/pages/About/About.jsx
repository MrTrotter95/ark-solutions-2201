import React from "react";
import CardLargeAlt from "../../components/CardLargeAlt";

const About = () => {
    return(
        <div className="container-lg">
            <h3 className="h3 bold">About</h3>
            
            <CardLargeAlt>
                <h4 className="h4-0mg secondary-black">About Ark</h4>
                <p className="body dark-gray">Assisting New Zealand Architectural 
                designers with residential housing compliance.</p>
                <br/>
                <p className="body dark-gray">Our purpose is to improve efficiency 
                in the workplace by providing effective 
                    calculators and resources for your compliance needs.</p>
            </CardLargeAlt>
            
            <CardLargeAlt>
                <h4 className="h4-0mg secondary-black">Future Update</h4>
                <p className="body dark-gray">Including "resources" section. 
                This will contain your local council weblinks
                 including GIS webmaps, Hazards Maps, District Plans, Contact Info.</p>
            </CardLargeAlt>
            
            <CardLargeAlt>
                <h4 className="h4-0mg secondary-black">Contact</h4>
                <p className="body dark-gray">To get in contact regarding issues, 
                complaints, or general feedback pelase send an email to: 
                <p className="link">arksolutionsnewzealand@gmail.com</p></p>
            </CardLargeAlt>
        </div>
    )
};

export default About;