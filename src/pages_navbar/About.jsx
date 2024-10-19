import React from 'react'
import { Link } from 'react-router-dom'



function About() {
  return (
    <div>
        
        <header id="home">
		{/* {/* top-bar */} 
		<div className="top-bar py-2 border-bottom">
			<div className="container">
				<div className="row middle-flex">
					<div className="col-xl-7 col-md-5 top-social-agile mb-md-0 mb-1 text-lg-left text-center">
						<div className="row">
							<div className="col-xl-3 col-6 header-top_w3layouts">
								<p className="text-da">
									<span className="fa fa-map-marker mr-2"></span>Casablaca, MA 
								</p>
							</div>
							<div className="col-xl-3 col-6 header-top_w3layouts">
								<p className="text-da">
									<span className="fa fa-phone mr-2"></span>+212 643524554
								</p>
							</div>
							<div className="col-xl-6"></div>
						</div>
					</div>
					<div className="col-xl-5 col-md-7 top-social-agile text-md-right text-center pr-sm-0 mt-md-0 mt-2">
						<div className="row middle-flex">
							<div className="col-lg-5 col-4 top-w3layouts p-md-0 text-right">
								{/* login */}
								<a href="login" className="btn login-button-2 text-uppercase text-wh">
									<span className="fa fa-sign-in mr-2"></span>Login</a>
								{/* //login */}
							</div>
							<div className="col-lg-7 col-8 social-grid-w3">
								{/* social icons */}
								<ul className="top-right-info">
									<li>
										<p>Follow Us:</p>
									</li>
									<li className="facebook-w3">
										<a href="#facebook">
											<span className="fa fa-facebook-f"></span>
										</a>
									</li>
									<li className="twitter-w3">
										<a href="#twitter">
											<span className="fa fa-twitter"></span>
										</a>
									</li>
									<li className="google-w3">
										<a href="#google">
											<span className="fa fa-google-plus"></span>
										</a>
									</li>
									<li className="dribble-w3">
										<a href="#dribble">
											<span className="fa fa-dribbble"></span>
										</a>
									</li>
								</ul>
								{/* //social icons */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	{/* //top-bar */} 

	{/* header 2 */}
	{/* navigation */}
	<div className="main-top py-1">
		<div className="container">
			<div className="nav-content">
				{/* logo */}
				<h1>
					<a id="logo" className="logo" href="">
						<img src="assets/images/logo.png" alt="logo" className="img-fluid"/><span>Tasty</span> Burger
					</a>
				</h1>
				{/* //logo */}
				{/* nav */}
				<div className="nav_web-dealingsls">
					<nav>
						<label for="drop" className="toggle">Menu</label>
						<input type="checkbox" id="drop" />
						<ul className="menu">
							<li><a href="/">Home</a></li>
							<li><a href="about">About Us</a></li>
							<li>
								{/* First Tier Drop Down */}
								<label for="drop-3" className="toggle toogle-2">Pages <span className="fa fa-angle-down"
										aria-hidden="true"></span>
								</label>
								<a href="#pages">Pages <span className="fa fa-angle-down" aria-hidden="true"></span></a>
								<input type="checkbox" id="drop-3" />
								<ul>
									<li><a className="drop-text" href="services">Services</a></li>
									<li><a className="drop-text" href="about">Our Chefs</a></li>
									<li><a className="drop-text" href="gallery">gallery</a></li>
									<li><a className="drop-text" href="single.html">Single Page</a></li>
									<li><a className="drop-text" href="login">Login</a></li>
									<li><a className="drop-text" href="register">Register</a></li>
								</ul>
							</li>
							<li><a href="menu">Menu</a></li>
							<li><a href="contact">Contact Us</a></li>
							<li>
								{/* login */}
			
								{/* //login */}
							</li>
						</ul>
					</nav>
				</div>
				{/* //nav */}
			</div>
		</div>
	</div>
	{/* //navigation */}
	{/* //header 2 */}

	{/* banner */} 
	<div class="main-banner-2">

	</div>
	{/* //banner */} 
	{/* page details */} 
	<div class="breadcrumb-agile bg-light py-2">
		<ol class="breadcrumb bg-light m-0">
			<li class="breadcrumb-item">
				<a href="/">Home</a>
			</li>
			<li class="breadcrumb-item active" aria-current="page">About Us</li>
		</ol>
	</div>
	{/* //page details */} 

	{/* about */} 
	<section class="w3ls-bnrbtm py-5" id="about">
		<div class="container py-xl-5 py-lg-3">
			<div class="title-section text-center mb-md-5 mb-4">
				<h3 class="w3ls-title mb-3">About <span>Us</span></h3>
				<p class="titile-para-text mx-auto">Inventore veritatis et quasi architecto beatae vitae dicta sunt
					explicabo.Nemo
					enim totam rem aperiam.</p>
			</div>
			<div class="row">
				<div class="col-lg-6 pr-xl-5 mt-xl-2 mt-lg-0">
					<h3 class="title-sub mb-4">Donec conse sapien archi ut cursus rhons.</h3>
					<p class="sub-para">Nullam dui mi, vulputate ac metus
						at, semper
						varius orci. Nulla accumsan ac elit in congue. Class aptent taciti sociosqu ad litora torquent
						per conubia.</p>
					<p class="sub-para pt-4 mt-4 border-top">Donec consequat sapien ut leo cursus rhoncus. Nullam dui
						mi, vulputate ac metus at, semper varius orci..</p>
				</div>
				<div class="col-lg-6 text-center mt-lg-0 mt-4">
					<img src="assets/images/ab.jpg" alt="about" class="img-fluid" />
				</div>
			</div>
		</div>
	</section>
	{/* //about */} 

	{/* services */}
	<section className="middle py-5" id="services">
		<div className="container py-xl-5 py-lg-3">
			<div className="title-section text-center mb-md-5 mb-4">
				<p className="w3ls-title-sub">Our Work</p>
				<h3 className="w3ls-title mb-3">Excellent <span>Services</span></h3>
			</div>
			<div className="row grids-w3 py-xl-5 py-lg-4 pt-lg-0 pt-4">
				<div className="col-lg-5 w3pvt-lauits_banner_bottom_left">
					<div className="row">
						<div className="col-8 wthree_banner_bottom_grid_right text-right">
							<h4 className="mb-3"><a href="login">Free Shipping</a></h4>
							<p>Morbi viverra lacus commodo felis semper lectus feugiat.</p>
						</div>
						<div className="col-4 wthree_banner_bottom_grid_left text-lg-right text-center">
							<img src="assets/images/s1.png" alt="" className="img-fluid"/>
						</div>
					</div>
				</div>
				<div className="col-lg-2 w3pvt-lauits_banner_bottom_left">

				</div>
				<div className="col-lg-5 w3pvt-lauits_banner_bottom_left mt-lg-0 mt-4">
					<div className="row">
						<div className="col-4 wthree_banner_bottom_grid_left text-lg-right text-center">
							<img src="assets/images/s2.png" alt="" className="img-fluid"/>
						</div>
						<div className="col-8 wthree_banner_bottom_grid_right">
							<h4 className="mb-3"><a href="login">Free & Easy Returns</a></h4>
							<p>Morbi viverra lacus commodo felis semper lectus feugiat.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row grids-w3 py-xl-5 py-lg-4 mt-lg-0 mt-4">
				<div className="col-lg-4 w3pvt-lauits_banner_bottom_left">
					<div className="row">
						<div className="col-8 wthree_banner_bottom_grid_right text-right pl-lg-0">
							<h4 className="mb-3"><a href="login">Online Order</a></h4>
							<p>Morbi viverra lacus commodo felis semper lectus feugiat.</p>
						</div>
						<div className="col-4 wthree_banner_bottom_grid_left text-lg-right text-center pr-lg-0">
							<img src="assets/images/s3.png" alt="" className="img-fluid"/>
						</div>
					</div>
				</div>
				<div className="col-lg-4 w3pvt-lauits_banner_bottom_left pr-0">

				</div>
				<div className="col-lg-4 w3pvt-lauits_banner_bottom_left mt-lg-0 mt-4">
					<div className="row">
						<div className="col-4 wthree_banner_bottom_grid_left text-lg-right text-center pl-lg-0">
							<img src="assets/images/s4.png" alt="" className="img-fluid"/>
						</div>
						<div className="col-8 wthree_banner_bottom_grid_right pr-lg-0">
							<h4 className="mb-3"><a href="login">24/7 Support</a></h4>
							<p>Morbi viverra lacus commodo felis semper lectus feugiat.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	
	</section>
	{/* //services */}

	{/* team */} 
	<div class="team py-5" id="chefs">
		<div class="container-fluid py-xl-5 py-lg-3">
			<div class="title-section text-center mb-md-5 mb-4">
				<h3 class="w3ls-title mb-3">Our <span>Chefs</span></h3>
				<p class="titile-para-text mx-auto">Inventore veritatis et quasi architecto beatae vitae dicta sunt
					explicabo.Nemo
					enim totam rem aperiam.</p>
			</div>
			<div class="row team-bottom pt-4">
				<div class="col-lg-3 col-6 team-grid">
					<a href="#team"><img src="assets/images/t1.png" class="img-fluid" alt=""/></a>
					<div class="caption">
						<div class="team-text">
							<h4><a href="#team">Mack Joe</a></h4>
						</div>
						<ul>
							<li>
								<a href="#">
									<i class="fa fa-facebook f1" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa fa-twitter f2" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa fa-google-plus f3" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3 col-6 team-grid">
					<a href="#team"><img src="assets/images/t2.png" class="img-fluid" alt=""/></a>
					<div class="caption">
						<div class="team-text">
							<h4><a href="#team">Cruz Deo</a></h4>
						</div>
						<ul>
							<li>
								<a href="#">
									<i class="fa fa-facebook f1" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa fa-twitter f2" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa fa-google-plus f3" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3 col-6 team-grid mt-lg-0 mt-4">
					<a href="#team"><img src="assets/images/t3.png" class="img-fluid" alt=""/></a>
					<div class="caption">
						<div class="team-text">
							<h4><a href="#team">Rochy Jae</a></h4>
						</div>
						<ul>
							<li>
								<a href="#">
									<i class="fa fa-facebook f1" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa fa-twitter f2" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa fa-google-plus f3" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3 col-6 team-grid  mt-lg-0 mt-4">
					<a href="#team"><img src="assets/images/t4.png" class="img-fluid" alt=""/></a>
					<div class="caption">
						<div class="team-text">
							<h4><a href="#team">Rojo Poy</a></h4>
						</div>
						<ul>
							<li>
								<a href="#">
									<i class="fa fa-facebook f1" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa fa-twitter f2" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa fa-google-plus f3" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* //team */} 

	{/* footer */}
	<footer className="py-5">
		<div className="container py-xl-4">
			<div className="row footer-top">
				<div className="col-lg-4 footer-grid_section_1its footer-text">
					{/* logo */}
					<h2>
						<a className="logo text-wh" href="index.html">
							<img src="assets/images/logo.png" alt="" className="img-fluid"/><span>Tasty</span> Burger
						</a>
					</h2>
					{/* //logo */}
					<p className="mt-lg-4 mt-3 mb-lg-5 mb-4">Sed ut perspiciatis unde omnis iste natus errorhjhsit lupt
						atem
						accursit lupt atem accu
						dfdsa
						ntium doloremque laudan tium accu santium dolore.</p>
					{/* social icons */}
					<ul className="top-right-info">
						<li>
							<p>Follow As:</p>
						</li>
						<li className="facebook-w3">
							<a href="#facebbok">
								<span className="fa fa-facebook-f"></span>
							</a>
						</li>
						<li className="twitter-w3">
							<a href="#twitter">
								<span className="fa fa-twitter"></span>
							</a>
						</li>
						<li className="google-w3">
							<a href="#google">
								<span className="fa fa-google-plus"></span>
							</a>
						</li>
						<li className="dribble-w3">
							<a href="#dribble">
								<span className="fa fa-dribbble"></span>
							</a>
						</li>
					</ul>
					{/* //social icons */}
				</div>
				<div className="col-lg-4 footer-grid_section_1its my-lg-0 my-sm-4 my-4">
					<div className="footer-title">
						<h3>Contact Us</h3>
					</div>
					<div className="footer-text mt-4">
						<p>Address : 1234 lock, Charlotte, North Carolina, United States</p>
						<p className="my-2">Phone : +12 534894364</p>
						<p>Email : <a href="mailto:info@example.com">info@example.com</a></p>
					</div>
					<div className="footer-title mt-4 pt-md-2">
						<h3>Payment Method</h3>
					</div>
					<ul className="list-unstyled payment-links mt-4">
						<li>
							<a href="login"><img src="assets/images/pay2.png" alt=""/></a>
						</li>
						<li>
							<a href="login"><img src="assets/images/pay5.png" alt=""/></a>
						</li>
						<li>
							<a href="login"><img src="assets/images/pay1.png" alt=""/></a>
						</li>
						<li>
							<a href="login"><img src="assets/images/pay4.png" alt=""/></a>
						</li>
					</ul>
				</div>
				<div className="col-lg-4 footer-grid_section_1its">
					<div className="footer-title">
						<h3>Request Info</h3>
					</div>
					<div className="info-form-right mt-4 p-0">
						<form action="#" method="post">
							<div className="row">
								<div className="col-lg-6 form-group mb-2 pr-lg-1">
									<input type="text" className="form-control" name="Name" placeholder="Name" required=""/>
								</div>
								<div className="col-lg-6 form-group mb-2 pl-lg-1">
									<input type="text" className="form-control" name="Phone" placeholder="Phone"
										required=""/>
								</div>
							</div>
							<div className="form-group mb-2">
								<input type="email" className="form-control" name="Email" placeholder="Email" required=""/>
							</div>
							<div className="form-group mb-2">
								<textarea name="Comment" className="form-control" placeholder="Comment"
									required=""></textarea>
							</div>
							<button type="submit" className="btn submit-contact ml-auto">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</footer>
	{/* //footer */}
	{/* copyright */}
	<div className="cpy-right text-center py-3">
		<p>© 2019 Tasty Burger. All rights reserved | Design by
			<a href="#"> Lahcen Idbendriss.</a>
		</p>
	</div>
	{/* //copyright */}
	{/* move top icon */}
	<a href="#home" className="move-top text-center">
		<span className="fa fa-level-up" aria-hidden="true"></span>
	</a>
    
      </div>
  )
}

export default About