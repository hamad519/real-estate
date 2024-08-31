import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useDebounce from '../hooks/debounce';
const ProductListingDemo = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);


    const debouncedSearch = useDebounce(search, 500); // 500ms debounce delay


    useEffect(() => {
        fetchProducts();
    }, [debouncedSearch, sort, category, minPrice, maxPrice, page, limit]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/products/all', {
                params: {
                    search: debouncedSearch,
                    sort,
                    category,
                    minPrice,
                    maxPrice,
                    page,
                    limit
                }
            });
            setProducts(response.data.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // UI elements and event handlers go here

    return (
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

            {/* Products List */}
            <div>
                {products.map(product => (
                    <div key={product._id}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListingDemo;