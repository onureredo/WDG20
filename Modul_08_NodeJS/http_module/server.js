import http from 'http';
import { respond } from './utils.js';

const recipes = [
  {
    id: 1,
    ingredients: ['celery', 'chocolate', 'honey'],
    desc: 'Lorem ipsum',
  },
  {
    id: 2,
    ingredients: ['2 slices of bread', 'chocolate', 'honey'],
    desc: 'Ipsum Lorem',
  },
];

const port = process.env.PORT || 8000;

const getRecipies = async (req, res) => {
  return respond(res, 200, 'application/json', JSON.stringify(recipes));
};

const getSingleRecipe = async (req, res) => {
  const { id } = req.params;

  const foundRec = recipes.find((recipe) => recipe.id === +id);
  if (!foundRec) {
    return respond(res, 404, 'application/json', JSON.stringify({ msg: `Recipe no. ${id} not found` }));
  }
  return respond(res, 200, 'application/json', JSON.stringify(foundRec));
};

const createRecipe = async (req, res) => {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const { ingredients, desc } = JSON.parse(Buffer.concat(chunks).toString());
  const newRecipe = { ingredients, desc, id: recipes.length + 1 };
  recipes.push(newRecipe);

  return respond(res, 201, 'application/json', JSON.stringify(newRecipe));
};

const updateRecipe = async (req, res) => {
  const { id } = req.params;

  const oldRecipeInd = recipes.findIndex((recipe) => recipe.id === +id);
  if (oldRecipeInd === -1) {
    return respond(res, 404, 'application/json', JSON.stringify({ msg: `Recipe no. ${id} not found` }));
  }

  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const { ingredients, desc } = JSON.parse(Buffer.concat(chunks).toString());

  const updatedRecipe = { id: +id, ingredients, desc };
  recipes.splice(oldRecipeInd, 1, updatedRecipe);

  return respond(res, 200, 'application/json', JSON.stringify(updatedRecipe));
};

const recipesRouter = (req, res) => {
  console.log(req.params.id);

  switch (req.method) {
    case 'GET':
      if (req.params.id) {
        return getSingleRecipe(req, res);
      } else {
        return getRecipies(req, res);
      }
    case 'POST':
      return createRecipe(req, res);
    case 'PUT':
      return updateRecipe(req, res);
    case 'DELETE':
      return deleteRecipe(req, res);
    default:
      return respond(res, 200, 'text/plain', 'Recipes route');
  }
};

const requestHandler = (req, res) => {
  const [, route, id] = req.url.split('/');
  console.log({ route, id });

  req.params = { id };
  switch (route) {
    case '':
      // res.statusCode = 200;s
      // res.setHeader('Content-Type', 'text/plain');
      // res.end(`Server is healthy`);
      // break;
      return respond(res, 200, 'text/plain', 'Server is healthy');
    case 'recipes':
      recipesRouter(req, res);
      break;

    default:
      return respond(res, 404, 'text/plain', 'Not found');
  }
};

const server = http.createServer(requestHandler);

server.listen(port, () => console.log(`Server is listening on port ${port}`));
