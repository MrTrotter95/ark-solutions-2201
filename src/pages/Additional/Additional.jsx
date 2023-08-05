import React from "react";
import PermeableSurface from "./PermeableSurface";
import SiteCoverage from "./SiteCoverage";
import FloorJoist from "./Floors/FloorJoist";
import Bearers from "./Foundation/Bearers";
import Stringers from "./Foundation/Stringers";
import LintelSingleOrTop from "./Walls/LintelsSingleOrTop";
import PostFootings from "./Posts/PostFootings";
import ConnectionToPost from "./Posts/ConnectionToPost";
import Rafters from "./Roof/Rafters";
import RidgeBeams from "./Roof/RidgeBeams";
import VerandahBeams from "./Roof/VerandahBeams";
import LintelsRoofWall from "./Walls/LintelsRoofWall";
import LintelsRoofWallFloor from "./Walls/LintelsRoofWallFloor";
import LintelsWallFloor from "./Walls/LintelsWallFloor";
import LintelsFloor from "./Walls/LintelsFloor";

const Additional = () => {
    /*const print = () => {
        window.print();
    }*/

    return(
        <div className="container-xl">
            <h3 className="h2 --dark-gray fw-900">Additional Calculators</h3>
            <div className="flex-wrap mb-100">
                <PermeableSurface/>
                <SiteCoverage/>
            </div>

            <h3 className="h2 --dark-gray fw-900">Foundation & Floors</h3>
            <div className="flex-wrap mb-100">
                <Bearers/>
                <Stringers/>
                <FloorJoist/>
            </div>

            <h3 className="h2 --dark-gray fw-900">Walls</h3>
            <div className="flex-wrap mb-100">
                <LintelSingleOrTop/>
                <LintelsRoofWall/>
                <LintelsRoofWallFloor/>
                <LintelsWallFloor/>
                <LintelsFloor/>
            </div>

            <h3 className="h2 --dark-gray fw-900">Posts</h3>
            <div className="flex-wrap mb-100">
                <PostFootings/>
                <ConnectionToPost/>
            </div>

            <h3 className="h2 --dark-gray fw-900">Roof Framing</h3>
            <div className="flex-wrap mb-100">
                <Rafters/>
                <RidgeBeams/>
                <VerandahBeams/>
            </div>
        </div>
    )
};

export default Additional;