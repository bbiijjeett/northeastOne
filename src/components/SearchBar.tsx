import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { useState, useEffect } from "react";

interface SearchBarProps {
  onSearch: (query: string, date: Date | undefined) => void;
  initialQuery?: string;
  initialDate?: Date;
}


export function SearchBar({ onSearch, initialQuery = "", initialDate }: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const [date, setDate] = useState<Date | undefined>(initialDate);

    // Trigger search whenever query or date changes (debounced)
  useEffect(() => {
    const delay = setTimeout(() => {
      onSearch(query, date);
    }, 400); // debounce for smoother UX
    return () => clearTimeout(delay);
  }, [query, date]);

  const handleSearchClick  = () => {
    onSearch(query, date);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex flex-col md:flex-row gap-3">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <Input
            placeholder="Search tours..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 text-gray-700"
            onKeyDown={(e) => e.key === 'Enter' && handleSearchClick ()}
          />
        </div>

        {/* Date Picker */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="justify-start text-left">
              {date ? format(date, "PPP") : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(d) => d < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        {/* Search Button */}
        <Button onClick={handleSearchClick}>
          Search
        </Button>
      </div>
    </div>
  );
}
