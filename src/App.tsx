import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ToursListing } from "./pages/ToursListing";
import { TourDetail } from "./pages/TourDetail";
import { BookingSuccess } from "./pages/BookingSuccess";
import { Contact } from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
            <Route path="/tours" element={<ToursListing />} />
            <Route path="/tour/:id" element={<TourDetail />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
