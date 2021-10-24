export interface Products {
  id: number;
  name: string;
  price: number;
  description: string;
  photo: string;
  capacity: string;
  display: string;
  camera: string;
  faceId: string;
}

export const ELEMENT_DATA: Products[] = [
  {
    id: 1,
    name: "iPhone XL",
    price: 799,
    description: "A large phone with one of the best screens",
    photo:
      "https://www.egnetas.lt/wp-content/uploads/2021/09/Apple-iPhone-13-Pro-Max-Silver-ismanusis-telefonas.jpg",
    capacity: "512 GB",
    display: "5.4‑inch (diagonal) all‑screen OLED display",
    camera: "Dual 12MP camera system: Wide and Ultra Wide cameras",
    faceId: "Enabled by TrueDepth camera for facial recognition",
  },
  {
    id: 2,
    name: "iPhone Mini",
    price: 699,
    description: "A great phone with one of the best cameras",
    photo:
      "https://www.varle.lt/static/uploads/products/26/app/apple-iphone-13-512gb-rozine.jpg",
    capacity: "128 GB",
    display: "6.1‑inch (diagonal) all‑screen OLED display",
    camera: "Dual 12MP camera system: Wide and Ultra Wide cameras",
    faceId: "Enabled by TrueDepth camera for facial recognition",
  },
  {
    id: 3,
    name: "iPhone Standard",
    price: 299,
    description: "A great phone with one of the best cameras",
    photo:
      "https://www.varle.lt/static/uploads/products/28/app/apple-iphone-13-128gb-blue.jpg",
    capacity: "512 GB",
    display: "5.4‑inch (diagonal) all‑screen OLED display",
    camera: "Dual 12MP camera system: Wide and Ultra Wide cameras",
    faceId: "Enabled by TrueDepth camera for facial recognition",
  },

  {
    id: 4,
    name: "iPhone 13 Mini",
    price: 299,
    description: "A great phone with one of the best cameras",
    photo:
      "https://www.varle.lt/static/uploads/products/26/app/apple-iphone-13-mini-256gb-midnight.jpg",
    capacity: "128 GB",
    display: "6.1‑inch (diagonal) all‑screen OLED display",
    camera: "Dual 12MP camera system: Wide and Ultra Wide cameras",
    faceId: "Enabled by TrueDepth camera for facial recognition",
  },

  {
    id: 5,
    name: "iPhone 13 Pro",
    price: 299,
    description: "A great phone with one of the best cameras",
    photo:
      "https://www.varle.lt/static/uploads/products/26/app/apple-iphone-13-pro-128gb-gold.jpg",
    capacity: "256 GB",
    display: "5.4‑inch (diagonal) all‑screen OLED display",
    camera: "Dual 12MP camera system: Wide and Ultra Wide cameras",
    faceId: "Enabled by TrueDepth camera for facial recognition",
  },

  {
    id: 6,
    name: "iPhone 13",
    price: 299,
    description: "A great phone with one of the best cameras",
    photo:
      "https://www.varle.lt/static/uploads/products/26/app/apple-iphone-13-256gb-productraudonas.jpg",
    capacity: "256 GB",
    display: "6.1‑inch (diagonal) all‑screen OLED display",
    camera: "Dual 12MP camera system: Wide and Ultra Wide cameras",
    faceId: "Enabled by TrueDepth camera for facial recognition",
  },
];
