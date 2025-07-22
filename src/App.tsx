import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "@/pages/About";
import NotFound from "./pages/NotFound";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import HomePage from "@/pages/Home";
import ProductListingPage from "@/pages/ProductListing";
import ProductDetailPage from "@/pages/ProductDetail";
import SearchResultsPage from "@/pages/SearchResults";
import CartPage from "@/pages/Cart";
import CheckoutPage from "@/pages/Checkout";
import OrderConfirmationPage from "@/pages/OrderConfirmation";
import LoginSignUpPage from "@/pages/LoginSignUp";
import AccountDashboardPage from "@/pages/AccountDashboard";
import OrderHistoryPage from "@/pages/OrderHistory";
import WishlistPage from "@/pages/Wishlist";
import AddressBookPage from "@/pages/AddressBook";
import PaymentMethodsPage from "@/pages/PaymentMethods";
import ReturnsRefundsPage from "@/pages/ReturnsRefunds";
import AccountSettingsPage from "@/pages/AccountSettings";
import ContactUsPage from "@/pages/ContactUs";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy";
import TermsConditionsPage from "@/pages/TermsConditions";
import ShippingInfoPage from "@/pages/ShippingInfo";
import ReturnPolicyPage from "@/pages/ReturnPolicy";

import FAQsPage from "@/pages/FAQs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          <Route path="/login" element={<LoginSignUpPage />} />
          <Route path="/account" element={<AccountDashboardPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/address-book" element={<AddressBookPage />} />
          <Route path="/payment-methods" element={<PaymentMethodsPage />} />
          <Route path="/returns-refunds" element={<ReturnsRefundsPage />} />
          <Route path="/account-settings" element={<AccountSettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/shipping-info" element={<ShippingInfoPage />} />
          <Route path="/return-policy" element={<ReturnPolicyPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
