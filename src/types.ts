import { FixedSizeArray } from "fixed-size-array";

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

export type VerbConjugation = VerbConjugationEnglish | VerbConjugationForeign;

export type Word1 = {
    topic: string;
    englishWord:string | VerbConjugationEnglish;
    foreignWord: FixedSizeArray<1, string | VerbConjugationForeign>;
    foreignAudio: string;
}

export type Word2 = {
    topic: string;
    englishWord:string | VerbConjugationEnglish;
    foreignWord: FixedSizeArray<2, string | VerbConjugationForeign>;
    foreignAudio: string;
}

export type Word3 = {
    topic: string;
    englishWord:string | VerbConjugationEnglish;
    foreignWord: FixedSizeArray<3, string | VerbConjugationForeign>;
    foreignAudio: string;
}

export type Word = Word1 | Word2 | Word3;

export type Topic = {
    name: string;
    hasOrdering: boolean;
}
export type Language = {
    languageName: string;
    content: Word[];
    topics: Topic[];
    pronouns: string[];
    numForeignAlphabets: number;
}