// Sample OTT content database
export interface OTTContent {
  id: string;
  title: string;
  imdbRating: number;
  platforms: string[];
  genres: string[];
  description: string;
  releaseYear: number;
  type: "movie" | "series";
}

export const ottDatabase: OTTContent[] = [
  {
    id: "1",
    title: "Inception",
    imdbRating: 8.8,
    platforms: ["netflix", "prime"],
    genres: ["sci-fi", "thriller", "action"],
    description: "A skilled thief who steals corporate secrets through the use of dream-sharing technology",
    releaseYear: 2010,
    type: "movie"
  },
  {
    id: "2",
    title: "The Dark Knight",
    imdbRating: 9.0,
    platforms: ["hotstar"],
    genres: ["action", "crime", "drama"],
    description: "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into anarchy",
    releaseYear: 2008,
    type: "movie"
  },
  {
    id: "3",
    title: "Breaking Bad",
    imdbRating: 9.5,
    platforms: ["netflix"],
    genres: ["drama", "crime"],
    description: "A high school chemistry teacher turns to cooking methamphetamine",
    releaseYear: 2008,
    type: "series"
  },
  {
    id: "4",
    title: "The Office",
    imdbRating: 9.0,
    platforms: ["prime", "peacock"],
    genres: ["comedy", "drama"],
    description: "A mockumentary about everyday office workers in a dull company",
    releaseYear: 2005,
    type: "series"
  },
  {
    id: "5",
    title: "Interstellar",
    imdbRating: 8.6,
    platforms: ["hotstar", "prime"],
    genres: ["sci-fi", "drama", "adventure"],
    description: "A team of astronauts travels through a wormhole in space",
    releaseYear: 2014,
    type: "movie"
  },
  {
    id: "6",
    title: "Sherlock",
    imdbRating: 9.1,
    platforms: ["netflix", "sony"],
    genres: ["crime", "drama", "mystery"],
    description: "A modern adaptation of Sherlock Holmes stories",
    releaseYear: 2010,
    type: "series"
  },
  {
    id: "7",
    title: "Avatar",
    imdbRating: 7.8,
    platforms: ["netflix", "hotstar"],
    genres: ["sci-fi", "action", "adventure"],
    description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission",
    releaseYear: 2009,
    type: "movie"
  },
  {
    id: "8",
    title: "Stranger Things",
    imdbRating: 8.7,
    platforms: ["netflix"],
    genres: ["sci-fi", "horror", "drama"],
    description: "When a young boy disappears, his friends discover secret military experiments",
    releaseYear: 2016,
    type: "series"
  },
  {
    id: "9",
    title: "The Matrix",
    imdbRating: 8.7,
    platforms: ["prime", "sony"],
    genres: ["sci-fi", "action"],
    description: "A computer programmer learns about the true nature of reality",
    releaseYear: 1999,
    type: "movie"
  },
  {
    id: "10",
    title: "Game of Thrones",
    imdbRating: 9.2,
    platforms: ["hotstar", "prime"],
    genres: ["drama", "fantasy", "adventure"],
    description: "Nine noble families fight for control of the mythical land of Westeros",
    releaseYear: 2011,
    type: "series"
  },
  {
    id: "11",
    title: "Parasite",
    imdbRating: 8.5,
    platforms: ["netflix"],
    genres: ["drama", "thriller"],
    description: "A poor family schemes to become employed by a wealthy household",
    releaseYear: 2019,
    type: "movie"
  },
  {
    id: "12",
    title: "The Crown",
    imdbRating: 8.6,
    platforms: ["netflix"],
    genres: ["biography", "drama", "history"],
    description: "The story of Queen Elizabeth II and the British Royal Family",
    releaseYear: 2016,
    type: "series"
  },
  {
    id: "13",
    title: "Oppenheimer",
    imdbRating: 8.6,
    platforms: ["prime", "apple"],
    genres: ["biography", "drama", "history"],
    description: "The story of J. Robert Oppenheimer and the development of the atomic bomb.",
    releaseYear: 2023,
    type: "movie"
  },
  {
    id: "14",
    title: "Dune: Part Two",
    imdbRating: 8.9,
    platforms: ["prime", "apple"],
    genres: ["sci-fi", "adventure", "drama"],
    description: "Paul Atreides unites with the Fremen to seek revenge against his enemies.",
    releaseYear: 2024,
    type: "movie"
  },
  {
    id: "15",
    title: "John Wick: Chapter 4",
    imdbRating: 8.1,
    platforms: ["prime"],
    genres: ["action", "thriller", "crime"],
    description: "John Wick uncovers a path to defeating the High Table.",
    releaseYear: 2023,
    type: "movie"
  },
  {
    id: "16",
    title: "Everything Everywhere All At Once",
    imdbRating: 8.2,
    platforms: ["prime"],
    genres: ["sci-fi", "comedy", "drama"],
    description: "An aging Chinese immigrant is swept up in a multiverse adventure.",
    releaseYear: 2022,
    type: "movie"
  },

  // ===================== HOLLYWOOD SERIES =====================
  {
    id: "17",
    title: "The Last of Us",
    imdbRating: 8.8,
    platforms: ["hotstar"],
    genres: ["drama", "sci-fi", "thriller"],
    description: "Survivors navigate a post-apocalyptic world ravaged by a fungal pandemic.",
    releaseYear: 2023,
    type: "series"
  },
  {
    id: "18",
    title: "Succession",
    imdbRating: 8.9,
    platforms: ["hotstar"],
    genres: ["drama"],
    description: "A powerful media family battles for control of their empire.",
    releaseYear: 2019,
    type: "series"
  },
  {
    id: "19",
    title: "Wednesday",
    imdbRating: 8.1,
    platforms: ["netflix"],
    genres: ["comedy", "mystery", "fantasy"],
    description: "Wednesday Addams navigates life at Nevermore Academy.",
    releaseYear: 2022,
    type: "series"
  },
  {
    id: "20",
    title: "House of the Dragon",
    imdbRating: 8.4,
    platforms: ["hotstar"],
    genres: ["fantasy", "drama", "adventure"],
    description: "The rise and fall of House Targaryen.",
    releaseYear: 2022,
    type: "series"
  },

  // ===================== INDIAN MOVIES =====================
  {
    id: "21",
    title: "RRR",
    imdbRating: 8.0,
    platforms: ["netflix", "hotstar"],
    genres: ["action", "drama", "history"],
    description: "Two revolutionaries fight against British colonial rule.",
    releaseYear: 2022,
    type: "movie"
  },
  {
    id: "22",
    title: "Jawan",
    imdbRating: 7.2,
    platforms: ["netflix"],
    genres: ["action", "thriller", "drama"],
    description: "A man driven by vengeance seeks justice for societal wrongs.",
    releaseYear: 2023,
    type: "movie"
  },
  {
    id: "23",
    title: "Kantara",
    imdbRating: 8.3,
    platforms: ["prime"],
    genres: ["drama", "thriller", "fantasy"],
    description: "A tale of tradition, folklore, and divine justice.",
    releaseYear: 2022,
    type: "movie"
  },

  // ===================== INDIAN SERIES =====================
  {
    id: "24",
    title: "Scam 1992",
    imdbRating: 9.3,
    platforms: ["sony"],
    genres: ["crime", "drama", "biography"],
    description: "The rise and fall of stockbroker Harshad Mehta.",
    releaseYear: 2020,
    type: "series"
  },
  {
    id: "25",
    title: "The Family Man",
    imdbRating: 8.7,
    platforms: ["prime"],
    genres: ["action", "comedy", "drama"],
    description: "A middle-class man secretly works as an intelligence officer.",
    releaseYear: 2019,
    type: "series"
  },
  {
    id: "26",
    title: "Rocket Boys",
    imdbRating: 8.9,
    platforms: ["sony"],
    genres: ["biography", "drama", "history"],
    description: "The lives of India's greatest scientists.",
    releaseYear: 2022,
    type: "series"
  },

  // ===================== KOREAN CONTENT =====================
  {
    id: "27",
    title: "Squid Game",
    imdbRating: 8.0,
    platforms: ["netflix"],
    genres: ["thriller", "drama"],
    description: "Debt-ridden players compete in deadly childhood games.",
    releaseYear: 2021,
    type: "series"
  },
  {
    id: "28",
    title: "The Glory",
    imdbRating: 8.1,
    platforms: ["netflix"],
    genres: ["drama", "thriller"],
    description: "A woman plots revenge against her childhood bullies.",
    releaseYear: 2022,
    type: "series"
  },
  {
    id: "29",
    title: "Train to Busan",
    imdbRating: 7.6,
    platforms: ["prime"],
    genres: ["horror", "thriller", "action"],
    description: "Passengers fight for survival during a zombie outbreak.",
    releaseYear: 2016,
    type: "movie"
  },

  // ===================== EUROPEAN SERIES =====================
  {
    id: "30",
    title: "Dark",
    imdbRating: 8.7,
    platforms: ["netflix"],
    genres: ["sci-fi", "thriller", "mystery"],
    description: "A time-travel mystery spanning multiple generations.",
    releaseYear: 2017,
    type: "series"
  },
  {
    id: "31",
    title: "Money Heist",
    imdbRating: 8.2,
    platforms: ["netflix"],
    genres: ["crime", "thriller"],
    description: "A criminal mastermind plans the biggest heist in history.",
    releaseYear: 2017,
    type: "series"
  },

  // ===================== ANIME =====================
  {
    id: "32",
    title: "Attack on Titan",
    imdbRating: 9.1,
    platforms: ["netflix"],
    genres: ["animation", "action", "fantasy"],
    description: "Humanity fights against man-eating giants.",
    releaseYear: 2013,
    type: "series"
  },
  {
    id: "33",
    title: "Demon Slayer",
    imdbRating: 8.7,
    platforms: ["netflix"],
    genres: ["animation", "action", "fantasy"],
    description: "A boy becomes a demon slayer after his family is slaughtered.",
    releaseYear: 2019,
    type: "series"
  },

  // ===================== DOCUMENTARIES =====================
  {
    id: "34",
    title: "Our Planet",
    imdbRating: 9.3,
    platforms: ["netflix"],
    genres: ["documentary"],
    description: "A breathtaking look at Earth’s natural beauty.",
    releaseYear: 2019,
    type: "series"
  },
   // ===================== HOLLYWOOD MOVIES =====================
  { id: "35", title: "Barbie", imdbRating: 7.0, platforms: ["prime", "apple"], genres: ["comedy", "fantasy"], description: "Barbie begins to question her perfect world.", releaseYear: 2023, type: "movie" },
  { id: "36", title: "Killers of the Flower Moon", imdbRating: 8.1, platforms: ["apple"], genres: ["crime", "drama", "history"], description: "Murders surrounding the Osage Nation in the 1920s.", releaseYear: 2023, type: "movie" },
  { id: "37", title: "Top Gun: Maverick", imdbRating: 8.3, platforms: ["prime"], genres: ["action", "drama"], description: "Maverick trains elite pilots for a dangerous mission.", releaseYear: 2022, type: "movie" },
  { id: "38", title: "No Time to Die", imdbRating: 7.3, platforms: ["prime"], genres: ["action", "thriller"], description: "James Bond comes out of retirement for one final mission.", releaseYear: 2021, type: "movie" },
  { id: "39", title: "Spider-Man: No Way Home", imdbRating: 8.2, platforms: ["prime"], genres: ["action", "fantasy"], description: "Multiverse chaos erupts when Spider-Man seeks help.", releaseYear: 2021, type: "movie" },
  // ===================== HOLLYWOOD SERIES =====================
  { id: "40", title: "The Bear", imdbRating: 8.6, platforms: ["hotstar"], genres: ["drama"], description: "A young chef returns home to run his family restaurant.", releaseYear: 2022, type: "series" },
  { id: "41", title: "Reacher", imdbRating: 8.1, platforms: ["prime"], genres: ["action", "crime"], description: "A former military police officer fights injustice.", releaseYear: 2022, type: "series" },
  { id: "42", title: "Severance", imdbRating: 8.7, platforms: ["apple"], genres: ["sci-fi", "thriller"], description: "Employees split work and personal memories.", releaseYear: 2022, type: "series" },
  { id: "43", title: "True Detective: Night Country", imdbRating: 7.8, platforms: ["hotstar"], genres: ["crime", "mystery"], description: "A chilling murder mystery in Alaska.", releaseYear: 2024, type: "series" },

  // ===================== INDIAN MOVIES =====================
  { id: "44", title: "12th Fail", imdbRating: 9.0, platforms: ["hotstar"], genres: ["biography", "drama"], description: "An inspiring UPSC aspirant’s journey.", releaseYear: 2023, type: "movie" },
  { id: "45", title: "Vikram", imdbRating: 8.4, platforms: ["hotstar"], genres: ["action", "thriller"], description: "A covert mission uncovers a drug syndicate.", releaseYear: 2022, type: "movie" },
  { id: "46", title: "Drishyam 2", imdbRating: 8.2, platforms: ["prime"], genres: ["crime", "thriller"], description: "A father protects his family from law enforcement.", releaseYear: 2022, type: "movie" },

  // ===================== INDIAN SERIES =====================
  { id: "47", title: "Paatal Lok", imdbRating: 8.5, platforms: ["prime"], genres: ["crime", "thriller"], description: "A cop investigates a shocking assassination attempt.", releaseYear: 2020, type: "series" },
  { id: "48", title: "Aspirants", imdbRating: 9.2, platforms: ["sony"], genres: ["drama"], description: "Life of UPSC aspirants in Delhi.", releaseYear: 2021, type: "series" },
  { id: "49", title: "Farzi", imdbRating: 8.4, platforms: ["prime"], genres: ["crime", "thriller"], description: "A man enters the counterfeit currency world.", releaseYear: 2023, type: "series" },

  // ===================== KOREAN =====================
  { id: "50", title: "Crash Landing on You", imdbRating: 8.7, platforms: ["netflix"], genres: ["romance", "drama"], description: "A South Korean heiress lands in North Korea.", releaseYear: 2019, type: "series" },
  { id: "51", title: "All of Us Are Dead", imdbRating: 7.6, platforms: ["netflix"], genres: ["horror", "thriller"], description: "Students trapped in a zombie outbreak.", releaseYear: 2022, type: "series" },

  // ===================== EUROPEAN =====================
  { id: "52", title: "Lupin", imdbRating: 7.5, platforms: ["netflix"], genres: ["crime", "mystery"], description: "A gentleman thief seeks revenge.", releaseYear: 2021, type: "series" },
  { id: "53", title: "Berlin", imdbRating: 7.1, platforms: ["netflix"], genres: ["crime", "drama"], description: "Berlin’s past before Money Heist.", releaseYear: 2023, type: "series" },

  // ===================== ANIME =====================
  { id: "54", title: "One Piece (Live Action)", imdbRating: 8.4, platforms: ["netflix"], genres: ["adventure", "fantasy"], description: "Pirates search for the legendary treasure.", releaseYear: 2023, type: "series" },
  { id: "55", title: "Jujutsu Kaisen", imdbRating: 8.6, platforms: ["netflix"], genres: ["animation", "action"], description: "Students battle cursed spirits.", releaseYear: 2020, type: "series" },

  // ===================== DOCUMENTARY =====================
  { id: "56", title: "Beckham", imdbRating: 8.1, platforms: ["netflix"], genres: ["documentary", "biography"], description: "The life and career of David Beckham.", releaseYear: 2023, type: "series" },

  // ===================== GLOBAL POPULAR =====================
  { id: "57", title: "Narcos", imdbRating: 8.8, platforms: ["netflix"], genres: ["crime", "drama"], description: "Rise of Pablo Escobar.", releaseYear: 2015, type: "series" },
  { id: "58", title: "Peaky Blinders", imdbRating: 8.8, platforms: ["netflix"], genres: ["crime", "drama"], description: "A gangster family in post-war England.", releaseYear: 2019, type: "series" },
  { id: "59", title: "The Witcher", imdbRating: 8.0, platforms: ["netflix"], genres: ["fantasy", "action"], description: "A monster hunter navigates destiny.", releaseYear: 2019, type: "series" },
  { id: "60", title: "Foundation", imdbRating: 7.7, platforms: ["apple"], genres: ["sci-fi", "drama"], description: "A galactic empire faces collapse.", releaseYear: 2021, type: "series" },
  {
  id: "61",
  title: "Mission: Impossible – Dead Reckoning Part One",
  imdbRating: 7.8,
  platforms: ["prime", "apple"],
  genres: ["action", "thriller"],
  description: "Ethan Hunt faces a powerful AI threat.",
  releaseYear: 2023,
  type: "movie"
},
{
  id: "62",
  title: "The Batman",
  imdbRating: 7.9,
  platforms: ["prime"],
  genres: ["crime", "drama", "action"],
  description: "Batman uncovers corruption in Gotham City.",
  releaseYear: 2022,
  type: "movie"
},
{
  id: "63",
  title: "Extraction 2",
  imdbRating: 7.1,
  platforms: ["netflix"],
  genres: ["action", "thriller"],
  description: "A mercenary returns for another deadly rescue mission.",
  releaseYear: 2023,
  type: "movie"
},
{
  id: "64",
  title: "The Gray Man",
  imdbRating: 6.5,
  platforms: ["netflix"],
  genres: ["action", "thriller"],
  description: "A CIA operative becomes a target of assassins.",
  releaseYear: 2022,
  type: "movie"
},
{
  id: "65",
  title: "Bullet Train",
  imdbRating: 7.3,
  platforms: ["netflix"],
  genres: ["action", "comedy", "thriller"],
  description: "Assassins clash aboard a high-speed train.",
  releaseYear: 2022,
  type: "movie"
},
{
  id: "66",
  title: "The Menu",
  imdbRating: 7.2,
  platforms: ["prime"],
  genres: ["thriller", "horror"],
  description: "Guests experience a shocking dining event.",
  releaseYear: 2022,
  type: "movie"
},
{
  id: "67",
  title: "Glass Onion",
  imdbRating: 7.1,
  platforms: ["netflix"],
  genres: ["mystery", "crime", "comedy"],
  description: "Detective Benoit Blanc solves another murder.",
  releaseYear: 2022,
  type: "movie"
},
{
  id: "68",
  title: "Tenet",
  imdbRating: 7.3,
  platforms: ["prime"],
  genres: ["sci-fi", "action", "thriller"],
  description: "A secret agent manipulates time to prevent disaster.",
  releaseYear: 2020,
  type: "movie"
},
{
  id: "69",
  title: "Black Panther: Wakanda Forever",
  imdbRating: 6.9,
  platforms: ["disney+"],
  genres: ["action", "adventure", "drama"],
  description: "Wakanda faces global challenges after a loss.",
  releaseYear: 2022,
  type: "movie"
},
{
  id: "70",
  title: "Doctor Strange in the Multiverse of Madness",
  imdbRating: 6.8,
  platforms: ["disney+"],
  genres: ["fantasy", "action", "horror"],
  description: "Doctor Strange navigates chaotic multiverses.",
  releaseYear: 2022,
  type: "movie"
},
{
  id: "71",
  title: "Andor",
  imdbRating: 8.4,
  platforms: ["disney+"],
  genres: ["sci-fi", "drama"],
  description: "The rise of rebellion in the Star Wars universe.",
  releaseYear: 2022,
  type: "series"
},
{
  id: "72",
  title: "Loki",
  imdbRating: 8.2,
  platforms: ["disney+"],
  genres: ["fantasy", "sci-fi"],
  description: "Loki alters timelines after escaping custody.",
  releaseYear: 2021,
  type: "series"
},
{
  id: "73",
  title: "The Mandalorian",
  imdbRating: 8.7,
  platforms: ["disney+"],
  genres: ["sci-fi", "adventure"],
  description: "A bounty hunter protects a mysterious child.",
  releaseYear: 2019,
  type: "series"
},
{
  id: "74",
  title: "Blue Eye Samurai",
  imdbRating: 8.8,
  platforms: ["netflix"],
  genres: ["animation", "action", "drama"],
  description: "A warrior seeks revenge in feudal Japan.",
  releaseYear: 2023,
  type: "series"
},
{
  id: "75",
  title: "Arcane",
  imdbRating: 9.0,
  platforms: ["netflix"],
  genres: ["animation", "fantasy", "drama"],
  description: "Two sisters fight on opposing sides of a war.",
  releaseYear: 2021,
  type: "series"
},
{
  id: "76",
  title: "The Boys",
  imdbRating: 8.7,
  platforms: ["prime"],
  genres: ["action", "crime", "comedy"],
  description: "Corrupt superheroes are taken down by vigilantes.",
  releaseYear: 2019,
  type: "series"
},
{
  id: "77",
  title: "Invincible",
  imdbRating: 8.7,
  platforms: ["prime"],
  genres: ["animation", "action"],
  description: "A teenager discovers his superhero legacy.",
  releaseYear: 2021,
  type: "series"
},
{
  id: "78",
  title: "Jack Ryan",
  imdbRating: 8.0,
  platforms: ["prime"],
  genres: ["action", "thriller"],
  description: "A CIA analyst uncovers global threats.",
  releaseYear: 2019,
  type: "series"
},
{
  id: "79",
  title: "Made in Heaven",
  imdbRating: 8.3,
  platforms: ["prime"],
  genres: ["drama"],
  description: "Wedding planners navigate secrets and scandals.",
  releaseYear: 2019,
  type: "series"
},
{
  id: "80",
  title: "Delhi Crime",
  imdbRating: 8.5,
  platforms: ["netflix"],
  genres: ["crime", "drama"],
  description: "Police investigate real-life crimes in Delhi.",
  releaseYear: 2019,
  type: "series"
},
{
  id: "81",
  title: "Kohrra",
  imdbRating: 7.8,
  platforms: ["netflix"],
  genres: ["crime", "thriller"],
  description: "A murder mystery in rural Punjab.",
  releaseYear: 2023,
  type: "series"
},
{
  id: "82",
  title: "Sacred Games",
  imdbRating: 8.6,
  platforms: ["netflix"],
  genres: ["crime", "thriller"],
  description: "A cop races to stop a looming catastrophe.",
  releaseYear: 2018,
  type: "series"
},
{
  id: "71",
  title: "Kingdom",
  imdbRating: 8.4,
  platforms: ["netflix"],
  genres: ["horror", "drama", "thriller"],
  description: "A zombie outbreak in medieval Korea.",
  releaseYear: 2019,
  type: "series"
},
{
  id: "72",
  title: "My Name",
  imdbRating: 7.8,
  platforms: ["netflix"],
  genres: ["action", "crime"],
  description: "A woman infiltrates a crime syndicate for revenge.",
  releaseYear: 2021,
  type: "series"
},
{
  id: "73",
  title: "1899",
  imdbRating: 7.4,
  platforms: ["netflix"],
  genres: ["mystery", "sci-fi"],
  description: "Migrants uncover a terrifying secret at sea.",
  releaseYear: 2022,
  type: "series"
},
{
  id: "74",
  title: "The Night Agent",
  imdbRating: 7.6,
  platforms: ["netflix"],
  genres: ["thriller", "action"],
  description: "A low-level agent uncovers a conspiracy.",
  releaseYear: 2023,
  type: "series"
},
{
  id: "75",
  title: "Silo",
  imdbRating: 8.1,
  platforms: ["apple"],
  genres: ["sci-fi", "thriller"],
  description: "Humans survive underground in a dystopian future.",
  releaseYear: 2023,
  type: "series"
},
{
  id: "76",
  title: "Ted Lasso",
  imdbRating: 8.8,
  platforms: ["apple"],
  genres: ["comedy", "drama"],
  description: "An American coach manages a UK football club.",
  releaseYear: 2020,
  type: "series"
},
{
  id: "77",
  title: "Slow Horses",
  imdbRating: 8.3,
  platforms: ["apple"],
  genres: ["crime", "thriller"],
  description: "MI5 rejects handle dangerous missions.",
  releaseYear: 2022,
  type: "series"
},
{
  id: "78",
  title: "The Continental",
  imdbRating: 7.5,
  platforms: ["prime"],
  genres: ["action", "crime"],
  description: "Origins of the John Wick underworld.",
  releaseYear: 2023,
  type: "series"
},
{
  id: "79",
  title: "Poker Face",
  imdbRating: 7.9,
  platforms: ["peacock"],
  genres: ["mystery", "crime"],
  description: "A woman can detect lies and solves crimes.",
  releaseYear: 2023,
  type: "series"
},
{
  id: "80",
  title: "Chernobyl",
  imdbRating: 9.4,
  platforms: ["hotstar"],
  genres: ["history", "drama"],
  description: "The true story of the Chernobyl disaster.",
  releaseYear: 2019,
  type: "series"
},
{
  id: "81",
  title: "Band of Brothers",
  imdbRating: 9.4,
  platforms: ["hotstar"],
  genres: ["history", "drama", "war"],
  description: "WWII soldiers experience the horrors of war.",
  releaseYear: 2001,
  type: "series"
},
{
  id: "82",
  title: "Planet Earth II",
  imdbRating: 9.5,
  platforms: ["netflix"],
  genres: ["documentary"],
  description: "Stunning exploration of Earth's ecosystems.",
  releaseYear: 2016,
  type: "series"
},
{
  id: "83",
  title: "Free Solo",
  imdbRating: 8.2,
  platforms: ["disney+"],
  genres: ["documentary"],
  description: "A climber attempts a deadly free solo ascent.",
  releaseYear: 2018,
  type: "movie"
},
{
  id: "84",
  title: "The Social Dilemma",
  imdbRating: 7.6,
  platforms: ["netflix"],
  genres: ["documentary"],
  description: "The dangers of social media exposed.",
  releaseYear: 2020,
  type: "movie"
},
{
  id: "85",
  title: "Inside Job",
  imdbRating: 8.2,
  platforms: ["netflix"],
  genres: ["documentary"],
  description: "The global financial crisis explained.",
  releaseYear: 2010,
  type: "movie"
},
{
  id: "86",
  title: "Your Name",
  imdbRating: 8.4,
  platforms: ["netflix"],
  genres: ["animation", "romance", "fantasy"],
  description: "Two strangers connect across time.",
  releaseYear: 2016,
  type: "movie"
},
{
  id: "87",
  title: "Suzume",
  imdbRating: 7.8,
  platforms: ["netflix"],
  genres: ["animation", "fantasy"],
  description: "A girl closes supernatural doors across Japan.",
  releaseYear: 2022,
  type: "movie"
},
{
  id: "88",
  title: "Spirited Away",
  imdbRating: 8.6,
  platforms: ["netflix"],
  genres: ["animation", "fantasy"],
  description: "A girl enters a magical spirit world.",
  releaseYear: 2001,
  type: "movie"
},
{
  id: "89",
  title: "Black Mirror",
  imdbRating: 8.8,
  platforms: ["netflix"],
  genres: ["sci-fi", "thriller"],
  description: "Dark tales of technology and society.",
  releaseYear: 2019,
  type: "series"
},
{
  id: "90",
  title: "Love, Death & Robots",
  imdbRating: 8.4,
  platforms: ["netflix"],
  genres: ["animation", "sci-fi"],
  description: "Animated sci-fi short stories.",
  releaseYear: 2019,
  type: "series"
},
{
  id: "91",
  title: "Naruto Shippuden",
  imdbRating: 8.7,
  platforms: ["netflix"],
  genres: ["animation", "action"],
  description: "A ninja fights to protect his village.",
  releaseYear: 2007,
  type: "series"
},
{
  id: "92",
  title: "Bleach: Thousand-Year Blood War",
  imdbRating: 9.0,
  platforms: ["netflix"],
  genres: ["animation", "action"],
  description: "Soul Reapers face their ultimate enemy.",
  releaseYear: 2022,
  type: "series"
},
{
  id: "93",
  title: "One Punch Man",
  imdbRating: 8.7,
  platforms: ["netflix"],
  genres: ["animation", "action", "comedy"],
  description: "A hero defeats enemies with one punch.",
  releaseYear: 2019,
  type: "series"
},
{
  id: "94",
  title: "Cyberpunk: Edgerunners",
  imdbRating: 8.4,
  platforms: ["netflix"],
  genres: ["animation", "sci-fi"],
  description: "A street kid survives a dystopian future.",
  releaseYear: 2022,
  type: "series"
},
{
  id: "95",
  title: "Vinland Saga",
  imdbRating: 8.8,
  platforms: ["netflix"],
  genres: ["animation", "history", "drama"],
  description: "A Viking seeks revenge and meaning.",
  releaseYear: 2019,
  type: "series"
},
{
  id: "96",
  title: "Tokyo Vice",
  imdbRating: 8.0,
  platforms: ["hotstar"],
  genres: ["crime", "drama"],
  description: "A journalist explores Tokyo's underworld.",
  releaseYear: 2022,
  type: "series"
},
{
  id: "97",
  title: "The Night Manager",
  imdbRating: 8.6,
  platforms: ["hotstar"],
  genres: ["thriller", "crime"],
  description: "An ex-soldier infiltrates an arms dealer’s circle.",
  releaseYear: 2016,
  type: "series"
},
{
  id: "98",
  title: "Bodyguard",
  imdbRating: 8.1,
  platforms: ["netflix"],
  genres: ["thriller", "crime"],
  description: "A war veteran protects a politician.",
  releaseYear: 2018,
  type: "series"
},
{
  id: "99",
  title: "Ozark",
  imdbRating: 8.5,
  platforms: ["netflix"],
  genres: ["crime", "drama"],
  description: "A family launders money for a cartel.",
  releaseYear: 2019,
  type: "series"
},
{
  id: "100",
  title: "Mindhunter",
  imdbRating: 8.6,
  platforms: ["netflix"],
  genres: ["crime", "thriller"],
  description: "FBI agents study serial killers.",
  releaseYear: 2019,
  type: "series"
},
{
  id: "101",
  title: "The Queen's Gambit",
  imdbRating: 8.6,
  platforms: ["netflix"],
  genres: ["drama"],
  description: "A chess prodigy battles addiction and fame.",
  releaseYear: 2020,
  type: "series"
},
{
  id: "102",
  title: "The Umbrella Academy",
  imdbRating: 7.9,
  platforms: ["netflix"],
  genres: ["fantasy", "action"],
  description: "Dysfunctional superheroes prevent apocalypse.",
  releaseYear: 2019,
  type: "series"
},
{
  id: "103",
  title: "Euphoria",
  imdbRating: 8.4,
  platforms: ["hotstar"],
  genres: ["drama"],
  description: "Teenagers struggle with identity and addiction.",
  releaseYear: 2019,
  type: "series"
},
{
  id: "104",
  title: "The White Lotus",
  imdbRating: 8.0,
  platforms: ["hotstar"],
  genres: ["drama", "comedy"],
  description: "Dark secrets unfold at a luxury resort.",
  releaseYear: 2021,
  type: "series"
},
{
  id: "105",
  title: "Fargo",
  imdbRating: 8.9,
  platforms: ["prime"],
  genres: ["crime", "drama"],
  description: "Crime stories inspired by true events.",
  releaseYear: 2020,
  type: "series"
},
{
  id: "106",
  title: "Westworld",
  imdbRating: 8.5,
  platforms: ["hotstar"],
  genres: ["sci-fi", "drama"],
  description: "AI hosts rebel in a futuristic theme park.",
  releaseYear: 2019,
  type: "series"
},
{
  id: "107",
  title: "The Handmaid's Tale",
  imdbRating: 8.4,
  platforms: ["prime"],
  genres: ["drama", "thriller"],
  description: "Women fight oppression in a dystopian society.",
  releaseYear: 2019,
  type: "series"
},
{
  id: "108",
  title: "The Expanse",
  imdbRating: 8.5,
  platforms: ["prime"],
  genres: ["sci-fi", "drama"],
  description: "Humanity colonizes the solar system.",
  releaseYear: 2021,
  type: "series"
},
{
  id: "109",
  title: "Snowpiercer",
  imdbRating: 7.4,
  platforms: ["netflix"],
  genres: ["sci-fi", "thriller"],
  description: "Survivors live aboard a frozen train.",
  releaseYear: 2020,
  type: "series"
},
{
  id: "110",
  title: "The Peripheral",
  imdbRating: 7.6,
  platforms: ["prime"],
  genres: ["sci-fi", "thriller"],
  description: "A woman discovers a dangerous future.",
  releaseYear: 2022,
  type: "series"
},
{
  id: "111",
  title: "Foundation",
  imdbRating: 7.7,
  platforms: ["apple"],
  genres: ["sci-fi", "drama"],
  description: "A galactic empire faces inevitable collapse.",
  releaseYear: 2021,
  type: "series"
},
{
  id: "112",
  title: "Hijack",
  imdbRating: 7.9,
  platforms: ["apple"],
  genres: ["thriller", "drama"],
  description: "A hijacked plane triggers global tension.",
  releaseYear: 2023,
  type: "series"
},
{
  id: "113",
  title: "The Diplomat",
  imdbRating: 8.0,
  platforms: ["netflix"],
  genres: ["drama", "thriller"],
  description: "A diplomat navigates international crises.",
  releaseYear: 2023,
  type: "series"
},
{
  id: "114",
  title: "Reptile",
  imdbRating: 6.9,
  platforms: ["netflix"],
  genres: ["crime", "thriller"],
  description: "A detective uncovers corruption in a murder case.",
  releaseYear: 2023,
  type: "movie"
},
{
  id: "115",
  title: "Saltburn",
  imdbRating: 7.0,
  platforms: ["prime"],
  genres: ["thriller", "drama"],
  description: "A disturbing tale of obsession and privilege.",
  releaseYear: 2023,
  type: "movie"
},
{
  id: "116",
  title: "Poor Things",
  imdbRating: 8.1,
  platforms: ["prime", "apple"],
  genres: ["fantasy", "drama"],
  description: "A woman is reborn through scientific experimentation.",
  releaseYear: 2023,
  type: "movie"
},
{
  id: "117",
  title: "Past Lives",
  imdbRating: 8.0,
  platforms: ["prime"],
  genres: ["romance", "drama"],
  description: "Two childhood friends reconnect after decades.",
  releaseYear: 2023,
  type: "movie"
},
{
  id: "118",
  title: "The Creator",
  imdbRating: 7.2,
  platforms: ["prime"],
  genres: ["sci-fi", "action"],
  description: "A war erupts between humans and AI.",
  releaseYear: 2023,
  type: "movie"
},
{
  id: "119",
  title: "Anatomy of a Fall",
  imdbRating: 8.2,
  platforms: ["prime"],
  genres: ["crime", "drama"],
  description: "A woman is tried for her husband's death.",
  releaseYear: 2023,
  type: "movie"
},
{
  id: "120",
  title: "Maestro",
  imdbRating: 7.7,
  platforms: ["netflix"],
  genres: ["biography", "drama"],
  description: "Leonard Bernstein’s life and love story.",
  releaseYear: 2023,
  type: "movie"
},
{
  id: "121",
  title: "The Iron Claw",
  imdbRating: 7.9,
  platforms: ["prime"],
  genres: ["biography", "drama"],
  description: "The tragic story of a wrestling dynasty.",
  releaseYear: 2023,
  type: "movie"
},
{
  id: "122",
  title: "Godzilla Minus One",
  imdbRating: 8.4,
  platforms: ["netflix"],
  genres: ["action", "sci-fi"],
  description: "Post-war Japan faces a devastating monster.",
  releaseYear: 2023,
  type: "movie"
},
{
  id: "123",
  title: "Shōgun",
  imdbRating: 9.0,
  platforms: ["hotstar"],
  genres: ["history", "drama"],
  description: "A foreign sailor navigates feudal Japan politics.",
  releaseYear: 2024,
  type: "series"
}
];

export const availablePlatforms = [
  "netflix",
  "prime",
  "hotstar",
  "sony",
  "peacock",
  "apple",
  "hulu",
  "disney+",
  "zee5",
  "jiocinema"
];

export const availableGenres = [
  "action",
  "comedy",
  "drama",
  "sci-fi",
  "thriller",
  "horror",
  "romance",
  "adventure",
  "crime",
  "mystery",
  "fantasy",
  "history",
  "biography",
  "animation",
  "documentary"
];
