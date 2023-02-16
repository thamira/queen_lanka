import React, { useEffect} from 'react';
import Navigation from './../components/navigation';
import {useNavigate, useParams } from "react-router-dom";

const Catalog = () => {
	const navigate = useNavigate();
	const {type} = useParams();



	const getBackground = () => {
		switch(type){
			case 'green_tea':
				return 'bg-greentea'
				break;
			case 'pekoe':
				return'bg-pekoe'
				break;
			case 'earl_grey':
				return 'bg-earl_grey'
				break;
			case 'opa':
				return 'bg-opa'	
				break;
			case 'lankan_breakfast':
				return 'bg-lankan_breakfast'			
				break;													
		}		
	}
	return (
      <div className={["page-section bg-primary bg-breakfast catalog-page", getBackground()].join(' ')}>
      					<Navigation />
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
                  </div>
              </div>
          </div>
      </div>
	)
}
export default Catalog;