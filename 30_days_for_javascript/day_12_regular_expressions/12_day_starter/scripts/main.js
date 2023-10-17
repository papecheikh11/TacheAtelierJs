// Création d'un modèle avec le constructeur RegExp
// Déclarer une expression régulière sans indicateur global ni indicateur insensible à la casse.

// without flag
// let pattern = 'love'
// let regEx = new RegExp(pattern)

// Déclaration d'une expression régulière avec un indicateur global et un indicateur insensible à la casse.

// let pattern1 = 'love'
// let flag1 = 'gi'
// let regEx1 = new RegExp(pattern1, flag1)

// Déclaration d'un modèle regex à l'aide de l'objet RegExp. Écrire le modèle et le drapeau dans le constructeur RegExp

// let regEx = new RegExp('love','gi')

// Création d'un modèle sans constructeur RegExp
// Déclaration d'une expression régulière avec un indicateur global et un indicateur insensible à la casse.

// let regEx= /love/gi

// L'expression régulière ci-dessus est la même que celle que nous avons créée avec le constructeur RegExp

// let regEx= new RegExp('love','gi')

// Méthodes des objets RegExpp
// Voyons quelques méthodes RegExp

// Test pour une correspondance
// test() :Teste une correspondance dans une chaîne. Il renvoie vrai ou faux.

const str = 'I love JavaScript'
const pattern = /love/
const result = pattern.test(str)
console.log(result)

// Tableau contenant toute la correspondance
// match() : renvoie un tableau contenant toutes les correspondances, y compris les groupes de capture, ou null si aucune correspondance n'est trouvée. Si nous n'utilisons pas d'indicateur global, match() renvoie un tableau contenant le modèle, l'index, l'entrée et le groupe.

const st0 = 'I love JavaScript'
const pattern0 = /love/
const result0 = str.match(pattern0)
console.log(result0)

const str1 = 'I love JavaScript'
const pattern1 = /love/g
const result1 = str.match(pattern1)
console.log(result1)

// search() : Teste une correspondance dans une chaîne. Il renvoie l'index de la correspondance, ou -1 si la recherche échoue.

const str2 = 'I love JavaScript'
const pattern2 = /love/g
const result2 = str.search(pattern2)
console.log(result2)

// Remplacer une sous-chaîne
// replace() : exécute une recherche d'une correspondance dans une chaîne et remplace la sous-chaîne correspondante par une sous-chaîne de remplacement.

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)

const txt1 = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt1.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)


const txt2 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt2.replace(/%/g, '')
console.log(matches)  

// Support carré
// Utilisons des crochets pour inclure les minuscules et les majuscules

const pattern3 = '[Aa]pple' // this square bracket means either A or a
const txt3 = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches1 = txt3.match(pattern3)

console.log(matches1)  

// A l'aide du crochet et ou de l'opérateur , on parvient à extraire Pomme, pomme, Banane et banane.

// Caractère d'échappement (\) dans RegExp

const pattern4 = /\d/g  // d is a special character which means digits
const txt4 = 'This regular expression example was made in January 12,  2020.'
const matches4 = txt4.match(pattern4)

console.log(matches4)  // ["1", "2", "2", "0", "2", "0"], this is not what we want

// Une ou plusieurs fois(+)

const pattern5 = /\d+/g  // d is a special character which means digits
const txt5 = 'This regular expression example was made in January 12,  2020.'
const matches5 = txt5. match(pattern5)
console.log(matches5)  // ["12", "2020"], this is not what we want

// Période(.)

const pattern6 = /[a]./g  // this square bracket means a and . means any character except new line
const txt6 = 'Apple and banana are fruits'
const matches6 = txt.match(pattern6)

console.log(matches6)  // ["an", "an", "an", "a ", "ar"]

const pattern7 = /[a].+/g  // . any character, + any character one or more times 
const txt7 = 'Apple and banana are fruits'
const matches7 = txt.match(pattern7)

console.log(matches7)  // ['and banana are fruits']


// Zéro ou plusieurs fois(*)
// Zéro ou plusieurs fois. Le modèle peut ne pas se produire ou se produire plusieurs fois.


const pattern8 = /[a].*/g  //. any character, + any character one or more times 
const txt8 = 'Apple and banana are fruits'
const matches8 = txt.match(pattern8)

console.log(matches8)  // ['and banana are fruits']


// Zéro ou une fois (?)
// Zéro ou une fois. Le modèle peut ne pas se produire ou se produire une seule fois.

const txt9 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern9 = /[Ee]-?mail/g  // ? means optional
matches9 = txt.match(pattern9)

console.log(matches9)  // ["e-mail", "email", "Email", "E-mail"]
