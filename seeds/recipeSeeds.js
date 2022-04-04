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
    instructions: `1) Preheat the oven to 170ºC / 325ºF/ gas 3.<br>
    2) Place a 30cm shallow casserole pan on a high heat, strip in the rosemary leaves, add 1 tablespoon of olive oil, and crisp up for 1 minute while you dice the lamb into 3cm chunks.<br>
    3) Scoop out the rosemary and put aside, adding the lamb to the pan for 2 minutes to get some colour.<br>
    4) Meanwhile, squash the olives and remove the stones.Drain the pickled onions and stir into the pan with the olives.Toss well, then pour in the tinned tomatoes, breaking them up with a wooden spoon, as well as 2 tins worth of water.<br>
    4) Meanwhile, squash the olives and remove the stones. Drain the pickled onions and stir into the pan with the olives.Toss well, then pour in the tinned tomatoes, breaking them up with a wooden spoon, as well as 2 tins’ worth of water.<br>
    5) Cover and cook in the oven for 2 hours, or until thick, delicious and tender, stirring halfway and loosening with a splash of water, if needed.<br>
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
    instructions: `1) Place 4 whole prawns in a large non-stick frying pan with 1 tablespoon of olive oil, off the heat. Pull off the rest of the prawn heads and chuck them into the pan for bonus flavour. Quickly pull the legs and tails off the prawns and peel off the shells. Run the tip of your knife down their backs and pull out the vein, then chop the prawns.<br>
    2) Peel and finely slice the garlic.Put the frying pan on a medium- high heat and, after 2 minutes, stir in the garlic and chopped prawns, followed 1 minute later by the pesto, stirring regularly.<br>
    3) Meanwhile, cook the pasta in a pan of boiling salted water according to the packet instructions.<br>
    4) Pour the rosé into the prawn pan and let it bubble and reduce for 1 minute.<br>
    5) Drain the pasta, reserving a mugful of cooking water, then toss the pasta into the prawn pan, loosening with a little reserved cooking water, if needed.<br>
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
    instructions: `1) Cook the noodles in boiling saltedd water according to the packet instructions, then drain, reserving a mugful of cooking water. Meanwhile, finely gratethe zest of 1 lime, snip the cress and put both aside.<br>
    2) Toast the seame seeds in a dry non-stick frying pan on high heat for 1 minute, tossing regularly. Reserving one quarter of the seeds, pound the restin in a pestle and mortar until fairly fine, then muddle in the teriyaki and the juice of 1 lime. Tast, season to perfection with sea salt and black pepper, and you've got black tahini!<br>
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
    instructions: `1) Preheat the oven to 350ºC/175ºF.<br>
    2) Discard any tough outer leaves from the cauliflower, then, keeping it whole, use a sharp knife to carefully slice a cross deep into the stalk so you can easily portion it up later.<br>
    3) In a bowl, mix together the harissa, yoghurt, ½ a tablespoon of red wine vinegar and a little sea salt and black pepper, then quickly rub the mixture all over the cauli. Place it in a snug-fitting ovenproof frying pan or roasting tray.<br>
    4) Halve the pomegranate and squeeze the juice of one half through a sieve over the cauli. Add 100ml of water at the base, and roast for 1 hour 15 minutes.<br>
    5) When the time is up, baste the cauli with the juices in the pan, then return to the oven for a final 10 minutes<br>
    6) Remove the pan, spoon the juices back over the cauli, then quickly sprinkle over the dukkah so it sticks.<br>
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
    instructions: `1) Place the minced beef in a large shallow casserole pan with 1 tablespoon of olive oil, then break it up and fry on a high heat, stirring regularly.<br>
    2) Click off and discard any tatty outer leaves from the cauliflower, putting the nice leaves into a food processor.<br>
    3) Halve the cauliflower, breaking up one half into the processor. Cut little bite-sized florets off the other half into the mince pan, chucking all the stalks into the processor as you go.<br>
    4) Stir the rendang powder into the pan and cook it all for 10 minutes, or until crispy, stirring regularly.<br>
    5) Meanwhile, pick half the mint leaves into the processor, add a pinch of sea salt and black pepper, and blitz until fine.<br>
    6) Tip into a heatproof bowl, cover, and microwave on high for 4 to 5 minutes.<br>
    7) Reserving the baby leaves, pick the remaining mint leaves into the pan, toss well, then pour in the coconut milk and half a tin’s worth of water.<br>
    8) Bring to the boil, simmer for 5 minutes, then taste, season to perfection, and scatter over the reserved mint leaves.<br>
    9) Give the cauli rice a good mix up, and serve on the side.`,
    vegetarian: false,
    difficultyHard: true,
    photoLink: 'https://img.jamieoliver.com/jamieoliver/recipe-database/108100212.jpg?tr=w-800,h-1066',
    source: 'https://www.jamieoliver.com/recipes/beef-recipes/spicy-beef-cauli-rice/',
    meal: 'lunch'
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
    instructions: `1) Preheat the oven to 180ºC/350ºF/gas 4.<br>
    2) Carefully cut the squash into rough 5cm chunks (seeds and all). Then, in a roasting tray, rub all over with the harissa, 1 tablespoon of olive oil and a pinch of sea salt and black pepper.<br>
    3) Roast for 50 minutes, or until soft, golden and gnarly.<br>
    4) With a few minutes to go, place 1 tablespoon each of extra virgin olive oil and red wine vinegar, and a little salt and pepper, in a large bowl.<br>
    5) Halve, peel, destone, slice and toss in the avocados, then gently mix in the salad leaves.<br>
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
    instructions: `1) Preheat the oven to 170ºC/325ºF/gas 3.<br>
    2) Place a large casserole pan on a high heat, and fry the lamb shanks in 1 tablespoon of olive oil, while you halve, wash and roughly chop the leeks.<br>
    3) Add them to the pan with the pearl barley, umami paste and a pinch of sea salt and black pepper, then stir well.<br>
    4) Pour in the ale and 1 tablespoon of red wine vinegar, then cover with 1.2 litres of water.<br>
    5) Cook in the oven for 2 hours 30 minutes, or until tender, then dish on up. Easy!`,
    vegetarian: false,
    difficultyHard: true,
    photoLink: 'https://img.jamieoliver.com/jamieoliver/recipe-database/89080973.jpg?tr=w-800,h-1066',
    source: 'https://www.jamieoliver.com/recipes/lamb-recipes/ale-barley-lamb-shanks/',
    meal: 'dinner'
  },
  {
    recipe_name: "Buddy's flapjack bisuits",
    description: 'Buttery, syrupy, crimbly goodness',
    ingredient1: 'Unslated Butter',
    ing1quantity: '100g',
    ingredient2: 'Mixed Fruit and nuts',
    ing2quantity: '100g',
    ingredient3: 'Porridge oats',
    ing3quantity: '100g',
    ingredient4: 'Self-Rising flour',
    ing4quantity: '100g',
    ingredient5: 'Golden syrup',
    ing5quantity: '100g',
    instructions: `1) Preheat the oven to 180ºC/350ºF/gas 4.<br>
    2) Line a deep 20cm square baking tin with greaseproof paper and rub with olive oil.<br>
    3) Pulse the butter, dried fruit and nuts, oats and flour in a food processor until the mix comes together and away from the sides, then pulse in the syrup until fully combined.<br>
    4) Transfer to the lined tin, flattening to the edges. Bake for 15 to 20 minutes, or until golden.<br>
    5) CRemove from the oven, slice into 16 squares ready to cut, and leave to cool in the tin for 5 minutes.<br>
    6) Use the paper to lift out on to a wire rack, and leave to cool completely. Simple, easy, delicious – spread the word!`,
    vegetarian: true,
    difficultyHard: false,
    photoLink: 'https://img.jamieoliver.com/jamieoliver/recipe-database/105677969.jpg?tr=w-800,h-1066',
    source: 'https://www.jamieoliver.com/recipes/oat-recipes/buddy-s-flapjack-biscuits/',
    meal: 'breakfast'
  },
  {
    recipe_name: 'Italian seared beef',
    description: 'Beautiful Rump Steak with Green Pesto and Paresean',
    ingredient1: 'Pine Nuts',
    ing1quantity: '1 TBsp',
    ingredient2: 'Rump Steak',
    ing2quantity: '250g',
    ingredient3: 'Green Pesto',
    ing3quantity: '2 heaping tsp',
    ingredient4: 'Rocket',
    ing4quantity: '40g',
    ingredient5: 'Parmesean Cheese',
    ing5quantity: '15g',
    instructions: `1) Put a large non-stick frying pan on a high heat, toasting the pine nuts as it heats up, tossing regularly and removing when golden.<br>
    2) Cut the fat off the rump, finely chop the fat and place in the pan to render and crisp up while you cut the sinew off the rump, then season it with sea salt and black pepper.<br>
    3) Place between two sheets of greaseproof paper and bash to 1cm thick with a rolling pin, also tenderizing the meat.<br>
    4) TScoop out and reserve the crispy bits of fat, then sear the steak in the hot pan for 1 minute on each side, until golden but still blushing in the middle. Remove to a board.<br>
    5) Spread the pesto over a sharing platter. Thinly slice the steak at an angle, then plate up. Pile the rocket on top, then scatter over the pine nuts and reserved crispy fat, if you like.<br>
    6) Mix the steak resting juices with 1 tablespoon of extra virgin olive oil and drizzle over. Shave over the Parmesan, tossing before serving.`,
    vegetarian: false,
    difficultyHard: true,
    photoLink: 'https://img.jamieoliver.com/jamieoliver/recipe-database/89080985.jpg?tr=w-800,h-1066',
    source: 'https://www.jamieoliver.com/recipes/beef-recipes/italian-seared-beef/',
    meal: 'dinner'
  },
  {
    recipe_name: 'Sweet and Sour Chicken Noodles',
    description: 'With Chicken Skin Crakling',
    ingredient1: 'Chicken Thighs',
    ing1quantity: '2 x 200g',
    ingredient2: 'Rice Noodles',
    ing2quantity: '150g',
    ingredient3: 'Sugar snap peas',
    ing3quantity: '200g',
    ingredient4: 'Worcestershire Sauce',
    ing4quantity: '2 TBsp',
    ingredient5: 'Chilli Jam',
    ing5quantity: '2 tsp',
    instructions: `1) Pull the skin off the chicken. Place the skin in a large non-stick frying pan on a medium heat to render and get golden, turning occasionally.<br>
    2) Cut the bones out of the thighs and chuck into the pan for bonus flavour, then chop the meat into 2cm pieces.<br>
    3) Move the skin and bones to one side of the pan, then add the meat alongside and cook for 5 minutes, or until golden, stirring occasionally.<br>
    4) Once crispy, remove, chop and reserve the skin, discarding the bones.<br>
    5) Meanwhile, cook the noodles in boiling salted water according to the packet instructions. Halve the sugar snaps lengthways.<br>
    6) Once soft, drain the noodles, reserving a mugful of cooking water, then refresh under cold water.
    7) Use scissors to snip the noodles into roughly 8cm lengths.
    8) Stir the Worcestershire sauce and chilli jam into the chicken pan and let the jam melt, then add the sugar snaps and noodles.
    9) Toss over the heat for 2 minutes, adding a splash of reserved noodle water to loosen, if needed.
    10) Taste and season to perfection with sea salt and black pepper, then dish up and sprinkle over the reserved crispy chicken skin.`,
    vegetarian: false,
    difficultyHard: true,
    photoLink: 'https://img.jamieoliver.com/jamieoliver/recipe-database/89081008.jpg?tr=w-800,h-1066',
    source: 'https://www.jamieoliver.com/recipes/chicken-recipes/sweet-sour-chicken-noodles/',
    meal: 'lunch'
  },
  {
    recipe_name: 'Mango Rice Pudding',
    description: 'Wtih Star Anise and Runny Honey',
    ingredient1: 'Pudding Rice',
    ing1quantity: '150g',
    ingredient2: 'Star Anise',
    ing2quantity: '4',
    ingredient3: 'Frozen Mango Chunks',
    ing3quantity: '250g',
    ingredient4: 'Runny Honey',
    ing4quantity: '4 TBsp',
    ingredient5: 'Greek-Style coconut Yogurt',
    ing5quantity: '4 TBsp',
    instructions: `1) Place the rice, star anise, frozen mango, 3 tablespoons of honey and a tiny pinch of sea salt in a pan on a medium heat. 
    2) Cover with 700ml of water and simmer for 25 minutes, or until thick and creamy, stirring occasionally.<br>
    3) Stir through the yoghurt so it’s nice and creamy, then divide between your bowls.<br>
    4) Drizzle over the remaining honey, and enjoy. Super-easy!`,
    vegetarian: true,
    difficultyHard: false,
    photoLink: 'https://img.jamieoliver.com/jamieoliver/recipe-database/89080986.jpg?tr=w-800,h-1066',
    source: 'https://www.jamieoliver.com/recipes/rice-recipes/mango-rice-pudding/',
    meal: 'breakfast'
  }
]

const seedRecipes = () => Recipe.bulkCreate(recipeData)

module.exports = seedRecipes