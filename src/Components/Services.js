import React from 'react';
import Footer from '../Container/footer/Footer';
import hoverImg from '../Container/Images/Rectangle2.png';
import cart1 from '../Container/Images/photo1.png';
import cart2 from '../Container/Images/photo2.png';
import cart3 from '../Container/Images/photo3.png';
import cart4 from '../Container/Images/photo4.png';
import cart5 from '../Container/Images/Ellipse8.png';
import cart6 from '../Container/Images/Ellipse9.png';
import cart7 from '../Container/Images/Ellipse7.png';
import img1 from '../Container/Images/Line1.png';
import img2 from '../Container/Images/Line2.png';
import img3 from '../Container/Images/Line3.png';
import img4 from '../Container/Images/Line4.png';
import img5 from '../Container/Images/Line5.png';
import img7 from '../Container/Images/Line7.png';
import Logo from "../Container/Images/NavbarLogo.png";

import { Link } from 'react-router-dom';
import './Services.css';

export default function Services() {
    return (
        <div>
            <div className='card bg-dark text-white modify'>
                <div className='container w-100 h-100 d-flex justify-content-center'>
                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                        <div>
                            <div className='w-100 h-100'>
                                <h3>Services</h3>
                            </div>
                            {/* <div className='d-flex edit'>
                                <Link className="nav-link active" to="/">Home</Link>
                                <Link className="nav-link active" to="/services">Services</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid et'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <img src={hoverImg} className='hoverimg w-100 topss' alt="Background"/>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 p-4'>
                            <div className='leftdiv mt-2'>
                                <div className='maindiv1'>
                                    <div className='h-maindiv'>
                                        <h4 className='ourBest'><b>Our Best Services</b></h4>
                                    </div>
                                    <div className='h4-maindiv'>
                                        <p className='gi'>Why We Are The Best</p>
                                    </div>
                                    <div className=''>
                                        <p className=' gi'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                                    </div>
                                </div>
                                <div className='imgdiv1 d-flex'>
                                    <div className='imgchild1'>
                                        <div className='editf d-flex'>
                                            <img src={cart1} alt="Icon"/>
                                            <h5 className='gi'>24X7 Support</h5>
                                        </div>
                                        <p className='sit gi'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                    </div>
                                    <div className='imgchild2'>
                                        <div className='editf d-flex'>
                                            <img src={cart2} alt="Icon"/>
                                            <h5 className='gi'>Fast Delivery</h5>
                                        </div>
                                        <p className='sit gi'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                    </div>
                                </div>
                                <div className='imgdiv2 d-flex'>
                                    <div className='imgchild3'>
                                        <div className='editf d-flex'>
                                            <img src={cart3} alt="Icon"/>
                                            <h5 className='gi'>Safe Product</h5>
                                        </div>
                                        <p className='sit gi'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                    </div>
                                    <div className='imgchild4'>
                                        <div className='editf d-flex'>
                                            <img src={cart4} alt="Icon"/>
                                            <h5 className='gi'>Quality Tested</h5>
                                        </div>
                                        <p className='sit gi'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid iy text-light py-5">
            <div className="container mt-5 pb-5">
                <div className="text-center pt-5">
                    <h3 className='ru'><b>Why Positive Ayurveda</b></h3>
                    <h5 className='ru'>Wellness For You</h5>
                </div>
                <div className="row mt-3 mb-3 justify-content-center">
                    <div className="col-lg-4 mt-5 text-end">
                        <div>
                            <div className="twoline lines1 mt-3">
                                <b className='ru'>100 % Organic </b>
                                <img src={img5} className="line ru" alt="" style={{ width: '50%', color: '#C9F9E2' }} />
                            </div>
                            <div className="twoline lines1 mt-3">
                                <b className='ru'>Best Quality </b>
                                <img src={img4} className="line ru" alt="" style={{ width: '50%' }} />
                            </div>
                            <div className="mt-3 mb-3 sametowu">
                                <b className='ru'>hygienic product </b>
                                <img src={img1} className="line ru" alt="" style={{ width: '50%' }} />
                            </div>
                            <div className="twoline1 lines1 mt-3">
                                <b className='ru'>Quality tested </b>
                                <img src={img7} className="line ru" alt="" style={{ width: '50%' }} />
                            </div>
                            <div className="twoline1 lines1 mt-3">
                                <b className='ru'>Health Care </b>
                                <img src={img3} className="line ru" alt="" style={{ width: '50%' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-5 d-flex justify-content-center align-items-center logocenterauto rounded-circle border border-dotted mu">
                        <img className="screenshot" src={Logo} alt="Screenshot" style={{ height: '192px' }} />
                    </div>
                    <div className="col-lg-4 mt-5 text-start">
                        <div>
                            <div className="twoline11 lines1 mt-3">
                                <img src={img3} className="line ru" alt="" style={{ width: '50%' }} /><b className='ru'> 100 % Organic </b>
                            </div>
                            <div className="twoline11 lines1 mt-3">
                                <img src={img2} className="line ru" alt="" style={{ width: '50%' }} /><b className='ru'>Best Quality </b>
                            </div>
                            <div className="mt-3 mb-3 sametowu">
                                <img src={img1} className="line ru" alt="" style={{ width: '50%' }} /><b className='ru'>hygienic product </b>
                            </div>
                            <div className="twoline12 lines1 mt-3">
                                <img src={img4} className="line ru" alt="" style={{ width: '50%' }} /><b className='ru'>Quality tested </b>
                            </div>
                            <div className="twoline12 lines1 mt-3">
                                <img src={img5} className="line ru" alt="" style={{ width: '50%' }} /><b className='ru'>Health Care </b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className= "Service_Special">
        <div className="container-fluid">
                <div className="m-5 p-5 rowws">
                    <div className="row justify-content-center">
                        <div className="text-center mt-5">
                            <h1 style={{ color: '#306D51' }}><b>Pricing Plans</b></h1>
                            <h5 className="pb-3 pt-3">Special Plans</h5>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5 mb-5">
                            <div className="card cards-services move" style={{ backgroundColor: 'transparent' }}>
                                <div className="text-white" style={{ height: '160px' }}>
                                    <img src={cart5} className="card-img" alt="..." style={{ height: 'inherit' }}/>
                                    <div className="card-img-overlay text-center">
                                        <h2 style={{ position: 'relative', top: '37px' }}><b>Standard</b></h2>
                                        <img src={cart6} className="card-img mt-5" alt="..." style={{ width: 'auto' }}/>
                                        <div style={{ position: 'relative', bottom: '85px', color: '#C9F9E2' }}>
                                            <h3><b>$ 50</b></h3>
                                            <h5 style={{ position: 'relative', bottom: '10px', color: '#C9F9E2' }}><b>Month</b></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body text-success text-center mt-5">
                                    <h5 className="mt-3">Product Free</h5>
                                    <h5 className="mt-3">Unlimited Access</h5>
                                    <h5 className="mt-3">Free Product</h5>
                                    <h5 className="mt-3">24X7 Support</h5>
                                    <h5 className="mt-3">Free Product</h5>
                                </div>
                                <img src={cart7} className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-3">
                            <div className="card  cards-services move" style={{ backgroundColor: 'transparent', height: '574px' }}>
                                <div className="text-white" style={{ height: '160px' }}>
                                    <img src={cart5} className="card-img" alt="..." style={{ height: 'inherit' }}/>
                                    <div className="card-img-overlay text-center">
                                        <h2 style={{ position: 'relative', top: '37px' }}><b>Standard</b></h2>
                                        <img src={cart6} className="card-img mt-5" alt="..." style={{ width: 'auto' }}/>
                                        <div style={{ position: 'relative', bottom: '85px', color: '#C9F9E2' }}>
                                            <h3><b>$ 50</b></h3>
                                            <h5 style={{ position: 'relative', bottom: '10px', color: '#C9F9E2' }}><b>Month</b></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body text-success text-center mt-5">
                                    <h5 className="mt-3">Product Free</h5>
                                    <h5 className="mt-3">Unlimited Access</h5>
                                    <h5 className="mt-3">Free Product</h5>
                                    <h5 className="mt-3">24X7 Support</h5>
                                    <h5 className="mt-3">Free Product</h5>
                                </div>
                                <img src={cart7} className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5 mb-5">
                            <div className="card cards-services move" style={{ backgroundColor: 'transparent' }}>
                                <div className="text-white" style={{ height: '160px' }}>
                                    <img src={cart5} className="card-img" alt="..." style={{ height: 'inherit' }}/>
                                    <div className="card-img-overlay text-center">
                                        <h2 style={{ position: 'relative', top: '37px' }}><b>Standard</b></h2>
                                        <img src={cart6} className="card-img mt-5" alt="..." style={{ width: 'auto' }}/>
                                        <div style={{ position: 'relative', bottom: '85px', color: '#C9F9E2' }}>
                                            <h3><b>$ 50</b></h3>
                                            <h5 style={{ position: 'relative', bottom: '10px', color: '#C9F9E2' }}><b>Month</b></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body text-success text-center mt-5">
                                    <h5 className="mt-3">Product Free</h5>
                                    <h5 className="mt-3">Unlimited Access</h5>
                                    <h5 className="mt-3">Free Product</h5>
                                    <h5 className="mt-3">24X7 Support</h5>
                                    <h5 className="mt-3">Free Product</h5>
                                </div>
                                <img src={cart7} className="card-img-top" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

            <Footer />
        </div>
    );
}

