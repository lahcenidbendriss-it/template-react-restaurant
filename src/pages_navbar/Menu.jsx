import React from 'react'
import { Link } from 'react-router-dom'





function Menu() {
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
									<li><a className="drop-text" href="single">Single Page</a></li>
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

	{/*  banner */} 
	<div class="main-banner-2">

	</div>
	{/*  //banner */} 
	{/*  page details */} 
	<div class="breadcrumb-agile bg-light py-2">
		<ol class="breadcrumb bg-light m-0">
			<li class="breadcrumb-item">
				<a href="index">Home</a>
			</li>
			<li class="breadcrumb-item active" aria-current="page">Menu</li>
		</ol>
	</div>
	{/*  //page details */} 

	{/*  menu */} 
	<section class="portfolio py-5">
		<div class="container py-xl-5 py-lg-3">
			<div class="title-section text-center mb-md-5 mb-4">
				<h3 class="w3ls-title mb-3">Our <span>Menu</span></h3>
				<p class="titile-para-text mx-auto">Inventore veritatis et quasi architecto beatae vitae dicta sunt
					explicabo.Nemo
					enim totam rem aperiam.</p>
			</div>
			<div class="row mt-4">
				<div class="col-md-4">
					<div class="gallery-demo">
						<a href="#gal1">
							<img src="assets/images/blog1.jpg" alt=" " class="img-fluid" />
							<h4 class="p-mask">French Burger - <span>$22</span></h4>
						</a>
					</div>
				</div>
				<div class="col-md-4 mt-md-0 mt-4">
					<div class="gallery-demo">
						<a href="#gal2">
							<img src="assets/images/blog2.jpg" alt=" " class="img-fluid" />
							<h4 class="p-mask">Veg Muffin - <span>$16</span></h4>
						</a>
					</div>
				</div>
				<div class="col-md-4 mt-md-0 mt-4">
					<div class="gallery-demo">
						<a href="#gal3">
							<img src="assets/images/blog3.jpg" alt=" " class="img-fluid" />
							<h4 class="p-mask">Brioche - <span>$18</span></h4>
						</a>
					</div>
				</div>
			</div>
			<div class="row mt-md-5">
				<div class="col-md-4 mt-md-0 mt-4">
					<div class="gallery-demo">
						<a href="#gal4">
							<img src="assets/images/g1.jpg" alt=" " class="img-fluid" />
							<h4 class="p-mask">Cheese Burger - <span>$20</span></h4>
						</a>
					</div>
				</div>
				<div class="col-md-4 mt-md-0 mt-4">
					<div class="gallery-demo">
						<a href="#gal5">
							<img src="assets/images/g2.jpg" alt=" " class="img-fluid" />
							<h4 class="p-mask">Chicken Burger - <span>$22</span></h4>
						</a>
					</div>
				</div>
				<div class="col-md-4 mt-md-0 mt-4">
					<div class="gallery-demo">
						<a href="#gal6">
							<img src="assets/images/g3.jpg" alt=" " class="img-fluid" />
							<h4 class="p-mask">Veg Burger - <span>$16</span></h4>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	{/*  gallery model*/} 
	{/*  gallery popup 1 */} 
	<div id="gal1" class="pop-overlay">
		<div class="popup">
			<img class="img-fluid" src="assets/images/blog1.jpg" alt=""/>
			<h4 class="p-mask">French Burger - - <span>$22</span></h4>
			<a href="login" class="button-w3ls active mt-3">Order Now
				<span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
			</a>
			<a class="close" href="gallery">×</a>
		</div>
	</div>
	{/*  //gallery popup 1 */} 
	{/*  gallery popup 2 */} 
	<div id="gal2" class="pop-overlay">
		<div class="popup">
			<img class="img-fluid" src="assets/images/blog2.jpg" alt=""/>
			<h4 class="p-mask">Veg Muffin - <span>$16</span></h4>
			<a href="login" class="button-w3ls active mt-3">Order Now
				<span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
			</a>
			<a class="close" href="gallery">×</a>
		</div>
	</div>
	{/*  //gallery popup 2 */} 
	{/*  gallery popup 3 */} 
	<div id="gal3" class="pop-overlay">
		<div class="popup">
			<img class="img-fluid" src="assets/images/blog3.jpg" alt=""/>
			<h4 class="p-mask">Brioche - <span>$18</span></h4>
			<a href="login" class="button-w3ls active mt-3">Order Now
				<span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
			</a>
			<a class="close" href="gallery">×</a>
		</div>
	</div>
	{/*  //gallery popup 3 */} 
	{/*  gallery popup 4 */} 
	<div id="gal4" class="pop-overlay">
		<div class="popup">
			<img class="img-fluid" src="assets/images/g1.jpg" alt=""/>
			<h4 class="p-mask">Cheese Burger - <span>$20</span></h4>
			<a href="login" class="button-w3ls active mt-3">Order Now
				<span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
			</a>
			<a class="close" href="gallery">×</a>
		</div>
	</div>
	{/*  //gallery popup 4 */} 
	{/*  gallery popup 5 */} 
	<div id="gal5" class="pop-overlay">
		<div class="popup">
			<img class="img-fluid" src="assets/images/g2.jpg" alt=""/>
			<h4 class="p-mask">Chicken Burger - <span>$22</span></h4>
			<a href="login" class="button-w3ls active mt-3">Order Now
				<span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
			</a>
			<a class="close" href="gallery">×</a>
		</div>
	</div>
	{/*  //gallery popup 5 */} 
	{/*  gallery popup 6 */} 
	<div id="gal6" class="pop-overlay">
		<div class="popup">
			<img class="img-fluid" src="assets/images/g3.jpg" alt=""/>
			<h4 class="p-mask">Veg Burger - <span>$16</span></h4>
			<a href="login" class="button-w3ls active mt-3">Order Now
				<span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
			</a>
			<a class="close" href="gallery">×</a>
		</div>
	</div>
	{/*  //gallery popup 6 */} 
	{/*  //menu */} 

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

export default Menu