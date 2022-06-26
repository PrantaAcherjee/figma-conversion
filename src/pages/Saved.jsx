import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Collapse, Container,  Nav, Navbar, Tab, Tabs } from 'react-bootstrap';
import logo from "../../src/Vector.png";
import { BsEmojiSmile,BsClipboard,BsBoxArrowUp,BsBookmark,BsHouseDoorFill,BsBarChartLine,BsFacebook,BsLinkedin,BsTwitter,BsEnvelope} from "react-icons/bs";
const Saved = () => {
// ----------for Collapse----------
const [open,setOPen]=useState(false)
    return (
      <div className=''>
        <div className=''>
            <div>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky="top" className='text-white p-0'>
          <Container fluid> 
            <Navbar.Brand >
             <h4 className='text-white'><img className='pb-1' src={logo} alt="logo" /> Summary</h4>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="ms-3 mt-3">
                  <p className=''>Search</p>
                  <div className='d-lg-none d-block'>
            <Link to='/' className='text-decoration-none text-white'>
            <BsHouseDoorFill/><span className='px-2 text-white'>Instant</span>
             </Link>
             <br />
             <Link to='/' className='text-decoration-none fw-bold text-white'>
             <BsBarChartLine/><span className='px-2 text-white'>Schedule</span> 
             </Link>             
             <br />             
             <Link to='/' className='text-decoration-none fw-bold text-white'>
             <BsBarChartLine/><span className='px-2'>Saved</span> 
             </Link>        
             </div>
             </Nav>
             <Nav className="ms-auto mt-3">
                <p className='px-3'>Sign Out</p>
             </Nav>
            </Navbar.Collapse>
          </Container>
           </Navbar>
         </div>
        </div>
 {/* --------------------for desktop-------------   */}
    <div className='container-fluid'>  
      <div className='row'>
        <div style={{backgroundColor:'#F8F9FA',minHeight:"100vh"}} className='col-2  d-lg-block d-none '>
            <div className='h-100 side-menu position-relative pt-3'>
            <div className='ms-3'>
             <Link to='/' className='text-decoration-none fs-5 text-dark'>
             <BsHouseDoorFill style={{fontSize:"16px"}}/><span className='px-2'>Instant</span>
             </Link>
             <br />
             <Link to='/' className='text-decoration-none fs-5 text-dark'>
             <BsBarChartLine style={{fontSize:"16px"}}/><span className='px-2'>Schedule</span> 
             </Link>             
             <br />             
             <Link to='/' className='text-decoration-none fs-5 text-dark'>
             <BsBarChartLine style={{fontSize:"16px"}}/><span className='px-2'>Saved</span> 
             </Link>           
            </div>
            <div className='user position-absolute bottom-0 border-top w-100' >
                <div className='d-flex align-items-center my-1'>
                <i style={{color:'white',backgroundColor:"#CFD4D9",padding:"10px",borderRadius:"50px",fontSize:"15px"}} class="fa-solid fa-user-large"></i>
                 
                <h6 className='mt-2 px-2'>User Name</h6>

                <i style={{color:'#6C757D'}} class="fa-solid fa-caret-down"></i>
                </div>
            </div>
            </div>
        </div>

      <div className='col-12 col-md-10  py-4 side-content'>
      <div className='row align-items-center  justify-content-center'>

   <h4 className='mb-4 w-75'>You will find all your saved summaries here.</h4>

   <div style={{background:'#0D6EFD'}} className='d-flex justify-content-between align-items-center w-75 py-1 text-white mb-4'>
   <div className='pt-2'>
   <h6>List group item heading.</h6>
   <p>some placeholder content in a paragraph below the  heading and date.</p>
   </div>        
   <p>11m ago</p>
   </div>
   <div className='d-flex justify-content-between align-items-center w-75 py-1 mb-4'>
   <div className='pt-2'>
   <h6>List group item heading.</h6>
   <p>some placeholder content in a paragraph below the  heading and date.</p>
   
   </div>        
   <p>11 hour ago</p>
   </div>
   <hr className='d-flex justify-content-between align-items-center w-75'/>
   <div className='d-flex justify-content-between align-items-center w-75 py-1 mb-4'>
   <div className='pt-2'>
   <h6>List group item heading.</h6>
   <p>some placeholder content in a paragraph below the  heading and date.</p>
   </div>        
   <p>1days ago</p>
   </div>
   <hr className='d-flex justify-content-between align-items-center w-75'/>
   <div className='d-flex justify-content-between align-items-center w-75 py-1 mb-4'>
   <div className='pt-2'>
   <h6>List group item heading.</h6>
   <p>some placeholder content in a paragraph below the  heading and date.</p>
   </div>        
   <p>11 April</p>
   </div>
   <hr className='d-flex justify-content-between align-items-center w-75'/>
   <div className='d-flex justify-content-between align-items-center w-75 py-1 mb-4'>
   <div className='pt-2'>
   <h6>List group item heading.</h6>
   <p>some placeholder content in a paragraph below the  heading and date.</p>
   </div>        
   <p>14 May</p>
   </div>
   <hr className='d-flex justify-content-between align-items-center w-75'/>
   <div className='d-flex justify-content-between align-items-center w-75 py-1 mb-4'>
   <div className='pt-2'>
   <h6>List group item heading.</h6>
   <p>some placeholder content in a paragraph below the  heading and date.</p>
   </div>        
   <p>20 Decenber</p>
   </div>
   <hr className='d-flex justify-content-between align-items-center w-75'/>
   <div className='d-flex justify-content-between align-items-center w-75 py-1 mb-4'>
   <div className='pt-2'>
   <h6>List group item heading.</h6>
   <p>some placeholder content in a paragraph below the  heading and date.</p>
   </div>        
   <p>24 November</p>
   </div>
   <hr className='d-flex justify-content-between align-items-center w-75'/>
   </div>  
      </div>
      </div>
    </div>
     </div>
  
    );
};

export default Saved; 