import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/slices/productSlice'
import { Link } from 'react-router-dom'
import { mystore } from '../../store/store'
import { addToCart } from '../../store/slices/cartSlice'

function ShopCategory() {

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
        <div className="main-container">
            <div className="shop-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="breadcrumb rjc2 cool2">
                                <a href="#">Home</a>
                                <span className="separator">/</span>
                                <a href="#">Shop</a>
                                <span className="separator">/</span>Digital
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shop-Left-sidebar">
                                <div className="row">
                                    <div
                                        id="secondary"
                                        className="col-lg-3 col-sm-12 sidebar-category"
                                    >
                                        <aside className="widget widget-product-categories rig">
                                            <h3 className="widget-title">
                                                <span>Categories</span>
                                            </h3>
                                            <div className="widget-content">
                                                <ul className="product-categories">
                                                    <li className="cat-item">
                                                        <a >Man</a>{" "}
                                                        <span className="count">(11)</span>
                                                    </li>
                                                    <li className="cat-item current-cat cat-parent">
                                                        <a >Woman</a>{" "}
                                                        <span className="count">(9)</span>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                        </aside>


                                    </div>
                                    <div className="col-lg-9 col-sm-12">
                                        <div className="shop-sidebar left-sidebar">
                                            <div className="toolbar">
                                                <div className="view-mode nav" id="myTab">
                                                    <button
                                                        className="active"
                                                        id="grid-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#grid-tab-pane"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="grid-tab-pane"
                                                        aria-selected="true"
                                                    >
                                                        <i className="fa fa-th-large" />
                                                        Grid
                                                    </button>
                                                    <button
                                                        id="list-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#list-tab-pane"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="list-tab-pane"
                                                        aria-selected="true"
                                                    >
                                                        <i className="fa fa-th-list" />
                                                        List
                                                    </button>
                                                </div>
                                                <p className="result-count">Showing 1–9 of 20 results</p>
                                                <form className="ordering hidden-xs" method="get">
                                                    <div className="orderby-wrapper">
                                                        <label>Sort By</label>
                                                        <select name="orderby" className="orderby">
                                                            <option value="menu_order">Default sorting</option>
                                                            <option value="popularity" selected="selected">
                                                                Sort by popularity
                                                            </option>
                                                            <option value="rating">Sort by average rating</option>
                                                            <option value="date">Sort by newness</option>
                                                            <option value="price">
                                                                Sort by price: low to high
                                                            </option>
                                                            <option value="price-desc">
                                                                Sort by price: high to low
                                                            </option>
                                                        </select>
                                                    </div>
                                                </form>
                                                <div className="clearfix" />
                                            </div>
                                            {/*  tab content start */}
                                            <div id="myTabContent" className="tab-content">
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="grid-tab-pane"
                                                    role="tabpanel"
                                                    aria-labelledby="grid-tab"
                                                    tabIndex={0}
                                                >
                                                    <div className="row shop-products grid-view">

                                                        {
                                                            product && product.map((item, index) => (
                                                                <div className="first item-col col-sm-6 col-md-4">
                                                                    <div className="product-wrapper">
                                                                        <div className="list-col4">
                                                                            <div className="product-image">
                                                                                <Link to={`/product-detail/${item.slug}`} title="Aenean eu tristique">
                                                                                    <img
                                                                                        src={item.image}
                                                                                        alt={11}
                                                                                    />
                                                                                </Link>
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

                                                                                        </div>
                                                                                        <div className="add-to-cart">
                                                                                            <a
                                                                                                href="#"
                                                                                                data-bs-toggle="tooltip"
                                                                                                data-bs-placement="top"
                                                                                                className="button add-to-cart"
                                                                                                title="Add to cart"
                                                                                                onClick={() => addCart(item)}
                                                                                            >
                                                                                                Add to cart
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="clearfix" />
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }

                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="list-tab-pane"
                                                    role="tabpanel"
                                                    aria-labelledby="grid-tab"
                                                    tabIndex={0}
                                                >
                                                    {/* tabpanel #list */}
                                                    <div className="row shop-products list-view">
                                                        <div className="first item-col col-md-12">
                                                            <div className="product-wrapper">
                                                                <span className="onsale">
                                                                    <span className="sale-text">Sale</span>
                                                                </span>
                                                                <div className="row">
                                                                    <div className="list-col4 col-md-4">
                                                                        <div className="product-image">
                                                                            <a href="#" title="Aenean eu tristique">
                                                                                <img
                                                                                    src="images/product/pic-10.jpg"
                                                                                    alt={11}
                                                                                />
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
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="first item-col col-md-12">
                                                            <div className="product-wrapper">
                                                                <span className="onsale">
                                                                    <span className="sale-text">Sale</span>
                                                                </span>
                                                                <div className="row">
                                                                    <div className="list-col4 col-md-4">
                                                                        <div className="product-image">
                                                                            <a href="#" title="Aenean eu tristique">
                                                                                <img
                                                                                    src="images/product/pic-4.jpg"
                                                                                    alt={11}
                                                                                />
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
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="first item-col col-md-12">
                                                            <div className="product-wrapper">
                                                                <span className="onsale">
                                                                    <span className="sale-text">Sale</span>
                                                                </span>
                                                                <div className="row">
                                                                    <div className="list-col4 col-md-4">
                                                                        <div className="product-image">
                                                                            <a href="#" title="Aenean eu tristique">
                                                                                <img
                                                                                    src="images/product/pic-3.jpg"
                                                                                    alt={11}
                                                                                />
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
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="first item-col col-md-12">
                                                            <div className="product-wrapper">
                                                                <div className="row">
                                                                    <div className="list-col4 col-md-4">
                                                                        <div className="product-image">
                                                                            <a href="#" title="Aenean eu tristique">
                                                                                <img
                                                                                    src="images/product/pic-4.jpg"
                                                                                    alt={11}
                                                                                />
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
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end of tab content */}
                                            <div className="clearfix" />
                                        </div>
                                        <div className="pagination res">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="pagination-content">
                                                        <div className="pagination-button">
                                                            <ul className="page-numbers">
                                                                <li>
                                                                    <a href="#" className="prev page-numbers">
                                                                        <i className="fa fa-long-arrow-left" />
                                                                    </a>
                                                                </li>
                                                                <li className="current">
                                                                    <span className="page-numbers current">1</span>
                                                                </li>
                                                                <li>
                                                                    <a href="#">2</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" className="next page-numbers">
                                                                        <i className="fa fa-long-arrow-right" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  modal start  */}

                {
                    product && product.map((item, index) => (
                        <div className="quickview-wrapper open">
                            <div
                                className="modal quick-modal  fade"
                                id="quickview-content"
                                tabIndex={-1}
                                role="dialog"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button
                                                aria-hidden="true"
                                                data-bs-dismiss="modal"
                                                className="close"
                                                type="button"
                                            >
                                                {" "}
                                                <i className="fa fa-times" />
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                                    <div className="product-images">
                                                        <div className="main-image images">
                                                            <img src={item.image} alt="product" />
                                                        </div>
                                                        <div className="modal-product-thumb">
                                                            <div className="quick-thumbnails carousel slick-slider">
                                                                <div className="slick-slide slick-active">
                                                                    <Link to={item.image}>
                                                                        <img src={item.image} alt="product" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 modal-details no-padding">
                                                    <div className="modal-details-inner clearfix">
                                                        <h2 className="title">Aenean sagittis</h2>
                                                        <div className="price-box">
                                                            <p className="price">
                                                                <span className="special-price">
                                                                    <span className="amount">£{item.price}</span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="quick-add-to-cart">
                                                            <form
                                                                className="cart"
                                                                method="post"
                                                                encType="multipart/form-data"
                                                            >
                                                                <div className="quantity">
                                                                    <input
                                                                        step={1}
                                                                        min={1}
                                                                        name="quantity"
                                                                        defaultValue={product.quantity}
                                                                        title="Qty"
                                                                        className="input-text qty text"
                                                                        size={4}
                                                                        type="number"
                                                                    />
                                                                </div>
                                                                <button onClick={() => addCart(item)}
                                                                    type="submit"
                                                                    className="single-add-to-cart button"
                                                                >
                                                                    Add to cart
                                                                </button>
                                                            </form>
                                                        </div>
                                                        <div className="quick-desc">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Nam fringilla augue nec est tristique auctor. Donec non
                                                            est at libero vulputate rutrum. Morbi ornare lectus quis
                                                            justo gravida semper. Nulla tellus mi, vulputate
                                                            adipiscing cursus eu, suscipit id nulla.
                                                        </div>
                                                        <div className="single-product-sharing">
                                                            <h3 className="social-title">Share this product</h3>
                                                            <div className="thumb-social-sharing">
                                                                <ul className="social-icons">
                                                                    <li>
                                                                        <a
                                                                            target="_blank"
                                                                            data-bs-toggle="tooltip"
                                                                            title="Facebook"
                                                                            href="#"
                                                                            className="facebook social-icon"
                                                                        >
                                                                            <i className="fa fa-facebook" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            target="_blank"
                                                                            data-bs-toggle="tooltip"
                                                                            title="Twitter"
                                                                            href="#"
                                                                            className="twitter social-icon"
                                                                        >
                                                                            <i className="fa fa-twitter" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            target="_blank"
                                                                            data-bs-toggle="tooltip"
                                                                            title="pinterest"
                                                                            href="#"
                                                                            className="pinterest social-icon"
                                                                        >
                                                                            <i className="fa fa-pinterest" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            target="_blank"
                                                                            data-bs-toggle="tooltip"
                                                                            title="Google-plus"
                                                                            href="#"
                                                                            className="gplus social-icon"
                                                                        >
                                                                            <i className="fa fa-google-plus" />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            target="_blank"
                                                                            data-bs-toggle="tooltip"
                                                                            title="linkedin"
                                                                            href="#"
                                                                            className="linkedin social-icon"
                                                                        >
                                                                            <i className="fa fa-linkedin" />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {/*   modal end */}
            </div>
            {/* shop content end */}
        </div>

    )
}

export default ShopCategory
