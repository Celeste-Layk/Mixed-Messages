
const random = array => Math.floor(Math.random() * array.length);

const chineseZodiac = () => {
    const zodiacAnimal = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep", "Monkey", "Rooster", "Dog", "Pig"];

    const zodiacSaying = ["You are lucky with money", "You are easy going, and inspire others", "You are very successful", "You are clever and wise", "You are honest, sensitive and brave", "You say little, but have great wisdom", "You are cheerful, skillful with money, and perceptive", "You are shy, pessimistic, and puzzled about life", "You are  Clever, skillful, and flexible", "You are a deep thinker, capable, and talented", "You have a deep sense of loyalty, are honest, and can keep secrets", "Studious and gallant with tremendous inner strength"];
    return `Hi your sign is a ${zodiacAnimal[random(zodiacAnimal)]}! which means ${zodiacSaying[random(zodiacSaying)]}`
}
console.log(chineseZodiac());