import React, { useState,useEffect,userTa } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {
  Container,
  Col,
  Card,
  CardHeader,
  CardFooter,
  Table,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Badge,
  Button,
  Alert,
  UncontrolledDropdown,
  UncontrolledTooltip,
  Progress,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal, ModalHeader, ModalBody, ModalFooter,
  FormGroup,
  Form,
  Row,
  Input,
  Label
} from "reactstrap";
import NewHeader from "components/Headers/NewHeader.js";
import { post } from 'jquery';

const DisasterReliefManagement =(args)=>{
const[usertable, setUsertable] =useState()
const [modal, setModal] = useState(false);
const toggle = () => setModal(!modal);
const closeModal = () => setModal(false);
const [errorMessage, setErrorMessage] = useState("");
const [error, setError] = useState(false);
const [InformationTable,setInformationTable]=useState(false);
const [deletesuccess, setdeleteSuccess] = useState(false);
const [tempId, setTempId] = useState('');
const [tempName, setTempName] = useState('');
const [deletemodal, setdeleteModal] = useState(false);
const[rerender,setRerender]=useState(false);
const onDismissdeleteSuccess = () => setdeleteSuccess(false);
const onDismissaddSuccess = () => setaddSuccess(false);
const [addsuccess, setaddSuccess] = useState(false);
const Deletetoggle = (event) => { 
  setTempId(event.target.attributes.getNamedItem('data-id').value); 
  setTempName(event.target.attributes.getNamedItem('data-name').value);
  setdeleteModal(!deletemodal); 
};
const edittoggle1=(event)=>
{
    setEditModal(!editmodal);
};
const editModalClose=()=>
{
    setEditModal(!editmodal); 
}
const [id, setInformationid] = useState(null);
const [disasterType, setDisasterType] = useState(null);
const [Title, setTitle]=useState(null);
const[Area,setArea]=useState(null);
const[xcoordinates, setCoordinatesX]=useState(null);
const[ycoordinates, setCoordinatesY]=useState(null);
const[Population,setPopulation]=useState(null);
const[survivors,setSurvivors]=useState(null);
const[deaths,setDeaths]=useState(null);
const[date,setDate]=useState(null);
const[shelters,setShelters]=useState(null);
const[food,setFood]=useState(null);
const[medicine,setMedicine]=useState(null);
const[gallery,setGallery]=useState(null);
const[editmodal, setEditModal]=useState(false);
const onDismisseditSuccess = () => seteditSuccess(false);
const [editsuccess, seteditSuccess] = useState(false);
// const editModalClose=()=>
// {
//   setEditModal(!editmodal); 
// }
const DeletetoggleClose = () => {
  setdeleteModal(!deletemodal); 
}
    
function GetInformation(e)
{
  axios({ 

    method:'get',
    url:"http://localhost:8000/Relief_Information/GetInformation",
  })
  .then(res=>{
    if(res.data)
    {
      setInformationTable(res.data);
    }
  })
  .catch(error=>{
    console.log(error);
  })
}
useEffect(() => {
GetInformation();
}, []);
  function FindInformation(id)
  {
    axios({     //FindOneInformation on the base of id API Calling
      withCredentials: true,
      method:'get',
      url:"http://localhost:8000/Relief_Information/FindInformation?temp_id="+id
    })
    .then(res=>{
      if(res.data)
      {
        setInformationid(res.data._id);
        setDisasterType(res.data.dis_type);
        setTitle(res.data.dis_title);
        setArea(res.data. dis_area);
        setCoordinatesX(res.data.dis_coordinatesX);
        setCoordinatesY(res.data.dis_coordinatesY);
        setPopulation(res.data.population);
        setSurvivors(res.data.survivors);
        setDeaths(res.data.deaths);
        setDate(res.data.date);
        setShelters(res.data.shelters);
        setFood(res.data.food);
        setMedicine(res.data.medicine);
        setGallery(res.data.gallery);
        setEditModal(!editmodal);
      }
        
    })
    .catch(error=>{
      
      console.log(error);
      setError(true);
      setEditModal(!editmodal); 
    })
  };
  function EditInformation(e)
  {
    const disasterType=e.target.DisasterType.value;
    const title=e.target.Title.value;
    const area=e.target.area.value;
    const xcoordinates=e.target.xcoordinates.value;
    const ycoordinates=e.target.ycoordinates.value;
    const population=e.target.Population.value;
    const survivors=e.target.survivors.value;
    const deaths=e.target.deaths.value;
    const date=e.target.date.value;
    const shelters=e.target.shelters.value;
    const food=e.target.food.value;
    const medicine=e.target.medicine.value;
    const gallery=e.target.gallery.value;
    e.preventDefault();
    axios({     // edit Information on the base of id API Calling
      withCredentials: true,
      method:'post',
      url:"http://localhost:8000/Relief_Information/EditInformation",
      data:{id:id,disasterType:disasterType, title:title , area:area, xcoordinates:xcoordinates,ycoordinates:ycoordinates,population:population
        ,survivors:survivors,deaths:deaths,date:date,shelters:shelters,food:food,medicine:medicine,gallery:gallery},

    })
    .then(res=>{
      if(res.data == "success")
      {
        seteditSuccess(true); 
        GetInformation();
        setRerender(!rerender);
      }
      else
      {
        setErrorMessage(res.data);
        setError(true);
      }
      setEditModal(!editmodal); 
      
    })
    .catch(error=>{

      setErrorMessage("Failed to connect to backend");
      setError(true);
      console.log(error);
     
    })
  };
  function DeleteInformation()
  {
    axios({     //DeleteCourse API Calling
       withCredentials: true,
      method:'get',
      url:"http://localhost:8000/Relief_Information/DeleteInformation?temp_id="+tempId
    })
    .then(res=>{
      if(res.data.indicator=="success")
      {
        setdeleteSuccess(true);
      }
      else{
        setError(true);
        setErrorMessage(res.data.messege.message);
      }
      setdeleteModal(!deletemodal); 
      
    })
    .catch(error=>{
      console.log(error);
      setErrorMessage("Network Error!");
      setError(true);
      setdeleteModal(!deletemodal); 
    })
    
  };
function AddInformation(e)
  {
    e.preventDefault();
    // console.log(e.target.category.value)
    const disasterType=e.target.disasterType.value;
    const title=e.target.title.value;
    const area=e.target.area.value;
    const xcoordinates=e.target.xcoordinates.value;
    const ycoordinates=e.target.ycoordinates.value;
    const population=e.target.population.value;
    const survivors=e.target.survivors.value;
    const deaths=e.target.deaths.value;
    const date=e.target.date.value;
    const shelters=e.target.shelters.value;
    const food=e.target.food.value;
    const medicine=e.target.medicine.value;
    const gallery=e.target.gallery.value;
    
    axios({    //AddInformation API Calling
      method:'post',
       withCredentials: true,
      url:"http://localhost:8000/Relief_Information/AddInformation",
      data:{disasterType:disasterType, title:title , area:area, xcoordinates:xcoordinates,ycoordinates:ycoordinates, population:population
      ,survivors:survivors,deaths:deaths,date:date,shelters:shelters,food:food,medicine:medicine,gallery:gallery},
    })
    .then(res=>{
      if(res.data == "success")
      {
        setaddSuccess(true);
        GetInformation();
        setRerender(!rerender);
      }
      else
      {
        setErrorMessage(res.data);
        setError(true);
      }
      closeModal();
    })
    .catch(error=>{
      if(error.response.data=="Forbidden"){
        setErrorMessage("not alowed to access")
      setError(true);
      }
      else
      {
        setErrorMessage("Failed to connect to backend")
        setError(true);
      }
      
      closeModal();
    })
  }
  
   
return (
    <>
     <NewHeader />
     <Container className="mt--7" fluid>
    <Alert color="danger" isOpen={deletesuccess} toggle={onDismissdeleteSuccess}>
           <strong> Information Deleted! </strong> 
   </Alert>
  
     <Alert color="success" isOpen={addsuccess} toggle={onDismissaddSuccess}>
          <strong> Information added! </strong> 
    </Alert>
    <Alert color="success" isOpen={editsuccess} toggle={onDismisseditSuccess}>
          <strong> Information Updated successfully! </strong> 
        </Alert>
   
    <Modal isOpen={editmodal} toggle={edittoggle1} {...args} size='lg'>
        <Form  role="form" onSubmit={EditInformation} >
          <ModalHeader toggle={edittoggle1}>Update Inforamtion</ModalHeader>
          <ModalBody>        
              <Row>
                <Col md={6}>
                  <FormGroup>
                  <Label
                    for="id"
                    hidden
                  >
                    ID
                  </Label>
                  <Input
                    id="id"
                    name="id"
                    placeholder="info id"
                    type="hidden"
                    value={id}
                  />
                    <Label for="DisasterType">
                      Information Type
                    </Label>
                    <Input
                      id="DisasterType"
                      name="DisasterType"
                      placeholder="Update DisasterType"
                      type="text"
                     defaultValue={disasterType}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="DisasterTitle">
                      Information Title
                    </Label>
                    <Input
                      id="Title"
                      name="Title"
                      placeholder="Enter Title"
                      type="text"
                      defaultValue={Title}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="startdate">
                      Disaster Area
                    </Label>
                    <Input
                      id="Area"
                      name="area"
                      placeholder="Enter area"
                      type="text"
                      defaultValue={Area}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Area XCoordinates">
                     X Coordinates
                    </Label>
                    <Input
                      id="xcoordinates"
                      name="xcoordinates"
                      placeholder="Enter Area Co-ordinates(X)"
                      type="text"
                      defaultValue={xcoordinates}
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Label for="Area YCoordinates">
                    Y Coordinates
                    </Label>
                    <Input
                      id="ycoordinates"
                      name="ycoordinates"
                      placeholder="Enter Area Co-ordinates(Y)"
                      type="text"
                      defaultValue={ycoordinates}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
              <FormGroup>
                <Label for="description">
                  Total Population
                </Label>
                <Input
                  id="Population"
                  name="Population"
                  placeholder="Total Population"
                  type='text'
                  defaultValue={Population}
                />
              </FormGroup>
              </Col>
              <Col md={6}>
              <FormGroup>
                <Label for="Survivors">
                Families Surved
                </Label>
                <Input
                  id="survivors"
                  name="survivors"
                  placeholder="Enter Estimated survivors"
                  type='text'
                  defaultValue={survivors}
                />
              </FormGroup>
              </Col>
              <Col md={6}>
              <FormGroup>
                <Label for="Deaths">
                Individual Surved
                </Label>
                <Input
                  id="deaths"
                  name="deaths"
                  placeholder="Enter Estimated deaths"
                  type='text'
                  defaultValue={deaths}
                />
              </FormGroup>
              </Col>
              <Col md={6}>
              <FormGroup>
                <Label for="Date">
                Date
                </Label>
                <Input
                  id="date"
                  name="date"
                  placeholder="Choose date"
                  type='date'
                  defaultValue={date}
                />
              </FormGroup>
              </Col>
              <Col md={6}>
              <FormGroup>
                <Label for="Shelters">
                Shelters provided
                </Label>
                <Input
                  id="shelters"
                  name="shelters"
                  placeholder="Enter Estimated shelters( for familes)"
                  type='text'
                  defaultValue={shelters}
                />
              </FormGroup>
              </Col>
              <Col md={6}>
              <FormGroup>
                <Label for="Food">
                Food Provided
                </Label>
                <Input
                  id="food"
                  name="food"
                  placeholder="Enter Required food ( for individuals)"
                  type='text'
                  defaultValue={food}
                />
              </FormGroup>
              </Col>
             
              <Col md={6}>
              <FormGroup>
                <Label for="Medicine">
                Medicine Provided
                </Label>
                <Input
                  id="medicine"
                  name="medicine"
                  placeholder="Enter Required medicine ( for individuals)"
                  type='text'
                  defaultValue={medicine}
                />
              </FormGroup>
              </Col>
              <Col md={6}>
              <FormGroup>
                <Label for="Gallery">
                Gallery
                </Label>
                <Input
                  id="gallery"
                  name="gallery"
                  placeholder="Upload Disaster Pictures(If Any)"
                  type='text'
                  defaultValue={gallery}
                />
              </FormGroup>
              </Col>
              </Row>
              {/* <Row>
                <Col md={12}>
                <FormGroup>
                  <Label for="category">
                    Course Category
                  </Label>
                  <Input
                    id="category"
                    name="category"
                    type="select"
                    defaultValue={category}
                  >  
                    <option value="English">
                      English
                    </option>
                    <option value="Science">
                      Science
                    </option>
                    <option value="Technology">
                      Technology
                    </option>
                    <option value="Visa">
                      Visa 
                    </option>
                    <option value="Mathematics">
                      Mathematics
                    </option>
                    <option value="Computer">
                      Computer
                    </option>
                  </Input>
                </FormGroup>
              </Col>
              </Row>
            */}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" >
              Update
            </Button>{' '}
            <Button color="secondary" onClick={editModalClose}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
        </Modal>
        {/* Delete modal */}
 
        <Modal isOpen={deletemodal} toggle={DeletetoggleClose} {...args} size='sm'>
          <ModalHeader toggle={DeletetoggleClose} >Delete Information</ModalHeader>
          <ModalBody>
            Are you sure you want to delete <b>{tempName}</b>?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => {DeleteInformation()}}>
              Delete
            </Button>{' '}
            <Button color="secondary" onClick={DeletetoggleClose}>
              Cancel
            </Button>
          </ModalFooter>

          </Modal>
    <Modal isOpen={modal} toggle={toggle} {...args} size='lg'>
        <Form  role="form" onSubmit={AddInformation}>
          <ModalHeader  className="text-center" toggle={toggle}><b>Add Relied Activities Information</b></ModalHeader>
          <ModalBody>
              <Row >
                <Col md={6}>
                  <FormGroup>
                    <Label for="Disaster Type">
                      Disaster Name*
                    </Label>
                    <Input
                      id="disasterType"
                      name="disasterType"
                      placeholder="Enter information type"
                      type="select"
                    >
                      {usertable ?
                        usertable
                          .filter(row => row.role === 'NGO')
                          .map((row, index) => {
                            return (
                              <option key={index} value={row._id}>
                                {row.dis_type}
                              </option>
                            )
                          })
                        :
                        <h1>No information Selected Yet</h1>
                      }
                    {/* <Input type="select" name="DisasterType" id="disasterType"  placeholder="Enter Information type" >
                    <option value="">Enter Information type</option>
                    <option value="option1">Floods2023</option>
                     <option value="option2">Landsliding2023</option>
                     <option value="option3">Earthquakejune2023</option> */}
                     </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Disaster Title">
                      Information Title*
                    </Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="Enter Disaster title"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Disaster Area">
                      Disaster Area*
                    </Label>
                    {/* <Input
                      id="area"
                      name="area"
                      placeholder="Enter Disaster area"
                      type="text"
                    /> */}
                    <Input type="select" name="area" id="area"  placeholder="Enter Disaster Area" >
                    <option value="">Enter Disaster Area</option>
                    <option value="option1">Lahore</option>
                     <option value="option2">Sargodha</option>
                     <option value="option3">Multan</option>
                     <option value="option3">Swaat</option>
                     <option value="option3">Krachi</option>
                     <option value="option3">Kalaam</option>
                     <option value="option3">Murree</option>
                     <option value="option3">Islamabad</option>
                     <option value="option3">Faislbbad</option>
                     <option value="option3">Gujranwala</option>
                     <option value="option3">Sakkhar</option>
                     <option value="option3">Hiadrabad</option>
                     <option value="option3">Haripur</option>
                     <option value="option3">Abbotabad</option>
                     </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Area XCoordinates">
                     X Coordinates*
                    </Label>
                    <Input
                      id="xcoordinates"
                      name="xcoordinates"
                      placeholder="Enter Area Co-ordinates(X)"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Label for="Area YCoordinates">
                    Y Coordinates*
                    </Label>
                    <Input
                      id="ycoordinates"
                      name="ycoordinates"
                      placeholder="Enter Area Co-ordinates(Y)"
                      type="text"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
              <FormGroup>
                <Label for="population">
                Total Population*
                </Label>
                <Input
                  id="population"
                  name="population"
                  placeholder="Enter Estimated Population"
                  type='text'
                />
              </FormGroup>
              </Col>
              <Col md={6}>
              <FormGroup>
                <Label for="Survivors">
                Families Surved*
                </Label>
                <Input
                  id="survivors"
                  name="survivors"
                  placeholder="Enter Estimated survivors"
                  type='text'
                />
              </FormGroup>
              </Col>
              <Col md={6}>
              <FormGroup>
                <Label for="Deaths">
                Individual Served*
                </Label>
                <Input
                  id="deaths"
                  name="deaths"
                  placeholder="Enter Estimated deaths"
                  type='text'
                />
              </FormGroup>
              </Col>
              <Col md={6}>
              <FormGroup>
                <Label for="Date">
                Date*
                </Label>
                <Input
                  id="date"
                  name="date"
                  placeholder="Choose date"
                  type='date'
                />
              </FormGroup>
              </Col>
              <Col md={6}>
              <FormGroup>
                <Label for="Shelters">
                Shelters Provided*
                </Label>
                <Input
                  id="shelters"
                  name="shelters"
                  placeholder="Enter Estimated shelters( for familes)"
                  type='text'
                />
              </FormGroup>
              </Col>
              <Col md={6}>
              <FormGroup>
                <Label for="Food">
                Food Provided*
                </Label>
                <Input
                  id="food"
                  name="food"
                  placeholder="Enter Required food ( for individuals)"
                  type='text'
                />
              </FormGroup>
              </Col>
             
              <Col md={6}>
              <FormGroup>
                <Label for="Medicine">
                Medicine Provided*
                </Label>
                <Input
                  id="medicine"
                  name="medicine"
                  placeholder="Enter Required medicine ( for individuals)"
                  type='text'
                />
              </FormGroup>
              </Col>
              <Col md={6}>
              <FormGroup>
                <Label for="Gallery">
                Gallery
                </Label>
                <Input
                  id="gallery"
                  name="gallery"
                  placeholder="Upload Disaster Pictures(If Any)"
                  type='text'
                  required
                />
              </FormGroup>
              </Col>
              </Row>
              {/* <Row>
                <Col md={12}>
                <FormGroup>
                  <Label for="category">
                    Course Category
                  </Label>
                  <Input
                    id="category"
                    name="category"
                    type="select"
                  >  
                    <option value="English">
                      English
                    </option>
                    <option value="Science">
                      Science
                    </option>
                    <option value="Technology">
                      Technology
                    </option>
                    <option value="Visa">
                      Visa 
                    </option>
                    <option value="Mathematics">
                      Mathematics
                    </option>
                  </Input>
                </FormGroup>
              </Col>
              </Row> */}

            
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" onClick={toggle}>
              Add Information
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
        </Modal>
        <Modal isOpen={deletemodal} toggle={DeletetoggleClose} {...args} size='sm'>
          <ModalHeader toggle={DeletetoggleClose} onClick={DeleteInformation}>Delete Information</ModalHeader>
          <ModalBody>
            Are you sure you want to delete <b>{tempName}</b>?
          </ModalBody>
          <ModalFooter>
            <Button color="danger"  onClick={DeleteInformation}>
              Delete
            </Button>{' '}
            <Button color="secondary" onClick={DeletetoggleClose}>
              Cancel
            </Button>
          </ModalFooter>

          </Modal>
    
    <Row>
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <Row className="align-items-center">
                  <div className="col">
                  <h3 className="text-white mb-0"><b>Relief Information</b></h3>
                  </div>
                  <div className="col text-right">
                    <Button 
                      color="primary"
                      onClick={toggle}
                      size="md"
                    >
                      Add new Information
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              {/* <CardHeader className="border-0">
                <h3 className="mb-0">Courses</h3>
               
              </CardHeader> */}
              <Table className="align-items-center table-dark table-flush" responsive>
               {/* AllCourses.map(function(item, i){
                  console.log('test');
                  return <li key={i}>Test</li>
                }) */}
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Information Type</th>
                    <th scope="col">Information Title</th>
                    <th scope="col">Information Area</th>
                    <th scope="col">Area XCoordinates</th>
                    <th scope="col">Area YCoordinates</th>
                    <th scope="col">Population</th>
                    <th scope="col">Individual Surved</th>
                    <th scope="col">Families surved</th>
                    <th scope="col">Date</th>
                    <th scope="col">Shelters Provided</th>
                    <th scope="col">Food Provided</th>
                    <th scope="col">Medicines Provided</th>
                    <th scope="col">Gallery</th>
                    <th scope="col">Action</th>
                    <th scope="col" />
                  </tr>
                </thead>

                <tbody>
                { InformationTable ?
                  InformationTable.map((row, index) => {
                  return(
                  <tr key={index}>
                 
                 
                    <th scope="row">
                      {/* <i className="ni ni-book-bookmark text-blue"/> */}
                      <span className="mb-0 text-sm">
                      {row.dis_type}
                      </span>

                    </th>
                    <td>{row.dis_title}</td>
                    

                    <td>
                      {/* <Badge color="" className="badge-dot">
                        <i className="bg-info" /> */}
                       {row.dis_area}
                      
                      {/* </Badge> */}
                    </td>
                    <td>
                      {/* <Badge color="" className="badge-dot">
                        <i className="bg-info" /> */}
                       {row.dis_coordinatesX}
                      {/* </Badge> */}
                    </td> 
                    <td>{row.dis_coordinatesY}</td>
                    <td>{row.population}</td>
                    <td>{row.survivors}</td>
                    <td>{row.deaths}</td>
                    <td>{row.date}</td>
                    <td>{row.shelters}</td>
                    <td>{row.food}</td>
                    <td>{row.medicine}</td>
                    <td>{row.gallery}</td>
                    <td>
                      <Button color="primary" onClick={() => {FindInformation(row._id)}}>
                      <i className="ni ni-active-40"></i>
                      </Button>
                      <Button data-id={row._id} data-name={row.dis_title}color="danger" onClick={Deletetoggle}> 
                        <i className="ni ni-fat-remove"></i>
                      </Button>
                    </td>

                  </tr> )
                      })
                      :
                      <tr>
                        <td span="5">No Information found!</td>
                      </tr>
                }
                </tbody>
              </Table>

            </Card>
          </div>
        </Row>
        </Container>

    </>
)
}
export default DisasterReliefManagement;