import React from "react";
import { Link } from "react-router-dom";
import "./SallerProfileUpdate.css";
// import AllProduct from "../../allProduct/allProduct";
import offerimg from "../../assets/img/offer.png";

const SallerProfileUpdate = () => {
  return (
    <div>
      <main class="body-content">
        <div class="ms-content-wrapper">
          <div class="ms-profile-overview">
            <div class="ms-profile-cover">
              <img
                class="ms-profile-img"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                alt="people"
              />
              <div class="ms-profile-user-info">
                <h4 class="ms-profile-username text-white">Chihoo Hwang</h4>
                <h2 class="ms-profile-role">Professional Cheff</h2>
              </div>
            </div>

            <div class="tab-content">
              <div class="tab-pane" id="tab1"></div>
              <div class="tab-pane" id="tab2"></div>
              <div class="tab-pane" id="tab3"></div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-9 col-md-12">
              <div className="row">
                <div className="col-12">
                  <div class="ms-panel ms-panel-fh">
                    <div class="ms-panel-body">
                      <h4 className="fw-bold ">About Me</h4>
                      <hr />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean non elit nisl. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos
                        himenaeos. Aenean luctus, entesque imperdiet, augue
                        metus ornare quam, in pulvinar massa erat nec dui. Nam
                        at facilisis nulla....
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div class="ms-panel ms-panel-fh">
                    <div class="ms-panel-body">
                      <h5>Pick a delivery date</h5>
                      <hr />
                      <div className="row gap-1 mt-3">
                        <div className="col-1 border pick-date">
                          <div
                            className="d-flex flex-column 
                           text-center"
                          >
                            <span className="fw-bold pick-day">SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                        <div className="col-1 border">
                          <div className="d-flex flex-column text-center">
                            <span className="fw-bold">SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                        <div className="col-1 border">
                          <div className="d-flex flex-column text-center">
                            <span className="fw-bold">SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                        <div className="col-1 border">
                          <div className="d-flex flex-column text-center">
                            <span className="fw-bold">SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                        <div className="col-1 border">
                          <div className="d-flex flex-column text-center">
                            <span className="fw-bold">SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                        <div className="col-1 border">
                          <div className="d-flex flex-column text-center">
                            <span className="fw-bold">SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                        <div className="col-1 border">
                          <div className="d-flex flex-column text-center">
                            <span className="fw-bold">SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                        <div className="col-1 border">
                          <div className="d-flex flex-column text-center">
                            <span className="fw-bold">SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>

                        <div className="col-1 border">
                          <div className="d-flex flex-column text-center">
                            <span className="fw-bold">SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                        <div className="col-1 border">
                          <div className="d-flex flex-column text-center">
                            <span className="fw-bold">SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                        <div className="col-1 border">
                          <div className="d-flex flex-column text-center">
                            <span className="fw-bold">SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-12">
              <div class="ms-panel ms-panel-fh">
                <div class="ms-panel-body">
                  <ul class="ms-profile-stats">
                    <li>
                      <h3 class="ms-count">5790</h3>
                      <span>Total Delivary</span>
                    </li>
                    <li>
                      <h3 class="ms-count">4.8</h3>
                      <span>User Rating</span>
                    </li>
                  </ul>

                  <img src={offerimg} className="img-fluid" />
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-12">
              <div className="asidebar  bg-white shadow-lg">
                <Link to={"/sellerprofile/allproduct"}> All Prodct</Link>
                <Link to={"/ba"}>Chickn</Link>
                <Link to={"/allprduct"}>Burger</Link>
                <Link to={"/allprouct"}>Burger</Link>
                <Link to={"/allprodct"}>Burger</Link>
                <Link to={"/allprodut"}>Burger</Link>
                <Link to={"/allproduc"}>Burger</Link>
              </div>
            </div>
            <div class="col-xl-9 col-md-12">
              <div class="ms-panel pt-3">{/* <AllProduct /> */}</div>
            </div>

            {/* <div class="col-md-12">
      <div class="ms-panel">
        <div class="ms-panel-body">
          <h2 class="section-title">Your Latest Posts</h2>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="ms-card">
                <div class="ms-card-body">
                  <div class="media fs-14">
                    <div class="mr-2 align-self-center">
                      <img src="../../../assets/img1.jpg" class="ms-img-round" alt="people"/>
                    </div>
                    <div class="media-body">
                      <h6>John Doe </h6>
                      <div class="dropdown float-right">
                        <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="material-icons">more_vert</i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right">
                          <li class="ms-dropdown-list">
                            <a class="media p-2" href="#">
                              <div class="media-body">
                                <span>Comment</span>
                              </div>
                            </a>
                            <a class="media p-2" href="#">
                              <div class="media-body">
                                <span>Share</span>
                              </div>
                            </a>
                            <a class="media p-2" href="#">
                              <div class="media-body">
                                <span>Favorite</span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <p class="fs-12 my-1 text-disabled">30 seconds ago</p>
                    </div>

                  </div>
                  <h6 class="fw-6">This is a card Title</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                </div>
                <div class="ms-card-img">
                  <img src="../../assets/img/costic/food-3.jpg" alt="card_img"/>
                </div>
                <div class="ms-card-footer text-disabled d-flex">
                  <div class="ms-card-options">
                    <i class="material-icons">favorite</i> 982
                  </div>
                  <div class="ms-card-options">
                    <i class="material-icons">comment</i> 785
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="ms-card">
                <div class="ms-card-body">
                  <div class="media fs-14">
                    <div class="mr-2 align-self-center">
                      <img src="../../assets/img/costic/customer-2.jpg" class="ms-img-round" alt="people"/>
                    </div>
                    <div class="media-body">
                      <h6>John Doe </h6>
                      <div class="dropdown float-right">
                        <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="material-icons">more_vert</i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right">
                          <li class="ms-dropdown-list">
                            <a class="media p-2" href="#">
                              <div class="media-body">
                                <span>Comment</span>
                              </div>
                            </a>
                            <a class="media p-2" href="#">
                              <div class="media-body">
                                <span>Share</span>
                              </div>
                            </a>
                            <a class="media p-2" href="#">
                              <div class="media-body">
                                <span>Favorite</span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <p class="fs-12 my-1 text-disabled">30 seconds ago</p>
                    </div>

                  </div>
                  <h6 class="fw-6">This is a card Title</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                </div>
                <div class="ms-card-img">
                  <img src="../../assets/img/costic/food-6.jpg" alt="card_img"/>
                </div>
                <div class="ms-card-footer text-disabled d-flex">
                  <div class="ms-card-options">
                    <i class="material-icons">favorite</i> 982
                  </div>
                  <div class="ms-card-options">
                    <i class="material-icons">comment</i> 785
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="ms-card">
                <div class="ms-card-body">
                  <div class="media fs-14">
                    <div class="mr-2 align-self-center">
                      <img src="../../../assets/img1.jpg" class="ms-img-round" alt="people"/>
                    </div>
                    <div class="media-body">
                      <h6>John Doe </h6>
                      <div class="dropdown float-right">
                        <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="material-icons">more_vert</i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right">
                          <li class="ms-dropdown-list">
                            <a class="media p-2" href="#">
                              <div class="media-body">
                                <span>Comment</span>
                              </div>
                            </a>
                            <a class="media p-2" href="#">
                              <div class="media-body">
                                <span>Share</span>
                              </div>
                            </a>
                            <a class="media p-2" href="#">
                              <div class="media-body">
                                <span>Favorite</span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <p class="fs-12 my-1 text-disabled">30 seconds ago</p>
                    </div>

                  </div>
                  <h6 class="fw-6">This is a card Title</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.</p>
                </div>
                <div class="ms-card-img">
                  <img src="../../../assets/img1.jpg" alt="card_img"/>
                </div>
                <div class="ms-card-footer text-disabled d-flex">
                  <div class="ms-card-options">
                    <i class="material-icons">favorite</i> 982
                  </div>
                  <div class="ms-card-options">
                    <i class="material-icons">comment</i> 785
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SallerProfileUpdate;
