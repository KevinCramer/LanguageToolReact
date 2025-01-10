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

export type WordWithNumAlphabets<N extends number> = {
    englishWord: string;
    foreignWord: FixedSizeArray<N, string>;
    foreignAudio: string;
    order?: number;
    strokeOrderVideo?: any;
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
    isAlphabet: boolean;
    isLocked: boolean;
    topicOrder?: number;
}

export type TopicWithTwoAlphabets = {
    name: string;
    slugName: string;
    hasOrdering: boolean;
    words: WordWithTwoAlphabets[];
    isAlphabet: boolean;
    isLocked: boolean;
    topicOrder?: number;
}

export type TopicWithThreeAlphabets = {
    name: string;
    slugName: string;
    hasOrdering: boolean;
    words: WordWithThreeAlphabets[];
    isAlphabet: boolean;
    isLocked: boolean;
    topicOrder?: number;
}

export type Topic = TopicWithOneAlphabet | TopicWithTwoAlphabets | TopicWithThreeAlphabets;

export type VocabLanguage = {
    languageName: string;
    topics: TopicWithOneAlphabet[] | TopicWithTwoAlphabets[] | TopicWithThreeAlphabets[];
    pronouns: string[];
    numForeignAlphabets: number;
}