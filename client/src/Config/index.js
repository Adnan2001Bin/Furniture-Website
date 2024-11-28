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
    label: "Bedroom",
    name: "bedroom",
    componentType: "select",
    options: [
      { id: "bedroomSet", label: "Bedroom Set" },
      { id: "bed", label: "Bed" },
      { id: "readingTable", label: "Reading Table" },
      { id: "bedSideTable", label: "BedSide Table" },
      { id: "wardrobe", label: "Wardrobe" },
      { id: "dressingTable", label: "Dressing Table" },
    ],
  },
  {
    label: "DinningRoom",
    name: "dinningroom",
    componentType: "select",
    options: [
      { id: "dinningroomSet", label: "Dinning Room Set" },
      { id: "dinningChair", label: "Dinning Chair" },
      { id: "cafeteria", label: "Cafeteria" },
      { id: "dinnerWagone", label: "Dinner Wagone" },
      { id: "showcase", label: "Showcase" },
      { id: "teaTrolley", label: "Tea Trolley" },
    ],
  },
  {
    label: "LivingRoom",
    name: "livingRoom",
    componentType: "select",
    options: [
      { id: "sofa", label: "Sofa" },
      { id: "centerTable", label: "Dinningroom" },
      { id: "divan", label: "Divan" },
      { id: "chair", label: "Chair" },
      { id: "tvCabinet", label: "TV Cabinet" },
      { id: "shoeRack", label: "Shoe Rack" },
    ],
  },
  {
    label: "Office",
    name: "office",
    componentType: "select",
    options: [
      { id: "sofa", label: "Sofa" },
      { id: "directortable", label: "Director Table" },
      { id: "computerTable", label: "Computer Table" },
      { id: "receptionTable", label: "Reception Table" },
      { id: "conferenceTable", label: "Conference Table" },
      { id: "swivelChair", label: "Swivel Chair" },
    ],
  },
  {
    label: "Door",
    name: "door",
    componentType: "select",
    options: [
      { id: "solidWoodenDoor", label: "Solid Wooden Door" },
      {
        id: "solidEngineeredWoodenDoor",
        label: "Solid Engineered Wooden Door",
      },
      { id: "solidWoodenGlassDoor", label: "Solid Wooden Glass Door" },
      {
        id: "decorativeVeneeredFlushDoor",
        label: "Decorative Veneered Flush Door",
      },
      {
        id: "decorativeVeneeredGlassDoor",
        label: "Decorative Veneered Glass Door",
      },
      { id: "knockDownDoorFrame", label: "Knock Down Door Frame" },
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
    img: "https://cdn-icons-png.flaticon.com/128/2722/2722987.png",
  },
  {
    id: "Bedroom",
    label: "Bedroom",
    path: "/shop/listing",
    img: "https://cdn-icons-png.flaticon.com/128/2722/2722987.png",
  },
  {
    id: "Dinning",
    label: "Dinning",
    path: "/shop/listing",
    img: "https://cdn-icons-png.flaticon.com/128/2722/2722987.png",
  },
  {
    id: "LivingRoom",
    label: "Living Room",
    path: "/shop/listing",
    img: "https://cdn-icons-png.flaticon.com/128/2722/2722987.png",
  },
  {
    id: "Office",
    label: "Office",
    path: "/shop/listing",
    img: "https://cdn-icons-png.flaticon.com/128/2722/2722987.png",
  },
  {
    id: "Door",
    label: "Door",
    path: "/shop/listing",
    img: "https://cdn-icons-png.flaticon.com/128/2722/2722987.png",
  },

  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  bedroom: "Bedroom",
  dinningroom: "Dinningroom",
  livingRoom: "LivingRoom",
  office: "Office",
  door: "Door",
};

export const filterOptions = {
  category: [
    { id: "bedroom", label: "Bedroom" },
    { id: "dinning", label: "Dinning" },
    { id: "livingRoom", label: "LivingRoom" },
    { id: "office", label: "Office" },
    { id: "door", label: "Door" },
  ],

  subCategoryBedroom:  [
    { id: "bedroomSet", label: "Bedroom Set" },
    { id: "bed", label: "Bed" },
    { id: "readingTable", label: "Reading Table" },
    { id: "bedSideTable", label: "BedSide Table" },
    { id: "wardrobe", label: "Wardrobe" },
    { id: "dressingTable", label: "Dressing Table" },
  ],

  subCategoryDinning: [
    { id: "dinningroomSet", label: "Dinning Room Set" },
    { id: "dinningChair", label: "Dinning Chair" },
    { id: "cafeteria", label: "Cafeteria" },
    { id: "dinnerWagone", label: "Dinner Wagone" },
    { id: "showcase", label: "Showcase" },
    { id: "teaTrolley", label: "Tea Trolley" },
  ],
  subCategoryLivingRoom: [
    { id: "sofa", label: "Sofa" },
    { id: "centerTable", label: "Dinningroom" },
    { id: "divan", label: "Divan" },
    { id: "chair", label: "Chair" },
    { id: "tvCabinet", label: "TV Cabinet" },
    { id: "shoeRack", label: "Shoe Rack" },
  ],
  subCategoryOffice: [
    { id: "sofa", label: "Sofa" },
    { id: "directortable", label: "Director Table" },
    { id: "computerTable", label: "Computer Table" },
    { id: "receptionTable", label: "Reception Table" },
    { id: "conferenceTable", label: "Conference Table" },
    { id: "swivelChair", label: "Swivel Chair" },
  ],
  subCategoryDoor: [
    { id: "solidWoodenDoor", label: "Solid Wooden Door" },
    {
      id: "solidEngineeredWoodenDoor",
      label: "Solid Engineered Wooden Door",
    },
    { id: "solidWoodenGlassDoor", label: "Solid Wooden Glass Door" },
    {
      id: "decorativeVeneeredFlushDoor",
      label: "Decorative Veneered Flush Door",
    },
    {
      id: "decorativeVeneeredGlassDoor",
      label: "Decorative Veneered Glass Door",
    },
    { id: "knockDownDoorFrame", label: "Knock Down Door Frame" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];
