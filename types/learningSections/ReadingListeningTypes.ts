import { FixedSizeArray } from 'fixed-size-array';

export type SentenceWithNumAlphabets<N extends number> = {
    englishText: string
    foreignText: FixedSizeArray<N, string>;
    audioFile: any;
}

export type ParagraphWithNumAlphabets<N extends number> = {
    sentences: SentenceWithNumAlphabets<N>[]
    audioFile: any;

}

export type Paragraph = 
ParagraphWithNumAlphabets<1> | ParagraphWithNumAlphabets<2> |
ParagraphWithNumAlphabets<3> | ParagraphWithNumAlphabets<4>

export type AudioTranscriptionWithOneAlphabet = {
    name: string;
    slugName: string;
    contents: ParagraphWithNumAlphabets<1>[];
    isLocked: boolean;
}
export type AudioTranscriptionWithTwoAlphabet = {
    name: string;
    slugName: string;
    contents: ParagraphWithNumAlphabets<2>[];
    isLocked: boolean;

}
export type AudioTranscriptionWithThreeAlphabet = {
    name: string;
    slugName: string;
    contents: ParagraphWithNumAlphabets<3>[];
    isLocked: boolean;

}

export type AudioTranscriptionWithFourAlphabet = {
    name: string;
    slugName: string;
    contents: ParagraphWithNumAlphabets<4>[];
    isLocked: boolean;
}

export type AudioTranscription = 
AudioTranscriptionWithOneAlphabet | AudioTranscriptionWithTwoAlphabet |
AudioTranscriptionWithThreeAlphabet | AudioTranscriptionWithFourAlphabet;

export type ReadingListeningLanguage = {
    languageName: string;
    audioTranscriptions: AudioTranscription[];
    numForeignAlphabets: number;
}

export enum TranscriptionType {
    Audio = 'Audio',
    English = 'English',
    WritingSystem1 = 'WritingSystem1',
    WritingSystem2 = 'WritingSystem2',
    WritingSystem2v2 = 'WritingSystem2v2',
    WritingSystem3 = 'WritingSystem3'
  }