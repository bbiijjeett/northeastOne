import { Link, useSearchParams } from "react-router-dom";
import { Award, Shield, Users, Star, ArrowRight, MapPin, Calendar, TrendingUp, Heart, Mountain, Compass } from "lucide-react";
import { Button } from "../components/ui/button";
import { SearchBar } from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { tours, featuredTourIds } from "../data/tours";
import { TourCard } from "../components/TourCard";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { useState, useEffect } from "react";

export function Home() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const handleSearch = (query: string, date: Date | undefined) => {
    if (!query && !date) {
      // Do nothing if search is empty
      return;
    }

    const params = new URLSearchParams();
    if (query) params.set("search", query);
    if (date) params.set("date", date.toISOString());

    // Navigate to tours page with params
    navigate(`/tours?${params.toString()}`);
  };


  const featuredTours = tours.filter(tour => featuredTourIds.includes(tour.id));

  const stats = [
    { icon: Users, label: "Happy Travelers", value: "10,000+", color: "bg-emerald-100 text-emerald-600" },
    { icon: Star, label: "Average Rating", value: "4.8/5", color: "bg-amber-100 text-amber-600" },
    { icon: Mountain, label: "Destinations", value: "50+", color: "bg-green-100 text-green-700" },
    { icon: Shield, label: "Safety First", value: "100%", color: "bg-teal-100 text-teal-600" }
  ];

  const highlights = [
    {
      icon: Compass,
      title: "Northeast India Specialists",
      description: "Authentic experiences in Meghalaya, Sikkim, Assam & Arunachal Pradesh"
    },
    {
      icon: Heart,
      title: "Local Connections",
      description: "Stay with locals, support communities, experience real culture"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Fully insured tours with experienced guides and safety protocols"
    }
  ];

  return (
    <div>
      {/* Hero Section - Enhanced */}
      {/* <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950 overflow-hidden">
       */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1626761627604-f27d98885f4b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Northeast India Mountains"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-green-900/50 to-transparent"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-6 animate-fade-in">
              <Award size={20} className="text-emerald-400" />
              <span className="text-sm text-white">Local operator since 2015 · 10+ years of excellence</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-white mb-6 leading-tight">
              Discover the Magic of <br />
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                Northeast India
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-2xl leading-relaxed">
              Experience living root bridges, pristine mountains, wildlife safaris, and authentic local culture. 
              <span className="block mt-2 text-lg text-emerald-200">Reserve your adventure for just ₹49 today!</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/tours">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white shadow-xl px-8">
                  Explore Tours
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <a href="#featured-tours">
                <Button size="lg" variant="outline" className="border-2 border-white/30 hover:text-white hover:bg-white/10 backdrop-blur-sm">
                  Top Choices
                  <TrendingUp className="ml-2" size={20} />
                </Button>
              </a>
            </div>

            {/* Search Bar */}
            <div className="max-w-3xl">
              <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="py-8 bg-gradient-to-r from-emerald-600 to-green-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="flex items-start gap-4 text-white">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">{highlight.title}</h3>
                    <p className="text-sm text-emerald-100">{highlight.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.color} mb-4 shadow-lg`}>
                    <Icon size={28} />
                  </div>
                  <div className="mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section id="featured-tours" className="py-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-600">Top Choices</Badge>
            <h2 className="mb-4">Northeast India's Best Experiences</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Handpicked adventures showcasing the untouched beauty and rich culture of Northeast India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredTours.map((tour) => (
              <TourCard
                key={tour.id}
                id={tour.id}
                title={tour.title}
                image={tour.image}
                duration={tour.duration}
                priceStarting={tour.priceStarting}
                seatsLeft={tour.seatsLeft}
                highlights={tour.highlights}
              />
            ))}
          </div>

          <div className="text-center">
            <Link to="/tours">
              <Button size="lg" variant="outline" className="gap-2">
                View All Tours
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Northeast India Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-600">Why Northeast India?</Badge>
              <h2 className="mb-6">India's Best Kept Secret</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Northeast India is a treasure trove of natural beauty, diverse cultures, and unique experiences that remain largely unexplored by mainstream tourism.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-1">Untouched Natural Beauty</h3>
                      <p className="text-sm">From living root bridges to pristine lakes, landscapes you won't find anywhere else</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-1">Rich Cultural Heritage</h3>
                      <p className="text-sm">Experience diverse tribes, traditions, and festivals unique to this region</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-1">Adventure & Wildlife</h3>
                      <p className="text-sm">Trek through rainforests, spot one-horned rhinos, explore mystical mountains</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/tours" className="inline-block mt-6">
                <Button size="lg" className="gap-2">
                  Start Your Journey
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1639601772397-6f4f58e5ac98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWdoYWxheWElMjBsaXZpbmclMjByb290JTIwYnJpZGdlfGVufDF8fHx8MTc2MTY2ODAwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Living Root Bridge"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1615472910606-9d4f7291944f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3NhbSUyMHRlYSUyMGdhcmRlbnxlbnwxfHx8fDE3NjE2MzgwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Tea Gardens"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1624725412168-a8e69d4f7b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWtraW0lMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjE2NjgwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Sikkim Mountains"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1675296098616-53e3d4a1dd57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXppcmFuZ2ElMjBuYXRpb25hbCUyMHBhcmt8ZW58MXx8fHwxNzYxNjY4MDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Wildlife"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Simple, transparent booking in 3 easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2 hover:border-emerald-200">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin size={32} />
              </div>
              <h3 className="mb-3">Choose Your Adventure</h3>
              <p className="text-gray-600">
                Browse our curated collection of Northeast India's most authentic experiences
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2 hover:border-emerald-200">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Calendar size={32} />
              </div>
              <h3 className="mb-3">Reserve for ₹49</h3>
              <p className="text-gray-600">
                Hold your spot with a small deposit or contact us via WhatsApp for instant support
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2 hover:border-emerald-200">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star size={32} />
              </div>
              <h3 className="mb-3">Confirm & Explore</h3>
              <p className="text-gray-600">
                We'll call within 2-4 hours to confirm. Pay remaining before tour and embark on your journey!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Northeast One?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="text-emerald-600 mb-4" size={32} />
              <h3 className="mb-2">Safe & Secure</h3>
              <p className="text-sm text-gray-600">
                Full refund on cancellation within policy. Your safety is our priority with trained guides.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Award className="text-emerald-600 mb-4" size={32} />
              <h3 className="mb-2">10+ Years Experience</h3>
              <p className="text-sm text-gray-600">
                Trusted local operator since 2015 with thousands of satisfied customers across India.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="text-emerald-600 mb-4" size={32} />
              <h3 className="mb-2">Expert Local Guides</h3>
              <p className="text-sm text-gray-600">
                Professional, knowledgeable local guides who bring destinations and cultures to life.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Star className="text-emerald-600 mb-4" size={32} />
              <h3 className="mb-2">Best Value</h3>
              <p className="text-sm text-gray-600">
                Competitive prices with no hidden costs. What you see is exactly what you pay.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20  text-white relative overflow-hidden "
      >

            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1668437824006-1be44600774b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                backgroundSize: "cover",
                backgroundPosition: 'center',
                opacity: 0.85, // adjust visibility
              }}
            ></div>


        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* <h2 className="mb-4 text-white">Ready to Explore Northeast India?</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Browse our tours and reserve your spot with just ₹49 today. Your adventure awaits!
          </p> */}
          <h2 className="mb-4 text-white font-extrabold text-4xl md:text-5xl ">
            Ready to Explore Northeast India?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-emerald-50 font-semibold max-w-2xl mx-auto ">
            Browse our tours and reserve your spot with just ₹49 today. Your adventure awaits!
          </p>
          <Link to="/tours">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 shadow-2xl px-8">
              Explore All Tours
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
