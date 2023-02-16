import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const AsortmentsSlider = () =>{
	return (
		<Carousel showArrows={false} showStatus={false} dynamicHeight={true} showThumbs={false}>
      <div className="page-section bg-primary bg-breakfast" >
          <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                  <div className="col-lg-8 text-center asortments-slider">
							        <h2 className="text-white mt-0">
							            Королева Ланки Ланкийский завтрак
							        </h2>
							        <hr className="divider divider-light" />
							        <p className="text-white-75 mb-4 description">
							            Ланкийский завтрак – это чайный купаж из премиальных сортов среднелистового чая с типсами, выращенного и собранного вручную на 
							            лучших плантациях острова Цейлон - Канди, Нувара Элия и Димбула.  Создавался этот уникальный купаж, из чистого интереса,  
							            лучшими титестерами  Шри-Ланки.   Напиток из этого чайного купажа отличается 
							            насыщенностью, крепостью и богатым ароматом. Очень хорошо сочетается с молоком и сахаром.Чай Queen Lanka Lankan Breakfast оформлен 
							            в  живописи 18-19 века н.э. острова Цейлон. По старинной цейлонской традиции обычно жена завтракает после того как позавтракает муж.  На пачке изображено как муж пьет чай и угощает жену пряниками.

							        </p>
							        <a className="btn btn-light btn-xl" href="#services">В каталог</a>                   
                  </div>
              </div>
          </div>
      </div>

      <div className="page-section bg-primary bg-greentea" >
          <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                  <div className="col-lg-8 text-center asortments-slider">
							        <h2 className="text-white mt-0">
							           Королева Ланки Зеленый чай
							        </h2>
							        <hr className="divider divider-light" />
							        <p className="text-white-75 mb-4 description">
												 Цейлонский крупнолистовой зеленый чай Gun Powder 1 — зелёный чай, изготовленный по 
												 технологии прокаливания на специальной плите.  Этот изысканный сорт чая собирается 
												 вручную на лучших плантациях острова Цейлона (Шри-Ланка). Чайные листья аккуратно, вручную
												  скручиваются в крошечные плотные шарики – такая форма позволяет чайному сырью сохранить большую 
												  часть витаминно-минеральных веществ и не потерять вкусовых качеств. Чай фольгированный в картонной пачке 100г.-200г. 
												При заваривании чайные гранулы раскрываются в целые листочки. Чай имеет характерный терпкий вкус 
												и тонкий аромат, прекрасно утоляет жажду. Обладает целебными свойствами — содержит множество витаминов и минералов. 
												Чай отличается терпким, вяжущим вкусом, аромат его очень тонок.
												Чай Queen Lanka Green Tea оформлен в Кандийском стиле живописи 18-19 века н.э.  На нем изображены танцовщица и 
												барабанщик Кандийского танца этого периода – самого древнейшего танца на земле.  Этот танец считается одним из 
												главных зрелищ острова, которое с гордостью демонстрируется на всех фестивалях и важных праздниках.
							        </p>
							        <a className="btn btn-light btn-xl" href="#services">В каталог</a>                   
                  </div>
              </div>
          </div>
      </div>    
    </Carousel>
	)
}
export default AsortmentsSlider;