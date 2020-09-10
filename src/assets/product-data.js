const products = {
  electronics: {
    id: 101,
    ad: [
      "https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-voice-service/A4PC/P16924379_A4PC_on_the_go_1500x700._CB1541182799_.gif",
      "https://smedia.webcollage.net/rwvfp/wc/cp/1529424664924_ec148613-5fd5-4911-9d36-043d2a43c743/module/dellbtoc/_cp/products/1488158822522/tab-8c36234b-41ab-4259-8709-0af66d21f4e6/b68a02d7-733f-4e13-9133-fb75190cde8f.jpg.w1920.jpg",
      "https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-voice-service/A4PC/P16924379_A4PC_get_more_done_1500x700._CB1541182800_.gif",
    ],
    items: [
      {
        id: 1001,
        name: "Google Home",
        title:
          "Google Nest WiFi Router (2nd Generation) – 4x4 AC2200 Mesh Wi-Fi Router with 2200 Sq Ft Coverage",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnLmQbeTIt4NKH3KIbTFQrDPJldS-vkQ7Q5Q&usqp=CAU",
        price: 169.5,
        rating: 3,
      },
      {
        id: 1002,
        name: "Google Pixel Mobile",
        title:
          "Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/71Q8gm97H8L._AC_SX679_.jpg",
        price: 349.99,
        rating: 4,
      },
      {
        id: 1003,
        name: "Apple MacBook Air",
        title:
          "New Apple MacBook Air (13-inch, 8GB RAM, 512GB SSD Storage) - Silver with AppleCare+ Bundle",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/419qSzafmeL._AC_.jpg",
        price: 1498.99,
        rating: 5,
      },
      {
        id: 1004,
        name: "Oculus VR Gaming Headset",
        title: "Oculus Quest All-in-one VR Gaming Headset – 64GB",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_SY200_.jpg",
        price: 400,
        rating: 3,
      },
      {
        id: 1005,
        name: "Samsung Curved TV",
        title:
          "Samsung UN55RU7300FXZA Curved 55-Inch 4K UHD 7 Series Ultra HD Smart TV with HDR and Alexa Compatibility (2019 Model)",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/91o08DsRplL._AC_SX522_.jpg",
        price: 799.89,
        rating: 3,
      },
    ],
  },
  sports: {
    id: 102,
    ad: [
      "https://d3gqasl9vmjfd8.cloudfront.net/a9ede570-b9b3-487c-99e1-80729f111a01.gif",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Sports/Professional_Header_BAU2.PNG",
    ],
    items: [
      {
        id: 1006,
        name: "New Ballance Bat",
        title:
          "NB DC 870+ English Willow Cricket Bat Short Handle Thick Edges Straight Grains Balanced Blade Full Size English Willow Bat",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/410h0kD0V4L.jpg",
        price: 230.89,
        rating: 4,
      },
      {
        id: 1007,
        name: "Klikfit Dumbells",
        title:
          "Klikfit Rubber Coated Professional | Round Dumbbells | Highly Durable Long Lasting | Helps to Improve Your Fitness Goals",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61XiIN3plZL._SX679_.jpg",
        price: 16.32,
        rating: 2,
      },
      {
        id: 1008,
        name: "Nike Football",
        title:
          "Nike Phantom Venom FootBall ( Color: Volt/White/Obsidian , Size :5)",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/715znRcY0-L._SX679_.jpg",
        price: 12,
        rating: 4,
      },
      {
        id: 1009,
        name: "Healthex Cycle",
        title:
          "Healthex Exercise Cycle for Weight Loss at Home with Back Support || Air Bike 1001B",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/4126R8c7EQL.jpg",
        price: 115.5,
        rating: 2,
      },
      {
        id: 1010,
        name: "Fitness Watch",
        title: "Suunto 3 Activity Tracker with Wrist HR",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/41XVNjx8V2L.jpg",
        price: 152.45,
        rating: 4,
      },
    ],
  },
  books: {
    id: 105,
    ad: [
      "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/062020/Bookbazaar/Header_showcases._CB407576112_SY250_.jpg",
    ],
    items: [
      {
        id: 1011,
        name: "Fantastic Beasts Book",
        title:
          "Fantastic Beasts: The Crimes of Grindelwald – The Original Screenplay Hardcover – 17 November 2018",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/6188Kbw77LL._SX311_BO1,204,203,200_.jpg",
        price: 5.45,
        rating: 3,
      },
      {
        id: 1012,
        name: "Harry Potter",
        title:
          "Harry Potter and the Philosopher's Stone Paperback – 3 September 2014",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51ifu1aebKL._SX332_BO1,204,203,200_.jpg",
        price: 9.99,
        rating: 4,
      },
      {
        id: 1013,
        name: "Harry Potter",
        title: "Harry Potter and the Deathly Hallows (Book 7)",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51jyI6lYi1L._SX342_BO1,204,203,200_.jpg",
        price: 9.19,
        rating: 5,
      },
      {
        id: 1014,
        name: "Around The World In 80 Days",
        title: "Around the World in Eighty Days Paperback – 1 July 2016",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/510EvAURpTL._SX321_BO1,204,203,200_.jpg",
        price: 8.55,
        rating: 3,
      },
      {
        id: 1015,
        name: "The Subtle Art",
        title: "The Subtle Art of Not Giving a F*ck Paperback ",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg",
        price: 8.55,
        rating: 4,
      },
    ],
  },
  hats: {
    id: 104,
    ad: [
      "https://pyxis.nymag.com/v1/imgs/6cf/a38/8fc6779293fe1760e56facc9f77116dd45-19-ebbets-hates-lede-new.2x.rsocial.w600.gif",
      "https://cdn.shopify.com/s/files/1/1614/2659/files/FCY350V2CNDR_DDH_1024x1024.png?v=1585916277",
    ],
    items: [
      {
        id: 1016,
        name: "Brown Brim",
        image: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 25,
        title: "Futurekart Women's Brown Brim Sun Hat (Brown, 57x14x10 cm)",
        rating: 2,
      },
      {
        id: 1017,
        name: "Blue Beanie",
        image: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 18,
        title: "Futurekart Women's Blue Beanie Hat (Blue, 57x14x10 cm)",
        rating: 1,
      },
      {
        id: 1018,
        name: "Brown Cowboy",
        image: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 35,
        title: "Futurekart Women's Brown Cowboy Hat (Coffee, 57x14x10 cm)",
        rating: 3,
      },
      {
        id: 1019,
        name: "Grey Brim",
        image: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 25,
        title: "Futurekart Grey Brim Hat (Grey, 57x14x10 cm)",
        rating: 3,
      },
      {
        id: 1020,
        name: "Green Beanie",
        image: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 18,
        title: "Futurekart Women's Green Beanie Hat (Green, 57x14x10 cm)",
        rating: 4,
      },
      {
        id: 1021,
        name: "Palm Tree Cap",
        image: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 14,
        title: "Futurekart Palm Tree Cap Hat (Grey, 57x14x10 cm)",
        rating: 5,
      },
      {
        id: 1022,
        name: "Red Beanie",
        image: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 18,
        title: "Futurekart Women's Red Beanie Hat (Red, 57x14x10 cm)",
        rating: 2,
      },
      {
        id: 1023,
        name: "Wolf Cap",
        image: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 14,
        title: "Futurekart Wolf Hat (Dark Grey, 57x14x10 cm)",
        rating: 3,
      },
    ],
  },
  sneakers: {
    id: 103,
    ad: [
      "https://goodmockups.com/wp-content/uploads/2017/10/Free-Adidas-Superstar-Sneaker-Shoe-Mockup-PSD.gif",
      "https://dodmzloxz80g8.cloudfront.net/wow/uploads/attachment/4181/image/Stan_Smith_101_header.gif",
    ],
    items: [
      {
        id: 1024,
        name: "Adidas NMD",
        image: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 220,
        title: "Adidas Men's NMD 4.0 Ms Running Shoes",
        rating: 5,
      },
      {
        id: 1025,
        name: "Adidas Yeezy",
        image: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 280,
        title: "Adidas Men's Yeezy 4.0 Ms Running Shoes",
        rating: 4,
      },
      {
        id: 1026,
        name: "Black Converse",
        image: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: 110,
        title: "Men's Balck Converse 4.0 Ms Running Shoes",
        rating: 3,
      },
      {
        id: 1027,
        name: "Nike White AirForce",
        image: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        price: 160,
        title: "Nike Men's White AirForce 4.0 Ms Running Shoes",
        rating: 4,
      },
      {
        id: 1028,
        name: "Nike Red High Tops",
        image: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160,
        title: "Nike Men's Tops 4.0 Ms Running Shoes",
        rating: 2,
      },
      {
        id: 1029,
        name: "Nike Brown High Tops",
        image: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160,
        title: "Nike High Tops 4.0 Ms Running Shoes",
        rating: 2,
      },
      {
        id: 1030,
        name: "Air Jordan Limited",
        image: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 190,
        title: "Adidas Men's Air Jordan 4.0 Ms Running Shoes",
        rating: 4,
      },
      {
        id: 1031,
        name: "Timberlands",
        image: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 200,
        title: "Timberlands Men's Kyris 4.0 Ms Running Shoes",
        rating: 3,
      },
    ],
  },
  gaming: {
    id: 106,
    ad: [
      "https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/Cyberpunk_1500x300.png",
    ],
    items: [
      {
        id: 1032,
        name: "Gaming Controller",
        title: "Dualshock 4 Wireless Controller for Playstation 4 - Black V2",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/71R1q5uH2BL._SX679_.jpg",
        price: 57.55,
        rating: 3,
      },
      {
        id: 1033,
        name: "GTA - V",
        title: "Grand Theft Auto V – Premium",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81Ow0EK3azL._SX569_.jpg",
        price: 24.15,
        rating: 5,
      },
      {
        id: 1034,
        name: "XBox One",
        title:
          "AmazonBasics Vertical Stand & USB 3.0 Hub for Xbox One X, Black",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81YOl7px35L._SY741_.jpg",
        price: 205.05,
        rating: 4,
      },
      {
        id: 1035,
        name: "PS4 Controller",
        title:
          "Elton PS4 Controller Designer - Skulls ( B&W ) , Skin for One Controller Only",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/714ok65f2ML._SX679_.jpg",
        price: 10.3,
        rating: 3,
      },
      {
        id: 1036,
        name: "FIFA 20)",
        title: "FIFA 20 (PS4)",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81%2BomykvrIL._SX569_.jpg",
        price: 20.5,
        rating: 5,
      },
    ],
  },
  grooming: {
    id: 107,
    ad: [
      "https://payload.cargocollective.com/1/11/352190/11764064/OneBladeCollege_ASU_v3.gif",
      "https://vinod91.files.wordpress.com/2015/05/style-squad-poster2_tw.jpg",
    ],
    items: [
      {
        id: 1037,
        name: "Philips Trimmer",
        title:
          "Philips QP2525/10 OneBlade Hybrid Trimmer and Shaver with 3 Trimming Combs",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/718398O4TVL._SX679_.jpg",
        price: 22,
        rating: 4,
      },
      {
        id: 1038,
        name: "Philips Trimmer BT15",
        title:
          "Philips BT3203/15 cordless rechargeable Beard Trimmer - 10 length settings",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51hHnpqZ3NL._SX679_.jpg",
        price: 20.85,
        rating: 3,
      },
      {
        id: 1039,
        name: "Beardo Oil",
        title: "Beardo Godfather Lite Beard and Moustache Oil, 30 ml",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/71YMTEN2pdL._SX679_.jpg",
        price: 5.45,
        rating: 2,
      },
      {
        id: 1040,
        name: "Protien Powder",
        title:
          "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/716uIeq4rfL._SX679_.jpg",
        price: 27.5,
        rating: 4,
      },
      {
        id: 1041,
        name: "Vitamin Tablets",
        title:
          "MuscleBlaze MB- Vite Multivitamin with Immunity Boosters-100% RDA Vitamin C, D, Zinc, 60 tablets",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61K9SMOP-pL._SX679_.jpg",
        price: 4.35,
        rating: 2,
      },
    ],
  },
};

export default products;
