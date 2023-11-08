import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
  return <>
             <nav className="sidenav sidebar-sticky flex-md-nowrap p-0 offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <ul className="nav flex-column">
                    <div className='d-flex justify-content-between'>
                    <a className="logo navbar-brand col-sm-2 col-md-2 mr-0 mb-3 col-6" href="#">Notes App</a>
                    <button type="button" className="btn-close my-4 mx-2 d-block d-sm-none d-md-none col-6" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                    </div>
                    
                    <li className="nav-item">
                        <div className="nav-link active" >
                             <Link to={'/dashboard'}>
                             <img src="/Images/description-n.svg" alt=""  className="px-2"/>
                             <span className="notes-nav">Notes</span>
                             </Link>
                            
                        </div>
                    </li> 
                </ul>
            </nav>


       
      
  </>
}

export default Sidebar