

const dutch_topics = ["Clothes","Colours","Food","Family","Numbers"]

const dutch = [
{topic: "Food", englishWord: "potato", foreignWord: ["aardappel"], foreignAudio: ""},
{topic: "Food", englishWord: "bread", foreignWord: ["brood"], foreignAudio: ""},
{topic: "Food", englishWord: "meat", foreignWord: ["vlees"], foreignAudio: ""},
{topic: "Food", englishWord: "egg", foreignWord: ["ei"], foreignAudio: ""},
{topic: "Food", englishWord: "strawberry", foreignWord: ["aardbei"], foreignAudio: ""},
{topic: "Food", englishWord: "garlic", foreignWord: ["knoflook"], foreignAudio: ""},
{topic: "Food", englishWord: "butter", foreignWord: ["boter"], foreignAudio: ""},
{topic: "Food", englishWord: "fish", foreignWord: ["vis"], foreignAudio: ""},
{topic: "Food", englishWord: "chicken", foreignWord: ["kip"], foreignAudio: ""},
{topic: "Food", englishWord: "cheese", foreignWord: ["kaas"], foreignAudio: ""}, 
{topic: "Food", englishWord: "pineapple", foreignWord: ["ananas"], foreignAudio: ""},
{topic: "Food", englishWord: "onion", foreignWord: ["ui"], foreignAudio: ""},
{topic: "Food", englishWord: "salt", foreignWord: ["zout"], foreignAudio: ""},
{topic: "Food", englishWord: "oil", foreignWord: ["olie"], foreignAudio: ""},
{topic: "Food", englishWord: "pork", foreignWord: ["varkens vlees"], foreignAudio: ""},
{topic: "Food", englishWord: "raspberry", foreignWord: ["framboos"], foreignAudio: ""},
{topic: "Food", englishWord: "cake", foreignWord: ["taart"], foreignAudio: ""},
{topic: "Food", englishWord: "milk", foreignWord: ["melk"], foreignAudio: ""},
{topic: "Food", englishWord: "rice", foreignWord: ["rijst"], foreignAudio: ""},
{topic: "Food", englishWord: "bell plant", foreignWord: ["paprika"], foreignAudio: ""}, 
{topic: "Food", englishWord: "lettuce", foreignWord: ["aardappel"], foreignAudio: ""},
{topic: "Food", englishWord: "beans", foreignWord: ["bonen"], foreignAudio: ""},
{topic: "Food", englishWord: "bacon", foreignWord: ["spek"], foreignAudio: ""},
{topic: "Food", englishWord: "cookie", foreignWord: ["koek"], foreignAudio: ""},
{topic: "Food", englishWord: "ginger", foreignWord: ["gember"], foreignAudio: ""},
{topic: "Food", englishWord: "honey", foreignWord: ["honing"], foreignAudio: ""},
{topic: "Food", englishWord: "pancakes", foreignWord: ["pannekoeken"], foreignAudio: ""},
{topic: "Food", englishWord: "spinach", foreignWord: ["spinazie"], foreignAudio: ""},
{topic: "Clothes", englishWord: "trousers", foreignWord: ["broek"], foreignAudio: ""},
{topic: "Clothes", englishWord: "sweater", foreignWord: ["trui"], foreignAudio: ""},
{topic: "Clothes", englishWord: "underwear", foreignWord: ["onderbroek"], foreignAudio: ""},
{topic: "Clothes", englishWord: "tie", foreignWord: ["stropdas"], foreignAudio: ""},
{topic: "Clothes", englishWord: "socks", foreignWord: ["sokken"], foreignAudio: ""},
{topic: "Clothes", englishWord: "shoes", foreignWord: ["schoenen"], foreignAudio: ""},
{topic: "Clothes", englishWord: "skirt", foreignWord: ["rok"], foreignAudio: ""},
{topic: "Clothes", englishWord: "jacket", foreignWord: ["jas"], foreignAudio: ""},
{topic: "Clothes", englishWord: "hat", foreignWord: ["pet"], foreignAudio: ""},
{topic: "Clothes", englishWord: "scarf", foreignWord: ["sjaal"], foreignAudio: ""},
{topic: "Colours", englishWord: "red", foreignWord: ["rood"], foreignAudio: ""},
{topic: "Colours", englishWord: "blue", foreignWord: ["blauw"], foreignAudio: ""},
{topic: "Colours", englishWord: "green", foreignWord: ["groen"], foreignAudio: ""},
{topic: "Colours", englishWord: "orange", foreignWord: ["oranje"], foreignAudio: ""},
{topic: "Colours", englishWord: "brown", foreignWord: ["bruin"], foreignAudio: ""},
{topic: "Colours", englishWord: "grey", foreignWord: ["grijs"], foreignAudio: ""},
{topic: "Colours", englishWord: "white", foreignWord: ["wit"], foreignAudio: ""},
{topic: "Colours", englishWord: "black", foreignWord: ["zwart"], foreignAudio: ""},
{topic: "Colours", englishWord: "purple", foreignWord: ["paars"], foreignAudio: ""},
{topic: "Colours", englishWord: "pink", foreignWord: ["rose"], foreignAudio: ""},
{topic: "Numbers", englishWord: "one", foreignWord: ["een"], foreignAudio: ""},
{topic: "Numbers", englishWord: "two ", foreignWord: ["twee"], foreignAudio: ""},
{topic: "Numbers", englishWord: "three", foreignWord: ["drie"], foreignAudio: ""},
{topic: "Numbers", englishWord: "four", foreignWord: ["vier"], foreignAudio: ""},
{topic: "Numbers", englishWord: "five", foreignWord: ["vijf"], foreignAudio: ""},
{topic: "Numbers", englishWord: "six", foreignWord: ["zes"], foreignAudio: ""},
{topic: "Numbers", englishWord: "seven", foreignWord: ["zeven"], foreignAudio: ""},
{topic: "Numbers", englishWord: "eight", foreignWord: ["acht"], foreignAudio: ""},
{topic: "Numbers", englishWord: "nine", foreignWord: ["negen"], foreignAudio: ""},
{topic: "Numbers", englishWord: "ten", foreignWord: ["tien"], foreignAudio: ""},
{topic: "Family", englishWord: "brother", foreignWord: ["broer"], foreignAudio: ""},
{topic: "Family", englishWord: "sister ", foreignWord: ["zus"], foreignAudio: ""},
{topic: "Family", englishWord: "mother", foreignWord: ["moeder"], foreignAudio: ""},
{topic: "Family", englishWord: "father", foreignWord: ["vader"], foreignAudio: ""},
{topic: "Family", englishWord: "son", foreignWord: ["zoon"], foreignAudio: ""},
{topic: "Family", englishWord: "daughter", foreignWord: ["dochter"], foreignAudio: ""},
{topic: "Family", englishWord: "aunt", foreignWord: ["tante"], foreignAudio: ""},
{topic: "Family", englishWord: "uncle", foreignWord: ["oom"], foreignAudio: ""},
{topic: "Family", englishWord: "grandfather", foreignWord: ["opa"], foreignAudio: ""},
{topic: "Family", englishWord: "grandmother", foreignWord: ["oma"], foreignAudio: ""},
{topic: "Family", englishWord: "cousin (m)", foreignWord: ["neef"], foreignAudio: ""},
{topic: "Family", englishWord: "cousin (f)", foreignWord: ["nicht"], foreignAudio: ""},
{topic: "Family", englishWord: "niece", foreignWord: ["nicht"], foreignAudio: ""},
{topic: "Family", englishWord: "nephew", foreignWord: ["neef"], foreignAudio: ""}
]

const arabic_topics = ["Clothes","Colours","Food","Numbers"]

const arabic = [
{topic: "Clothes", englishWord: "trousers", foreignWord: ["banṭalūn", "بَنْطَلُون"], foreignAudio: ""},
{topic: "Clothes", englishWord: "dress", foreignWord: ["fustān", "فُسْتَان"], foreignAudio: ""},
{topic: "Clothes", englishWord: "robe", foreignWord: ["thawb", "ثَوْب"], foreignAudio: ""},
{topic: "Clothes", englishWord: "suit", foreignWord: ["badhlah", "بَذْلَة"], foreignAudio: ""},
{topic: "Clothes", englishWord: "sock", foreignWord: ["jārib", "حِذَاء"], foreignAudio: ""},
{topic: "Clothes", englishWord: "shoes", foreignWord: ["ḥidhā`", "حِذَاء"], foreignAudio: ""},
{topic: "Clothes", englishWord: "belt", foreignWord: ["ḥizām", "حِزَام"], foreignAudio: ""},
{topic: "Clothes", englishWord: "coat", foreignWord: ["mi'ṭaf", "مِعْطَف"], foreignAudio: ""},
{topic: "Clothes", englishWord: "cap", foreignWord: ["qubba'ah", "قُبَّعَة"], foreignAudio: ""},
{topic: "Clothes", englishWord: "shirt", foreignWord: ["qamīṣ", "قَمِيص"], foreignAudio: ""},
{topic: "Food", englishWord: "potato", foreignWord: ["batatis", "بَطَاطِس"], foreignAudio: ""},
{topic: "Food", englishWord: "bread", foreignWord: ["khubz", "خُبْز"], foreignAudio: ""},
{topic: "Food", englishWord: "meat", foreignWord: ["laḥm", "لَحْم"], foreignAudio: ""},
{topic: "Food", englishWord: "egg", foreignWord: ["bayḍah", "بَيْضَة"], foreignAudio: ""},
{topic: "Food", englishWord: "strawberry", foreignWord: ["farāwilah", "فَراوِلَة"], foreignAudio: ""},
{topic: "Food", englishWord: "garlic", foreignWord: ["thawm", "ثَوْم"], foreignAudio: ""},
{topic: "Food", englishWord: "apricot", foreignWord: ["mishmish", "مِشْمِش"], foreignAudio: ""},
{topic: "Food", englishWord: "zucchini", foreignWord: ["kūsah", "كوسَة"], foreignAudio: ""},
{topic: "Food", englishWord: "eggplant", foreignWord: ["bādhinjān", "باذِنْجان"], foreignAudio: ""},
{topic: "Food", englishWord: "cheese", foreignWord: ["jubnah", "جُبْنَة"], foreignAudio: ""},
{topic: "Colours", englishWord: "yellow", foreignWord: ["asfar", "أَصْفَر"], foreignAudio: arabic_yellow},
{topic: "Colours", englishWord: "blue", foreignWord: ["azraq", "أَزْرَق"], foreignAudio: arabic_blue},
{topic: "Colours", englishWord: "grey", foreignWord: ["ramādiyy", "رَمَادِيّ"], foreignAudio: arabic_grey},
{topic: "Colours", englishWord: "green", foreignWord: ["akhḍar", "أَخْضَر"], foreignAudio: arabic_green},
{topic: "Colours", englishWord: "purple", foreignWord: ["banafsajiyy", "بَنَفْسَجِيّ"], foreignAudio: arabic_purple},
{topic: "Colours", englishWord: "pink", foreignWord: ["wardiyy", "وَرْدِيّ"], foreignAudio: arabic_pink},
{topic: "Colours", englishWord: "black", foreignWord: ["aswad", "أَسْوَد"], foreignAudio: arabic_black},
{topic: "Colours", englishWord: "orange", foreignWord: ["burtuqāliyy", "بُرْتُقَاْلِيّ"], foreignAudio: arabic_orange},
{topic: "Colours", englishWord: "red", foreignWord: ["aḥmar", "أَحْمَر"], foreignAudio: arabic_red},
{topic: "Numbers", englishWord: "one", foreignWord: ["waheed", "وَاحِد"], foreignAudio: ""},
{topic: "Numbers", englishWord: "two", foreignWord: ["ithnain", "اِثْنَان"], foreignAudio: ""},
{topic: "Numbers", englishWord: "three", foreignWord: ["thalāthah", "ثَلَاثَة"], foreignAudio: ""},
{topic: "Numbers", englishWord: "four", foreignWord: ["arba'ah", "أَرْبَعَة"], foreignAudio: ""},
{topic: "Numbers", englishWord: "five", foreignWord: ["khamsah", "خَمْسَة"], foreignAudio: ""},
{topic: "Numbers", englishWord: "six", foreignWord: ["sittah", "سِتَّة"], foreignAudio: ""},
{topic: "Numbers", englishWord: "seven", foreignWord: ["sab'ah", "سَبْعَة"], foreignAudio: ""},
{topic: "Numbers", englishWord: "eight", foreignWord: ["thamāniyah", "ثَمَانِيَة"], foreignAudio: ""},
{topic: "Numbers", englishWord: "nine", foreignWord: ["tis'ah", "تِسْعَة"], foreignAudio: ""},
{topic: "Numbers", englishWord: "ten", foreignWord: ["'asharah", "عَشَرَة"], foreignAudio: ""}
]

const spanish_topics = ["Clothes","Colours","Food","Numbers"]

const spanish = [
    {topic: "Food", englishWord: "potato", foreignWord: ["papa"], foreignAudio: ""},
    {topic: "Food", englishWord: "bread", foreignWord: ["pan"], foreignAudio: ""},
    {topic: "Food", englishWord: "meat", foreignWord: ["carne"], foreignAudio: ""},
    {topic: "Food", englishWord: "egg", foreignWord: ["huevo"], foreignAudio: ""},
    {topic: "Food", englishWord: "strawberry", foreignWord: ["fresa"], foreignAudio: ""},
    {topic: "Food", englishWord: "garlic", foreignWord: ["ajo"], foreignAudio: ""},
    {topic: "Food", englishWord: "butter", foreignWord: ["manteca"], foreignAudio: ""},
    {topic: "Food", englishWord: "fish", foreignWord: ["pez"], foreignAudio: ""},
    {topic: "Food", englishWord: "chicken", foreignWord: ["pollo"], foreignAudio: ""},
    {topic: "Food", englishWord: "cheese", foreignWord: ["queso"], foreignAudio: ""}, 
    {topic: "Clothes", englishWord: "trousers", foreignWord: ["pantalones"], foreignAudio: ""},
    {topic: "Clothes", englishWord: "sweater", foreignWord: ["suéter"], foreignAudio: ""},
    {topic: "Clothes", englishWord: "underwear", foreignWord: ["ropa interior"], foreignAudio: ""},
    {topic: "Clothes", englishWord: "tie", foreignWord: ["corbata"], foreignAudio: ""},
    {topic: "Clothes", englishWord: "socks", foreignWord: ["medias"], foreignAudio: ""},
    {topic: "Clothes", englishWord: "shoes", foreignWord: ["zapatos"], foreignAudio: ""},
    {topic: "Clothes", englishWord: "skirt", foreignWord: ["falda"], foreignAudio: ""},
    {topic: "Clothes", englishWord: "jacket", foreignWord: ["chaqueta"], foreignAudio: ""},
    {topic: "Clothes", englishWord: "hat", foreignWord: ["sombrero"], foreignAudio: ""},
    {topic: "Clothes", englishWord: "scarf", foreignWord: ["bufanda"], foreignAudio: ""},
    {topic: "Colours", englishWord: "red", foreignWord: ["rojo"], foreignAudio: ""},
    {topic: "Colours", englishWord: "blue", foreignWord: ["azul"], foreignAudio: ""},
    {topic: "Colours", englishWord: "green", foreignWord: ["verde"], foreignAudio: ""},
    {topic: "Colours", englishWord: "orange", foreignWord: ["naranja"], foreignAudio: ""},
    {topic: "Colours", englishWord: "brown", foreignWord: ["marron"], foreignAudio: ""},
    {topic: "Colours", englishWord: "grey", foreignWord: ["gris"], foreignAudio: ""},
    {topic: "Colours", englishWord: "white", foreignWord: ["blanco"], foreignAudio: ""},
    {topic: "Colours", englishWord: "black", foreignWord: ["negro"], foreignAudio: ""},
    {topic: "Colours", englishWord: "purple", foreignWord: ["morado"], foreignAudio: ""},
    {topic: "Colours", englishWord: "pink", foreignWord: ["rosado"], foreignAudio: ""},
    {topic: "Numbers", englishWord: "one", foreignWord: ["uno"], foreignAudio: ""},
    {topic: "Numbers", englishWord: "two ", foreignWord: ["dos"], foreignAudio: ""},
    {topic: "Numbers", englishWord: "three", foreignWord: ["tres"], foreignAudio: ""},
    {topic: "Numbers", englishWord: "four", foreignWord: ["cuatro"], foreignAudio: ""},
    {topic: "Numbers", englishWord: "five", foreignWord: ["cinco"], foreignAudio: ""},
    {topic: "Numbers", englishWord: "six", foreignWord: ["seis"], foreignAudio: ""},
    {topic: "Numbers", englishWord: "seven", foreignWord: ["siete"], foreignAudio: ""},
    {topic: "Numbers", englishWord: "eight", foreignWord: ["ocho"], foreignAudio: ""},
    {topic: "Numbers", englishWord: "nine", foreignWord: ["nueve"], foreignAudio: ""},
    {topic: "Numbers", englishWord: "ten", foreignWord: ["diez"], foreignAudio: ""}
    
    ]

    export const languages = [{languageName: "Arabic", Content: arabic, topics: arabic_topics, num_foreign_alphabets: 2},{languageName: "Dutch", Content: dutch, topics: dutch_topics, num_foreign_alphabets: 1},{languageName: "Spanish", Content: spanish, topics: spanish_topics, num_foreign_alphabets: 1} ]



import arabic_black from '../data/audio/black.mp3';
import arabic_blue from '../data/audio/blue.mp3';
import arabic_brown from '../data/audio/brown.mp3';
import arabic_green from '../data/audio/green.mp3';
import arabic_grey from '../data/audio/grey.mp3';
import arabic_orange from '../data/audio/orange.mp3';
import arabic_pink from '../data/audio/pink.mp3';
import arabic_purple from '../data/audio/purple.mp3';
import arabic_red from '../data/audio/red.mp3';
import arabic_white from '../data/audio/white.mp3';
import arabic_yellow from '../data/audio/yellow.mp3';
