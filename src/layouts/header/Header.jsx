import React, { useEffect, useState } from 'react'
import Logo from '/favicon.ico';
import Headroom from 'react-headroom';
import { GET_ALL } from '../../service/apiService';
import { Link } from 'react-router-dom';
import Search from '../search/Search';
import { SearchProvider } from '../../context/SearchContext';
import Action from '../Action/Action';
import { CartProvider } from '../../context/CartProvider';
const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    GET_ALL(`categories`).then((item) => setCategories(item.data));
  }, []);
  return (
    <>
      <>
        <div className="overlay" data-overlay="" />
        {/*    - MODAL  */}
        {/* <div className="modal" data-modal="">
    <div className="modal-close-overlay" data-modal-overlay="" />
    <div className="modal-content">
      <button className="modal-close-btn" data-modal-close="">
        <ion-icon name="close-outline" />
      </button>
      <div className="newsletter-img">
        <img
          src="./assets/images/newsletter.png"
          alt="subscribe newsletter"
          width={400}
          height={400}
        />
      </div>
      <div className="newsletter">
        <form action="#">
          <div className="newsletter-header">
            <h3 className="newsletter-title">Subscribe Newsletter.</h3>
            <p className="newsletter-desc">
              Subscribe the <b>Anon</b> to get latest products and discount
              update.
            </p>
          </div>
          <input
            type="email"
            name="email"
            className="email-field"
            placeholder="Email Address"
            required=""
          />
          <button type="submit" className="btn-newsletter">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div> */}
        {/*    - NOTIFICATION TOAST  */}
        {/* <div className="notification-toast" data-toast="">
    <button className="toast-close-btn" data-toast-close="">
      <ion-icon name="close-outline" />
    </button>
    <div className="toast-banner">
      <img
        src="./assets/images/products/jewellery-1.jpg"
        alt="Rose Gold Earrings"
        width={80}
        height={70}
      />
    </div>
    <div className="toast-detail">
      <p className="toast-message">Someone in new just bought</p>
      <p className="toast-title">Rose Gold Earrings</p>
      <p className="toast-meta">
        <time dateTime="PT2M">2 Minutes</time> ago
      </p>
    </div>
  </div> */}
        {/*    - HEADER  */}
        <header>
          <div className="header-top">
            <div className="container">
              <ul className="header-social-container">
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin" />
                  </a>
                </li>
              </ul>
              <div className="header-alert-news">
                <p>
                  <b>Free Shipping</b>
                  This Week Order Over - $55
                </p>
              </div>
              <div className="header-top-actions">
                <select name="currency">
                  <option value="usd">USD $</option>
                  <option value="eur">EUR €</option>
                </select>
                <select name="language">
                  <option value="en-US">English</option>
                  <option value="es-ES">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </div>
          <Headroom style={{ zIndex: "3", backgroundColor: "white", top: "-5px" }}>
            <div className="header-main">
              <div className="container">
                <a href="/" className="header-logo">
                  <img
                    src={Logo}
                    alt="Anon's logo"
                    style={{ maxWidth: "120px", maxHeight: "90px" }}
                  />
                </a>
                <SearchProvider>
                  <Search />
                </SearchProvider>
                <CartProvider>
                  <Action />
                </CartProvider>
              </div>
            </div>
          </Headroom>


          <nav className="desktop-navigation-menu">

            <div className="container">

              <ul className="desktop-menu-category-list">

                <li className="menu-category">
                  <Link to="/" className="menu-title">Home</Link>
                </li>

                <li className="menu-category">
                  <Link to="/listing" className="menu-title">Categories</Link>

                  <div className="dropdown-panel">

                    <ul className="dropdown-panel-list">

                      <li className="menu-title">
                        <a href="#">Genshin Impact</a>
                      </li>

                      {categories.length >
                        0 &&
                        categories.map((row) => (
                          <li className="panel-list-item" key={row.id}>
                            <a
                              href={`/listing?categoryId=${row.id}`}
                            >
                              {row.name}
                            </a>
                          </li>
                        ))}
                    </ul>

                    <ul className="dropdown-panel-list">

                      <li className="menu-title">
                        <a href="#">Honkai Impact</a>
                      </li>

                      {categories.length >
                        0 &&
                        categories.map((row) => (
                          <li className="panel-list-item" key={row.id}>
                            <a
                              href={`/listing?categoryId=${row.id}`}
                            >
                              {row.name}
                            </a>
                          </li>
                        ))}
                    </ul>

                    <ul className="dropdown-panel-list">

                      <li className="menu-title">
                        <a href="#">Honkai Start:Rail</a>
                      </li>

                      {categories.length >
                        0 &&
                        categories.map((row) => (
                          <li className="panel-list-item" key={row.id}>
                            <a
                              href={`/listing?categoryId=${row.id}`}
                            >
                              {row.name}
                            </a>
                          </li>
                        ))}
                    </ul>

                    <ul className="dropdown-panel-list">

                      <li className="menu-title">
                        <a href="#">Electronics</a>
                      </li>

                      <li className="panel-list-item">
                        <a href="#">Smart Watch</a>
                      </li>

                      <li className="panel-list-item">
                        <a href="#">Smart TV</a>
                      </li>

                      <li className="panel-list-item">
                        <a href="#">Keyboard</a>
                      </li>

                      <li className="panel-list-item">
                        <a href="#">Mouse</a>
                      </li>

                      <li className="panel-list-item">
                        <a href="#">Microphone</a>
                      </li>
                    </ul>

                  </div>
                </li>

                <li className="menu-category">
                  <a href="#" className="menu-title">Genshin Impact</a>

                  <ul className="dropdown-list">

                    {categories.length >
                      0 &&
                      categories.map((row) => (
                        <li className="dropdown-item" key={row.id}>
                          <a
                            href={`/listing?categoryId=${row.id}`}
                          >
                            {row.name}
                          </a>
                        </li>
                      ))}

                  </ul>
                </li>

                <li className="menu-category">
                  <a href="#" className="menu-title">Honkai Impact</a>

                  <ul className="dropdown-list">

                    {categories.length >
                      0 &&
                      categories.map((row) => (
                        <li className="dropdown-item" key={row.id}>
                          <a
                            href={`/listing?categoryId=${row.id}`}
                          >
                            {row.name}
                          </a>
                        </li>
                      ))}

                  </ul>
                </li>

                <li className="menu-category">
                  <a href="#" className="menu-title">Honkai Star:Rail</a>

                  <ul className="dropdown-list">

                    {categories.length >
                      0 &&
                      categories.map((row) => (
                        <li className="dropdown-item" key={row.id}>
                          <a
                            href={`/listing?categoryId=${row.id}`}
                          >
                            {row.name}
                          </a>
                        </li>
                      ))}

                  </ul>
                </li>

                <li className="menu-category">
                  <a href="#" className="menu-title">Blog</a>
                </li>

                <li className="menu-category">
                  <a href="#" className="menu-title">Hot Offers</a>
                </li>

              </ul>

            </div>

          </nav>

          <div className="mobile-bottom-navigation">
            <button className="action-btn" data-mobile-menu-open-btn="">
              <ion-icon name="menu-outline" />
            </button>
            <button className="action-btn">
              <ion-icon name="bag-handle-outline" />
              <span className="count">0</span>
            </button>
            <button className="action-btn">
              <ion-icon name="home-outline" />
            </button>
            <button className="action-btn">
              <ion-icon name="heart-outline" />
              <span className="count">0</span>
            </button>
            <button className="action-btn" data-mobile-menu-open-btn="">
              <ion-icon name="grid-outline" />
            </button>
          </div>
          <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu="">
            <div className="menu-top">
              <h2 className="menu-title">Menu</h2>
              <button className="menu-close-btn" data-mobile-menu-close-btn="">
                <ion-icon name="close-outline" />
              </button>
            </div>
            <ul className="mobile-menu-category-list">
              <li className="menu-category">
                <a href="#" className="menu-title">
                  Home
                </a>
              </li>
              <li className="menu-category">
                <button className="accordion-menu" data-accordion-btn="">
                  <p className="menu-title">Men's</p>
                  <div>
                    <ion-icon name="add-outline" className="add-icon" />
                    <ion-icon name="remove-outline" className="remove-icon" />
                  </div>
                </button>
                <ul className="submenu-category-list" data-accordion="">
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Shirt
                    </a>
                  </li>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Shorts &amp; Jeans
                    </a>
                  </li>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Safety Shoes
                    </a>
                  </li>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Wallet
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <button className="accordion-menu" data-accordion-btn="">
                  <p className="menu-title">Women's</p>
                  <div>
                    <ion-icon name="add-outline" className="add-icon" />
                    <ion-icon name="remove-outline" className="remove-icon" />
                  </div>
                </button>
                <ul className="submenu-category-list" data-accordion="">
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Dress &amp; Frock
                    </a>
                  </li>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Earrings
                    </a>
                  </li>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Necklace
                    </a>
                  </li>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Makeup Kit
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <button className="accordion-menu" data-accordion-btn="">
                  <p className="menu-title">Jewelry</p>
                  <div>
                    <ion-icon name="add-outline" className="add-icon" />
                    <ion-icon name="remove-outline" className="remove-icon" />
                  </div>
                </button>
                <ul className="submenu-category-list" data-accordion="">
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Earrings
                    </a>
                  </li>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Couple Rings
                    </a>
                  </li>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Necklace
                    </a>
                  </li>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Bracelets
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <button className="accordion-menu" data-accordion-btn="">
                  <p className="menu-title">Perfume</p>
                  <div>
                    <ion-icon name="add-outline" className="add-icon" />
                    <ion-icon name="remove-outline" className="remove-icon" />
                  </div>
                </button>
                <ul className="submenu-category-list" data-accordion="">
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Clothes Perfume
                    </a>
                  </li>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Deodorant
                    </a>
                  </li>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Flower Fragrance
                    </a>
                  </li>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Air Freshener
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <a href="#" className="menu-title">
                  Blog
                </a>
              </li>
              <li className="menu-category">
                <a href="#" className="menu-title">
                  Hot Offers
                </a>
              </li>
            </ul>
            <div className="menu-bottom">
              <ul className="menu-category-list">
                <li className="menu-category">
                  <button className="accordion-menu" data-accordion-btn="">
                    <p className="menu-title">Language</p>
                    <ion-icon name="caret-back-outline" className="caret-back" />
                  </button>
                  <ul className="submenu-category-list" data-accordion="">
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        English
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        Español
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        Frençh
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-category">
                  <button className="accordion-menu" data-accordion-btn="">
                    <p className="menu-title">Currency</p>
                    <ion-icon name="caret-back-outline" className="caret-back" />
                  </button>
                  <ul className="submenu-category-list" data-accordion="">
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        USD $
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        EUR €
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="menu-social-container">
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </>
    </>
  )
}

export default Header
