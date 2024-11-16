let quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall."+"<br>"+ "- Nelson Mandela",
    "The way to get started is to quit talking and begin doing. "+"<br>"+ "- Walt Disney",
    "Your time is limited, so don't waste it living someone else's life.Don't be trapped by dogma – which is living with the results of other people's thinking. "+"<br>"+ "- Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams." +"<br>"+ "- Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. "+"<br>"+ "- Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." +"<br>"+ "- James Cameron",
    "You may say I'm a dreamer, but I'm not the only one.I hope someday you'll join us. And the world will live as one. "+"<br>"+ "- John Lennon"
]

document.getElementById('p').innerHTML = quotes[0]
let quote =[]
document.querySelector('#new').addEventListener('click', ()=>{
    for (let i = 0; i < quotes.length; i++) {
        quote += quotes[i];
        let random = Math.floor(Math.random() * quotes.length)
        document.getElementById('p').innerHTML =  quotes[random]
    };
})



