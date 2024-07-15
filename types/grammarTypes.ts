export type Topic  = {
    name: string;
    slugName: string;
    contents: string[];
}

export type Language  = {
    languageName: string;
    topics: Topic[];
}