import { FixedSizeArray } from 'fixed-size-array';

export interface Tenses {
    pastTense: string;
    presentTense: string;
    futureTense: string;
  }

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
    englishWord:string | VerbConjugationEnglish;
    foreignWord: FixedSizeArray<1, string | VerbConjugationForeign>;
    foreignAudio: string;
    order?: number

}

export type Word2 = {
    englishWord:string | VerbConjugationEnglish;
    foreignWord: FixedSizeArray<2, string | VerbConjugationForeign>;
    foreignAudio: string;
    order?: number
}

export type Word3 = {
    englishWord:string | VerbConjugationEnglish;
    foreignWord: FixedSizeArray<3, string | VerbConjugationForeign>;
    foreignAudio: string;
    order?: number
}

export type Word = Word1 | Word2 | Word3;

export type Topic1 = {
    name: string;
    slugName: string;
    hasOrdering: boolean;
    words: Word1[];
    isAlphabet?: boolean;
    isExperimentalTopic?: boolean;

}
export type Topic2 = {
    name: string;
    slugName: string;
    hasOrdering: boolean;
    words: Word2[];
    isAlphabet?: boolean;
    isExperimentalTopic?: boolean;

}
export type Topic3 = {
    name: string;
    slugName: string;
    hasOrdering: boolean;
    words: Word3[];
    isAlphabet?: boolean;
    isExperimentalTopic?: boolean;
}

export type Topic = Topic1 | Topic2 | Topic3

export type Language = {
    languageName: string;
    topics: Topic1[] | Topic2[] | Topic3[];
    pronouns: string[];
    numForeignAlphabets: number;
}

export type featureToggle = {
    x: boolean;
}
export type reduxStore = {
    featureToggle: featureToggle
}