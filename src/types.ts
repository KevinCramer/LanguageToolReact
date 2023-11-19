export type WordConjugation = {
    pastTense: string[];
    presentTense: string[];
    futureTense: string[];

}

export type VerbConjugation = {
    infinitive: string;
}

export type VerbConjugationEnglish = VerbConjugation & {
    englishWordConjugation: WordConjugation;
}

export type VerbConjugationForeign = VerbConjugation & {
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
    pronouns: string[];
    numForeignAlphabets: number;
}