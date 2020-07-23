/*
let testMovie = {
			id: 0,
			title: "The Movie",
			year: 2000,
			genre: ["genre1", "genre2"],
			runtime: 120, 
			poster: "/img/poster.jpg", 
			//Attributes below are user-added, not by API. All but "rating" are strictly for moi
			rating: 5, // null if not watched
			watched: true //watched or not watched
			quality: "high", //low/medium/high
			subtitles: false,
			franchise: { //null if not part of franchise. obj if part of franchise with franchise name and # in franchise as attributes
				name: "String",
				number: 1
			}
		}

*/
//use this to quickly organize video data: http://www.convertcsv.com/csv-to-json.htm


function dataForDB() {
	return (
		[
		 {
		   "title": "10 Things I Hate About You",
		   "year": null
		 },
		 {
		   "title": "12 Years a Slave",
		   "year": null
		 },
		 {
		   "title": "21 Jump Street",
		   "year": null
		 },
		 {
		   "title": "22 Jump Street",
		   "year": null
		 },
		 {
		   "title": "(500) Days of Summer",
		   "year": null
		 },
		 {
		   "title": "A Little Princess",
		   "year": null
		 },
		 {
		   "title": "A Walk to Remember",
		   "year": null
		 },
		 {
		   "title": "A Series of Unfortunate Events",
		   "year": null
		 },
		 {
		   "title": "About Time",
		   "year": null
		 },
		 {
		   "title": "The Adjustment Bureau",
		   "year": null
		 },
		 {
		   "title": "Airplane!",
		   "year": null
		 },
		 {
		   "title": "Aladdin",
		   "year": 1992
		 },
		 {
		   "title": "Alice in Wonderland",
		   "year": 2010
		 },
		 {
		   "title": "The Amazing Spider-Man",
		   "year": 2012
		 },
		 {
		   "title": "The Amazing Spider-Man 2",
		   "year": 2014
		 },
		 {
		   "title": "Amelie ",
		   "year": null
		 },
		 {
		   "title": "American Hustle",
		   "year": null
		 },
		 {
		   "title": "American Sniper",
		   "year": null
		 },
		 {
		   "title": "Anchorman",
		   "year": 2004
		 },
		 {
		   "title": "Anchorman 2",
		   "year": 2013
		 },
		 {
		   "title": "Anna Karenina",
		   "year": null
		 },
		 {
		   "title": "Annihilation",
		   "year": null
		 },
		 {
		   "title": "Ant Man",
		   "year": null
		 },
		 {
		   "title": "Ant Man & The Wasp",
		   "year": null
		 },
		 {
		   "title": "Aquaman",
		   "year": null
		 },
		 {
		   "title": "Atomic Blonde",
		   "year": null
		 },
		 {
		   "title": "Atonement",
		   "year": null
		 },
		 {
		   "title": "August: Osage County",
		   "year": null
		 },
		 {
		   "title": "Avatar",
		   "year": null
		 },
		 {
		   "title": "The Avengers",
		   "year": 2012
		 },
		 {
		   "title": "The Avengers: Infinity War",
		   "year": 2018
		 },
		 {
		   "title": "Baby Driver",
		   "year": null
		 },
		 {
		   "title": "Back To The Future",
		   "year": null
		 },
		 {
		   "title": "Batman Begins",
		   "year": null
		 },
		 {
		   "title": "Beasts of the Southern Wild",
		   "year": null
		 },
		 {
		   "title": "Beauty and the Beast",
		   "year": null
		 },
		 {
		   "title": "Before We Go",
		   "year": null
		 },
		 {
		   "title": "Belle",
		   "year": null
		 },
		 {
		   "title": "Big Fish",
		   "year": null
		 },
		 {
		   "title": "Big Hero 6",
		   "year": null
		 },
		 {
		   "title": "The Big Short",
		   "year": null
		 },
		 {
		   "title": "Birdman",
		   "year": null
		 },
		 {
		   "title": "Blade Runner 2049",
		   "year": 2017
		 },
		 {
		   "title": "Blue Jasmine",
		   "year": null
		 },
		 {
		   "title": "The Book of Life",
		   "year": null
		 },
		 {
		   "title": "The Book Thief",
		   "year": null
		 },
		 {
		   "title": "The Boxtrolls",
		   "year": null
		 },
		 {
		   "title": "The Breakfast Club",
		   "year": null
		 },
		 {
		   "title": "Bridesmaids",
		   "year": null
		 },
		 {
		   "title": "Bruce Almighty",
		   "year": null
		 },
		 {
		   "title": "Brave",
		   "year": null
		 },
		 {
		   "title": "Burnt",
		   "year": null
		 },
		 {
		   "title": "Call Me By Your Name",
		   "year": null
		 },
		 {
		   "title": "Camp X-Ray",
		   "year": null
		 },
		 {
		   "title": "Captain America: The First Avenger",
		   "year": null
		 },
		 {
		   "title": "Captain America 2: The Winter Soldier",
		   "year": null
		 },
		 {
		   "title": "Captain Phillips",
		   "year": null
		 },
		 {
		   "title": "Children of Men",
		   "year": null
		 },
		 {
		   "title": "The Chronicles of Narnia: The Lion, The Witch and the Wardrobe",
		   "year": null
		 },
		 {
		   "title": "The Chronicles of Narnia: Prince Caspian",
		   "year": null
		 },
		 {
		   "title": "The Chronicles of Narnia: Voyage of the Dawn Treader",
		   "year": null
		 },
		 {
		   "title": "Cloud Atlas",
		   "year": null
		 },
		 {
		   "title": "Cloudburst",
		   "year": null
		 },
		 {
		   "title": "Coraline",
		   "year": null
		 },
		 {
		   "title": "Crazy Rich Asians",
		   "year": null
		 },
		 {
		   "title": "The Croods",
		   "year": null
		 },
		 {
		   "title": "Dallas Buyers Club",
		   "year": null
		 },
		 {
		   "title": "The Dark Knight",
		   "year": null
		 },
		 {
		   "title": "The Dark Knight Rises",
		   "year": null
		 },
		 {
		   "title": "Dead Poet's Society",
		   "year": null
		 },
		 {
		   "title": "Despicable Me",
		   "year": null
		 },
		 {
		   "title": "The Devil Wears Prada",
		   "year": null
		 },
		 {
		   "title": "Django Unchained",
		   "year": null
		 },
		 {
		   "title": "Easy A",
		   "year": null
		 },
		 {
		   "title": "Edge of Tomorrow",
		   "year": null
		 },
		 {
		   "title": "Ella Enchanted",
		   "year": null
		 },
		 {
		   "title": "Eternal Sunshine of the Spotless Mind",
		   "year": null
		 },
		 {
		   "title": "Everest",
		   "year": null
		 },
		 {
		   "title": "The Fall",
		   "year": null
		 },
		 {
		   "title": "Fantastic Four",
		   "year": 2005
		 },
		 {
		   "title": "The Fault in Our Stars",
		   "year": null
		 },
		 {
		   "title": "Ferris Bueller's Day Off",
		   "year": null
		 },
		 {
		   "title": "The Fifth Estate",
		   "year": null
		 },
		 {
		   "title": "Finding Nemo",
		   "year": null
		 },
		 {
		   "title": "Forrest Gump",
		   "year": null
		 },
		 {
		   "title": "The Fountain",
		   "year": null
		 },
		 {
		   "title": "Frost / Nixon",
		   "year": null
		 },
		 {
		   "title": "Frozen",
		   "year": null
		 },
		 {
		   "title": "Fruitvale Station",
		   "year": null
		 },
		 {
		   "title": "Get Out",
		   "year": null
		 },
		 {
		   "title": "Gimme Shelter",
		   "year": null
		 },
		 {
		   "title": "The Good Dinosaur",
		   "year": null
		 },
		 {
		   "title": "Gone Girl",
		   "year": null
		 },
		 {
		   "title": "The Grand Budapest Hotel",
		   "year": null
		 },
		 {
		   "title": "Gravity",
		   "year": null
		 },
		 {
		   "title": "The Great Gatsby",
		   "year": null
		 },
		 {
		   "title": "Guardians of the Galaxy",
		   "year": null
		 },
		 {
		   "title": "Harry Potter and the Sorcerer's Stone",
		   "year": null
		 },
		 {
		   "title": "Harry Potter and the Chamber of Secrets",
		   "year": null
		 },
		 {
		   "title": "Harry Potter and the Prisoner of Azkaban",
		   "year": null
		 },
		 {
		   "title": "Harry Potter and the Goblet of Fire",
		   "year": null
		 },
		 {
		   "title": "Harry Potter and the Order of the Phoenix",
		   "year": null
		 },
		 {
		   "title": "Harry Potter and the Half-Blood Prince",
		   "year": null
		 },
		 {
		   "title": "Harry Potter and the Deathly Hallows: Part 1",
		   "year": null
		 },
		 {
		   "title": "Harry Potter and the Deathly Hallows: Part 2",
		   "year": null
		 },
		 {
		   "title": "The Help",
		   "year": null
		 },
		 {
		   "title": "He Named Me Malala",
		   "year": null
		 },
		 {
		   "title": "Her",
		   "year": null
		 },
		 {
		   "title": "The Hitchhiker's Guide to the Galaxy",
		   "year": null
		 },
		 {
		   "title": "How To Train Your Dragon",
		   "year": null
		 },
		 {
		   "title": "Hugo",
		   "year": null
		 },
		 {
		   "title": "The Hunger Games",
		   "year": null
		 },
		 {
		   "title": "The Hunger Games 2: Catching Fire",
		   "year": null
		 },
		 {
		   "title": "I Love You Phillip Morris",
		   "year": null
		 },
		 {
		   "title": "If I Stay",
		   "year": null
		 },
		 {
		   "title": "Imagine Me & You",
		   "year": null
		 },
		 {
		   "title": "The Imitation Game",
		   "year": null
		 },
		 {
		   "title": "Inception",
		   "year": null
		 },
		 {
		   "title": "The Incredibles",
		   "year": null
		 },
		 {
		   "title": "The Incredibles 2",
		   "year": null
		 },
		 {
		   "title": "Inglorious Bastards",
		   "year": null
		 },
		 {
		   "title": "Inside Llewyn Davis",
		   "year": null
		 },
		 {
		   "title": "The Internship",
		   "year": null
		 },
		 {
		   "title": "Interstellar",
		   "year": null
		 },
		 {
		   "title": "Into The Woods",
		   "year": null
		 },
		 {
		   "title": "The Invention of Lying",
		   "year": null
		 },
		 {
		   "title": "The Iron Giant",
		   "year": null
		 },
		 {
		   "title": "The Iron Lady",
		   "year": null
		 },
		 {
		   "title": "Iron Man",
		   "year": null
		 },
		 {
		   "title": "Iron Man 2",
		   "year": null
		 },
		 {
		   "title": "Iron Man 3",
		   "year": null
		 },
		 {
		   "title": "Jane Eyre",
		   "year": null
		 },
		 {
		   "title": "Juno",
		   "year": null
		 },
		 {
		   "title": "Jupiter Ascending",
		   "year": null
		 },
		 {
		   "title": "Jurassic Park",
		   "year": null
		 },
		 {
		   "title": "Jurassic World",
		   "year": null
		 },
		 {
		   "title": "The Kids Are All Right",
		   "year": null
		 },
		 {
		   "title": "Kingsman",
		   "year": null
		 },
		 {
		   "title": "The King's Speech",
		   "year": null
		 },
		 {
		   "title": "Labyrinth",
		   "year": null
		 },
		 {
		   "title": "Legally Blonde",
		   "year": null
		 },
		 {
		   "title": "Legally Blonde 2",
		   "year": null
		 },
		 {
		   "title": "The Lego Movie",
		   "year": null
		 },
		 {
		   "title": "Life of Pi",
		   "year": null
		 },
		 {
		   "title": "Like Crazy",
		   "year": null
		 },
		 {
		   "title": "Lilo and Stitch",
		   "year": null
		 },
		 {
		   "title": "The Lion King",
		   "year": null
		 },
		 {
		   "title": "Little Miss Sunshine",
		   "year": null
		 },
		 {
		   "title": "Looper",
		   "year": null
		 },
		 {
		   "title": "Lost In Translation",
		   "year": null
		 },
		 {
		   "title": "Love Actually",
		   "year": null
		 },
		 {
		   "title": "Lucy",
		   "year": null
		 },
		 {
		   "title": "Mad Max: Fury Road",
		   "year": null
		 },
		 {
		   "title": "Maleficent",
		   "year": null
		 },
		 {
		   "title": "Mamma Mia!",
		   "year": null
		 },
		 {
		   "title": "Mandela: Long Walk to Freedom",
		   "year": null
		 },
		 {
		   "title": "Marie Antoinette",
		   "year": null
		 },
		 {
		   "title": "Marley and Me",
		   "year": null
		 },
		 {
		   "title": "The Martian",
		   "year": null
		 },
		 {
		   "title": "The Master",
		   "year": null
		 },
		 {
		   "title": "The Matrix",
		   "year": null
		 },
		 {
		   "title": "Mean Girls",
		   "year": null
		 },
		 {
		   "title": "Memento",
		   "year": null
		 },
		 {
		   "title": "Men in Black",
		   "year": null
		 },
		 {
		   "title": "Midnight in Paris",
		   "year": null
		 },
		 {
		   "title": "Milk",
		   "year": null
		 },
		 {
		   "title": "Miss Congeniality",
		   "year": null
		 },
		 {
		   "title": "Mission Impossible: Rogue Nation",
		   "year": null
		 },
		 {
		   "title": "Moonlight",
		   "year": null
		 },
		 {
		   "title": "Moonrise Kingdom",
		   "year": null
		 },
		 {
		   "title": "Monsters Inc.",
		   "year": null
		 },
		 {
		   "title": "Monsters University",
		   "year": null
		 },
		 {
		   "title": "Mulan",
		   "year": null
		 },
		 {
		   "title": "Mulan 2",
		   "year": null
		 },
		 {
		   "title": "My Week With Marilyn",
		   "year": null
		 },
		 {
		   "title": "Nebraska",
		   "year": null
		 },
		 {
		   "title": "Newsies",
		   "year": null
		 },
		 {
		   "title": "Night at the Museum",
		   "year": null
		 },
		 {
		   "title": "Not Another Teen Movie",
		   "year": null
		 },
		 {
		   "title": "Now You See Me",
		   "year": null
		 },
		 {
		   "title": "O Brother, Where Art Thou?",
		   "year": null
		 },
		 {
		   "title": "Oceans 8",
		   "year": null
		 },
		 {
		   "title": "Pacific Rim",
		   "year": null
		 },
		 {
		   "title": "Paper Towns",
		   "year": null
		 },
		 {
		   "title": "Philomena",
		   "year": null
		 },
		 {
		   "title": "The Pirates of the Caribbean: Curse of the Black Pearl",
		   "year": null
		 },
		 {
		   "title": "The Pirates of the Caribbean: Dead Man's Chest",
		   "year": null
		 },
		 {
		   "title": "The Pirates of the Caribbean: At World's End",
		   "year": null
		 },
		 {
		   "title": "The Pirates of the Caribbean: On Stranger Tides",
		   "year": null
		 },
		 {
		   "title": "Pitch Perfect",
		   "year": null
		 },
		 {
		   "title": "Pretty in Pink",
		   "year": null
		 },
		 {
		   "title": "Pride & Prejudice",
		   "year": 2005
		 },
		 {
		   "title": "The Prince of Egypt",
		   "year": null
		 },
		 {
		   "title": "The Princess and the Frog",
		   "year": null
		 },
		 {
		   "title": "The Princess Bride",
		   "year": null
		 },
		 {
		   "title": "Pulp Fiction",
		   "year": null
		 },
		 {
		   "title": "Push",
		   "year": null
		 },
		 {
		   "title": "Ratatouille",
		   "year": null
		 },
		 {
		   "title": "Red Sparrow",
		   "year": null
		 },
		 {
		   "title": "Rise of the Guardians",
		   "year": null
		 },
		 {
		   "title": "The Road to El Dorado",
		   "year": null
		 },
		 {
		   "title": "Robin Hood: Men in Tights",
		   "year": null
		 },
		 {
		   "title": "The Royal Tenebaums",
		   "year": null
		 },
		 {
		   "title": "Rush",
		   "year": null
		 },
		 {
		   "title": "Saving Mr. Banks",
		   "year": null
		 },
		 {
		   "title": "The School of Rock",
		   "year": null
		 },
		 {
		   "title": "The Secret Garden",
		   "year": null
		 },
		 {
		   "title": "She's The Man",
		   "year": null
		 },
		 {
		   "title": "Short Term 12",
		   "year": null
		 },
		 {
		   "title": "Silver Linings Playbook",
		   "year": null
		 },
		 {
		   "title": "Snowpiecer",
		   "year": null
		 },
		 {
		   "title": "Snow White and the Huntsman",
		   "year": null
		 },
		 {
		   "title": "The Social Network",
		   "year": null
		 },
		 {
		   "title": "The Sound of Music",
		   "year": null
		 },
		 {
		   "title": "Spirited Away",
		   "year": null
		 },
		 {
		   "title": "Spider-Man: Homecoming",
		   "year": 2017
		 },
		 {
		   "title": "Spider-Man: Into the Spider-Verse",
		   "year": 2018
		 },
		 {
		   "title": "Stardust",
		   "year": null
		 },
		 {
		   "title": "Star Trek",
		   "year": 2009
		 },
		 {
		   "title": "Star Trek: Into Darkness",
		   "year": null
		 },
		 {
		   "title": "Star Wars - A Phantom Menace",
		   "year": 1999
		 },
		 {
		   "title": "Star Wars - Attack of the Clones",
		   "year": 2002
		 },
		 {
		   "title": "Star Wars - Revenge of the Sith",
		   "year": 2005
		 },
		 {
		   "title": "Star Wars - A New Hope",
		   "year": 1977
		 },
		 {
		   "title": "Star Wars - The Empire Strikes Back",
		   "year": 1980
		 },
		 {
		   "title": "Star Wars - The Return of the Jedi",
		   "year": 1983
		 },
		 {
		   "title": "Star Wars - The Force Awakens",
		   "year": 2015
		 },
		 {
		   "title": "Stick It",
		   "year": null
		 },
		 {
		   "title": "Sucker Punch",
		   "year": null
		 },
		 {
		   "title": "Tangled",
		   "year": null
		 },
		 {
		   "title": "Thor",
		   "year": null
		 },
		 {
		   "title": "Thor: The Dark World",
		   "year": null
		 },
		 {
		   "title": "Titanic",
		   "year": null
		 },
		 {
		   "title": "Toy Story",
		   "year": null
		 },
		 {
		   "title": "Toy Story 2",
		   "year": null
		 },
		 {
		   "title": "Toy Story 3",
		   "year": null
		 },
		 {
		   "title": "Transcendence",
		   "year": null
		 },
		 {
		   "title": "Unbroken",
		   "year": null
		 },
		 {
		   "title": "Up",
		   "year": null
		 },
		 {
		   "title": "V For Vendetta",
		   "year": null
		 },
		 {
		   "title": "Venom",
		   "year": null
		 },
		 {
		   "title": "The Virgin Suicides",
		   "year": null
		 },
		 {
		   "title": "Wall.e",
		   "year": null
		 },
		 {
		   "title": "Warm Bodies",
		   "year": null
		 },
		 {
		   "title": "Watchmen",
		   "year": null
		 },
		 {
		   "title": "Water For Elephants",
		   "year": null
		 },
		 {
		   "title": "We Need To Talk About Kevin",
		   "year": null
		 },
		 {
		   "title": "What's Your Number?",
		   "year": null
		 },
		 {
		   "title": "Whip It",
		   "year": null
		 },
		 {
		   "title": "The Wolf of Wall Street",
		   "year": null
		 },
		 {
		   "title": "The Wolverine",
		   "year": null
		 },
		 {
		   "title": "Wonder Woman",
		   "year": null
		 },
		 {
		   "title": "Wreck It Ralph",
		   "year": null
		 },
		 {
		   "title": "X-Men",
		   "year": null
		 },
		 {
		   "title": "X-Men 2",
		   "year": null
		 },
		 {
		   "title": "X-Men 3: The Last Stand",
		   "year": null
		 },
		 {
		   "title": "X-Men Origins: Wolverine",
		   "year": null
		 },
		 {
		   "title": "X-Men: First Class",
		   "year": null
		 },
		 {
		   "title": "Yes Man",
		   "year": null
		 },
		 {
		   "title": "Zombieland",
		   "year": null
		 },
		 {
		   "title": "Zoolander",
		   "year": null
		 }
		]
	)
}

function dataFromDB() {
	return (
		[
			{
				"id": 19913,
				"title": "(500) Days of Summer",
				"description": "Tom, greeting-card writer and hopeless romantic, is caught completely off-guard when his girlfriend, Summer, suddenly dumps him. He reflects on their 500 days together to try to figure out where their love affair went sour, and in doing so, Tom rediscovers his true passions in life.",
				"year": "2009",
				"release_date": "2009-07-17",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 95,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/f9mbM0YMLpYemcWx6o2WeiYQLDP.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/2zFl6j8MB4jCKUQKVlADyESwkVY.jpg"
			},
			{
				"id": 4951,
				"title": "10 Things I Hate About You",
				"description": "On the first day at his new school, Cameron instantly falls for Bianca, the gorgeous girl of his dreams. The only problem is that Bianca is forbidden to date until her ill-tempered, completely un-dateable older sister Kat goes out, too. In an attempt to solve his problem, Cameron singles out the only guy who could possibly be a match for Kat: a mysterious bad boy with a nasty reputation of his own.",
				"year": "1999",
				"release_date": "1999-03-30",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10749,
						"name": "Romance"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 97,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/ujERk3aKABXU3NDXOAxEQYTHe9A.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/hqvYI3HxnRaewrD6oZWJkzdZfPB.jpg"
			},
			{
				"id": 76203,
				"title": "12 Years a Slave",
				"description": "In the pre-Civil War United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery. Facing cruelty as well as unexpected kindnesses Solomon struggles not only to stay alive, but to retain his dignity. In the twelfth year of his unforgettable odyssey, Solomon’s chance meeting with a Canadian abolitionist will forever alter his life.",
				"year": "2013",
				"release_date": "2013-10-18",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 36,
						"name": "History"
					}
				],
				"runtime": 134,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/xdANQijuNrJaw1HA61rDccME4Tm.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/4Bb1kMIfrT2tYRZ9M6Jhqy6gkeF.jpg"
			},
			{
				"id": 64688,
				"title": "21 Jump Street",
				"description": "In high school, Schmidt was a dork and Jenko was the popular jock. After graduation, both of them joined the police force and ended up as partners riding bicycles in the city park. Since they are young and look like high school students, they are assigned to an undercover unit to infiltrate a drug ring that is supplying high school students synthetic drugs.",
				"year": "2012",
				"release_date": "2012-03-14",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 80,
						"name": "Crime"
					}
				],
				"runtime": 109,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/8v3Sqv9UcIUC4ebmpKWROqPBINZ.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/lxCUDgZ54myV7goBrkpFoHRt9Ms.jpg"
			},
			{
				"id": 187017,
				"title": "22 Jump Street",
				"description": "After making their way through high school (twice), big changes are in store for officers Schmidt and Jenko when they go deep undercover at a local college. But when Jenko meets a kindred spirit on the football team, and Schmidt infiltrates the bohemian art major scene, they begin to question their partnership. Now they don't have to just crack the case - they have to figure out if they can have a mature relationship. If these two overgrown adolescents can grow from freshmen into real men, college might be the best thing that ever happened to them.",
				"year": "2014",
				"release_date": "2014-06-05",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 80,
						"name": "Crime"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 28,
						"name": "Action"
					}
				],
				"runtime": 112,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/ajB6cGvoy04438RzvfO6Sz28yMK.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/5fiqJTC391BU5qv90Tj9Xd1TyEt.jpg"
			},
			{
				"id": 19101,
				"title": "A Little Princess",
				"description": "When her father enlists to fight for the British in WWI, young Sara Crewe goes to New York to attend the same boarding school her late mother attended. She soon clashes with the severe headmistress, Miss Minchin, who attempts to stifle Sara's creativity and sense of self- worth.",
				"year": "1995",
				"release_date": "1995-05-10",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 97,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/1bK5wt5eHeWTGHsrEpahRG6HFI6.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/jhVZ3NajaZVE7XX7vAUjyfVTUCS.jpg"
			},
			{
				"id": 10229,
				"title": "A Walk to Remember",
				"description": "When the popular, restless Landon Carter is forced to participate in the school drama production he falls in love with Jamie Sullivan, the daughter of the town's minister. Jamie has a \"to-do\" list for her life and also a very big secret she must keep from Landon.",
				"year": "2002",
				"release_date": "2002-01-25",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 101,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/zSZELyRjZ2bgm8i3efOoKZbuCLN.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/1FWSGQZo6HAzqO52VHL405VxJ07.jpg"
			},
			{
				"id": 122906,
				"title": "About Time",
				"description": "The night after another unsatisfactory New Year party, Tim's father tells his son that the men in his family have always had the ability to travel through time. Tim can't change history, but he can change what happens and has happened in his own life – so he decides to make his world a better place... by getting a girlfriend. Sadly, that turns out not to be as easy as he thinks.",
				"year": "2013",
				"release_date": "2013-08-16",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 123,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/ls6zswrOZVhCXQBh96DlbnLBajM.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/erXaqSKECENEr9yBYXEF4zJ43RU.jpg"
			},
			{
				"id": 813,
				"title": "Airplane!",
				"description": "Alcoholic pilot, Ted Striker has developed a fear of flying due to wartime trauma, but nevertheless boards a passenger jet in an attempt to woo back his stewardess girlfriend. Food poisoning decimates the passengers and crew, leaving it up to Striker to land the plane with the help of a glue-sniffing air traffic controller and Striker's vengeful former Air Force captain, who must both talk him down.",
				"year": "1980",
				"release_date": "1980-07-02",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 88,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/hiURvJjCgk0s10urHVCg80TFF11.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/jntaI8c0RoMNNcfRVmcgn1NobHV.jpg"
			},
			{
				"id": 812,
				"title": "Aladdin",
				"description": "Princess Jasmine grows tired of being forced to remain in the palace, so she sneaks out into the marketplace, in disguise, where she meets street-urchin Aladdin.  The couple falls in love, although Jasmine may only marry a prince.  After being thrown in jail, Aladdin becomes embroiled in a plot to find a mysterious lamp, with which the evil Jafar hopes to rule the land.",
				"year": "1992",
				"release_date": "1992-11-25",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 90,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/jMQdkZwXh8TLsJev8cT0pKeTwrj.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/5OeY4U2rzePxWq2rkqMajUx2gz7.jpg"
			},
			{
				"id": 12155,
				"title": "Alice in Wonderland",
				"description": "Alice, an unpretentious and individual 19-year-old, is betrothed to a dunce of an English nobleman. At her engagement party, she escapes the crowd to consider whether to go through with the marriage and falls down a hole in the garden after spotting an unusual rabbit. Arriving in a strange and surreal place called 'Underland,' she finds herself in a world that resembles the nightmares she had as a child, filled with talking animals, villainous queens and knights, and frumious bandersnatches. Alice realizes that she is there for a reason – to conquer the horrific Jabberwocky and restore the rightful queen to her throne.",
				"year": "2010",
				"release_date": "2010-03-03",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 12,
						"name": "Adventure"
					}
				],
				"runtime": 108,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/o0kre9wRCZz3jjSjaru7QU0UtFz.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/20pkC7yJdCV4J1IMKfsCT9QU7zV.jpg"
			},
			{
				"id": 168672,
				"title": "American Hustle",
				"description": "A conman and his seductive partner are forced to work for a wild FBI agent, who pushes them into a world of Jersey power-brokers and the Mafia.",
				"year": "2013",
				"release_date": "2013-12-12",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 80,
						"name": "Crime"
					}
				],
				"runtime": 138,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/koXGRfatN0tURFWMA0Keb0p0Gtg.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/bof71DUdBb5FwTylar4rnIVd8z.jpg"
			},
			{
				"id": 190859,
				"title": "American Sniper",
				"description": "U.S. Navy SEAL Chris Kyle takes his sole mission—protect his comrades—to heart and becomes one of the most lethal snipers in American history. His pinpoint accuracy not only saves countless lives but also makes him a prime target of insurgents. Despite grave danger and his struggle to be a good husband and father to his family back in the States, Kyle serves four tours of duty in Iraq. However, when he finally returns home, he finds that he cannot leave the war behind.",
				"year": "2014",
				"release_date": "2014-12-11",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 10752,
						"name": "War"
					},
					{
						"id": 28,
						"name": "Action"
					}
				],
				"runtime": 133,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/oKJtbxRusjmu8sqzwnzhgUbojyg.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/dcqI4l0vvGAyLsGGxobNsCVQdNK.jpg"
			},
			{
				"id": 109443,
				"title": "Anchorman 2: The Legend Continues",
				"description": "With the 70s behind him, San Diego's top rated newsman, Ron Burgundy, returns to take New York's first 24-hour news channel by storm.",
				"year": "2013",
				"release_date": "2013-12-18",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 119,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/55volAzeebtFzyrx7DJkegvw8Ta.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/7DttTTSMBMPjXKw0UZC2lk3bfqR.jpg"
			},
			{
				"id": 8699,
				"title": "Anchorman: The Legend of Ron Burgundy",
				"description": "It's the 1970s, A San Diego  anchorman Ron Burgundy is the top dog in local TV, but that's all about to change when ambitious reporter Veronica Corningstone arrives as a new employee at his station.",
				"year": "2004",
				"release_date": "2004-07-09",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 95,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/mhZIcRePT7U8viFQVjt1ZjYIsR4.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/5iHPV6M6aPKxXv3w8LTxsD6Zeot.jpg"
			},
			{
				"id": 96724,
				"title": "Anna Karenina",
				"description": "Trapped in a loveless marriage, aristocrat Anna Karenina enters into a life-changing affair with the affluent Count Vronsky.",
				"year": "2012",
				"release_date": "2012-09-06",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 130,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/2DvjkCbmlg8sbBHZKUZvYPgsT5V.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/7UYA7ijE8vHybgvbBuAw8Cc2Dlu.jpg"
			},
			{
				"id": 300668,
				"title": "Annihilation",
				"description": "A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply.",
				"year": "2018",
				"release_date": "2018-02-22",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 27,
						"name": "Horror"
					}
				],
				"runtime": 115,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/d3qcpfNwbAMCNqWDHzPQsUYiUgS.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/5zfVNTrkhMu673zma6qhFzG01ig.jpg"
			},
			{
				"id": 102899,
				"title": "Ant-Man",
				"description": "Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
				"year": "2015",
				"release_date": "2015-07-14",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					}
				],
				"runtime": 117,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/jJhp59fwKP91sQ4QkR82YnSeOCZ.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/rv68BFLV8yjhDD5K26kbCMBcutX.jpg"
			},
			{
				"id": 363088,
				"title": "Ant-Man and the Wasp",
				"description": "Just when his time under house arrest is about to end, Scott Lang once again puts his freedom at risk to help Hope van Dyne and Dr. Hank Pym dive into the quantum realm and try to accomplish, against time and any chance of success, a very dangerous rescue mission.",
				"year": "2018",
				"release_date": "2018-07-04",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 119,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/eivQmS3wqzqnQWILHLc4FsEfcXP.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/6P3c80EOm7BodndGBUAJHHsHKrp.jpg"
			},
			{
				"id": 297802,
				"title": "Aquaman",
				"description": "Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne.",
				"year": "2018",
				"release_date": "2018-12-07",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 144,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg"
			},
			{
				"id": 341013,
				"title": "Atomic Blonde",
				"description": "An undercover MI6 agent is sent to Berlin during the Cold War to investigate the murder of a fellow agent and recover a missing list of double agents.",
				"year": "2017",
				"release_date": "2017-07-26",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 9648,
						"name": "Mystery"
					},
					{
						"id": 53,
						"name": "Thriller"
					}
				],
				"runtime": 115,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/kV9R5h0Yct1kR8Hf8sJ1nX0Vz4x.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/g3hni0i9iAQ13jDGOFWavJFlojc.jpg"
			},
			{
				"id": 4347,
				"title": "Atonement",
				"description": "As a 13-year-old, fledgling writer Briony Tallis irrevocably changes the course of several lives when she accuses her older sister's lover of a crime he did not commit.",
				"year": "2007",
				"release_date": "2007-09-07",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 123,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/bTwkpeOMChZtxDUPtbaQg1AbE5B.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/aNFORZ41x1FFbBv57MH8esW4JZh.jpg"
			},
			{
				"id": 152737,
				"title": "August: Osage County",
				"description": "A look at the lives of the strong-willed women of the Weston family, whose paths have diverged until a family crisis brings them back to the Midwest house they grew up in, and to the dysfunctional woman who raised them.",
				"year": "2013",
				"release_date": "2013-12-26",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 121,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/fvjxr77dfxdIOY3lvj0bHP4B5xT.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/tR7LYz6Y57vm8TMGQmwgzKrFrpT.jpg"
			},
			{
				"id": 19995,
				"title": "Avatar",
				"description": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
				"year": "2009",
				"release_date": "2009-12-10",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 162,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/eS8rJ1KzRNBewx9MduiSHM4kr7S.jpg"
			},
			{
				"id": 299536,
				"title": "Avengers: Infinity War",
				"description": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
				"year": "2018",
				"release_date": "2018-04-25",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 149,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg"
			},
			{
				"id": 339403,
				"title": "Baby Driver",
				"description": "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
				"year": "2017",
				"release_date": "2017-06-28",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 80,
						"name": "Crime"
					}
				],
				"runtime": 113,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/rmnQ9jKW72bHu8uKlMjPIb2VLMI.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/yir5430WblZSZuIMd9C6pIZerfA.jpg"
			},
			{
				"id": 105,
				"title": "Back to the Future",
				"description": "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
				"year": "1985",
				"release_date": "1985-07-03",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 116,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/fq3wyOs1RHyz2yfzsb4sck7aWRG.jpg"
			},
			{
				"id": 272,
				"title": "Batman Begins",
				"description": "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
				"year": "2005",
				"release_date": "2005-06-10",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 80,
						"name": "Crime"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 140,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/8RW2runSEc34IwKN2D1aPcJd2UL.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/lh5lbisD4oDbEKgUxoRaZU8HVrk.jpg"
			},
			{
				"id": 84175,
				"title": "Beasts of the Southern Wild",
				"description": "Hushpuppy, an intrepid six-year-old girl, lives with her father, Wink in 'the Bathtub', a southern Delta community at the edge of the world. Wink’s tough love prepares her for the unraveling of the universe—for a time when he’s no longer there to protect her. When Wink contracts a mysterious illness, nature flies out of whack—temperatures rise, and the ice caps melt, unleashing an army of prehistoric creatures called aurochs. With the waters rising, the aurochs coming, and Wink’s health fading, Hushpuppy goes in search of her lost mother.",
				"year": "2012",
				"release_date": "2012-06-29",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 93,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/nQJmWekGYlXhezGUb21xFfEfwhH.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/h3dbItKxnO0wanZO1hRahx7PA5L.jpg"
			},
			{
				"id": 10020,
				"title": "Beauty and the Beast",
				"description": "Follow the adventures of Belle, a bright young woman who finds herself in the castle of a prince who's been turned into a mysterious beast. With the help of the castle's enchanted staff, Belle soon learns the most important lesson of all -- that true beauty comes from within.",
				"year": "1991",
				"release_date": "1991-11-13",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 10749,
						"name": "Romance"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 84,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/jfSq96XzABA2BxvZgIBHyf5Wzrv.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/2RwQ5cwT1Ebt3ScxkJpR1nHOkXy.jpg"
			},
			{
				"id": 283350,
				"title": "Before We Go",
				"description": "A woman who is robbed on her way to catch the 1:30 train to Boston is left stranded in New York City. She meets a man who helps her during the course of the night and the two form a romance.",
				"year": "2014",
				"release_date": "2014-09-11",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					},
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 89,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/hbWU6Q6owywuCzLRSJ0Nzxh0E2E.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/z3QtDJam7FsRqD9z6WvmQBa7Jxm.jpg"
			},
			{
				"id": 205601,
				"title": "Belle",
				"description": "BELLE is inspired by the true story of Dido Elizabeth Belle, the illegitimate mixed race daughter of a Royal Navy Admiral. Raised by her aristocratic great-uncle Lord Mansfield and his wife, Belle's lineage affords her certain privileges, yet the color of her skin prevents her from fully participating in the traditions of her social standing. Left to wonder if she will ever find love, Belle falls for an idealistic young vicar's son bent on change who, with her help, shapes Lord Mansfield's role as Lord Chief Justice to end slavery in England",
				"year": "2013",
				"release_date": "2013-05-01",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 105,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/lcT8h3pfoAFuhqmDOdI5SaPeW3X.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/bwMxFhvGXUBWjWK64lnWJ9VUhCY.jpg"
			},
			{
				"id": 587,
				"title": "Big Fish",
				"description": "Throughout his life Edward Bloom has always been a man of big appetites, enormous passions and tall tales. In his later years, he remains a huge mystery to his son, William. Now, to get to know the real man, Will begins piecing together a true picture of his father from flashbacks of his amazing adventures.",
				"year": "2003",
				"release_date": "2003-12-25",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 125,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/tjK063yCgaBAluVU72rZ6PKPH2l.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/xN3xKxD6TI87RuGZXsiF1fMjN6Z.jpg"
			},
			{
				"id": 177572,
				"title": "Big Hero 6",
				"description": "The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.",
				"year": "2014",
				"release_date": "2014-10-24",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 102,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/2mxS4wUimwlLmI1xp6QW6NSU361.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/4s2d3xdyqotiVNHTlTlJjrr3q0H.jpg"
			},
			{
				"id": 194662,
				"title": "Birdman or (The Unexpected Virtue of Ignorance)",
				"description": "A fading actor best known for his portrayal of a popular superhero attempts to mount a comeback by appearing in a Broadway play. As opening night approaches, his attempts to become more altruistic, rebuild his career, and reconnect with friends and family prove more difficult than expected.",
				"year": "2014",
				"release_date": "2014-08-27",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 120,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/lvWL5ZRlYFh7M7fOvYswcRqyprI.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/pDqwUJJSaHIv2sxyRYfmYBFeU9C.jpg"
			},
			{
				"id": 335984,
				"title": "Blade Runner 2049",
				"description": "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
				"year": "2017",
				"release_date": "2017-10-04",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 163,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/sAtoMqDVhNDQBc3QJL3RF6hlhGq.jpg"
			},
			{
				"id": 160588,
				"title": "Blue Jasmine",
				"description": "After experiencing a traumatic misfortune, Jasmine French, a wealthy woman from New York, moves to San Francisco to live with her foster sister Ginger and the firm purpose of getting a new life, but she will be haunted by anxiety and memories of the past.",
				"year": "2013",
				"release_date": "2013-07-25",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 99,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/zLdLiUJfueZBctdv8OvkmGXEHEC.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/jDJCWtxwHRhFhhlm2vIV8ktOtJM.jpg"
			},
			{
				"id": 62177,
				"title": "Brave",
				"description": "Brave is set in the mystical Scottish Highlands, where Mérida is the princess of a kingdom ruled by King Fergus and Queen Elinor. An unruly daughter and an accomplished archer, Mérida one day defies a sacred custom of the land and inadvertently brings turmoil to the kingdom. In an attempt to set things right, Mérida seeks out an eccentric old Wise Woman and is granted an ill-fated wish. Also figuring into Mérida’s quest — and serving as comic relief — are the kingdom’s three lords: the enormous Lord MacGuffin, the surly Lord Macintosh, and the disagreeable Lord Dingwall.",
				"year": "2012",
				"release_date": "2012-06-21",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 93,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/fg57nIBn2xQw8JZKIX6AzMa3pEp.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/qx9ts2hBYJrkIQxhryitxnLlm2u.jpg"
			},
			{
				"id": 55721,
				"title": "Bridesmaids",
				"description": "Annie's life is a mess. But when she finds out her lifetime best friend is engaged, she simply must serve as Lillian's maid of honor. Though lovelorn and broke, Annie bluffs her way through the expensive and bizarre rituals. With one chance to get it perfect, she’ll show Lillian and her bridesmaids just how far you’ll go for someone you love.",
				"year": "2011",
				"release_date": "2011-05-13",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 125,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/AtblBm86P03QGOPsrkxAb3Rsluh.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/1pkpV7a02phSfAPeGVmpHaQd99J.jpg"
			},
			{
				"id": 310,
				"title": "Bruce Almighty",
				"description": "Bruce Nolan toils as a 'human interest' television reporter in Buffalo, N.Y., but despite his high ratings and the love of his beautiful girlfriend, Bruce remains unfulfilled. At the end of the worst day in his life, he angrily ridicules God—and the Almighty responds, endowing Bruce with all of His divine powers.",
				"year": "2003",
				"release_date": "2003-05-23",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 101,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/3XJKBKh9Km89EoUEitVTSnrlAkZ.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/dGd8d46OFotMbWlb2jHtO18H5XX.jpg"
			},
			{
				"id": 295964,
				"title": "Burnt",
				"description": "Adam Jones is a Chef who destroyed his career with drugs and diva behavior. He cleans up and returns to London, determined to redeem himself by spearheading a top restaurant that can gain three Michelin stars.",
				"year": "2015",
				"release_date": "2015-10-02",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 100,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/iptu4zfvbeULkeuoVkTl2mOqTPS.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/uT9jBOf4cyvYj4FPf3R4KgHaNVB.jpg"
			},
			{
				"id": 398818,
				"title": "Call Me by Your Name",
				"description": "In 1980s Italy, a relationship begins between seventeen-year-old teenage Elio and the older adult man hired as his father's research assistant.",
				"year": "2017",
				"release_date": "2017-09-01",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 10749,
						"name": "Romance"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 132,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/tcNniniS4rfqrLH0oORikJfnIwY.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/hrMbAi9fPTmc6EtpyyAgDKznptu.jpg"
			},
			{
				"id": 244506,
				"title": "Camp X-Ray",
				"description": "A young woman joins the military to be part of something bigger than herself and her small-town roots. Instead, she ends up as a new guard at Guantanamo Bay, where her mission is far from black and white. Surrounded by hostile jihadists and aggressive squadmates, she strikes up an unusual friendship with one of the detainees.",
				"year": "2014",
				"release_date": "2014-10-17",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 117,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/43xOGzdqcTIDE6J03TKFFHz7e8U.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/u9jPEh3UJzR50e1r6ya21z3oXTj.jpg"
			},
			{
				"id": 1771,
				"title": "Captain America: The First Avenger",
				"description": "During World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull – Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.",
				"year": "2011",
				"release_date": "2011-07-22",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 124,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/iQh64TQiPoTK3yZ3duC3y0tKgy3.jpg"
			},
			{
				"id": 100402,
				"title": "Captain America: The Winter Soldier",
				"description": "After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy—the Winter Soldier.",
				"year": "2014",
				"release_date": "2014-03-20",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 136,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/wxwt0pLxFZwKzy7pAu8WixadwqO.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/yHB0eNR8rvCpn0VdghEwBsXAC0N.jpg"
			},
			{
				"id": 109424,
				"title": "Captain Phillips",
				"description": "The true story of Captain Richard Phillips and the 2009 hijacking by Somali pirates of the US-flagged MV Maersk Alabama, the first American cargo ship to be hijacked in two hundred years.",
				"year": "2013",
				"release_date": "2013-10-10",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 53,
						"name": "Thriller"
					}
				],
				"runtime": 134,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/2x8ida0rHokUv80Ah4eBNb2eXas.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/bRhqQkM1fbMYAHtL8lnAgjoHBvS.jpg"
			},
			{
				"id": 9693,
				"title": "Children of Men",
				"description": "In 2027, in a chaotic world in which humans can no longer procreate, a former activist agrees to help transport a miraculously pregnant woman to a sanctuary at sea, where her child's birth may help scientists save the future of humankind.",
				"year": "2006",
				"release_date": "2006-09-22",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 53,
						"name": "Thriller"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 109,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/6GnBsOIi1t4aGuLh3NF9TfU8u37.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/ajXlrWeZamzKOHnZAwe1SJad5EF.jpg"
			},
			{
				"id": 83542,
				"title": "Cloud Atlas",
				"description": "A set of six nested stories spanning time between the 19th century and a distant post-apocalyptic future. Cloud Atlas explores how the actions and consequences of individual lives impact one another throughout the past, the present and the future. Action, mystery and romance weave through the story as one soul is shaped from a killer into a hero and a single act of kindness ripples across centuries to inspire a revolution in the distant future.  Based on the award winning novel by David Mitchell. Directed by Tom Tykwer and the Wachowskis.",
				"year": "2012",
				"release_date": "2012-10-26",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 172,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/amNMifaMEd0FBOR289OcnRAJjTI.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/2lw4O1QOnJIVYaLrVuQyjtjwOuN.jpg"
			},
			{
				"id": 117098,
				"title": "Cloudburst",
				"description": "When Dot (Brenda Fricker)'s granddaughter puts her into a nursing home, Stella (Olympia Dukakis) stages a breakout, and takes Dot to Canada so they can get married. They pick up a hitchhiker along the way.",
				"year": "2011",
				"release_date": "2011-09-23",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 53,
						"name": "Thriller"
					}
				],
				"runtime": 93,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/9PK7atQFuD6qUJIHZniJbcP3U9.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280null"
			},
			{
				"id": 14836,
				"title": "Coraline",
				"description": "When Coraline moves to an old house, she feels bored and neglected by her parents. She finds a hidden door with a bricked up passage. During the night, she crosses the passage and finds a parallel world where everybody has buttons instead of eyes, with caring parents and all her dreams coming true. When the Other Mother invites Coraline to stay in her world forever, the girl refuses and finds that the alternate reality where she is trapped is only a trick to lure her.",
				"year": "2009",
				"release_date": "2009-02-05",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 100,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/ytBaJAcaTvONnOBziIijzkMk64f.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/8GHxjXlI5rqyTBuVNekGTPjG5T6.jpg"
			},
			{
				"id": 455207,
				"title": "Crazy Rich Asians",
				"description": "An American-born Chinese economics professor accompanies her boyfriend to Singapore for his best friend's wedding, only to get thrust into the lives of Asia's rich and famous.",
				"year": "2018",
				"release_date": "2018-08-15",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 121,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/1XxL4LJ5WHdrcYcihEZUCgNCpAW.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/7tTCnQcKzUkabDV3BJMe7LIzlEs.jpg"
			},
			{
				"id": 152532,
				"title": "Dallas Buyers Club",
				"description": "Loosely based on the true-life tale of Ron Woodroof, a drug-taking, women-loving, homophobic man who in 1986 was diagnosed with HIV/AIDS and given thirty days to live.",
				"year": "2013",
				"release_date": "2013-11-17",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 36,
						"name": "History"
					}
				],
				"runtime": 117,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/7Fdh7gUq3plvQqxRbNYhWvDABXA.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/l44aUpuHMyp0NctwUdTh2ztVL8X.jpg"
			},
			{
				"id": 320288,
				"title": "Dark Phoenix",
				"description": "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
				"year": "2019",
				"release_date": "2019-06-05",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					}
				],
				"runtime": 114,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/cCTJPelKGLhALq3r51A9uMonxKj.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/phxiKFDvPeQj4AbkvJLmuZEieDU.jpg"
			},
			{
				"id": 93456,
				"title": "Despicable Me 2",
				"description": "Gru is recruited by the Anti-Villain League to help deal with a powerful new super criminal.",
				"year": "2013",
				"release_date": "2013-06-25",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 98,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/zhNirNChLkDv9YCEStn857h7BoI.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/o4DwkUXQLgsiIf1c4L9u8PtIExA.jpg"
			},
			{
				"id": 68718,
				"title": "Django Unchained",
				"description": "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
				"year": "2012",
				"release_date": "2012-12-25",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 37,
						"name": "Western"
					}
				],
				"runtime": 165,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/yK0qrQhi3BbOXvTNOBWHgpcbckZ.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/s4cJQaj40SwMifUrrdtdOJsjnRO.jpg"
			},
			{
				"id": 37735,
				"title": "Easy A",
				"description": "Olive, an average high school student, sees her below-the-radar existence turn around overnight once she decides to use the school's gossip grapevine to advance her social standing. Now her classmates are turning against her and the school board is becoming concerned, including her favorite teacher and the distracted guidance counselor. With the support of her hilariously idiosyncratic parents and a little help from a long-time crush, Olive attempts to take on her notorious new identity and crush the rumor mill once and for all.",
				"year": "2010",
				"release_date": "2010-09-16",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 93,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/pYeY5lBudgWAunG4qlsWCA3PlxM.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/c6ZuSU54Q5HpBhuOhfWtGHILTGL.jpg"
			},
			{
				"id": 137113,
				"title": "Edge of Tomorrow",
				"description": "Major Bill Cage is an officer who has never seen a day of combat when he is unceremoniously demoted and dropped into combat. Cage is killed within minutes, managing to take an alpha alien down with him. He awakens back at the beginning of the same day and is forced to fight and die again... and again - as physical contact with the alien has thrown him into a time loop.",
				"year": "2014",
				"release_date": "2014-05-27",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 113,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/uUHvlkLavotfGsNtosDy8ShsIYF.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/auZIuHEUec5tBTns3tCRXfayxZq.jpg"
			},
			{
				"id": 14442,
				"title": "Ella Enchanted",
				"description": "Ella lives in a magical world in which each child, at the moment of their birth, is given a virtuous \"gift\" from a fairy godmother. Ella's so-called gift, however, is obedience. This birthright proves itself to be quite the curse once Ella finds herself in the hands of several unscrupulous characters whom she quite literally cannot disobey. Determined to gain control of her life and decisions, Ella sets off on a journey to find her fairy godmother who she hopes will lift the curse. The path, however, isn't easy -- Ella must outwit a slew of unpleasant obstacles including ogres, giants, wicked stepsisters, elves and Prince Charmont's evil uncle, who wants to take over the crown and rule the kingdom.",
				"year": "2004",
				"release_date": "2004-04-09",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 96,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/8iGtUgdjIoaoSPyIrNFnQMsQsQU.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/fIzLjPSG3DS7WW6IsqsR6p2b2Yx.jpg"
			},
			{
				"id": 38,
				"title": "Eternal Sunshine of the Spotless Mind",
				"description": "Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to correct his mistake.",
				"year": "2004",
				"release_date": "2004-03-19",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 108,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/nh6YJdN7C66IMckrAM5WJ6Ycrhf.jpg"
			},
			{
				"id": 253412,
				"title": "Everest",
				"description": "Inspired by the incredible events surrounding a treacherous attempt to reach the summit of the world's highest mountain, \"Everest\" documents the awe-inspiring journey of two different expeditions challenged beyond their limits by one of the fiercest snowstorms ever encountered by mankind. Their mettle tested by the harshest of elements found on the planet, the climbers will face nearly impossible obstacles as a lifelong obsession becomes a breathtaking struggle for survival.",
				"year": "2015",
				"release_date": "2015-09-10",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 28,
						"name": "Action"
					}
				],
				"runtime": 121,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/4xmndWnTYTE4bDdlWrkZyaGcZlo.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/m4JzTSFDqWnvLkjTKIm4kyDXbTO.jpg"
			},
			{
				"id": 9738,
				"title": "Fantastic Four",
				"description": "During a space voyage, four scientists are altered by cosmic rays: Reed Richards gains the ability to stretch his body; Sue Storm can become invisible; Johnny Storm controls fire; and Ben Grimm is turned into a super-strong … thing. Together, these \"Fantastic Four\" must now thwart the evil plans of Dr. Doom and save the world from certain destruction.",
				"year": "2005",
				"release_date": "2005-06-29",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 106,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/8HLQLILZLhDQWO6JDpvY6XJLH75.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/ePJ3OOj2lE5k7zIeOL2NBDHZhLk.jpg"
			},
			{
				"id": 9377,
				"title": "Ferris Bueller's Day Off",
				"description": "After high school slacker Ferris Bueller successfully fakes an illness in order to skip school for the day, he goes on a series of adventures throughout Chicago with his girlfriend Sloane and best friend Cameron, all the while trying to outwit his wily school principal and fed-up sister.",
				"year": "1986",
				"release_date": "1986-06-11",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 103,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/qAk5wem526xJfLqEcMpMEftHgMp.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/leehjwM57DKJ79XMUll4oAF0kin.jpg"
			},
			{
				"id": 12,
				"title": "Finding Nemo",
				"description": "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.",
				"year": "2003",
				"release_date": "2003-05-30",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 100,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/xVNSgrsvpcAHPnyKf2phYxyppNZ.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/dFYguAfeVt19qAbzJ5mArn7DEJw.jpg"
			},
			{
				"id": 13,
				"title": "Forrest Gump",
				"description": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
				"year": "1994",
				"release_date": "1994-07-06",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 142,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/7c9UVPPiTPltouxRVY6N9uugaVA.jpg"
			},
			{
				"id": 11499,
				"title": "Frost/Nixon",
				"description": "For three years after being forced from office, Nixon remained silent. But in summer 1977, the steely, cunning former commander-in-chief agreed to sit for one all-inclusive interview to confront the questions of his time in office and the Watergate scandal that ended his presidency. Nixon surprised everyone in selecting Frost as his televised confessor, intending to easily outfox the breezy British showman and secure a place in the hearts and minds of Americans. Likewise, Frost's team harboured doubts about their boss's ability to hold his own. But as the cameras rolled, a charged battle of wits resulted.",
				"year": "2008",
				"release_date": "2008-10-15",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 36,
						"name": "History"
					}
				],
				"runtime": 122,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/nLrRrHZQ40tWqLTY3kxgS4x7GUw.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/5KhdclGVGzSoVIvtAtVmFxvs34v.jpg"
			},
			{
				"id": 109445,
				"title": "Frozen",
				"description": "Young princess Anna of Arendelle dreams about finding true love at her sister Elsa’s coronation. Fate takes her on a dangerous journey in an attempt to end the eternal winter that has fallen over the kingdom. She's accompanied by ice delivery man Kristoff, his reindeer Sven, and snowman Olaf. On an adventure where she will find out what friendship, courage, family, and true love really means.",
				"year": "2013",
				"release_date": "2013-11-27",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 102,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/ggCYp26DcaBiGsU2KdVSlNg3y4L.jpg"
			},
			{
				"id": 157354,
				"title": "Fruitvale Station",
				"description": "Oakland, California. Young Afro-American Oscar Grant crosses paths with family members, friends, enemies and strangers before facing his fate on the platform at Fruitvale Station, in the early morning hours of New Year's Day 2009…",
				"year": "2013",
				"release_date": "2013-07-26",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 82,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/dvHYetUIshAPtMhtVtBT7dW5hqh.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/fvNJBmWeXPcIty9FC1ut9s7oSRq.jpg"
			},
			{
				"id": 419430,
				"title": "Get Out",
				"description": "Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
				"year": "2017",
				"release_date": "2017-02-24",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 9648,
						"name": "Mystery"
					},
					{
						"id": 53,
						"name": "Thriller"
					},
					{
						"id": 27,
						"name": "Horror"
					}
				],
				"runtime": 104,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/qbaIViX3tgWSTSFXbldq0ODMdi4.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/vZ7EVk7FaNEWYqlVWbFLHP8Z0LU.jpg"
			},
			{
				"id": 232175,
				"title": "Gimme Shelter",
				"description": "After running away from her abusive mother, a streetwise teen seeks refuge with her father, but he rejects her when he learns that she's pregnant.",
				"year": "2013",
				"release_date": "2013-10-17",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 101,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/eEvqFlmn7d8prqRVaFJ5pjJFHuB.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/lND2DIh20OTVMW0ojWpTQv17l8h.jpg"
			},
			{
				"id": 210577,
				"title": "Gone Girl",
				"description": "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
				"year": "2014",
				"release_date": "2014-10-01",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 9648,
						"name": "Mystery"
					},
					{
						"id": 53,
						"name": "Thriller"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 149,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/tQf4DUygWo64AOuqgk4jEDCE3Ws.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/x9ezMgOtDPqHatHDvxEG0ILb6Ie.jpg"
			},
			{
				"id": 49047,
				"title": "Gravity",
				"description": "Dr. Ryan Stone, a brilliant medical engineer on her first Shuttle mission, with veteran astronaut Matt Kowalsky in command of his last flight before retiring. But on a seemingly routine spacewalk, disaster strikes. The Shuttle is destroyed, leaving Stone and Kowalsky completely alone-tethered to nothing but each other and spiraling out into the blackness of space. The deafening silence tells them they have lost any link to Earth and any chance for rescue. As fear turns to panic, every gulp of air eats away at what little oxygen is left. But the only way home may be to go further out into the terrifying expanse of space.",
				"year": "2013",
				"release_date": "2013-10-03",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 53,
						"name": "Thriller"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 91,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/nGdGlz45Vt2dJiX2AljerQDSwIM.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/a2n6bKD7qhCPCAEALgsAhWOAQcc.jpg"
			},
			{
				"id": 283995,
				"title": "Guardians of the Galaxy Vol. 2",
				"description": "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
				"year": "2017",
				"release_date": "2017-04-19",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 137,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/aJn9XeesqsrSLKcHfHP4u5985hn.jpg"
			},
			{
				"id": 672,
				"title": "Harry Potter and the Chamber of Secrets",
				"description": "Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Adventure and danger await when bloody writing on a wall announces: The Chamber Of Secrets Has Been Opened. To save Hogwarts will require all of Harry, Ron and Hermione’s magical abilities and courage.",
				"year": "2002",
				"release_date": "2002-11-13",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 161,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/bvRnPaai6JL7XHF4K6414DdSHro.jpg"
			},
			{
				"id": 12444,
				"title": "Harry Potter and the Deathly Hallows: Part 1",
				"description": "Harry, Ron and Hermione walk away from their last year at Hogwarts to find and destroy the remaining Horcruxes, putting an end to Voldemort's bid for immortality. But with Harry's beloved Dumbledore dead and Voldemort's unscrupulous Death Eaters on the loose, the world is more dangerous than ever.",
				"year": "2010",
				"release_date": "2010-10-17",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 146,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/fXRXpzxUApE3OuXhIqsdavQjCVa.jpg"
			},
			{
				"id": 12445,
				"title": "Harry Potter and the Deathly Hallows: Part 2",
				"description": "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
				"year": "2011",
				"release_date": "2011-07-07",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 12,
						"name": "Adventure"
					}
				],
				"runtime": 130,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/da22ZBmrDOXOCDRvr8Gic8ldhv4.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/n5A7brJCjejceZmHyujwUTVgQNC.jpg"
			},
			{
				"id": 674,
				"title": "Harry Potter and the Goblet of Fire",
				"description": "Harry starts his fourth year at Hogwarts, competes in the treacherous Triwizard Tournament and faces the evil Lord Voldemort. Ron and Hermione help Harry manage the pressure – but Voldemort lurks, awaiting his chance to destroy Harry and all that he stands for.",
				"year": "2005",
				"release_date": "2005-11-16",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 157,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/8f9dnOtpArDrOMEylpSN9Sc6fuz.jpg"
			},
			{
				"id": 767,
				"title": "Harry Potter and the Half-Blood Prince",
				"description": "As Harry begins his sixth year at Hogwarts, he discovers an old book marked as 'Property of the Half-Blood Prince', and begins to learn more about Lord Voldemort's dark past.",
				"year": "2009",
				"release_date": "2009-07-07",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 153,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/Ag21otqbeynZPGjEbzyr3X5Us0j.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/kT8bDEAgEYBKhRJtqM97qTw6uRW.jpg"
			},
			{
				"id": 675,
				"title": "Harry Potter and the Order of the Phoenix",
				"description": "Returning for his fifth year of study at Hogwarts, Harry is stunned to find that his warnings about the return of Lord Voldemort have been ignored. Left with no choice, Harry takes matters into his own hands, training a small group of students – dubbed 'Dumbledore's Army' – to defend themselves against the dark arts.",
				"year": "2007",
				"release_date": "2007-06-28",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 9648,
						"name": "Mystery"
					}
				],
				"runtime": 138,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/g6n8G0xPnBVUIKKK41sNmbZB5h4.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/pkxPkHOPJjOvzfQOclANEBT8OfK.jpg"
			},
			{
				"id": 671,
				"title": "Harry Potter and the Philosopher's Stone",
				"description": "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
				"year": "2001",
				"release_date": "2001-11-16",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 152,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/hziiv14OpD73u9gAak4XDDfBKa2.jpg"
			},
			{
				"id": 673,
				"title": "Harry Potter and the Prisoner of Azkaban",
				"description": "Harry, Ron and Hermione return to Hogwarts for another magic-filled year. Harry comes face to face with danger yet again, this time in the form of escaped convict, Sirius Black—and turns to sympathetic Professor Lupin for help.",
				"year": "2004",
				"release_date": "2004-05-31",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 141,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/uDQibffYgssdiqx7izO57wdLc6.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/vbk5CfaAHOjQPSAcYm6AoRRz2Af.jpg"
			},
			{
				"id": 338928,
				"title": "He Named Me Malala",
				"description": "A look at the events leading up to the Taliban's attack on the young Pakistani school girl, Malala Yousafzai, for speaking out on girls' education and the aftermath, including her speech to the United Nations.",
				"year": "2015",
				"release_date": "2015-09-12",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 99,
						"name": "Documentary"
					}
				],
				"runtime": 87,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/39c68qAkgIIOYDpzZDWPVOcEJMx.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280null"
			},
			{
				"id": 152601,
				"title": "Her",
				"description": "In the not so distant future, Theodore, a lonely writer purchases a newly developed operating system designed to meet the user's every needs. To Theodore's surprise, a romantic relationship develops between him and his operating system. This unconventional love story blends science fiction and romance in a sweet tale that explores the nature of love and the ways that technology isolates and connects us all.",
				"year": "2013",
				"release_date": "2013-12-18",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 10749,
						"name": "Romance"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 126,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/yk4J4aewWYNiBhD49WD7UaBBn37.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/nG5zmbVeYlcDhckrPAe06fArywn.jpg"
			},
			{
				"id": 10191,
				"title": "How to Train Your Dragon",
				"description": "As the son of a Viking leader on the cusp of manhood, shy Hiccup Horrendous Haddock III faces a rite of passage: he must kill a dragon to prove his warrior mettle. But after downing a feared dragon, he realizes that he no longer wants to destroy it, and instead befriends the beast – which he names Toothless – much to the chagrin of his warrior father",
				"year": "2010",
				"release_date": "2010-03-10",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 100,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/kxklJL1v8MYEU5xdU6W5VvmBwVz.jpg"
			},
			{
				"id": 44826,
				"title": "Hugo",
				"description": "Orphaned and alone except for an uncle, Hugo Cabret lives in the walls of a train station in 1930s Paris. Hugo's job is to oil and maintain the station's clocks, but to him, his more important task is to protect a broken automaton and notebook left to him by his late father. Accompanied by the goddaughter of an embittered toy merchant, Hugo embarks on a quest to solve the mystery of the automaton and find a place he can call home.",
				"year": "2011",
				"release_date": "2011-11-22",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 126,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/vDAhBTIHvIoNOlgCfmLirVgUK2p.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/jlh5bNiSPcbQ79Nt31kE2GxIR3h.jpg"
			},
			{
				"id": 8952,
				"title": "I Love You Phillip Morris",
				"description": "Steve Russell is a small-town cop. Bored with his bland lifestyle, Russell turns to fraud as a means of shaking things up. Before long, Russell's criminal antics have landed him behind bars, where he encounters the charismatic Phillip Morris. Smitten, Russell devotes his entire life to being with Morris regardless of the consequences.",
				"year": "2009",
				"release_date": "2009-01-18",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 98,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/qtAuWLGQ7N4PNQ6boZeqqoUY2l9.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/4KHsq2kYuuJcoccSdsI5rxueWg4.jpg"
			},
			{
				"id": 249164,
				"title": "If I Stay",
				"description": "Mia Hall, a talented young cellist, thought the most difficult decision she would ever have to make would be whether to pursue her musical dreams at prestigious Juilliard or follow her heart to be with the love of her life, Adam, a rock singer/guitarist. However, a car wreck changes everything in an instant, and now Mia's life hangs in the balance. Suspended between life and death, Mia faces a choice that will decide her future.",
				"year": "2014",
				"release_date": "2014-08-21",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 106,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/sZhwYaxgypTUcHU2AfUEUt2Dz9R.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/56jkKfItg1yjRu1OJwStxE1mqFA.jpg"
			},
			{
				"id": 1544,
				"title": "Imagine Me & You",
				"description": "During her wedding ceremony, Rachel notices Luce in the audience and feels instantly drawn to her. The two women become close friends, and when Rachel learns that Luce is a lesbian, she realizes that despite her happy marriage to Heck, she is falling for Luce. As she questions her sexual orientation, Rachel must decide between her stable relationship with Heck and her exhilarating new romance with Luce.",
				"year": "2005",
				"release_date": "2005-02-01",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 93,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/mbKb74n8d7AWxXEDTnaB8PrnvI9.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/5mct2hhoprq2dLTy7NHyGJNgaud.jpg"
			},
			{
				"id": 27205,
				"title": "Inception",
				"description": "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
				"year": "2010",
				"release_date": "2010-07-15",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 12,
						"name": "Adventure"
					}
				],
				"runtime": 148,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"
			},
			{
				"id": 86829,
				"title": "Inside Llewyn Davis",
				"description": "In Greenwich Village in the early 1960s, gifted but volatile folk musician Llewyn Davis struggles with money, relationships, and his uncertain future following the suicide of his singing partner.",
				"year": "2013",
				"release_date": "2013-10-13",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 105,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/1kNdpu3nr7IWYkloBWMVOdnqmsq.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/6QOZ7RGucRJLGvm7TH5k2BN0xSp.jpg"
			},
			{
				"id": 157336,
				"title": "Interstellar",
				"description": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
				"year": "2014",
				"release_date": "2014-11-05",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 169,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
			},
			{
				"id": 224141,
				"title": "Into the Woods",
				"description": "In a woods filled with magic and fairy tale characters, a baker and his wife set out to end the curse put on them by their neighbor, a spiteful witch.",
				"year": "2014",
				"release_date": "2014-12-24",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 125,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/k37bYqOUWMqhrfzmR8Mk9sy2jxH.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/qF938YRj7RoYkjwOsXFDNYf907J.jpg"
			},
			{
				"id": 1726,
				"title": "Iron Man",
				"description": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
				"year": "2008",
				"release_date": "2008-04-30",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 12,
						"name": "Adventure"
					}
				],
				"runtime": 126,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/vbY95t58MDArtyUXUIb8Fx1dCry.jpg"
			},
			{
				"id": 10138,
				"title": "Iron Man 2",
				"description": "With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. Unwilling to let go of his invention, Stark, with Pepper Potts and James 'Rhodey' Rhodes at his side, must forge new alliances – and confront powerful enemies.",
				"year": "2010",
				"release_date": "2010-04-28",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 124,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/93jZqX11iNmdon3zxGTlH6Q0YJb.jpg"
			},
			{
				"id": 68721,
				"title": "Iron Man 3",
				"description": "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
				"year": "2013",
				"release_date": "2013-04-18",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 130,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/2ymO6kST1wwtuSlHifAoG2n2fe5.jpg"
			},
			{
				"id": 38684,
				"title": "Jane Eyre",
				"description": "After a bleak childhood, Jane Eyre goes out into the world to become a governess. As she lives happily in her new position at Thornfield Hall, she meet the dark, cold, and abrupt master of the house, Mr. Rochester. Jane and her employer grow close in friendship and she soon finds herself falling in love with him. Happiness seems to have found Jane at last, but could Mr. Rochester's terrible secret be about to destroy it forever?",
				"year": "2011",
				"release_date": "2011-03-11",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 120,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/o5mTxitBJNy5QtPKLFhuSB6GkzG.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/wu1zDIgYwfyc4I8hCY0O2RrKwsL.jpg"
			},
			{
				"id": 7326,
				"title": "Juno",
				"description": "Faced with an unplanned pregnancy, an offbeat young woman makes an unusual decision regarding her unborn child.",
				"year": "2007",
				"release_date": "2007-12-05",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 96,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/gu1zTqlHIahhciJ6dPHgFhHWiXf.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/6Jgs2esh9jSjjydFd9eVddGGkbm.jpg"
			},
			{
				"id": 76757,
				"title": "Jupiter Ascending",
				"description": "In a universe where human genetic material is the most precious commodity, an impoverished young Earth woman becomes the key to strategic maneuvers and internal strife within a powerful dynasty…",
				"year": "2015",
				"release_date": "2015-02-04",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					}
				],
				"runtime": 127,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/mb4zAOosaO9tHyH1n7g0634moK0.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/w4hk4QG05nDuSgimpa7XAM6OyPX.jpg"
			},
			{
				"id": 329,
				"title": "Jurassic Park",
				"description": "A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs drawn from prehistoric DNA. Before opening day, he invites a team of experts and his two eager grandchildren to experience the park and help calm anxious investors. However, the park is anything but amusing as the security systems go off-line and the dinosaurs escape.",
				"year": "1993",
				"release_date": "1993-06-11",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 127,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/9i3plLl89DHMz7mahksDaAo7HIS.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/8I877mjRxFGfGAknIjF2Bv7tbyO.jpg"
			},
			{
				"id": 135397,
				"title": "Jurassic World",
				"description": "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
				"year": "2015",
				"release_date": "2015-06-06",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 53,
						"name": "Thriller"
					}
				],
				"runtime": 124,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/yOCRqvrRrxbs5FYq2pX1KtLJwmR.jpg"
			},
			{
				"id": 343668,
				"title": "Kingsman: The Golden Circle",
				"description": "When an attack on the Kingsman headquarters takes place and a new villain rises, Eggsy and Merlin are forced to work together with the American agency known as the Statesman to save the world.",
				"year": "2017",
				"release_date": "2017-09-20",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 141,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/34xBL6BXNYFqtHO9zhcgoakS4aP.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/uExPmkOHJySrbJyJDJylHDqaT58.jpg"
			},
			{
				"id": 13597,
				"title": "Labyrinth",
				"description": "When teen Sarah is forced to babysit Toby, her baby stepbrother, she summons Jareth the Goblin King to take him away. When he is actually kidnapped, Sarah is given just thirteen hours to solve a labyrinth and rescue him.",
				"year": "1986",
				"release_date": "1986-06-27",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 102,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/q2GimbyqxCeLkRfSMajtaHdwWg9.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/3keo2UWq9Q5xACwx6KAib6HC6JR.jpg"
			},
			{
				"id": 8835,
				"title": "Legally Blonde",
				"description": "Elle Woods has it all. She's the president of her sorority, a Hawaiian Tropic girl, Miss June in her campus calendar, and, above all, a natural blonde. She dates the cutest fraternity boy on campus and wants nothing more than to be Mrs. Warner Huntington III. But, there's just one thing stopping Warner from popping the question: Elle is too blonde.",
				"year": "2001",
				"release_date": "2001-07-13",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 96,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/9ohlMrJHQqKhfUKh7Zr3JQqHNLZ.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/ftTmFUSdxingTzpaZG0gX2gBgg4.jpg"
			},
			{
				"id": 10327,
				"title": "Legally Blonde 2: Red, White & Blonde",
				"description": "After Elle Woods, the eternally perky, fashionably adventurous, famously blonde Harvard Law grad gets fired by her law firm because of her opposition to animal testing, she takes her fight to Washington. As an aide for Congresswoman Victoria Rudd, she pushes for a bill to ban testing once and for all, but it's her building's doorman who advises her on how to get her way on the Hill.",
				"year": "2003",
				"release_date": "2003-07-02",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 95,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/4kC0UGTuJgFnlZq2ZM6OiY7nuY8.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/tIw5hAOnX6BOEha51EZROYypNYT.jpg"
			},
			{
				"id": 11774,
				"title": "Lemony Snicket's A Series of Unfortunate Events",
				"description": "Three wealthy children's parents are killed in a fire. When they are sent to a distant relative, they find out that he is plotting to kill them and seize their fortune.  This movie is extremely alarming, an expression which here means \"a thrilling misadventure involving three ingenious orphans and a villainous actor named Count Olaf (Jim Carrey) who wants their enormous fortune.\"  It includes a suspicious fire, delicious pasta, Jim Carrey, poorly behaved looches, Billy Connolly, an incredibly deadly viper, Meryl Streep, and the voice of an imposter named Jude Law.",
				"year": "2004",
				"release_date": "2004-12-16",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 108,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/syuIptWCGH1AlJ8AB7ZGwckHSi1.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/7xl8GzdUXwbBLrCDZ82vbvwEUwe.jpg"
			},
			{
				"id": 87827,
				"title": "Life of Pi",
				"description": "The story of an Indian boy named Pi, a zookeeper's son who finds himself in the company of a hyena, zebra, orangutan, and a Bengal tiger after a shipwreck sets them adrift in the Pacific Ocean.",
				"year": "2012",
				"release_date": "2012-11-20",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 28,
						"name": "Action"
					}
				],
				"runtime": 127,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/mYDKm9HxImm8PRru3KbkHAe1cmk.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/7H01zprUY67n7bdcFg6VMvrkNjs.jpg"
			},
			{
				"id": 60420,
				"title": "Like Crazy",
				"description": "A British college student falls for an American student, only to be separated from him when she's banned from the U.S. after overstaying her visa.",
				"year": "2011",
				"release_date": "2011-10-28",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 90,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/8eIhNKnRfayRwWChx0atZh4vGua.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/7l4qrv7dd1qyIDwxE6rKZPFOIQF.jpg"
			},
			{
				"id": 11544,
				"title": "Lilo & Stitch",
				"description": "As Stitch, a runaway genetic experiment from a faraway planet, wreaks havoc on the Hawaiian Islands, he becomes the mischievous adopted alien \"puppy\" of an independent little girl named Lilo and learns about loyalty, friendship, and 'ohana, the Hawaiian tradition of family.",
				"year": "2002",
				"release_date": "2002-06-21",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 85,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/d73UqZWyw3MUMpeaFcENgLZ2kWS.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/w102m4HoCP5uxhW8Yh7Hv7QShix.jpg"
			},
			{
				"id": 773,
				"title": "Little Miss Sunshine",
				"description": "A family loaded with quirky, colorful characters piles into an old van and road trips to California for little Olive to compete in a beauty pageant.",
				"year": "2006",
				"release_date": "2006-07-26",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 102,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/tFnTds88mCuLcLPBseK1kF2E3qv.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/sCEOXL9NwuFxzPAOvqF69pAZs5D.jpg"
			},
			{
				"id": 59967,
				"title": "Looper",
				"description": "In the futuristic action thriller Looper, time travel will be invented but it will be illegal and only available on the black market. When the mob wants to get rid of someone, they will send their target 30 years into the past where a looper, a hired gun, like Joe is waiting to mop up. Joe is getting rich and life is good until the day the mob decides to close the loop, sending back Joe's future self for assassination.",
				"year": "2012",
				"release_date": "2012-09-26",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 53,
						"name": "Thriller"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 118,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/sNjL6SqErDBE8OUZlrDLkexfsCj.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/4bAwGmE9Sl4FeXoHWVWLXkURHbe.jpg"
			},
			{
				"id": 153,
				"title": "Lost in Translation",
				"description": "Two lost souls visiting Tokyo -- the young, neglected wife of a photographer and a washed-up movie star shooting a TV commercial -- find an odd solace and pensive freedom to be real in each other's company, away from their lives in America.",
				"year": "2003",
				"release_date": "2003-08-31",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					},
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 102,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/yDY1LLuMdWA0xO09ciVeDHHJWFr.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/6BVW7Tk0HvSGZqJ0NCnd2kLCJO3.jpg"
			},
			{
				"id": 508,
				"title": "Love Actually",
				"description": "Follows seemingly unrelated people as their lives begin to intertwine while they fall in – and out – of love. Affections languish and develop as Christmas draws near.",
				"year": "2003",
				"release_date": "2003-09-07",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10749,
						"name": "Romance"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 135,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/7QPeVsr9rcFU9Gl90yg0gTOTpVv.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/6xrA9tMvpb3cnktNH7voJ62S41N.jpg"
			},
			{
				"id": 240832,
				"title": "Lucy",
				"description": "A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.",
				"year": "2014",
				"release_date": "2014-07-25",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 89,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/kRbpUTRNm6QbLQFPFWUcNC4czEm.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/1hzH1Wu2xhXBNOWzw3RMwNTJX5q.jpg"
			},
			{
				"id": 76341,
				"title": "Mad Max: Fury Road",
				"description": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
				"year": "2015",
				"release_date": "2015-05-13",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 121,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/sQuxceRcV3cxKH5CAnAUZe0qFKS.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/nlCHUWjY9XWbuEUQauCBgnY8ymF.jpg"
			},
			{
				"id": 102651,
				"title": "Maleficent",
				"description": "A beautiful, pure-hearted young woman, Maleficent has an idyllic life growing up in a peaceable forest kingdom, until one day when an invading army threatens the harmony of the land.  Maleficent rises to be the land's fiercest protector, but she ultimately suffers a ruthless betrayal – an act that begins to turn her heart into stone. Bent on revenge, Maleficent faces an epic battle with the invading King's successor and, as a result, places a curse upon his newborn infant Aurora. As the child grows, Maleficent realizes that Aurora holds the key to peace in the kingdom – and to Maleficent's true happiness as well.",
				"year": "2014",
				"release_date": "2014-05-28",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 97,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/ik8PugpL41s137RAWEGTAWu0dPo.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/xjotE7aFdZ0D8aGriYjFOtDayct.jpg"
			},
			{
				"id": 11631,
				"title": "Mamma Mia!",
				"description": "An independent, single mother who owns a small hotel on a Greek island is about to marry off the spirited young daughter she's raised alone. But, the daughter has secretly invited three of her mother's ex-lovers in the hopes of finding her biological father.",
				"year": "2008",
				"release_date": "2008-07-02",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 108,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/zdUA4FNHbXPadzVOJiU0Rgn6cHR.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/ns9T8glyF7mYwxrcUHXm22nMf9t.jpg"
			},
			{
				"id": 192136,
				"title": "Mandela: Long Walk to Freedom",
				"description": "A chronicle of Nelson Mandela's life journey from his childhood in a rural village through to his inauguration as the first democratically elected president of South Africa.",
				"year": "2013",
				"release_date": "2013-12-06",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 36,
						"name": "History"
					}
				],
				"runtime": 141,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/6PMYAliDaSznrU8lS1l5clerJzX.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/9CR5polYuzE27fMa2pqieWLmgGG.jpg"
			},
			{
				"id": 1887,
				"title": "Marie Antoinette",
				"description": "The retelling of France's iconic but ill-fated queen, Marie Antoinette. From her betrothal and marriage to Louis XVI at 15 to her reign as queen at 19 and ultimately the fall of Versailles.",
				"year": "2006",
				"release_date": "2006-05-24",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 36,
						"name": "History"
					}
				],
				"runtime": 123,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/o41nX4P9E8TWoWiCPYgudsZ8ilP.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/rPm9FhnsGMwZnbeHe4zRfW7nub8.jpg"
			},
			{
				"id": 14306,
				"title": "Marley & Me",
				"description": "A newly married couple who, in the process of starting a family, learn many of life's important lessons from their trouble-loving retriever, Marley. Packed with plenty of laughs to lighten the load, the film explores the highs and lows of marriage, maturity and confronting one's own mortality, as seen through the lens of family life with a dog.",
				"year": "2008",
				"release_date": "2008-12-25",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 115,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/pnB6hjTKylb0Ve2nUWt16gzkErr.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/tVoWbAAfTDIhTeo78SbA2V6mv8E.jpg"
			},
			{
				"id": 10625,
				"title": "Mean Girls",
				"description": "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
				"year": "2004",
				"release_date": "2004-04-30",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 97,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/fXm3YKXAEjx7d2tIWDg9TfRZtsU.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/3PiKtDl1s0tGHmqRjnWZbBVgEEr.jpg"
			},
			{
				"id": 77,
				"title": "Memento",
				"description": "Leonard Shelby is tracking down the man who raped and murdered his wife. The difficulty of locating his wife's killer, however, is compounded by the fact that he suffers from a rare, untreatable form of short-term memory loss. Although he can recall details of life before his accident, Leonard cannot remember what happened fifteen minutes ago, where he's going, or why.",
				"year": "2000",
				"release_date": "2000-10-11",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 9648,
						"name": "Mystery"
					},
					{
						"id": 53,
						"name": "Thriller"
					}
				],
				"runtime": 113,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/uprP8rtOgMYJQ2h3ldDFvGsaBgH.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/q2CtXYjp9IlnfBcPktNkBPsuAEO.jpg"
			},
			{
				"id": 607,
				"title": "Men in Black",
				"description": "After a police chase with an otherworldly being, a New York City cop is recruited as an agent in a top-secret organization established to monitor and police alien activity on Earth: the Men in Black. Agent Kay and new recruit Agent Jay find themselves in the middle of a deadly plot by an intergalactic terrorist who has arrived on Earth to assassinate two ambassadors from opposing galaxies.",
				"year": "1997",
				"release_date": "1997-07-02",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 98,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/uLOmOF5IzWoyrgIF5MfUnh5pa1X.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/1GJvBE7UWU1WOVi0XREl4JQc7f8.jpg"
			},
			{
				"id": 59436,
				"title": "Midnight in Paris",
				"description": "A romantic comedy about a family traveling to the French capital for business. The party includes a young engaged couple forced to confront the illusion that a life different from their own is better.",
				"year": "2011",
				"release_date": "2011-05-11",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 94,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/4wBG5kbfagTQclETblPRRGihk0I.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/zdsvY5RmPnZPx9U9yZa0b94m52x.jpg"
			},
			{
				"id": 10139,
				"title": "Milk",
				"description": "The true story of Harvey Milk, the first openly gay man ever elected to public office. In San Francisco in the late 1970s, Harvey Milk becomes an activist for gay rights and inspires others to join him in his fight for equal rights that should be available to all Americans.",
				"year": "2008",
				"release_date": "2008-11-05",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 36,
						"name": "History"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 129,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/cZ0jH8vlJwipPcAh30siwhMKUAX.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/q2vsoGQfaeIDh5LrABFUaimngYJ.jpg"
			},
			{
				"id": 1493,
				"title": "Miss Congeniality",
				"description": "When the local FBI office receives a letter from a terrorist known only as 'The Citizen', it's quickly determined that he's planning his next act at the Miss America beauty pageant. Because tough-as-nails Gracie Hart is the only female Agent at the office, she's chosen to go undercover as the contestant from New Jersey.",
				"year": "2000",
				"release_date": "2000-12-14",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 80,
						"name": "Crime"
					},
					{
						"id": 28,
						"name": "Action"
					}
				],
				"runtime": 111,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/pat3vKaRlB70he4ghwTMydR4TvP.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/mOiev1e5k6jERa4EyxSUN1VWwRw.jpg"
			},
			{
				"id": 177677,
				"title": "Mission: Impossible - Rogue Nation",
				"description": "Ethan and team take on their most impossible mission yet—eradicating 'The Syndicate', an International and highly-skilled rogue organisation committed to destroying the IMF.",
				"year": "2015",
				"release_date": "2015-07-23",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					}
				],
				"runtime": 131,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/oUDKymEL932AeHyl4A4ee8zuBLF.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/txuWe22s3Ck1s9MZtxuMx1AQk5Q.jpg"
			},
			{
				"id": 62211,
				"title": "Monsters University",
				"description": "A look at the relationship between Mike and Sulley during their days at Monsters University — when they weren't necessarily the best of friends.",
				"year": "2013",
				"release_date": "2013-06-20",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 104,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/y7thwJ7z5Bplv6vwl6RI0yteaDD.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/mIpCxBWNz6SHCQBe2K2PFr5MB7f.jpg"
			},
			{
				"id": 585,
				"title": "Monsters, Inc.",
				"description": "James Sullivan and Mike Wazowski are monsters, they earn their living scaring children and are the best in the business... even though they're more afraid of the children than they are of them. When a child accidentally enters their world, James and Mike suddenly find that kids are not to be afraid of and they uncover a conspiracy that could threaten all children across the world.",
				"year": "2001",
				"release_date": "2001-11-01",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 92,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/sgheSKxZkttIe8ONsf2sWXPgip3.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/sDTnMOJ3H5wI38OxObmCtK7wfd5.jpg"
			},
			{
				"id": 376867,
				"title": "Moonlight",
				"description": "The tender, heartbreaking story of a young man’s struggle to find himself, told across three defining chapters in his life as he experiences the ecstasy, pain, and beauty of falling in love, while grappling with his own sexuality.",
				"year": "2016",
				"release_date": "2016-10-21",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 111,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/93NN95a71MsQ4tR2zSLv8BNK2qh.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/A9KPbYTQvWsp51Lgz85ukVkFrKf.jpg"
			},
			{
				"id": 83666,
				"title": "Moonrise Kingdom",
				"description": "Set on an island off the coast of New England in the summer of 1965, Moonrise Kingdom tells the story of two twelve-year-olds who fall in love, make a secret pact, and run away together into the wilderness. As various authorities try to hunt them down, a violent storm is brewing off-shore – and the peaceful island community is turned upside down in more ways than anyone can handle.",
				"year": "2012",
				"release_date": "2012-05-24",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 94,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/wOgmhrSUwOuZJsQXf2GsI923N0f.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/bsYv9IFIGfpAV0oUbe7YTiyxhox.jpg"
			},
			{
				"id": 433763,
				"title": "Mountain Miracle",
				"description": "A girl struggling with asthma is taken to a clinic in South Tyrol to be cured. After some time she decides to get out of this hell (that's how she feels about it) and soon she'll meet a new friend. Together they try to reach the peak of a mountain where, according to an old custom, she can be healed.",
				"year": "2017",
				"release_date": "2017-09-21",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 12,
						"name": "Adventure"
					}
				],
				"runtime": 97,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/6x9V3gr6k1FMi21uPDlVfiVtdvS.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/dEIsdH9vVj6aIvP9uLMZmA3NJxH.jpg"
			},
			{
				"id": 10674,
				"title": "Mulan",
				"description": "A tomboyish girl disguises herself as a young man so she can fight with the Imperial Chinese Army against the invading Huns. With help from wise-cracking dragon Mushu, Mulan just might save her country -- and win the heart of handsome Captain Li Shang.",
				"year": "1998",
				"release_date": "1998-06-18",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 12,
						"name": "Adventure"
					}
				],
				"runtime": 88,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/xCVcnQ2fm77vm7vFjTcrWGjz1Wb.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/mUYV0ZdsDEliGaQahcQH1F3grsP.jpg"
			},
			{
				"id": 12242,
				"title": "Mulan II",
				"description": "Fa Mulan gets the surprise of her young life when her love, Captain Li Shang asks for her hand in marriage. Before the two can have their happily ever after, the Emperor assigns them a secret mission, to escort three princesses to Chang'an, China. Mushu is determined to drive a wedge between the couple after he learns that he will lose his guardian job if Mulan marries into the Li family.",
				"year": "2004",
				"release_date": "2004-11-03",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 28,
						"name": "Action"
					}
				],
				"runtime": 79,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/8cUIHYXpDFYX6r5ZviQuRKCVLJ2.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/f8BobrxGnAFObYRSN1BTIzQbEMW.jpg"
			},
			{
				"id": 75900,
				"title": "My Week with Marilyn",
				"description": "Sir Laurence Olivier is making a movie in London. Young Colin Clark, an eager film student, wants to be involved and he navigates himself a job on the set. When film star Marilyn Monroe arrives for the start of shooting, all of London is excited to see the blonde bombshell, while Olivier is struggling to meet her many demands and acting ineptness, and Colin is intrigued by her. Colin's intrigue is met when Marilyn invites him into her inner world where she struggles with her fame, her beauty and her desire to be a great actress.",
				"year": "2011",
				"release_date": "2011-11-23",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 99,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/do34iXAPKl959RJKeo2ZISx7H2v.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/eBfZlJ57cy2AYsXLGdbeV9rLqJf.jpg"
			},
			{
				"id": 129670,
				"title": "Nebraska",
				"description": "An aging, booze-addled father takes a trip from Montana to Nebraska with his estranged son in order to claim what he believes to be a million-dollar sweepstakes prize.",
				"year": "2013",
				"release_date": "2013-09-21",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 12,
						"name": "Adventure"
					}
				],
				"runtime": 115,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/3WdcebeFY1ProN3MxKuaT78CK8w.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/lTVbcxbXHO2o3T0KFrnnx7QmxIm.jpg"
			},
			{
				"id": 15300,
				"title": "Newsies",
				"description": "A week in the life of the exploited, child newspaper sellers in turn-of-the-century New York. When their publisher, Joseph Pulitzer, tries to squeeze a little more profit out of their labours, they organize a strike, only to be confronted with the Pulitzer's hard-ball tactics.",
				"year": "1992",
				"release_date": "1992-04-10",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 10402,
						"name": "Music"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 121,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/jempb3P3F4chHanhkT8cMydGW6r.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/eRR2a0tOaP6UITtQ8S3ofh8n7lX.jpg"
			},
			{
				"id": 1593,
				"title": "Night at the Museum",
				"description": "Chaos reigns at the natural history museum when night watchman Larry Daley accidentally stirs up an ancient curse, awakening Attila the Hun, an army of gladiators, a Tyrannosaurus rex and other exhibits.",
				"year": "2006",
				"release_date": "2006-10-20",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 108,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/uY9k8t2FQkMj60obnAnsPKLxHCE.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/zLbRMFVF5MVdM10Y5GzF34A3CSo.jpg"
			},
			{
				"id": 11397,
				"title": "Not Another Teen Movie",
				"description": "On a bet, a gridiron hero at John Hughes High School sets out to turn a bespectacled plain Jane into a beautiful and popular prom queen in this outrageous send-up of the teen movie genre.",
				"year": "2001",
				"release_date": "2001-12-07",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 89,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/rpvvul2liWeenNtyfwf2X6HtCwe.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/75zzFuoXiFZAimpqg76ifzRG8br.jpg"
			},
			{
				"id": 75656,
				"title": "Now You See Me",
				"description": "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.",
				"year": "2013",
				"release_date": "2013-05-29",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 53,
						"name": "Thriller"
					},
					{
						"id": 80,
						"name": "Crime"
					}
				],
				"runtime": 116,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/h4LgHQtpm9si92edda5JN6g0tX4.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/rYxn6wryjrjeVTBCOy3JGoyFAGg.jpg"
			},
			{
				"id": 134,
				"title": "O Brother, Where Art Thou?",
				"description": "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them. On their journey they come across many comical characters and incredible situations. Based upon Homer's 'Odyssey'.",
				"year": "2000",
				"release_date": "2000-08-30",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 80,
						"name": "Crime"
					}
				],
				"runtime": 106,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/2YztYilviFCYcEtDAnrOstUWGie.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/9qAqlxaeGsXwwpeSEVDt7LPHLwn.jpg"
			},
			{
				"id": 402900,
				"title": "Ocean's Eight",
				"description": "Debbie Ocean, a criminal mastermind, gathers a crew of female thieves to pull off the heist of the century at New York's annual Met Gala.",
				"year": "2018",
				"release_date": "2018-06-07",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 80,
						"name": "Crime"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 53,
						"name": "Thriller"
					}
				],
				"runtime": 111,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/MvYpKlpFukTivnlBhizGbkAe3v.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/6vea77yJv3jMEUzh1crnuFitKDz.jpg"
			},
			{
				"id": 68726,
				"title": "Pacific Rim",
				"description": "When legions of monstrous creatures, known as Kaiju, started rising from the sea, a war began that would take millions of lives and consume humanity's resources for years on end. To combat the giant Kaiju, a special type of weapon was devised: massive robots, called Jaegers, which are controlled simultaneously by two pilots whose minds are locked in a neural bridge. But even the Jaegers are proving nearly defenseless in the face of the relentless Kaiju. On the verge of defeat, the forces defending mankind have no choice but to turn to two unlikely heroes—a washed-up former pilot (Charlie Hunnam) and an untested trainee (Rinko Kikuchi)—who are teamed to drive a legendary but seemingly obsolete Jaeger from the past. Together, they stand as mankind's last hope against the mounting apocalypse.",
				"year": "2013",
				"release_date": "2013-07-11",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 12,
						"name": "Adventure"
					}
				],
				"runtime": 131,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/mmznhaQDwlHWpUwKuNxtQiubbmM.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/ig7qUy7drkEFZNCK7gi0hMn1WMN.jpg"
			},
			{
				"id": 286565,
				"title": "Paper Towns",
				"description": "Quentin Jacobsen has spent a lifetime loving the magnificently adventurous Margo Roth Spiegelman from afar. So when she cracks open a window and climbs back into his life-dressed like a ninja and summoning him for an ingenious campaign of revenge-he follows. After their all-nighter ends and a new day breaks, Q arrives at school to discover that Margo, always an enigma, has now become a mystery. But Q soon learns that there are clues-and they're for him. Urged down a disconnected path, the closer he gets, the less Q sees of the girl he thought he knew.",
				"year": "2015",
				"release_date": "2015-06-18",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 9648,
						"name": "Mystery"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 109,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/lVW67w7eWwmBhbBCc4f983pO8m6.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/86vufNLzDybGdpfBg7RF8xncYXp.jpg"
			},
			{
				"id": 205220,
				"title": "Philomena",
				"description": "A woman searches for her adult son, who was taken away from her decades ago when she was forced to live in a convent.",
				"year": "2013",
				"release_date": "2013-11-01",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 98,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/eBUv2GmGdXmCk1AaSOmyiu70hN8.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/Yj9SefNpNkXVo8x5J56uLm35ls.jpg"
			},
			{
				"id": 254470,
				"title": "Pitch Perfect 2",
				"description": "The Bellas are back, and they are better than ever. After being humiliated in front of none other than the President of the United States of America, the Bellas are taken out of the Aca-Circuit. In order to clear their name, and regain their status, the Bellas take on a seemingly impossible task: winning an international competition no American team has ever won. In order to accomplish this monumental task, they need to strengthen the bonds of friendship and sisterhood and blow away the competition with their amazing aca-magic! With all new friends and old rivals tagging along for the trip, the Bellas can hopefully accomplish their dreams.",
				"year": "2015",
				"release_date": "2015-05-07",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10402,
						"name": "Music"
					}
				],
				"runtime": 115,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/oFBQUufCV4c8WZoNhtGM17p884H.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/bWOfRV1Ubk9SWEDZDDjsmIUCcbZ.jpg"
			},
			{
				"id": 11522,
				"title": "Pretty in Pink",
				"description": "Andie is an outcast, hanging out either with her older boss, who owns the record store where she works, or her quirky high school classmate Duckie, who has a crush on her. When one of the rich and popular kids at school, Blane, asks Andie out, it seems too good to be true. As Andie starts falling for Blane, she begins to realize that dating someone from a different social sphere is not easy.",
				"year": "1986",
				"release_date": "1986-02-28",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 97,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/jeFJyzJBufJexpOuywuPp8q2tCJ.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/bZneRu42OnfMJzQJ0Mn39kCI5v3.jpg"
			},
			{
				"id": 4348,
				"title": "Pride & Prejudice",
				"description": "A story of love and life among the landed English gentry during the Georgian era. Mr. Bennet is a gentleman living in Hertfordshire with his overbearing wife and five daughters, but if he dies their house will be inherited by a distant cousin whom they have never met, so the family's future happiness and security is dependent on the daughters making good marriages.",
				"year": "2005",
				"release_date": "2005-09-16",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 127,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/sZEXhhnEKh9hjzoiIi9XgHGqtYm.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/f55RXefcTP0N510HiV0rAZK6fAK.jpg"
			},
			{
				"id": 680,
				"title": "Pulp Fiction",
				"description": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
				"year": "1994",
				"release_date": "1994-09-10",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 53,
						"name": "Thriller"
					},
					{
						"id": 80,
						"name": "Crime"
					}
				],
				"runtime": 154,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/yAaf4ybTENKPicqzsAoW6Emxrag.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/eDMZmfnH50DDboUxTRnOYYpE9aY.jpg"
			},
			{
				"id": 13455,
				"title": "Push",
				"description": "After his father, an assassin, is brutally murdered, Nick Gant vows revenge on Division, the covert government agency that dabbles in psychic warfare and experimental drugs. Hiding in Hong Kong's underworld, Nick assembles a band of rogue psychics dedicated to destroying Division. Together with Cassie, a teenage clairvoyant, Nick goes in search of a missing girl and a stolen suitcase that could be the key to accomplishing their mutual goal.",
				"year": "2009",
				"release_date": "2009-02-04",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 28,
						"name": "Action"
					}
				],
				"runtime": 111,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/aYvBiQEaJuoWpIrVBUKmW3NtcK8.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/v2vnLsMZmi1pB3C81c3HfHoA4ZW.jpg"
			},
			{
				"id": 2062,
				"title": "Ratatouille",
				"description": "A rat named Remy dreams of becoming a great French chef despite his family's wishes and the obvious problem of being a rat in a decidedly rodent-phobic profession. When fate places Remy in the sewers of Paris, he finds himself ideally situated beneath a restaurant made famous by his culinary hero, Auguste Gusteau. Despite the apparent dangers of being an unlikely - and certainly unwanted - visitor in the kitchen of a fine French restaurant, Remy's passion for cooking soon sets into motion a hilarious and exciting rat race that turns the culinary world of Paris upside down.",
				"year": "2007",
				"release_date": "2007-06-22",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 111,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/npHNjldbeTHdKKw28bJKs7lzqzj.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/xgDj56UWyeWQcxQ44f5A3RTWuSs.jpg"
			},
			{
				"id": 401981,
				"title": "Red Sparrow",
				"description": "Prima ballerina, Dominika Egorova faces a bleak and uncertain future after she suffers an injury that ends her career. She soon turns to Sparrow School, a secret intelligence service that trains exceptional young people to use their minds and bodies as weapons. Dominika emerges as the most dangerous Sparrow after completing the sadistic training process. As she comes to terms with her new abilities, she meets a CIA agent who tries to convince her that he is the only person she can trust.",
				"year": "2018",
				"release_date": "2018-02-28",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 9648,
						"name": "Mystery"
					},
					{
						"id": 53,
						"name": "Thriller"
					}
				],
				"runtime": 140,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/oy6EYWzTwcIMjQYTS6uXS7JXGOx.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/sGzuQYSTwJvLBc2PnuSVLHhuFeh.jpg"
			},
			{
				"id": 81188,
				"title": "Rise of the Guardians",
				"description": "When an evil spirit known as Pitch lays down the gauntlet to take over the world, the immortal Guardians must join forces for the first time to protect the hopes, beliefs and imagination of children all over the world.",
				"year": "2012",
				"release_date": "2012-11-21",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					}
				],
				"runtime": 97,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/kUBkmlWriPbNMijL2m3LtmPYPTb.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/46IGtYNjpIvQYRIQlb2X493Wh8x.jpg"
			},
			{
				"id": 8005,
				"title": "Robin Hood: Men in Tights",
				"description": "Robin Hood comes home after fighting in the Crusades to learn that the noble King Richard is in exile and that the despotic King John now rules England, with the help of the Sheriff of Rottingham. Robin Hood assembles a band of fellow patriots to do battle with King John and the Sheriff.",
				"year": "1993",
				"release_date": "1993-07-28",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 104,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/woexOLEkUlYsPLLuZRK6LjZaF38.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/7UuE0ppipos23d56Aikpt8BNFqq.jpg"
			},
			{
				"id": 96721,
				"title": "Rush",
				"description": "A biographical drama centered on the rivalry between Formula 1 drivers James Hunt and Niki Lauda during the 1976 Formula One motor-racing season.",
				"year": "2013",
				"release_date": "2013-09-02",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 28,
						"name": "Action"
					}
				],
				"runtime": 123,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/uWcMgxO3p3qwVFUxsRz1HbTzGvT.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/87bTKYEnbB71Aq2kVO1r8jVebvd.jpg"
			},
			{
				"id": 140823,
				"title": "Saving Mr. Banks",
				"description": "Author P.L. Travers travels from London to Hollywood as Walt Disney Pictures adapts her novel Mary Poppins for the big screen.",
				"year": "2013",
				"release_date": "2013-11-16",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 36,
						"name": "History"
					}
				],
				"runtime": 125,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/ksDa3XtV3v07jhQLUgARRi5cFBO.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/3YdBJsBXCBTJX7ZKgKwKhl7xrln.jpg"
			},
			{
				"id": 1584,
				"title": "School of Rock",
				"description": "Fired from his band and hard up for cash, guitarist and vocalist Dewey Finn finagles his way into a job as a fifth-grade substitute teacher at a private school, where he secretly begins teaching his students the finer points of rock 'n' roll. The school's hard-nosed principal is rightly suspicious of Finn's activities. But Finn's roommate remains in the dark about what he's doing.",
				"year": "2003",
				"release_date": "2003-10-03",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10402,
						"name": "Music"
					}
				],
				"runtime": 110,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/rwAdo5ugCcPm17A99f4iPPNhuZK.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/pM1CnP0ZN2VxmrTAbBZOS3PNoNE.jpg"
			},
			{
				"id": 9655,
				"title": "She's the Man",
				"description": "Viola Hastings is in a real jam. Complications threaten her scheme to pose as her twin brother, Sebastian, and take his place at a new boarding school. She falls in love with her handsome roommate, Duke, who loves beautiful Olivia, who has fallen for Sebastian! As if that were not enough, Viola's twin returns from London ahead of schedule but has no idea that his sister has already replaced him on campus.",
				"year": "2006",
				"release_date": "2006-03-17",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 105,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/6NIvKonJblEaR6jD1BA6bsY0fXV.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/1tqFPSCXcpQhozWiVFasq5AudQz.jpg"
			},
			{
				"id": 169813,
				"title": "Short Term 12",
				"description": "Grace, a compassionate young supervisor at a foster care facility, helps at-risk teens. But when a new charge dredges up memories of her own troubled past, Grace's tough exterior begins eroding.",
				"year": "2013",
				"release_date": "2013-08-23",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 96,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/qKnsyaJZLXfiL2JhIJEkpA8C3LU.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/p13Ocq7UO9hobCBzrmYZpMIpNBa.jpg"
			},
			{
				"id": 82693,
				"title": "Silver Linings Playbook",
				"description": "After spending eight months in a mental institution, a former teacher moves back in with his parents and tries to reconcile with his ex-wife.",
				"year": "2012",
				"release_date": "2012-09-08",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 122,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/y7iOVneBvITlBdhy6tVqXVOa1Js.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/t5cuFKDgf5hRWYpRZ3jAANu5kPr.jpg"
			},
			{
				"id": 58595,
				"title": "Snow White and the Huntsman",
				"description": "After the Evil Queen marries the King, she performs a violent coup in which the King is murdered and his daughter, Snow White, is taken captive. Almost a decade later, a grown Snow White is still in the clutches of the Queen. In order to obtain immortality, The Evil Queen needs the heart of Snow White. After Snow escapes the castle, the Queen sends the Huntsman to find her in the Dark Forest.",
				"year": "2012",
				"release_date": "2012-05-30",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 127,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/xUNnFwO7XfjvrQ2hFfIlPTwqzDk.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/pQCaHtyJGV9e8AJedjQRYMQpBa9.jpg"
			},
			{
				"id": 315635,
				"title": "Spider-Man: Homecoming",
				"description": "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
				"year": "2017",
				"release_date": "2017-07-05",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 133,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg"
			},
			{
				"id": 324857,
				"title": "Spider-Man: Into the Spider-Verse",
				"description": "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
				"year": "2018",
				"release_date": "2018-12-06",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 117,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg"
			},
			{
				"id": 13475,
				"title": "Star Trek",
				"description": "The fate of the galaxy rests in the hands of bitter rivals. One, James Kirk, is a delinquent, thrill-seeking Iowa farm boy. The other, Spock, a Vulcan, was raised in a logic-based society that rejects all emotion. As fiery instinct clashes with calm reason, their unlikely but powerful partnership is the only thing capable of leading their crew through unimaginable danger, boldly going where no one has gone before. The human adventure has begun again.",
				"year": "2009",
				"release_date": "2009-05-06",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					}
				],
				"runtime": 127,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/hN2ZtF3Uw6mhIHZiqL0SKzELtKn.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/zzzoRNVSaUv6e1hpADjUDeM3EvY.jpg"
			},
			{
				"id": 54138,
				"title": "Star Trek Into Darkness",
				"description": "When the crew of the Enterprise is called back home, they find an unstoppable force of terror from within their own organization has detonated the fleet and everything it stands for, leaving our world in a state of crisis.  With a personal score to settle, Captain Kirk leads a manhunt to a war-zone world to capture a one man weapon of mass destruction. As our heroes are propelled into an epic chess game of life and death, love will be challenged, friendships will be torn apart, and sacrifices must be made for the only family Kirk has left: his crew.",
				"year": "2013",
				"release_date": "2013-05-05",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 132,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/7XrRkhMa9lQ71RszzSyVrJVvhyS.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/1aS7a9rwrUh6RuDq2A9VowxE9os.jpg"
			},
			{
				"id": 11,
				"title": "Star Wars",
				"description": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
				"year": "1977",
				"release_date": "1977-05-25",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 121,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg"
			},
			{
				"id": 1894,
				"title": "Star Wars: Episode II - Attack of the Clones",
				"description": "Following an assassination attempt on Senator Padmé Amidala, Jedi Knights Anakin Skywalker and Obi-Wan Kenobi investigate a mysterious plot that could change the galaxy forever.",
				"year": "2002",
				"release_date": "2002-05-15",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 142,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/oZNPzxqM2s5DyVWab09NTQScDQt.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/9dwPRPM3ziTPs4VyBHfXCB1NIUm.jpg"
			},
			{
				"id": 1895,
				"title": "Star Wars: Episode III - Revenge of the Sith",
				"description": "The evil Darth Sidious enacts his final plan for unlimited power -- and the heroic Jedi Anakin Skywalker must choose a side.",
				"year": "2005",
				"release_date": "2005-05-17",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 28,
						"name": "Action"
					}
				],
				"runtime": 140,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/rCar6tZoehB3HAXx7EbsyHhAF9L.jpg"
			},
			{
				"id": 140607,
				"title": "Star Wars: The Force Awakens",
				"description": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
				"year": "2015",
				"release_date": "2015-12-15",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 136,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/k6EOrckWFuz7I4z4wiRwz8zsj4H.jpg"
			},
			{
				"id": 2270,
				"title": "Stardust",
				"description": "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm. His journey takes him into a world beyond his wildest dreams and reveals his true identity.",
				"year": "2007",
				"release_date": "2007-08-09",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 10749,
						"name": "Romance"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 127,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/AsCrevARwF6eCrF2v8zpLdn0gth.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/6aYZjRsRCDGuzWbNo43Jsi2thh.jpg"
			},
			{
				"id": 10115,
				"title": "Stick It",
				"description": "Haley is a naturally gifted athlete but, with her social behavior, the teen seems intent on squandering her abilities. After a final brush with the law, a judge sentences her to an elite gymnastics academy run by a legendary, hard-nosed coach. Once there, Haley's rebellious attitude wins her both friends and enemies.",
				"year": "2006",
				"release_date": "2006-04-21",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 105,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/uMcylxIC7nBpBd8Uf6Apr4MJ1pf.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/mXBjx6NH9copXkiwj78qobHNoQK.jpg"
			},
			{
				"id": 23629,
				"title": "Sucker Punch",
				"description": "A young girl is institutionalized by her abusive stepfather. Retreating to an alternative reality as a coping strategy, she envisions a plan which will help her escape from the mental facility.",
				"year": "2011",
				"release_date": "2011-03-24",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 53,
						"name": "Thriller"
					}
				],
				"runtime": 110,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/8oBc33JEnYm3rqPIwGtQXQbP96j.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/qSL3dh4QaaZ02dktTmfTDW6caMh.jpg"
			},
			{
				"id": 38757,
				"title": "Tangled",
				"description": "When the kingdom's most wanted-and most charming-bandit Flynn Rider hides out in a mysterious tower, he's taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair. Flynn's curious captor, who's looking for her ticket out of the tower where she's been locked away for years, strikes a deal with the handsome thief and the unlikely duo sets off on an action-packed escapade, complete with a super-cop horse, an over-protective chameleon and a gruff gang of pub thugs.",
				"year": "2010",
				"release_date": "2010-11-24",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 100,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/1uPxRO0iYwW02lzwatRhkugWBYs.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/rXLw50QWqJVkQQ47Ic6M8bqWNU5.jpg"
			},
			{
				"id": 38050,
				"title": "The Adjustment Bureau",
				"description": "A man glimpses the future Fate has planned for him – and chooses to fight for his own destiny. Battling the powerful Adjustment Bureau across, under and through the streets of New York, he risks his destined greatness to be with the only woman he's ever loved.",
				"year": "2011",
				"release_date": "2011-03-03",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 53,
						"name": "Thriller"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 106,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/A4wKf04g4DCVAWC67uPGozIJPGw.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/yPAYpLofITQ9pST80ZNBGIE2pfN.jpg"
			},
			{
				"id": 1930,
				"title": "The Amazing Spider-Man",
				"description": "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
				"year": "2012",
				"release_date": "2012-06-23",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 136,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/jIfkQNARYyERqRAq1p1c8xgePp4.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/aMqSuMYZ9L3wOPq19vbb5FEv2Uf.jpg"
			},
			{
				"id": 102382,
				"title": "The Amazing Spider-Man 2",
				"description": "For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.",
				"year": "2014",
				"release_date": "2014-04-16",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 142,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/579HAFLpODEC9Reb64wbCHSUi4O.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/rF3kAqk08zGSvs8m6hRwsi28nHg.jpg"
			},
			{
				"id": 698296,
				"title": "The Art of 'Spirited Away'",
				"description": "The people that brought the film Sen to Chihiro no kamikakushi (2001) (a.k.a. \"Spirited Away\") to the US explain how it was converted into English, with some minor confusion between languages, and how well it did in both Japan and America.",
				"year": "2003",
				"release_date": "2003-04-15",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 99,
						"name": "Documentary"
					},
					{
						"id": 16,
						"name": "Animation"
					}
				],
				"runtime": 15,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/x1iaVnI4mTaETwAKTLyIAKFwQSJ.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280null"
			},
			{
				"id": 24428,
				"title": "The Avengers",
				"description": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
				"year": "2012",
				"release_date": "2012-04-25",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					}
				],
				"runtime": 143,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/kwUQFeFXOOpgloMgZaadhzkbTI4.jpg"
			},
			{
				"id": 318846,
				"title": "The Big Short",
				"description": "The men who made millions from a global economic meltdown.",
				"year": "2015",
				"release_date": "2015-12-11",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 131,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/isuQWbJPbjybBEWdcCaBUPmU0XO.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/cU7lZD7EMZ2ijHasEH7zjIpNU32.jpg"
			},
			{
				"id": 203833,
				"title": "The Book Thief",
				"description": "While subjected to the horrors of WWII Germany, young Liesel finds solace by stealing books and sharing them with others. Under the stairs in her home, a Jewish refugee is being sheltered by her adoptive parents.",
				"year": "2013",
				"release_date": "2013-11-08",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 131,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/wj4U5sMLcJMa3WR9CpRR9e2sdgZ.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/oxbijRUHyGgyfcnPYH3NDhxeesU.jpg"
			},
			{
				"id": 228326,
				"title": "The Book of Life",
				"description": "The journey of Manolo, a young man who is torn between fulfilling the expectations of his family and following his heart. Before choosing which path to follow, he embarks on an incredible adventure that spans three fantastical worlds where he must face his greatest fears.",
				"year": "2014",
				"release_date": "2014-10-01",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 95,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/puTDvsUADxCA5NjJuwgEWqQ3xGA.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/5EJ3B4DpoC1OJ1FYvCIKzNUDwyO.jpg"
			},
			{
				"id": 170687,
				"title": "The Boxtrolls",
				"description": "An orphaned boy raised by underground creatures called Boxtrolls comes up from the sewers and out of his box to save his family and the town from the evil exterminator, Archibald Snatcher.",
				"year": "2014",
				"release_date": "2014-09-10",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 97,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/GXOIM93ZrOFUtYfR2rQIxgsYUJ.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/dkBx0XNzsngDDqiWiPG08eMWBm7.jpg"
			},
			{
				"id": 2108,
				"title": "The Breakfast Club",
				"description": "Five high school students from different walks of life endure a Saturday detention under a power-hungry principal. The disparate group includes rebel John, princess Claire, outcast Allison, brainy Brian and Andrew, the jock. Each has a chance to tell his or her story, making the others see them a little differently -- and when the day ends, they question whether school will ever be the same.",
				"year": "1985",
				"release_date": "1985-02-15",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 98,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/c0bdxKVRevkw50LOnk6B8d3e4s.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/qpPFF8Sed5lkXngWraJdN8WkwDG.jpg"
			},
			{
				"id": 2454,
				"title": "The Chronicles of Narnia: Prince Caspian",
				"description": "One year after their incredible adventures in the Lion, the Witch and the Wardrobe, Peter, Edmund, Lucy and Susan Pevensie return to Narnia to aid a young prince whose life has been threatened by the evil King Miraz. Now, with the help of a colorful cast of new characters, including Trufflehunter the badger and Nikabrik the dwarf, the Pevensie clan embarks on an incredible quest to ensure that Narnia is returned to its rightful heir.",
				"year": "2008",
				"release_date": "2008-05-15",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 150,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/qxz3WIyjZiSKUhaTIEJ3c1GcC9z.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/ust0K60AYegrKkE34ONo66r7Hfx.jpg"
			},
			{
				"id": 411,
				"title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
				"description": "Siblings Lucy, Edmund, Susan and Peter step through a magical wardrobe and find the land of Narnia. There, the they discover a charming, once peaceful kingdom that has been plunged into eternal winter by the evil White Witch, Jadis. Aided by the wise and magnificent lion, Aslan, the children lead Narnia into a spectacular, climactic battle to be free of the Witch's glacial powers forever.",
				"year": "2005",
				"release_date": "2005-12-07",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 143,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/kzJip9vndXYSKQHCgekrgqbnUrA.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/sKK5bbQm15jzbMRwCJmPBbv9trN.jpg"
			},
			{
				"id": 10140,
				"title": "The Chronicles of Narnia: The Voyage of the Dawn Treader",
				"description": "This time around Edmund and Lucy Pevensie, along with their pesky cousin Eustace Scrubb find themselves swallowed into a painting and on to a fantastic Narnian ship headed for the very edges of the world.",
				"year": "2010",
				"release_date": "2010-12-08",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 113,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/pP27zlm9yeKrCeDZLFLP2HKELot.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/vFzv2t9lHaOU2JDAQ2QhKYJdEAd.jpg"
			},
			{
				"id": 49519,
				"title": "The Croods",
				"description": "The Croods is a prehistoric comedy adventure that follows the world's first family as they embark on a journey of a lifetime when the cave that has always shielded them from danger is destroyed. Traveling across a spectacular landscape, the Croods discover an incredible new world filled with fantastic creatures -- and their outlook is changed forever.",
				"year": "2013",
				"release_date": "2013-03-20",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 98,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/27zvjVOtOi5ped1HSlJKNsKXkFH.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/u4mD4FSpnppWmQNHEoPsRwCWjyd.jpg"
			},
			{
				"id": 155,
				"title": "The Dark Knight",
				"description": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
				"year": "2008",
				"release_date": "2008-07-16",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 80,
						"name": "Crime"
					},
					{
						"id": 53,
						"name": "Thriller"
					}
				],
				"runtime": 152,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg"
			},
			{
				"id": 49026,
				"title": "The Dark Knight Rises",
				"description": "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.",
				"year": "2012",
				"release_date": "2012-07-16",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 80,
						"name": "Crime"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 53,
						"name": "Thriller"
					}
				],
				"runtime": 165,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/85cWkCVftiVs0BVey6pxX8uNmLt.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/cKPfiu9IcCW0fMdKdQBXe3PRtTZ.jpg"
			},
			{
				"id": 350,
				"title": "The Devil Wears Prada",
				"description": "Andy moves to New York to work in the fashion industry. Her boss is extremely demanding, cruel and won't let her succeed if she doesn't fit into the high class elegant look of their magazine.",
				"year": "2006",
				"release_date": "2006-06-30",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 109,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/u6QBDGUCOEMRekna95ip2MxplbQ.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/3tWw50B1xXlCnJ9A7NX4nNzZF4j.jpg"
			},
			{
				"id": 1891,
				"title": "The Empire Strikes Back",
				"description": "The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.",
				"year": "1980",
				"release_date": "1980-05-20",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 124,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/7BuH8itoSrLExs2YZSsM01Qk2no.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/azIbQpeKKNF9r85lBSRrNnMK0Si.jpg"
			},
			{
				"id": 14784,
				"title": "The Fall",
				"description": "In a hospital on the outskirts of 1920s Los Angeles, an injured stuntman begins to tell a fellow patient, a little girl with a broken arm, a fantastic story about 5 mythical heroes. Thanks to his fractured state of mind and her vivid imagination, the line between fiction and reality starts to blur as the tale advances.",
				"year": "2008",
				"release_date": "2008-01-03",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 117,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/jUx4P4Q1VsQ07rLz7sOlSyNm4F3.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/mSCY3bmb3zV0eBfabUgjJPNLZ3p.jpg"
			},
			{
				"id": 222935,
				"title": "The Fault in Our Stars",
				"description": "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a patient named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.",
				"year": "2014",
				"release_date": "2014-05-16",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 10749,
						"name": "Romance"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 125,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/clmvI4B5JB2ToPGtiHodaLMFaoM.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/oQaVV7p916HO5MDI820zzs1pin9.jpg"
			},
			{
				"id": 162903,
				"title": "The Fifth Estate",
				"description": "A look at the relationship between WikiLeaks founder Julian Assange and his early supporter and eventual colleague Daniel Domscheit-Berg, and how the website's growth and influence led to an irreparable rift between the two friends.",
				"year": "2013",
				"release_date": "2013-10-11",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 53,
						"name": "Thriller"
					}
				],
				"runtime": 128,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/vXP51R7yp7pfSXuzWk3LkVTDZwP.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/2g4cXP5ozwmHlETU6BADv01xVGj.jpg"
			},
			{
				"id": 1381,
				"title": "The Fountain",
				"description": "Spanning over one thousand years, and three parallel stories, The Fountain is a story of love, death, spirituality, and the fragility of our existence in this world.",
				"year": "2006",
				"release_date": "2006-09-06",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 96,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/tnmkVAYrHITpdKgmZ7CzVBEI4ho.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/jZEjElQwPPeOhsRnYUg4QJAjCbh.jpg"
			},
			{
				"id": 105864,
				"title": "The Good Dinosaur",
				"description": "An epic journey into the world of dinosaurs where an Apatosaurus named Arlo makes an unlikely human friend.",
				"year": "2015",
				"release_date": "2015-11-14",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 93,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/dM50iVbcnzQUIoc9TmUUk0SP4P4.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/s4wRC37TUwxtghhFBaze0qO1278.jpg"
			},
			{
				"id": 120467,
				"title": "The Grand Budapest Hotel",
				"description": "The Grand Budapest Hotel tells of a legendary concierge at a famous European hotel between the wars and his friendship with a young employee who becomes his trusted protégé. The story involves the theft and recovery of a priceless Renaissance painting, the battle for an enormous family fortune and the slow and then sudden upheavals that transformed Europe during the first half of the 20th century.",
				"year": "2014",
				"release_date": "2014-02-26",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 100,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/1WicOAzPkpBWajjvcFazPLIuu0A.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/wMQgG7pzfFoorL4JC0U9YKlkcSl.jpg"
			},
			{
				"id": 64682,
				"title": "The Great Gatsby",
				"description": "An adaptation of F. Scott Fitzgerald's Long Island-set novel, where Midwesterner Nick Carraway is lured into the lavish world of his neighbor, Jay Gatsby. Soon enough, however, Carraway will see through the cracks of Gatsby's nouveau riche existence, where obsession, madness, and tragedy await.",
				"year": "2013",
				"release_date": "2013-05-10",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 143,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/nwJbVKauPDgJVQgT7SQpVTVN4gA.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/7V6izraXVMLRGhm1smi1aeNRop6.jpg"
			},
			{
				"id": 50014,
				"title": "The Help",
				"description": "Aibileen Clark is a middle-aged African-American maid who has spent her life raising white children and has recently lost her only son; Minny Jackson is an African-American maid who has often offended her employers despite her family's struggles with money and her desperate need for jobs; and Eugenia \"Skeeter\" Phelan is a young white woman who has recently moved back home after graduating college to find out her childhood maid has mysteriously disappeared. These three stories intertwine to explain how life in Jackson, Mississippi revolves around \"the help\"; yet they are always kept at a certain distance because of racial lines.",
				"year": "2011",
				"release_date": "2011-08-09",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 146,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/7XLSwxpfpPoJyTdJVot6a42TS2V.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/reh0SLpb6npFGzB6iXAY5df4K2v.jpg"
			},
			{
				"id": 7453,
				"title": "The Hitchhiker's Guide to the Galaxy",
				"description": "Mere seconds before the Earth is to be demolished by an alien construction crew, Arthur Dent is swept off the planet by his friend Ford Prefect, a researcher penning a new edition of \"The Hitchhiker's Guide to the Galaxy.\"",
				"year": "2005",
				"release_date": "2005-04-28",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 109,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/tcrkbs4ezEklmvt39b01881P6CN.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/7wr3TRFpeTqotoU9FlHb5DeFQ4K.jpg"
			},
			{
				"id": 70160,
				"title": "The Hunger Games",
				"description": "Every year in the ruins of what was once North America, the nation of Panem forces each of its twelve districts to send a teenage boy and girl to compete in the Hunger Games.  Part twisted entertainment, part government intimidation tactic, the Hunger Games are a nationally televised event in which “Tributes” must fight with one another until one survivor remains.  Pitted against highly-trained Tributes who have prepared for these Games their entire lives, Katniss is forced to rely upon her sharp instincts as well as the mentorship of drunken former victor Haymitch Abernathy.  If she’s ever to return home to District 12, Katniss must make impossible choices in the arena that weigh survival against humanity and life against love. The world will be watching.",
				"year": "2012",
				"release_date": "2012-03-12",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 142,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/mgZKtOvxtDX5HtUa5fAVQ5d1Afh.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/zqAtFrTmauJGRbqrL0XoENa2eL.jpg"
			},
			{
				"id": 205596,
				"title": "The Imitation Game",
				"description": "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II.",
				"year": "2014",
				"release_date": "2014-11-14",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 36,
						"name": "History"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 53,
						"name": "Thriller"
					},
					{
						"id": 10752,
						"name": "War"
					}
				],
				"runtime": 113,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/zSqJ1qFq8NXFfi7JeIYMlzyR0dx.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/caQp2MhwfrTYGqVr7d9ayn8tqQ7.jpg"
			},
			{
				"id": 9806,
				"title": "The Incredibles",
				"description": "Bob Parr has given up his superhero days to log in time as an insurance adjuster and raise his three children with his formerly heroic wife in suburbia. But when he receives a mysterious assignment, it's time to get back into costume.",
				"year": "2004",
				"release_date": "2004-11-05",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 115,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/qEqrnYQWxHFBss0ugQsLORAI6aL.jpg"
			},
			{
				"id": 9806,
				"title": "The Incredibles",
				"description": "Bob Parr has given up his superhero days to log in time as an insurance adjuster and raise his three children with his formerly heroic wife in suburbia. But when he receives a mysterious assignment, it's time to get back into costume.",
				"year": "2004",
				"release_date": "2004-11-05",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 115,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/qEqrnYQWxHFBss0ugQsLORAI6aL.jpg"
			},
			{
				"id": 613130,
				"title": "The Internship",
				"description": "The Internship is a short film about race, class and privilege within the creative industries. It follows Josh, a young design graduate working in a dead end job has a chance meeting with his idol, a famous design magazine editor who offers him a rare and prestigious internship. However, he must convince a family to who internships mean an extra financial burden, and in an industry in which their culture has never really been well represented; that it’s a chance worth taking.",
				"year": "2019",
				"release_date": "2019-04-20",
				"watched": true,
				"rating": null,
				"genre": [],
				"runtime": 12,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/lKZYAaDOh26nwISWVXxVERX7lKU.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280null"
			},
			{
				"id": 23082,
				"title": "The Invention of Lying",
				"description": "Set in a world where the concept of lying doesn't exist, a loser changes his lot when he invents lying and uses it to get ahead.",
				"year": "2009",
				"release_date": "2009-09-13",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 100,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/nYFhVR3fQBjPaDOUPVZrPIj3kni.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/j6Y7peYnsk0uOxnpHjcF62QLKAk.jpg"
			},
			{
				"id": 10386,
				"title": "The Iron Giant",
				"description": "In the small town of Rockwell, Maine in October 1957, a giant metal machine befriends a nine-year-old boy and ultimately finds its humanity by unselfishly saving people from their own fears and prejudices.",
				"year": "1999",
				"release_date": "1999-08-06",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 86,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/dUFiLEEuTZyUiQrN6oYMbMtDaXD.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/wfClZdRb1x4LZ8B73Y9RSn8XAPa.jpg"
			},
			{
				"id": 71688,
				"title": "The Iron Lady",
				"description": "A look at the life of Margaret Thatcher, the former Prime Minister of the United Kingdom, with a focus on the price she paid for power.",
				"year": "2011",
				"release_date": "2011-12-30",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 36,
						"name": "History"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 105,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/nh1j03qFhbM3HdfGhB7aCxqLVQ.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/oTDD5JFzJcuUEQC7sDyRyBigH9J.jpg"
			},
			{
				"id": 39781,
				"title": "The Kids Are All Right",
				"description": "Two women, Nic and Jules, brought a son and daughter into the world through artificial insemination. When one of their children reaches age, both kids go behind their mothers' backs to meet with the donor. Life becomes so much more interesting when the father, two mothers and children start to become attached to each other.",
				"year": "2010",
				"release_date": "2010-07-09",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 106,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/xQ5XqZc82dDCcGjxY7voRKjhaKQ.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/fZ8oFcREAr6wgWcXISGql0xyxjB.jpg"
			},
			{
				"id": 45269,
				"title": "The King's Speech",
				"description": "The King's Speech tells the story of the man who became King George VI, the father of Queen Elizabeth II. After his brother abdicates, George ('Bertie') reluctantly assumes the throne. Plagued by a dreaded stutter and considered unfit to be king, Bertie engages the help of an unorthodox speech therapist named Lionel Logue. Through a set of unexpected techniques, and as a result of an unlikely friendship, Bertie is able to find his voice and boldly lead the country into war.",
				"year": "2010",
				"release_date": "2010-09-06",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 36,
						"name": "History"
					}
				],
				"runtime": 118,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/uQ538BfYLDJh3GXlzRZLo0j7PFj.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/wSQI27EibzgeddPIpkmAThZWdjM.jpg"
			},
			{
				"id": 137106,
				"title": "The Lego Movie",
				"description": "An ordinary Lego mini-figure, mistakenly thought to be the extraordinary MasterBuilder, is recruited to join a quest to stop an evil Lego tyrant from gluing the universe together.",
				"year": "2014",
				"release_date": "2014-02-06",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 100,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/lbctonEnewCYZ4FYoTZhs8cidAl.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/lWp5ZmmkUf99kzTj4XJ02TWpxvM.jpg"
			},
			{
				"id": 420818,
				"title": "The Lion King",
				"description": "Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
				"year": "2019",
				"release_date": "2019-07-12",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 10402,
						"name": "Music"
					},
					{
						"id": 16,
						"name": "Animation"
					}
				],
				"runtime": 118,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg"
			},
			{
				"id": 286217,
				"title": "The Martian",
				"description": "During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.",
				"year": "2015",
				"release_date": "2015-09-30",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 141,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/3dPhs7hUnQLphDFzdkD407VZDYo.jpg"
			},
			{
				"id": 68722,
				"title": "The Master",
				"description": "Freddie, a volatile, heavy-drinking veteran who suffers from post-traumatic stress disorder, finds some semblance of a family when he stumbles onto the ship of Lancaster Dodd, the charismatic leader of a new \"religion\" he forms after World War II.",
				"year": "2012",
				"release_date": "2012-09-07",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 137,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/rUSjbyvYWN9H4az8xt0tDtU7I6v.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/haw9CNlQrRFlBOJdogW0LDZHWrj.jpg"
			},
			{
				"id": 603,
				"title": "The Matrix",
				"description": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
				"year": "1999",
				"release_date": "1999-03-30",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 136,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/ByDf0zjLSumz1MP1cDEo2JWVtU.jpg"
			},
			{
				"id": 9837,
				"title": "The Prince of Egypt",
				"description": "This is the extraordinary tale of two brothers named Moses and Ramses, one born of royal blood, and one an orphan with a secret past. Growing up the best of friends, they share a strong bond of free-spirited youth and good-natured rivalry. But the truth will ultimately set them at odds, as one becomes the ruler of the most powerful empire on earth, and the other the chosen leader of his people! Their final confrontation will forever change their lives and the world.",
				"year": "1998",
				"release_date": "1998-12-15",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 10402,
						"name": "Music"
					},
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 99,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/2xUjYwL6Ol7TLJPPKs7sYW5PWLX.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/cVa8EkjvT7IP0NMrGOKXs1UVUKs.jpg"
			},
			{
				"id": 2493,
				"title": "The Princess Bride",
				"description": "In this enchantingly cracked fairy tale, the beautiful Princess Buttercup and the dashing Westley must overcome staggering odds to find happiness amid six-fingered swordsmen, murderous princes, Sicilians and rodents of unusual size. But even death can't stop these true lovebirds from triumphing.",
				"year": "1987",
				"release_date": "1987-09-25",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 99,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/2FC9L9MrjBoGHYjYZjdWQdopVYb.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/aQ2ZbNqIaecoQsryNe33UmDtms.jpg"
			},
			{
				"id": 10198,
				"title": "The Princess and the Frog",
				"description": "A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being, but she has to face the same problem after she kisses him.",
				"year": "2009",
				"release_date": "2009-12-08",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 10749,
						"name": "Romance"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 16,
						"name": "Animation"
					}
				],
				"runtime": 97,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/yprv5PbnEksoVj2v6XEnDBg9joR.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/z62CBlBBBOoNUuuxZ1jMAcq5ARE.jpg"
			},
			{
				"id": 255392,
				"title": "The Real Inglorious Bastards",
				"description": "The truth is way stranger than fiction,” muses one interviewee in this unbelievable true account of an incredible war time saga. As the Second World War was coming to a close, the US Office of Strategic Services trained and parachuted two Jewish refugees and a German deserter deep into Nazi occupied Austria. Through vivid first-person accounts, re-enactments, archival footage and learned commentary, the film reveals how their efforts disrupted a vital supply route between Germany and the Italian front to bring about the surrender of Innsbruck to Allied Forces. Their unbelievable adventure has a finale that beats any Hollywood movie hands down — but a story so powerful that it became the basis for Quentin Tarantino’s mega hit.",
				"year": "2012",
				"release_date": "2012-11-08",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 99,
						"name": "Documentary"
					}
				],
				"runtime": 50,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/eunqs8kybaElqu2U0XzU3ARCR2r.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/3TwEeabXL7HbgaWsL0ewtPxIYoo.jpg"
			},
			{
				"id": 10501,
				"title": "The Road to El Dorado",
				"description": "After a failed swindle, two con-men end up with a map to El Dorado, the fabled \"city of gold,\" and an unintended trip to the New World.  Much to their surprise, the map does lead the pair to the mythical city, where the startled inhabitants promptly begin to worship them as gods.  The only question is, do they take the worshipful natives for all they're worth, or is there a bit more to El Dorado than riches?",
				"year": "2000",
				"release_date": "2000-03-31",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 28,
						"name": "Action"
					}
				],
				"runtime": 89,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/ryXm7xp4aqQyda0FU2eMfHehPBg.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/vHWoapGhI3thn3TyBu4qtH8W15f.jpg"
			},
			{
				"id": 11236,
				"title": "The Secret Garden",
				"description": "A young British girl born and reared in India loses her neglectful parents in an earthquake. She is returned to England to live at her uncle's castle. Her uncle is very distant due to the loss of his wife ten years before. Neglected once again, she begins exploring the estate and discovers a garden that has been locked and neglected. Aided by one of the servants' boys, she begins restoring the garden, and eventually discovers some other secrets of the manor.",
				"year": "1993",
				"release_date": "1993-08-13",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 102,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/2B8yOYHrp0AopX3gk4b7jWH3Q5a.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/gSIfujGhazIvswp4R9G6tslAqW7.jpg"
			},
			{
				"id": 37799,
				"title": "The Social Network",
				"description": "On a fall night in 2003, Harvard undergrad and computer programming genius Mark Zuckerberg sits down at his computer and heatedly begins working on a new idea. In a fury of blogging and programming, what begins in his dorm room as a small site among friends soon becomes a global social network and a revolution in communication. A mere six years and 500 million friends later, Mark Zuckerberg is the youngest billionaire in history... but for this entrepreneur, success leads to both personal and legal complications.",
				"year": "2010",
				"release_date": "2010-10-01",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 121,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/xxIc4OOQDNGmoN4cSyzNHfoSiGq.jpg"
			},
			{
				"id": 15121,
				"title": "The Sound of Music",
				"description": "A tomboyish postulant at an Austrian abbey becomes a governess in the home of a widowed naval captain with seven children, and brings a new love of life and music into the home.",
				"year": "1965",
				"release_date": "1965-03-29",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 10402,
						"name": "Music"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 175,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/5qQTu2iGTiQ2UvyGp0beQAZ2rKx.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/5D9wsIoGLbwbJ4wdvME6Gb6zJNK.jpg"
			},
			{
				"id": 1443,
				"title": "The Virgin Suicides",
				"description": "A group of male friends become obsessed with five mysterious sisters who are sheltered by their strict, religious parents.",
				"year": "1999",
				"release_date": "1999-12-31",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 97,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/tz5PVFBY3S5m6gwve09by64514a.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/6b6UpsOXmjO8mJKYsGTG9HW49CN.jpg"
			},
			{
				"id": 106646,
				"title": "The Wolf of Wall Street",
				"description": "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.",
				"year": "2013",
				"release_date": "2013-12-25",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 80,
						"name": "Crime"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 180,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/sOxr33wnRuKazR9ClHek73T8qnK.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/2DZjKCPnwBKHz5VRX46rKJ9VXnz.jpg"
			},
			{
				"id": 76170,
				"title": "The Wolverine",
				"description": "Wolverine faces his ultimate nemesis - and tests of his physical, emotional, and mortal limits - in a life-changing voyage to modern-day Japan.",
				"year": "2013",
				"release_date": "2013-07-23",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 126,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/tlCRK9Q8CXzlB7Mnx2HpKfjRI8Q.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/AqIes6H9NlRoo0YjlO7exLCu72v.jpg"
			},
			{
				"id": 10195,
				"title": "Thor",
				"description": "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.",
				"year": "2011",
				"release_date": "2011-04-21",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					},
					{
						"id": 28,
						"name": "Action"
					}
				],
				"runtime": 115,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/c5tewtijj6aixi8zwwPuYJxifBA.jpg"
			},
			{
				"id": 76338,
				"title": "Thor: The Dark World",
				"description": "Thor fights to restore order across the cosmos… but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
				"year": "2013",
				"release_date": "2013-10-29",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 112,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/uhYoytlNaq46dG81wLmHqaSuzWu.jpg"
			},
			{
				"id": 597,
				"title": "Titanic",
				"description": "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
				"year": "1997",
				"release_date": "1997-11-18",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 194,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/6VmFqApQRyZZzmiGOQq2C92jyvH.jpg"
			},
			{
				"id": 862,
				"title": "Toy Story",
				"description": "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
				"year": "1995",
				"release_date": "1995-10-30",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 81,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/lxD5ak7BOoinRNehOCA85CQ8ubr.jpg"
			},
			{
				"id": 863,
				"title": "Toy Story 2",
				"description": "Andy heads off to Cowboy Camp, leaving his toys to their own devices. Things shift into high gear when an obsessive toy collector named Al McWhiggen, owner of Al's Toy Barn kidnaps Woody. Andy's toys mount a daring rescue mission, Buzz Lightyear meets his match and Woody has to decide where he and his heart truly belong.",
				"year": "1999",
				"release_date": "1999-10-30",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10751,
						"name": "Family"
					}
				],
				"runtime": 92,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/yFWQkz2ynjwsazT6xQiIXEUsyuh.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/91qfG6VaxRsCh1SbIi1w2vxknsL.jpg"
			},
			{
				"id": 10193,
				"title": "Toy Story 3",
				"description": "Woody, Buzz, and the rest of Andy's toys haven't been played with in years. With Andy about to go to college, the gang find themselves accidentally left at a nefarious day care center. The toys must band together to escape and return home to Andy.",
				"year": "2010",
				"release_date": "2010-06-16",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 103,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/4cpGytCB0eqvRks4FAlJoUJiFPG.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/wE5JGzujfvDPMIfFjJyrhXFjZLc.jpg"
			},
			{
				"id": 157353,
				"title": "Transcendence",
				"description": "Two leading computer scientists work toward their goal of Technological Singularity,  as a radical anti-technology organization fights to prevent them from creating a world where computers can transcend the abilities of the human brain.",
				"year": "2014",
				"release_date": "2014-04-16",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 53,
						"name": "Thriller"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 9648,
						"name": "Mystery"
					}
				],
				"runtime": 119,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/i3JqPtiJWnidaif3UA2K2Eng0hp.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/pE8KFSb8OHcjmqZBNQ2X5xz4IgV.jpg"
			},
			{
				"id": 227306,
				"title": "Unbroken",
				"description": "A chronicle of the life of Louis Zamperini, an Olympic runner who was taken prisoner by Japanese forces during World War II.",
				"year": "2014",
				"release_date": "2014-12-25",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10752,
						"name": "War"
					}
				],
				"runtime": 137,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/vAlHUjHwLWMV5mg4epGR9WSIfiy.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/aEpiew7x4CKpz5uZhfLGjaQ5Mkt.jpg"
			},
			{
				"id": 14160,
				"title": "Up",
				"description": "Carl Fredricksen spent his entire life dreaming of exploring the globe and experiencing life to its fullest. But at age 78, life seems to have passed him by, until a twist of fate (and a persistent 8-year old Wilderness Explorer named Russell) gives him a new lease on life.",
				"year": "2009",
				"release_date": "2009-05-28",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 12,
						"name": "Adventure"
					}
				],
				"runtime": 96,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/6MNW96BHtwwWK74d0tLyxVZBkTs.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/cyVZKnP64VTrnRPXduFwmCZkxLi.jpg"
			},
			{
				"id": 752,
				"title": "V for Vendetta",
				"description": "In a world in which Great Britain has become a fascist state, a masked vigilante known only as “V” conducts guerrilla warfare against the oppressive British government. When V rescues a young woman from the secret police, he finds in her an ally with whom he can continue his fight to free the people of Britain.",
				"year": "2006",
				"release_date": "2006-02-23",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 53,
						"name": "Thriller"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 132,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/2ySXWBckQboalTZjhaLWRqc3gCN.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/hIZrdvAfH74H3vxrE3s40kOrS96.jpg"
			},
			{
				"id": 335983,
				"title": "Venom",
				"description": "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
				"year": "2018",
				"release_date": "2018-09-28",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 28,
						"name": "Action"
					}
				],
				"runtime": 112,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg"
			},
			{
				"id": 82654,
				"title": "Warm Bodies",
				"description": "After a zombie becomes involved with the girlfriend of one of his victims, their romance sets in motion a sequence of events that might transform the entire lifeless world.",
				"year": "2013",
				"release_date": "2013-01-31",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 27,
						"name": "Horror"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 97,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/pvVpl38YOBDOANb0pWbXFb8X3iZ.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/bDSskX0djG4K9yLDWFaFe1cFiaB.jpg"
			},
			{
				"id": 13183,
				"title": "Watchmen",
				"description": "In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a government crackdown, but after one of the masked veterans is brutally murdered, an investigation into the killer is initiated. The reunited heroes set out to prevent their own destruction, but in doing so uncover a sinister plot that puts all of humanity in grave danger.",
				"year": "2009",
				"release_date": "2009-03-05",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 9648,
						"name": "Mystery"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 163,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/aZvOkdo203bm1kpcY0A0Tn074ER.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/z0MeMoPqbXqxuQHwl48ls0N6Yme.jpg"
			},
			{
				"id": 55787,
				"title": "Water for Elephants",
				"description": "In this captivating Depression-era melodrama, impetuous veterinary student Jacob Jankowski joins a celebrated circus as an animal caretaker but faces a wrenching dilemma when he's transfixed by angelic married performer Marlena.",
				"year": "2011",
				"release_date": "2011-03-15",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 120,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/yJ8kiGDA2FDdiy8hhlM1su10OCH.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/uwj5X4gtXkimRG6LmoOcyVTK3KQ.jpg"
			},
			{
				"id": 71859,
				"title": "We Need to Talk About Kevin",
				"description": "After her son Kevin commits a horrific act, troubled mother Eva reflects on her complicated relationship with her disturbed son as he grew from a toddler into a teenager.",
				"year": "2011",
				"release_date": "2011-09-28",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					},
					{
						"id": 53,
						"name": "Thriller"
					}
				],
				"runtime": 113,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/auAmiRmbBQ5QIYGpWgcGBoBQY3b.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/pbpy2MqqArr1mfZl4PmBphC0sr6.jpg"
			},
			{
				"id": 63492,
				"title": "What's Your Number?",
				"description": "Ally Darling is realizing she's a little lost in life. Her latest romance has just fizzled out, and she's just been fired from her marketing job. Then she reads an eye-opening magazine article that warns that 96 percent of women who've been with 20 or more lovers are unlikely to find a husband. Determined to turn her life around and prove the article wrong, Ally embarks on a mission to find the perfect mate from among her numerous ex-boyfriends.",
				"year": "2011",
				"release_date": "2011-09-30",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 10749,
						"name": "Romance"
					}
				],
				"runtime": 106,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/5Y0NCDKMr0xPNzfzuhMmOfpJQxl.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/jQ2F3xs5FtFWq4LjZdBKqzfy9ZD.jpg"
			},
			{
				"id": 22798,
				"title": "Whip It",
				"description": "In Bodeen, Texas, Land Of The Dragon, an indie-rock loving misfit finds a way of dealing with her small-town misery after she discovers a roller derby league in nearby Austin.",
				"year": "2009",
				"release_date": "2009-04-09",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 18,
						"name": "Drama"
					}
				],
				"runtime": 111,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/nwPvNuxIhVNhBFdzMsMPu2Va608.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/ncxRcMvEP4tXkpYbAHgYrwznVog.jpg"
			},
			{
				"id": 297762,
				"title": "Wonder Woman",
				"description": "An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict.",
				"year": "2017",
				"release_date": "2017-05-30",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 141,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/6iUNJZymJBMXXriQyFZfLAKnjO6.jpg"
			},
			{
				"id": 82690,
				"title": "Wreck-It Ralph",
				"description": "Wreck-It Ralph is the 9-foot-tall, 643-pound villain of an arcade video game named Fix-It Felix Jr., in which the game's titular hero fixes buildings that Ralph destroys. Wanting to prove he can be a good guy and not just a villain, Ralph escapes his game and lands in Hero's Duty, a first-person shooter where he helps the game's hero battle against alien invaders. He later enters Sugar Rush, a kart racing game set on tracks made of candies, cookies and other sweets. There, Ralph meets Vanellope von Schweetz who has learned that her game is faced with a dire threat that could affect the entire arcade, and one that Ralph may have inadvertently started.",
				"year": "2012",
				"release_date": "2012-11-01",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 10751,
						"name": "Family"
					},
					{
						"id": 16,
						"name": "Animation"
					},
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 12,
						"name": "Adventure"
					}
				],
				"runtime": 101,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/j8M1kHBAXa6KFNzGnWtdsVsLUro.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/1LbX3KV6qv6NoH4zKLGM7Sgtwmg.jpg"
			},
			{
				"id": 2080,
				"title": "X-Men Origins: Wolverine",
				"description": "After seeking to live a normal life, Logan sets out to avenge the death of his girlfriend by undergoing the mutant Weapon X program and becoming Wolverine.",
				"year": "2009",
				"release_date": "2009-04-28",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 53,
						"name": "Thriller"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					}
				],
				"runtime": 107,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/mQglrQzgZT0Oj9cQYPsLI8dsEqB.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/fUoXenTsrdUcgG0sLYbOBouvtTs.jpg"
			},
			{
				"id": 246655,
				"title": "X-Men: Apocalypse",
				"description": "After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
				"year": "2016",
				"release_date": "2016-05-18",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 14,
						"name": "Fantasy"
					}
				],
				"runtime": 144,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/2mtQwJKVKQrZgTz49Dizb25eOQQ.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/2ex2beZ4ssMeOduLD0ILzXKCiep.jpg"
			},
			{
				"id": 49538,
				"title": "X-Men: First Class",
				"description": "Before Charles Xavier and Erik Lensherr took the names Professor X and Magneto, they were two young men discovering their powers for the first time. Before they were arch-enemies, they were closest of friends, working together with other mutants (some familiar, some new), to stop the greatest threat the world has ever known.",
				"year": "2011",
				"release_date": "2011-06-01",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 12,
						"name": "Adventure"
					}
				],
				"runtime": 132,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/5QId52kcNtbq6w2OS7smwTPFi2.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/7kURId6slyHNujYpCFm0Z1M3kRt.jpg"
			},
			{
				"id": 36668,
				"title": "X-Men: The Last Stand",
				"description": "When a cure is found to treat mutations, lines are drawn amongst the X-Men—led by Professor Charles Xavier—and the Brotherhood, a band of powerful mutants organised under Xavier's former ally, Magneto.",
				"year": "2006",
				"release_date": "2006-05-24",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 12,
						"name": "Adventure"
					},
					{
						"id": 28,
						"name": "Action"
					},
					{
						"id": 878,
						"name": "Science Fiction"
					},
					{
						"id": 53,
						"name": "Thriller"
					}
				],
				"runtime": 104,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/9jDzVM003nH0NfQ57qMLHxcMQYU.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/kyPqw0X24ZykglKuUTAmI3H4pNz.jpg"
			},
			{
				"id": 10201,
				"title": "Yes Man",
				"description": "Carl Allen has stumbled across a way to shake free of post-divorce blues and a dead-end job: embrace life and say yes to everything.",
				"year": "2008",
				"release_date": "2008-12-09",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					}
				],
				"runtime": 104,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/16zVbgFLTUaUTG1wQHuGjfWNuDM.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/kueBMnoZVmagMfP6ortvkOVuWtI.jpg"
			},
			{
				"id": 19908,
				"title": "Zombieland",
				"description": "Columbus has made a habit of running from what scares him. Tallahassee doesn't have fears. If he did, he'd kick their ever-living ass. In a world overrun by zombies, these two are perfectly evolved survivors. But now, they're about to stare down the most terrifying prospect of all: each other.",
				"year": "2009",
				"release_date": "2009-10-07",
				"watched": true,
				"rating": null,
				"genre": [
					{
						"id": 35,
						"name": "Comedy"
					},
					{
						"id": 27,
						"name": "Horror"
					}
				],
				"runtime": 88,
				"quality": null,
				"subtitles": null,
				"franchise": null,
				"tags": [],
				"poster": "http://image.tmdb.org/t/p/w500/dUkAmAyPVqubSBNRjRqCgHggZcK.jpg",
				"backdrop": "http://image.tmdb.org/t/p/w1280/oihWVx3imvRKujnGmSDYhfG1gI5.jpg"
			}
		]
	)
}

export {dataForDB, dataFromDB}