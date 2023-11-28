import React, { useEffect, useState } from "react";

// react-bootstrap components
import {
  // Badge,
  // Button,
  Card,
  // Navbar,
  // Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DEL_DATA, GET_DATA } from "../../Redux/Function";

function TableList() {
  const selector = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(GET_DATA())
  }, [])

const [person, setPerson] = useState({
  firstName: "",
  lastName: "",
  hobbies: [],
  gender: "",
  city: "",
  age: "",
})

const Editdata = (e) => {
  navigate(`/admin/form/${e._id}`);
};
  return (
    <>
    <Link to="/admin/form" class="fs-5 mb-3 text-center">Back to Form</Link> <br/>
      <Container fluid className="mt-5">
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4" className="text-center">DATA TABLE</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped text-center" >
                  <thead style={{textAlign:"center"}}>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">FirstName</th>
                      <th className="border-0">LastName</th>
                      <th className="border-0">Hobbies</th>
                      <th className="border-0">gender</th>
                      <th className="border-0">age</th>
                      <th className="border-0">City</th>
                      {/* <th className="border-0">CeatedAt</th>
                      <th className="border-0">UpdatedAt</th> */}
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        selector.map(x => {
                            return <tr style={{fontSize: 14 , width: 100}}><td>{x._id}</td><td>{x.firstName}</td><td>{x.lastName}</td><td>{x.hobbies}</td><td>{x.gender}</td><td>{x.age}</td><td>{x.city}</td>
                            {/* <td>{x.createdAt}</td><td>{x.updatedAt}</td> */}
                            <td><button className='btn btn-primary' onClick={() => Editdata(x)}>Edit</button></td><td><button className='btn btn-danger' onClick={() => dispatch(DEL_DATA(x))}>Delete</button></td></tr>
                        })
                    } 
                </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;

