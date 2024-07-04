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

export type WordWithNumAlphabets<N extends number> = {
    englishWord: string | VerbConjugationEnglish;
    foreignWord: FixedSizeArray<N, string | VerbConjugationForeign>;
    foreignAudio: string;
    order?: number;
}

export type WordWithOneAlphabet = WordWithNumAlphabets<1>;
export type WordWithTwoAlphabets = WordWithNumAlphabets<2>;
export type WordWithThreeAlphabets = WordWithNumAlphabets<3>;

export type Word = WordWithOneAlphabet | WordWithTwoAlphabets | WordWithThreeAlphabets;

export type TopicWithOneAlphabet = {
    name: string;
    slugName: string;
    hasOrdering: boolean;
    words: WordWithOneAlphabet[];
    isAlphabet?: boolean;
}

export type TopicWithTwoAlphabets = {
    name: string;
    slugName: string;
    hasOrdering: boolean;
    words: WordWithTwoAlphabets[];
    isAlphabet?: boolean;
}

export type TopicWithThreeAlphabets = {
    name: string;
    slugName: string;
    hasOrdering: boolean;
    words: WordWithThreeAlphabets[];
    isAlphabet?: boolean;
}

export type Topic = TopicWithOneAlphabet | TopicWithTwoAlphabets | TopicWithThreeAlphabets;

export type Language = {
    languageName: string;
    topics: TopicWithOneAlphabet[] | TopicWithTwoAlphabets[] | TopicWithThreeAlphabets[];
    pronouns: string[];
    numForeignAlphabets: number;
}