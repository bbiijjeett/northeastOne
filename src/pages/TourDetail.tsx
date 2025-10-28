import { useParams, Link } from "react-router-dom";
import { tours } from "../data/tours";
import { BookingWidget } from "../components/BookingWidget";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Clock, Users, MapPin, Check, X, Shield, Star } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Alert, AlertDescription } from "../components/ui/alert";

export function TourDetail() {
  const { id } = useParams();
  const tour = tours.find(t => t.id === id);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Tour Not Found</h2>
          <Link to="/tours" className="text-emerald-600 hover:underline">
            Browse all tours
          </Link>
        </div>
      </div>
    );
  }

  const averageRating = tour.reviews.length > 0
    ? (tour.reviews.reduce((acc, review) => acc + review.rating, 0) / tour.reviews.length).toFixed(1)
    : "0";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-emerald-600">Home</Link>
            <span>/</span>
            <Link to="/tours" className="hover:text-emerald-600">Tours</Link>
            <span>/</span>
            <span className="text-gray-900">{tour.title}</span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <ImageWithFallback
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {tour.gallery.slice(0, 4).map((img, index) => (
                <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={img}
                    alt={`${tour.title} - ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Tour Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>{tour.category}</Badge>
                  {tour.seatsLeft <= 5 && tour.seatsLeft > 0 && (
                    <Badge variant="destructive">Only {tour.seatsLeft} seats left!</Badge>
                  )}
                </div>
                
                <h1 className="mb-4">{tour.title}</h1>
                
                <p className="text-gray-600 mb-4">{tour.shortDescription}</p>

                {/* Quick Info */}
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-600" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-gray-600" />
                    <span>Max {tour.maxCapacity} people</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    <span>{averageRating} ({tour.reviews.length} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <Alert>
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  <strong>{tour.totalBookings.toLocaleString()} travelers</strong> have booked this tour
                </AlertDescription>
              </Alert>

              {/* Tabs for Details */}
              <Tabs defaultValue="itinerary" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                  <TabsTrigger value="pickup">Pickup</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                {/* Itinerary Tab */}
                <TabsContent value="itinerary" className="space-y-4 mt-6">
                  {tour.itinerary.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">
                          {item.time}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-1">{item.activity}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                {/* Inclusions Tab */}
                <TabsContent value="inclusions" className="space-y-6 mt-6">
                  <div>
                    <h3 className="mb-4 flex items-center gap-2">
                      <Check className="text-green-600" size={20} />
                      What's Included
                    </h3>
                    <ul className="space-y-2">
                      {tour.inclusions.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="mb-4 flex items-center gap-2">
                      <X className="text-red-600" size={20} />
                      What's Not Included
                    </h3>
                    <ul className="space-y-2">
                      {tour.exclusions.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <X className="text-red-600 flex-shrink-0 mt-0.5" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                {/* Pickup Points Tab */}
                <TabsContent value="pickup" className="space-y-4 mt-6">
                  {tour.pickupPoints.map((point, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                        <div className="flex-1">
                          <h3 className="mb-1">{point.name}</h3>
                          <p className="text-sm text-gray-600 mb-1">{point.location}</p>
                          <p className="text-sm">
                            <strong>Pickup Time:</strong> {point.time}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>

                {/* Reviews Tab */}
                <TabsContent value="reviews" className="space-y-6 mt-6">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-4xl mb-1">{averageRating}</div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < Math.round(Number(averageRating)) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{tour.reviews.length} reviews</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {tour.reviews.map((review, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="mb-1">{review.name}</h3>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={14}
                                  className={i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-xs text-gray-500">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{review.comment}</p>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* Safety Measures */}
              <Card className="p-6">
                <h3 className="mb-4 flex items-center gap-2">
                  <Shield className="text-emerald-600" size={20} />
                  Safety Measures
                </h3>
                <ul className="space-y-2">
                  {tour.safetyMeasures.map((measure, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span>{measure}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Right Column - Booking Widget */}
            <div className="lg:col-span-1">
              <BookingWidget tour={tour} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
