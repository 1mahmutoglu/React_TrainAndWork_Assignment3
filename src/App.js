// import { Modal } from 'reactstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductList from './pages/home/ProductList';
import Slider from './pages/home/Slider';
import ShopCategory from './pages/shop/ShopCategory';
import CustomBlog from './pages/home/CustomBlog';
import CorporateStart from './pages/home/CorporateStart';
import CountDownCarousel from './pages/home/CountDownCarousel';
import SingleProduct from './pages/shop/SingleProduct';
import Cart from './pages/cart/Cart';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import LoginPage from './pages/login/LoginPage';
import WishList from './pages/wishlist/WishList';
import { Route, Routes } from 'react-router-dom';
import CheckOut from './pages/checkout/CheckOut';
import BlogDetail from './pages/blog/BlogDetail';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <Slider />
            <ProductList />
            <CustomBlog />
            <CountDownCarousel />
            <CorporateStart />
          </>
        } />
        <Route path='/shop-category' element={<ShopCategory />} />
        <Route path='/shop-detail/:slug' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login1' element={<LoginPage />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/checkOut' element={<CheckOut />} />
        <Route path='/blog-detail' element={<BlogDetail />} />
      </Routes>

      {/*Shop Page */}
      {/* <SingleProduc />                  Shop Page */}
      {/* <ProductList />                                           Main Page */}
      {/* <CountDownCarousel></CountDownCarousel>                   Main Page */}
      {/* <CorporateStart /></CorporateStart>                         Main Page */}
      {/* <CustomBlog></CustomBlog>                                 Main Page */}
      {/* <Cart></Cart>                                              Cart Page */}
      {/* <Blog></Blog>                                             Blog Page */}
      {/* <Contact></Contact>                                               Contact Page */}
      {/* <LoginPage></LoginPage> */}
      {/* <WishList></WishList> */}

      <Footer />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
