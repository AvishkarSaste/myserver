const { MongoClient } = require("mongodb");

const url = "mongodb+srv://jasimanaaa:NGQZ53t8dlBXHpU9@cluster0.elq70da.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const con = new MongoClient(url);

const quotes = [
  { author: "Nelson Mandela", message: "It always seems impossible until it's done." },
  { author: "Walt Disney", message: "The way to get started is to quit talking and begin doing." },
  { author: "Steve Jobs", message: "The only way to do great work is to love what you do." },
  { author: "Oprah Winfrey", message: "The biggest adventure you can take is to live the life of your dreams." },
  { author: "Albert Einstein", message: "Life is like riding a bicycle. To keep your balance you must keep moving." },
  { author: "Confucius", message: "It does not matter how slowly you go as long as you do not stop." },
  { author: "Eleanor Roosevelt", message: "The future belongs to those who believe in the beauty of their dreams." },
  { author: "Zig Ziglar", message: "You don’t have to be great to start, but you have to start to be great." },
  { author: "Tony Robbins", message: "The only limit to your impact is your imagination and commitment." },
  { author: "Brian Tracy", message: "Make your life a masterpiece; imagine no limitations on what you can be." },
  { author: "Theodore Roosevelt", message: "Believe you can and you're halfway there." },
  { author: "Thomas Edison", message: "Genius is one percent inspiration and ninety-nine percent perspiration." },
  { author: "Aristotle", message: "We are what we repeatedly do. Excellence, then, is not an act, but a habit." },
  { author: "Vince Lombardi", message: "Winners never quit and quitters never win." },
  { author: "Jim Rohn", message: "Discipline is the bridge between goals and accomplishment." },
  { author: "Helen Keller", message: "Optimism is the faith that leads to achievement." },
  { author: "Mark Twain", message: "The secret of getting ahead is getting started." },
  { author: "Maya Angelou", message: "Nothing will work unless you do." },
  { author: "Dr. Seuss", message: "You’re off to great places! Today is your day!" },
  { author: "Sheryl Sandberg", message: "Done is better than perfect." },
  { author: "J.K. Rowling", message: "It is our choices that show what we truly are, far more than our abilities." },
  { author: "Les Brown", message: "Shoot for the moon. Even if you miss, you'll land among the stars." },
  { author: "Babe Ruth", message: "Never let the fear of striking out keep you from playing the game." },
  { author: "Michael Jordan", message: "I can accept failure. Everyone fails at something. But I can’t accept not trying." },
  { author: "Franklin D. Roosevelt", message: "The only thing we have to fear is fear itself." },
  { author: "John Wooden", message: "Make each day your masterpiece." },
  { author: "Martin Luther King Jr.", message: "Faith is taking the first step even when you don't see the whole staircase." },
  { author: "Elon Musk", message: "When something is important enough, you do it even if the odds are not in your favor." },
  { author: "Barack Obama", message: "The future rewards those who press on." },
  { author: "Richard Branson", message: "If your dreams don’t scare you, they are too small." },
  { author: "Arnold Schwarzenegger", message: "Strength does not come from winning. Your struggles develop your strengths." },
  { author: "Peter Drucker", message: "The best way to predict the future is to create it." },
  { author: "Benjamin Franklin", message: "By failing to prepare, you are preparing to fail." },
  { author: "Ralph Waldo Emerson", message: "Do not go where the path may lead, go instead where there is no path and leave a trail." },
  { author: "Henry Ford", message: "Whether you think you can, or you think you can’t – you’re right." },
  { author: "Dale Carnegie", message: "Most of the important things in the world have been accomplished by people who kept on trying." },
  { author: "Marie Curie", message: "Nothing in life is to be feared. It is only to be understood." },
  { author: "Stephen Covey", message: "Live out of your imagination, not your history." },
  { author: "Wayne Dyer", message: "Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice." },
  { author: "Robin Sharma", message: "Dream big. Start small. Act now." },
  { author: "Brene Brown", message: "You can choose courage or you can choose comfort. You cannot have both." },
  { author: "Leslie Knope", message: "No one achieves anything alone." },
  { author: "Bob Proctor", message: "Thoughts become things. If you see it in your mind, you will hold it in your hand." },
  { author: "Grant Cardone", message: "Your greatness is limited only by the investments you make in yourself." },
  { author: "Tim Ferriss", message: "Conditions are never perfect. ‘Someday’ is a disease." },
  { author: "Jay Shetty", message: "Don't let your past define your future." },
  { author: "Inky Johnson", message: "The process is more important than the product." },
  { author: "James Clear", message: "You do not rise to the level of your goals. You fall to the level of your systems." },
  { author: "Simon Sinek", message: "Working hard for something we don't care about is called stress; working hard for something we love is called passion." }
];

con.connect()
.then(()=>{
	const db = con.db("msg_28june25");
	const coll = db.collection("messages");
	return coll.insertMany(quotes);
})
.then(()=>{
	console.log(" 50 motivational quotes inserted!");
	con.close();
})
.catch((err)=>{
	console.log(" Error:", err);
});
