import React, {useState, useEffect} from 'react'
import Sidebar from '../components/Sidebar.Shop'
import SaleOffCarousel from '../components/SaleOffCarousel'
import FilterShop from '../components/FilterShop'
import HeroSection from '../components/HeroSection'
import BreadcrumbSection from '../components/Breadcrumb'
import { useParams } from 'react-router-dom'
import { useGetAllProductsQuery } from '../redux/api/productApi';
import { useGetAllCategoriesQuery } from '../redux/api/categoryApi'
import useDebounce from '../hooks/debounce'
const Shop = () => {

    const {slug} = useParams();
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);


    const debouncedSearch = useDebounce(search, 500); // 500ms debounce delay

    const {data, isLoading, error} = useGetAllProductsQuery({
        search: debouncedSearch,
        sort,
        category,
        minPrice,
        maxPrice,
        page,
        limit
    })


    useEffect(() => {
        if(data)
        {
            const newData = data.products.filter((item)=> item.category.slug === slug)
            setProducts(newData)
        }
    }, [data, isLoading, error, debouncedSearch, sort, category, minPrice, maxPrice, page, limit])

   

  return (
    <>
  <HeroSection/>
  <BreadcrumbSection pageName={'Shop'}/>
    <section className="product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-5">
                    <Sidebar/>
                </div>
                <div className="col-lg-9 col-md-7">
                    
                    <FilterShop products={products}/>
                    <div className="product__pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#"><i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Shop