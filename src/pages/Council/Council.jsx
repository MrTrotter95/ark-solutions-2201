import React from "react";
import CouncilTitle from "./CouncilTitle";

const Data = [
    {
        name: "Wellington",
        gis: "https://gis.wcc.govt.nz/LocalMapsGallery/",
        buildingConsent: "https://simpli.govt.nz/apply-online",
        resourceConsent: "https://forms.wellington.govt.nz/s3/Resource-Consent-Application",
        districtPlans: "https://eplan.wellington.govt.nz/eplan/",
        email: "info@wcc.govt.nz",
        number: "04 499 4444"
    },
    {
        name: "Porirua",
        gis: "https://maps.poriruacity.govt.nz/localmaps/gallery/",
        buildingConsent: "https://my.poriruacity.govt.nz/do-it-online/building",
        resourceConsent: "https://my.poriruacity.govt.nz/do-it-online/resource-consents",
        districtPlans: "https://eplan.poriruacity.govt.nz/districtplan/default.html",
        email: "enquiries@poriruacity.govt.nz",
        number: "04 237 6384"
    },
    {
        name: "Lower Hutt",
        gis: "https://maps.huttcity.govt.nz/portal/apps/webappviewer/index.html?id=b57270f1aa9348e295ef775ad04537ff",
        buildingConsent: "https://www.huttcity.govt.nz/property-and-building/building-consents/apply-for-a-building-consent/apply-for-a-building-consent#:~:text=Submit%20your%20application%20online.,or%20folders%20you've%20prepared.",
        resourceConsent: "https://www.huttcity.govt.nz/property-and-building/resource-consents/apply-for-a-resource-consent",
        districtPlans: "https://maps.huttcity.govt.nz/portal/apps/webappviewer/index.html?id=769c6bc31ca74d44b6513f8112458525",
        email: "contact@huttcity.govt.nz",
        number: "04 570 6666"
    },
    {
        name: "Upper Hutt",
        gis: "https://www.upperhuttcity.com/Maps",
        buildingConsent: "https://simpli.govt.nz/apply-online",
        resourceConsent: "https://www.upperhuttcity.com/Plan-and-build/Step-Four-Apply/Resource-consent-process",
        districtPlans: "https://maps.uhcc.govt.nz/Viewer/?map=6bde3f653ac34f1eab74d5034c9b394c",
        email: "askus@uhcc.govt.nz",
        number: "04 527 2169"
    },
    {
        name: "Kapiti Coast",
        gis: "https://maps.kapiticoast.govt.nz/LocalMaps/Viewer/?map=9f73316fcb864fd3a7802873a61d6f29",
        buildingConsent: "https://simpli.govt.nz/apply-online",
        resourceConsent: "https://www.kapiticoast.govt.nz/your-council/planning/resource-consents/",
        districtPlans: "https://maps.kapiticoast.govt.nz/LocalMaps/Viewer/?map=c175aff2c7204271ace771c326c4a98f",
        email: "kapiti.council@kapiticoast.govt.nz",
        number: "04 296 4700"
    },
    {
        name: "Masterton",
        gis: "https://gis.mstn.govt.nz/WairarapaMaps/",
        buildingConsent: "https://simpli.govt.nz/apply-online",
        resourceConsent: "https://mstn.govt.nz/services/building-and-planning/resource-consents/",
        districtPlans: "https://gis.mstn.govt.nz/WairarapaViewer/?map=25092c1c467841908f7854a3ecc1fa41",
        email: "mdc@mstn.govt.nz",
        number: "06 370 6300"
    },
   ]

const Council = () => {
    return (
        <div className="container-xl">
            <h3 className="h2 fw-900 light-black">Council Resources</h3>
            <div className="flex-wrap">
                {Data.map((item) => (
                    <CouncilTitle
                    name={item.name}
                    gis={item.gis}
                    buildingConsent={item.buildingConsent}
                    resourceConsent={item.resourceConsent}
                    districtPlans={item.districtPlans}
                    email={item.email}
                    number={item.number}/>
                ))} 
            </div>

        </div>
    )
}

export default Council;