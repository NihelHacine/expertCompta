import React from 'react'
import './fcss/Team.css'


function Team() {
  return (
<section id="team">
        <div className="container my-3 py-5 text-center">
          <div className="row mb-5">
            <div className="col">
              <h1>Notre équipe</h1>
              <p className="my-3" style={{textAlign:'center'}}>
                Mr. Gharbi Sami est assisté par 
              </p>
            </div>
          </div>
          <div className="row" style={{display:'flex', justifyContent:'center'}}>
            <div className="col-lg-3 col-md-6 pt-1">
              <div className="card h-100">
                <div className="card-body">
                  <img className="img-fouild rounded w-75 mb-3" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80" alt="Sophie" />
                  <h3>Nihel Hacine</h3>
                  <h5>Assistante de cabinet</h5>
                  <div className="d-flex flex-row justify-content-center">
                    <div className="p-4">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pt-1">
              <div className="card h-100">
                <div className="card-body">
                  <img className="img-fouild rounded w-75 mb-3" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="lucy" />
                  <h3>Fatma Ben Yeder</h3>
                  <h5>Secrétaire</h5>
                  <div className="d-flex flex-row justify-content-center">
                    <div className="p-4">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pt-1">
              <div className="card h-100">
                <div className="card-body">
                  <img className="img-fouild rounded w-75 mb-3" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGh1bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="andres" />
                  <h3>Youssef Hadef</h3>
                  <h5>Coursier</h5>
                  <div className="d-flex flex-row justify-content-center">
                    <div className="p-4">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Team
  