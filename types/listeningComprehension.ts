export type Paragraph = {
    englishText: string;
    foreignText: string;

}


export type AudioTranscription  = {
    name: string;
    slugName: string;
    contents: Paragraph[];
    audioFile: string;
}

export type Language  = {
    languageName: string;
    audioTranscriptions: AudioTranscription[];
}