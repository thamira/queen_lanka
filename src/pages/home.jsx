import React, { useEffect} from 'react';
import ReactDOM from 'react-dom';
import Navigation from './../components/navigation';
import logo from '../assets/img/logo.png';
import {mainScript} from './../assets/js/script';
import green from '../assets/img/green-tb.png';
import black from '../assets/img/black-tb.png';
import opa from '../assets/img/opa.png';
import earl_grey from '../assets/img/earl_grey.png';
import breakfast from '../assets/img/breakfast.png';
import AsortmentsSlider from './../components/AsortmentsSlider';
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
	useEffect(()=>{
		mainScript();
	},[])
	return(
		<React.Fragment>
			<Navigation />

	    <header className="masthead">
	        <div className="container px-4 px-lg-5 h-100">
	            <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
	                <div className="col-lg-8 align-self-end">
	                    <h1 className="text-white font-weight-bold"><img src={logo} alt="logo" /></h1>
	                    <hr className="divider" />
	                </div>
	                <div className="col-lg-8 align-self-baseline">
	                    <p className="text-white-75 mb-5">При Заваривании Чайные Гранулы Раскрываются В Целые Листочки</p>
	                    <a className="btn btn-primary btn-xl" href="#about">Узнать больше</a>
	                </div>
	            </div>
	        </div>
	        <div className="images">
	            <div className="img"></div>
	            <div className="img"></div>
	            <div className="img"></div>
	            <div className="img"></div>
	        </div>
	    </header>	

      <section className="page-section bg-primary bg-pattern-1" id="about">
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-8 text-center">
                    <h4 className="text-white mt-0">
                        Чайная компания «Luxury Tea» предлагает Вам коллекцию лучших сортов элитного чая класса PREMIUM, собранного в ручную на самых экологически чистых плантациях Цейлона. Настоящий цейлонский чай «Qeen Lanka» — выращен, обработан и упакован на острове Шри-Ланка (Цейлон).
                    </h4>
                    <hr className="divider divider-light" />
                    <p className="text-white-75 mb-4">
                        Чай «Qeen Lanka» производится по традиционным английским рецептам, созданным чайными специалистами много лет назад. Контроль за качеством производимого чая ведётся Чайным советом Шри-Ланки. Вся продукция отмечена знаком «Лев с мечом» это индивидуальная отметка о качестве, за распространением которой ведет строгий контроль совета. Остров Шри-Ланка считается одним из самых экологически чистых горных районов мира и благодаря мягкому климату в сочетании с прохладой возвышенных районов, является идеальным местом для выращивания чайных кустов. Такие погодные условия позволяют культивировать чай круглый год.
                    </p>
                    {/*<a className="btn btn-light btn-xl" href="#services">Get Started!</a>*/}
                </div>
            </div>
        </div>
      </section>	    

      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
            <h2 className="text-center mt-0">Наш Ассортимент</h2>
            <hr className="divider" />
            <div className="row gx-4 gx-lg-5">
                <div className="col-lg-4 col-md-6 text-center">
                    <div className="mt-5 item" onClick={e => navigate('/catalog/green_tea')}>
                        <div className="mb-2"><img src={green}/></div>
                        <h3 className="h4 mb-2">Королева Ланки Зеленый чай</h3>
                        <h3 className="h4 mb-2"></h3>
                        <p className="text-muted mb-0">Queen Lanka Green Tea</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center">
                    <div className="mt-5 item" onClick={e => navigate('/catalog/pekoe')}>
                        <div className="mb-2"><img src={opa}/></div>
                        <h3 className="h4 mb-2">Королева Ланки Пекое</h3>
                        <p className="text-muted mb-0">Queen Lanka Pekoe</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center">
                    <div className="mt-5 item" onClick={e => navigate('/catalog/earl_grey')}>
                        <div className="mb-2"><img src={earl_grey}/></div>
                        <h3 className="h4 mb-2"> Королева Ланки Эрл Грей</h3>
                        <p className="text-muted mb-0">Queen Lanka Earl Grey</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center">
                    <div className="mt-5 item" onClick={e => navigate('/catalog/opa')}>
                        <div className="mb-2"><img src={black}/></div>
                        <h3 className="h4 mb-2">Королева Ланки ОРА</h3>
                        <p className="text-muted mb-0">Queen Lanka Opa</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center">
                    <div className="mt-5 item" onClick={e => navigate('/catalog/lankan_breakfast')}>
                        <div className="mb-2"><img src={breakfast}/></div>
                        <h3 className="h4 mb-2">Королева Ланки Ланкийский завтрак</h3>
                        <p className="text-muted mb-0">Queen Lanka Lankan Breakfast</p>
                    </div>
                </div>                
            </div>
        </div>
      </section>    
      
{/*      <div id="portfolio">
          <div className="container-fluid p-0">
              <div className="row g-0">
                  <div className="col-lg-4 col-sm-6">
                      <a className="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg" title="Project Name">
                          <img className="img-fluid" src="assets/img/portfolio/thumbnails/1.jpg" alt="..." />
                          <div className="portfolio-box-caption">
                              <div className="project-category text-white-50">Category</div>
                              <div className="project-name">Project Name</div>
                          </div>
                      </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                      <a className="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg" title="Project Name">
                          <img className="img-fluid" src="assets/img/portfolio/thumbnails/2.jpg" alt="..." />
                          <div className="portfolio-box-caption">
                              <div className="project-category text-white-50">Category</div>
                              <div className="project-name">Project Name</div>
                          </div>
                      </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                      <a className="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg" title="Project Name">
                          <img className="img-fluid" src="assets/img/portfolio/thumbnails/3.jpg" alt="..." />
                          <div className="portfolio-box-caption">
                              <div className="project-category text-white-50">Category</div>
                              <div className="project-name">Project Name</div>
                          </div>
                      </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                      <a className="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg" title="Project Name">
                          <img className="img-fluid" src="assets/img/portfolio/thumbnails/4.jpg" alt="..." />
                          <div className="portfolio-box-caption">
                              <div className="project-category text-white-50">Category</div>
                              <div className="project-name">Project Name</div>
                          </div>
                      </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                      <a className="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg" title="Project Name">
                          <img className="img-fluid" src="assets/img/portfolio/thumbnails/5.jpg" alt="..." />
                          <div className="portfolio-box-caption">
                              <div className="project-category text-white-50">Category</div>
                              <div className="project-name">Project Name</div>
                          </div>
                      </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                      <a className="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg" title="Project Name">
                          <img className="img-fluid" src="assets/img/portfolio/thumbnails/6.jpg" alt="..." />
                          <div className="portfolio-box-caption p-3">
                              <div className="project-category text-white-50">Category</div>
                              <div className="project-name">Project Name</div>
                          </div>
                      </a>
                  </div>
              </div>
          </div>
      </div>*/}


      <section id="catalog">
       <AsortmentsSlider />
      </section>



      <section className="page-section" id="contact">
          <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                  <div className="col-lg-8 col-xl-6 text-center">
                      <h2 className="mt-0">Контакты</h2>
                      <hr className="divider" />
                      <p className="text-muted mb-5">
												<b>ЮРИДИЧЕСКИЙ АДРЕС</b>
												<br/>
												143966, Московская область, 
												<br/>г. Реутов, ул. Победы д.9, помещение 5, этаж 4, офис №414
												Email: info@queenlanka.ru
												Телефон: 8(495) 565-34-54
												ГДЕ КУПИТЬ ЧАЙ QUEEN LANKA
												1. Москва, Дмитровское ш., 165, корп.1 ТЦ «Бухта».Пав-он № Н78. Магазин «Полная Чашка».
												2. Московская обл., Реутов г., ул. Ленина, 6. Магазин «Полная Чашка».
												3. Интернет-магазин «Полная Чашка» - полнаячашка.рф 
                      	
                      </p>
				              <div className="row gx-4 gx-lg-5 justify-content-center">
				                  <div className="col-lg-6 text-center mb-5 mb-4">
				                      <i className="bi-phone fs-2 mb-3 text-muted"></i>
				                      <div> 8(495) 565-34-54</div>
				                  </div>
				              </div>                      
                  </div>
              </div>
              <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                  <div className="col-lg-6">
                      <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                          <div className="form-floating mb-3">
                              <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                              <label htmlFor="name">Имя</label>
                              <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                          </div>
                          <div className="form-floating mb-3">
                              <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                              <label htmlFor="email">E-mail</label>
                              <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                              <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                          </div>
                          <div className="form-floating mb-3">
                              <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                              <label htmlFor="phone">Телефон</label>
                              <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                          </div>
                          <div className="form-floating mb-3">
                              <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} data-sb-validations="required"></textarea>
                              <label htmlFor="message">Сообщения</label>
                              <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                          </div>
                          <div className="d-none" id="submitSuccessMessage">
                              <div className="text-center mb-3">
                                  <div className="fw-bolder">Form submission successful!</div>
                                  To activate this form, sign up at
                                  <br />
                                  <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                              </div>
                          </div>
                          <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                          <div className="d-grid"><button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Отправить</button></div>
                      </form>
                  </div>
              </div>

          </div>
      </section>

{/*      <!-- Footer-->*/}
      <footer className="bg-light py-5">
          <div className="container px-4 px-lg-5"><div className="small text-center text-muted">Copyright &copy; 2021 - Company Name</div></div>
      </footer>  

    </React.Fragment>	
	)
}

export default Home;