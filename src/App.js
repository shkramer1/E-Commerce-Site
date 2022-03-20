import React, { useState, useEffect } from 'react';


import { commerce } from './lib/commerce';
import { Home, Products, Navbar, Cart, Checkout, GuidedJournals, Printables, HolidayBooks, AboutUs, ContactUs } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    const [products, setProducts] = useState([]);;
    const [guidedJournals, setGuidedJournals] = useState([])
    const [printables, setPrintables] = useState([]);
    const [holidayBooks, setHolidayBooks] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();


        setProducts(data);
    }

    const fetchGuidedJournals = async () => {
        const { data } = await commerce.products.list({ category_slug: 'guided-journals' });

        setGuidedJournals(data);
    }

    const fetchPrintables = async () => {
        const { data } = await commerce.products.list({ category_slug: 'printables' });

        setPrintables(data);
    }

    const fetchHolidayBooks = async () => {
        const { data } = await commerce.products.list({ category_slug: 'holiday-activity-books' });
        console.log(data);
        setHolidayBooks(data);
    }

    const fetchCart = async () => {

        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);

        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });
        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);

    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);
            refreshCart();

        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchGuidedJournals();
        fetchPrintables();
        fetchHolidayBooks();
        fetchCart();
    }, [])

    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items}></Navbar>
                <Routes>
                    <Route exact path="/"
                        element={<Home></Home>}>
                    </Route>

                    <Route exact path="/products"
                        element={<Products products={products} onAddToCart={handleAddToCart}></Products>}>
                    </Route>
                    <Route exact path="/guidedjournals"
                        element={<GuidedJournals guidedJournals={guidedJournals} onAddToCart={handleAddToCart}></GuidedJournals>}>
                    </Route>
                    <Route exact path="/printables"
                        element={<Printables printables={printables} onAddToCart={handleAddToCart}></Printables>}>
                    </Route>
                    <Route exact path="/holidayactivitybooks"
                        element={<HolidayBooks holidayBooks={holidayBooks} onAddToCart={handleAddToCart}></HolidayBooks>}>
                    </Route>
                    <Route exact path="/aboutus"
                        element={<AboutUs></AboutUs>}>
                    </Route>

                    <Route exact path="/contactus"
                        element={<ContactUs></ContactUs>}>
                    </Route>

                    <Route exact path="/cart"
                        element={<Cart cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        />
                        }>
                    </Route>
                    <Route exact path="/checkout"
                        element={<Checkout cart={cart}
                            order={order}
                            onCaptureCheckout={handleCaptureCheckout}
                            error={errorMessage}
                        />}>

                    </Route>

                </Routes>
            </div>
        </Router>
    )
}

export default App;