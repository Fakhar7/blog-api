function countReadTime (content) {
    const wordsPerMin = content.split("").length / 1200;
    return Math.round(wordsPerMin) === 0 ? 1 : Math.round(wordsPerMin);
}
