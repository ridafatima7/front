// // <!-- !

// // =========================================================
// // * Argon Dashboard React - v1.2.2
// // =========================================================

// // * Product Page: https://www.creative-tim.com/product/argon-dashboard-react
// // * Copyright 2022 Creative Tim (https://www.creative-tim.com)
// // * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

// // * Coded by Creative Tim

// // =========================================================

// // * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.



// //  reactstrap components -->
// // import NewHeader from "components/Headers/NewHeader.js";
// import axios from 'axios'
// import {
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   FormGroup,
//   Form,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Row,
  
//   Col
// } from "reactstrap";

// const RegisterasNGO = () => {
  
//     const handleSubmit=(e)=>{
//       e.preventDefault();
//       const name=e.target.elements.name.value;
//       const email=e.target.elements.email.value;
//       const password=e.target.elements.password.value;
//       const confirm_password=e.target.elements.confirm_password.value;
//       const phone_no=e.target.elements.phone_no.value;
//         // axios.post('http://localhost:8000/auth/get_data?name=rida').then(res =>{console.log(res)}) -->
//       axios({
//         method:'post',
//         url:'http://localhost:8000/NGOs/get_register',
//         data:{name:name,email:email,password:password,confirm_password:confirm_password,phone_no:phone_no}
//       })
//       .then(res=>{
//         console.log(res);
//       })
//       .catch(error=>{
//         console.log(error);
//       })
      
//    }

//   return (
//     <>
  
//       <Col lg="6" md="8" className="px-lg-5 py-lg-5 ">
//         <Card className="bg-secondary shadow border-0">
//             {/* <CardHeader className="bg-transparent pb-5"> 
//              <div className="text-muted text-center mt-2 mb-4">
//               <small>Sign up with</small>
//             </div>
//             <div className="text-center">
//               <Button
//                 className="btn-neutral btn-icon mr-4"
//                 color="default"
//                 href="#pablo"
//                 onClick={(e) => e.preventDefault()}
//               >
//                 <span className="btn-inner--icon">
//                   <img
//                     alt="..."
//                     src={
//                       require("../../assets/img/icons/common/github.svg")
//                         .default
//                     }
//                   />
//                 </span>
//                 <span className="btn-inner--text">Github</span>
//               </Button>
//               <Button
//                 className="btn-neutral btn-icon"
//                 color="default"
//                 href="#pablo"
//                 onClick={(e) => e.preventDefault()}
//               >
//                 <span className="btn-inner--icon">
//                   <img
//                     alt="..."
//                     src={
//                       require("../../assets/img/icons/common/google.svg")
//                         .default
//                     }
//                   />
//                 </span>
//                 <span className="btn-inner--text">Google</span>
//               </Button>
//             </div>
//           </CardHeader>  */}
//           <CardBody className="px-lg-5 py-lg-5"> 
//             <div className="text-center text-muted mb-4">
//               <small>Or sign up with credentials</small>
//             </div>
//             <Form role="form" onSubmit={handleSubmit}>
//               <FormGroup>
//                 <InputGroup className="input-group-alternative mb-3">
//                   <InputGroupAddon addonType="prepend">
//                     <InputGroupText>
//                       <i className="ni ni-hat-3" />
//                     </InputGroupText>
//                   </InputGroupAddon>
//                   <Input
//                    name="name"
//                    placeholder="Name"
//                     type="text" />
//                 </InputGroup>
//               </FormGroup>
//               <FormGroup>
//                 <InputGroup className="input-group-alternative mb-3">
//                   <InputGroupAddon addonType="prepend">
//                     <InputGroupText>
//                       <i className="ni ni-email-83" />
//                     </InputGroupText>
//                   </InputGroupAddon>
//                   <Input
//                     name="email"
//                     placeholder="Email"
//                     type="email"
//                     autoComplete="new-email"
//                   />
//                 </InputGroup>
//               </FormGroup>
//               <div className="text-muted font-italic">
//                 <small>
//                   password strength:{" "}
//                   <span className="text-success font-weight-700">strong</span>
//                 </small>
//               </div>
//               <FormGroup>
//                 <InputGroup className="input-group-alternative">
//                   <InputGroupAddon addonType="prepend">
//                     <InputGroupText>
//                       <i className="ni ni-lock-circle-open" />
//                     </InputGroupText>
//                   </InputGroupAddon>
//                   <Input
//                     name="password"
//                     placeholder="Password"
//                     type="password"
//                     autoComplete="new-password"
//                   />
//                 </InputGroup>
//               </FormGroup>
//               <div className="text-muted font-italic">
//                 <small>
//                   password strength:{" "}
//                   <span className="text-success font-weight-700">strong</span>
//                 </small>
//               </div>
//               <FormGroup>
//                 <InputGroup className="input-group-alternative">
//                   <InputGroupAddon addonType="prepend">
//                     <InputGroupText>
//                       <i className="ni ni-lock-circle-open" />
//                     </InputGroupText>
//                   </InputGroupAddon>
//                   <Input
//                     name="confirm_password"
//                     placeholder="Confirm Password"
//                     type="password"
//                     autoComplete="new-password"
//                   />
//                 </InputGroup>
//               </FormGroup>
//               {/* <div className="text-muted font-italic">
//                 <small>
//                   password strength:{" "}
//                   <span className="text-success font-weight-700">strong</span>
//                 </small>
//               </div> */}
//               <FormGroup>
//                 <InputGroup className="input-group-alternative mb-3">
//                   <InputGroupAddon addonType="prepend">
//                     <InputGroupText>
//                       <i className="ni ni-hat-3" />
//                     </InputGroupText>
//                   </InputGroupAddon>
//                   <Input
//                    name="phone_no"
//                    placeholder="Phone Number"
//                     type="text" />
//                 </InputGroup>
//               </FormGroup>
//               <Row className="my-4">
//                 <Col xs="12">
//                   <div className="custom-control custom-control-alternative custom-checkbox">
//                     <input
//                       className="custom-control-input"
//                       id="customCheckRegister"
//                       type="checkbox"
                      
//                     />
//                     <label
//                       className="custom-control-label"
//                       htmlFor="customCheckRegister"
//                     >
//                       <span className="text-muted">
//                         I agree with the{" "}
//                         <a href="#pablo" onClick={(e) => e.preventDefault()}>
//                           Privacy Policy
//                         </a>
//                       </span>
//                     </label>
//                   </div>
//                 </Col>
//               </Row>
//               <div className="text-center">
//                 <Button className="mt-4" color="primary" type="submit" >
//                   Create account
//                 </Button>
//               </div>
//             </Form>
//           </CardBody> 
//         </Card>
//       </Col>
//     </>
//   );
// };

// export default RegisterasNGO;
