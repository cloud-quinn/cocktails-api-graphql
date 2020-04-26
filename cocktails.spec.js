const getCocktails = require('./cocktails');

jest.mock('./data.json', () => ([
    {
        "alcoholUnits": 2.0,
        "cocktailName": "Test Cocktail",
        "ingredients": [
            {
                "ingredientName": "Test Ingredient",
                "quantity": {
                    "unit": "ml",
                    "value": 1
                }
            },
        ]
    },
    {
        "alcoholUnits": 1.0,
        "cocktailName": "Test Cocktail 2",
        "ingredients": [
            {
                "ingredientName": "Another Ingredient",
                "quantity": {
                    "unit": "ml",
                    "value": 1
                }
            },
        ]
    }
]));

describe('Get All Cocktails', () => {
    it('returns all stored values', () => {
        expect(getCocktails({})).toHaveLength(2);
    });
});

describe('Get Cocktails By Ingredient', () => {
    let cocktailList;

    beforeAll(() => {
        cocktailList = getCocktails({ ingredient: 'test ingredient'});
    });

    it('does not return all stored values', () => {
        expect(cocktailList).toHaveLength(1);
    });

    it('returns the expected values', () => {
        expect(cocktailList[0].cocktailName).toBe("Test Cocktail");
    });
});

describe('Get Cocktails By Maximum Alcohol Units', () => {
    let cocktailList;

    beforeAll(() => {
        cocktailList = getCocktails({ maxUnits: 1.5});
    });

    it('does not return all stored values', () => {
        expect(cocktailList).toHaveLength(1);
    });

    it('returns the expected values', () => {
        expect(cocktailList[0].cocktailName).toBe("Test Cocktail 2");
    });
});