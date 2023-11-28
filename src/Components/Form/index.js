

// import { src } from 'gulp'
import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GET_DATA, SUBMIT_DATA } from '../../Redux/Function'

function Form() {
    const selector = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GET_DATA())
    }, [])

    const navigate = useNavigate()
    const [person, setPerson] = useState({
        firstName: "",
        lastName: "",
        hobbies: [],
        gender: "",
        city: "",
        age: "",
    })

    const onInputChange = (e) => {
        const { value, name } = e.target;
        setPerson({ ...person, [name]: value })
    }

    const onInputHobbies = (e) => {

        const { hobbies } = person;
        if (e.target.checked) {
            setPerson({ ...person, hobbies: [...hobbies, e.target.value] });
        }
        else {
            setPerson({ ...person, hobbies: hobbies.filter((e) => e !== e.target.value) });
            console.log(person.hobbies)
        }
    }

    const SubmitData = () => {
        dispatch(SUBMIT_DATA(person))
        // props.GET_DATA(person);
        navigate('/admin/table')

    }
    return (
        <div style={{ backgroundColor: '#daf0e0', paddingTop: 50, paddingBottom: 50 }} className='w-100'>
            <div className='w-50 m-0 m-auto'>
                <form className=' border border-dark p-3'>
                    {/* <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Id</label>
            <div class="col-sm-10">
              <input type="id" class="form-control" name='id'/>
            </div>
          </div> */}
                    <div class="row mb-3 mt-3">
                        <label class="col-sm-2 col-form-label">FirstName</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name='firstName' value={person.firstName} onChange={onInputChange} />
                        </div>
                    </div>
                    <div class="row mb-3 mt-3">
                        <label class="col-sm-2 col-form-label">LastName</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name='lastName' value={person.lastName} onChange={onInputChange} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label value={person.hobbies} className='col-auto'>Hobbies </label>
                        <div className='col-auto'>
                            <input type="checkbox" checked={person.hobbies?.indexOf("Sport") >= 0} name="hobbies" value="Sport" className="ms-4 me-2" onChange={onInputHobbies} />
                            <label className="me-4">Sport</label>
                        </div>

                        <div className='col-auto'>
                        <input type="checkbox" checked={person.hobbies?.indexOf("Travel") >= 0} name="hobbies" value="Travel" className="ms-2 me-2" onChange={onInputHobbies} />
                        <label className="me-4">Travel</label>
                        </div>

                        <div className='col-auto'>
                        <input type="checkbox" checked={person.hobbies?.indexOf("Singing") >= 0} name="hobbies" value="Singing" className="ms-2 me-2" onChange={onInputHobbies} />
                        <label className="me-4">Singing</label>
                        </div>


                    </div>
                    <div class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                        <div class="col-sm-10 text-start">
                            <div class="form-check form-check-inline ">
                                <input class="form-check-input" type="radio" name="gender" value='Male' onChange={onInputChange} />
                                <label class="form-check-label">
                                    Male
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" value='Female' onChange={onInputChange} />
                                <label class="form-check-label">
                                    Female
                                </label>
                            </div>
                        </div>
                        <div class="row mb-3 mt-3">
                            <label class="col-sm-2 col-form-label">city</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" name='city' value={person.city} onChange={onInputChange} />
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label class="col-sm-2 col-form-label">age</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" name='age' value={person.age} onChange={onInputChange} />
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={SubmitData}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form














