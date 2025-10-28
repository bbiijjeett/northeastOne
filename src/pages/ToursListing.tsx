import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { tours, categories } from "../data/tours";
import { TourCard } from "../components/TourCard";
import { SearchBar } from "../components/SearchBar";
import { Button } from "../components/ui/button";

export function ToursListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredTours, setFilteredTours] = useState(tours);

  // useEffect(() => {
  //   const searchQuery = searchParams.get('search')?.toLowerCase() || '';
  //   const dateParam = searchParams.get('date');
    
  //   let filtered = tours;

  //   // Filter by category
  //   if (selectedCategory !== "All") {
  //     filtered = filtered.filter(tour => tour.category === selectedCategory);
  //   }

  //   // Filter by search query
  //   if (searchQuery) {
  //     filtered = filtered.filter(tour => 
  //       tour.title.toLowerCase().includes(searchQuery) ||
  //       tour.shortDescription.toLowerCase().includes(searchQuery) ||
  //       tour.category.toLowerCase().includes(searchQuery)
  //     );
  //   }

  //   // Filter by date (check availability)
  //   if (dateParam) {
  //     const selectedDate = new Date(dateParam).toISOString().split('T')[0];
  //     filtered = filtered.filter(tour => 
  //       tour.availability.some(slot => 
  //         slot.date.split('T')[0] === selectedDate && slot.available
  //       )
  //     );
  //   }

  //   setFilteredTours(filtered);
  // }, [searchParams, selectedCategory]);

    // Extract URL params
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";
  const dateParam = searchParams.get("date");
  const selectedDate = dateParam ? new Date(dateParam) : undefined;


    useEffect(() => {
    let filtered = tours;

    // Category Filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (tour) => tour.category === selectedCategory
      );
    }

    // Search Query Filter
    if (searchQuery) {
      filtered = filtered.filter(
        (tour) =>
          tour.title.toLowerCase().includes(searchQuery) ||
          tour.shortDescription.toLowerCase().includes(searchQuery) ||
          tour.category.toLowerCase().includes(searchQuery)
      );
    }

    // Date Availability Filter
    if (selectedDate) {
      const selectedDateString = selectedDate.toISOString().split("T")[0];
      filtered = filtered.filter((tour) =>
        tour.availability.some(
          (slot) =>
            slot.date.split("T")[0] === selectedDateString && slot.available
        )
      );
    }

    setFilteredTours(filtered);
  }, [searchParams, selectedCategory]);


  // const handleSearch = (query: string, date: Date | undefined) => {
  //   const params = new URLSearchParams();
  //   if (query) params.set('search', query);
  //   if (date) params.set('date', date.toISOString());
  //   setSearchParams(params);
  // };

    // Update URL params when searching
  const handleSearch = (query: string, date: Date | undefined) => {
    const params = new URLSearchParams();
    if (query) params.set("search", query);
    if (date) params.set("date", date.toISOString());
    setSearchParams(params);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-center mb-8">Explore Our Tours</h1>
          <div className="max-w-3xl mx-auto">
            {/* <SearchBar onSearch={handleSearch} /> */}
             <SearchBar
              onSearch={handleSearch}
              initialQuery={searchQuery}
              initialDate={selectedDate}
            />
          </div>
        </div>
      </section>

      {/* Filters & Tours */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredTours.length} {filteredTours.length === 1 ? 'tour' : 'tours'} found
            </p>
          </div>

          {/* Tours Grid */}
          {filteredTours.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map((tour) => (
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
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 mb-4">No tours found matching your criteria</p>
              <Button onClick={() => {
                setSearchParams({});
                setSelectedCategory("All");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
