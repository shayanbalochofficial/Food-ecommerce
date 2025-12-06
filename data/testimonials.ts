export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Alex",
    role: "Regular Customer",
    content:
      "FoodBuck represents the pinnacle of fine dining excellence. Every dish is a masterpiece of flavor and technique. This is destination dining at its absolute best.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "2", 
    name: "James Richardson",
    role: "Restaurant Enthusiast",
    content:
      "The service is impeccable, the presentation is stunning, and the flavors are extraordinary. We celebrated our anniversary here and it was absolutely perfect.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "Sarah Chen",
    role: "Culinary Student",
    content:
      "Dining at FoodBuck was a revelation. The technique, the creativity, the precision—everything I aspire to in my culinary journey. Truly inspirational.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "Michael Torres",
    role: "Executive",
    content:
      "The perfect setting for important business dinners. The ambiance is sophisticated, the food exceptional, and the staff anticipates every need.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "5",
    name: "Emma Williams",
    role: "Chef & Restaurateur",
    content:
      "A restaurant that truly understands the art of hospitality. Chef Victoria and her team have created something truly special. Bravo!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "6",
    name: "David Park",
    role: "Travel Blogger",
    content:
      "This is the kind of restaurant experience you travel for. Everything from the welcome to the farewell was executed with precision and warmth.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
];
