export default function unorderedEqual(a: any[], b: any[]) {
    if (a.length !== b.length) return false;
    const sortedA = [...a].sort();
    const sortedB = [...b].sort();
    console.log(JSON.stringify(sortedA), JSON.stringify(sortedB));
    return JSON.stringify(sortedA) === JSON.stringify(sortedB);
}