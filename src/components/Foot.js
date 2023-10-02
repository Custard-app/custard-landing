import React from 'react'
import "../css/Foot.css";
const Foot = () => {
  return (
	<section>
    <footer class="footer-07">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-12 text-center">
						<h2 class="footer-heading"><a href="#" class="logo">CUSTARD</a></h2>
						<p class="menu">
							<a href="#">Home</a>
							<a href="#">Agent</a>
							<a href="#">About</a>
							<a href="#">Listing</a>
							<a href="#">Blog</a>
							<a href="#">Contact</a>
						</p>
						<ul class="ftco-footer-social p-0">
              <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span class="ion-logo-twitter"></span></a></li>
              <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span class="ion-logo-facebook"></span></a></li>
              <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span class="ion-logo-instagram"></span></a></li>
            </ul>
					</div>
				</div>
				<div class="row mt-5">
					<div class="col-md-12 text-center">
						<p class="copyright">
					  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="ion-ios-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
					  </p>
					</div>
				</div>
			</div>
		</footer>
		</section>
  );
}

export default Foot
