export type Topic = {
    name: string;
    slugName: string;
    contents: string[];
    isLocked: boolean;
}

export type Language = {
    languageName: string;
    topics: Topic[];
}