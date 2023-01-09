import React, { useState, useEffect } from "react";
import "./productDetails.css";
import { foodItem } from "../data";
import Product_Slider from "../../assets/img/Slider/discount_bg_2.png";
const ProductsDetails = () => {
  const [Image, setImage] = useState(foodItem[2].item_image);

  return (
    <div>
      <section class="inner-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="details-gallery">
                <div class="details-label-group">
                  <label class="details-label new">new</label>
                  <label class="details-label off">-10%</label>
                </div>
                <div class="details-preview row mt-3 rounded">
                  <div className="col-12 bg-new">
                    <img
                      src={Image}
                      alt="product"
                      style={{ width: 350, height: 280, marginLeft: "50%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="row gap-1 justify-content-center align-items-center">
                {foodItem.map((item, index) => {
                  return (
                    <div className="col-3 border">
                      <img
                        className="img-fluid"
                        src={item.item_image}
                        alt="product"
                        onClick={() => {
                          setImage(item.item_image);
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* <Product_Slider /> */}
            </div>
            <div class="col-lg-6 mt-3">
              <div class="details-content">
                <h3 class="details-name">
                  <a href="#">existing product name</a>
                </h3>
                <div class="details-meta">
                  <p>
                    SKU:<span>1234567</span>
                  </p>
                  <p>
                    BRAND:<a href="#">radhuni</a>
                  </p>
                </div>
                <div class="details-rating">
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="active icofont-star"></i>
                  <i class="icofont-star"></i>
                  <a href="#">(3 reviews)</a>
                </div>
                <h3 class="details-price">
                  <del>$38.00</del>
                  <span>
                    $24.00<small>/per kilo</small>
                  </span>
                </h3>
                <p class="details-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit facere
                  harum natus amet soluta fuga consectetur alias veritatis
                  quisquam ab eligendi itaque eos maiores quibusdam.
                </p>
                <div class="details-list-group">
                  <label class="details-list-title">tags:</label>
                  <ul class="details-tag-list">
                    <li>
                      <a href="#">burger</a>
                    </li>
                    <li>
                      <a href="#">ciken</a>
                    </li>
                    <li>
                      <a href="#">chilis</a>
                    </li>
                  </ul>
                </div>
                <div class="details-list-group">
                  <label class="details-list-title">Share:</label>
                  <ul class="details-share-list">
                    <li>
                      <a href="#" class="icofont-facebook" title="Facebook"></a>
                    </li>
                    <li>
                      <a href="#" class="icofont-twitter" title="Twitter"></a>
                    </li>
                    <li>
                      <a href="#" class="icofont-linkedin" title="Linkedin"></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="icofont-instagram"
                        title="Instagram"
                      ></a>
                    </li>
                  </ul>
                </div>
                <div class="details-add-group">
                  <button class="product-add" title="Add to Cart">
                    <i class="fas fa-shopping-basket"></i>
                    <span>add to cart</span>
                  </button>
                  <div class="product-action">
                    <button class="action-minus" title="Quantity Minus">
                      <i class="icofont-minus"></i>
                    </button>
                    <input
                      class="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button class="action-plus" title="Quantity Plus">
                      <i class="icofont-plus"></i>
                    </button>
                  </div>
                </div>
                <div class="details-action-group">
                  <a
                    class="details-wish wish"
                    href="#"
                    title="Add Your Wishlist"
                  >
                    <i class="icofont-heart"></i>
                    <span>add to wish</span>
                  </a>
                  <a class="details-compare" href="#" title="Compare This Item">
                    <i class="fas fa-random"></i>
                    <span>Compare This</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="inner-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <ul class="nav nav-tabs">
                <li>
                  <a
                    href="#tab-desc"
                    class="tab-link active"
                    data-bs-toggle="tab"
                  >
                    descriptions
                  </a>
                </li>
                <li>
                  <a href="#tab-spec" class="tab-link" data-bs-toggle="tab">
                    Specifications
                  </a>
                </li>
                <li>
                  <a href="#tab-reve" class="tab-link" data-bs-toggle="tab">
                    reviews (2)
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="tab-pane fade show active" id="tab-desc">
            <div class="row">
              <div class="col-lg-6">
                <div class="product-details-frame">
                  <div class="tab-descrip">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Recusandae delectus natus quasi aperiam. Nulla
                      perspiciatis ullam ipsa, magni animi eligendi quis
                      mollitia dolor omnis alias ut aspernatur est voluptatem
                      illo totam iste consequatur vitae laborum ipsam facilis!
                      Ipsa, voluptatum neque dolor facere autem maiores
                      pariatur, eveniet veritatis vero iure obcaecati
                    </p>
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                      </li>
                      <li>
                        labore possimus architecto, saepe nobis ex mollitia
                      </li>
                      <li>
                        mollitia soluta magni placeat. Eaque sit praesentium
                      </li>
                      <li>
                        distinctio ab a exercitationem officiis labore possimus
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="product-details-frame">
                  <div class="tab-descrip">
                    <img src={foodItem[1].item_image} alt="video" />
                    <a
                      title="Product Video"
                      href=""
                      class="venobox fas fa-play"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="tab-spec">
            <div class="row">
              <div class="col-lg-12">
                <div class="product-details-frame">
                  <table class="table table-bordered">
                    <tbody>
                      <tr>
                        <th scope="row">Product code</th>
                        <td>SKU: 101783</td>
                      </tr>
                      <tr>
                        <th scope="row">Weight</th>
                        <td>Single, Double</td>
                      </tr>
                      <tr>
                        <th scope="row">Styles</th>
                        <td>@Maxican</td>
                      </tr>
                      <tr>
                        <th scope="row">Properties</th>
                        <td>Chaowmin</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="tab-reve">
            <div class="row">
              <div class="col-lg-12">
                <div class="product-details-frame">
                  <ul class="review-list">
                    <li class="review-item">
                      <div class="review-media">
                        <a class="review-avatar" href="#">
                          <img src="images/avatar/01.jpg" alt="review" />
                        </a>
                        <h5 class="review-meta">
                          <a href="#">miron mahmud</a>
                          <span>June 02, 2020</span>
                        </h5>
                      </div>
                      <ul class="review-rating">
                        <li class="icofont-ui-rating"></li>
                        <li class="icofont-ui-rating"></li>
                        <li class="icofont-ui-rating"></li>
                        <li class="icofont-ui-rating"></li>
                        <li class="icofont-ui-rate-blank"></li>
                      </ul>
                      <p class="review-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus hic amet qui velit, molestiae suscipit
                        perferendis, autem doloremque blanditiis dolores nulla
                        excepturi ea nobis!
                      </p>
                      <form class="review-reply">
                        <input type="text" placeholder="reply your thoughts" />
                        <button>
                          <i class="icofont-reply"></i>reply
                        </button>
                      </form>
                      <ul class="review-reply-list">
                        <li class="review-reply-item">
                          <div class="review-media">
                            <a class="review-avatar" href="#">
                              <img src="images/avatar/02.jpg" alt="review" />
                            </a>
                            <h5 class="review-meta">
                              <a href="#">labonno khan</a>
                              <span>
                                <b>author -</b>June 02, 2020
                              </span>
                            </h5>
                          </div>
                          <p class="review-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus hic amet qui velit, molestiae suscipit
                            perferendis, autem doloremque blanditiis dolores
                            nulla excepturi ea nobis!
                          </p>
                          <form class="review-reply">
                            <input
                              type="text"
                              placeholder="reply your thoughts"
                            />
                            <button>
                              <i class="icofont-reply"></i>reply
                            </button>
                          </form>
                        </li>
                        <li class="review-reply-item">
                          <div class="review-media">
                            <a class="review-avatar" href="#">
                              <img src="images/avatar/03.jpg" alt="review" />
                            </a>
                            <h5 class="review-meta">
                              <a href="#">tahmina bonny</a>
                              <span>June 02, 2020</span>
                            </h5>
                          </div>
                          <p class="review-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus hic amet qui velit, molestiae suscipit
                            perferendis, autem doloremque blanditiis dolores
                            nulla excepturi ea nobis!
                          </p>
                          <form class="review-reply">
                            <input
                              type="text"
                              placeholder="reply your thoughts"
                            />
                            <button>
                              <i class="icofont-reply"></i>reply
                            </button>
                          </form>
                        </li>
                      </ul>
                    </li>
                    <li class="review-item">
                      <div class="review-media">
                        <a class="review-avatar" href="#">
                          <img src="images/avatar/04.jpg" alt="review" />
                        </a>
                        <h5 class="review-meta">
                          <a href="#">shipu shikdar</a>
                          <span>June 02, 2020</span>
                        </h5>
                      </div>
                      <ul class="review-rating">
                        <li class="icofont-ui-rating"></li>
                        <li class="icofont-ui-rating"></li>
                        <li class="icofont-ui-rating"></li>
                        <li class="icofont-ui-rating"></li>
                        <li class="icofont-ui-rate-blank"></li>
                      </ul>
                      <p class="review-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus hic amet qui velit, molestiae suscipit
                        perferendis, autem doloremque blanditiis dolores nulla
                        excepturi ea nobis!
                      </p>
                      <form class="review-reply">
                        <input type="text" placeholder="reply your thoughts" />
                        <button>
                          <i class="icofont-reply"></i>reply
                        </button>
                      </form>
                    </li>
                  </ul>
                </div>
                <div class="product-details-frame">
                  <h3 class="frame-title">add your review</h3>
                  <form class="review-form">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="star-rating">
                          <input type="radio" name="rating" id="star-1" />
                          <label for="star-1"></label>
                          <input type="radio" name="rating" id="star-2" />
                          <label for="star-2"></label>
                          <input type="radio" name="rating" id="star-3" />
                          <label for="star-3"></label>
                          <input type="radio" name="rating" id="star-4" />
                          <label for="star-4"></label>
                          <input type="radio" name="rating" id="star-5" />
                          <label for="star-5"></label>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            placeholder="Describe"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <button class="btn btn-inline">
                          <i class="icofont-water-drop"></i>
                          <span>drop your review</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="inner-section">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="section-heading">
                <h2>related this items</h2>
              </div>
            </div>
          </div>
          <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {foodItem.map((item) => (
              <div class="col-4">
                <div class="product-card">
                  <div class="product-media">
                    <div class="product-label">
                      <label class="label-text new">new</label>
                    </div>
                    <button class="product-wish wish">
                      <i class="fas fa-heart"></i>
                    </button>
                    <a class="product-image">
                      <img src={foodItem[1].item_image} alt="product" />
                    </a>
                    <div class="product-widget">
                      <a
                        title="Product View"
                        className="fas fa-eye"
                        data-bs-toggle="modal"
                        data-bs-target="#product-view"
                      ></a>
                    </div>
                  </div>
                  <div class="product-content">
                    <div class="product-rating">
                      <i class="active icofont-star"></i>
                      <i class="active icofont-star"></i>
                      <i class="active icofont-star"></i>
                      <i class="active icofont-star"></i>
                      <i class="icofont-star"></i>
                      <a href="product-video.html">(3)</a>
                    </div>
                    <h6 class="product-name">burger</h6>
                    <h6 class="product-price">
                      <del>$150</del>
                      <span>
                        120<small>/piece</small>
                      </span>
                    </h6>
                    <button class="product-add" title="Add to Cart">
                      <i class="fas fa-shopping-basket"></i>
                      <span>add</span>
                    </button>
                    <div class="product-action">
                      <button class="action-minus" title="Quantity Minus">
                        <i class="icofont-minus"></i>
                      </button>
                      <input
                        class="action-input"
                        title="Quantity Number"
                        type="text"
                        name="quantity"
                        value="1"
                      />
                      <button class="action-plus" title="Quantity Plus">
                        <i class="icofont-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="section-btn-25">
                <a href="#" class="btn btn-outline">
                  <i class="fas fa-eye"></i>
                  <span>view all related</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsDetails;
