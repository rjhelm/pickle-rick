import React from 'react';
import Gender from "./category/Gender"
import Species from "./category/Species"
import Status from './category/Status'

const Filter = ({ pageNumber, updatePageNumber, updateSpecies, updateGender, updateStatus }) => {
    let clear = () => {
        updateStatus("");
        updateGender("");
        updateSpecies("");
        updatePageNumber(1);
        window.location.reload(false);
    }
    return (
        <div className="col-lg-2 col-12 mb-5">
            <div style={{ cursor: "pointer" }} onClick={clear}>
                Clear Filters
            </div>
            <div className="accordian" id="accordianExamples">
                {/* Category Components will be placed here */}
            </div>
        </div>
    )
}

export default Filter;