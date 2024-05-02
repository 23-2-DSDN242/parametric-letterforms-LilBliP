## MDDN 242 2024 Assignment 2
### Lliam Booth

## Parluxst
meaning: greetings to the light of the morning

## Design
I began the project initally unsure of the direction i wanted to go in i had the idea to link this project into one of my own personal world building projects or but i was initally unsure and so began by making a simple rectangle based font for the letters ABCD. Eventually i decided that I might as well. and so i decided on creating an Alphabet for one of the early languages of the Tunak (Parluxst). A spacefaring race of turtle like humanoids whos ancient history and cultures I plan to create and catalogue both as an absolute record and as an in universe textbook style telling with all the inacuraccy and misunderstanding that entails.

### Frontload Paper Design

To that end I decided on using this as a starting point for this assignment. with that in mind I began by taking a small collection of words linked to simple concepts and often used items, and taking one of their primary phonemes(distinct units of sound such as p, b, d,  and t seen in the words pad, pat, bad, and bat) to be used as a letters for this project.![Precodepaper1](readmeimg/Precodepaper1.jpg) Once I had assisgned a word to each unique Phoneme in Parluxst i created a basic symbol which literaly depicts the concept or item of the word for example a drawing of a rock for the word meaning rock.![Precodepaper3](readmeimg/Precodepaper3.jpg) this type of letter form was inspired primarily by realworld examples of early writing systems. almost all of which were developed from drawings of the objects or concepts being depicted eventually coming to be associated with an individual sylable and eventually single Phonemes. one of these systems which was my primary inspiration was that of oracle bone script (see below) which is an early chinese writing system which uses hundreds of unique bone carved sybols to depict words. 
![OracleCarvingexample](readmeimg/Oracleboneex.jpeg)

because Parluxst has far fewer Consonants than english and thus the 26 letter alphabet is too large i stretched the number of letters by having a unique sybol for each vowel variation rather than the single symbol system that english uses for vowels. This got me to the magic 26 and from here it was simply a matter of simplifing and then creating the symbols for code. The simplification of symbols wents well as I managed to reduce the symbols complexity down to 4 lines and two arcs at most with many having less than this. See list of Phoneme [conversions][def]

### Into The Code

I began by using a simple line function to draw the lines but i quickly found that these would use far to many variables so i instead used rect functions with rotate to reduce the number of variables. to further this i created a custom rect function that only used 4 variables to draw a rect with a constant width with custom rotation length and x,y positioning. 4 of these lines as well as 2 custom arc functions brought my total variable to 25 i spent several days trying to find a way of reducing this number without compromising too heavily on the design of the letterforms this proved to not be posible and so I continued with 25 variables 5 over the briefs condition.

From this point in the project it was primarily grunt work taking my paper sketches and creating them in code making minor adjustments to a couple to make them more aesthetically pleasing and easier to recreate in code.![Alphabetnearfin](readmeimg/Alphanearfin.jpg) once all the letters were created I grabbed my pre-existing numerals and added them into the project making minor changes to acomodate the restrictions of this project. once this was completed I started work on the background 

### Background
 <img src="https://https://github.com/23-2-DSDN242/parametric-letterforms-LilBliP/blob/main/readmeimg/EXpreline.jpg" width="100">
I wanted to make the background look like bone to connect back with the primary inspiration of the oracle bone script as Parluxst would be carved on similar bone pieces. To do this I used two layered noise functions to create a variable coloured backround using colours taken from an image of an oracle bone carving these colours where edited slightly based on what i felt looked better although these changes were limited. 
Intially the background noise was generated every time the page was updated this caused large load times in Alphabet mode and was completely unusable in Exhibition mode i initally tried using noiseseeds to help reduce load time but this had little effect on load times so I went to get some help from tutors together we came up with two solutions the first of which worked to some extent but was still not fast enough to get Exhibition mode working so I scraped the idea of having new noise on each load and instead saved a noise image for both views the code for these noise patterns is contained within Alphabet.js if future users wish to change the background images of either view.
Looking at the Exhibition mode i felt it still didnt look right so i added several lines using my makeLine function to add some visual interest and i feel this had a massive impact on how it looks.

## Letter Conversions

[def]: #LettersConversion