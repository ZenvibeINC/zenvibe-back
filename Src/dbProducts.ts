// Simulated products database
export const products = [
    {
        id: 1,
        name: "Full Spectrum® Ashwagandha",
        description: "900 mg, 100 Capsules. Apoya la resistencia al estrés.",
        price: 32.37,
        inventory: 100,
        category_id: 5, // '5' could represent the 'Natural Supplements' category
        creation_date: new Date('2024-09-21')
    },
    {
        id: 2,
        name: "Full Spectrum® Milk Thistle",
        description: "1,000 mg, 100 Capsules. Promueve la salud del hígado.",
        price: 24.86,
        inventory: 150,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 3,
        name: "Zinc Picolinate",
        description: "22 mg, 60 Capsules. Refuerza el sistema inmunológico.",
        price: 17.28,
        inventory: 300,
        category_id: 4, // '4' could represent the 'Vitamins & Minerals' category
        creation_date: new Date('2024-09-21')
    },
    {
        id: 4,
        name: "Albion Selenium Complex",
        description: "200 mcg, 90 Capsules. Potente antioxidante.",
        price: 15.51,
        inventory: 200,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 5,
        name: "Triple Strength Melatonin",
        description: "10 mg, 60 Capsules. Ayuda a regular el sueño.",
        price: 34.53,
        inventory: 250,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 6,
        name: "Full Spectrum Turmeric",
        description: "720 mg, 100 Capsules. Potente antiinflamatorio.",
        price: 28.43,
        inventory: 320,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 7,
        name: "Rhodiola Rosea Root",
        description: "400 mg, 100 Capsules. Mejora la energía y la resistencia.",
        price: 45.09,
        inventory: 250,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 8,
        name: "Vitamin B12",
        description: "500 mcg, 100 Capsules. Promueve la energía y el metabolismo.",
        price: 18.54,
        inventory: 450,
        category_id: 4,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 9,
        name: "Curcumina en Polvo",
        description: "Antioxidante y antiinflamatorio natural.",
        price: 7.99,
        inventory: 50,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 10,
        name: "Proteína Vegetal de Guisante",
        description: "Proteína en polvo vegana.",
        price: 18.99,
        inventory: 35,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 11,
        name: "Melatonin",
        description: "3 mg, 60 Capsules. Apoya el sueño saludable.",
        price: 10.76,
        inventory: 500,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 12,
        name: "Full Spectrum® Boswellia",
        description: "Double Strength, 60 Capsules. Apoya la salud articular.",
        price: 34.53,
        inventory: 180,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 13,
        name: "Vitamin D-3",
        description: "2000 IU, 250 Softgels. Apoya el sistema inmunológico y óseo.",
        price: 19.50,
        inventory: 340,
        category_id: 4,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 14,
        name: "Ginseng",
        description: "400 mg, 200 Capsules. Mejora la energía y reduce el estrés.",
        price: 22.99,
        inventory: 100,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 15,
        name: "Full Spectrum® Fenugreek",
        description: "610 mg, 90 Capsules. Apoya la salud digestiva y hormonal.",
        price: 9.99,
        inventory: 220,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 16,
        name: "Full Spectrum® Oregano",
        description: "450 mg, 100 Capsules. Propiedades antibacterianas naturales.",
        price: 11.99,
        inventory: 130,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 17,
        name: "Saw Palmetto",
        description: "540 mg, 100 Capsules. Apoya la salud de la próstata.",
        price: 12.99,
        inventory: 240,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 18,
        name: "Vitamin C with Rose Hips",
        description: "1000 mg, 250 Capsules. Refuerza el sistema inmunológico.",
        price: 29.99,
        inventory: 140,
        category_id: 4,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 19,
        name: "Collagen Peptides",
        description: "Unflavored, 454 g. Apoya la salud de la piel y articulaciones.",
        price: 49.99,
        inventory: 85,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 20,
        name: "Fish Oil",
        description: "1000 mg, 120 Softgels. Fuente de Omega-3.",
        price: 22.99,
        inventory: 160,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 21,
        name: "Full Spectrum® Astragalus",
        description: "470 mg, 100 Capsules. Apoya la salud inmunológica.",
        price: 16.99,
        inventory: 100,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 22,
        name: "Apple Cider Vinegar",
        description: "500 mg, 200 Capsules. Apoya la digestión y el control del peso.",
        price: 14.99,
        inventory: 220,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 23,
        name: "Vitamin K2",
        description: "100 mcg, 60 Capsules. Apoya la salud cardiovascular y ósea.",
        price: 18.99,
        inventory: 180,
        category_id: 4,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 24,
        name: "Chlorophyll",
        description: "100 mg, 100 Capsules. Apoya la desintoxicación del cuerpo.",
        price: 15.49,
        inventory: 210,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 25,
        name: "Full Spectrum® Ginger Root",
        description: "540 mg, 100 Capsules. Mejora la digestión.",
        price: 9.99,
        inventory: 120,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 26,
        name: "Magnesium Citrate",
        description: "200 mg, 120 Capsules. Apoya la salud muscular y nerviosa.",
        price: 16.89,
        inventory: 190,
        category_id: 4,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 27,
        name: "Full Spectrum® Echinacea",
        description: "400 mg, 100 Capsules. Estimula el sistema inmunológico.",
        price: 12.99,
        inventory: 150,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 28,
        name: "Quercetin",
        description: "500 mg, 60 Capsules. Apoya la salud respiratoria.",
        price: 25.99,
        inventory: 80,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 29,
        name: "Full Spectrum® Garlic",
        description: "400 mg, 200 Capsules. Propiedades antioxidantes y antibacterianas.",
        price: 19.49,
        inventory: 170,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 30,
        name: "Grape Seed Extract",
        description: "100 mg, 60 Capsules. Potente antioxidante.",
        price: 23.99,
        inventory: 95,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 31,
        name: "L-Theanine",
        description: "200 mg, 60 Capsules. Apoya la relajación y el bienestar.",
        price: 21.99,
        inventory: 100,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 32,
        name: "Spirulina",
        description: "500 mg, 100 Tablets. Fuente rica en proteínas y antioxidantes.",
        price: 22.99,
        inventory: 110,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 33,
        name: "Full Spectrum® Black Cohosh",
        description: "540 mg, 100 Capsules. Apoya la salud hormonal femenina.",
        price: 13.49,
        inventory: 120,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 34,
        name: "Vitamin E",
        description: "400 IU, 100 Softgels. Potente antioxidante para la piel.",
        price: 19.99,
        inventory: 140,
        category_id: 4,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 35,
        name: "Full Spectrum® Olive Leaf",
        description: "500 mg, 120 Capsules. Apoya la salud cardiovascular.",
        price: 14.99,
        inventory: 190,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 36,
        name: "Vitamin A",
        description: "10000 IU, 100 Capsules. Apoya la visión y la piel saludable.",
        price: 11.99,
        inventory: 160,
        category_id: 4,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 37,
        name: "Boron Complex",
        description: "3 mg, 100 Capsules. Apoya la salud ósea y articular.",
        price: 8.99,
        inventory: 150,
        category_id: 4,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 38,
        name: "Full Spectrum® Holy Basil",
        description: "450 mg, 90 Capsules. Mejora la respuesta al estrés.",
        price: 12.49,
        inventory: 100,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 39,
        name: "Full Spectrum® Nettle Root",
        description: "500 mg, 100 Capsules. Apoya la salud del tracto urinario.",
        price: 14.99,
        inventory: 130,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 40,
        name: "MSM",
        description: "1000 mg, 120 Capsules. Apoya la salud de las articulaciones.",
        price: 24.99,
        inventory: 80,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 41,
        name: "Coconut Oil",
        description: "1000 mg, 120 Softgels. Fuente natural de ácidos grasos.",
        price: 14.99,
        inventory: 220,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 42,
        name: "Alpha Lipoic Acid",
        description: "200 mg, 60 Capsules. Potente antioxidante.",
        price: 19.99,
        inventory: 180,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 43,
        name: "Bitter Melon",
        description: "500 mg, 60 Capsules. Apoya el metabolismo saludable.",
        price: 11.99,
        inventory: 130,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 44,
        name: "Biotin",
        description: "5000 mcg, 120 Capsules. Apoya la salud del cabello y las uñas.",
        price: 14.99,
        inventory: 250,
        category_id: 4,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 45,
        name: "Choline & Inositol",
        description: "500 mg, 100 Capsules. Apoya la salud cerebral.",
        price: 13.99,
        inventory: 100,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 46,
        name: "Folic Acid",
        description: "800 mcg, 250 Tablets. Apoya la salud cardiovascular.",
        price: 10.99,
        inventory: 150,
        category_id: 4,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 47,
        name: "Full Spectrum® Tribulus",
        description: "500 mg, 90 Capsules. Apoya la salud hormonal.",
        price: 12.99,
        inventory: 200,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 48,
        name: "Full Spectrum® Hawthorn Berry",
        description: "565 mg, 90 Capsules. Apoya la salud cardiovascular.",
        price: 11.99,
        inventory: 110,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 49,
        name: "Green Tea Extract",
        description: "500 mg, 60 Capsules. Rico en antioxidantes.",
        price: 19.99,
        inventory: 150,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    },
    {
        id: 50,
        name: "Full Spectrum® Pumpkin Seed Oil",
        description: "1000 mg, 100 Softgels. Apoya la salud de la vejiga.",
        price: 22.99,
        inventory: 140,
        category_id: 5,
        creation_date: new Date('2024-09-21')
    }
];
