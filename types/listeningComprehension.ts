export type Paragraph = {
    englishText: string;
    foreignText: string;
    audioFile: any;

}


export type AudioTranscription  = {
    name: string;
    slugName: string;
    contents: Paragraph[];
}

export type Language  = {
    languageName: string;
    audioTranscriptions: AudioTranscription[];
}