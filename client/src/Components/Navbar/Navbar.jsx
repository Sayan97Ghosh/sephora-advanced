import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import myLogo from "../../assets/beautyHubLogo.png";

import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
// I am not able to raise pull request;
import { BsFillBoxSeamFill,BsSearch,BsHandbag} from "react-icons/bs";
 import {CiUser } from "react-icons/ci";
import { MdLoyalty } from "react-icons/md";
import { ImDownload,ImLocation2} from "react-icons/im";
// import { IoGift } from "react-icons/io";


const Navbar = () => {
  return (
    <div id="Navbar">
      <div id="navbaruppersection">
        <div id="logo">
          <img width="100px" src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png" alt="" />
         <Box id="store-location" display={"flex"}><ImLocation2 size={20} color="rgb(253,77,165)" /> <Divider height="20px" color="black" orientation='vertical'/><Heading fontWeight={"480"} size={"xs"}>Store Location</Heading></Box>
        </div>


        {/* <!-- Check out Newest Arrivals top center text --> */}
        <div id="centertext">
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6338/6338304.png"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
              alt=""
            />
          </span>
          <span> Check Out Newest Arrivals</span>
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6338/6338304.png"
              alt=""
            />
          </span>
        </div>

        {/* <!-- Top Right corner --> */}

        <div id="top-right-corner">
            <Flex gap={3}>
                <ImDownload size={20} color="rgb(253,77,165)"/>
          <Text>Get APP</Text>
          <span>|</span>
          </Flex>
            <Flex gap={3}>
                <BsFillBoxSeamFill size={20} color="rgb(253,77,165)"/>
          <Text>Track Order</Text>
          <span>|</span>
          </Flex>
            <Flex gap={3}>
                <ImDownload size={20} color="rgb(253,77,165)"/>
          <Text>Get APP</Text>
          </Flex>
          
        
        </div>
      </div>

      {/* <!-- Section 2 upperHeading --> */}

      {/* <!-- Search Bar  --> */}
      <Box id="headingsephora">
        <div>
          <Box mt="5px">
          <BsSearch color="rgb(253,77,165)" />
          </Box>
        
          <input
            type="text"
            name=""
            placeholder="Search.."
            id="searchbar"
          />
        </div>

        {/* <!-- Sephora Image Navbar --> */}
        <div>
          <Link to="/">
            {" "}
            <img id="sephora" src="" alt="Enter Logo here " />
          </Link>
        </div>

        {/* <!-- Favourite Bag and  class="icondivider"--> */}
        <Box className="navbar_icons">
         
          <Box >
              <Link to="/cart">
              <BsHandbag size={20} color="rgb(253,77,165)"/>
              </Link>
          
          </Box>
          <Divider height="20px" orientation='vertical'/>

          <Box >
          
              <Link to="/signup"> <CiUser size={20} color="rgb(253,77,165)"/></Link>
          </Box>
        </Box>
      </Box>

      {/* <!-- Catgories-- above main product image --> */}
      <div id="categories">
      

        <Heading mt={3} size={"sm"} >SALE</Heading>
     

        <div class="drop-down">
          <Heading size={"sm"}>MAKEUP</Heading>
          <div class="dropdown-content">
            <div class="dropdownflex">
              <div>
                <h3>FACE</h3>
                <div>
                  <Link to="/foundation">Foundation</Link>
                </div>
                <div>BB & CC Cream</div>
                <div>Concealer</div>
                <div>Face Primer</div>
                <div>Highlighter</div>
                <div>Face Brushes</div>
                <div>Makeup Palette</div>
              </div>

              <div>
                <h3>EYE</h3>
                <div>Eye Palettes</div>
                <div>Mascara</div>
                <div>Eyeliners</div>
                <div>Eyebrow</div>
                <div>Eyeshadow</div>
                <div>Eye Primer</div>
                <div>Eye Brushes</div>
                <div>Contact Lenses</div>
              </div>

              {/* <div>
                <h3>LIP</h3>
                <div>lipstick</div>
                <div>Lip Stain</div>
                <div>Lip Gloss</div>
                <div>Lip Liner</div>
                <div>Lip Balm</div>
                <div></div>
              </div> */}

              {/* <div>
                <h3>CHEEK</h3>
                <div>Blush</div>
                <div>Bronzer</div>
                <div>Highlighter</div>
                <div>Face Oils</div>
              </div> */}

              {/* <!--  --> */}
            </div>
          </div>
        </div>

        <div class="drop-down">
          <Heading size={"sm"}>SKIN CARE</Heading>
          <div class="dropdown-content">
            <div class="dropdownflex">
              <div>
                <h3>MOISTURIZERS</h3>
                <div>
                  <Link to="/moisturizer">Moisturizers</Link>
                </div>
                <div>Night Creams</div>
                <div>Mists & Essence</div>
                <div>BB & CC Creams</div>
              </div>

              <div>
                <h3>CLEANSERS</h3>
                <div>Face Wash & Cleansers</div>
                <div>Makeup Removers</div>
                <div>Face Wipes</div>
                <div>Toners</div>
                <div>Hand Sanitizers</div>
              </div>
{/* 
              <div>
                <h3>MASKS</h3>
                <div>Face Mask</div>
                <div>Sheet Masks</div>
                <div>Eye Masks</div>
                <div>Nose Masks & Strips</div>
                <div>Lip Masks</div>
                <div>Lip Masks</div>
                <div>Hair Masks</div>
                <div>Hand Masks</div>
                <div>Foot Masks</div>
              </div> */}
            </div>
          </div>
        </div>
        <div class="drop-down">
          <Heading size={"sm"}>FRAGRANCE</Heading>
          <div class="dropdown-content">
            <div class="dropdownflex">
              <div>
                <h3>WOMEN</h3>
                <div>Perfume</div>
                <div>Mists and Deodrants</div>
              </div>

              <div>
                <h3>MAN</h3>
                <div>Perfume</div>
                <div>Body Spray & Deodrants</div>
              </div>
            </div>
          </div>
        </div>

        <div class="drop-down">
          <Heading size={"sm"}>HAIR CARE</Heading>
          <div class="dropdown-content">
            <div class="dropdownflex">
              <div>
                <h3>SHAMPOO & CONDITIONER</h3>
                <div>
                  <a id="productpage" href="product_page.html">
                    Shampoo
                  </a>
                </div>
                <div>Conditioner</div>
              </div>

              <div>
                <h3>HAIR STYLING & TREATMENTS</h3>
                <div>Hair Spray & Styling Products</div>
                <div>Hair Oil</div>
                <div>Hair Masks</div>
                <div>Hair Clips</div>
              </div>
            </div>
          </div>
        </div>
        <div class="drop-down">
          <Heading size={"sm"}>TOOLS & BRUSHES</Heading>
          <div class="dropdown-content"></div>
        </div>
        <div class="drop-down">
          <Heading size={"sm"}>BRANDS</Heading>
          <div class="dropdown-content">
            <div class="dropdownflex"></div>
          </div>
        </div>
      </div>

      {/* <!-- HR line below categories --> */}
      <div id="hrdiv"></div>
    </div>
  );
};

export default Navbar;

