import React from 'react';
import FilterBTN from '../FilterBTN';

const Species = ({ updateSpecies, updatePageNumber }) => {
    let species = ["Human", "Alien", "Humaniod", "Poopybutthole", "Mythological", "Unknown", "Animal", "Cronenberg", "Planet"];

    return (
        <div className="accordion-item">

            <h2 className="accorion-header" id="headingTwo">
                <button
                    className="accordion-btn collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                    aria-expanded="false" aria-controls="collapseTwo"
                >Species
                </button>
            </h2>
            <div
                id="collapseTwo" className="accordion-collapse collapse"
                aria-labelledby="headngTwo"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {species.map((item, index) => {
                        return (
                            <FilterBTN
                                name="species" index={index} key={index}
                                updatePageNumber={updatePageNumber}
                                task={updateSpecies}
                                input={item}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Species;