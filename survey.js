const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("What's your name? ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite meal? ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you're amazing at! ", (superpower => {
              console.log(`This is ${name} and they like listening to ${music} while ${activity}. They also like eating ${food} for ${meal}. Their favourite sport is ${sport} and they are really good at ${superpower}!`)

              rl.close()
            }))
          })
        })
      })
    })
  })
});