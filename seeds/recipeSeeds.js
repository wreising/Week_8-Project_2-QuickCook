const { Recipe } = require('../models')

const recipeData = [
  {
    recipe_name: 'Lamb Stew',
    description: 'Slow-cooked in an olive & tomato sauce',
    ing1quantity: '1/2 bunch',
    ingredient1: 'Rosemary',
    ing2quantity: '800g',
    ingredient2: 'Lamb shoulder, bone out',
    ing3quantity: '150g',
    ingredient3: 'Mixed Color Olives',
    ing4quantity: '280g jar',
    ingredient4: 'Pickled onions',
    ing5quantity: '2x 400g cans',
    ingredient5: 'Plum tomatoes',
    instructions: `1) Preheat the oven to 170ºC / 325ºF/ gas 3.  
    2) Place a 30cm shallow casserole pan on a high heat, strip in the rosemary leaves, add 1 tablespoon of olive oil, and crisp up for 1 minute while you dice the lamb into 3cm chunks.  
    3) Scoop out the rosemary and put aside, adding the lamb to the pan for 2 minutes to get some colour.  
    4) Meanwhile, squash the olives and remove the stones.Drain the pickled onions and stir into the pan with the olives.Toss well, then pour in the tinned tomatoes, breaking them up with a wooden spoon, as well as 2 tins worth of water.  
    4) Meanwhile, squash the olives and remove the stones. Drain the pickled onions and stir into the pan with the olives.Toss well, then pour in the tinned tomatoes, breaking them up with a wooden spoon, as well as 2 tins’ worth of water.  
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
    description: 'Beautiful King Shrimp, Angel-Hair pasta & lots of garlic',
    ing1quantity: '300g',
    ingredient1: 'Shell on Shrimp',
    ing2quantity: '4',
    ingredient2: 'Cloves of Garlic',
    ing3quantity: '2 heaping teaspoons',
    ingredient3: 'Red Pesto',
    ing4quantity: '150g',
    ingredient4: 'Angel Hain pasta',
    ing5quantity: '150ml',
    ingredient5: 'Light Rose wine',
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
  },
  {
    recipe_name: 'Black tahnini noodles',
    description: 'With Teriyaki & Punchy Lime',
    ing1quantity: '150g',
    ingredient1: 'fine rice noodles',
    ing2quantity: '2',
    ingredient2: 'limes',
    ing3quantity: '1 bunch',
    ingredient3: 'Water Cress',
    ing4quantity: '50g',
    ingredient4: 'Black Sesame Seeds',
    ing5quantity: '2 TBsp',
    ingredient5: 'Teriyaki Sauce',
    instructions: `1) Cook the noodles in boiling saltedd water according to the packet instructions, then drain, reserving a mugful of cooking water. Meanwhile, finely gratethe zest of 1 lime, snip the cress and put both aside.  
    2) Toast the seame seeds in a dry non-stick frying pan on high heat for 1 minute, tossing regularly. Reserving one quarter of the seeds, pound the restin in a pestle and mortar until fairly fine, then muddle in the teriyaki and the juice of 1 lime. Tast, season to perfection with sea salt and black pepper, and you've got black tahini!  
    3) Toss the noodles and black tahini together. loosening with a splash of reserved noodle water. Serve sprinkled with the lime zest, cress and reserved seeps, with lime weges ont he side, ofr squeezing over.`,
    vegetarian: true,
    difficultyHard: false,
    photoLink: 'https://img.jamieoliver.com/jamieoliver/recipe-database/108763671.jpg?tr=w-800,h-1066',
    source: 'https://www.jamieoliver.com/recipes/noodle-recipes/black-tahini-noodles/',
    meal: 'dinner'
  },
  {
    recipe_name: 'Spiced whole roast cauli',
    description: 'With beautiful rose harissa, dukkah & jewels of pomegrante',
    ing1quantity: '1 small head',
    ingredient1: 'Cauliflower',
    ing2quantity: '2 heaping teaspoons',
    ingredient2: 'Rose harissa',
    ing3quantity: '2 heaping tablespoons',
    ingredient3: 'Natural yogurt',
    ing4quantity: '1',
    ingredient4: 'Pomegranate',
    ing5quantity: '1 TBsp',
    ingredient5: 'Dukkah',
    instructions: `1) Preheat the oven to 350ºC/175ºF.  
    2) Discard any tough outer leaves from the cauliflower, then, keeping it whole, use a sharp knife to carefully slice a cross deep into the stalk so you can easily portion it up later.  
    3) In a bowl, mix together the harissa, yoghurt, ½ a tablespoon of red wine vinegar and a little sea salt and black pepper, then quickly rub the mixture all over the cauli. Place it in a snug-fitting ovenproof frying pan or roasting tray.  
    4) Halve the pomegranate and squeeze the juice of one half through a sieve over the cauli. Add 100ml of water at the base, and roast for 1 hour 15 minutes.  
    5) When the time is up, baste the cauli with the juices in the pan, then return to the oven for a final 10 minutes.  
    6) Remove the pan, spoon the juices back over the cauli, then quickly sprinkle over the dukkah so it sticks.  
    7) Holding the remaining pomegranate half cut-side down in your fingers, bash the back of it with a spoon so all the seeds tumble over the cauli, then halve or quarter, and dish up.`,
    vegetarian: true,
    difficultyHard: false,
    photoLink: 'https://img.jamieoliver.com/jamieoliver/recipe-database/108258856.jpg?tr=w-800,h-1066',
    source: 'https://www.jamieoliver.com/recipes/cauliflower-recipes/spiced-whole-roast-cauli/',
    meal: 'dinner'
  },
  {
    recipe_name: 'Spiced wbeef and cauli rice',
    description: 'With coconut milk and fresh mint',
    ing1quantity: '500g',
    ingredient1: 'Minced Beef',
    ing2quantity: '1 head',
    ingredient2: 'Cauliflower',
    ing3quantity: '1 heaped teaspoon',
    ingredient3: 'Rendang Powder',
    ing4quantity: '1 bunch',
    ingredient4: 'Fresh Mint',
    ing5quantity: '1 400g tin',
    ingredient5: 'Light Coconut Milk',
    instructions: `1) Place the minced beef in a large shallow casserole pan with 1 tablespoon of olive oil, then break it up and fry on a high heat, stirring regularly.  
    2) Click off and discard any tatty outer leaves from the cauliflower, putting the nice leaves into a food processor.  
    3) Halve the cauliflower, breaking up one half into the processor. Cut little bite-sized florets off the other half into the mince pan, chucking all the stalks into the processor as you go.  
    4) Stir the rendang powder into the pan and cook it all for 10 minutes, or until crispy, stirring regularly.  
    5) Meanwhile, pick half the mint leaves into the processor, add a pinch of sea salt and black pepper, and blitz until fine.  
    6) Tip into a heatproof bowl, cover, and microwave on high for 4 to 5 minutes.  
    7) Reserving the baby leaves, pick the remaining mint leaves into the pan, toss well, then pour in the coconut milk and half a tin’s worth of water.  
    8) Bring to the boil, simmer for 5 minutes, then taste, season to perfection, and scatter over the reserved mint leaves.  
    9) Give the cauli rice a good mix up, and serve on the side.`,
    vegetarian: false,
    difficultyHard: true,
    photoLink: 'https://img.jamieoliver.com/jamieoliver/recipe-database/108100212.jpg?tr=w-800,h-1066',
    source: 'https://www.jamieoliver.com/recipes/beef-recipes/spicy-beef-cauli-rice/',
    meal: 'dinner'
  },
  {
    recipe_name: 'Harissa squash salad',
    description: 'With sliced avocados and beautiful mozzarella',
    ingredient1: 'Butternut squash',
    ing1quantity: '1',
    ingredient2: 'Rose Harissa',
    ing2quantity: '1 heaping TBsp',
    ingredient3: 'Salad Leaves',
    ing3quantity: '100g',
    ingredient4: 'Avodados',
    ing4quantity: '2',
    ingredient5: 'Mozzarella Cheese',
    ing5quantity: '125g ball',
    instructions: `1) Preheat the oven to 180ºC/350ºF/gas 4.  
    2) Carefully cut the squash into rough 5cm chunks (seeds and all). Then, in a roasting tray, rub all over with the harissa, 1 tablespoon of olive oil and a pinch of sea salt and black pepper.  
    3) Roast for 50 minutes, or until soft, golden and gnarly.  
    4) With a few minutes to go, place 1 tablespoon each of extra virgin olive oil and red wine vinegar, and a little salt and pepper, in a large bowl.  
    5) Halve, peel, destone, slice and toss in the avocados, then gently mix in the salad leaves.  
    6) Use forks to divide and tear the hot squash (skin, seeds and all) between your plates. Divide up the salad on top and tear over the mozzarella, then serve.`,
    vegetarian: true,
    difficultyHard: false,
    photoLink: 'https://img.jamieoliver.com/jamieoliver/recipe-database/107864995.jpg?tr=w-800,h-1066',
    source: 'https://www.jamieoliver.com/recipes/butternut-squash-recipes/harissa-squash-salad/',
    meal: 'dinner'
  },
  {
    recipe_name: 'Ale Barley Lamb Shanks',
    description: 'With slow-cooked leeks and umami broth',
    ingredient1: 'Lamb Shanks',
    ing1quantity: '4',
    ingredient2: 'Leeks',
    ing2quantity: '2',
    ingredient3: 'Pearl Barley',
    ing3quantity: '200g',
    ingredient4: 'Umami Paste',
    ing4quantity: '1 heaped TBsp',
    ingredient5: 'Ale',
    ing5quantity: '500ml',
    instructions: `1) Preheat the oven to 170ºC/325ºF/gas 3.  
    2) Place a large casserole pan on a high heat, and fry the lamb shanks in 1 tablespoon of olive oil, while you halve, wash and roughly chop the leeks.  
    3) Add them to the pan with the pearl barley, umami paste and a pinch of sea salt and black pepper, then stir well.  
    4) Pour in the ale and 1 tablespoon of red wine vinegar, then cover with 1.2 litres of water.  
    5) Cook in the oven for 2 hours 30 minutes, or until tender, then dish on up. Easy!`,
    vegetarian: false,
    difficultyHard: true,
    photoLink: 'https://img.jamieoliver.com/jamieoliver/recipe-database/89080973.jpg?tr=w-800,h-1066',
    source: 'https://www.jamieoliver.com/recipes/lamb-recipes/ale-barley-lamb-shanks/',
    meal: 'dinner'
  }
]

const seedRecipes = () => Recipe.bulkCreate(recipeData)

module.exports = seedRecipes