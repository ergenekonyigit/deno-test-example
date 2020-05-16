export const sortArr = (f: (a: any, b: any) => number) => (arr: any) => [...arr].sort(f);
