import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/slices/productSlice'
import { addToCart } from '../../store/slices/cartSlice'

function ProductList() {



    const { product } = useSelector((mystore) => {
        return {
            product: mystore.products.data,
        }
    })

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])


    const addCart = (item) => {
        dispatch(addToCart(item))
        
    }



    return (
        <section className="products-carousel clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="product-carousel-content res1">
                            <h3>
                                <span>SHOP bags</span>
                            </h3>
                            <p>
                                <a href="#">CLICK HERE TO SEE MORE</a>
                            </p>
                        </div>
                        <div className="columns-4">
                            <div className="shop-products grid-view slick-slider">
                                <div className="row">
                                    {
                                        product && product.map((item, index) => (
                                            <div key={index} className="col-3">
                                                <div className="list-col4">
                                                    <div className="product-image">
                                                        <a href="#" title="Aenean eu tristique">
                                                            <img src={item.image} alt={11} />
                                                        </a>
                                                        <div
                                                            className="quickviewbtn"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#quickview-content"
                                                        >
                                                            <a
                                                                className="detail-link quickview"
                                                                href="#"
                                                                title="quickview"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                            >
                                                                {item.name}
                                                            </a>
                                                        </div>
                                                        <div className="actions">
                                                            <div className="action-buttons">
                                                                <div className="add-to-links">
                                                                    <div className="add-to-wishlist">
                                                                        <a
                                                                            href="#"
                                                                            className="button add-to-wishlist"
                                                                            data-bs-toggle="tooltip"
                                                                            data-bs-placement="top"
                                                                            title="Add to wishlist"
                                                                        >
                                                                            Add to Wishlist
                                                                        </a>
                                                                    </div>
                                                                    <div className="clear" />
                                                                
                                                                </div>
                                                                <di
                                                            v className="add-to-cart">
                                                                    <a
                                                                        style={{ cursor: 'pointer' }}
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        className="button add-to-cart"
                                                                        title="Add to cart"
                                                                        onClick={() => addCart(item)}
                                                                    >
                                                                        Add to cart
                                                                    </a>
                                                                </di>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-col8">
                                                    <div className="gridview">
                                                        <div className="ratings">
                                                            <div
                                                                className="star-rating"
                                                                title="Rated 5.00 out of 5"
                                                            />
                                                        </div>
                                                        <div className="price-box">
                                                            <span className="special-price">
                                                                <span className="amount">£{item.price}</span>
                                                            </span>
                                                        </div>
                                                        <h2 className="product-name">
                                                            <a href="#">Aenean eu tristique</a>
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div className="clearfix" />
                                            </div>
                                        ))
                                    }
                                </div>
                                {/* first slide end */}

                                {/* first slide end */}
                                {/*  2nd row slide */}
                                <div className="first item-col col-xs-12 col-sm-3 slick-slide">
                                    <div className="product-wrapper">
                                        <div className="list-col4">
                                            <div className="product-image">
                                                <a href="#" title="Aenean eu tristique">
                                                    <img src="images/product/pic-8.jpg" alt={11} />
                                                </a>
                                                <div
                                                    className="quickviewbtn"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#quickview-content"
                                                >
                                                    <a
                                                        className="detail-link quickview"
                                                        href="#"
                                                        title="quickview"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                    >
                                                        Quick View
                                                    </a>
                                                </div>
                                                <div className="actions">
                                                    <div className="action-buttons">
                                                        <div className="add-to-links">
                                                            <div className="add-to-wishlist">
                                                                <a
                                                                    href="#"
                                                                    className="button add-to-wishlist"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add to wishlist"
                                                                >
                                                                    Add to Wishlist
                                                                </a>
                                                            </div>
                                                            <div className="clear" />
                                                            <div className="compare-button">
                                                                <a
                                                                    href="#"
                                                                    className="button compare "
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Compare"
                                                                >
                                                                    Compare
                                                                </a>
                                                            </div>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-col8">
                                            <div className="gridview">
                                                <div className="ratings">
                                                    <div
                                                        className="star-rating"
                                                        title="Rated 5.00 out of 5"
                                                    />
                                                </div>
                                                <div className="price-box">
                                                    <span className="special-price">
                                                        <span className="amount">£70.00</span>
                                                    </span>
                                                </div>
                                                <h2 className="product-name">
                                                    <a href="#">Aenean eu tristique</a>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                </div>
                                {/* first slide end */}
                                <div className="first item-col col-xs-12 col-sm-3 slick-slide">
                                    <div className="product-wrapper">
                                        <div className="list-col4">
                                            <div className="product-image">
                                                <a href="#" title="Aenean eu tristique">
                                                    <img src="images/product/pic-3.jpg" alt={11} />
                                                </a>
                                                <div
                                                    className="quickviewbtn"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#quickview-content"
                                                >
                                                    <a
                                                        className="detail-link quickview"
                                                        href="#"
                                                        title="quickview"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                    >
                                                        Quick View
                                                    </a>
                                                </div>
                                                <div className="actions">
                                                    <div className="action-buttons">
                                                        <div className="add-to-links">
                                                            <div className="add-to-wishlist">
                                                                <a
                                                                    href="#"
                                                                    className="button add-to-wishlist"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add to wishlist"
                                                                >
                                                                    Add to Wishlist
                                                                </a>
                                                            </div>
                                                            <div className="clear" />
                                                            <div className="compare-button">
                                                                <a
                                                                    href="#"
                                                                    className="button compare "
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Compare"
                                                                >
                                                                    Compare
                                                                </a>
                                                            </div>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-col8">
                                            <div className="gridview">
                                                <div className="ratings">
                                                    <div
                                                        className="star-rating"
                                                        title="Rated 5.00 out of 5"
                                                    />
                                                </div>
                                                <div className="price-box">
                                                    <span className="special-price">
                                                        <span className="amount">£70.00</span>
                                                    </span>
                                                </div>
                                                <h2 className="product-name">
                                                    <a href="#">Aenean eu tristique</a>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                </div>
                                {/* first slide end */}
                                <div className="first item-col col-xs-12 col-sm-3 slick-slide">
                                    <div className="product-wrapper">
                                        <div className="list-col4">
                                            <div className="product-image">
                                                <a href="#" title="Aenean eu tristique">
                                                    <img src="images/product/pic-7.jpg" alt={11} />
                                                </a>
                                                <div
                                                    className="quickviewbtn"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#quickview-content"
                                                >
                                                    <a
                                                        className="detail-link quickview"
                                                        href="#"
                                                        title="quickview"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                    >
                                                        Quick View
                                                    </a>
                                                </div>
                                                <div className="actions">
                                                    <div className="action-buttons">
                                                        <div className="add-to-links">
                                                            <div className="add-to-wishlist">
                                                                <a
                                                                    href="#"
                                                                    className="button add-to-wishlist"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add to wishlist"
                                                                >
                                                                    Add to Wishlist
                                                                </a>
                                                            </div>
                                                            <div className="clear" />
                                                            <div className="compare-button">
                                                                <a
                                                                    href="#"
                                                                    className="button compare "
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Compare"
                                                                >
                                                                    Compare
                                                                </a>
                                                            </div>
                                                        </div>
                                                  
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-col8">
                                            <div className="gridview">
                                                <div className="ratings">
                                                    <div
                                                        className="star-rating"
                                                        title="Rated 5.00 out of 5"
                                                    />
                                                </div>
                                                <div className="price-box">
                                                    <span className="special-price">
                                                        <span className="amount">£75.00</span>
                                                    </span>
                                                </div>
                                                <h2 className="product-name">
                                                    <a href="#">Aenean eu tristique</a>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                </div>
                                {/* first slide end */}
                                <div className="first item-col col-xs-12 col-sm-3 slick-slide">
                                    <div className="product-wrapper">
                                        <div className="list-col4">
                                            <div className="product-image">
                                                <a href="#" title="Aenean eu tristique">
                                                    <img src="images/product/pic-10.jpg" alt={11} />
                                                </a>
                                                <div
                                                    className="quickviewbtn"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#quickview-content"
                                                >
                                                    <a
                                                        className="detail-link quickview"
                                                        href="#"
                                                        title="quickview"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                    >
                                                        Quick View
                                                    </a>
                                                </div>
                                                <div className="actions">
                                                    <div className="action-buttons">
                                                        <div className="add-to-links">
                                                            <div className="add-to-wishlist">
                                                                <a
                                                                    href="#"
                                                                    className="button add-to-wishlist"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add to wishlist"
                                                                >
                                                                    Add to Wishlist
                                                                </a>
                                                            </div>
                                                            <div className="clear" />
                                                            <div className="compare-button">
                                                                <a
                                                                    href="#"
                                                                    className="button compare "
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Compare"
                                                                >
                                                                    Compare
                                                                </a>
                                                            </div>
                                                        </div>
                                                     
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-col8">
                                            <div className="gridview">
                                                <div className="ratings">
                                                    <div
                                                        className="star-rating"
                                                        title="Rated 5.00 out of 5"
                                                    />
                                                </div>
                                                <div className="price-box">
                                                    <span className="special-price">
                                                        <span className="amount">£85.00</span>
                                                    </span>
                                                </div>
                                                <h2 className="product-name">
                                                    <a href="#">Aenean eu tristique</a>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                </div>
                                {/* first slide end */}
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="bottom-space2 tnm hidden-smd-none d-md-block" />
            </div>
        </section>

    )
}

export default ProductList
