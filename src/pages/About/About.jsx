import React from "react";
import CardLargeAlt from "../../components/CardLargeAlt";

const About = () => {
    return(
        <div className="container-lg">
            <h3 className="h2 --dark-gray fw-900">About The Project</h3>

            <CardLargeAlt>
            <h4 className="h4-0mg dt-blue fw-800">The Approach & Purpose</h4>
            <p className="body --dark-gray">To provide the Architectural industry in Aotearoa with efficient, easy to use digital solutions to assist them
            with residential housing compliance. These are real solutions to real workplace problems that overall increase efficiency and can help take out the guess work.
            </p>
            </CardLargeAlt>
            <CardLargeAlt>
            <h4 className="h4-0mg dt-blue fw-800">Features Under Construction</h4>
            <p className="body --dark-gray">• Implementing React Router.</p>
            <p className="body --dark-gray">• A higher quality solution to the "helper images" used on the wind zone and risk matrix calculator, including
            allowing it to be mobile responsible.</p>
            <p className="body --dark-gray">• Complete the design and build of the "print to pdf" functionality.</p>
            <p className="body --dark-gray">• A responsive navbar.</p>
            <p className="body --dark-gray">• As programming is a learning journery I plan on going back to revise and improve the code of older and previously completed calculators such as Schedule Method and the Risk Matrix.</p>
            </CardLargeAlt>


            <h3 className="h2 fw-900 --dark-gray">Why Are These Valuable?</h3>
            <CardLargeAlt>
                <h4 className="h4-0mg dt-blue fw-800">H1 Schedule Method</h4>
                <p className="body --dark-gray mb-20">For residential housing compliance a H1 Schedule Method calculation is required for all residential housing consents.
                Workers in the industry typically do this calculation using pen and paper and have to work the area of their windows individually and add them all up.
                This process can take 40 minutes to complete and is very time consuming. This calculator reduces the time to complete this calculation to 10 minutes per single
                storey residential house.
                </p>
                <h5 className="subtitle --dark-gray fw-600">How it's used</h5>
                <ol className="body --dark-gray mb-20">
                    <li>The user will input their wall height, total habitable perimeter and north perimeter into the general info field.</li>
                    <li>They will then enter in height and width of all openings that are within the habitable building envelope. They can add or remove more windows
                        to the table by using the + and - button. There are two components for this,
                        Windows (E,S,W) & Windows (N). The individual window area will calculate automatically.
                    </li>
                    <li>Next, the user will click the calculate button to calculate the total window area for the wall faces, which is required for a later calculation.</li>
                    <li>Finally, the user will the click final calculate button at the bottom to obtain their results. If their Result is under 30% then they are
                        in compliance with H1/AS1.
                    </li>
                    <li>H1/AS1 requires two types of results. one for E,S,W walls and the other for all N,E,S,W walls.</li>
                </ol>

                <h5 className="subtitle --dark-gray fw-600">How it's calculated</h5>
                <ol className="body --dark-gray">
                    <li>Total Perimeter - we simply minus the north perimeter from the total perimeter and display that number in the table.</li>
                    <li>Wall Area - we times the wall height by the perimeter to gain the wall area.</li>
                    <li>Total Glazing Area - We take the appropriate number from the window table above and display that number in the table.</li>
                    <li>Finally total glazing area is divided by the wall area. if the result is under 30% then the wall combination is in compliance.</li>
                </ol>
            </CardLargeAlt>

            <CardLargeAlt>
                <h4 className="h4-0mg dt-blue fw-800">Risk Matrix</h4>
                <p className="body --dark-gray">A Risk Matrix calculation in short determines the weathertightness risk of the proposed house design.</p>
                <p className="body --dark-gray mb-20">By completing the weathertightness calculation you can quickly
                determine the need for a drained cavity with wall claddings. This will aid your
                decisions on cladding systems and support building consent applications.
                </p>

                <h5 className="subtitle --dark-gray fw-600">How it helps</h5>
                <ol className="body --dark-gray mb-20">
                    <li>Confirms the building categorisation for licence classes. </li>
                    <li>Determines whether Douglas Fir timber can be used under the Acceptable
                    Solution B2/AS1 for Building Code Clause B2 Durability, and</li>
                    <li>Help identify simple, low-risk housing design; for example, where relevant to
                    risk-based consenting.</li>
                </ol>

                <h5 className="subtitle --dark-gray fw-600">The Rules</h5>
                <ul className="body --dark-gray">
                    <li>There are 4 risk levels, Low Risk 0-6, Medium Risk 7-12, High Risk 13-20, Very High Risk 21+</li>
                    <li>Each risk level provides us with the appropriate cladding construction either direct fixed to framing or over cavity.</li>
                    <li>If your building score is 21 or over the designer needs to either redesign the building to achieve a lower score, or Specific design
                        which will typically require a third party audit.
                    </li>
                </ul>
            </CardLargeAlt>

            <CardLargeAlt>
                <h4 className="h4-0mg dt-blue fw-800">Wind Zone</h4>
                <p className="body --dark-gray">Wind direction, speed and frequency will influence the building design including bracing requirements, roof 
                and wall cladding selection, weathertightness detailing, building entry locations, window size and placement and provision of shelter for 
                outdoor spaces.</p>
            </CardLargeAlt>

            <CardLargeAlt>
                <h4 className="h4-0mg dt-blue fw-800">Council</h4>
                <p className="body --dark-gray">To be a central hub for frequently used resoures that workers in the industry used such as links to submitting a 
                building consent in their district. Even something as simple as a contact number or email can help reduce the amount of time spent searching the 
                internet.</p>
            </CardLargeAlt>
        </div>
    )
};

export default About;