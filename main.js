'use strict';

var app = angular.module('myApp',[]);

app.controller("mainCtrl", function ($scope,$interval) {

  $scope.contacts = [
{
name: "Hull Franks",
email: "hullfranks@handshake.com"
},
{
name: "Lawson Sykes",
email: "lawsonsykes@handshake.com"
},
{
name: "Clara Savage",
email: "clarasavage@handshake.com"
},
{
name: "Lane Gaines",
email: "lanegaines@handshake.com"
},
{
name: "Rosemarie Hughes",
email: "rosemariehughes@handshake.com"
},
{
name: "Bolton Finch",
email: "boltonfinch@handshake.com"
},
{
name: "Teri Larson",
email: "terilarson@handshake.com"
},
{
name: "Clay Snyder",
email: "claysnyder@handshake.com"
},
{
name: "Livingston White",
email: "livingstonwhite@handshake.com"
},
{
name: "Bianca Everett",
email: "biancaeverett@handshake.com"
},
{
name: "Stone Erickson",
email: "stoneerickson@handshake.com"
},
{
name: "Burton Case",
email: "burtoncase@handshake.com"
},
{
name: "Norton Sanders",
email: "nortonsanders@handshake.com"
},
{
name: "Marian Daniels",
email: "mariandaniels@handshake.com"
},
{
name: "Elisa Wilder",
email: "elisawilder@handshake.com"
},
{
name: "Tommie Chang",
email: "tommiechang@handshake.com"
},
{
name: "Franco Hebert",
email: "francohebert@handshake.com"
},
{
name: "Carla Maddox",
email: "carlamaddox@handshake.com"
},
{
name: "Iris Heath",
email: "irisheath@handshake.com"
},
{
name: "Mooney Mercado",
email: "mooneymercado@handshake.com"
},
{
name: "Huffman Murray",
email: "huffmanmurray@handshake.com"
},
{
name: "Ginger Prince",
email: "gingerprince@handshake.com"
},
{
name: "Wooten Jenkins",
email: "wootenjenkins@handshake.com"
},
{
name: "Leticia Campos",
email: "leticiacampos@handshake.com"
},
{
name: "Juliette Baldwin",
email: "juliettebaldwin@handshake.com"
},
{
name: "Lorie Chapman",
email: "loriechapman@handshake.com"
},
{
name: "Ora Allen",
email: "oraallen@handshake.com"
},
{
name: "Clemons York",
email: "clemonsyork@handshake.com"
},
{
name: "Becker Mcconnell",
email: "beckermcconnell@handshake.com"
},
{
name: "Wilder Taylor",
email: "wildertaylor@handshake.com"
},
{
name: "Sykes Wood",
email: "sykeswood@handshake.com"
},
{
name: "Oneal Tran",
email: "onealtran@handshake.com"
},
{
name: "Kemp Herrera",
email: "kempherrera@handshake.com"
},
{
name: "Sosa Adams",
email: "sosaadams@handshake.com"
},
{
name: "Hancock Lyons",
email: "hancocklyons@handshake.com"
},
{
name: "Lopez Salinas",
email: "lopezsalinas@handshake.com"
},
{
name: "Melanie Beard",
email: "melaniebeard@handshake.com"
},
{
name: "Shaw Whitley",
email: "shawwhitley@handshake.com"
},
{
name: "Talley Brady",
email: "talleybrady@handshake.com"
},
{
name: "Barton Mckenzie",
email: "bartonmckenzie@handshake.com"
},
{
name: "Marjorie Burns",
email: "marjorieburns@handshake.com"
},
{
name: "Norman Collins",
email: "normancollins@handshake.com"
},
{
name: "Amie Holmes",
email: "amieholmes@handshake.com"
},
{
name: "Norma Sharpe",
email: "normasharpe@handshake.com"
},
{
name: "Colon Waters",
email: "colonwaters@handshake.com"
},
{
name: "Gonzalez Faulkner",
email: "gonzalezfaulkner@handshake.com"
},
{
name: "Tasha Smith",
email: "tashasmith@handshake.com"
},
{
name: "Neva Tanner",
email: "nevatanner@handshake.com"
},
{
name: "Eva Hodges",
email: "evahodges@handshake.com"
},
{
name: "Socorro Ingram",
email: "socorroingram@handshake.com"
},
{
name: "Gill Hoffman",
email: "gillhoffman@handshake.com"
},
{
name: "Dorthy Thompson",
email: "dorthythompson@handshake.com"
},
{
name: "Bates Nelson",
email: "batesnelson@handshake.com"
},
{
name: "Morris Hull",
email: "morrishull@handshake.com"
},
{
name: "Ofelia Warren",
email: "ofeliawarren@handshake.com"
},
{
name: "Ola Bell",
email: "olabell@handshake.com"
},
{
name: "Patel Winters",
email: "patelwinters@handshake.com"
},
{
name: "Lauri Walters",
email: "lauriwalters@handshake.com"
},
{
name: "Collins Stevenson",
email: "collinsstevenson@handshake.com"
},
{
name: "Susana Glenn",
email: "susanaglenn@handshake.com"
},
{
name: "Cara Higgins",
email: "carahiggins@handshake.com"
},
{
name: "Tamera Gibson",
email: "tameragibson@handshake.com"
},
{
name: "Josie Bradford",
email: "josiebradford@handshake.com"
},
{
name: "Humphrey Palmer",
email: "humphreypalmer@handshake.com"
},
{
name: "Chris Lynch",
email: "chrislynch@handshake.com"
},
{
name: "Merritt Cox",
email: "merrittcox@handshake.com"
},
{
name: "Mcpherson Chen",
email: "mcphersonchen@handshake.com"
},
{
name: "Bell Mitchell",
email: "bellmitchell@handshake.com"
},
{
name: "Duran England",
email: "duranengland@handshake.com"
},
{
name: "Jeanie Pearson",
email: "jeaniepearson@handshake.com"
},
{
name: "Hill Davidson",
email: "hilldavidson@handshake.com"
},
{
name: "Alford Mayer",
email: "alfordmayer@handshake.com"
},
{
name: "Riley Mcclain",
email: "rileymcclain@handshake.com"
},
{
name: "Carney Porter",
email: "carneyporter@handshake.com"
},
{
name: "Millicent Lee",
email: "millicentlee@handshake.com"
},
{
name: "Mccarthy Boyle",
email: "mccarthyboyle@handshake.com"
},
{
name: "Benita Bray",
email: "benitabray@handshake.com"
},
{
name: "Hays Atkinson",
email: "haysatkinson@handshake.com"
},
{
name: "Janie Mcpherson",
email: "janiemcpherson@handshake.com"
},
{
name: "Tonya Keller",
email: "tonyakeller@handshake.com"
},
{
name: "Dominguez Mendoza",
email: "dominguezmendoza@handshake.com"
},
{
name: "Ophelia Cantu",
email: "opheliacantu@handshake.com"
},
{
name: "Carissa Bullock",
email: "carissabullock@handshake.com"
},
{
name: "Johnston Cervantes",
email: "johnstoncervantes@handshake.com"
},
{
name: "Ann Rosario",
email: "annrosario@handshake.com"
},
{
name: "Corinne Nolan",
email: "corinnenolan@handshake.com"
},
{
name: "Tate Cochran",
email: "tatecochran@handshake.com"
},
{
name: "Amparo Holder",
email: "amparoholder@handshake.com"
},
{
name: "Nadia Reynolds",
email: "nadiareynolds@handshake.com"
},
{
name: "Gloria Patel",
email: "gloriapatel@handshake.com"
},
{
name: "Hope Ramos",
email: "hoperamos@handshake.com"
},
{
name: "Josephine Schwartz",
email: "josephineschwartz@handshake.com"
},
{
name: "Luz Puckett",
email: "luzpuckett@handshake.com"
},
{
name: "Wilkins Mosley",
email: "wilkinsmosley@handshake.com"
},
{
name: "Morin Talley",
email: "morintalley@handshake.com"
},
{
name: "Winifred Rios",
email: "winifredrios@handshake.com"
},
{
name: "Hicks Merrill",
email: "hicksmerrill@handshake.com"
},
{
name: "Delaney Webster",
email: "delaneywebster@handshake.com"
},
{
name: "Kimberley Ferguson",
email: "kimberleyferguson@handshake.com"
},
{
name: "Joseph Pruitt",
email: "josephpruitt@handshake.com"
},
{
name: "Rebecca Petty",
email: "rebeccapetty@handshake.com"
},
{
name: "Butler Cote",
email: "butlercote@handshake.com"
},
{
name: "Mays Buckner",
email: "maysbuckner@handshake.com"
},
{
name: "Parsons Melendez",
email: "parsonsmelendez@handshake.com"
},
{
name: "Benjamin Turner",
email: "benjaminturner@handshake.com"
},
{
name: "Kristine Slater",
email: "kristineslater@handshake.com"
},
{
name: "Small Walsh",
email: "smallwalsh@handshake.com"
},
{
name: "Solis Espinoza",
email: "solisespinoza@handshake.com"
},
{
name: "Lynne Skinner",
email: "lynneskinner@handshake.com"
},
{
name: "Corina Rich",
email: "corinarich@handshake.com"
},
{
name: "Audrey Mendez",
email: "audreymendez@handshake.com"
},
{
name: "Cannon Glover",
email: "cannonglover@handshake.com"
},
{
name: "Alexis Knapp",
email: "alexisknapp@handshake.com"
},
{
name: "Vazquez Giles",
email: "vazquezgiles@handshake.com"
},
{
name: "Holly Hendrix",
email: "hollyhendrix@handshake.com"
},
{
name: "Katelyn Sweeney",
email: "katelynsweeney@handshake.com"
},
{
name: "Collier Larsen",
email: "collierlarsen@handshake.com"
},
{
name: "Reynolds Whitehead",
email: "reynoldswhitehead@handshake.com"
},
{
name: "Alexandra Wilson",
email: "alexandrawilson@handshake.com"
},
{
name: "Riddle Robinson",
email: "riddlerobinson@handshake.com"
},
{
name: "Dickson Carver",
email: "dicksoncarver@handshake.com"
},
{
name: "Coleman Wells",
email: "colemanwells@handshake.com"
},
{
name: "Joy Mclean",
email: "joymclean@handshake.com"
},
{
name: "Diaz Bowers",
email: "diazbowers@handshake.com"
},
{
name: "Shannon Barlow",
email: "shannonbarlow@handshake.com"
},
{
name: "Hart Morrow",
email: "hartmorrow@handshake.com"
},
{
name: "Lidia Christensen",
email: "lidiachristensen@handshake.com"
},
{
name: "Rosanna Dejesus",
email: "rosannadejesus@handshake.com"
},
{
name: "Kramer Moon",
email: "kramermoon@handshake.com"
},
{
name: "Angelique Garcia",
email: "angeliquegarcia@handshake.com"
},
{
name: "Rene Parsons",
email: "reneparsons@handshake.com"
},
{
name: "Raquel Raymond",
email: "raquelraymond@handshake.com"
},
{
name: "Christine Moran",
email: "christinemoran@handshake.com"
},
{
name: "English West",
email: "englishwest@handshake.com"
},
{
name: "Bonner Benton",
email: "bonnerbenton@handshake.com"
},
{
name: "Mona Vasquez",
email: "monavasquez@handshake.com"
},
{
name: "Patricia Fowler",
email: "patriciafowler@handshake.com"
},
{
name: "Victoria Brock",
email: "victoriabrock@handshake.com"
},
{
name: "Elinor Ewing",
email: "elinorewing@handshake.com"
},
{
name: "Frances Shaffer",
email: "francesshaffer@handshake.com"
},
{
name: "Deidre Ashley",
email: "deidreashley@handshake.com"
},
{
name: "Hahn Rivera",
email: "hahnrivera@handshake.com"
},
{
name: "Hurst Simmons",
email: "hurstsimmons@handshake.com"
},
{
name: "Fitzpatrick Hartman",
email: "fitzpatrickhartman@handshake.com"
},
{
name: "Fran Gregory",
email: "frangregory@handshake.com"
},
{
name: "Knapp Sanford",
email: "knappsanford@handshake.com"
},
{
name: "Hannah Knowles",
email: "hannahknowles@handshake.com"
},
{
name: "Loraine Roth",
email: "loraineroth@handshake.com"
},
{
name: "Jaclyn Huff",
email: "jaclynhuff@handshake.com"
},
{
name: "Irma Buckley",
email: "irmabuckley@handshake.com"
},
{
name: "Rasmussen Dodson",
email: "rasmussendodson@handshake.com"
},
{
name: "Crawford Valentine",
email: "crawfordvalentine@handshake.com"
},
{
name: "Valentine Conley",
email: "valentineconley@handshake.com"
},
{
name: "Nannie Kelley",
email: "nanniekelley@handshake.com"
},
{
name: "Leon Solomon",
email: "leonsolomon@handshake.com"
},
{
name: "Tucker Gray",
email: "tuckergray@handshake.com"
},
{
name: "Gale Mcmillan",
email: "galemcmillan@handshake.com"
},
{
name: "Bridget Paul",
email: "bridgetpaul@handshake.com"
},
{
name: "Daisy Jacobs",
email: "daisyjacobs@handshake.com"
},
{
name: "Elena Powell",
email: "elenapowell@handshake.com"
},
{
name: "Lilly Bond",
email: "lillybond@handshake.com"
},
{
name: "Lang Marks",
email: "langmarks@handshake.com"
},
{
name: "Horn Lawson",
email: "hornlawson@handshake.com"
},
{
name: "Booker Wooten",
email: "bookerwooten@handshake.com"
},
{
name: "Amalia Cardenas",
email: "amaliacardenas@handshake.com"
},
{
name: "Melendez Sweet",
email: "melendezsweet@handshake.com"
},
{
name: "Morales Pollard",
email: "moralespollard@handshake.com"
},
{
name: "Rachel Dickson",
email: "racheldickson@handshake.com"
},
{
name: "Tameka Gross",
email: "tamekagross@handshake.com"
},
{
name: "Reeves Torres",
email: "reevestorres@handshake.com"
},
{
name: "Mabel Banks",
email: "mabelbanks@handshake.com"
},
{
name: "Hinton Valdez",
email: "hintonvaldez@handshake.com"
},
{
name: "Marietta Grimes",
email: "mariettagrimes@handshake.com"
},
{
name: "Angelina Haney",
email: "angelinahaney@handshake.com"
},
{
name: "Blevins Blake",
email: "blevinsblake@handshake.com"
},
{
name: "Inez Wiley",
email: "inezwiley@handshake.com"
},
{
name: "Rogers Flores",
email: "rogersflores@handshake.com"
},
{
name: "Noble Kennedy",
email: "noblekennedy@handshake.com"
},
{
name: "Lawanda Navarro",
email: "lawandanavarro@handshake.com"
},
{
name: "Marguerite Swanson",
email: "margueriteswanson@handshake.com"
},
{
name: "Mable Woods",
email: "mablewoods@handshake.com"
},
{
name: "Maxine Perez",
email: "maxineperez@handshake.com"
},
{
name: "Wood Holman",
email: "woodholman@handshake.com"
},
{
name: "Lynda Miles",
email: "lyndamiles@handshake.com"
},
{
name: "Kellie Velez",
email: "kellievelez@handshake.com"
},
{
name: "Betty Figueroa",
email: "bettyfigueroa@handshake.com"
},
{
name: "Joyce Hodge",
email: "joycehodge@handshake.com"
},
{
name: "Bertie Woodard",
email: "bertiewoodard@handshake.com"
},
{
name: "Buckley Woodward",
email: "buckleywoodward@handshake.com"
},
{
name: "Davenport Dillard",
email: "davenportdillard@handshake.com"
},
{
name: "Reid Macdonald",
email: "reidmacdonald@handshake.com"
},
{
name: "Farrell Hess",
email: "farrellhess@handshake.com"
},
{
name: "Mcconnell Elliott",
email: "mcconnellelliott@handshake.com"
},
{
name: "Katina Snider",
email: "katinasnider@handshake.com"
},
{
name: "Leigh Boyer",
email: "leighboyer@handshake.com"
},
{
name: "Kendra Lott",
email: "kendralott@handshake.com"
},
{
name: "Dee Spencer",
email: "deespencer@handshake.com"
},
{
name: "Imelda Carter",
email: "imeldacarter@handshake.com"
},
{
name: "Prince Frye",
email: "princefrye@handshake.com"
},
{
name: "Yesenia Noble",
email: "yesenianoble@handshake.com"
}
];
  $scope.addContact = function () {
    $scope.contacts.push($scope.newContact);
    $scope.newContact = {}
  };

  $scope.removeContact = function (contact) {
    var index = $scope.contacts.indexOf(contact)
    $scope.contacts.splice(index,1)
  }
});
