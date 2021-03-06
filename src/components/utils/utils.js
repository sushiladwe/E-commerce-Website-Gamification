import { UserOutlined, HeartOutlined, ShoppingOutlined } from "@ant-design/icons";
export const Icons = [
  { icon: <UserOutlined />, name: "Profile", link: "/login" },
  { icon: <HeartOutlined />, name: "Wishlist", link: "/" },
  { icon: <ShoppingOutlined />, name: "Bag", link: "/" },
];
export const Filtertype = [
  { type: "MEN", link: "Watches" },
  { type: "WOMEN", link: "Jeans" },
  { type: "KIDS", link: "Casual Shoes" },
  { type: "CATEGORY", link: "Kurta Sets" },
  { type: "BRAND", link: "Tops" },
];
export const CheckedProduct = [
  { product_name: "Tshirts", number: "(11569)" },
  { product_name: "Tops", number: "(11569)" },
  { product_name: "Shoes", number: "(11569)" },
  { product_name: "Shirts", number: "(6758)" },
  { product_name: "Heels", number: "(9768)" },
];
export const CheckedBrand = [
  { product_name: "Puma", number: "(11569)" },
  { product_name: "Macmerise", number: "(11569)" },
  { product_name: "Roadster", number: "(11569)" },
  { product_name: "DressBerry", number: "(6758)" },
  { product_name: "Max", number: "(9768)" },
];
export const CheckedPrice = [
  { priceFrom: 500, priceTo: 1000 },
  { priceFrom: 1500, priceTo: 2000 },
  { priceFrom: 2500, priceTo: 3000 },
  { priceFrom: 0, priceTo: 4000 },
];
export const Genders = [
  { gender: "Men" },
  { gender: "Women" },
  { gender: "Boys" },
  { gender: "Girls" },
];
export const navData=[
  {title:"MEN",
  link:"Men",
  sub:"MEN",
  color:"#ee5f73",
  list:[{name:"T-Shirts",link:"Tshirts"},
        {name:"Casual shirts",link:"Shirts"},
        {name:"Formal Shirts",link:"Shirts"},
        {name:"Jackets",link:"Jackets"},
        {name:"Sweatshirts",link:"Sweatshirts"},
        {name:"Sweaters",link:"Sweaters"},
        {name:"Suits",link:"Suits"}]},

  {title:"WOMEN",
  link:"Women",
  sub:"WOMEN",
  color:"#fb56c1",
  list:[{name:"Kurtas",link:"Kurtas"},
        {name:"Dresses",link:"Dresses"},
        {name:"Tops",link:"Tops"},
        {name:"Ethnic wear",link:"Clothing Set"},
        {name:"Kurta Sets",link:"Kurta Sets"}]},

  {title:"KIDS",
  link:"Men",
  sub:"KIDS",
  color:"#f26a10",
        list:[{name:"T-Shirts",link:"Tshirts"},
        {name:"Shirts",link:"Shirts"},
        {name:"Jeans",link:"Jeans"},
        {name:"Track Pants",link:"Track Pants"},
        {name:"Flip Flops",link:"Flip Flops"}]},

  {title:"GADGETS",
  link:"Men",
  sub:"GADGETS",
  color:"#f2c210",
  list:[{name:"Watches",link:"Watches"},
        {name:"Smart Watches",link:"Smart Watches"},
        {name:"Fitness Bands",link:"Fitness Bands"},
        {name:"Headphones",link:"Headphones"}]},
  
  {title:"FOOTWEAR",
  link:"Men",
  sub:"FOOTWEAR",
  color:"#0db7af",
  list:[{name:"Formal Shoes",link:"Formal Shoes"},
        {name:"Flip Flops",link:"Flip Flops"},
        {name:"Casual Shoes",link:"Casual Shoes"}]}
]