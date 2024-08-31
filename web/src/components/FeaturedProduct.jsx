import React, { useEffect, useState } from 'react'
import { FeaturedProductData } from '../Data/FeaturedProduct'
import { useGetAllProductsQuery } from '../redux/api/productApi'
import useDebounce from '../hooks/debounce'

const FeaturedProduct = () => {

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
            setProducts(data.products)
    }, [data, isLoading, error, debouncedSearch, sort, category, minPrice, maxPrice, page, limit])

    return (
        <section className="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Featured Product</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row featured__filter">
                    <div>
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Sort Dropdown */}
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="">Sort By</option>
                <option value="price:asc">Price: Low to High</option>
                <option value="price:desc">Price: High to Low</option>
                <option value="title:asc">Name: A to Z</option>
                <option value="title:desc">Name: Z to A</option>
            </select>

            {/* Category Filter */}
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            {/* Price Filters */}
            <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
            />

            {/* Pagination Controls */}
            <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Previous</button>
            <span>Page {page}</span>
            <button onClick={() => setPage(page + 1)}>Next</button>

        </div>
                        {
                            products?.map((item, idx) => {
                                return  <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" key={idx}>
                                        <div className="featured__item">
                                            <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">
                                                <img src={item.images[0].url} />
                                                <ul className="featured__item__pic__hover">
                                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="featured__item__text">
                                                <h6><a href="#">{item.title}</a></h6>
                                                <h5>{item.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                            })
                        }
                    </div>
                </div>
            </section>
    )
}

export default FeaturedProduct
