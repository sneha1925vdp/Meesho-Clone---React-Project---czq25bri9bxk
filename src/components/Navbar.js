import React from 'react'
import logo from './images/meeshologo.png'
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
// import {Avatar} from '@material-ui/core';
// import {Avatar} from '@material-ui/core';
// import { LoginContext } from './App';

export default function Navbar() {
    //https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products
    const [product, setProduct] = useState([]);
     const [search, setSearch] = useState("");
    //  const {userlogin, setUserlogin} = useContext(LoginContext)
    //   console.log(userlogin);
     
    useEffect(() => {
        api();
    }, [])
    const api = async () => {
        const response = await fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products")
        const jsonData = await response.json();
        setProduct(jsonData);
    }
    // api();
    return (
        <>
            <div className='header'>
                <div className='meesho-logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='search'>
                    <input type="text" placeholder='try sarri kurti,or search by product code' className='inputsearch' onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className='downloadContainer'>
                    
                    <h3>Download App</h3>
                </div>
                <div className='becomeSupplierContaine'>
                    <h3>Become a supplier</h3>
                </div >
                <div className='login'>
                </div>
                <div >
                    {/* <Avatar/> */}
                    <Link to="/login"><h3 className='profileAndCart' >Profile</h3></Link>
                </div>
                <NavLink to="/cart" className="cart">
                    <div className='profileAndCart'>

                    <h3>Cart</h3>
                    </div>
                    {/* <BsCart2 className="cart-trolly" /> */}
                </NavLink>
            </div>
            <nav>
                <ul>
                    <li>Women Ethnic
                        <div className="subMenu">
                            <div className="submenuList">
                                <a className="heading" href="">
                                    All Women Ethnic
                                </a>
                                <a href="">View All</a>
                            </div>
                            <div className='Saree even'>
                                <a href="" className='heading'>
                                    Saree
                                </a>
                                <a href="">All Sarees</a>
                                <a href="">Silk Sarees</a>
                                <a href=""> Cotton Silk Sarees</a>
                                <a href="">Cotton Sarees</a>
                                <a href="">  Georgette Sarees</a>
                                <a href="">Chiffon Sarees</a>
                                <a href=""> Satin Sarees</a>
                                <a href=""> Embroidered Sarees</a>
                            </div>
                            <div className='Kurtis'>
                                <a href="" className='heading'>
                                    All Kurtis
                                </a>
                                <a href="">Anarkali Kurtis</a>
                                <a href="">Rayon Kurtis</a>
                                <a href="">Cotton Kurtis</a>
                                <a href="">Embroidered Kurtis</a>
                            </div>
                            <div className='kurtasets'>
                                <a href="" className='heading'>
                                    kurta Sets
                                </a>
                            </div>
                            <div className='SuitsDressMaterial'>
                                <a href="" className='heading'> Suits & Dress Material
                                </a>
                                <a href="">All Suits & Dress Material</a>
                                <a href=""> Cotton Suits</a>
                                <a href=""> Embrroidered Suits</a>
                                <a href=""> Chanderi Suits</a>
                            </div>
                            <div className='other'>
                                <a href="" className='heading'> Other Ethnic</a>
                                <a href="">Blouses</a>
                                <a href=""> Dupattas</a>
                                <a href=""> Lehanga</a>
                                <a href=""> Gown </a>
                                <a href=""> Ethnic Bootomwear</a>
                            </div>
                        </div>
                    </li>

                    <li>Women Western
                        <div className="subMenu">
                            <div className="topwear">
                                <a className='heading' href="">Topwear</a>
                                <a href="">Tops</a>
                                <a href="">Dress</a>
                                <a href=""> Sweaters</a>
                                <a href=""> Jumpsuits</a>
                            </div>
                            <div className='Bottomwear'>
                                <a href="" className='heading'> Bottomwear</a>
                                <a href="Jeans"></a>
                                <a href=""> jeggings</a>
                                <a href="">palazzos</a>
                                <a href="">Shorts</a>
                                <a href="">Skirts</a>
                            </div>
                            <div className='Innerwear'>
                                <a href="" className='heading'>Innerwear</a>
                                <a href="">Bra</a>
                                <a href="">Briefs</a>
                            </div>
                        </div>
                    </li>
                    <li>Men
                        <div className="subMenu">
                            <div className="BottomWear">
                                <a href="" className='heading'> Bottom Wear</a>
                                <a href="">Track Pants</a>
                                <a href="">Jeans</a>
                                <a href="">Trousers</a>
                            </div>
                            <div className='ManAccessories'>
                                <a href="" className='heading'> Men Accessories</a>
                                <a href="">Watch</a>
                                <a href="">Belts</a>
                                <a href="">Wallet</a>
                                <a href="">Jewellery</a>
                                <a href="">Sunglasses</a>
                                <a href="">Bags</a>
                            </div>
                            <div className='MenFootwear'>
                                <a href="" className='heading'>Men Footwear</a>
                                <a href="">Casual Shoes</a>
                                <a href="">Sports Shoes</a>
                                <a href="">Sandals</a>
                                <a href="">Formal Shoes</a>
                            </div>
                        </div>
                    </li>
                    <li>Kids
                        <div className="subMenu">
                            <div id="kids" className="submenuList">

                            </div>
                        </div>
                    </li>
                    <li>Home & Kitchen
                        <div className="subMenu">
                            <div className="HomeAndKitchen" >
                                <a href="" className='heading'>Home And Kitchen</a>
                                <a href="">All Home Decor</a>
                                <a href="">Stickers</a>
                                <a href="">Clocks</a>
                                <a href="">Showpieces</a>
                            </div>
                            <div className='Kitchen&Dining'>
                                <a href="" className='heading'>Kitchen & Dining</a>
                                <a href="">Kitchen Storage</a>
                                <a href="">Cookware & Bakeware</a>
                            </div>
                        </div>
                    </li>
                    <li>Beauty & Health
                        <div className="subMenu">
                            <div className="beautyAndHealth" >
                                <a href="" className='heading'>beauty And Health</a>
                                <a href="">Make up</a>
                                <a href="">Face</a>
                                <a href="">Eyes</a>
                                <a href="">Lips</a>
                                <a href="">Nails</a>
                            </div>
                            <div className='skincare'>
                                <a href="" className='heading'> Skincare</a>
                                <a href="">DeoDorants</a>

                            </div>
                        </div>
                    </li>
                    <li>Jewellery & Accessories
                        <div className="subMenu">
                            <div id="JewelleryAndAccessories" className="submenuList">

                            </div>
                        </div>
                    </li>
                    <li>Bags & Footwear
                        <div className="subMenu">
                            <div id="BagsFootWarId" className="submenuList">

                            </div>
                        </div>
                    </li>
                    <li>Electronics
                        <div className="subMenu">
                            <div id="ElectronicsId" className="submenuList">

                            </div>
                        </div>
                    </li>
                </ul>


            </nav>
            <div class="lowestpriceContainer">
                <div class="lowestPrice_text">
                    <h1>Lowest Prices </h1>
                    <h1>Best Quality Shopping</h1>
                    <div class="lowestPriceWhay">
                        <div class="lowestPriceItem">
                            <div class="lowestPrice_icon">
                            </div>
                            <p>Free Delivery</p>
                        </div>

                        <div class="lowestPriceItem">
                            <div class="lowestPrice_icon">
                            </div>
                            <p>Cash on Delivery</p>
                        </div>
                        <div class="lowestPriceItem">
                            <div class="lowestPrice_icon">
                            </div>
                            <p>Easy Returns</p>
                        </div>
                    </div>

                    <button className="btn">Download the Meesho App</button>

                </div>
                <div className="lowestPrice_image">
                    <img className='img1' src="https://images.meesho.com/images/marketing/1631722939962.webp" />
                </div>
            </div>
            {/* <--Top Categories to choose from--> */}
            <div className="topCategoriesFrom">
                <div className="topCategoriesHeading">
                    <span className="horizontalLine"></span>
                    <h1>Top Categories to choose from</h1>
                    <span className="horizontalLine"></span>
                </div>
                <div className="topCategoreisImage">
                    <img src="https://images.meesho.com/images/marketing/1649760442043.webp" className='Img11' />
                    <img src="https://images.meesho.com/images/marketing/1649760423313.webp" className='Img12' />
                    <img src="https://images.meesho.com/images/marketing/1649759799809.webp" className='Img13' />
                </div>

                <div className="essentialContaienr">
                    <img src="https://images.meesho.com/images/marketing/1664368165450.webp" class="essen-btn" />

                    <div className="essential_item">
                        <img src="https://images.meesho.com/images/marketing/1649760808952.webp" className='Img14' />
                        <img src="https://images.meesho.com/images/marketing/1664364866805.webp" />
                    </div>

                    <div className="essential_item">
                        <img src="https://images.meesho.com/images/marketing/1649760703179.webp" className='Img15' />
                        <img src="https://images.meesho.com/images/marketing/1664364917657.webp" />
                    </div>

                    <div className="essential_item">
                        <img src="https://images.meesho.com/images/marketing/1649760786763.webp" className='Img16' />
                        <img src="https://images.meesho.com/images/marketing/1664364898513.webp" />
                    </div>

                </div>
            </div>
            <div className='container'>
                {product.filter((values) => {
                    if (search === "") {
                        console.log(values);
                        return values;
                    }
                    else if (values.title.toLowerCase().includes(search.toLowerCase())) {
                        console.log(values);
                        return values;
                    }
                })
                    .map((values) => {
                        return (
                            <Link to={`/product/${values.id}`}>
                                <div className='box'>
                                    <div className='content'>
                                        <img src={values.image} alt="" />
                                        <div className='site'>
                                            <span className='CT'>{values.title}</span>
                                            <span className='RT'>$ {values.price}</span>
                                        </div>
                                        {/* <p>{values.description}</p> */}
                                        <div className='btn19'>
                                            <span>Free Delivery</span>
                                            <button className='btn1'>{values.rating.rate}</button>
                                        </div>
                                        {/* <span>{values.category}</span> */}

                                    </div>
                                </div>
                            </Link>
                        )
                    })}
            </div>
          
        </>
    )
}
