const tips = require('./tips.json');

function randomTip() {
    return tips[Math.floor(Math.random() * tips.length)];
}

function allTips() {
    return tips;
}

function numberOfTips() {
    return tips.length;
}

function tipsByCategory(category) {
    return tips.filter(tip => tip.category === category);
}

module.exports = {
    randomTip,
    allTips,
    numberOfTips,
    tipsByCategory
};
