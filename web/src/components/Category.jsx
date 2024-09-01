import React, {useState, useEffect} from 'react';
import { useGetAllCategoriesQuery } from '../redux/api/categoryApi';
import { Link } from 'react-router-dom';
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items:4
};
const Category = () => {

  const {data, isLoading} = useGetAllCategoriesQuery();
 

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if(data){
      setCategories(data)
    }
  }, [data, isLoading])
  
  return (
    <div>
      <section className="categories">
        <div className="container">
          <div className="row">
          <TinySlider settings={settings}>
              {
              categories.map(category => (
                <div key={category._id} className="col-lg-3">
                  <div className="categories__item set-bg" data-setbg={category.image.url}>
                    <img src={category.image.url} alt={category.name}/>
                    <Link to={`/category/${category.slug}`}><h5>{category.name}</h5></Link>
                  </div>
                </div>
              ))
              }
              </TinySlider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;