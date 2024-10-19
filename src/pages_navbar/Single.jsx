import React from 'react'

function Single() {
  return (
    <div>
         {/*  header */} 
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


	{/* banner */}
	<div class="main-banner-2">

	</div>
	{/* //banner */}
	{/* page details */}
	<div class="breadcrumb-agile bg-light py-2">
		<ol class="breadcrumb bg-light m-0">
			<li class="breadcrumb-item">
				<a href="index.html">Home</a>
			</li>
			<li class="breadcrumb-item active" aria-current="page">Single Page</li>
		</ol>
	</div>
	{/* //page details */}

	{/* single page */}
	<div class="single-page py-5">
		<div class="container py-xl-5 py-lg-3">
			<div class="title-section text-center mb-md-5 mb-4">
				<p class="w3ls-title-sub">Info</p>
				<h3 class="w3ls-title">Single <span>Page</span></h3>
			</div>
			<div class="inner-sec">
				<div class="row">
					{/* left side */}
					<div class="col-lg-8 left-blog-info text-left">
						<div class="blog-grid-top">
							<div class="b-grid-top">
								<div class="blog_info_left_grid">
									<a href="single">
										<img src="assets/images/single1.jpg" class="img-fluid" alt=""/>
									</a>
								</div>
							</div>

							<h3>
								<a href="single.html" class="single-text text-da font-weight-light">Nemo enim ipsam
									voluptatem quia voluptas
									sit aspernatur aut odit aut fugit 2018</a>
							</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor
								incididunt ut labore et
								dolore magna
								aliqua uta enim ad minim ven iam quis nostrud exercitation ullamco labor nisi ut aliquip
								exea commodo consequat
								duis
								aute irudre dolor in elit sed uta labore dolore reprehender</p>
							<p class="my-3">Ullamco labor nisi ut aliquip exea commodo consequat duis aute irudre dolor
								in elit sed uta
								labore dolore reprehender</p>
							<p>Jabore et dolore magna aliqua uta enim ad minim ven iam quis nostrud exercitation ullamco
								labor nisi ut
								<span class="text-blog-single">aliquip exea commodo consequat duis aute irudre dolor in
									elit
									sed uta labore dolore
									reprehender</span>
							</p>
							<div class="mt-sm-4 mt-3">
								<p>Elit sedc dnmo eiusmod tempor incididunt ut labore et dolore magna aliqua uta enim ad
									minim ven iam quis
									nostrud
									exercitation ullamco labor nisi ut aliquip exea commodo consequat duis aute irudre
									dolor in elit sed uta
									labore
									dolore reprehender</p>
								<p class="my-3">Ullamco labor nisi ut aliquip exea commodo consequat duis aute irudre
									dolor in elit sed uta
									labore dolore reprehender</p>
								<p>Jabore et dolore magna aliqua uta enim ad minim ven iam quis nostrud exercitation
									ullamco labor nisi ut
									aliquip exea
									<span class="text-blog-single">commodo consequat duis aute irudre dolor in elit sed
										uta
										labore dolore reprehender</span>
								</p>
							</div>
							<h3>
								<a href="single.html" class="single-text text-da font-weight-light">Nemo enim ipsam
									voluptatem quia voluptas
									sit aspernatur aut odit aut fugit 2019</a>
							</h3>
							<p class="my-3">Ullamco labor nisi ut aliquip exea commodo consequat duis aute irudre dolor
								in elit sed uta
								labore dolore reprehender</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod tempor
								incididunt ut labore et
								dolore magna
								aliqua uta enim ad minim ven iam quis nostrud exercitation ullamco labor nisi ut aliquip
								exea commodo consequat
								duis
								aute irudre dolor in elit sed uta labore dolore reprehender</p>
						</div>

						<div class="comment-top">
							<h4>Comments</h4>
							<div class="media">
								<img src="assets/images/te3.jpg" alt="" class="img-fluid" />
								<div class="media-body">
									<h5 class="mt-0">Joseph Goh</h5>
									<p>Lorem Ipsum convallis diam consequat magna vulputate malesuada. id dignissim
										sapien velit id felis ac
										cursus eros.
										Cras a ornare elit.</p>
								</div>
							</div>
							<div class="media mt-3">
								<a class="d-flex pr-3" href="#">
									<img src="assets/images/te2.jpg" alt="" class="img-fluid" />
								</a>
								<div class="media-body">
									<h5 class="mt-0">Richard Spark</h5>
									<p>Lorem Ipsum convallis diam consequat magna vulputate malesuada. id
										dignissim sapien velit id felis ac
										cursus eros.
										Cras a ornare elit.</p>
								</div>
							</div>
						</div>
						<div class="comment-top">
							<h4>Leave a Comment</h4>
							<div class="comment-bottom">
								<form action="#" method="post">
									<div class="form-group">
										<input class="form-control" type="text" name="Name" placeholder="Name"
											required=""/>
									</div>
									<div class="form-group">
										<input class="form-control" type="email" name="Email" placeholder="Email"
											required=""/>
									</div>
									<div class="form-group">
										<input class="form-control" type="text" name="Subject" placeholder="Subject"
											required=""/>
									</div>
									<div class="form-group">
										<textarea class="form-control" name="Message" placeholder="Message..."
											required=""></textarea>
									</div>
									<button type="submit" class="btn btn-primary submit">Submit</button>
								</form>
							</div>
						</div>
					</div>
					{/* //left side */}
					{/* right side */}
					<aside class="col-lg-4 right-blog-con text-right mt-lg-0 mt-5">
						<div class="right-blog-info text-left">
							<div class="tech-btm">
								<h4>Sign up to our newsletter</h4>
								<p>Pellentesque dui, non felis. Maecenas male </p>
								<form action="#" method="post">
									<input class="form-control" name="email" type="email" placeholder="Email"
										required=""/>
									<input class="form-control" type="submit" value="Subscribe"/>
								</form>
							</div>
							<div class="category-story tech-btm">
								<h4>More Stories</h4>
								<ul class="list-unstyled">
									<li class="border-bottom mb-3 pb-3">
										<i class="fa fa-angle-right mr-2"></i>
										<a href="#" class="text-blog-single">sed do eiusmod tempor incididunt ut labore
											et
											dolore magna aliqua</a>
									</li>
									<li class="border-bottom mb-3 pb-3">
										<i class="fa fa-angle-right mr-2"></i>
										<a href="#" class="text-blog-single">sed do eiusmod tempor incididunt ut labore
											et
											dolore magna aliqua</a>
									</li>
									<li class="border-bottom mb-3 pb-3">
										<i class="fa fa-angle-right mr-2"></i>
										<a href="#" class="text-blog-single">sed do eiusmod tempor incididunt ut labore
											et
											dolore magna aliqua</a>
									</li>
									<li class="border-bottom mb-3 pb-3">
										<i class="fa fa-angle-right mr-2"></i>
										<a href="#" class="text-blog-single">sed do eiusmod tempor incididunt ut labore
											et
											dolore magna aliqua</a>
									</li>
									<li class="border-bottom mb-3 pb-3">
										<i class="fa fa-angle-right mr-2"></i>
										<a href="#" class="text-blog-single">sed do eiusmod tempor incididunt ut labore
											et
											dolore magna aliqua</a>
									</li>
									<li>
										<i class="fa fa-angle-right mr-2"></i>
										<a href="#" class="text-blog-single">sed do eiusmod tempor incididunt ut labore
											et
											dolore magna aliqua</a>
									</li>
								</ul>
							</div>
							<div class="tech-btm">
								<img src="assets/images/blog1.jpg" class="img-fluid" alt=""/>
							</div>
							<div class="tech-btm">
								<h4>Categories</h4>
								<ul class="list-group single">
									<li class="list-group-item d-flex justify-content-between align-items-center">
										Cras justo odio
										<span class="badge badge-primary badge-pill">14</span>
									</li>
									<li class="list-group-item d-flex justify-content-between align-items-center">
										Dapibus ac facilisis in
										<span class="badge badge-primary badge-pill">2</span>
									</li>
									<li class="list-group-item d-flex justify-content-between align-items-center">
										Morbi leo risus
										<span class="badge badge-primary badge-pill">1</span>
									</li>
								</ul>
							</div>
							<div class="tech-btm">
								<h4>Top stories of the week</h4>

								<div class="blog-grids row mb-3">
									<div class="col-md-5 blog-grid-left">
										<a href="single">
											<img src="assets/images/blog1.jpg" class="img-fluid" alt=""/>
										</a>
									</div>
									<div class="col-md-7 blog-grid-right mt-2">
										<h5>
											<a href="single">Pellentesque dui, non felis. Maecenas male non felis
											</a>
										</h5>
										<div class="sub-meta">
											<span>
												<i class="far fa-clock"></i> 20 Jan, 2018</span>
										</div>
									</div>
								</div>
								<div class="blog-grids row mb-2">
									<div class="col-md-5 blog-grid-left">
										<a href="single.html">
											<img src="assets/images/blog2.jpg" class="img-fluid" alt=""/>
										</a>
									</div>
									<div class="col-md-7 blog-grid-right mt-3">
										<h5>
											<a href="single">Pellentesque dui, non felis. Maecenas male non felis
											</a>
										</h5>
										<div class="sub-meta">
											<span>
												<i class="far fa-clock"></i> 20 Feb, 2018</span>
										</div>
									</div>
								</div>
							</div>
							<div class="single-gd tech-btm">
								<h4>Recent Post</h4>
								<div class="blog-grids">
									<div class="blog-grid-left">
										<a href="single.html">
											<img src="assets/images/blog1.png" class="img-fluid" alt=""/>
										</a>
									</div>
									<div class="blog-grid-right">
										<h5 class="mt-0">
											<a href="single">Pellentesque dui, non felis. Maecenas male</a>
										</h5>
									</div>
									<div class="clearfix"> </div>
								</div>
							</div>
						</div>
					</aside>
					{/* //right side */}
				</div>
			</div>
		</div>
	</div>
	{/* //single */}

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

export default Single