const CUISINE_THAI = 'Thai';
const CUISINE_MEXICAN = 'Mexican';
const CUISINE_SWEDISH = 'Swedish';
const CUISINE_AFRICAN = 'African';
const CUISINE_ITALIAN = 'Italian';

const TAG_CURRY = 'Curry';
const TAG_WOK = 'Wok';
const TAG_BURRITO = 'Burrito';
const TAG_TACO = 'Taco';
const TAG_HUSMANSKOST = 'Husmanskost';
const TAG_ETHIOPIAN = 'Ethiopian';
const TAG_PIZZA = 'Pizza';
const TAG_PASTA = 'Pasta';

export const foodItemsArr = [
  { cuisine: CUISINE_THAI, tags: [TAG_CURRY, TAG_WOK] },
  { cuisine: CUISINE_MEXICAN, tags: [TAG_BURRITO, TAG_TACO] },
  { cuisine: CUISINE_SWEDISH, tags: [TAG_HUSMANSKOST] },
  { cuisine: CUISINE_AFRICAN, tags: [TAG_ETHIOPIAN] },
  { cuisine: CUISINE_ITALIAN, tags: [TAG_PIZZA, TAG_PASTA] }
];

export const recipeArray = [
  {
    title: 'Red Panaeng Curry',
    link: 'https://www.javligtgott.se/rod-panaeng-curry/',
    cuisine: CUISINE_THAI,
    tags: [TAG_CURRY]
  },
  {
    title: 'Pasta con mozzarella',
    cuisine: CUISINE_ITALIAN,
    tags: [TAG_PASTA]
  },
  {
    title: 'Swedish meatballs',
    cuisine: CUISINE_SWEDISH,
    tags: [TAG_HUSMANSKOST]
  }
];
