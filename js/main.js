
window.addEventListener("load", function(){

  var gigVoice = {
  ABORT: "002",
  AC: "003",
  ACCESS: "004",
  ALARM: "005",
  AND: "006",
  ANNOUNCEMENT: "007",
  AREA: "008",
  ARM: "009",
  ARMED: "010",
  ARMING: "011",
  AT: "012",
  ATTIC: "013",
  AUDIO: "014",
  AUTO: "015",
  AUTOMATION: "016",
  AUXILIARY: "017",
  AWAY: "018",
  BABYS: "019",
  BACK: "020",
  BASEMENT: "021",
  BATHROOM: "022",
  BATTERY: "023",
  BEDROOM: "024",
  BONUS: "025",
  BREAK: "026",
  BUTTON: "027",
  BYPASS: "028",
  BYPASSED: "029",
  CABINET: "030",
  CANCEL: "031",
  CARBONMONOXIDE: "032",
  CELLAR: "033",
  CELLULAR: "034",
  CELLRADIO: "035",
  CENTER: "036",
  CHECK: "037",
  CHEST: "038",
  CHILDRENS: "039",
  CHIME: "040",
  CLOSET: "041",
  CODE: "042",
  COMMUNICATIONS: "043",
  COMPUTER: "044",
  CONTROL: "045",
  COOL: "046",
  CRAWL: "047",
  CURRENT: "048",
  DAY: "049",
  DEGREES: "050",
  DEN: "051",
  DETECTOR: "052",
  DIM: "053",
  DINING: "054",
  DISARM: "055",
  DISARMED: "056",
  DOCK: "057",
  DOOR: "058",
  DOWNSTAIRS: "059",
  DRIVEWAY: "060",
  EAST: "061",
  EIGHT: "062",
  EIGHTEEN: "063",
  EIGHTY: "064",
  ELECTRIC: "065",
  ELEVEN: "066",
  EMERGENCY: "067",
  ENTER: "068",
  ENTRANCE: "069",
  ENTRY: "070",
  ERROR: "071",
  EXERCISE: "072",
  EXIT: "073",
  EXITNOW: "074",
  EXTERIOR: "075",
  EXTERNAL: "076",
  FAILURE: "077",
  FAMILY: "078",
  FAN: "079",
  FIFTEEN: "080",
  FIFTY: "081",
  FIRE: "082",
  FIREALERT: "083",
  FIREDETECTOR: "084",
  FIRST: "085",
  FIVE: "086",
  FLOOD: "087",
  FLOOR: "088",
  FLUID: "089",
  FOIL: "090",
  FOR: "091",
  FORTY: "092",
  FOUR: "093",
  FOURTEEN: "094",
  FOURTH: "095",
  FREEZE: "096",
  FREEZER: "097",
  FRONT: "098",
  FURNACE: "099",
  GAME: "100",
  GARAGE: "101",
  GAS: "102",
  GLASS: "103",
  GLASSBREAK: "104",
  GUEST: "105",
  GUN: "106",
  HALL: "107",
  HALLWAY: "108",
  HANGING: "109",
  HANGUP: "110",
  HEAT: "111",
  HIGH: "112",
  HOME: "113",
  HOUSE: "114",
  ICE: "115",
  INSIDE: "116",
  INSTANT: "117",
  INTERIOR: "118",
  INTRUSION: "119",
  IS: "120",
  KEY: "121",
  KEYFOB: "122",
  KEYPAD: "123",
  KIDS: "124",
  KITCHEN: "125",
  LAUNDRY: "126",
  LEFT: "127",
  LEVEL: "128",
  LIBRARY: "129",
  LIGHT: "130",
  LIGHTS: "131",
  LIQUOR: "132",
  LIVING: "133",
  LOADING: "134",
  LOCK: "135",
  LOFT: "136",
  LOW: "137",
  MAIN: "138",
  MAINTENANCE: "139",
  MASTER: "140",
  MEDICAL: "141",
  MEDICINE: "142",
  MENU: "143",
  MIDDLE: "144",
  MONITOR: "145",
  MOTION: "146",
  MOTIONDETECTOR: "147",
  MUD: "148",
  NINE: "149",
  NINETEEN: "150",
  NINETY: "151",
  NORTH: "152",
  NOT: "153",
  NOTREADY: "154",
  NODELAY: "155",
  NOENTRYDELAY: "156",
  NURSERY: "157",
  OFF: "158",
  OFFICE: "159",
  ON: "160",
  ONE: "161",
  ONEHUNDRED: "162",
  OUTPUT: "163",
  OUTSIDE: "164",
  PANEL: "165",
  PANIC: "166",
  PANTRY: "167",
  PATIO: "168",
  PERIMETER: "169",
  PHONELINE: "170",
  PLAY: "171",
  POLICE: "172",
  POOL: "173",
  POUND: "174",
  POWER: "175",
  PRESS: "176",
  PREVIOUS: "177",
  PUMP: "178",
  RADIO: "179",
  READY: "180",
  REAR: "181",
  RELAY: "182",
  REMOTE: "183",
  REPEAT: "184",
  RFJAM: "185",
  RIGHT: "186",
  ROOM: "187",
  SAFE: "188",
  SECOND: "189",
  SECURITY: "190",
  SENSOR: "191",
  SENSORS: "192",
  SESSION: "193",
  SET: "194",
  SEVEN: "195",
  SEVENTEEN: "196",
  SEVENTY: "197",
  SHED: "198",
  SHOP: "199",
  SIDE: "200",
  SILENT: "201",
  SIREN: "202",
  SIX: "203",
  SIXTEEN: "204",
  SIXTY: "205",
  SKYLIGHT: "206",
  SLIDING: "207",
  SMOKE: "208",
  SOUNDER: "209",
  SOUTH: "210",
  211: "?",
  SPARE: "212",
  STAIRS: "213",
  STAR: "214",
  STATUS: "215",
  STAY: "216",
  STOP: "217",
  STORAGE: "218",
  STUDY: "219",
  SUMP: "220",
  SUPERVISION: "221",
  SYSTEM: "222",
  TAMPER: "223",
  TEMPERATURE: "224",
  TEN: "225",
  TERMINATED: "226",
  THERMOSTAT: "227",
  THIRD: "228",
  THIRTEEN: "229",
  THIRTY: "230",
  THREE: "231",
  TO: "232",
  TOOL: "233",
  TRANSMITTED: "234",
  TRANSMITTER: "235",
  TROUBLE: "236",
  TURN: "237",
  TWELVE: "238",
  TWENTY: "239",
  TWO: "240",
  UNLOCK: "241",
  UPPER: "242",
  UPSTAIRS: "243",
  USER: "244",
  UTILITY: "245",
  VALVE: "246",
  VOICE: "247",
  WALL: "248",
  WATER: "249",
  WEST: "250",
  WINDOW: "251",
  WIRELESS: "252",
  YARD: "253",
  ZERO: "254",
  ZONE: "255",
  BALCONY: "256",
  COURTYARD: "257",
  DECK: "258",
  DETACHED: "259",
  OVERHEAD: "260",
  REFRIGERATOR: "261",
  SERVICE: "262",
  SUNROOM: "263",
  WAREHOUSE: "264",
  GATE: "265",
  APARTMENT: "266",
  FOYER: "267",
  TV: "268",
  VIDEO: "269",
  PORCH: "270",
  CORNER: "271",
  BELL: "272",
  BOYS: "273",
  CAMERA: "274",
  CAVE: "275",
  DAUGHTERS: "276",
  DOORBELL: "277",
  GIRLS: "278",
  IMAGE: "279",
  IMAGESENSOR: "280",
  MAN: "281",
  SONS: "282",
  SUN: "283",
  THEATER: "284",
  WING: "285",
  SWITCH: "286"
};
  const code = document.getElementById('code');
  const keys = Object.keys(gigVoice).sort(); // just keys
  // const vals = Object.values(gigVoice); // just values of the keys
  // const objs = Object.entries(gigVoice); // all data

  //Close sideMenu when menuOption is clicked.
  document.getElementById("menu").addEventListener("click",w3_close);

  //When Go! button is clicked in wordSearch section.
  document.getElementById("btnGo").addEventListener("click",countWords);

  //Trimm user input string before search agains gigVoice object's keys.
  function countWords(){
    //get display location into variable.
    var ul = document.getElementById("display","stats");

    //remove any unordered list in DOM.
    while(ul.firstChild) ul.removeChild(ul.firstChild);

    //turn user input to UpperCase since all gigVoice keys are upper case. For easy matching for now.
    //will need to find a fix for apostrophe characters in a word.
    var w = document.getElementById("searchInput").value.toUpperCase();

    //remove end spacing
    w = w.replace(/(^\s*)|(\s*$)/gi,"");

    //gather 2 or more spacing to 1
    w = w.replace(/[ ]{2,}/gi," ");

    //exclude new line with start spacing
    w = w.replace(/\n /,"\n");

    //split string
    w = w.split(' ')
    return voiceCheck(w);

  }

  //search through gigVoice object variable according to user trimmed input.
  function voiceCheck(search){
    //save found words in found array variable.
    var found = [];

    //loop through the length of user inputed words and check to see IF they match gigVoice object keys.
    //if found, push that particular key to found array variable.
      for(var i = 0; i < search.length; i++){
        var myArray = keys.filter(function(word){
          if(word == search[i]){
            found.push(gigVoice[search[i]]);
              //list out to DOM all the found words with their mathing object value.
              display.innerHTML += "<li class='list-group-item list-group-item-action'>" + search[i] + " : " + gigVoice[search[i]] + "</li>";
          }
        });
      }
      //display in stats DOM location the number of found words compared to the number of words entered by user.
      stats.innerHTML = "<li class='list-group-item'> Found " + found.length + " of " + search.length + "</li>";

      //default the input box placeholder.
      document.getElementById('searchInput').value = '';
  };

  //set alpha variable with alpha id DOM location.
  var alpha = document.getElementById('alpha');
  //gather the first letter of every gigVoice object keys, remove any duplicates
  //and display them in alpha DOM location.
  function extractFirstLetter(words){
    //store all found letters to letters array variable.
    var letters = [];
    //loop through gigVoice object and push first character of each object key to letters array.
    words.forEach(function(l){
      letters.push(l.charAt(0));
    });
    //remove any duplicate letters from letters array variable.
    return Array.from(new Set(letters));

  }

    extractFirstLetter(keys).forEach((item) => {
      alpha.innerHTML += "<a class='page-link'>" + item + "</a>";
    });

    var letterSelected = document.getElementById('alpha');

    function displayWords(e){
      console.log(e);
      
      //gather location of where to display the list of words.
      var displayWords = document.getElementById('listWords');

      //clear the list displayWord area on every selection.
      while (displayWords.firstChild) displayWords.removeChild(displayWords.firstChild);

      //gather the letter selected by end user in text format.
      var char = e.target.innerText;

      //test output.
      console.log('You selected ' + char);

      //iterate through keys object and find any matching letters end user has selected.
      keys.forEach(function(w, i){
        if(w.charAt(0) == char){
          // console.log(w[i]);
          displayWords.innerHTML += '<li class="list-group-item">'+ w + ' : ' + gigVoice[w] + '</li>';
        }
      });

    }

    letterSelected.addEventListener('click',displayWords,false);

});
