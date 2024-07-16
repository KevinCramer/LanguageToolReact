export const scramble = <T>(array: T[]) => array.sort((a, b) => 0.5 - Math.random());

export const roughlyEqual = (a: string, b: string ) => {return (a.toLowerCase().trim() === b)};
