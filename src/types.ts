export type WordConjugation = {
    pastTense: string[];
    presentTense: string[];
    futureTense: string[];

}

export type VerbConjugationEnglish = {
    infinitive: string;
    englishWordConjugation: WordConjugation;
}

export type VerbConjugationForeign = {
    infinitive: string;
    foreignWordConjugation: WordConjugation;
}

export type Word = {
    topic: string;
    englishWord:string | VerbConjugationEnglish;
    foreignWord: (string | VerbConjugationForeign)[];
    foreignAudio: string;
}

export type Language = {
    languageName: string;
    content: Word[];
    topics: string[];
    numForeignAlphabets: number;
}