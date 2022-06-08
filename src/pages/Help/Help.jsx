import React from "react";
import CardLargeAlt from "../../components/CardLargeAlt";

const Help = () => {
  return (
    <div className="container-lg">
      <h3 className="h3 bold black">Help</h3>
      <h4 className="h4 bold secondary-black">H1 Schedule Method</h4>
      <CardLargeAlt>
        <h5 className="h5-0mg blue">General Info</h5>
        <p className="body dark-gray">
          • For best printing results, select A3 portrait, and deselect headers
          & footers options.
        </p>
        <p className="body dark-gray">
          • All input fields only require numeric values.
        </p>
        <p className="body dark-gray">
          • Wall heigt - taken from bottom plate to top plate.
        </p>
        <p className="body dark-gray">
          • Perimeters - This is the total perimeter of the "habitable" space.
        </p>
        <br />
        <h5 className="h5-0mg blue">Windows</h5>
        <p className="body dark-gray">
          • Once area inputs have been entered, the indidual area and total
          window area will automatically calculate.
        </p>
        <br />
        <h5 className="h5-0mg blue"> Results</h5>
        <p className="body dark-gray">
          • Total perimeter and wall area for both (E,S,W) and (N,E,S,W) will
          calculate automatically.
        </p>
      </CardLargeAlt>

      <h4 className="h4 bold secondary-black">Moisture Risk Matrix</h4>
      <CardLargeAlt>
        <h5 className="h5-0mg blue">General Info</h5>
        <p className="body dark-gray">
          • Calculator operates automatically for ease of use.
        </p>
        <p className="body dark-gray">
          •Use the helper icons for assistance in determination. Images provided
          H1/AS1, 5th edition.
        </p>
        <p className="body dark-gray">
          • Upon completing the form, Green icons indicate claddings that are
          acceptable and red icons indicate claddings that are not suitable for
          that risk zone.
        </p>
        <p className="body dark-gray">
          • For best printing results, select A3 portrait, and deselect headers
          & footers options.
        </p>
      </CardLargeAlt>

      <h4 className="h4 bold secondary-black">Additional Calculators</h4>
      <CardLargeAlt>
        <h5 className="h5-0mg blue">General Info</h5>
        <p className="body dark-gray">
          • All input fields only require numeric values.
        </p>
        <p className="body dark-gray">
          • All calculators operate automatically for ease of use.
        </p>
        <p className="body dark-gray">
          • Use the helper icons for assistance in determination. Images
          provided by NZS 3604:2011.
        </p>
      </CardLargeAlt>
    </div>
  );
};

export default Help;
