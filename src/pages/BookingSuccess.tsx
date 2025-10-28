import { useLocation, Link, Navigate } from "react-router-dom";
import { CheckCircle2, Phone, Mail, Download, Home, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Separator } from "../components/ui/separator";

export function BookingSuccess() {
  const location = useLocation();
  const state = location.state as {
    bookingType: 'reservation' | 'whatsapp';
    tour: string;
    date?: string;
    guests?: number;
    totalPrice?: number;
    bookingNumber?: string;
  } | null;

  if (!state) {
    return <Navigate to="/tours" replace />;
  }

  const { bookingType, tour, date, guests, totalPrice, bookingNumber } = state;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I just made a booking (Ref: ${bookingNumber}). Looking forward to the tour!`
    );
    window.open(`https://wa.me/918119827173?text=${message}`, '_blank');
  };

  const handleDownloadTicket = () => {
    // Simulate e-ticket download
    alert('E-ticket download functionality will be implemented after payment confirmation.');
  };

  if (bookingType === 'whatsapp') {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-4">
              <MessageCircle size={40} />
            </div>
            <h1 className="mb-4">Message Sent!</h1>
            <p className="text-gray-600">
              Your inquiry has been sent via WhatsApp
            </p>
          </div>

          <Card className="p-6 mb-6">
            <h2 className="mb-4">Tour Details</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Tour:</span>
                <span>{tour}</span>
              </div>
            </div>
          </Card>

          <Alert className="mb-6">
            <MessageCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>What happens next?</strong>
              <ul className="mt-2 space-y-1 text-sm">
                <li>✓ Our team will respond on WhatsApp within 30 minutes</li>
                <li>✓ We'll discuss your preferences and answer questions</li>
                <li>✓ You can confirm the booking after discussing details</li>
                <li>✓ Payment can be made via multiple options</li>
              </ul>
            </AlertDescription>
          </Alert>

          <Card className="p-6 mb-6">
            <h3 className="mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gray-600" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <a href="tel:+918119827173" className="text-blue-600 hover:underline">
                    +91 81198 27173
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gray-600" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a href="mailto:info@tourmitra.com" className="text-blue-600 hover:underline">
                    info@neone.com
                  </a>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/" className="flex-1">
              <Button variant="outline" className="w-full">
                <Home className="mr-2" size={18} />
                Back to Home
              </Button>
            </Link>
            <Link to="/tours" className="flex-1">
              <Button className="w-full">
                Browse More Tours
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Reservation booking success
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-4">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="mb-4">Booking Reserved!</h1>
          <p className="text-gray-600">
            Your spot has been reserved with ₹49
          </p>
        </div>

        {/* Booking Details */}
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2>Booking Details</h2>
            <Badge className="bg-blue-600">Provisional</Badge>
          </div>
          
          <div className="space-y-3 text-sm mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Booking Reference:</span>
              <span className="font-mono">{bookingNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tour:</span>
              <span>{tour}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span>{date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Guests:</span>
              <span>{guests}</span>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Tour Price:</span>
              <span>₹{totalPrice?.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Paid (Reservation):</span>
              <span>₹49</span>
            </div>
            <div className="flex justify-between">
              <span>Remaining Amount:</span>
              <span>₹{((totalPrice || 0) - 49).toLocaleString('en-IN')}</span>
            </div>
          </div>
        </Card>

        {/* Next Steps */}
        <Alert className="mb-6">
          <AlertDescription>
            <strong className="block mb-2">What happens next?</strong>
            <ol className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-blue-600">1.</span>
                <span>Our team will call you within <strong>2-4 hours</strong> to confirm your booking</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">2.</span>
                <span>We'll discuss pickup location, special requirements, and answer any questions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">3.</span>
                <span>Pay the remaining amount <strong>₹{((totalPrice || 0) - 49).toLocaleString('en-IN')}</strong> before the tour date</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">4.</span>
                <span>Receive your confirmed e-ticket and tour details</span>
              </li>
            </ol>
          </AlertDescription>
        </Alert>

        {/* Contact Card */}
        <Card className="p-6 mb-6">
          <h3 className="mb-4">Operator Contact</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-gray-600" />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <a href="tel:+918119827173" className="text-blue-600 hover:underline">
                  +91 81198 27173
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle size={18} className="text-gray-600" />
              <div>
                <p className="text-sm text-gray-600">WhatsApp</p>
                <button onClick={handleWhatsApp} className="text-blue-600 hover:underline">
                  Chat with us
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-gray-600" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <a href="mailto:info@tourmitra.com" className="text-blue-600 hover:underline">
                  info@tourmitra.com
                </a>
              </div>
            </div>
          </div>
        </Card>

        {/* Cancellation Policy */}
        <Alert className="mb-6" variant="default">
          <AlertDescription className="text-sm">
            <strong>Cancellation Policy:</strong> You can cancel within <strong>2 hours</strong> of booking for a full refund of ₹49. After confirmation, cancellation terms vary by tour.
          </AlertDescription>
        </Alert>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" onClick={handleDownloadTicket} className="flex-1">
            <Download className="mr-2" size={18} />
            Download Receipt
          </Button>
          <Link to="/" className="flex-1">
            <Button className="w-full">
              <Home className="mr-2" size={18} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs ${className}`}>
      {children}
    </span>
  );
}
