export type Topic = {
    name: string;
    slugName: string;
    contents: string[];
    isLocked: boolean;
}

export type GrammarLanguage = {
    languageName: string;
    topics: Topic[];
}