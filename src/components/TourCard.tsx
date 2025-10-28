import { Clock, IndianRupee, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TourCardProps {
  id: string;
  title: string;
  image: string;
  duration: string;
  priceStarting: number;
  seatsLeft: number;
  highlights: string[];
}

export function TourCard({ id, title, image, duration, priceStarting, seatsLeft, highlights }: TourCardProps) {
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(`Hi! I'm interested in the tour: ${title}`);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      {/* Image */}
      <Link to={`/tour/${id}`} className="block relative aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {seatsLeft <= 5 && seatsLeft > 0 && (
          <Badge className="absolute top-3 right-3 bg-orange-500">
            Only {seatsLeft} seats left!
          </Badge>
        )}
        {seatsLeft === 0 && (
          <Badge className="absolute top-3 right-3 bg-red-500">
            Sold Out
          </Badge>
        )}
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link to={`/tour/${id}`}>
          <h3 className="mb-3 hover:text-emerald-600 transition-colors">
            {title}
          </h3>
        </Link>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {highlights.slice(0, 3).map((highlight, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {highlight}
            </Badge>
          ))}
        </div>

        {/* Info */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{seatsLeft} left</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-4">
          <IndianRupee size={16} className="text-gray-600" />
          <span className="text-gray-600">Starting from</span>
        </div>
        <div className="flex items-baseline gap-1 mb-4">
          <IndianRupee size={20} />
          <span>{priceStarting.toLocaleString('en-IN')}</span>
          <span className="text-sm text-gray-600">/ person</span>
        </div>

        {/* CTAs */}
        <div className="flex gap-2">
          <Link to={`/tour/${id}`} className="flex-1">
            <Button className="w-full">
              Reserve ₹49
            </Button>
          </Link>
          <Button
            variant="outline"
            className="flex-1"
            onClick={handleWhatsApp}
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
