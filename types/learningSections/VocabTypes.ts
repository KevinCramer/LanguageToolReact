import { FixedSizeArray } from 'fixed-size-array';

export type WordWithNumWritingSystems<N extends number> = {
    englishWord: string;
    foreignWord: FixedSizeArray<N, string>;
    foreignAudio: string;
    order?: number;
    strokeOrderVideo?: any;
}

export type WordWithThreeWritingSystems = WordWithNumWritingSystems<3>;

export type Word = WordWithThreeWritingSystems;

export type TopicWithThreeWritingSystems = {
    name: string;
    slugName: string;
    hasOrdering: boolean;
    words: WordWithThreeWritingSystems[];
    isAlphabet: boolean;
    hasLoginLock: boolean;
    topicOrder?: number;
}

export type Topic = TopicWithThreeWritingSystems;

export type VocabLanguage = {
    languageName: string;
    topics: | TopicWithThreeWritingSystems[];
    numWritingSystems: number;
}