


export const truncateStr = (str, maxStrLen = 30) => {
    if (str && str.length > maxStrLen) return str.slice(0, maxStrLen) + "...";
    return str
}

export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const capitalizeFirstOfEachWord = (str) => {
    if (str) {
        return str
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }
}

export const pipe = (...functions) => (x) => functions.reduce((a, b) => b(a), x);
