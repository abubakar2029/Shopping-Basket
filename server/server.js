const express = require("express");

const sendmail = require("sendmail")();

const app = express();
const { v4: uuidv1, v4 } = require("uuid");
/* middle-ware */
app.use(express.json());

const products = [
  {
    name: "OWN THE RUN TEE",
    id: v4(),
    price: 35,
    description:
      "Whether you're hitting the  you covered. Sweaty step with the  Tee.",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c5ab337e86d4b41ae02b97d27550040_9366/Own_the_Run_Tee_Grey_IM2535_21_model.jpg",
  },
  {
    name: "OWN THE RUN TEE",
    id: v4(),
    price: 45,
    description:
      "Some runs feel so effortless it's like gravity doisture  Reflective details shine on pre-dawn and sunset kilometers.",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7d4a1f54b4de42b49ebeada800c6145f_9366/Own_the_Run_Tee_Black_H58591_01_laydown.jpg",
  },
  {
    name: "TRAINING PRO SERIES STRENGTH TEE",
    price: 50,
    id: v4(),
    description:
      "Be unconventional. Maximizing what you get  commitmen content, this product represents just one of our solutions to help end plastic waste.",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2477490310f74161bdacafc8009aaf83_9366/Designed_for_Training_Pro_Series_Strength_Tee_Green_IL1457_21_model.jpg",
  },
  {
    name: "CLUB GRAPHIC TENNIS TEE",
    price: 30,
    id: v4(),
    description:
      "Stand out for more than your tennis. Part of tange of motion in the shoulders for decisive shots.",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/460a6ae5fe7742aeb1ccafc401059c47_9366/Club_Graphic_Tennis_Tee_White_IJ4864_21_model.jpg",
  },
  {
    name: "Men's Dri-FIT Slim Short-Sleeve Top",
    price: 90,
    description:
      "The Nike Pro collection is all about feeling confay dry and comfortable.",
    id: v4(),
    img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ae9fbb05-c448-49da-bb9b-7e1a86c721a3/pro-mens-dri-fit-slim-short-sleeve-top-rKTBHG.png",
  },
];

const allCategories = {
  GroceriesAndPets: {
    categoryName: "Groceries & Pets",
    items: [
      {
        name: "Item 1",
        price: 5.99,
        description: "Description for Item 1",
        id: v4(),
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 2",
        price: 3.49,
        description: "Description for Item 2",
        id: v4(),
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 3",
        price: 2.99,
        description: "Description for Item 3",
        id: v4(),
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 4",
        price: 6.99,
        id: v4(),
        description: "Description for Item 4",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 5",
        price: 4.79,
        id: v4(),
        description: "Description for Item 5",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 6",
        price: 1.99,
        id: v4(),
        description: "Description for Item 6",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 7",
        id: v4(),
        price: 3.29,
        description: "Description for Item 7",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 8",
        price: 2.49,
        id: v4(),
        description: "Description for Item 8",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 9",
        price: 4.09,
        description: "Description for Item 9",
        id: v4(),
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 10",
        price: 5.59,
        id: v4(),
        description: "Description for Item 10",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
    ],
  },
  HealthAndBeauty: {
    categoryName: "Health & Beauty",
    items: [
      {
        name: "Item 1",
        id: v4(),
        price: 9.99,
        description: "Description for Item 1",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 2",
        id: v4(),
        price: 4.99,
        description: "Description for Item 2",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 3",
        id: v4(),
        price: 7.49,
        description: "Description for Item 3",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 4",
        price: 5.29,
        id: v4(),
        description: "Description for Item 4",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 5",
        price: 6.99,
        description: "Description for Item 5",
        id: v4(),
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 6",
        price: 8.59,
        id: v4(),
        description: "Description for Item 6",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 7",
        id: v4(),
        price: 3.49,
        description: "Description for Item 7",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 8",
        id: v4(),
        price: 6.79,
        description: "Description for Item 8",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 9",
        id: v4(),
        price: 8.99,
        description: "Description for Item 9",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&",
      },
      {
        name: "Item 10",
        id: v4(),
        price: 4.29,
        description: "Description for Item 10",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
    ],
  },
  ElectronicDevices: {
    categoryName: "Electronic Devices",
    items: [
      {
        name: "Item 1",
        id: v4(),
        price: 399.99,
        description: "Description for Item 1",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 2",
        id: v4(),
        price: 199.99,
        description: "Description for Item 2",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 3",
        id: v4(),
        price: 299.99,
        description: "Description for Item 3",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 4",
        price: 159.99,
        id: v4(),
        description: "Description for Item 4",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 5",
        price: 249.99,
        id: v4(),
        description: "Description for Item 5",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 6",
        id: v4(),
        price: 379.99,
        description: "Description for Item 6",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 7",
        price: 429.99,
        id: v4(),
        description: "Description for Item 7",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 8",
        price: 349.99,
        id: v4(),
        description: "Description for Item 8",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 9",
        id: v4(),
        price: 479.99,
        description: "Description for Item 9",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 10",
        price: 299.99,
        id: v4(),
        description: "Description for Item 10",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
  },
  SportsAndOutdoor: {
    categoryName: "Sports & Outdoor",
    items: [
      {
        name: "Item 1",
        price: 29.99,
        description: "Description for Item 1",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 2",
        price: 14.99,
        description: "Description for Item 2",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8c3BvcnRzJTIwYW5kJTIwb3V0ZG9vcnxlbnwwfHx8fHx8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 3",
        price: 19.99,
        description: "Description for Item 3",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8c3BvcnRzJTIwYW5kJTIwb3V0ZG9vcnxlbnwwfHx8fHx8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 4",
        price: 39.99,
        description: "Description for Item 4",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8c3BvcnRzJTIwYW5kJTIwb3V0ZG9vcnxlbnwwfHx8fHx8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 5",
        price: 24.99,
        description: "Description for Item 5",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8c3BvcnRzJTIwYW5kJTIwb3V0ZG9vcnxlbnwwfHx8fHx8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 6",
        price: 34.99,
        description: "Description for Item 6",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8c3BvcnRzJTIwYW5kJTIwb3V0ZG9vcnxlbnwwfHx8fHx8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 7",
        price: 44.99,
        description: "Description for Item 7",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8c3BvcnRzJTIwYW5kJTIwb3V0ZG9vcnxlbnwwfHx8fHx8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 8",
        price: 27.99,
        description: "Description for Item 8",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8c3BvcnRzJTIwYW5kJTIwb3V0ZG9vcnxlbnwwfHx8fHx8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 9",
        price: 19.99,
        description: "Description for Item 9",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8c3BvcnRzJTIwYW5kJTIwb3V0ZG9vcnxlbnwwfHx8fHx8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 10",
        price: 29.99,
        description: "Description for Item 10",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8c3BvcnRzJTIwYW5kJTIwb3V0ZG9vcnxlbnwwfHx8fHx8fHx8&auto=format&fit=crop&w=800&q=60",
      },
    ],
  },
  HomeAndLifestyle: {
    categoryName: "Home & Lifestyle",
    items: [
      {
        name: "Item 1",
        price: 49.99,
        description: "Description for Item 1",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8aG9tZSUyMGFuZCUyMGx5aXN0aXZlfGd8MHx8fHx8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 2",
        price: 24.99,
        description: "Description for Item 2",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8aG9tZSUyMGFuZCUyMGx5aXN0aXZlfGd8MHx8fHx8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 3",
        price: 34.99,
        description: "Description for Item 3",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8aG9tZSUyMGFuZCUyMGx5aXN0aXZlfGd8MHx8fHx8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 4",
        price: 54.99,
        description: "Description for Item 4",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8aG9tZSUyMGFuZCUyMGx5aXN0aXZlfGd8MHx8fHx8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 5",
        price: 39.99,
        description: "Description for Item 5",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8aG9tZSUyMGFuZCUyMGx5aXN0aXZlfGd8MHx8fHx8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 6",
        price: 44.99,
        description: "Description for Item 6",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8aG9tZSUyMGFuZCUyMGx5aXN0aXZlfGd8MHx8fHx8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 7",
        price: 29.99,
        description: "Description for Item 7",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8aG9tZSUyMGFuZCUyMGx5aXN0aXZlfGd8MHx8fHx8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 8",
        price: 49.99,
        description: "Description for Item 8",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8aG9tZSUyMGFuZCUyMGx5aXN0aXZlfGd8MHx8fHx8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 9",
        price: 59.99,
        description: "Description for Item 9",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8aG9tZSUyMGFuZCUyMGx5aXN0aXZlfGd8MHx8fHx8fHx8&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 10",
        price: 39.99,
        description: "Description for Item 10",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHszZWFyY2h8MXx8aG9tZSUyMGFuZCUyMGx5aXN0aXZlfGd8MHx8fHx8fHx8&auto=format&fit=crop&w=800&q=60",
      },
    ],
  },
  Others: {
    categoryName: "Others",
    items: [
      {
        name: "Item 1",
        price: 14.99,
        description: "Description for Item 1",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 2",
        price: 10.99,
        description: "Description for Item 2",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 3",
        price: 19.99,
        description: "Description for Item 3",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 4",
        price: 24.99,
        description: "Description for Item 4",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 5",
        price: 29.99,
        description: "Description for Item 5",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 6",
        price: 15.99,
        description: "Description for Item 6",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 7",
        price: 12.99,
        description: "Description for Item 7",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 8",
        price: 18.99,
        description: "Description for Item 8",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 9",
        price: 22.99,
        description: "Description for Item 9",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
      },
      {
        name: "Item 10",
        price: 19.99,
        description: "Description for Item 10",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0aGVyc3xwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
  },
};

// User Selected All Products
let allCart = [];

let users = [{}];

/* All requests */
app.post("/productsData", (req, res) => {
  res.send(products);
});

app.post("/allCatogeries", (req, res) => {
  res.send(allCategories);
});

app.post("/user-signup", (req, res) => {
  let newUser = req.body;
  const index = users.findIndex((user) => user.userCNIC === newUser.userCNIC);
  if (index !== -1) {
    let response = {
      status: "Already registered",
      userData: null,
    };
    res.send(response);
  } else {
    newUser = { ...newUser, id: v4() }; // added id to newUser object
    users.push(newUser);
    let response = {
      status: "Successfully Registered",
      userData: newUser,
    };
    res.send(response);
  }
});

app.post("/user-login", (req, res) => {
  let user = req.body;
  const index = users.findIndex(
    (u) => u.password === user.password && u.email === user.email
  );
  let response = {
    status1: null,
    userData: null,
  };
  if (index === -1) {
    response.status1 = "Not Found";
    response.userData = null;
  } else {
    response.status1 = "Logged In";
    let cindex = allCart.findIndex(
      (cart) => cart.userID === users[index].userID
    );
    if (cindex !== -1) {
      response["userData"] = {
        ...users[index],
        cartProducts: allCart[cindex].cartProducts,
      };
    } else {
      response["userData"] = { ...users[index], cartProducts: null };
    }
  }
  res.send(response);
});

app.post("/add-to-cart", (req, res) => {
  const request = req.body;
  if (request.userID) {
    let index = allCart.findIndex((cart) => cart.userID === request.userID);
    if (index !== -1) {
      let cartProducts = allCart[index].cartProducts;
      let productIndex = cartProducts.findIndex(
        (product) => product.name === request.product.name
      );
      if (productIndex !== -1) {
        cartProducts[productIndex].quantity += 1;
      } else {
        cartProducts.push({ ...request.product, quantity: 1 });
      }
    } else {
      allCart.push({
        userID: request.userID,
        cartProducts: [{ ...request.product, quantity: 1 }],
      });
    }
    res.send("Product Added");
  } else {
    res.send(null);
  }
});

app.post("/cart", (req, res) => {
  let index = allCart.findIndex((cart) => cart.userID === req.body.id);
  if (index !== -1) {
    res.send(allCart[index]);
  } else {
    res.send(null);
  }
});

app.post("/checkout-cart", (req, res) => {
  const request = req.body;
  let index = allCart.findIndex((cart) => cart.userID.id === request.userID);
  if (index !== -1) {
    allCart.splice(index, 1);
    res.send("Successful");
  } else {
    res.send("Failed");
  }
});

app.post("/send-mail", (req, res) => {
  sendmail(
    {
      from: "abubakarzafar001@gmail.com",
      to: "abubakarzafar2029@gmail.com",
      subject: "test sendmail",
      html: JSON.stringify(req.body),
    },
    function (err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
    }
  );
  res.send("Done");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
