export type Topic = {
    name: string;
    slugName: string;
    contents: string[];
    hasLoginLock: boolean;
}

export type GrammarLanguage = {
    languageName: string;
    topics: Topic[];
}