const { Recipe } = require('../models')

const recipeData = [
  {
    recipe_name: 'Lamb Stew',
    despcription: 'Slow-cooked in an olive & tomato sauce.',
    ingredient1: 'Rosemary',
    q1quantity: '1/2 bunch',
    ingredient2: 'Lamb shoulder, bone out',
    q2quantity: '800g',
    ingredient3: 'Mixed Color Olives',
    q3quantity: '150g',
    ingredient4: 'Pickled onions',
    q4quantity: '280g jar',
    ingredient5: 'Plum tomatoes',
    q5quantity: '2x 400g cans',
    instructions: `1) Preheat the oven to 170ºC / 325ºF/ gas 3.
    2) Place a 30cm shallow casserole pan on a high heat, strip in the rosemary leaves, add 1 tablespoon of olive oil, and crisp up for 1 minute while you dice the lamb into 3cm chunks.
    3) Scoop out the rosemary and put aside, adding the lamb to the pan for 2 minutes to get some colour.
    4) Meanwhile, squash the olives and remove the stones.Drain the pickled onions and stir into the pan with the olives.Toss well, then pour in the tinned tomatoes, breaking them up with a wooden spoon, as well as 2 tins worth of water.
    5) Cover and cook in the oven for 2 hours, or until thick, delicious and tender, stirring halfway and loosening with a splash of water, if needed.
    6) Taste, season to perfection with sea salt and black pepper, sprinkle over the crispy rosemary leaves, and serve.Simple`,
    vegetarian: false,
    difficultyHard: false,
    photoLink: 'https://img.jamieoliver.com/jamieoliver/recipe-database/108765141.jpg?tr=w-800,h-1066',
    source: 'https://www.jamieoliver.com/recipes/lamb-recipes/succulent-lamb-stew/',
    meal: 'dinner'
  },
  {
    recipe_name: 'Rose pesto prawn pasta',
    despcription: 'Beautiful King Shrimp, Angel-Hair pasta & lots of garlic.',
    ingredient1: 'Shell on Shrimp',
    q1quantity: '300g',
    ingredient2: 'Cloves of Garlic',
    q2quantity: '4',
    ingredient3: 'Red Pesto',
    q3quantity: '2 heaping teaspoons',
    ingredient4: 'Angel Hain pasta',
    q4quantity: '150g',
    ingredient5: 'Light Rose wine',
    q5quantity: '150ml',
    instructions: `1) Place 4 whole prawns in a large non-stick frying pan with 1 tablespoon of olive oil, off the heat. Pull off the rest of the prawn heads and chuck them into the pan for bonus flavour. Quickly pull the legs and tails off the prawns and peel off the shells. Run the tip of your knife down their backs and pull out the vein, then chop the prawns.
    2) Peel and finely slice the garlic.Put the frying pan on a medium- high heat and, after 2 minutes, stir in the garlic and chopped prawns, followed 1 minute later by the pesto, stirring regularly.
    3) Meanwhile, cook the pasta in a pan of boiling salted water according to the packet instructions.
    4) Pour the rosé into the prawn pan and let it bubble and reduce for 1 minute.
    5) Drain the pasta, reserving a mugful of cooking water, then toss the pasta into the prawn pan, loosening with a little reserved cooking water, if needed.
    6) Toss over the heat for 1 minute, then taste, season to perfection with sea salt and black pepper, and dish up.`,
    vegetarian: false,
    difficultyHard: false,
    photoLink: 'https://img.jamieoliver.com/jamieoliver/recipe-database/107865056.jpg?tr=w-800,h-1066',
    source: 'https://www.jamieoliver.com/recipes/prawn-recipes/rose-pesto-prawn-pasta/',
    meal: 'dinner'
  }
]