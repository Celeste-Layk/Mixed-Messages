const zodiacAnimals = [
    "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep", "Monkey", "Rooster", "Dog", "Pig"
];
const year = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031];

const zodiacCharacteristics = ["You are lucky with money", "You are easy going, and inspire others", "You are very successful", "You are clever and wise", "You are honest, sensitive and brave", "You say little, but have great wisdom", "You are cheerful, skillful with money, and perceptive", "You are shy, pessimistic, and puzzled about life", "You are  Clever, skillful, and flexible", "You are a deep thinker, capable, and talented", "You have a deep sense of loyalty, are honest, and can keep secrets", "Studious and gallant with tremendous inner strength" ]

const getZodiacAnimal = () => {
    const randomZodiacAnimal = Math.floor(Math.random() *12);
    const randomAnimal = zodiacAnimals[randomZodiacAnimal];
    return randomAnimal;
};

const getRanZodiacCharacteristics = () => {
    const ranZodiacCharacteristics = Math.floor(Math.random() *12);
    const ranCharacteristics = zodiacCharacteristics[ranZodiacCharacteristics];
    return ranCharacteristics;
};

const getMessage = () => {
    return `Hi! You are ${ getZodiacAnimal } and ${ getRanZodiacCharacteristics }.`
};
console.log(getMessage);