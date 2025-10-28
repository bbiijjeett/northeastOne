import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Users, IndianRupee, MessageCircle, CreditCard } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Calendar as CalendarComponent } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Alert, AlertDescription } from "./ui/alert";
import { Tour } from "../data/tours";

interface BookingWidgetProps {
  tour: Tour;
}

export function BookingWidget({ tour }: BookingWidgetProps) {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedAvailability = selectedDate
    ? tour.availability.find(
        (slot) => slot.date.split('T')[0] === format(selectedDate, 'yyyy-MM-dd')
      )
    : null;

  const isDateAvailable = selectedAvailability?.available && (selectedAvailability?.seatsLeft || 0) >= guests;
  const totalPrice = tour.perPersonPrice * guests;

  const handleReserve = () => {
    if (!selectedDate || !isDateAvailable) {
      return;
    }

    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      navigate('/booking-success', {
        state: {
          bookingType: 'reservation',
          tour: tour.title,
          date: format(selectedDate, 'PPP'),
          guests,
          totalPrice,
          bookingNumber: `BK${Date.now().toString().slice(-8)}`
        }
      });
    }, 1000);
  };

  const handleWhatsApp = () => {
    const dateStr = selectedDate ? format(selectedDate, 'PPP') : 'Not selected';
    const message = encodeURIComponent(
      `Hi! I'd like to book:\n\nTour: ${tour.title}\nDate: ${dateStr}\nGuests: ${guests}\n\nPlease share more details.`
    );
    window.open(`https://wa.me/918119827173?text=${message}`, '_blank');
    
    // Show success message
    setTimeout(() => {
      navigate('/booking-success', {
        state: {
          bookingType: 'whatsapp',
          tour: tour.title
        }
      });
    }, 500);
  };

  const availableDates = tour.availability
    .filter(slot => slot.available && slot.seatsLeft > 0)
    .map(slot => new Date(slot.date));

  return (
    <Card className="p-6 sticky top-20">
      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-2">
          <IndianRupee size={24} />
          <span className="text-gray-900">{tour.perPersonPrice.toLocaleString('en-IN')}</span>
          <span className="text-sm text-gray-600">/ person</span>
        </div>
        <p className="text-sm text-gray-600">Reserve now for just ₹49</p>
      </div>

      {/* Date Selection */}
      <div className="mb-4">
        <Label className="mb-2 block">Select Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="mr-2" size={16} />
              {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => {
                const dateStr = format(date, 'yyyy-MM-dd');
                const slot = tour.availability.find(s => s.date.split('T')[0] === dateStr);
                return date < new Date() || !slot?.available || (slot?.seatsLeft || 0) === 0;
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        {selectedDate && selectedAvailability && (
          <p className="text-xs text-gray-600 mt-1">
            {selectedAvailability.seatsLeft} seats available
          </p>
        )}
      </div>

      {/* Guests Selection */}
      <div className="mb-6">
        <Label className="mb-2 block">Number of Guests</Label>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setGuests(Math.max(1, guests - 1))}
            disabled={guests <= 1}
          >
            -
          </Button>
          <div className="flex items-center gap-2 flex-1 justify-center">
            <Users size={16} />
            <span>{guests}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setGuests(Math.min(selectedAvailability?.seatsLeft || tour.maxCapacity, guests + 1))}
            disabled={guests >= (selectedAvailability?.seatsLeft || tour.maxCapacity)}
          >
            +
          </Button>
        </div>
      </div>

      {/* Total Price */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">
            ₹{tour.perPersonPrice.toLocaleString('en-IN')} × {guests} guest{guests > 1 ? 's' : ''}
          </span>
          <span className="text-gray-900">₹{totalPrice.toLocaleString('en-IN')}</span>
        </div>
        <div className="border-t border-gray-200 pt-2 mt-2">
          <div className="flex justify-between items-center">
            <span>Total</span>
            <span className="text-gray-900">₹{totalPrice.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      {/* Booking Options */}
      {selectedDate && !isDateAvailable && (
        <Alert className="mb-4">
          <AlertDescription>
            Not enough seats available for this date. Please select another date or reduce guests.
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-3">
        <Button
          className="w-full disabled"
          size="lg"
          // disabled={!selectedDate || !isDateAvailable || isProcessing}
          onClick={handleReserve}
          disabled
        >
          <CreditCard className="mr-2" size={18} />
          {isProcessing ? 'Processing...' : 'Reserve for ₹49'}
        </Button>

        <Button
          variant="outline"
          className="w-full"
          size="lg"
          onClick={handleWhatsApp}
        >
          <MessageCircle className="mr-2" size={18} />
          Contact on WhatsApp
        </Button>
      </div>

      {/* Cancellation Policy */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>Cancellation Policy:</strong> {tour.cancellationPolicy}
        </p>
      </div>

      {/* What ₹49 Gets You */}
      <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
        <p className="text-sm mb-2">
          <strong>What ₹49 reservation includes:</strong>
        </p>
        <ul className="text-xs text-gray-700 space-y-1">
          <li>✓ Hold your spot for this tour</li>
          <li>✓ We'll call you within 24 hours</li>
          <li>✓ Confirm details and preferences</li>
          <li>✓ Pay remaining amount before tour</li>
          <li>✓ Full refund if cancelled within 24 hours</li>
        </ul>
      </div>
    </Card>
  );
}
