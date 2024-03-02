/* eslint-disable @stylistic/js/max-len */

import arabicAudioBlack from '../data/audio/arabic/arabic_colours/black.mp3';
import arabicAudioBlue from '../data/audio/arabic/arabic_colours/blue.mp3';
import arabicAudioBrown from '../data/audio/arabic/arabic_colours/brown.mp3';
import arabicAudioGreen from '../data/audio/arabic/arabic_colours/green.mp3';
import arabicAudioGrey from '../data/audio/arabic/arabic_colours/grey.mp3';
import arabicAudioOrange from '../data/audio/arabic/arabic_colours/orange.mp3';
import arabicAudioPink from '../data/audio/arabic/arabic_colours/pink.mp3';
import arabicAudioPurple from '../data/audio/arabic/arabic_colours/purple.mp3';
import arabicAudioRed from '../data/audio/arabic/arabic_colours/red.mp3';
import arabicAudioWhite from '../data/audio/arabic/arabic_colours/white.mp3';
import arabicAudioYellow from '../data/audio/arabic/arabic_colours/yellow.mp3';

import spanishAudioAwake from '../data/audio/spanish/spanish_adjectives/awake.mp3';
import spanishAudioBad from '../data/audio/spanish/spanish_adjectives/bad.mp3';
import spanishAudioBig from '../data/audio/spanish/spanish_adjectives/big.mp3';
import spanishAudioBoring from '../data/audio/spanish/spanish_adjectives/boring.mp3';
import spanishAudioCalm from '../data/audio/spanish/spanish_adjectives/calm.mp3';
import spanishAudioCheap from '../data/audio/spanish/spanish_adjectives/cheap.mp3';
import spanishAudioClean from '../data/audio/spanish/spanish_adjectives/clean.mp3';
import spanishAudioClosed from '../data/audio/spanish/spanish_adjectives/closed.mp3';
import spanishAudioCold from '../data/audio/spanish/spanish_adjectives/cold.mp3';
import spanishAudioComplicated from '../data/audio/spanish/spanish_adjectives/complicated.mp3';
import spanishAudioCrazy from '../data/audio/spanish/spanish_adjectives/crazy.mp3';
import spanishAudioDelicious from '../data/audio/spanish/spanish_adjectives/delicious.mp3';
import spanishAudioDirty from '../data/audio/spanish/spanish_adjectives/dirty.mp3';
import spanishAudioDisgusting from '../data/audio/spanish/spanish_adjectives/disgusting.mp3';
import spanishAudioDry from '../data/audio/spanish/spanish_adjectives/dry.mp3';
import spanishAudioEmpty from '../data/audio/spanish/spanish_adjectives/empty.mp3';
import spanishAudioExpensive from '../data/audio/spanish/spanish_adjectives/expensive.mp3';
import spanishAudioFair from '../data/audio/spanish/spanish_adjectives/fair.mp3';
import spanishAudioFast from '../data/audio/spanish/spanish_adjectives/fast.mp3';
import spanishAudioFat from '../data/audio/spanish/spanish_adjectives/fat.mp3';
import spanishAudioFull from '../data/audio/spanish/spanish_adjectives/full.mp3';
import spanishAudioFun from '../data/audio/spanish/spanish_adjectives/fun.mp3';
import spanishAudioGood from '../data/audio/spanish/spanish_adjectives/good.mp3';
import spanishAudioHappy from '../data/audio/spanish/spanish_adjectives/happy.mp3';
import spanishAudioHealthy from '../data/audio/spanish/spanish_adjectives/healthy.mp3';
import spanishAudioHot from '../data/audio/spanish/spanish_adjectives/hot.mp3';
import spanishAudioIntelligent from '../data/audio/spanish/spanish_adjectives/intelligent.mp3';
import spanishAudioNew from '../data/audio/spanish/spanish_adjectives/new.mp3';
import spanishAudioOld from '../data/audio/spanish/spanish_adjectives/old.mp3';
import spanishAudioOpen from '../data/audio/spanish/spanish_adjectives/open.mp3';
import spanishAudioPoor from '../data/audio/spanish/spanish_adjectives/poor.mp3';
import spanishAudioPretty from '../data/audio/spanish/spanish_adjectives/pretty.mp3';
import spanishAudioRich from '../data/audio/spanish/spanish_adjectives/rich.mp3';
import spanishAudioSad from '../data/audio/spanish/spanish_adjectives/sad.mp3';
import spanishAudioSalty from '../data/audio/spanish/spanish_adjectives/savory-salty.mp3';
import spanishAudioShort from '../data/audio/spanish/spanish_adjectives/short.mp3';
import spanishAudioSick from '../data/audio/spanish/spanish_adjectives/sick.mp3';
import spanishAudioSimple from '../data/audio/spanish/spanish_adjectives/simple.mp3';
import spanishAudioSlow from '../data/audio/spanish/spanish_adjectives/slow.mp3';
import spanishAudioSmall from '../data/audio/spanish/spanish_adjectives/small.mp3';
import spanishAudioStrong from '../data/audio/spanish/spanish_adjectives/strong.mp3';
import spanishAudioStupid from '../data/audio/spanish/spanish_adjectives/stupid.mp3';
import spanishAudioSweet from '../data/audio/spanish/spanish_adjectives/sweet.mp3';
import spanishAudioTall from '../data/audio/spanish/spanish_adjectives/tall.mp3';
import spanishAudioThin from '../data/audio/spanish/spanish_adjectives/thin.mp3';
import spanishAudioTired from '../data/audio/spanish/spanish_adjectives/tired.mp3';
import spanishAudioUgly from '../data/audio/spanish/spanish_adjectives/ugly.mp3';
import spanishAudioUnfair from '../data/audio/spanish/spanish_adjectives/unfair.mp3';
import spanishAudioWeak from '../data/audio/spanish/spanish_adjectives/weak.mp3';
import spanishAudioWet from '../data/audio/spanish/spanish_adjectives/wet.mp3';

import spanishAudioOne from '../data/audio/spanish/spanish_numbers/one.mp3';
import spanishAudioTwo from '../data/audio/spanish/spanish_numbers/two.mp3';
import spanishAudioThree from '../data/audio/spanish/spanish_numbers/three.mp3';
import spanishAudioFour from '../data/audio/spanish/spanish_numbers/four.mp3';
import spanishAudioFive from '../data/audio/spanish/spanish_numbers/five.mp3';
import spanishAudioSix from '../data/audio/spanish/spanish_numbers/six.mp3';
import spanishAudioSeven from '../data/audio/spanish/spanish_numbers/seven.mp3';
import spanishAudioEight from '../data/audio/spanish/spanish_numbers/eight.mp3';
import spanishAudioNine from '../data/audio/spanish/spanish_numbers/nine.mp3';
import spanishAudioTen from '../data/audio/spanish/spanish_numbers/ten.mp3';

import { sortTopics } from '../helpers';
import {Language, VerbConjugationEnglish, Topic1, Topic2, Topic3 } from '../types';

export const englishVerbs: { [key: string]: VerbConjugationEnglish } = {
  'to call': {
    infinitive: 'to call',
    englishWordConjugation:
        {
          pastTense: ['called','called', 'called','called','called', 'called'],
          presentTense: ['call','call', 'calls','call','call', 'call'], 
          futureTense: ['will call','will call', 'will call','will call','will call', 'will call']
        }
  }, 
  'to study':
{
  infinitive: 'to study',
  englishWordConjugation: 
    {
      pastTense: ['studied','studied', 'studied','studied','studied', 'studied'],
      presentTense: ['study','study', 'studies','study','study', 'study'],
      futureTense: ['will study','will study', 'will study','will study','will study', 'will study']
    }
},
  'to be':
{
  infinitive: 'to be',
  englishWordConjugation: 
    {
      pastTense: ['was','were', 'was','were','were', 'were'],
      presentTense: ['am','are', 'is','are','are', 'are'],
      futureTense: ['will be','will be', 'will be','will be','will be', 'will be']
    }
},
  'to have':
{
  infinitive: 'to have',
  englishWordConjugation: 
    {
      pastTense: ['had','had', 'had','had','had', 'had'],
      presentTense: ['have','have', 'has','have','have', 'have'],
      futureTense: ['will have','will have', 'will have','will have','will have', 'will have']
    }
},
  'to do':
{
  infinitive: 'to do',
  englishWordConjugation: 
    {
      pastTense: ['did','did', 'did','did','did', 'did'],
      presentTense: ['do','do', 'do','do','do', 'do'],
      futureTense: ['will do','will do', 'will do','will do','will do', 'will do']
    }
},
  'to go':
{
  infinitive: 'to go',
  englishWordConjugation: 
    {
      pastTense: ['went','went', 'went','went','went', 'went'],
      presentTense: ['go','go', 'go','go','go', 'go'],
      futureTense: ['will go','will go', 'will go','will go','will go', 'will go']
    }
},
  'to be able to':
{
  infinitive: 'to be able to',
  englishWordConjugation: 
    {
      pastTense: ['was able to','were able to', 'was able to','were able to','were able to', 'were able to'],
      presentTense: ['am able to','are able to', 'is able to','are able to','are able to', 'are able to'],
      futureTense: ['will be able to','will be able to', 'will be able to','will be able to','will be able to', 'will be able to']
    }
},
  'to know':
{
  infinitive: 'to know',
  englishWordConjugation: 
    {
      pastTense: ['knew','knew', 'knew','knew','knew', 'knew'],
      presentTense: ['know','know', 'know','know','know', 'know'],
      futureTense: ['will know','will know', 'will know','will know','will know', 'will know'],
    }
},
  'to put':
{
  infinitive: 'to put',
  englishWordConjugation: 
    {
      pastTense: ['put','put', 'put','put','put', 'put'],
      presentTense: ['put','put', 'put','put','put', 'put'],
      futureTense: ['will put','will put', 'will put','will put','will put', 'will put'],
    }
},
  'to say':
{
  infinitive: 'to say',
  englishWordConjugation: 
    {
      pastTense: ['said','said', 'said','said','said', 'said'],
      presentTense: ['say','say', 'says','say','say', 'say'],
      futureTense: ['will say','will say', 'will say','will say','will say', 'will say'],
    }
},
  'to want':
{
  infinitive: 'to want',
  englishWordConjugation: 
    {
      pastTense: ['wanted','wanted', 'wanted','wanted','wanted', 'wanted'],
      presentTense: ['want','want', 'want','want','want', 'want'],
      futureTense: ['will want','will want', 'will want','will want','will want', 'will want'],
    }
},
  'to speak':
{
  infinitive: 'to speak',
  englishWordConjugation: 
    {
      pastTense: ['spoke','spoke', 'spoke','spoke','spoke', 'spoke'],
      presentTense: ['speak','speak', 'speaks','speak','speak', 'speak'],
      futureTense: ['will speak','will speak', 'will speak','will speak','will speak', 'will speak'],
    }
},
  'to give':
{
  infinitive: 'to give',
  englishWordConjugation: 
    {
      pastTense: ['gave','gave', 'gave','gave','gave', 'gave'],
      presentTense: ['give','give', 'gives','give','give', 'give'],
      futureTense: ['will give','will give', 'will give','will give','will give', 'will give'],
    }
},
  'to see':
{
  infinitive: 'to see',
  englishWordConjugation: 
    {
      pastTense: ['saw','saw', 'saw','saw','saw', 'saw'],
      presentTense: ['see','see', 'sees','see','see', 'see'],
      futureTense: ['will see','will see', 'will see','will see','will see', 'will see'],
    }
},
  'to drink':
{
  infinitive: 'to drink',
  englishWordConjugation: 
    {
      pastTense: ['drank','drank', 'drank','drank','drank', 'drank'],
      presentTense: ['drink','drink', 'drinks','drink','drink', 'drink'],
      futureTense: ['will drink','will drink', 'will drink','will drink','will drink', 'will drink'],
    }
},
  'to eat':
{
  infinitive: 'to eat',
  englishWordConjugation: 
    {
      pastTense: ['ate','ate', 'ate','ate','ate', 'ate'],
      presentTense: ['eat','eat', 'eats','eat','eat', 'eat'],
      futureTense: ['will eat','will eat', 'will eat','will eat','will eat', 'will eat'],
    }
},
  'to live':
{
  infinitive: 'to live',
  englishWordConjugation: 
    {
      pastTense: ['lived','lived', 'lived','lived','lived', 'lived'],
      presentTense: ['live','live', 'lives','live','live', 'live'],
      futureTense: ['will live','will live', 'will live','will live','will live', 'will live'],
    }
},
  'to need':
{
  infinitive: 'to need',
  englishWordConjugation: 
    {
      pastTense: ['needed','needed', 'needed','needed','needed', 'needed'],
      presentTense: ['need','need', 'needs','need','need', 'need'],
      futureTense: ['will need','will need', 'will need','will need','will need', 'will need'],
    }
},
}

export const englishPronouns: string[]= ['I','You','He/She','We','You (p)','They']

const dutchTopics: Topic1[] = [
  {name:'Clothes', slugName: 'clo', hasOrdering:false, words: [
    { englishWord: 'trousers', foreignWord: ['broek'], foreignAudio: ''},
    { englishWord: 'sweater', foreignWord: ['trui'], foreignAudio: ''},
    { englishWord: 'underwear', foreignWord: ['onderbroek'], foreignAudio: ''},
    { englishWord: 'tie', foreignWord: ['stropdas'], foreignAudio: ''},
    { englishWord: 'socks', foreignWord: ['sokken'], foreignAudio: ''},
    { englishWord: 'shoes', foreignWord: ['schoenen'], foreignAudio: ''},
    { englishWord: 'skirt', foreignWord: ['rok'], foreignAudio: ''},
    { englishWord: 'jacket', foreignWord: ['jas'], foreignAudio: ''},
    { englishWord: 'hat', foreignWord: ['pet'], foreignAudio: ''},
    { englishWord: 'scarf', foreignWord: ['sjaal'], foreignAudio: ''},
  ]},
  {name:'Colours', slugName: 'col', hasOrdering:false, words: [
    { englishWord: 'red', foreignWord: ['rood'], foreignAudio: ''},
    { englishWord: 'blue', foreignWord: ['blauw'], foreignAudio: ''},
    { englishWord: 'green', foreignWord: ['groen'], foreignAudio: ''},
    { englishWord: 'orange', foreignWord: ['oranje'], foreignAudio: ''},
    { englishWord: 'brown', foreignWord: ['bruin'], foreignAudio: ''},
    { englishWord: 'grey', foreignWord: ['grijs'], foreignAudio: ''},
    { englishWord: 'white', foreignWord: ['wit'], foreignAudio: ''},
    { englishWord: 'black', foreignWord: ['zwart'], foreignAudio: ''},
    { englishWord: 'purple', foreignWord: ['paars'], foreignAudio: ''},
    { englishWord: 'pink', foreignWord: ['rose'], foreignAudio: ''},
  ]},
  {name:'Food', slugName: 'foo', hasOrdering:false, words: [
    { englishWord: 'potato', foreignWord: ['aardappel'], foreignAudio: ''},
    { englishWord: 'bread', foreignWord: ['brood'], foreignAudio: ''},
    { englishWord: 'meat', foreignWord: ['vlees'], foreignAudio: ''},
    { englishWord: 'egg', foreignWord: ['ei'], foreignAudio: ''},
    { englishWord: 'strawberry', foreignWord: ['aardbei'], foreignAudio: ''},
    { englishWord: 'garlic', foreignWord: ['knoflook'], foreignAudio: ''},
    { englishWord: 'butter', foreignWord: ['boter'], foreignAudio: ''},
    { englishWord: 'fish', foreignWord: ['vis'], foreignAudio: ''},
    { englishWord: 'chicken', foreignWord: ['kip'], foreignAudio: ''},
    { englishWord: 'cheese', foreignWord: ['kaas'], foreignAudio: ''}, 
    { englishWord: 'pineapple', foreignWord: ['ananas'], foreignAudio: ''},
    { englishWord: 'onion', foreignWord: ['ui'], foreignAudio: ''},
    { englishWord: 'salt', foreignWord: ['zout'], foreignAudio: ''},
    { englishWord: 'oil', foreignWord: ['olie'], foreignAudio: ''},
    { englishWord: 'pork', foreignWord: ['varkens vlees'], foreignAudio: ''},
    { englishWord: 'raspberry', foreignWord: ['framboos'], foreignAudio: ''},
    { englishWord: 'cake', foreignWord: ['taart'], foreignAudio: ''},
    { englishWord: 'milk', foreignWord: ['melk'], foreignAudio: ''},
    { englishWord: 'rice', foreignWord: ['rijst'], foreignAudio: ''},
    { englishWord: 'bell plant', foreignWord: ['paprika'], foreignAudio: ''}, 
    { englishWord: 'lettuce', foreignWord: ['aardappel'], foreignAudio: ''},
    { englishWord: 'beans', foreignWord: ['bonen'], foreignAudio: ''},
    { englishWord: 'bacon', foreignWord: ['spek'], foreignAudio: ''},
    { englishWord: 'cookie', foreignWord: ['koek'], foreignAudio: ''},
    { englishWord: 'ginger', foreignWord: ['gember'], foreignAudio: ''},
    { englishWord: 'honey', foreignWord: ['honing'], foreignAudio: ''},
    { englishWord: 'pancakes', foreignWord: ['pannekoeken'], foreignAudio: ''},
    { englishWord: 'spinach', foreignWord: ['spinazie'], foreignAudio: ''},
  ]},
  {name:'Family', slugName: 'fam', hasOrdering:false, words: [
    { englishWord: 'brother', foreignWord: ['broer'], foreignAudio: ''},
    { englishWord: 'sister ', foreignWord: ['zus'], foreignAudio: ''},
    { englishWord: 'mother', foreignWord: ['moeder'], foreignAudio: ''},
    { englishWord: 'father', foreignWord: ['vader'], foreignAudio: ''},
    { englishWord: 'son', foreignWord: ['zoon'], foreignAudio: ''},
    { englishWord: 'daughter', foreignWord: ['dochter'], foreignAudio: ''},
    { englishWord: 'aunt', foreignWord: ['tante'], foreignAudio: ''},
    { englishWord: 'uncle', foreignWord: ['oom'], foreignAudio: ''},
    { englishWord: 'grandfather', foreignWord: ['opa'], foreignAudio: ''},
    { englishWord: 'grandmother', foreignWord: ['oma'], foreignAudio: ''},
    { englishWord: 'cousin (male)', foreignWord: ['neef'], foreignAudio: ''},
    { englishWord: 'cousin (female)', foreignWord: ['nicht'], foreignAudio: ''},
    { englishWord: 'niece', foreignWord: ['nicht'], foreignAudio: ''},
    { englishWord: 'nephew', foreignWord: ['neef'], foreignAudio: ''},
  ]},
  {name:'Numbers', slugName: 'num', hasOrdering:true, words: [
    { englishWord: 'one', foreignWord: ['een'], foreignAudio: '', order:1},
    { englishWord: 'three', foreignWord: ['drie'], foreignAudio: '', order:2},
    { englishWord: 'four', foreignWord: ['vier'], foreignAudio: '', order:3},
    { englishWord: 'five', foreignWord: ['vijf'], foreignAudio: '', order:4},
    { englishWord: 'six', foreignWord: ['zes'], foreignAudio: '', order:5},
    { englishWord: 'seven', foreignWord: ['zeven'], foreignAudio: '', order:6},
    { englishWord: 'eight', foreignWord: ['acht'], foreignAudio: '', order:7},
    { englishWord: 'nine', foreignWord: ['negen'], foreignAudio: '', order:8},
    { englishWord: 'ten', foreignWord: ['tien'], foreignAudio: '', order:9},
  ]},
  {name:'Pronunciation', slugName: 'pnu', hasOrdering:false, words: [
    { englishWord: 'ei', foreignWord: ['aardbei'], foreignAudio: ''},
    { englishWord: 'ij', foreignWord: ['krijt'], foreignAudio: ''},
    { englishWord: 'sch', foreignWord: ['school'], foreignAudio: ''},
    { englishWord: 'oe', foreignWord: ['stoer'], foreignAudio: ''},
    { englishWord: 'ui', foreignWord: ['sluit'], foreignAudio: ''},
    { englishWord: 'eu', foreignWord: ['breuk'], foreignAudio: ''},
    { englishWord: 'g', foreignWord: ['morgen'], foreignAudio: ''},
    { englishWord: 'oo', foreignWord: ['stoom'], foreignAudio: ''},
    { englishWord: 'o', foreignWord: ['stom'], foreignAudio: ''},
    { englishWord: 'ee', foreignWord: ['geen'], foreignAudio: ''},
    { englishWord: 'e', foreignWord: ['ren'], foreignAudio: ''},
    { englishWord: 'uu', foreignWord: ['muur'], foreignAudio: ''},
    { englishWord: 'u', foreignWord: ['stuk'], foreignAudio: ''},
    { englishWord: 'aa', foreignWord: ['zaal'], foreignAudio: ''},
    { englishWord: 'a', foreignWord: ['zal'], foreignAudio: ''},
    { englishWord: 'sj', foreignWord: ['sjaal'], foreignAudio: ''},
  ]},
  {name:'Pronouns', slugName: 'pno', hasOrdering:true, words: [
    { englishWord: 'I', foreignWord: ['ik'], foreignAudio: '', order:1},
    { englishWord: 'you ', foreignWord: ['jij'], foreignAudio: '', order:2},
    { englishWord: 'he', foreignWord: ['hij'], foreignAudio: '', order:3},
    { englishWord: 'she', foreignWord: ['zij'], foreignAudio: '', order:4},
    { englishWord: 'we', foreignWord: ['wij'], foreignAudio: '', order:5},
    { englishWord: 'you (p)', foreignWord: ['julie'], foreignAudio: '', order:6},
    { englishWord: 'They', foreignWord: ['zij'], foreignAudio: '', order:7},
  ]},
  {name:'Question Words', slugName: 'que', hasOrdering:false, words: [
    { englishWord: 'Why', foreignWord: ['waarom'], foreignAudio: ''},
    { englishWord: 'Where', foreignWord: ['waar'], foreignAudio: ''},
    { englishWord: 'When', foreignWord: ['wanneer'], foreignAudio: ''},
    { englishWord: 'What', foreignWord: ['wat'], foreignAudio: ''},
    { englishWord: 'How', foreignWord: ['hoe'], foreignAudio: ''}
  ]},
]

const arabicTopics: Topic2[] = [
  {name:'Arabic alphabet', slugName: 'alp', hasOrdering:true, isAlphabet: true, words: [
    { englishWord: 'alef', foreignWord: ['ا',''], foreignAudio: '', order: 1 },
    { englishWord: 'baa', foreignWord: ['ب',''], foreignAudio: '', order: 2 },
    { englishWord: 'taa', foreignWord: ['ت',''], foreignAudio: '', order: 3 },
    { englishWord: 'tha', foreignWord: ['ث',''], foreignAudio: '', order: 4 },
    { englishWord: 'jeem', foreignWord: ['ج',''], foreignAudio: '', order: 5 },
    { englishWord: 'hhaa', foreignWord: ['ح',''], foreignAudio: '', order: 6 },
    { englishWord: 'khaa', foreignWord: ['خ',''], foreignAudio: '', order: 7 },
    { englishWord: 'daal', foreignWord: ['د',''], foreignAudio: '', order: 8 },
    { englishWord: 'dhaal', foreignWord: ['ذ',''], foreignAudio: '', order: 9 },
    { englishWord: 'raa', foreignWord: ['ر',''], foreignAudio: '', order: 10 },
    { englishWord: 'zay', foreignWord: ['ز',''], foreignAudio: '', order: 11 },
    { englishWord: 'seen', foreignWord: ['س',''], foreignAudio: '', order: 12 },
    { englishWord: 'sheen', foreignWord: ['ش',''], foreignAudio: '', order: 13 },
    { englishWord: 'saad', foreignWord: ['ص',''], foreignAudio: '', order: 14 },
    { englishWord: 'daad', foreignWord: ['ض',''], foreignAudio: '', order: 15 },
    { englishWord: 'taa marbuta', foreignWord: ['ة',''], foreignAudio: '', order: 16 },
    { englishWord: 'ain', foreignWord: ['ع',''], foreignAudio: '', order: 17 },
    { englishWord: 'ghain', foreignWord: ['غ',''], foreignAudio: '', order: 18 },
    { englishWord: 'faa', foreignWord: ['ف',''], foreignAudio: '', order: 19 },
    { englishWord: 'qaaf', foreignWord: ['ق',''], foreignAudio: '', order: 20 },
    { englishWord: 'kaf', foreignWord: ['ك',''], foreignAudio: '', order: 21 },
    { englishWord: 'laam', foreignWord: ['ل',''], foreignAudio: '', order: 22 },
    { englishWord: 'meem', foreignWord: ['م',''], foreignAudio: '', order: 23 },
    { englishWord: 'noon', foreignWord: ['ن',''], foreignAudio: '', order: 24 },
    { englishWord: 'haa', foreignWord: ['ه',''], foreignAudio: '', order: 25 },
    { englishWord: 'waw', foreignWord: ['و',''], foreignAudio: '', order: 26 },
    { englishWord: 'yaa', foreignWord: ['ي',''], foreignAudio: '', order: 27 },
  ]},
  
  {name:'Clothes', slugName: 'clo', hasOrdering:false, words: [
    { englishWord: 'belt', foreignWord: ['ḥizām', 'حِزَام'], foreignAudio: ''},
    { englishWord: 'cap', foreignWord: ['qubba\'ah', 'قُبَّعَة'], foreignAudio: ''},
    { englishWord: 'clothes', foreignWord: ['malābis', 'مَلَابِس'], foreignAudio: ''},
    { englishWord: 'coat', foreignWord: ['mi\'ṭaf', 'مِعْطَف'], foreignAudio: ''},
    { englishWord: 'dress', foreignWord: ['fustān', 'فُسْتَان'], foreignAudio: ''},
    { englishWord: 'glasses', foreignWord: ['naḍhḍhārah', 'نَظَّارَة'], foreignAudio: ''},
    { englishWord: 'robe', foreignWord: ['thawb', 'ثَوْب'], foreignAudio: ''},
    { englishWord: 'shirt', foreignWord: ['qamīṣ', 'قَمِيص'], foreignAudio: ''},
    { englishWord: 'shoes', foreignWord: ['ḥidhā`', 'حِذَاء'], foreignAudio: ''},
    { englishWord: 'sock', foreignWord: ['jārib', 'حِذَاء'], foreignAudio: ''},
    { englishWord: 'suit', foreignWord: ['badhlah', 'بَذْلَة'], foreignAudio: ''},
    { englishWord: 'trousers', foreignWord: ['banṭalūn', 'بَنْطَلُون'], foreignAudio: ''},
    { englishWord: 'wallet', foreignWord: ['maḥfaḍhah', 'مَحْفَظَة'], foreignAudio: ''},
  ]},
  {name:'Food', slugName: 'foo', hasOrdering:false, words: [
    { englishWord: 'apple', foreignWord: ['tuffāḥah', 'تُفَّاحَة'], foreignAudio: ''},
    { englishWord: 'apricot', foreignWord: ['mishmish', 'مِشْمِش'], foreignAudio: ''},
    { englishWord: 'banana', foreignWord: ['mawz', 'مَوْز'], foreignAudio: ''},
    { englishWord: 'beans', foreignWord: ['fūl', 'فُول'], foreignAudio: ''},
    { englishWord: 'berries', foreignWord: ['tūt', 'توت'], foreignAudio: ''},
    { englishWord: 'bread', foreignWord: ['khubz', 'خُبْز'], foreignAudio: ''},
    { englishWord: 'breakfast', foreignWord: ['faṭūr', 'فَطور'], foreignAudio: ''},
    { englishWord: 'butter', foreignWord: ['zubdah', 'زُبْدَة'], foreignAudio: ''},
    { englishWord: 'cafetaria', foreignWord: ['maqṣif', 'مَقْصِف'], foreignAudio: ''},
    { englishWord: 'carrot', foreignWord: ['jazarah', 'جَزَرَة'], foreignAudio: ''},
    { englishWord: 'cake', foreignWord: ['ka\'kah', 'كَعْكَة'], foreignAudio: ''},
    { englishWord: 'cheese', foreignWord: ['jubnah', 'جُبْنَة'], foreignAudio: ''},
    { englishWord: 'corn', foreignWord: ['dharah', 'ذَرَة'], foreignAudio: ''},
    { englishWord: 'cucumber', foreignWord: ['khiyārah', 'خِيارَة'], foreignAudio: ''},
    { englishWord: 'dates', foreignWord: ['tamr', 'تَمْر'], foreignAudio: ''},
    { englishWord: 'dinner', foreignWord: ['\'ashā`', 'عَشاء'], foreignAudio: ''},
    { englishWord: 'dinner table', foreignWord: ['mā`idah', 'مَائِدَة'], foreignAudio: ''},
    { englishWord: 'egg', foreignWord: ['bayḍah', 'بَيْضَة'], foreignAudio: ''},
    { englishWord: 'eggplant', foreignWord: ['bādhinjān', 'باذِنْجان'], foreignAudio: ''},
    { englishWord: 'figs', foreignWord: ['tīn', 'تين'], foreignAudio: ''},
    { englishWord: 'fruit', foreignWord: ['fākihah', 'فاكِهَة'], foreignAudio: ''},
    { englishWord: 'garlic', foreignWord: ['thawm', 'ثَوْم'], foreignAudio: ''},
    { englishWord: 'grapes', foreignWord: ['\'inab', 'عِنَب'], foreignAudio: ''},
    { englishWord: 'honey', foreignWord: ['\'asal', 'عَسَل'], foreignAudio: ''},
    { englishWord: 'jam', foreignWord: ['murabbā', 'مُرَبَّى'], foreignAudio: ''},
    { englishWord: 'lemon', foreignWord: ['laymūnah', 'لَيْمُونَة'], foreignAudio: ''},
    { englishWord: 'lentils', foreignWord: ['\'adas', 'عَدَس'], foreignAudio: ''},
    { englishWord: 'lunch', foreignWord: ['ghadā`', 'غَداء'], foreignAudio: ''},
    { englishWord: 'mango', foreignWord: ['mānjū', 'مانْجو'], foreignAudio: ''},
    { englishWord: 'meal', foreignWord: ['wajbah', 'وَجْبَة'], foreignAudio: ''},
    { englishWord: 'meat', foreignWord: ['laḥm', 'لَحْم'], foreignAudio: ''},
    { englishWord: 'menu', foreignWord: ['lā`iḥatu ṭ-ṭā\'ām', 'لَائِحَةُ الطَّعَام'], foreignAudio: ''},
    { englishWord: 'oil', foreignWord: ['zayt', 'زَيْت'], foreignAudio: ''},
    { englishWord: 'olives', foreignWord: ['zaytūnah', 'زَيْتُونَة'], foreignAudio: ''},
    { englishWord: 'onion', foreignWord: ['baṣalah', 'بَصَلَة'], foreignAudio: ''},
    { englishWord: 'orange', foreignWord: ['burtuqāl', 'بُرْتُقال'], foreignAudio: ''},
    { englishWord: 'peach', foreignWord: ['khawkhah', 'خَوْخَة'], foreignAudio: ''},
    { englishWord: 'plum', foreignWord: ['barqūqah', 'بَرْقوقَة'], foreignAudio: ''},
    { englishWord: 'pomegranate', foreignWord: ['rummān', 'رُمَّان'], foreignAudio: ''},
    { englishWord: 'potato', foreignWord: ['batatis', 'بَطَاطِس'], foreignAudio: ''},
    { englishWord: 'pumpkin', foreignWord: ['qar\'', 'قَرْع'], foreignAudio: ''},
    { englishWord: 'rice', foreignWord: ['urz', 'أُرْز'], foreignAudio: ''},
    { englishWord: 'salad', foreignWord: ['salaṭah', 'سَلَطَة'], foreignAudio: ''},
    { englishWord: 'salt', foreignWord: ['milḥ', 'مِلْح'], foreignAudio: ''},
    { englishWord: 'soup', foreignWord: ['ḥisā`', 'حِساء'], foreignAudio: ''},
    { englishWord: 'strawberry', foreignWord: ['farāwilah', 'فَراوِلَة'], foreignAudio: ''},
    { englishWord: 'sugar', foreignWord: ['sukkar', 'سُكَّر'], foreignAudio: ''},
    { englishWord: 'sweets', foreignWord: ['ḥalwā', 'حَلْوَى'], foreignAudio: ''},
    { englishWord: 'tomatoes', foreignWord: ['ṭamāṭim', 'طَمَاطِم'], foreignAudio: ''},
    { englishWord: 'tuna', foreignWord: ['tūnah', 'تونَة'], foreignAudio: ''},
    { englishWord: 'vegetables', foreignWord: ['khaḍrawāt', 'خَضْرَوات'], foreignAudio: ''},
    { englishWord: 'walnuts', foreignWord: ['jawz', 'جَوْز'], foreignAudio: ''},
    { englishWord: 'yogurt', foreignWord: ['zabādī', 'زَبادي'], foreignAudio: ''},
    { englishWord: 'zucchini', foreignWord: ['kūsah', 'كوسَة'], foreignAudio: ''},
  ]},
  {name:'Colours', slugName: 'col', hasOrdering:false, words: [
    { englishWord: 'black', foreignWord: ['aswad', 'أَسْوَد'], foreignAudio: arabicAudioBlack},
    { englishWord: 'blue', foreignWord: ['azraq', 'أَزْرَق'], foreignAudio: arabicAudioBlue},
    { englishWord: 'brown', foreignWord: ['bunniyy', 'بُنِّيّ'], foreignAudio: arabicAudioBrown},
    { englishWord: 'green', foreignWord: ['akhḍar', 'أَخْضَر'], foreignAudio: arabicAudioGreen},
    { englishWord: 'grey', foreignWord: ['ramādiyy', 'رَمَادِيّ'], foreignAudio: arabicAudioGrey},
    { englishWord: 'orange', foreignWord: ['burtuqāliyy', 'بُرْتُقَاْلِيّ'], foreignAudio: arabicAudioOrange},
    { englishWord: 'pink', foreignWord: ['wardiyy', 'وَرْدِيّ'], foreignAudio: arabicAudioPink},
    { englishWord: 'purple', foreignWord: ['banafsajiyy', 'بَنَفْسَجِيّ'], foreignAudio: arabicAudioPurple},
    { englishWord: 'red', foreignWord: ['aḥmar', 'أَحْمَر'], foreignAudio: arabicAudioRed},
    { englishWord: 'yellow', foreignWord: ['asfar', 'أَصْفَر'], foreignAudio: arabicAudioYellow},
    { englishWord: 'white', foreignWord: ['abyaḍ', 'أَبْيَض'], foreignAudio: arabicAudioWhite},
  ]},
  {name:'Numbers', slugName: 'num', hasOrdering:true, words: [
    { englishWord: 'one', foreignWord: ['waheed', 'وَاحِد'], foreignAudio: '', order:1},
    { englishWord: 'two', foreignWord: ['ithnain', 'اِثْنَان'], foreignAudio: '', order:2},
    { englishWord: 'three', foreignWord: ['thalāthah', 'ثَلَاثَة'], foreignAudio: '', order:3},
    { englishWord: 'four', foreignWord: ['arba\'ah', 'أَرْبَعَة'], foreignAudio: '', order:4},
    { englishWord: 'five', foreignWord: ['khamsah', 'خَمْسَة'], foreignAudio: '', order:5},
    { englishWord: 'six', foreignWord: ['sittah', 'سِتَّة'], foreignAudio: '', order:6},
    { englishWord: 'seven', foreignWord: ['sab\'ah', 'سَبْعَة'], foreignAudio: '', order:7},
    { englishWord: 'eight', foreignWord: ['thamāniyah', 'ثَمَانِيَة'], foreignAudio: '', order:8},
    { englishWord: 'nine', foreignWord: ['tis\'ah', 'تِسْعَة'], foreignAudio: '', order:9},
    { englishWord: 'ten', foreignWord: ['\'asharah', 'عَشَرَة'], foreignAudio: '', order:10},
  ]},
  {name:'Body', slugName: 'bod', hasOrdering:false, words: [
    { englishWord: 'hand', foreignWord: ['yad', 'يَد'], foreignAudio: ''},
    { englishWord: 'head', foreignWord: ['ra\'s', 'رَأْس'], foreignAudio: ''},
    { englishWord: 'heart', foreignWord: ['qalb', 'قَلْب'], foreignAudio: ''},
    { englishWord: 'eye', foreignWord: ['\'ayn', 'عَيْن'], foreignAudio: ''},
    { englishWord: 'knee', foreignWord: ['rukbah', 'رُكْبَة'], foreignAudio: ''},
    { englishWord: 'palm', foreignWord: ['kaf', 'كَف'], foreignAudio: ''},
    { englishWord: 'hungry', foreignWord: ['jaw\'ān', 'جَوْعَان'], foreignAudio: ''},
    { englishWord: 'ear', foreignWord: ['udhun', 'أُذُن'], foreignAudio: ''},
    { englishWord: 'sad', foreignWord: ['ḥazīn', 'حَزِين'], foreignAudio: ''},
    { englishWord: 'joyful', foreignWord: ['farḥān', 'فَرْحَان'], foreignAudio: ''},
    { englishWord: 'thirsty', foreignWord: ['\'aṭshān', 'عَطْشَان'], foreignAudio: ''},
    { englishWord: 'angry', foreignWord: ['ghaḍbān', 'غَضْبَان'], foreignAudio: ''},
    { englishWord: 'chin', foreignWord: ['dhaqn', 'ذَقْن'], foreignAudio: ''},
    { englishWord: 'chest', foreignWord: ['ṣadr', 'صَدْر'], foreignAudio: ''},
    { englishWord: 'nose', foreignWord: ['anf', 'أَنْف'], foreignAudio: ''},
    { englishWord: 'leg', foreignWord: ['rijl', 'رِجْل'], foreignAudio: ''},
    { englishWord: 'one hair', foreignWord: ['sha\'rah', 'شَعْرَة'], foreignAudio: ''},
    { englishWord: 'finger', foreignWord: ['iṣba\'', 'إِصْبَع'], foreignAudio: ''},
    { englishWord: 'lip', foreignWord: ['shafah', 'شَفَة'], foreignAudio: ''},
    { englishWord: 'arm', foreignWord: ['dhirā\'', 'ذِرَاع'], foreignAudio: ''},
    { englishWord: 'foot', foreignWord: ['qadam', 'قَدَم'], foreignAudio: ''},
    { englishWord: 'tooth', foreignWord: ['sinn', 'سِنّ'], foreignAudio: ''},
    { englishWord: 'blood', foreignWord: ['dam', 'دَم'], foreignAudio: ''},
  ]},
  {name:'Adjectives', slugName: 'adj', hasOrdering:false, words: [
    { englishWord: 'a few', foreignWord: ['qalīl', 'قَلِيل'], foreignAudio: ''},
    { englishWord: 'a lot', foreignWord: ['kathīr', 'كَثِير'], foreignAudio: ''},
    { englishWord: 'beautiful', foreignWord: ['jamīl', 'جَمِيل'], foreignAudio: ''},
    { englishWord: 'big', foreignWord: ['kabīr', 'كَبِير'], foreignAudio: ''},
    { englishWord: 'cheap', foreignWord: ['rakhīṣ', 'رَخِيص'], foreignAudio: ''},
    { englishWord: 'cold', foreignWord: ['bārid', 'بَارِد'], foreignAudio: ''},
    { englishWord: 'darkness', foreignWord: ['\'ḍhalām', 'ظَلَام'], foreignAudio: ''},
    { englishWord: 'diligent', foreignWord: ['mujtahid', 'مُجْتَهِد'], foreignAudio: ''},
    { englishWord: 'dry', foreignWord: ['jāff', 'جَافّ'], foreignAudio: ''},
    { englishWord: 'expensive', foreignWord: ['ghālin', 'غالٍ'], foreignAudio: ''},
    { englishWord: 'far away', foreignWord: ['ba\'īd', 'بَعِيد'], foreignAudio: ''},
    { englishWord: 'full', foreignWord: ['mal`ān', 'مَلْآن'], foreignAudio: ''},
    { englishWord: 'heavy', foreignWord: ['thaqīl', 'ثَقِيل'], foreignAudio: ''},
    { englishWord: 'hot', foreignWord: ['ḥārr', 'حَارّ'], foreignAudio: ''},
    { englishWord: 'lazy', foreignWord: ['\'kaslān', 'ذَكِيّ'], foreignAudio: ''},
    { englishWord: 'light', foreignWord: ['khafīf', 'خَفِيف'], foreignAudio: ''},
    { englishWord: 'near', foreignWord: ['qarīb', 'قَرِيب'], foreignAudio: ''},
    { englishWord: 'new', foreignWord: ['jadīd', 'جَدِيد'], foreignAudio: ''},
    { englishWord: 'old', foreignWord: ['qadīm', 'قَدِيم'], foreignAudio: ''},
    { englishWord: 'sharp', foreignWord: ['ḥādd', 'حَادّ'], foreignAudio: ''},
    { englishWord: 'short', foreignWord: ['qaṣīr', 'قَصِير'], foreignAudio: ''},
    { englishWord: 'small', foreignWord: ['ṣaghīr', 'صَغِير'], foreignAudio: ''},
    { englishWord: 'smart', foreignWord: ['dhakiyy', 'ذَكِيّ'], foreignAudio: ''},
    { englishWord: 'tall', foreignWord: ['ṭawīl', 'طَوِيل'], foreignAudio: ''},
  ]},
  {name:'Pronouns', slugName: 'pnn', hasOrdering:true, words: [
    { englishWord: 'I', foreignWord: ['ana', 'أنا'], foreignAudio: '', order:1},
    { englishWord: 'You (masculine)', foreignWord: ['anta', 'انتَ'], foreignAudio: '', order:2},
    { englishWord: 'You (feminine)', foreignWord: ['anti', 'انتِ'], foreignAudio: '', order:3},
    { englishWord: 'He', foreignWord: ['huwa', 'هو'], foreignAudio: '', order:4},
    { englishWord: 'She', foreignWord: ['hiya', 'هي'], foreignAudio: '', order:5},
    { englishWord: 'We', foreignWord: ['nahnou', 'نحن'], foreignAudio: '', order:6},
    { englishWord: 'You (plural masculine)', foreignWord: ['antum', 'أنتم'], foreignAudio: '', order:7},
    { englishWord: 'You (plural feminine)', foreignWord: ['antunna', 'أنتن'], foreignAudio: '', order:8},
    { englishWord: 'They plural masculine)', foreignWord: ['hum', 'هم'], foreignAudio: '', order:9},
    { englishWord: 'They plural feminine)', foreignWord: ['hun', 'هن'], foreignAudio: '', order:10},

  ]},
  // {name:"Root verbs", hasOrdering:false, words: [
  //   { englishWord: "eat", foreignWord: ["kul"], foreignAudio: ""},
  //   { englishWord: "drink", foreignWord: ["sharb"], foreignAudio: ""},
  //   { englishWord: "sleep", foreignWord: ["nam"], foreignAudio: ""},
  //   { englishWord: "love", foreignWord: ["hub"], foreignAudio: ""},
  //   { englishWord: "go", foreignWord: ["thehab"], foreignAudio: ""},
  // ]},
  // {name:"Question Words", hasOrdering:false, words: [

  //   { englishWord: "what", foreignWord: ["shenou"], foreignAudio: ""},
  //   { englishWord: "where", foreignWord: ["wain'"], foreignAudio: ""},
  //   { englishWord: "when", foreignWord: ["miten"], foreignAudio: ""},
  //   { englishWord: "how", foreignWord: ["kef"], foreignAudio: ""},
  //   { englishWord: "why", foreignWord: ["lay"], foreignAudio: ""},
  // ]},
  {name:'Home', slugName: 'hom', hasOrdering:false, words: [
    { englishWord: 'bedroom', foreignWord: ['ghurfatu n-nawm', 'غُرْفَةُ النَّوْم'], foreignAudio: ''},
    { englishWord: 'sofa', foreignWord: ['arīkah', 'أَرِيكَة'], foreignAudio: ''},
    { englishWord: 'toilet', foreignWord: ['mirḥāḍ', 'مِرْحَاض'], foreignAudio: ''},
    { englishWord: 'room', foreignWord: ['ghunrfah', 'غٌرْفَة'], foreignAudio: ''},
    { englishWord: 'chair', foreignWord: ['kursiyy', 'كُرْسِيّ'], foreignAudio: ''},
    { englishWord: 'bed', foreignWord: ['sarīr', 'سَرِير'], foreignAudio: ''},
    { englishWord: 'table', foreignWord: ['ṭāwilah', 'طَاوِلَة'], foreignAudio: ''},
    { englishWord: 'spoon', foreignWord: ['mil\'aqah', 'مِلْعَقَة'], foreignAudio: ''},
    { englishWord: 'bathroom', foreignWord: ['ḥammām', 'حَمَّام'], foreignAudio: ''},
    { englishWord: 'kitchen', foreignWord: ['maṭbakh', 'مَطْبَخ'], foreignAudio: ''},
    { englishWord: 'hairbrush', foreignWord: ['mushṭ', 'مُشط'], foreignAudio: ''},
    { englishWord: 'ladder', foreignWord: ['sullam', 'سُلَّم'], foreignAudio: ''},
    { englishWord: 'lamp', foreignWord: ['miṣbāḥ', 'مِصْباح'], foreignAudio: ''},
    { englishWord: 'closet', foreignWord: ['khizānah malābis', 'خِزانَة مَلَابِس'], foreignAudio: ''},
    { englishWord: 'towel', foreignWord: ['mindīl', 'مِنْديل'], foreignAudio: ''},
    { englishWord: 'toothbrush', foreignWord: ['furshāh', 'فُرْشَاة'], foreignAudio: ''},
    { englishWord: 'sink', foreignWord: ['ḥawḍ', 'حَوْض'], foreignAudio: ''},
    { englishWord: 'mattress', foreignWord: ['firāsh', 'فِراش'], foreignAudio: ''},
    { englishWord: 'wall', foreignWord: ['ḥā`iṭ', 'حائِط'], foreignAudio: ''},
    { englishWord: 'ceiling', foreignWord: ['saqf', 'سَقْف'], foreignAudio: ''},
    { englishWord: 'key', foreignWord: ['miftāḥ', 'مِفْتاح'], foreignAudio: ''},
    { englishWord: 'box', foreignWord: ['ṣundūq', 'صُنْدوق'], foreignAudio: ''},
    { englishWord: 'lock', foreignWord: ['qufl', 'قُفْل'], foreignAudio: ''},
    { englishWord: 'shelf', foreignWord: ['raff', 'رَفّ'], foreignAudio: ''},
    { englishWord: 'floor', foreignWord: ['arḍ', 'أَرْض'], foreignAudio: ''},
    { englishWord: 'blanket', foreignWord: ['baṭṭāniyyah', 'بَطَّانِيَّة'], foreignAudio: ''},
    { englishWord: 'carpet', foreignWord: ['sajjādah', 'سَجَّادَة'], foreignAudio: ''},
    { englishWord: 'tap', foreignWord: ['ṣunbūr', 'صُنْبور'], foreignAudio: ''},
    { englishWord: 'pillow', foreignWord: ['wisādah', 'وِسادَة'], foreignAudio: ''},
    { englishWord: 'living room', foreignWord: ['ghurfatu l-julūs', 'غُرْفَةُ الْجُلُوس'], foreignAudio: ''},
    { englishWord: 'plate', foreignWord: ['\'ṭabaq', 'طَبَق'], foreignAudio: ''},
    { englishWord: 'fork', foreignWord: ['shawkah', 'شَوْكَة'], foreignAudio: ''},{ englishWord: 'hospital', foreignWord: ['mustـshfā', 'مُسْتـشفَى'], foreignAudio: ''},
    { englishWord: 'door', foreignWord: ['bāb', 'بَاب'], foreignAudio: ''},
    { englishWord: 'knife', foreignWord: ['sikkīn', 'سِكِّين'], foreignAudio: ''},
    { englishWord: 'house', foreignWord: ['bayt', 'بَيْت'], foreignAudio: ''},
    { englishWord: 'window', foreignWord: ['nāfidhah', 'نَافِذَة'], foreignAudio: ''},
    { englishWord: 'fridge', foreignWord: ['thallājah', 'ثَلَّاجَة'], foreignAudio: ''},
    { englishWord: 'stove', foreignWord: ['mawqid', 'مَوْقِد'], foreignAudio: ''},
    { englishWord: 'frying pan', foreignWord: ['miqlāh', 'مِقْلَاة'], foreignAudio: ''},
    { englishWord: 'bath tub', foreignWord: ['mighṭas', 'مِغْطَس'], foreignAudio: ''},
    { englishWord: 'bowl', foreignWord: ['inā`', 'إِناء'], foreignAudio: ''},
    { englishWord: 'cleaver', foreignWord: ['sāṭūr', 'ساطور'], foreignAudio: ''},
    { englishWord: 'weighing scale', foreignWord: ['mīzān', 'مِيزان'], foreignAudio: ''},
    { englishWord: 'oven', foreignWord: ['furn', 'فُرْن'], foreignAudio: ''},
    { englishWord: 'clothes hanger', foreignWord: ['shammā\'ah', 'شَمَّاعَة'], foreignAudio: ''},
    { englishWord: 'cleaning products', foreignWord: ['wasā`ilu t-tanḍhīf', 'وَسَائِلُ التَّنْظِيف'], foreignAudio: ''},
    { englishWord: 'pot', foreignWord: ['qidr', 'قِدْر'], foreignAudio: ''},{ englishWord: 'hospital', foreignWord: ['mustـshfā', 'مُسْتـشفَى'], foreignAudio: ''},
    { englishWord: 'cup', foreignWord: ['kūb', 'كوب'], foreignAudio: ''},
    { englishWord: 'glass', foreignWord: ['ka`s', 'كَأْس'], foreignAudio: ''},
    { englishWord: 'fan', foreignWord: ['mirwaḥah', 'مِروَحَة'], foreignAudio: ''},
    { englishWord: 'balcony', foreignWord: ['shurfah', 'شُرْفَة'], foreignAudio: ''},
    { englishWord: 'bottle', foreignWord: ['qārūrah', 'قارورَة'], foreignAudio: ''},
    { englishWord: 'soap', foreignWord: ['ṣābūn', 'صَابُون'], foreignAudio: ''},
    { englishWord: 'toothpaste', foreignWord: ['ma\'jūnu l-asnān', 'مَعْجُونُ الأَسْنَان'], foreignAudio: ''},
    { englishWord: 'iron', foreignWord: ['mikwāh', 'مِكْوَاة'], foreignAudio: ''},
    { englishWord: 'bucket', foreignWord: ['dalw', 'دَلْو'], foreignAudio: ''},
    { englishWord: 'doll', foreignWord: ['dumyah', 'دُمْيَة'], foreignAudio: ''},
    { englishWord: 'aquarium', foreignWord: ['ḥawḍ asmak lilzzaīnah', 'حَوْض أَسمَك لِلزَّينَة'], foreignAudio: ''},
    { englishWord: 'weight (dumbbell)', foreignWord: ['wazn', 'وَزن'], foreignAudio: ''},
    { englishWord: 'mirror', foreignWord: ['mir`āh', 'مِرْآة'], foreignAudio: ''},
    { englishWord: 'washing machine', foreignWord: ['ghassālatu malābis', 'غَسَّالَةُ مَلَابِس'], foreignAudio: ''},
    { englishWord: 'broom', foreignWord: ['miknasah', 'مِكْنَسَة'], foreignAudio: ''},{ englishWord: 'hospital', foreignWord: ['mustـshfā', 'مُسْتـشفَى'], foreignAudio: ''},
    { englishWord: 'curtains', foreignWord: ['sitārah', 'سِتَارَة'], foreignAudio: ''},
    { englishWord: 'furniture', foreignWord: ['athāth', 'أَثَاث'], foreignAudio: ''},
    { englishWord: 'alarm clock', foreignWord: ['munabbih', 'مُنَبِّه'], foreignAudio: ''},
  ]},
  {name:'Buildings', slugName: 'bui', hasOrdering:false, words: [
    { englishWord: 'hospital', foreignWord: ['mustـshfā', 'مُسْتـشفَى'], foreignAudio: ''},
    { englishWord: 'airport', foreignWord: ['maṭār', 'مَطَار'], foreignAudio: ''},
    { englishWord: 'library', foreignWord: ['maktabah', 'مَكْتَبَة'], foreignAudio: ''},
    { englishWord: 'hotel', foreignWord: ['funduq', 'فُنْدُق'], foreignAudio: ''},
    { englishWord: 'restaurant', foreignWord: ['maṭ\'am', 'مَطْعَم'], foreignAudio: ''},
    { englishWord: 'apartment', foreignWord: ['shaqqah', 'شَقَّة'], foreignAudio: ''},
    { englishWord: 'mosque', foreignWord: ['masjid', 'مَسْجِد'], foreignAudio: ''},
    { englishWord: 'gas station', foreignWord: ['maḥaṭṭatu l-binzīn', 'مَحَطَّةُ البِنْزين'], foreignAudio: ''},
    { englishWord: 'company', foreignWord: ['sharikah', 'شَرِكَة'], foreignAudio: ''},
    { englishWord: 'laboratory', foreignWord: ['mukhtabar', 'مُخْتَبَر'], foreignAudio: ''},
    { englishWord: 'court', foreignWord: ['maḥkamah', 'مَحْكَمَة'], foreignAudio: ''},
    { englishWord: 'prison', foreignWord: ['sijn', 'سِجْن'], foreignAudio: ''},
    { englishWord: 'bakery', foreignWord: ['makhbaz', 'مَخْبَز'], foreignAudio: ''},
    { englishWord: 'museum', foreignWord: ['mutḥaf', 'مُتْحَف'], foreignAudio: ''},
    { englishWord: 'building', foreignWord: ['\'imārah', 'عِمارَة'], foreignAudio: ''},
    { englishWord: 'farm', foreignWord: ['mazra\'ah', 'مَزْرَعَة'], foreignAudio: ''},
  ]},
  {name:'Professions',slugName: 'prf', hasOrdering:false, words: [
    { englishWord: 'butcher', foreignWord: ['jazzār', 'جَزَّار'], foreignAudio: ''},
    { englishWord: 'fireman', foreignWord: ['rajulu l-iṭfā`', 'رَجُلُ الإِطْفاء'], foreignAudio: ''},
    { englishWord: 'barber', foreignWord: ['ḥanllāq', 'حًلَّاق'], foreignAudio: ''},
    { englishWord: 'guard', foreignWord: ['ḥāris', 'حارِس'], foreignAudio: ''},
    { englishWord: 'hunter', foreignWord: ['ṣayyād', 'صَيَّاد'], foreignAudio: ''},
    { englishWord: 'captain', foreignWord: ['baḥḥār', 'بَحَّار'], foreignAudio: ''},
    { englishWord: 'president', foreignWord: ['ra`īs', 'رَئيس'], foreignAudio: ''},
    { englishWord: 'farmer', foreignWord: ['fallāḥ', 'فَلّاح'], foreignAudio: ''},
    { englishWord: 'pilot', foreignWord: ['ṭayyār`', 'طَيّار'], foreignAudio: ''},
    { englishWord: 'dentist', foreignWord: ['ṭabību l-asnān', 'طَبيبُ الأَسْنان'], foreignAudio: ''},
    { englishWord: 'police officer', foreignWord: ['shurṭiyy', 'شُرْطِيّ'], foreignAudio: ''},
    { englishWord: 'teacher', foreignWord: ['mudarris', 'مُدَرِّس'], foreignAudio: ''},
    { englishWord: 'carpenter', foreignWord: ['najjār', 'نَجّار'], foreignAudio: ''},
    { englishWord: 'judge', foreignWord: ['qāḍī', 'قاضي'], foreignAudio: ''},
    { englishWord: 'doctor', foreignWord: ['ṭabīb', 'طَبيب'], foreignAudio: ''},
    { englishWord: 'cardiologist', foreignWord: ['ṭabību l-qalb`', 'طَبِيبُ القَلْب'], foreignAudio: ''},
    { englishWord: 'surgeon', foreignWord: ['jarrāḥ', 'جَرَّاح'], foreignAudio: ''},
    { englishWord: 'orthopedist', foreignWord: ['ṭabību l-\'iḍhām', 'طَبيبُ العِظام'], foreignAudio: ''},
    { englishWord: 'nurse', foreignWord: ['mumarriḍ', 'مُمَرِّض'], foreignAudio: ''},
  ]},
  {name:'Hard to Read', slugName: 'htd', hasOrdering:false, words: [
    { englishWord: 'as-sā\'atu l-waḥidah', foreignWord: ['السَّاعَةُ الوَحِدَة',''], foreignAudio: ''},
    { englishWord: 'as-sā\'atu th-thāniyah', foreignWord: ['السَّاعَةُ الثَّانِيَة',''], foreignAudio: ''},
    { englishWord: 'as-sā\'atu th-thālithah', foreignWord: ['السَّاعَةُ الثَّالِثَة',''], foreignAudio: ''},
    { englishWord: 'as-sā\'atu r-rābi\'ah', foreignWord: ['السَّاعَةُ الرَّابِعَة',''], foreignAudio: ''},
    { englishWord: 'as-sā\'atu s-sādisah', foreignWord: ['السَّاعَةُ السَّادِسَة',''], foreignAudio: ''},
    { englishWord: 'as-sā\'atu s-sābi\'ah', foreignWord: ['السَّاعَةُ السَّابِعَة',''], foreignAudio: ''},
    { englishWord: 'as-sā\'atu th-thāminah', foreignWord: ['السَّاعَةُ الثَّامِنَة',''], foreignAudio: ''},
    { englishWord: 'as-sā\'atu t-tāsi\'ah', foreignWord: ['السَّاعَةُ التَّاسِعَة',''], foreignAudio: ''},
    { englishWord: 'as-sā\'atu l-\'āshirah', foreignWord: ['السَّاعَةُ العَاشِرَة',''], foreignAudio: ''},
    { englishWord: 'as-sā\'atu l-ḥādiyata \'ashar', foreignWord: ['السَّاعَةُ الحَادِيَةَ عَشَر',''], foreignAudio: ''},
    { englishWord: 'as-sā\'atu th-thāniyata \'ashar', foreignWord: ['السَّاعَةُ الثَّانِيَةَ عَشَر',''], foreignAudio: ''},
    { englishWord: 'yawmu l-ithnayn', foreignWord: ['يَوْمُ الاِثْنَيْن',''], foreignAudio: ''},
    { englishWord: 'yawmu l-ththulāthā`', foreignWord: ['يَوْمُ الثُّلاثَاْء',''], foreignAudio: ''},
    { englishWord: 'yawmu l-arbi\'ā`', foreignWord: ['يَوْمُ الأَرْبِعاْء',''], foreignAudio: ''},
    { englishWord: 'yawmu l-khamīs', foreignWord: ['يَوْمُ الخَمِيْس',''], foreignAudio: ''},
    { englishWord: 'yawmu l-jum\'ah', foreignWord: ['يَوْمُ الجُمْعَة',''], foreignAudio: ''},
    { englishWord: 'yawmu s-sabt', foreignWord: ['يَوْمُ السَّبْت',''], foreignAudio: ''},
    { englishWord: 'yawmu l-aḥad', foreignWord: ['يَوْمُ الأَحَد',''], foreignAudio: ''},
    { englishWord: 'rabī\'u l-awwal', foreignWord: ['رَبيعُ الأَوَّل',''], foreignAudio: ''},
    { englishWord: 'rabī\'u l-ththānī', foreignWord: ['رَبيعُ الثّاني',''], foreignAudio: ''},
    { englishWord: 'jumāda l-ūla', foreignWord: ['جُمادى الأولى',''], foreignAudio: ''},
    { englishWord: 'jumāda l-thānī', foreignWord: ['جُمادى الثاني',''], foreignAudio: ''},
    { englishWord: 'dhū l-qa\'dah', foreignWord: ['ذُو القَعْدَة',''], foreignAudio: ''},
    { englishWord: 'dhū l-ḥiijjah', foreignWord: ['ذُو الحِِجَّة',''], foreignAudio: ''},
  ]},

]

const spanishTopics: Topic1[] = [
  {name:'Clothes',slugName: 'clo', hasOrdering:false, words: [
    { englishWord: '(the) trousers', foreignWord: ['(los) pantalones'], foreignAudio: ''},
    { englishWord: '(the) sweater', foreignWord: ['(el) suéter'], foreignAudio: ''},
    { englishWord: '(the) underwear', foreignWord: ['(la) ropa interior'], foreignAudio: ''},
    { englishWord: '(the) tie', foreignWord: ['(la) corbata'], foreignAudio: ''},
    { englishWord: '(the) shoes', foreignWord: ['(los) zapatos'], foreignAudio: ''},
    { englishWord: '(the) skirt', foreignWord: ['(la) falda'], foreignAudio: ''},
    { englishWord: '(the) jacket', foreignWord: ['(la) chaqueta'], foreignAudio: ''},
    { englishWord: '(the) hat', foreignWord: ['(el) sombrero'], foreignAudio: ''},
    { englishWord: '(the) scarf', foreignWord: ['(la) bufanda'], foreignAudio: ''},
  ]},
  {name:'Colours', slugName: 'col', hasOrdering:false, words: [
    { englishWord: 'red', foreignWord: ['rojo'], foreignAudio: ''},
    { englishWord: 'blue', foreignWord: ['azul'], foreignAudio: ''},
    { englishWord: 'green', foreignWord: ['verde'], foreignAudio: ''},
    { englishWord: 'orange', foreignWord: ['naranja'], foreignAudio: ''},
    { englishWord: 'brown', foreignWord: ['marron'], foreignAudio: ''},
    { englishWord: 'grey', foreignWord: ['gris'], foreignAudio: ''},
    { englishWord: 'white', foreignWord: ['blanco'], foreignAudio: ''},
    { englishWord: 'black', foreignWord: ['negro'], foreignAudio: ''},
    { englishWord: 'purple', foreignWord: ['morado'], foreignAudio: ''},
    { englishWord: 'pink', foreignWord: ['rosado'], foreignAudio: ''},
  ]},
  {name:'Food', slugName: 'foo', hasOrdering:false, words: [
    { englishWord: '(the) potato', foreignWord: ['(la) papa'], foreignAudio: ''},
    { englishWord: '(the) bread', foreignWord: ['(el) pan'], foreignAudio: ''},
    { englishWord: '(the) meat', foreignWord: ['(la) carne'], foreignAudio: ''},
    { englishWord: '(the) egg', foreignWord: ['(el) huevo'], foreignAudio: ''},
    { englishWord: '(the) strawberry', foreignWord: ['(la) fresa'], foreignAudio: ''},
    { englishWord: '(the) garlic', foreignWord: ['(el) ajo'], foreignAudio: ''},
    { englishWord: '(the) butter', foreignWord: ['(la) manteca'], foreignAudio: ''},
    { englishWord: '(the) fish', foreignWord: ['(el) pescado'], foreignAudio: ''},
    { englishWord: '(the) chicken', foreignWord: ['(el) pollo'], foreignAudio: ''},
    { englishWord: '(the) cheese', foreignWord: ['(el) queso'], foreignAudio: ''}, 
  ]},
  // https://l-lingo.com/free-lessons/en/learn-spanish/numbers-1-10.html go to devtools console, and press audio to get the url 
  // to download the audio.
  {name:'Numbers', slugName: 'num', hasOrdering:true, words: [
    { englishWord: 'one', foreignWord: ['uno'], foreignAudio: spanishAudioOne, order:1},
    { englishWord: 'two', foreignWord: ['dos'], foreignAudio: spanishAudioTwo, order:2},
    { englishWord: 'three', foreignWord: ['tres'], foreignAudio: spanishAudioThree, order:3},
    { englishWord: 'four', foreignWord: ['cuatro'], foreignAudio: spanishAudioFour, order:4},
    { englishWord: 'five', foreignWord: ['cinco'], foreignAudio: spanishAudioFive, order:5},
    { englishWord: 'six', foreignWord: ['seis'], foreignAudio: spanishAudioSix, order:6},
    { englishWord: 'seven', foreignWord: ['siete'], foreignAudio: spanishAudioSeven, order:7},
    { englishWord: 'eight', foreignWord: ['ocho'], foreignAudio: spanishAudioEight, order:8},
    { englishWord: 'nine', foreignWord: ['nueve'], foreignAudio: spanishAudioNine, order:9},
    { englishWord: 'ten', foreignWord: ['diez'], foreignAudio: spanishAudioTen, order:10},
  ]},
  {name:'Verbs', slugName: 'ver', hasOrdering:false, words: [
    // Source of spanish verbs: https://ellaverbs.com/spanish-verbs/
    {
      englishWord: englishVerbs['to call'],
      foreignWord: 
        [
          {
            infinitive: 'llamar',
            foreignWordConjugation: 
                {
                  pastTense:['llamé','llamaste','llamó','llamamos','llamasteis','llamaron'],
                  presentTense: ['llamo','llamas', 'llama','llamamos','llamáis', 'llaman'], 
                  futureTense: ['llamaré','llamarás', 'llamará','llamaremos','llamaréis', 'llamarán']
                }
          }
        ], 
      foreignAudio: ''},
    {
      englishWord: englishVerbs['to study'],
      foreignWord: 
        [
          {
            infinitive: 'estudiar',
            foreignWordConjugation: 
                {
                  pastTense: ['estudié','estudiaste','estudió','estudiamos','estudiasteis','estudiaron'],
                  presentTense: ['estudio','estudias', 'estudia','estudiamos','estudiáis', 'estudian'],
                  futureTense: ['estudiaré','estudiarás', 'estudiará','estudiaremos','estudiareis', 'estudiarán']
                }
          }
        ],
      foreignAudio: ''},
    {
      englishWord: {...englishVerbs['to be'], infinitive: 'to be (1)'} ,
      foreignWord: 
        [
          {
            infinitive: 'ser',
            foreignWordConjugation: 
                {
                  pastTense: ['fui','fueste','fue','fuimos','fuisteis','fueron'],
                  presentTense: ['soy','eres', 'es','somos','sois', 'son'],
                  futureTense: ['seré','serás', 'será','seremos','seréis', 'serán']
                }
          }
        ],
      foreignAudio: ''},
    {
      englishWord: {...englishVerbs['to be'], infinitive: 'to be (2)'} ,
      foreignWord: 
        [
          {
            infinitive: 'estar',
            foreignWordConjugation: 
                {
                  pastTense: ['estuve','estuviste','estuvo','estuvimos','estuvisteis','estuvieron'],
                  presentTense: ['estoy','estás', 'está','estamos','estáis', 'están'],
                  futureTense: ['estaré','estarás', 'estará','estaremos','estaréis', 'estarán']
                }
          }
        ],
      foreignAudio: ''},
    {
      englishWord: {...englishVerbs['to have'], infinitive: 'to have (1)'} ,
      foreignWord: 
        [
          {
            infinitive: 'tener',
            foreignWordConjugation: 
                {
                  pastTense: ['tuve','tuviste','tuvo','tuvimos','tuvisteis','tuvieron'],
                  presentTense: ['tengo','tienes', 'tiene','tenemos','tenéis', 'tienen'],
                  futureTense: ['tendré','tendrás','tendrá','tendremos','tendréis', 'tendrán']
                }
          }
        ],
      foreignAudio: ''},
    {
      englishWord: englishVerbs['to do'],
      foreignWord: 
        [
          {
            infinitive: 'hacer',
            foreignWordConjugation: 
                {
                  pastTense: ['hice','hiciste','hizo','hicimos','hicisteis','hicieron'],
                  presentTense: ['hago','haces', 'hace','hacemos','hacéis', 'hacen'],
                  futureTense: ['haré','harás','hará','haremos','haréis', 'harán']
                }
          }
        ],
      foreignAudio: ''},
    {
      englishWord: englishVerbs['to go'],
      foreignWord: 
        [
          {
            infinitive: 'ir',
            foreignWordConjugation: 
                {
                  pastTense: ['fui','fuiste','fue','fuimos','fuisteis','fueron'],
                  presentTense: ['voy','vas', 'va','vamos','vais', 'van'],
                  futureTense: ['iré','irás','irá','iremos','iréis', 'irán']
                }
          }
        ],
      foreignAudio: ''},
    {
      englishWord: englishVerbs['to be able to'],
      foreignWord: 
        [
          {
            infinitive: 'poder',
            foreignWordConjugation: 
                {
                  pastTense: ['pude','pudiste','pudo','pudimos','pudisteis','pudieron'],
                  presentTense: ['puedo','puedes', 'puede','podemos','podéis', 'pueden'],
                  futureTense: ['podré','podrás','podrá','podremos','podréis', 'podrán']
                }
          }
        ],
      foreignAudio: ''},
    {
      englishWord: englishVerbs['to know'],
      foreignWord: 
        [
          {
            infinitive: 'saber',
            foreignWordConjugation: 
                {
                  pastTense: ['supe','supiste','supo','supimos','supisteis','supieron'],
                  presentTense: ['sé','sabes', 'sabe','sabemos','sabéis', 'saben'],
                  futureTense: ['sabré','sabrás','sabrá','sabremos','sabréis', 'sabrán']
                }
          }
        ],
      foreignAudio: ''},
    {
      englishWord: englishVerbs['to put'],
      foreignWord: 
        [
          {
            infinitive: 'poner',
            foreignWordConjugation: 
                {
                  pastTense: ['puse','pusiste','puso','pusimos','pusisteis','pusieron'],
                  presentTense: ['pongo','pones', 'pone','ponemos','ponéis', 'ponen'],
                  futureTense: ['pondré','pondrás','pondrá','pondremos','pondréis', 'sabrán']
                }
          }
        ],
      foreignAudio: ''},
    {
      englishWord: {...englishVerbs['to have'], infinitive: 'to have (2)'} ,
      foreignWord: 
        [
          {
            infinitive: 'haber',
            foreignWordConjugation: 
                {
                  pastTense: ['hube','hubiste','hubo','hubimos','hubisteis','hubieron'],
                  presentTense: ['he','has', 'ha','hemos','habéis', 'han'],
                  futureTense: ['habré','habrás','habrá','habremos','habréis', 'habrán']
                }
          }
        ],
      foreignAudio: ''},
    {
      englishWord: englishVerbs['to say'],
      foreignWord: 
        [
          {
            infinitive: 'decir',
            foreignWordConjugation: 
                {
                  pastTense: ['dije','dijiste','dijo','dijimos','dijisteis','dijeron'],
                  presentTense: ['digo','dices', 'dice','decimos','decís', 'dicen'],
                  futureTense: ['diré','dirás','dirá','diremos','diréis', 'dirán']
                }
          }
        ],
      foreignAudio: ''},
    {
      englishWord: englishVerbs['to want'],
      foreignWord: 
        [
          {
            infinitive: 'querer',
            foreignWordConjugation: 
                {
                  pastTense: ['dije','dijiste','dijo','dijimos','dijisteis','dijeron'],
                  presentTense: ['quiero','quieres', 'quiere','queremos','queréis', 'quieren'],
                  futureTense: ['querré','querrás','querrá','querremos','querréis', 'querrán']
                }
          }
        ],
      foreignAudio: ''},
    {
      englishWord: englishVerbs['to speak'],
      foreignWord: 
        [
          {
            infinitive: 'hablar',
            foreignWordConjugation: 
                {
                  pastTense: ['hablé','hablaste','habló','hablamos','hablasteis','hablaron'],
                  presentTense: ['hablo','hablas', 'habla','hablamos','habláis', 'hablan'],
                  futureTense: ['hablaré','hablarás','hablará','hablaremos','hablaréis', 'hablarán']
                }
          }
        ],
      foreignAudio: ''},
    {
      englishWord: englishVerbs['to give'],
      foreignWord: 
        [
          {
            infinitive: 'dar',
            foreignWordConjugation: 
                {
                  pastTense: ['di','diste','dio','dimos','disteis','dieron'],
                  presentTense: ['doy','das', 'da','damos','dais', 'dan'],
                  futureTense: ['daré','darás','dará','daremos','daréis', 'darán']
                }
          }
        ],
      foreignAudio: ''},
    {
      englishWord: englishVerbs['to see'],
      foreignWord: 
        [
          {
            infinitive: 'ver',
            foreignWordConjugation: 
                {
                  pastTense: ['vi','viste','vio','vimos','visteis','vieron'],
                  presentTense: ['veo','ves', 've','vemos','veis', 'ven'],
                  futureTense: ['veré','verás','verá','veremos','veréis', 'verán']
                }
          }
        ],
      foreignAudio: ''},
    {
      englishWord: englishVerbs['to eat'],
      foreignWord: 
        [
          {
            infinitive: 'comer',
            foreignWordConjugation: 
                {
                  pastTense: ['comí','comiste','comió','comimos','comisteis','comieron'],
                  presentTense: ['como','comes', 'come','comemos','coméis', 'comen'],
                  futureTense: ['comeré','comerás','comerá','comeremos','comeréis', 'comerán']
                }
          }
        ],
      foreignAudio: ''},
    {
      englishWord: englishVerbs['to drink'],
      foreignWord: 
          [
            {
              infinitive: 'tomar',
              foreignWordConjugation: 
                  {
                    pastTense: ['tomé','tomaste','tomó','tomamos','tomasteis','tomaron'],
                    presentTense: ['tomo','tomas', 'toma','tomamos','tomáis', 'toman'],
                    futureTense: ['tomaré','tomarás','tomará','tomaremos','tomaréis', 'tomarán']
                  }
            }
          ],
      foreignAudio: ''},
    {
      englishWord: englishVerbs['to live'],
      foreignWord: 
            [
              {
                infinitive: 'vivir',
                foreignWordConjugation: 
                    {
                      pastTense: ['viví','viviste','vivió','vivimos','vivisteis','vivieron'],
                      presentTense: ['vivo','vives', 'vive','vivimos','vivís', 'viven'],
                      futureTense: ['viviré','vivirás','vivirá','viviremos','viviréis', 'vivirán']
                    }
              }
            ],
      foreignAudio: ''},
    {
      englishWord: englishVerbs['to need'],
      foreignWord: 
              [
                {
                  infinitive: 'necesitar',
                  foreignWordConjugation: 
                      {
                        pastTense: ['necesité','necesitaste','necesitó','necesitamos','necesitasteis','necesitaron'],
                        presentTense: ['necesito','necesitas', 'necesita','necesitamos','necesitáis', 'necesitan'],
                        futureTense: ['necesitaré','necesitarás','necesitará','necesitaremos','necesitaréis', 'necesitarán']
                      }
                }
              ],
      foreignAudio: ''},
  ]},
  {name:'Pronouns', slugName: 'pro', hasOrdering:true, words: [
    { englishWord: 'I', foreignWord: ['yo'], foreignAudio: '', order:1},
    { englishWord: 'you', foreignWord: ['tu'], foreignAudio: '', order:2},
    { englishWord: 'he', foreignWord: ['el'], foreignAudio: '', order:3},
    { englishWord: 'she', foreignWord: ['ella'], foreignAudio: '', order:4},
    { englishWord: 'we', foreignWord: ['nosotros'], foreignAudio: '', order:5},
    { englishWord: 'you (p)', foreignWord: ['vosotros'], foreignAudio: '', order:6},
    { englishWord: 'they', foreignWord: ['ellos/ellas'], foreignAudio: '', order:7},
  ]},
  {name:'Body', slugName: 'bod', hasOrdering:false, words: [
    { englishWord: '(the) hand', foreignWord: ['(la) mano'], foreignAudio: ''},
    { englishWord: '(the) head', foreignWord: ['(la) cabeza'], foreignAudio: ''},
    { englishWord: '(the) hair', foreignWord: ['(el) pelo'], foreignAudio: ''},
    { englishWord: '(the) neck', foreignWord: ['(el) cuello'], foreignAudio: ''},
    { englishWord: '(the) chest', foreignWord: ['(el) pecho'], foreignAudio: ''},
    { englishWord: '(the) arm', foreignWord: ['(el) brazo'], foreignAudio: ''},
    { englishWord: '(the) finger', foreignWord: ['(el) dedo'], foreignAudio: ''},
    { englishWord: '(the) foot', foreignWord: ['(el) pie'], foreignAudio: ''},
    { englishWord: '(the) eye', foreignWord: ['(el) ojo'], foreignAudio: ''},
    { englishWord: '(the) face', foreignWord: ['(la) cara'], foreignAudio: ''},
    { englishWord: '(the) nose', foreignWord: ['(la) nariz'], foreignAudio: ''},
    { englishWord: '(the) mouth', foreignWord: ['(la) boca'], foreignAudio: ''},
    { englishWord: '(the) leg', foreignWord: ['(la) pierna'], foreignAudio: ''},
    { englishWord: '(the) knee', foreignWord: ['(la) rodilla'], foreignAudio: ''},

  ]},
  {name:'Locations', slugName: 'loc', hasOrdering:false, words: [
    { englishWord: '(the) airport', foreignWord: ['(el) aeropuerto'], foreignAudio: ''},
    { englishWord: '(the) bakery', foreignWord: ['(la) panadería'], foreignAudio: ''},
    { englishWord: '(the) bank', foreignWord: ['(el) banco'], foreignAudio: ''},
    { englishWord: '(the) bridge', foreignWord: ['(el) puente'], foreignAudio: ''},
    { englishWord: '(the) city', foreignWord: ['(la) ciudad'], foreignAudio: ''},
    { englishWord: '(the) factory', foreignWord: ['(la) fábrica'], foreignAudio: ''},
    { englishWord: '(the) farm', foreignWord: ['(la) granja'], foreignAudio: ''},
    { englishWord: '(the) gym', foreignWord: ['(el) gimnasio'], foreignAudio: ''},
    { englishWord: '(the) hospital', foreignWord: ['(el) hospital'], foreignAudio: ''},
    { englishWord: '(the) library', foreignWord: ['(la) biblioteca'], foreignAudio: ''},
    { englishWord: '(the) museum', foreignWord: ['(el) museo'], foreignAudio: ''},
    { englishWord: '(the) office', foreignWord: ['(la) oficina'], foreignAudio: ''},
    { englishWord: '(the) park', foreignWord: ['(el) parque'], foreignAudio: ''},
    { englishWord: '(the) swimming pool', foreignWord: ['(la) piscina'], foreignAudio: ''},
    { englishWord: '(the) restaurant', foreignWord: ['(el) restaurante'], foreignAudio: ''},
    { englishWord: '(the) school', foreignWord: ['(la) escuela'], foreignAudio: ''},
    { englishWord: '(the) street', foreignWord: ['(la) calle'], foreignAudio: ''},
    { englishWord: '(the) university', foreignWord: ['(la) universidad'], foreignAudio: ''},

  ]},
  {name:'Home', slugName: 'hom', hasOrdering:false, words: [
    { englishWord: '(the) window', foreignWord: ['(la) ventana'], foreignAudio: ''},
    { englishWord: '(the) bedroom', foreignWord: ['(el) dormitorio'], foreignAudio: ''},
    { englishWord: '(the) kitchen', foreignWord: ['(la) cocina'], foreignAudio: ''},
    { englishWord: '(the) dining room', foreignWord: ['(el) comedor'], foreignAudio: ''},
    { englishWord: '(the) bathroom', foreignWord: ['(el) cuarto de baño'], foreignAudio: ''},
    { englishWord: '(the) garage', foreignWord: ['(el) garaje'], foreignAudio: ''},
    { englishWord: '(the) room', foreignWord: ['(el) habitación'], foreignAudio: ''},
    { englishWord: '(the) garden', foreignWord: ['(el) jardín'], foreignAudio: ''},
    { englishWord: '(the) living room', foreignWord: ['(el) salón'], foreignAudio: ''},
  ]},
  {name:'Question words', slugName: 'que', hasOrdering:false, words: [
    { englishWord: 'why', foreignWord: ['por qué'], foreignAudio: ''},
    { englishWord: 'what', foreignWord: ['qué'], foreignAudio: ''},
    { englishWord: 'where', foreignWord: ['dónde'], foreignAudio: ''},
    { englishWord: 'how', foreignWord: ['cómo'], foreignAudio: ''},
    { englishWord: 'when', foreignWord: ['cuando'], foreignAudio: ''},
  ]},
  {name:'Conjuctions', slugName: 'con', hasOrdering:false, words: [
    { englishWord: 'and', foreignWord: ['y'], foreignAudio: ''},
    { englishWord: 'but', foreignWord: ['pero'], foreignAudio: ''},
    { englishWord: 'or', foreignWord: ['o'], foreignAudio: ''},
    { englishWord: 'nor', foreignWord: ['ni'], foreignAudio: ''},
    { englishWord: 'for', foreignWord: ['por/para'], foreignAudio: ''},
    { englishWord: 'so', foreignWord: ['así que'], foreignAudio: ''},
    { englishWord: 'yet', foreignWord: ['todavía'], foreignAudio: ''},
    { englishWord: 'not yet', foreignWord: ['aún'], foreignAudio: ''},
    { englishWord: 'moreover', foreignWord: ['además'], foreignAudio: ''},
    { englishWord: 'even though', foreignWord: ['aunque'], foreignAudio: ''},
    { englishWord: 'nevertheless', foreignWord: ['sin embargo'], foreignAudio: ''},

  ]},
  {name:'Adjectives', slugName: 'adj', hasOrdering:false, words: [
    // https://www.fluentu.com/blog/spanish/common-spanish-adjectives/#toc_2
    { englishWord: 'open', foreignWord: ['abierto'], foreignAudio: spanishAudioOpen},
    { englishWord: 'boring', foreignWord: ['aburrido'], foreignAudio: spanishAudioBoring},
    { englishWord: 'tall', foreignWord: ['alto'], foreignAudio: spanishAudioTall},
    { englishWord: 'short', foreignWord: ['bajo'], foreignAudio: spanishAudioShort},
    { englishWord: 'cheap', foreignWord: ['barato'], foreignAudio: spanishAudioCheap},
    { englishWord: 'good', foreignWord: ['bueno'], foreignAudio: spanishAudioGood},
    { englishWord: 'hot', foreignWord: ['caluroso'], foreignAudio: spanishAudioHot},
    { englishWord: 'tired', foreignWord: ['cansado'], foreignAudio: spanishAudioTired},
    { englishWord: 'expensive', foreignWord: ['caro'], foreignAudio: spanishAudioExpensive},
    { englishWord: 'closed', foreignWord: ['cerrado'], foreignAudio: spanishAudioClosed},
    { englishWord: 'complicated', foreignWord: ['complicado'], foreignAudio: spanishAudioComplicated},
    { englishWord: 'weak', foreignWord: ['débil'], foreignAudio: spanishAudioWeak},
    { englishWord: 'thin', foreignWord: ['delgado'], foreignAudio: spanishAudioThin},
    { englishWord: 'delicious', foreignWord: ['delicioso'], foreignAudio: spanishAudioDelicious},
    { englishWord: 'awake', foreignWord: ['despierto'], foreignAudio: spanishAudioAwake},
    { englishWord: 'fun', foreignWord: ['divertido'], foreignAudio: spanishAudioFun},
    { englishWord: 'sweet', foreignWord: ['dulce'], foreignAudio: spanishAudioSweet},
    { englishWord: 'sick', foreignWord: ['enfermo'], foreignAudio: spanishAudioSick},
    { englishWord: 'happy', foreignWord: ['feliz'], foreignAudio: spanishAudioHappy},
    { englishWord: 'ugly', foreignWord: ['feo'], foreignAudio: spanishAudioUgly},
    { englishWord: 'cold', foreignWord: ['frío'], foreignAudio: spanishAudioCold},
    { englishWord: 'strong', foreignWord: ['fuerte'], foreignAudio: spanishAudioStrong},
    { englishWord: 'fat', foreignWord: ['gordo'], foreignAudio: spanishAudioFat},
    { englishWord: 'big', foreignWord: ['grande'], foreignAudio: spanishAudioBig},
    { englishWord: 'unfair', foreignWord: ['injusto'], foreignAudio: spanishAudioUnfair},
    { englishWord: 'intelligent', foreignWord: ['inteligente'], foreignAudio: spanishAudioIntelligent},
    { englishWord: 'fair', foreignWord: ['justo'], foreignAudio: spanishAudioFair},
    { englishWord: 'slow', foreignWord: ['lento'], foreignAudio: spanishAudioSlow},
    { englishWord: 'clean', foreignWord: ['limpio'], foreignAudio: spanishAudioClean},
    { englishWord: 'pretty', foreignWord: ['lindo'], foreignAudio: spanishAudioPretty},
    { englishWord: 'full', foreignWord: ['lleno'], foreignAudio: spanishAudioFull},
    { englishWord: 'crazy', foreignWord: ['loco'], foreignAudio: spanishAudioCrazy},
    { englishWord: 'bad', foreignWord: ['malo'], foreignAudio: spanishAudioBad},
    { englishWord: 'wet', foreignWord: ['mojado'], foreignAudio: spanishAudioWet},
    { englishWord: 'new', foreignWord: ['nuevo'], foreignAudio: spanishAudioNew},
    { englishWord: 'small', foreignWord: ['pequeño'], foreignAudio: spanishAudioSmall},
    { englishWord: 'poor', foreignWord: ['pobre'], foreignAudio: spanishAudioPoor},
    { englishWord: 'fast', foreignWord: ['rápido'], foreignAudio: spanishAudioFast},
    { englishWord: 'disgusting', foreignWord: ['repugnante'], foreignAudio: spanishAudioDisgusting},
    { englishWord: 'rich', foreignWord: ['rico'], foreignAudio: spanishAudioRich},
    { englishWord: 'savory/salty', foreignWord: ['salado'], foreignAudio: spanishAudioSalty},
    { englishWord: 'healthy', foreignWord: ['sano'], foreignAudio: spanishAudioHealthy},
    { englishWord: 'dry', foreignWord: ['seco'], foreignAudio: spanishAudioDry},
    { englishWord: 'simple', foreignWord: ['simple'], foreignAudio: spanishAudioSimple},
    { englishWord: 'dirty', foreignWord: ['sucio'], foreignAudio: spanishAudioDirty},
    { englishWord: 'stupid', foreignWord: ['tonto'], foreignAudio: spanishAudioStupid},
    { englishWord: 'calm/tranquil', foreignWord: ['tranquilo'], foreignAudio: spanishAudioCalm},
    { englishWord: 'sad', foreignWord: ['triste'], foreignAudio: spanishAudioSad},
    { englishWord: 'empty', foreignWord: ['vacío'], foreignAudio: spanishAudioEmpty},
    { englishWord: 'old', foreignWord: ['viejo'], foreignAudio: spanishAudioOld},
  ]},

]

const spanishPronouns: string[] = ['Yo','Tu','El/Ella','Nosotros', 'Vosotros', 'Ellos/Ellas']

const frenchTopics: Topic1[] = [
  {name:'Numbers', slugName: 'num', hasOrdering:true, words: [
    { englishWord: 'one', foreignWord: ['un'], foreignAudio: '', order:1},
    { englishWord: 'two', foreignWord: ['deux'], foreignAudio: '', order:2},
    { englishWord: 'three', foreignWord: ['trois'], foreignAudio: '', order:3},
    { englishWord: 'four', foreignWord: ['quatre'], foreignAudio: '', order:4},
    { englishWord: 'five', foreignWord: ['cinq'], foreignAudio: '', order:5},
    { englishWord: 'six', foreignWord: ['six'], foreignAudio: '', order:6},
    { englishWord: 'seven', foreignWord: ['sept'], foreignAudio: '', order:7},
    { englishWord: 'eight', foreignWord: ['huit'], foreignAudio: '', order:8},
    { englishWord: 'nine', foreignWord: ['neuf'], foreignAudio: '', order:9},
    { englishWord: 'ten', foreignWord: ['dix'], foreignAudio: '', order:10},
  ]},
]

const italianTopics: Topic1[] = [
  {name:'Numbers', slugName: 'num', hasOrdering:true, words: [
    { englishWord: 'one', foreignWord: ['uno'], foreignAudio: '', order:1},
    { englishWord: 'two', foreignWord: ['due'], foreignAudio: '', order:2},
    { englishWord: 'three', foreignWord: ['tre'], foreignAudio: '', order:3},
    { englishWord: 'four', foreignWord: ['quattro'], foreignAudio: '', order:4},
    { englishWord: 'five', foreignWord: ['cinque'], foreignAudio: '', order:5},
    { englishWord: 'six', foreignWord: ['sei'], foreignAudio: '', order:6},
    { englishWord: 'seven', foreignWord: ['sette'], foreignAudio: '', order:7},
    { englishWord: 'eight', foreignWord: ['otto'], foreignAudio: '', order:8},
    { englishWord: 'nine', foreignWord: ['nove'], foreignAudio: '', order:9},
    { englishWord: 'ten', foreignWord: ['dieci'], foreignAudio: '', order:10},
  ]},
]
const germanTopics: Topic1[] = [
  {name:'Numbers', slugName: 'num', hasOrdering:true, words: [
    { englishWord: 'one', foreignWord: ['eins'], foreignAudio: '', order:1},
    { englishWord: 'two', foreignWord: ['zwei'], foreignAudio: '', order:2},
    { englishWord: 'three', foreignWord: ['drei'], foreignAudio: '', order:3},
    { englishWord: 'four', foreignWord: ['vier'], foreignAudio: '', order:4},
    { englishWord: 'five', foreignWord: ['fünf'], foreignAudio: '', order:5},
    { englishWord: 'six', foreignWord: ['sechs'], foreignAudio: '', order:6},
    { englishWord: 'seven', foreignWord: ['sieben'], foreignAudio: '', order:7},
    { englishWord: 'eight', foreignWord: ['acht'], foreignAudio: '', order:8},
    { englishWord: 'nine', foreignWord: ['neun'], foreignAudio: '', order:9},
    { englishWord: 'ten', foreignWord: ['zehn'], foreignAudio: '', order:10},
  ]},
]

const japaneseTopics: Topic3[] = [
  {name:'Hiragana alphabet', slugName: 'hir', hasOrdering:true, isAlphabet: true, words: [
    { englishWord: 'a', foreignWord: ['あ','',''], foreignAudio: '', order: 1 },
    { englishWord: 'i', foreignWord: ['い','',''], foreignAudio: '', order: 2 },
    { englishWord: 'u', foreignWord: ['う','',''], foreignAudio: '', order: 3 },
    { englishWord: 'e', foreignWord: ['え','',''], foreignAudio: '', order: 4 },
    { englishWord: 'o', foreignWord: ['お','',''], foreignAudio: '', order: 5 },
    { englishWord: 'ka', foreignWord: ['か','',''], foreignAudio: '', order: 6 },
    { englishWord: 'ki', foreignWord: ['き','',''], foreignAudio: '', order: 7 },
    { englishWord: 'ku', foreignWord: ['く','',''], foreignAudio: '', order: 8 },
    { englishWord: 'ke', foreignWord: ['け','',''], foreignAudio: '', order: 9 },
    { englishWord: 'ko', foreignWord: ['こ','',''], foreignAudio: '', order: 10 },
    { englishWord: 'sa', foreignWord: ['さ','',''], foreignAudio: '', order: 11 },
    { englishWord: 'shi', foreignWord: ['し','',''], foreignAudio: '', order: 12 },
    { englishWord: 'su', foreignWord: ['す','',''], foreignAudio: '', order: 13 },
    { englishWord: 'se', foreignWord: ['せ','',''], foreignAudio: '', order: 14 },
    { englishWord: 'so', foreignWord: ['そ','',''], foreignAudio: '', order: 15 },
    { englishWord: 'ta', foreignWord: ['た','',''], foreignAudio: '', order: 16 },
    { englishWord: 'chi', foreignWord: ['ち','',''], foreignAudio: '', order: 17 },
    { englishWord: 'tsu', foreignWord: ['つ','',''], foreignAudio: '', order: 18 },
    { englishWord: 'te', foreignWord: ['て','',''], foreignAudio: '', order: 19 },
    { englishWord: 'to', foreignWord: ['と','',''], foreignAudio: '', order: 20 },
    { englishWord: 'na', foreignWord: ['な','',''], foreignAudio: '', order: 21 },
    { englishWord: 'ni', foreignWord: ['に','',''], foreignAudio: '', order: 22 },
    { englishWord: 'nu', foreignWord: ['ぬ','',''], foreignAudio: '', order: 23 },
    { englishWord: 'ne', foreignWord: ['ね','',''], foreignAudio: '', order: 24 },
    { englishWord: 'no', foreignWord: ['の','',''], foreignAudio: '', order: 25 },
    { englishWord: 'ha', foreignWord: ['は','',''], foreignAudio: '', order: 26 },
    { englishWord: 'hi', foreignWord: ['ひ','',''], foreignAudio: '', order: 27 },
    { englishWord: 'fu', foreignWord: ['ふ','',''], foreignAudio: '', order: 28 },
    { englishWord: 'he', foreignWord: ['へ','',''], foreignAudio: '', order: 29 },
    { englishWord: 'ho', foreignWord: ['ほ','',''], foreignAudio: '', order: 30 },
    { englishWord: 'ma', foreignWord: ['ま','',''], foreignAudio: '', order: 31 },
    { englishWord: 'mi', foreignWord: ['み','',''], foreignAudio: '', order: 32 },
    { englishWord: 'mu', foreignWord: ['む','',''], foreignAudio: '', order: 33 },
    { englishWord: 'me', foreignWord: ['め','',''], foreignAudio: '', order: 34 },
    { englishWord: 'mo', foreignWord: ['も','',''], foreignAudio: '', order: 35 },
    { englishWord: 'ya', foreignWord: ['や','',''], foreignAudio: '', order: 36 },
    { englishWord: 'yu', foreignWord: ['ゆ','',''], foreignAudio: '', order: 37 },
    { englishWord: 'yo', foreignWord: ['よ','',''], foreignAudio: '', order: 38 },
    { englishWord: 'ra', foreignWord: ['ら','',''], foreignAudio: '', order: 39 },
    { englishWord: 'ri', foreignWord: ['り','',''], foreignAudio: '', order: 40 },
    { englishWord: 'ru', foreignWord: ['る','',''], foreignAudio: '', order: 41 },
    { englishWord: 're', foreignWord: ['れ','',''], foreignAudio: '', order: 42 },
    { englishWord: 'ro', foreignWord: ['ろ','',''], foreignAudio: '', order: 43 },
    { englishWord: 'wa', foreignWord: ['わ','',''], foreignAudio: '', order: 44 },
    { englishWord: 'wo', foreignWord: ['を','',''], foreignAudio: '', order: 45 },
    { englishWord: 'n', foreignWord: ['ん','',''], foreignAudio: '', order: 46 },
  ]},
  {name:'Katakana alphabet', slugName: 'kat', hasOrdering:true, isAlphabet: true, words: [
    { englishWord: 'a', foreignWord: ['ア','',''], foreignAudio: '', order: 1 },
    { englishWord: 'u', foreignWord: ['ウ','',''], foreignAudio: '', order: 2 },
    { englishWord: 'e', foreignWord: ['エ','',''], foreignAudio: '', order: 3 },
    { englishWord: 'o', foreignWord: ['オ','',''], foreignAudio: '', order: 4 },
    { englishWord: 'ka', foreignWord: ['カ','',''], foreignAudio: '', order: 5 },
    { englishWord: 'ki', foreignWord: ['キ','',''], foreignAudio: '', order: 6 },
    { englishWord: 'ku', foreignWord: ['ク','',''], foreignAudio: '', order: 7 },
    { englishWord: 'ke', foreignWord: ['ケ','',''], foreignAudio: '', order: 8 },
    { englishWord: 'ko', foreignWord: ['コ','',''], foreignAudio: '', order: 9 },
    { englishWord: 'sa', foreignWord: ['サ','',''], foreignAudio: '', order: 10 },
    { englishWord: 'shi', foreignWord: ['シ','',''], foreignAudio: '', order: 11 },
    { englishWord: 'su', foreignWord: ['ス','',''], foreignAudio: '', order: 12 },
    { englishWord: 'se', foreignWord: ['セ','',''], foreignAudio: '', order: 13 },
    { englishWord: 'so', foreignWord: ['ソ','',''], foreignAudio: '', order: 14 },
    { englishWord: 'ta', foreignWord: ['タ','',''], foreignAudio: '', order: 15 },
    { englishWord: 'chi', foreignWord: ['チ','',''], foreignAudio: '', order: 16 },
    { englishWord: 'tsu', foreignWord: ['ツ','',''], foreignAudio: '', order: 17 },
    { englishWord: 'te', foreignWord: ['テ','',''], foreignAudio: '', order: 18 },
    { englishWord: 'to', foreignWord: ['ト','',''], foreignAudio: '', order: 19 },
    { englishWord: 'na', foreignWord: ['ナ','',''], foreignAudio: '', order: 20 },
    { englishWord: 'ni', foreignWord: ['ニ','',''], foreignAudio: '', order: 21 },
    { englishWord: 'nu', foreignWord: ['ヌ','',''], foreignAudio: '', order: 22 },
    { englishWord: 'ne', foreignWord: ['ネ','',''], foreignAudio: '', order: 23 },
    { englishWord: 'no', foreignWord: ['ノ','',''], foreignAudio: '', order: 24 },
    { englishWord: 'ha', foreignWord: ['ハ','',''], foreignAudio: '', order: 25 },
    { englishWord: 'hi', foreignWord: ['ヒ','',''], foreignAudio: '', order: 26 },
    { englishWord: 'fu', foreignWord: ['フ','',''], foreignAudio: '', order: 27 },
    { englishWord: 'he', foreignWord: ['ヘ','',''], foreignAudio: '', order: 28 },
    { englishWord: 'ho', foreignWord: ['ホ','',''], foreignAudio: '', order: 29 },
    { englishWord: 'ma', foreignWord: ['マ','',''], foreignAudio: '', order: 30 },
    { englishWord: 'mi', foreignWord: ['ミ','',''], foreignAudio: '', order: 31 },
    { englishWord: 'mu', foreignWord: ['ム','',''], foreignAudio: '', order: 32 },
    { englishWord: 'me', foreignWord: ['メ','',''], foreignAudio: '', order: 33 },
    { englishWord: 'mo', foreignWord: ['モ','',''], foreignAudio: '', order: 34 },
    { englishWord: 'ya', foreignWord: ['ヤ','',''], foreignAudio: '', order: 35 },
    { englishWord: 'yu', foreignWord: ['ユ','',''], foreignAudio: '', order: 36 },
    { englishWord: 'yo', foreignWord: ['ヨ','',''], foreignAudio: '', order: 37 },
    { englishWord: 'ra', foreignWord: ['ラ','',''], foreignAudio: '', order: 38 },
    { englishWord: 'ri', foreignWord: ['リ','',''], foreignAudio: '', order: 39 },
    { englishWord: 'ru', foreignWord: ['ル','',''], foreignAudio: '', order: 40 },
    { englishWord: 're', foreignWord: ['レ','',''], foreignAudio: '', order: 41 },
    { englishWord: 'ro', foreignWord: ['ロ','',''], foreignAudio: '', order: 42 },
    { englishWord: 'wa', foreignWord: ['ワ','',''], foreignAudio: '', order: 43 },
    { englishWord: 'wo', foreignWord: ['ヲ','',''], foreignAudio: '', order: 44 },
    { englishWord: 'n', foreignWord: ['ン','',''], foreignAudio: '', order: 45 },
  ]},
  {name:'Numbers',slugName: 'num', hasOrdering:true, words: [
    { englishWord: 'one', foreignWord: ['ichi', 'いち','一'], foreignAudio: '', order:1},
    { englishWord: 'two', foreignWord: ['ni', 'に','二'], foreignAudio: '', order:2},
    { englishWord: 'three',foreignWord: ['san', 'さん','三'], foreignAudio: '', order:3},
    { englishWord: 'four', foreignWord: ['shi/yon', 'し、よん','四'], foreignAudio: '', order:4},
    { englishWord: 'five', foreignWord: ['go', 'ご','五'], foreignAudio: '', order:5},
    { englishWord: 'six', foreignWord: ['roku', 'ろく','六'], foreignAudio: '', order:6},
    { englishWord: 'seven', foreignWord: ['shichi,nana', 'しち、なな','七'], foreignAudio: '', order:7},
    { englishWord: 'eight', foreignWord: ['hachi', 'はち','八'], foreignAudio: '', order:8},
    { englishWord: 'nine', foreignWord: ['ku,kyuu', 'く、きゅう','九'], foreignAudio: '', order:9},
    { englishWord: 'ten', foreignWord: ['juu', 'じゅう','十'], foreignAudio: '', order:10},
  ]},
]

const mandarinTopics: Topic2[] = [
  {name:'Numbers', slugName: 'num', hasOrdering:true, words: [
    { englishWord: 'one', foreignWord: ['yī','一'], foreignAudio: '', order:1},
    { englishWord: 'two', foreignWord: ['èr','二'], foreignAudio: '', order:2},
    { englishWord: 'three',foreignWord: ['sān','三'], foreignAudio: '', order:3},
    { englishWord: 'four', foreignWord: ['sì','四'], foreignAudio: '', order:4},
    { englishWord: 'five', foreignWord: ['wŭ','五'], foreignAudio: '', order:5},
    { englishWord: 'six', foreignWord: ['liù','六'], foreignAudio: '', order:6},
    { englishWord: 'seven', foreignWord: ['qī', '七'], foreignAudio: '', order:7},
    { englishWord: 'eight', foreignWord: ['bā', '八'], foreignAudio: '', order:8},
    { englishWord: 'nine', foreignWord: ['jiŭ', '九'], foreignAudio: '', order:9},
    { englishWord: 'ten', foreignWord: ['shí','十'], foreignAudio: '', order:10},
  ]},
]

const koreanTopics: Topic2[] = [
  {name:'Numbers', slugName: 'num', hasOrdering:true, words: [
    { englishWord: 'one', foreignWord: ['ha-na','하나'], foreignAudio: '', order:1},
    { englishWord: 'two', foreignWord: ['dool','둘'], foreignAudio: '', order:2},
    { englishWord: 'three', foreignWord: ['seht','셋'], foreignAudio: '', order:3},
    { englishWord: 'four', foreignWord: ['neht','넷'], foreignAudio: '', order:4},
    { englishWord: 'five', foreignWord: ['da-sut','다섯'], foreignAudio: '', order:5},
    { englishWord: 'six', foreignWord: ['yuh-suht','여섯'], foreignAudio: '', order:6},
    { englishWord: 'seven', foreignWord: ['il-gohp','일곱'], foreignAudio: '', order:7},
    { englishWord: 'eight', foreignWord: ['yuh-dul','여덟'], foreignAudio: '', order:8},
    { englishWord: 'nine', foreignWord: ['ah-hope','아홉'], foreignAudio: '', order:9},
    { englishWord: 'ten', foreignWord: ['yul','열'], foreignAudio: '', order:10},
  ]},
  {name:'Hangul (Alphabet)', slugName: 'han', hasOrdering:true, isAlphabet: true, words: [
    { englishWord: 'g', foreignWord: ['ㄱ',''],foreignAudio: '', order:1 },
    { englishWord: 'n', foreignWord: ['ㄴ',''], foreignAudio: ''},
    { englishWord: 'd', foreignWord: ['ㄷ',''], foreignAudio: ''},
    { englishWord: 'r/l', foreignWord: ['ㄹ',''], foreignAudio: ''},
    { englishWord: 'm', foreignWord: ['ㅁ',''], foreignAudio: ''},
    { englishWord: 'b', foreignWord: ['ㅂ',''], foreignAudio: ''},
    { englishWord: 's', foreignWord: ['ㅅ',''], foreignAudio: ''},
    { englishWord: 'ng', foreignWord: ['ㅇ',''], foreignAudio: ''},
    { englishWord: 'j', foreignWord: ['ㅈ',''], foreignAudio: ''},
    { englishWord: 'ch', foreignWord: ['ㅊ',''], foreignAudio: ''},
    { englishWord: 'k', foreignWord: ['ㅋ',''], foreignAudio: ''},
    { englishWord: 't', foreignWord: ['ㅌ',''], foreignAudio: ''},
    { englishWord: 'p', foreignWord: ['ㅍ',''], foreignAudio: ''},
    { englishWord: 'h', foreignWord: ['ㅎ',''], foreignAudio: ''},
    { englishWord: 'a', foreignWord: ['ㅏ',''], foreignAudio: ''},
    { englishWord: 'ya', foreignWord: ['ㅑ',''], foreignAudio: ''},
    { englishWord: 'eo', foreignWord: ['ㅓ',''], foreignAudio: ''},
    { englishWord: 'yeo', foreignWord: ['ㅕ',''], foreignAudio: ''},
    { englishWord: 'o', foreignWord: ['ㅗ',''], foreignAudio: ''},
    { englishWord: 'yo', foreignWord: ['ㅛ',''], foreignAudio: ''},
    { englishWord: 'u', foreignWord: ['ㅜ',''], foreignAudio: ''},
    { englishWord: 'yu', foreignWord: ['ㅠ',''], foreignAudio: ''},
    { englishWord: 'eu', foreignWord: ['ㅡ',''], foreignAudio: ''},
    { englishWord: 'i', foreignWord: ['ㅣ',''], foreignAudio: ''},
  ]},
]

const portugueseTopics: Topic1[] = [
  {name:'Numbers', slugName: 'num', hasOrdering:true, words: [
    { englishWord: 'one', foreignWord: ['um'], foreignAudio: '', order:1},
    { englishWord: 'two', foreignWord: ['dois'], foreignAudio: '', order:2},
    { englishWord: 'three', foreignWord: ['três'], foreignAudio: '', order:3},
    { englishWord: 'four', foreignWord: ['quatro'], foreignAudio: '', order:4},
    { englishWord: 'five', foreignWord: ['cinco'], foreignAudio: '', order:5},
    { englishWord: 'six', foreignWord: ['seis'], foreignAudio: '', order:6},
    { englishWord: 'seven', foreignWord: ['sete'], foreignAudio: '', order:7},
    { englishWord: 'eight', foreignWord: ['oito'], foreignAudio: '', order:8},
    { englishWord: 'nine', foreignWord: ['nove'], foreignAudio: '', order:9},
    { englishWord: 'ten', foreignWord: ['dez'], foreignAudio: '', order:10},
  ]},
]

const russianTopics: Topic2[] = [
  {name:'Russian alphabet', slugName: 'alp', hasOrdering:true, isAlphabet: true, words: [
    { englishWord: 'a', foreignWord: ['а',''], foreignAudio: '', order:1 },
    { englishWord: 'b', foreignWord: ['б',''], foreignAudio: '', order:2 },
    { englishWord: 'v', foreignWord: ['в',''], foreignAudio: '', order:3 },
    { englishWord: 'g', foreignWord: ['г',''], foreignAudio: '', order:4 },
    { englishWord: 'd', foreignWord: ['д',''], foreignAudio: '', order:5 },
    { englishWord: 'e', foreignWord: ['е',''], foreignAudio: '', order:6 },
    { englishWord: 'yo', foreignWord: ['ё',''], foreignAudio: '', order:7 },
    { englishWord: 'zh', foreignWord: ['ж',''], foreignAudio: '', order:8 },
    { englishWord: 'z', foreignWord: ['з',''], foreignAudio: '', order:9 },
    { englishWord: 'i', foreignWord: ['и',''], foreignAudio: '', order:10 },
    { englishWord: 'y', foreignWord: ['й',''], foreignAudio: '', order:11 },
    { englishWord: 'k', foreignWord: ['к',''], foreignAudio: '', order:12 },
    { englishWord: 'l', foreignWord: ['л',''], foreignAudio: '', order:13 },
    { englishWord: 'm', foreignWord: ['м',''], foreignAudio: '', order:14 },
    { englishWord: 'n', foreignWord: ['н',''], foreignAudio: '', order:15 },
    { englishWord: 'o', foreignWord: ['о',''], foreignAudio: '', order:16 },
    { englishWord: 'p', foreignWord: ['п',''], foreignAudio: '', order:17 },
    { englishWord: 'r', foreignWord: ['р',''], foreignAudio: '', order:18 },
    { englishWord: 's', foreignWord: ['с',''], foreignAudio: '', order:19 },
    { englishWord: 't', foreignWord: ['т',''], foreignAudio: '', order:20 },
    { englishWord: 'u', foreignWord: ['у',''], foreignAudio: '', order:21 },
    { englishWord: 'f', foreignWord: ['ф',''], foreignAudio: '', order:22 },
    { englishWord: 'kh', foreignWord: ['х',''], foreignAudio: '', order:23 },
    { englishWord: 'ts', foreignWord: ['ц',''], foreignAudio: '', order:24 },
    { englishWord: 'ch', foreignWord: ['ч',''], foreignAudio: '', order:25 },
    { englishWord: 'sh', foreignWord: ['ш',''], foreignAudio: '', order:26 },
    { englishWord: 'shch', foreignWord: ['щ',''], foreignAudio: '', order:27 },
    { englishWord: 'hard sign', foreignWord: ['ъ',''], foreignAudio: '', order:28 },
    { englishWord: 'y', foreignWord: ['ы',''], foreignAudio: '', order: 29 },
    { englishWord: 'soft sign', foreignWord: ['ь',''], foreignAudio: '', order:30 },
    { englishWord: 'e', foreignWord: ['э',''], foreignAudio: '', order:31 },
    { englishWord: 'yu', foreignWord: ['ю',''], foreignAudio: '', order:32 },
    { englishWord: 'ya', foreignWord: ['я',''], foreignAudio: '', order:33 },
  ]},
  {name:'Numbers', slugName: 'num', hasOrdering:true, words: [
    { englishWord: 'one', foreignWord: ['a-deen', 'один'], foreignAudio: '', order:1},
    { englishWord: 'two', foreignWord: ['dva', 'два'], foreignAudio: '', order:2},
    { englishWord: 'three', foreignWord: ['tree', 'три'], foreignAudio: '', order:3},
    { englishWord: 'four', foreignWord: ['chye-tir-ye', 'четыре'], foreignAudio: '', order:4},
    { englishWord: 'five', foreignWord: ['pyat', 'пять'], foreignAudio: '', order:5},
    { englishWord: 'six', foreignWord: ['shest', 'шесть'], foreignAudio: '', order:6},
    { englishWord: 'seven', foreignWord: ['syem', 'семь'], foreignAudio: '', order:7},
    { englishWord: 'eight', foreignWord: ['vo-syem', 'восемь'], foreignAudio: '', order:8},
    { englishWord: 'nine', foreignWord: ['dyev-yat', 'девять'], foreignAudio: '', order:9},
    { englishWord: 'ten', foreignWord: ['dyes-yat', 'десять'], foreignAudio: '', order:10},
  ]},
]

export const languages: Language[] = 
        [
          {languageName: 'Spanish', topics: sortTopics(spanishTopics), pronouns: spanishPronouns, numForeignAlphabets: 1},
          {languageName: 'French', topics: sortTopics(frenchTopics), pronouns: [], numForeignAlphabets: 1},
          {languageName: 'German', topics: sortTopics(germanTopics), pronouns: [], numForeignAlphabets: 1},
          {languageName: 'Italian', topics: sortTopics(italianTopics), pronouns: [], numForeignAlphabets: 1},
          {languageName: 'Japanese', topics: sortTopics(japaneseTopics), pronouns: [], numForeignAlphabets: 3},
          {languageName: 'Mandarin', topics: sortTopics(mandarinTopics), pronouns: [], numForeignAlphabets: 2},
          {languageName: 'Korean', topics: sortTopics(koreanTopics), pronouns: [], numForeignAlphabets: 2},
          {languageName: 'Arabic', topics: sortTopics(arabicTopics), pronouns: [], numForeignAlphabets: 2},
          {languageName: 'Portuguese', topics: sortTopics(portugueseTopics), pronouns: [], numForeignAlphabets: 1},
          {languageName: 'Russian', topics: sortTopics(russianTopics), pronouns: [], numForeignAlphabets: 2},
          {languageName: 'Dutch', topics: sortTopics(dutchTopics), pronouns: [], numForeignAlphabets: 1},
        ]
      
