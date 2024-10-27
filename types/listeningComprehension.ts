import { FixedSizeArray } from 'fixed-size-array';


export type ParagraphWithNumAlphabets<N extends number> = {
    englishText: string 
    foreignText: FixedSizeArray<N, string>;
    audioFile: any;

}

export type Paragraph = ParagraphWithNumAlphabets<1> | ParagraphWithNumAlphabets<2>  | ParagraphWithNumAlphabets<3>
export type AudioTranscriptionWithOneAlphabet = {
    name: string;
    slugName: string;
    contents: ParagraphWithNumAlphabets<1>[];
}
export type AudioTranscriptionWithTwoAlphabet = {
    name: string;
    slugName: string;
    contents: ParagraphWithNumAlphabets<2>[];
}
export type AudioTranscriptionWithThreeAlphabet = {
    name: string;
    slugName: string;
    contents: ParagraphWithNumAlphabets<3>[];
}

export type AudioTranscription = AudioTranscriptionWithOneAlphabet | AudioTranscriptionWithTwoAlphabet | AudioTranscriptionWithThreeAlphabet;

export type Language  = {
    languageName: string;
    audioTranscriptions: AudioTranscription[];
    numForeignAlphabets: number;
}