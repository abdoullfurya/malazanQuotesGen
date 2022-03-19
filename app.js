// lorem text

const text = [
    `“Children are dying."
    Lull nodded. "That's a succinct summary of humankind, I'd say. Who needs tomes and volumes of history? Children are dying. The injustices of the world hide in those three words.”
    ― Steven Erikson, Deadhouse Gates.`,
    `“Kallor shrugged. '[...] I have walked this land when the T'lan Imass were but children. I have commanded armies a hundred thousand strong. I have spread the fire of my wrath across entire continents, and sat alone upon tall thrones. Do you grasp the meaning of this?'

    'Yes,' [said Caladan Brood.] 'You never learn.”`,
    `“Tell me, Tool, what dominates your thoughts?'
    The Imass shrugged before replying.
    'I think of futility, Adjunct.'
    'Do all Imass think about futility?'
    'No. Few think at all.'
    'Why is that?'
    The Imass leaned his head to one side and regarded her.
    'Because Adjunct, it is futile.”`,
    `“Ambition is not a dirty word. Piss on compromise. Go for the throat.” `,
    `“We humans do not understand compassion. In each moment of our lives, we betray it. Aye, we know of its worth, yet in knowing we then attach to it a value, we guard the giving of it, believing it must be earned, T’lan Imass. Compassion is priceless in the truest sense of the wold. It must be given freely. In abundance.”
    ― Steven Erikson, Memories of Ice`,
    `“We humans do not understand compassion. In each moment of our lives, we betray it. Aye, we know of its worth, yet in knowing we then attach to it a value, we guard the giving of it, believing it must be earned, T’lan Imass. Compassion is priceless in the truest sense of the wold. It must be given freely. In abundance.”
    ― Steven Erikson, Memories of Ice`,
    `There is something profoundly cynical, my friends, in the notion of paradise after death. The lure is evasion. The promise is excusative. One need not accept responsibility for the world as it is, and by extension, one need do nothing about it. To strive for change, for true goodness in this mortal world, one must acknowledge and accept, within one's own soul, that this mortal reality has purpose in itself, that its greatest value is not for us, but for our children and their children. To view life as but a quick passage alone a foul, tortured path – made foul and tortured by our own indifference – is to excuse all manner of misery and depravity, and to exact cruel punishment upon the innocent lives to come.

    I defy this notion of paradise beyond the gates of bone. If the soul truly survives the passage, then it behooves us – each of us, my friends – to nurture a faith in similitude: what awaits us is a reflection of what we leave behind, and in the squandering of our mortal existence, we surrender the opportunity to learn the ways of goodness, the practice of sympathy, empathy, compassion and healing – all passed by in our rush to arrive at a place of glory and beauty, a place we did not earn, and most certainly do not deserve.”`,
    `“Show me a god that does not demand mortal suffering.
    Show me a god that celebrates diversity, a celebration that embraces even non-believers, and is not threatened by them.
    Show me a god that understands the meaning of peace. In life, not in death.”
    ― Steven Erikson, The Bonehunters`,
    `“Every decision you make can change the world. The best life is the one the gods don't notice. You want to live free, boy, live quietly."
    "I want to be a soldier. A hero."
    "You'll grow out of it.”
    ― Steven Erikson, Gardens of the Moon`,
];

//Select 'form', 'result' and 'amount'
//Add event listener to the for to listen for a submit event
// Since a form is set by default to submit to a server
// and I need the submit button to generate random text from the array of texts above
//Add a preventDefault method to prevent the default behaviour
//All inputs return a string so to make sure it returns a number, 
// I used parseInt to parse the value to a nnumber
// check to see if the value isNAN || <= 0 || > 9
// generate random tesxt 
//To generate a random quote from the array, create a random variable
// by calling math.floor and math.random and multiplying it by the array length
//else, create a variable and make a copy of the text array, iterate over
// said array and return the desired text
//set the result innerHTML to the copied array


const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length)

    if (isNaN(value) || value <= 0 || value > 9) {
        result.innerHTML = `<p class="result">${text[random]}</p>`
    } else {
        let tempText = text.slice(0, value);
        tempText = tempText.map(function(item) {
                return `<p class="result">${item}</p>`;
            })
            .join("");
        result.innerHTML = tempText;

    }

});