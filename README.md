## MDDN 242 2024 Assignment 2
Lliam Booth

## Parluxst
meaning: greetings to the light of the morning

## Design
I began the project initally unsure of the direction i wanted to go in i had the idea to link this project into one of my own personal world building projects or but i was initally unsure and so began by making a simple rectangle based font for the letters ABCD. Eventually i decided that I might as well. and so i decided on creating an Alphabet for one of the early languages of the Tunak (Parluxst). A spacefaring race of turtle like humanoids whos ancient history and cultures I plan to create and catalogue both as an absolute record and as an in universe textbook style telling with all the inacuraccy and misunderstanding that entails.

To that end I decided on using this as a starting point for this assignment. with that in mind I began by taking a small collection of words linked to simple concepts and often used items, and taking one of their primary phonemes(distinct units of sound such as p, b, d,  and t seen in the words pad, pat, bad, and bat) to be used as a letters for this project.![Precodepaper1](readmeimg/Precodepaper1.jpg) Once I had assisgned a word to each unique Phoneme in Parluxst i created a basic symbol which literaly depicts the concept or item of the word for example a drawing of a rock for the word meaning rock.<img src="https://your-image-url.type"width = "1024"> this type of letter form was inspired primarily by realworld examples of early writing systems. almost all of which were developed from drawings of the objects or concepts being depicted eventually coming to be associated with an individual sylable and eventually single Phonemes. one of these systems which was my primary inspiration was that of oracle bone script (see below) which is an early chinese writing system which uses hundreds of unique bone carved sybols to depict words. 
![OracleCarvingexample](readmeimg/Oracleboneex.jpeg)

because Parluxst has far fewer Consonants than english and thus the 26 letter alphabet is too large i stretched the number of letters by having a unique sybol for each vowel variation rather than the single symbol system that english uses for vowels. This got me to the magic 26 and from here it was simply a matter of simplifing and then creating the symbols for code. The simplification of symbols wents well as I managed to reduce the symbols complexity down to 4 lines and two arcs at most with many having less than this. See list of Phoneme [conversions][def]

I began by using a simple line function to draw the lines but i quickly found that these would use far to many variables so i instead used rect functions with rotate to reduce the number of variables. to further this i created a custom rect function that only used 4 variables to draw a rect with a constant width with custom rotation length and x,y positioning. 4 of these lines as well as 2 custom arc functions brought my total variable to 25 i spent several days trying to find a way of reducing this number without compromising too heavily on the design of the letterforms this proved to not be posible and so I continued with 25 variables 5 over the briefs condition.

From this point in the project it was primarily grunt work taking my paper sketches and creating them in code making minor adjustments to a couple to make them more aesthetically pleasing and easier to recreate in code. once all the letters were created i started work on the background i wanted to make the background look like bone to connect back with the primary inspiration of the oracle bone script as Parluxst would be craved on similar bone pieces. To do this I used two layered noise functions to create a variable coloured backround using colours taken from an image of an oracle bone carving these colours where edited slightly based on what i felt looked better although these changes were limited.

## Letter Conversions

[def]: #LettersConversion