import React from 'react'


function NavbarHeader() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top" style={{ boxShadow:" 0 4px 2px -2px rgba(0,0,0,.2)"}}>
      <div className="container">
        <a class="navbar-brand col-lg-3" href="#">RiotMastery</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse col-lg-9" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item px-3 ">
              <a class="nav-link activeNav" aria-current="page" href="#">Home Page</a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link " href="#">Healthy and Diet</a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="#">Forum</a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="#">Fitness</a>
            </li>
          </ul>
          <form class="d-flex" style={{marginRight:"1rem"}}>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <a class="border border-dark py-1 px-2 rounded me-2"  href="#"><i style={{color: "rgb(50, 50, 50)"}} class="fa-solid fa-heart"></i></a>
            <a class="border border-dark py-1 px-2 rounded"  href="#"><i style={{color: "rgb(50, 50, 50)"}} class="fa-solid fa-user-plus"></i></a>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavbarHeader