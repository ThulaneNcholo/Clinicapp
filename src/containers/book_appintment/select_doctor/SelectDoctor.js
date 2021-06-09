import React from 'react'


function SelectDoctor() {
    return (
        <div className="container ">
            <div className="mt-4">
                    <p>Select a Service</p>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        General practitioner
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Dentist
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Orthopedics
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Physical Therapy
                    </label>
                </div>
        </div>
    )
}

export default SelectDoctor
