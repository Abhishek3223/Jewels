import React from 'react'
import './collection.css'


const ProductCard = () => {
    return (
        <div class="col-md-3">

            <div class="product-single-card">
                <div class="product-top-area">
                    <div class="product-discount">
                        $55.00
                    </div>

                    <div class="product-img">
                        <div class="first-view">
                            <img src="./Rectangle20.png" alt="logo" class="img-fluid" onerror="this.src='https://i.ibb.co/qpB9ZCZ/placeholder.png'" />
                        </div>
                        <div class="hover-view">
                            <img src="./assets/img/placeholder/dummy.jpg" alt="logo" class="img-fluid" onerror="this.src='https://i.ibb.co/qpB9ZCZ/placeholder.png'" />
                        </div>
                    </div>
                    <div class="sideicons">
                        <button class="sideicons-btn">
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>
                        <button class="sideicons-btn">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                        <button class="sideicons-btn">
                            <i class="fa-solid fa-heart"></i>
                        </button>
                        <button class="sideicons-btn">
                            <i class="fa-solid fa-shuffle"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h6 class="product-category"><a href="#">Earring</a></h6>
                    <h6 class="product-title text-truncate"><a href="#">Sophisticated Pearl Drop Earring</a></h6>
                    <div class="d-flex align-items-center">
                        <div class="review-star me-1">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>

                        <span class="review-count">(13)</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center py-2">
                        <div class="old-price">
                            $50.45
                        </div>
                        <div class="new-price">
                            $35.053455555
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

const collections = () => {
    return (
        <div className='Collection-cont'>

            <div className='search-cont1'>

                <div class="search1">
                    <input type="text" placeholder="Search for it .." />
                    <div class="button-src1">
                        <button>Search</button>
                    </div>
                </div>

            </div>
            <div className='jewel-cateogry'>
                <p>
                    All Jewellery | 27689 DESIGNS

                </p>
            </div>
            <div className="product-cont">



                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>


        </div>
    )
}

export default collections