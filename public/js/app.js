"use strict";

class App{
	constructor(){
			this.drop = [
			{
				"Petname": "Dogko",
				"kind1": "Siberian Husky",
				"kind2":"Pug",
				"kind3":"Labrador Retriever",
				"kind4":"Poodle",
				"kind5":"Doberman"
			},
			{
				"Petname": "Catko",
				"kind1": "British Shorthair",
				"kind2":"Siamese Cat",
				"kind3":"Persian Cat",
				"kind4":"Bengal cat",
				"kind5":"Exotic Shorthair"
			},
			{
				"Petname": "Rabbitko",
				"kind1": "Deilenaar",
				"kind2":"Blanc de Popielno",
				"kind3":"Fee de Marbourg",
				"kind4":"Mini Satin Rabbit",
				"kind5":"Panon Rabbit"
			}



			];  //Sa AboutPage na JSON //
			this.abouty = [ 
			{
				"logo": "img/pug.jpg",
				"title":"PUG",
				"para":"is a breed of dog with a wrinkly, short-muzzled face, and curled tail."
			},
			{
				"logo":"img/labrador.jpg",
				"title":"Labrador Retriever",
				"para":"is a type of retriever-gun dog.</br> is one of the most Popular breeds of dog in the United State."
			},
			{
				"logo":"img/burmese.jpg",
				"title":"Burmese",
				"para":"is a breed of a domestic cat, originating in southeast Asia"	
			}
			];

			//About sa Create na JSON//
			this.ordery = [ 
			{
				"hideimg": "img/iamge8.jpg",
				"image":"img/iamge8.jpg",
				"name":"Pug",
				"info": "Available",
				"price": "P 7,000"
			},
			{
				"hideimg": "img/iamge6.jpg",
				"image":"img/iamge6.jpg",
				"name":"Akita",
				"info": "Available",
				"price": "P 4,500",
			},
			{
				"hideimg": "img/iamge4.jpg",
				"image":"img/iamge4.jpg",
				"name":"American Pit Bull Terrier",
				"info": "Available",
				"price": "P 5,000"				
			}, 
			{
				"hideimg": "img/husky.jpg",
				"image":"img/husky.jpg",
				"name":"Australian Shepherd",
				"info": "Available",
				"price": "P 6,000"				
			}, 
			{
				"hideimg": "img/image7.jpg",
				"image":"img/image7.jpg",
				"name":"American Eskimo Dog",
				"info": "Available",
				"price": "P 4,000"
				
			}, 
			{
				"hideimg": "img/images.jpg",
				"image":"img/images.jpg",
				"name":"Bearded Collie",
				"info": "Available",
				"price": "P 9,909"
				
			},
			{
				"hideimg": "img/images.jpg",
				"image":"img/images.jpg",
				"name":"Bloodhound",
				"info": "Available",
				"price": "P 9909"
				
			},  
			{
				"hideimg": "img/exotic.jpg",
				"image":"img/exotic.jpg",
				"name":"exotic",
				"info": "Available",
				"price": "P 9909"
				
			},  
			{
				"hideimg": "img/coon.jpg",
				"image":"img/coon.jpg",
				"name":"Coon",
				"info": "Available",
				"price": "P 9909"
				
			},  
			];

			}
	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}
    
    petList(){
	let html = "";
	for (let a=0;a<this.ordery.length;a++){
	html +=`
	<div class="col-lg-4 col-md-4 col-sm-6">
		<a href="${this.ordery[a].image}" class="fh5co-card-item image-popup">
			<figure>
				<div class="overlay"><i class="ti-plus"></i></div>
				<img src="${this.ordery[a].hideimg}" alt="Image" class="img-responsive">
			</figure>
			<div class="fh5co-text">
				<h2>${this.ordery[a].name}</h2>
				<p>${this.ordery[a].info}</p>
				<p><span class="price cursive-font">${this.ordery[a].price}</span></p>			
			</div>
		</a>
		<button class="btn btn-primary" onclick="component.petDetails(${a})">Show Details</button>
	</div>
	`;
	}
	this.reRender(html,document.getElementById('petList'));
	}

    dogList(){
	let html = "";
	for (let a=0;a<this.abouty.length;a++){
	html +=`
			<div class="col-md-4">
				<img class="wew"><img src="${this.abouty[a].logo}" alt"/></img>
				<h3>${this.abouty[a].title}</h3>
				<p>${this.abouty[a].para}</p>
			</div>
	`;
	}
	this.reRender(html,document.getElementById('dogList'));
	}
    
    petDetails(key){
		this.reRender(
			`
			    <div class="containers" id="adjust5">
			        <div class="row">
			            <div id="petDetails">
			                <div id="containers">
			                    <div id="row">
			                        <div id="petDetailsInfo">
			                            <div class="buttonss" id="adjustDetails1">
			                                <center<h1 class="slim">${this.ordery[key].name}</h1></center><br>
			                                <button class="btn btn-primary btn-lg outline" onclick="component.petUpdate(${key})">Update</button>
			                                <button class="btn btn-primary btn-lg outline" onclick="component.deletePet(${key.id})">Delete</button>
			                                <button class="btn btn-primary btn-lg outline" onclick="component.showPetPage()">Back</button>
			                            </div>
			                            <div class="listss" id="adjust100">
			                                <ul class="groups">
			                                  <li class="itemz"><span class="headername">Info: </span>${this.ordery[key].info}</li>
			                                  <li class="itemz"><span class="headername">Price: </span>${this.ordery[key].price}</li>			                                                                
			                                </ul>
			                            </div>
			                        </div>
			                    </div>
			                </div>                
			            </div>
			        </div>
			    </div>				    	
			`,document.getElementById('petDetails'));
			this.showUpdateDelete();
	}

    
    petCreate(){
		this.render(
			`
				<h1 class="text-center" id="slimfont">Add Your Pet Here!</h1>
				YourImage: <input class="form-control" id="hideimg" type="" placeholder="Enter Image URL" /><br/>
				CopyImage: <input class="form-control" id="image" type="" placeholder="Copy the URL Above" /><br/>
				Name: <input class="form-control" id="name" type="" placeholder="Enter Your Pet Name" /><br/>
				Content: <input class ="form-control"id="info" type "" placeholder ="Enter a Contenet" /><br/>
				YourPrize: <input class ="form-control"id="price" type "" placeholder ="Enter a Prize" /><br/>
				<button class="btn btn-success" onclick="component.createPet()">Create</button>
				<button class="btn btn-primary" onclick="component.showPetPage()">Go Back</button>
			`,document.getElementById('petCreate'));
	}
    
    createPet(){
			let i = document.getElementById('hideimg');
			let t = document.getElementById('image');
			let c = document.getElementById('name');
			let p = document.getElementById('info');
			let r = document.getElementById('price');


			let order = {"hideimg":i.value,"image":t.value,"name":c.value,"info":p.value,"price":r.value};
			this.ordery.push(order);

			i.value = t.value = c.value = p.value= ''; //Clear Fields
		this.petList();
	}
    
    updatePet(key){
			let i = document.getElementById('updateHideimg');
			let t = document.getElementById('updateImage');
			let c = document.getElementById('updateName');
			let p = document.getElementById('updateInfo');
			let r = document.getElementById('updatePrice');

		let m = this.ordery[key];
		let ord = {"hideimg":i.value,"image":t.value,"name":c.value,"info":p.value,"price":r.value};

		this.ordery[key] = ord;
		let details = document.getElementById('petDetails');
		details.innerHTML = "";
		
		this.petList();
		this.showPetPage();
	}
    
    petUpdate(key){
		this.reRender(
			`
			<div class="gtco-cover gtco-cover-sm" style="background-color:#ffffff;  data-stellar-background-ratio="0.5">
				<div class="overlay"></div>
				<div class="gtco-container text-center">
					<div class="display-t">
						<div class="display-tc">
							<form action="#">
								<div class="row form-group">
									<div class="col col-sm-12">
										<h1 class="text-center" id="slimfont">${this.ordery[key].name}</h1>
										YourImage: <input class="form-control" id="updateHideimg" type="text" value="${this.ordery[key].hideimg}" /><br/>
										CopyImage: <input class="form-control" id="updateImage" type="text" value="${this.ordery[key].image}"/><br/>
										Name: <input class="form-control" id="updateName" type="text" value="${this.ordery[key].name}"/><br/>
										Content: <input class ="form-control"id="updateInfo" type="text" value="${this.ordery[key].info}"/><br/>
										YourPrize: <input class ="form-control"id="updatePrice" type="text" value="${this.ordery[key].price}"/><br/>
										<button class="btn btn-success" onclick="component.updatePet(${key})">Save</button>		
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			`,document.getElementById('petDetailsInfo'));
	}
    
	deletePet(key){
		let r = this.ordery;
		for(let i=0;i<r.length;i++){
			if(r[i].id == key){
				this.ordery.splice(i,1);
				break;
			}
		}		
		this.petList();
		this.showPetPage();
	}
    
	searchPetList(){
					let searchthis = document.getElementById('searchthis');
					let petList = document.getElementById('petList');
					let a=this.ordery;
					let html = ``;
					for(let i=0;i<a.length;i++){
					if(a[i].name.toLowerCase().includes(searchthis.value)||a[i].name.toUpperCase().includes(searchthis.value)||a[i].price.toUpperCase().includes(searchthis.value)||a[i].price.toLowerCase().includes(searchthis.value)){
					html +=`
					<div class="col-lg-4 col-md-4 col-sm-6">
						<a href="${a[i].hideimg}" class="fh5co-card-item image-popup">
							<figure>
								<div class="overlay"><i class="ti-plus"></i></div>
								<img src="${a[i].image}" alt="Image" class="img-responsive">
							</figure>
							<div class="fh5co-text">
								<h2>${a[i].name}</h2>
								<p>${a[i].info}</p>
								<p><span class="price cursive-font">${a[i].price}</span></p>			
							</div>
						</a>
						<td><button class="btn btn-primary"  onclick="component.petDetails(${i})">Show Details</button></td>
					</div>
				`;
			}
		}
		petList.innerHTML = html;
	}
}

class Component extends App{
	constructor(){

		super();
	}

	landingPage(){
		let html = `
		<!-- START NAVIGATION -->
		<nav class="gtco-nav" role="navigation">
			<div class="gtco-container">
				<div class="row">
					<div class="col-sm-4 col-xs-12">
						<div id="gtco-logo"><a href="#indexpage"  onclick="component.showIndexPage()"><em>PetLoverShop</em></a></div>
					</div>
					<div class="col-xs-8 text-right menu-1">
						<ul>
							<li><a href="#" onclick="component.showIndexPage()">Home</a></li>
							<li><a href="#" onclick="component.showAboutPage()">About Us</a></li>
							<li class="btn-cta"><a href="#"  onclick="component.showPetPage()"><span>Order</span></a></li>
							<li class="btn-cta"><a href="#"  onclick="component.showPetCreate()"><span>Create</span></a></li>
						</ul>	
					</div>
				</div>
			</div>
		</nav>
		<!-- END NAVIGATION -->


		<!-- START HEADER -->
		<div id="indexpage">
				<header id="gtco-header" class="gtco-cover gtco-cover-md" role="banner"  data-stellar-background-ratio="0.5">
					<div class="overlay"></div>
					<div class="gtco-container">
						<div class="row">
							<div class="col-md-12 col-md-offset-0 text-left">
								<div class="row row-mt-15em">

									<div class="col-md-7 mt-text animate-box" data-animate-effect="fadeInUp">
										<span class="intro-text-small">You Can Have A True Friend! </span>
										<h1 class="cursive-font">@LoveKoPetKO.com</h1>	
									</div>

									<div class="col-md-4 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
										<div class="form-wrap">
											<div class="tab">
												<div class="tab-content">
													<div class="tab-content-inner active" data-content="signup">
														<h3 class="cursive-font">Pet Order Info</h3>
														<form action="#">
															<div class="row form-group">
																<div class="col-md-12">
																	<label for="activities">Kind of Pet</label>
																	<select name="#" id="activitiesList" class="form-control">
																		<option id="activitiesList" value="">${this.drop[0].Petname}</option>
																		<option value="">${this.drop[0].kind1}</option>
																		<option value="">${this.drop[0].kind2}</option>
																		<option value="">${this.drop[0].kind3}</option>
																		<option value="">${this.drop[0].kind4}</option>
																		<option value="">${this.drop[0].kind5}</option>
																	</select>
																	<select name="#" id="activitiesList" class="form-control">
																		<option value="">${this.drop[1].Petname}</option>
																		<option value="">${this.drop[1].kind1}</option>
																		<option value="">${this.drop[1].kind2}</option>
																		<option value="">${this.drop[1].kind3}</option>
																		<option value="">${this.drop[1].kind4}</option>
																		<option value="">${this.drop[1].kind5}</option>
																	</select>
																	<select name="#" id="activitiesList" class="form-control">
																		<option value="">${this.drop[2].Petname}</option>
																		<option value="">${this.drop[2].kind1}</option>
																		<option value="">${this.drop[2].kind2}</option>
																		<option value="">${this.drop[2].kind3}</option>
																		<option value="">${this.drop[2].kind4}</option>
																		<option value="">${this.drop[2].kind5}</option>
																	</select>
																</div>
															</div>
															<div class="row form-group">
																<div class="col-md-12">
																	<label for="date-start">How many</label>
																	<input type="text" id="number" class="form-control">
																</div>
															</div>

															<div class="row form-group">
																<div class="col-md-12">
																	<label for="date-start">Date</label>
																	<input type="text" id="date" class="form-control">
																</div>
																<br>
																<div class="row form-group">
																	<div class="col-md-12">
																		<input type="submit" class="btn btn-primary btn-block js-gotop"onclick="component.indexpage()" value="Order Now!">
																	</div>
																</div>
															</div>
														</form>	
													</div>	
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
		<!-- END HEADER -->


		<!-- Start of about Page-->
		<div id="aboutpage">
			<div id="gtco-features">
				<div class="gtco-container">
					<div class="row">
						<div class="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
							<h2 class="cursive-font">HomeyPetShopped</h2>
							<p>WE CAN JUDGE THE HEART OF A MAN BY HIS TREATMENT OF ANIMALS</p>
						</div>
					</div>
					<center><h2> Our Best Seller</h2><center>
						<div id="dogList">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--End of about page-->


		<!-- START BOOK PAGE -->
		<div id="orderpage">
			<div class="gtco-section">
				<div class="gtco-containerz">
					<div class="row">
						<div class="col-md-8 col-md-offset-2 text-center gtco-heading">
							<h2 class="cursive-font primary-color">Popular Pet</h2>
							<p>Some of our pet are from outside LOL</p>
						</div>
					</div>

					<div class="input-group stylish-input-group" id="adjustsearch">
						<input oninput="component.searchPetList()" 
						type="text" class="form-control"  placeholder="Search" id="searchthis">
						<span class="input-group-addon">
							<button type="submit" onclick="component.searchPetList()">
								<span class="glyphicon glyphicon-search"></span>
							</button>  
						</span>
					</div><br>
					<div class="row" id="petList">
					</div>
				</div>
			</div>
		</div>
		<!-- END BOOK PAGE -->

		<!-- START UPDATE-DELETE PAGE -->
		<section id="updatedeletepage" class="background1">
    		<div class="containersz" id="adjust5">
        		<div class="row">
            		<div id="petDetails"></div>
            	</div>
            </div>
		</section>
		<!-- END UPDATE-DELETE PAGE -->

		<!-- START CREATE PAGE -->
		<div id="createpage">
			<div class="gtco-cover gtco-cover-sm" style="background-color:#ffffff;  data-stellar-background-ratio="0.5">
				<div class="overlay"></div>
				<div class="gtco-container text-center">
					<div class="display-t">
						<div class="display-tc">
							<form action="#">
								<div class="row form-group">
									<div class="col col-sm-12">
										<div id="petCreate"></div>		
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END CREATE PAGE -->


	<!-- START FOOTER PAGE -->
		<footer id="gtco-footer" role="contentinfo"data-stellar-background-ratio="0.5">
			<div class="overlay"></div>
				<div class="gtco-container">
					<div class="row row-pb-md">
						<div class="col-md-12 text-center">
							<div class="gtco-widget">
								<br>
								<br>
								<br>
								<h3>Continue to be with Us</h3>
								<ul class="gtco-quick-contact">
									<li><a href="#"><i class="icon-phone"></i> Phone :+1 234 567 890</a></li>
									<li><a href="#"><i class="icon-mail2"></i> Email: Espinosan.rizal@gmail.com</a></li>
								</ul>
							</div>
							<div class="gtco-widget">
								<h3>Here's our Social Sites</h3>
								<ul class="gtco-social-icons">
									<li><a href="#"><i class="icon-twitter"></i></a></li>
									<li><a href="#"><i class="icon-facebook"></i></a></li>
								</ul>
							</div>
						</div>
						<div class="col-md-12 text-center copyright">
							<p><small class="blockie">&copy; 2016 Free HTML5. All Rights Reserved.</small> 
							</div>
						</div>
					</div>
				</div>
				<div class="gototop js-top">
					<a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
				</div>
			</div>
		</footer>
		<!-- END FOOTER PAGE-->


	
		`;
		this.reRender(`${html}`,document.getElementById("app"));	
		this.petList();
		this.dogList();
	}


	showIndexPage(){
		$('#indexpage').show();
		$('#aboutpage').hide();
		$('#createpage').hide();
		$('#orderpage').hide();
		$('#updatedeletepage').hide();
	}

	showAboutPage(){
		$('#indexpage').hide();
		$('#aboutpage').show();
		$('#createpage').hide();
		$('#orderpage').hide();
		$('#updatedeletepage').hide();
	}

	showPetPage(){
		$('#indexpage').hide();
		$('#aboutpage').hide();
		$('#createpage').hide();
		$('#orderpage').show();
		$('#updatedeletepage').hide();
	}
    
    showUpdateDelete(){
		$('#indexpage').hide();
		$('#aboutpage').hide();
		$('#createpage').hide();
		$('#orderpage').hide();
		$('#updatedeletepage').show();
	}
    
    showPetCreate(){
		$('#indexpage').hide();
		$('#aboutpage').hide();
		$('#createpage').show();
		$('#orderpage').hide();
		$('#updatedeletepage').hide();
        
    }

}

let component = new Component();
component.landingPage();
component.petCreate();