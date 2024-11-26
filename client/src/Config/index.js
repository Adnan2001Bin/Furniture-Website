
export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];



export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "bedroom", label: "Bedroom" },
      { id: "dinningroom", label: "Dinningroom" },
      { id: "livingroom", label: "Livingroom" },
      { id: "office", label: "Office" },
      { id: "door", label: "Door" },
    ],
  },

  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];


export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
    img:"https://cdn-icons-png.flaticon.com/128/2722/2722987.png",
    
  },
  {
    id: "Bedroom",
    label: "Bedroom",
    path: "/shop/listing",
    img:"https://cdn-icons-png.flaticon.com/128/2722/2722987.png",
  },
  {
    id: "Dinning",
    label: "Dinning",
    path: "/shop/listing",
    img:"https://cdn-icons-png.flaticon.com/128/2722/2722987.png"

  },
  {
    id: "LivingRoom",
    label: "Living Room",
    path: "/shop/listing",
    img:"https://cdn-icons-png.flaticon.com/128/2722/2722987.png"

  },
  {
    id: "Office",
    label: "Office",
    path: "/shop/listing",
    img:"https://cdn-icons-png.flaticon.com/128/2722/2722987.png"
  },
  {
    id: "Door",
    label: "Door",
    path: "/shop/listing",
    img:"https://cdn-icons-png.flaticon.com/128/2722/2722987.png"
  },

  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];



export const categoryOptionsMap = {
  bedroom: "Bedroom",
  dinning: "Dinning",
  livingRoom: "LivingRoom",
  office: "Office",
  ddor: "Door",
};





export const filterOptions = {
  category: [
    { id: "bedroom", label: "Bedroom" },
    { id: "dinning", label: "Dinning" },
    { id: "livingRoom", label: "LivingRoom" },
    { id: "office", label: "Office" },
    { id: "ddor", label: "Door" },
  ],
 
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];