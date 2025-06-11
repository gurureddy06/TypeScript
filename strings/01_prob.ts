// Strings - Used to store textual data

// String Length and Case Conversion

function string1(str: string): { length: number; upper: string; lower: string } {
    return {

    length: str.length,
    upper: str.toUpperCase(),
    lower: str.toLowerCase()

    };
}
console.log(string1("guru"));