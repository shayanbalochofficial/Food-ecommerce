// Don't let me go....stay by my side

export interface MenuItem {
  id: string;
  name: string;
  slug: string;
  category: "appetizers" | "mains" | "desserts" | "drinks";
  price: number;
  description: string;
  image: string;
  ingredients: string[];
  servingSize: string;
}

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Seared Duck Breast",
    slug: "seared-duck-breast",
    category: "mains",
    price: 34.99,
    description:
      "Perfectly seared duck breast with cherry gastrique and wild rice pilaf",
    image:
      "https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=400",
    ingredients: ["Duck Breast", "Cherry", "Wild Rice", "Thyme", "Shallots"],
    servingSize: "1 breast + sides",
  },
  {
    id: "2",
    name: "Truffle Risotto",
    slug: "truffle-risotto",
    category: "mains",
    price: 28.99,
    description:
      "Creamy arborio risotto infused with black truffle and parmesan",
    image:
      "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400",
    ingredients: [
      "Arborio Rice",
      "Black Truffle",
      "Parmesan",
      "White Wine",
      "Butter",
    ],
    servingSize: "Serves 1",
  },
  {
    id: "3",
    name: "Pan-Seared Scallops",
    slug: "pan-seared-scallops",
    category: "mains",
    price: 32.99,
    description:
      "Succulent scallops with lemon beurre blanc and roasted asparagus",
    image:
      "https://images.pexels.com/photos/5732436/pexels-photo-5732436.jpeg?auto=compress&cs=tinysrgb&w=400",
    ingredients: ["Large Scallops", "Lemon", "Butter", "Asparagus", "Garlic"],
    servingSize: "3 scallops + sides",
  },
  {
    id: "4",
    name: "Crispy Calamari",
    slug: "crispy-calamari",
    category: "appetizers",
    price: 14.99,
    description: "Golden-fried calamari with house-made marinara and aioli",
    image:
      "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400",
    ingredients: ["Calamari", "Flour", "Marinara", "Garlic Aioli", "Lemon"],
    servingSize: "Serves 2-3",
  },
  {
    id: "5",
    name: "Burrata & Heirloom Tomato",
    slug: "burrata-heirloom-tomato",
    category: "appetizers",
    price: 12.99,
    description:
      "Creamy burrata cheese with seasonal heirloom tomatoes and basil oil",
    image:
      "https://images.pexels.com/photos/5592370/pexels-photo-5592370.jpeg?auto=compress&cs=tinysrgb&w=400",
    ingredients: [
      "Burrata",
      "Heirloom Tomatoes",
      "Basil",
      "Olive Oil",
      "Balsamic",
    ],
    servingSize: "Serves 1-2",
  },
  {
    id: "6",
    name: "Chocolate Lava Cake",
    slug: "chocolate-lava-cake",
    category: "desserts",
    price: 10.99,
    description:
      "Warm dark chocolate cake with molten center, served with vanilla ice cream",
    image:
      "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
    ingredients: [
      "Dark Chocolate",
      "Eggs",
      "Butter",
      "Vanilla Ice Cream",
      "Sea Salt",
    ],
    servingSize: "1 cake",
  },
  {
    id: "7",
    name: "Pistachio Panna Cotta",
    slug: "pistachio-panna-cotta",
    category: "desserts",
    price: 9.99,
    description:
      "Silky pistachio panna cotta with raspberry coulis and candied nuts",
    image:
      "https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=400",
    ingredients: [
      "Heavy Cream",
      "Pistachio",
      "Gelatin",
      "Raspberries",
      "Pistachios",
    ],
    servingSize: "Serves 1",
  },
  {
    id: "8",
    name: "Craft Signature Cocktail",
    slug: "craft-signature-cocktail",
    category: "drinks",
    price: 14.99,
    description:
      "House-crafted cocktail with premium spirits, fresh citrus, and housemade syrups",
    image:
      "https://images.pexels.com/photos/3407778/pexels-photo-3407778.jpeg?auto=compress&cs=tinysrgb&w=400",
    ingredients: [
      "Premium Spirits",
      "Fresh Citrus",
      "House Syrup",
      "Bitters",
      "Ice",
    ],
    servingSize: "1 drink",
  },
  {
    id: "9",
    name: "Cold Brew Coffee",
    slug: "cold-brew-coffee",
    category: "drinks",
    price: 5.99,
    description:
      "Smooth cold brew coffee with optional oat milk and house-made vanilla syrup",
    image:
      "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400",
    ingredients: ["Cold Brew Coffee", "Oat Milk", "Vanilla Syrup", "Ice"],
    servingSize: "12 oz",
  },
  {
    id: "10",
    name: "Herb Crusted Lamb Chops",
    slug: "herb-crusted-lamb-chops",
    category: "mains",
    price: 38.99,
    description:
      "Tender lamb chops with rosemary herb crust, served with potato gratin",
    image:
      "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400",
    ingredients: ["Lamb Chops", "Rosemary", "Thyme", "Garlic", "Potatoes"],
    servingSize: "3 chops + sides",
  },
  {
    id: "11",
    name: "Foie Gras Terrine",
    slug: "foie-gras-terrine",
    category: "appetizers",
    price: 18.99,
    description: "Silky foie gras terrine with black garlic and brioche toast",
    image:
      "https://images.pexels.com/photos/5732436/pexels-photo-5732436.jpeg?auto=compress&cs=tinysrgb&w=400",
    ingredients: ["Foie Gras", "Black Garlic", "Brioche", "Sea Salt", "Pepper"],
    servingSize: "Serves 1-2",
  },
  {
    id: "12",
    name: "Limoncello Cheesecake",
    slug: "limoncello-cheesecake",
    category: "desserts",
    price: 10.99,
    description:
      "Rich cheesecake infused with limoncello, with lemon curd and meringue",
    image:
      "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400",
    ingredients: [
      "Cream Cheese",
      "Limoncello",
      "Lemon Curd",
      "Graham Cracker",
      "Meringue",
    ],
    servingSize: "Serves 1",
  },
  {
    id: "13",
    name: "Chocolate Shake",
    slug: "choco-shake",
    category: "drinks",
    price: 9.99,
    description:
      "Silky chocolate shake with ice cream and cocoa - made with love, because you deserve something sweet and special 💕 (specially added for LOML, she loves chocolate shakes, I LOVE YOU SO MUCH)",
    image:
      "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400",
    ingredients: ["Chocolate", "Milk", "Ice Cream", "Cocoa"],
    servingSize: "12 oz",
  },
];
