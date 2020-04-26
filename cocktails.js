const data = require('./data.json');

module.exports = ({ ingredient, maxUnits }) => {
    let cocktailsList = data;
    if (ingredient) {
        cocktailsList = cocktailsList.filter(cocktail => cocktail.ingredients.find(cocktailIngredient => cocktailIngredient.ingredientName.toLowerCase() === ingredient.toLowerCase()));
    }
    if (maxUnits) {
        const maximumUnits = parseFloat(maxUnits);
        if (!isNaN(maximumUnits)) {
            cocktailsList = cocktailsList.filter(cocktail => cocktail.alcoholUnits <= maximumUnits);
        }
    }
    return cocktailsList;
};