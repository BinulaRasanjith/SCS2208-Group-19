import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const MechanicUpdateForm = ({ getData, setUpdateToggler, upData }) => {
    // states for form
    const [name, setName] = useState(upData.name)
    const [location, setLocation] = useState(upData.location)
    const [email, setEmail] = useState(upData.email)
    const [mobile, setMobile] = useState(upData.mobileNo)
    const [type, setType] = useState(upData.type)

    // Add data to the server
    const updateData = (event) => {
        event.preventDefault()
        axios.patch('http://localhost:3001/mechanic/id/' + upData._id,
            {
                "name": name,
                "location": location,
                "email": email,
                "mobileNo": mobile,
                "type": type
            })
            .then((response) => {
                console.log(response.data)
                clearForm()
                getData()
                setUpdateToggler(0)
            })
            .catch((error) => {
                console.log("Error " + error)
            });

    }

    // Clear the form
    const clearForm = () => {
        setName("")
        setLocation("")
        setEmail("")
        setMobile("")
        setType("")
    }
    return (
        <div>
            <form className='container w-75'>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={(e) => { setName(e.target.value) }} value={name} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input type="text" className="form-control" onChange={(e) => { setLocation(e.target.value) }} value={location} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mobile no</label>
                    <input type="text" className="form-control" onChange={(e) => { setMobile(e.target.value) }} value={mobile} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Type</label>
                    <input type="text" className="form-control" onChange={(e) => { setType(e.target.value) }} value={type} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={updateData}>Update</button>
                <button type="button" className="btn btn-warning" onClick={clearForm}>Clear</button>
            </form>
            <br /><br />
        </div>
    )
}

export default MechanicUpdateForm