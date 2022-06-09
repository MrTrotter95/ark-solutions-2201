import React, {useState} from "react";

import CardSmall from "../../components/CardSmall";
import CardMedium from "../../components/CardMedium";
import CardLarge from "../../components/CardLarge";
import ClientInfo from "../../components/ClientInfo";

import './RiskMatrix.css';
import questionMark from "../../assets/images/icons/question-mark-primary.png";
import tick from "../../assets/images/icons/tick.png";
import cross from "../../assets/images/icons/cross.png";


const RiskMatrix = () => {
    const [windScore, setWindScore] = useState(0);
    const [storeysScore, setStoreysScore] = useState(0);
    const [intersectionScore, setInterSectionScore] = useState(0);
    const [eavesScore, setEavesScore] = useState(0);
    const [envelopeScore, setEnvelopeScore] = useState(0);
    const [deckScore, setDeckScore] = useState(0);
    const [integerScore, setIntegerScore] = useState(0);
    const [textScore, setTextScore] = useState("Low Risk 0-6");
    const [warningBox, setWarningBox] = useState(false);
    //STATE TO CONTROLL TICK OR CROSS IMAGE ON RESULTS
    const [low, setLow] = useState(tick);
    const [medium, setMedium] = useState(tick);
    const [high, setHigh] = useState(tick);


    const ResultHandler = () => {
        //SETTING THE SCORE OF THE PINK TEXT BOX FOR EACH SELECTBOX
        const windRegion = document.querySelector('#wind').value;
        setWindScore(windRegion);
        const storeys = document.querySelector('#storeys').value;
        setStoreysScore(storeys);
        const intersection = document.querySelector('#intersection').value;
        setInterSectionScore(intersection);
        const eaves = document.querySelector('#eaves').value;
        setEavesScore(eaves);
        const envelope = document.querySelector('#envelope').value;
        setEnvelopeScore(envelope);
        const deck = document.querySelector('#deck').value;
        setDeckScore(deck);
        
        //CALCULATING RESULT
        const result = parseInt(windRegion) + parseInt(storeys) + parseInt(intersection) + parseInt(eaves) + parseInt(envelope) + parseInt(deck);
        setIntegerScore(result);
    
        if(result === 0 ){
            setTextScore("Low Risk 0-6");
            setWarningBox(false);
        } else if(result > 0 && result <= 6){
            setTextScore("Low Risk 0-6");
            setLow(tick)
            setWarningBox(false);
        } else if (result >= 7 && result <= 12){
            setTextScore("Medium Risk 7-12");
            setLow(cross);
            setMedium(tick)
            setWarningBox(false);
        } else if( result >= 13 && result <= 20){
            setTextScore("High Risk 13-20");
            setMedium(cross);
            setHigh(tick);
            setWarningBox(false);
        } else if ( result >= 21){
            setTextScore("Very High Risk 21+");
            setHigh(cross);
            setWarningBox(true);
        }
    }

    return(
        <div className="container-lg flex-wrap">
            <h3 className="h3">Moisture Risk Matrix</h3>
                <ClientInfo/>

            <div className="container__risk-matrix" onChange={ResultHandler}>
                <h5 className="h5 secondary-black">House Details</h5>
                <CardLarge>
                    <div className="risk-matrix__select-containers">
                        <div className="flex-row">
                            <p className="label boldless secondary-black input-label">Wind Zone</p>
                            <p className="label bold secondary-pink input-label" id="windRegionText">Score: {windScore}</p>
                        </div>
                        <select className="select-lg label dark-gray" name="wind" id="wind" >
                            <option value="0">Low - NZS 3604 limit 32m/s</option>
                            <option value="0">Medium - NZS 3604 Limit 37m/s</option>
                            <option value="1">High - NZS 3604 limit 44m/s</option>
                            <option value="2">Very High - NZS 3604 limit 55m/s & Extra High limit 55m/s</option>
                        </select>
                    </div>

                    <div className="risk-matrix__select-containers">
                        <div className="flex-row">
                            <div className="flex">
                                <p className="label boldless secondary-black input-label">Number Of Storeys</p>
                                <img className="question-mark-primary__alt" src={questionMark} alt="question mark" />
                            </div>
                            <p className="label bold secondary-pink input-label" id="storeysText">Score: {storeysScore}</p>
                        </div>
                        <select className="select-lg label dark-gray" name="storeys" id="storeys">
                            <option value="0">1 storey</option>
                            <option value="1">2 storeys in part</option>
                            <option value="2">2 storeys</option>
                            <option value="4">More than two storeys</option>
                        </select>
                    </div>

                    <div className="risk-matrix__select-containers">
                        <div className="flex-row">
                            <div className="flex">
                                <p className="label boldless secondary-black input-label">Roof/Wall Intersection Design</p>
                                <img className="question-mark-primary__alt" src={questionMark} alt="question mark" />
                            </div>
                            <p className="label bold secondary-pink input-label" id="intersectionText">Score: {intersectionScore}</p>
                        </div>
                        <select className="select-lg label dark-gray" name="intersection" id="intersection">
                            <option value="0">Roof-to-wall intersection fully protected</option>
                            <option value="1">Roof-to-wall intersection partially exposed</option>
                            <option value="3">Roof-to-wall intersection fully exposed</option>
                            <option value="5">Roof elements finishing within the boundaries formed by exterior walls</option>
                        </select>
                    </div>

                    <div className="risk-matrix__select-containers">
                        <div className="flex-row">
                            <p className="label boldless secondary-black input-label">Eaves Width</p>
                            <p className="label bold secondary-pink input-label" id="eavesText">Score: {eavesScore}</p>
                        </div>
                        <select className="select-max label dark-gray" name="eaves" id="eaves">
                            <option value="0">Greater than 600mm for single storey</option>
                            <option value="1">451-600mm for single storey, or over 600mm for two storey</option>
                            <option value="2">101-450mm for single storey, or over 451-600mm for two storey, or greater than 600mm above two storey</option>
                            <option value="5">0-100mm for single storey, or 0-450mm for two storey, or less than 600mm above two storey</option>
                        </select>
                    </div>

                    <div className="risk-matrix__select-containers">
                        <div className="flex-row">
                            <div className="flex">
                                <p className="label boldless secondary-black input-label">Envelope Complexity</p>
                                <img className="question-mark-primary__alt" src={questionMark} alt="question mark" />
                            </div>
                            <p className="label bold pink input-label" id="envelopeText">Score: {envelopeScore}</p>
                        </div>
                        <select className="select-max label dark-gray" name="envelope" id="envelope">
                            <option value="0">Simple rectangular, L, T or boomerang shape, with single cladding type</option>
                            <option value="1">Moderately complex, angular or curved shapes (eg, Y or arrowhead) with no more than two cladding types</option>
                            <option value="3">Complex, angular or curved shapes (eg, Y or arrowhead) shapes with multiple cladding types</option>
                            <option value="6">Complex wall framing (eg, curved walls along with box windows, pergolas, multi-storey re-entrant shapes etc)</option>
                        </select>
                    </div>

                    <div className="risk-matrix__select-containers">
                        <div className="flex-row">
                            <div className="flex">
                                <p className="label boldless secondary-black input-label">Deck Design</p>
                                <img className="question-mark-primary__alt" src={questionMark} alt="question mark" />
                            </div>
                            <p className="label bold secondary-pink input-label" id="deckText">Score: {deckScore}</p>
                        </div>
                        <select className="select-lg label dark-gray" name="deck" id="deck">
                            <option value="0">None or, timber slat deck or porch at ground-floor level</option>
                            <option value="2">Fully covered in plan by roof, or timber slat deck attached at first- or second-floor level</option>
                            <option value="4">Enclosed deck exposed in plan or cantilevered at first-floor level</option>
                            <option value="6">Enclosed deck exposed in plan or cantilevered at second-floor level or above</option>
                        </select>
                    </div>
                </CardLarge>
            </div>

            <div className="container-md">
                <h5 className="h5 secondary-black">Result</h5>
                <CardMedium>
                    <div className="flex">
                        <h3 className="h3-0mg secondary-blue bold" id="integerResult">{integerScore}</h3>
                        <p className="body bold secondary-black" id="textResult">{textScore}</p>
                    </div>
                </CardMedium>
            </div>

            {warningBox && 
            <div className="container-lg" id="warningBox">
                <h5 className="h4 warning">Warning: Score is over 20</h5>
                <CardLarge>
                    <p className="body dark-gray">A)  Redesign the building to achieve a lower score, or</p>
                    <p className="body dark-gray">B) Specific design</p>
                    <ul className="body dark-gray">
                        <li>The design may need changing to reduce the risk.</li>
                        <li>The building consent authority may require more comprehensive 
                            details and documentation providing evidence of weathertightness.</li>
                        <li>The building consent authority, designer or owner may require more inspections.</li>
                        <li>A third part audit of the design may be required.</li>
                    </ul>
                </CardLarge>
            </div>
            }
            

            <div className="container-sm">
                <h4 className="h5 secondary-black">Direct Fixed</h4>
                <CardSmall>
                    <p className="label bold secondary-black">Direct fixed to framing</p>
                    <div className="flex allowed-cladding__top">
                        <img src={low} className="tick-cross"></img>
                        <p className="body dark-gray">Timber weatherboards - all types</p>
                    </div>
                    <div className="flex allowed-cladding">
                        <img src={medium} className="tick-cross"></img>
                        <p className="body dark-gray">Timber weatherboard - bevel backed</p>
                    </div>
                    <div className="flex allowed-cladding">
                        <img src={low} className="tick-cross"></img>
                        <p className="body dark-gray">Fibre cement weatherboards</p>
                    </div>
                    <div className="flex allowed-cladding">
                        <img src={low} className="tick-cross"></img>
                        <p className="body dark-gray">Vertical profiled metal - corrugated and symmetrical trapezoidal</p>
                    </div>
                    <div className="flex allowed-cladding">
                        <img src={high} className="tick-cross"></img>
                        <p className="body dark-gray">Vertical profiled metal - corrugated only</p>
                    </div>
                    <div className="flex allowed-cladding">
                        <img src={medium} className="tick-cross"></img>
                        <p className="body dark-gray">Vertical timber board and batten</p>
                    </div>
                    <div className="flex allowed-cladding">
                        <img src={low} className="tick-cross"></img>
                        <p className="body dark-gray">Fibre cement sheet jointed finish</p>
                    </div>
                    <div className="flex">
                        <img src={low} className="tick-cross"></img>
                        <p className="body dark-gray">Plywood sheet</p>
                    </div>
                </CardSmall>
            </div>

            <div className="container-sm">
            <h4 className="h5 secondary-black">Over Cavity</h4>
                <CardSmall>
                    <p className="label bold secondary-black">Over nominal 20mm drained cavity</p>
                    <div className="flex allowed-cladding__top">
                        <img src={high} className="tick-cross"></img>
                        <p className="body dark-gray">Masonry Veneer</p>
                    </div>
                    <div className="flex allowed-cladding">
                        <img src={high} className="tick-cross"></img>
                        <p className="body dark-gray">Stucco</p>
                    </div>
                    <div className="flex allowed-cladding">
                        <img src={high} className="tick-cross"></img>
                        <p className="body dark-gray">Horizontal profiled meltal (corrugated and trapezoidal only</p>
                    </div>
                    <div className="flex allowed-cladding">
                        <img src={high} className="tick-cross"></img>
                        <p className="body dark-gray">Fibre cement sheet - flush & jointed finish</p>
                    </div>
                    <div className="flex allowed-cladding">
                        <img src={high} className="tick-cross"></img>
                        <p className="body dark-gray">EIFS</p>
                    </div>
                    <div className="flex allowed-cladding">
                        <img src={high} className="tick-cross"></img>
                        <p className="body dark-gray">Rusticated weatherboards</p>
                    </div>
                    <div className="flex allowed-cladding">
                        <img src={high} className="tick-cross"></img>
                        <p className="body dark-gray">Fibre cement weatherboards</p>
                    </div>
                    <div className="flex allowed-cladding">
                        <img src={high} className="tick-cross"></img>
                        <p className="body dark-gray">Plywood sheet</p>
                    </div>
                    <div className="flex">
                        <img src={high} className="tick-cross"></img>
                        <p className="body dark-gray">Bevel-back weatherboards</p>
                    </div>
                </CardSmall>
            </div>

            <div className="button-container">
            <button className="primary-button label">Save To PDF</button>
            </div>
        </div>
    )
}

export default RiskMatrix;




