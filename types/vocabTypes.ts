import { FixedSizeArray } from 'fixed-size-array';

export type Tenses = {
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

export type WordWithForeignAlphabets<N extends number> = {
    englishWord: string | VerbConjugationEnglish;
    foreignWord: FixedSizeArray<N, string | VerbConjugationForeign>;
    foreignAudio: string;
    order?: number;
}

export type Word1 = WordWithForeignAlphabets<1>;
export type Word2 = WordWithForeignAlphabets<2>;
export type Word3 = WordWithForeignAlphabets<3>;

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