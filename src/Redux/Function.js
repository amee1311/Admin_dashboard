// import { GET } from "../Redux/Variable"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { GET } from "./VariableAPI";
// import { PanoramaSharp } from "@mui/icons-material";

// const params = useParams();


export const GET_DATA = () => {
    return (dispatch) => {
        axios
            .get("https://student-api.mycodelibraries.com/api/student/get")
            .then((x) => {
                const apiData = x.data.data;
                console.log(apiData)
                dispatch(fetchData(apiData));
            });
    };
};

export const SUBMIT_DATA = (per, id) => {
    return (dispatch) => {
        // const params = useParams();
        console.log(per)
        const { firstName, lastName, hobbies, gender, city, age } = per;
        if (id) {
            axios.post('https://student-api.mycodelibraries.com/api/student/update', { id: id, firstName: firstName, lastName: lastName, age: age, hobbies: hobbies, gender: gender, city: city }).then(x => {
                dispatch(GET_DATA())
            })
        }
        else {
            axios.post("https://student-api.mycodelibraries.com/api/student/add", { firstName: firstName, lastName: lastName, age: age, hobbies: hobbies, gender: gender, city: city }
            ).then(pos => {
                console.log(pos.data.data)
                dispatch(GET_DATA())
            });
        }
    };
};
export const DEL_DATA = (x) => {
    return (dispatch) => {
        if (window.confirm('Are you sure wand to delete?')) {
            axios.delete(`https://student-api.mycodelibraries.com/api/student/delete?id=${x._id}`).then(de => {
                dispatch(GET_DATA())
            })
        }
    }
}

export const fetchData = (data) => {
    return {
        type: GET,
        payload: data,
    };
};
