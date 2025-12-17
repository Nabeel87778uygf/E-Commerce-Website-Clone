import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BestSellingitems from './Components/BestSellingitems';
import CategoriesSection from './Components/CategoriesSection';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Productspage from './Productspage';
import CategoriesCard from './Components/CategoriesCard';
import LastIconSection from './Components/LastIconsSection';
import Footer from './Components/Footer';
import ProductDetailPage from './Components/ProductDetailpage';
import SignupPage from './Components/SignupPage';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={

          <>
            <HeroSection />
            <Productspage />
            <CategoriesSection />
            <BestSellingitems />
            <CategoriesCard />
            <LastIconSection />
            {/* <SignupPage /> */}
            {/* if you want to show anything on the homepage they will show on homepage */}
          </>
        } />
        <Route path="/products" element={<Productspage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;