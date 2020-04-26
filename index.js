const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql')
const cocktails = require('./cocktails');

const schema = buildSchema(`
    type Quantity {
        unit: String,
        value: Int
    }

    type Ingredient {
        ingredientName: String,
        quantity: Quantity
    }

    type Cocktail {
        alcoholUnits: Float,
        cocktailName: String,
        ingredients: [Ingredient],
    }

    type Query {
        cocktails(ingredient: String, maxUnits: Float): [Cocktail]
    }
`);

const root = {
    cocktails,
};

const app = express();

app.use('/cocktails', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);
