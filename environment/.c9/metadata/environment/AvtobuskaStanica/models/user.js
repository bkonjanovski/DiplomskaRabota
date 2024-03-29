{"filter":false,"title":"user.js","tooltip":"/AvtobuskaStanica/models/user.js","ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":19,"column":25},"end":{"row":19,"column":25},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":7,"state":"start","mode":"ace/mode/javascript"}},"hash":"2819fccbbbf3c405af632c32b1082a25ed3f87fa","undoManager":{"mark":22,"position":22,"stack":[[{"start":{"row":2,"column":0},"end":{"row":8,"column":3},"action":"remove","lines":["var linijaSchema = new mongoose.Schema({","  prevoznik: String,","  trgnuvaOd: String,","  trgnuvaVo: String,","  destinacija: String,","  cena: Number","});"],"id":4},{"start":{"row":2,"column":0},"end":{"row":13,"column":41},"action":"insert","lines":["var UserSchema = new mongoose.Schema({","    imePrezime: String,","    telefon: String,","    username: String,","    password: String,","    datumNaRaganje: String,","    pol: String,","    student: Boolean,","    linii: [linijaSchema]","});","","UserSchema.plugin(passportLocalMongoose);"]}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":10},"action":"remove","lines":["var Linija"],"id":5},{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"insert","lines":["m"]},{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"insert","lines":["o"]},{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"insert","lines":["d"]},{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"insert","lines":["u"]},{"start":{"row":15,"column":4},"end":{"row":15,"column":5},"action":"insert","lines":["l"]},{"start":{"row":15,"column":5},"end":{"row":15,"column":6},"action":"insert","lines":["e"]},{"start":{"row":15,"column":6},"end":{"row":15,"column":7},"action":"insert","lines":["s"]},{"start":{"row":15,"column":7},"end":{"row":15,"column":8},"action":"insert","lines":["."]},{"start":{"row":15,"column":8},"end":{"row":15,"column":9},"action":"insert","lines":["e"]},{"start":{"row":15,"column":9},"end":{"row":15,"column":10},"action":"insert","lines":["x"]},{"start":{"row":15,"column":10},"end":{"row":15,"column":11},"action":"insert","lines":["p"]},{"start":{"row":15,"column":11},"end":{"row":15,"column":12},"action":"insert","lines":["o"]},{"start":{"row":15,"column":12},"end":{"row":15,"column":13},"action":"insert","lines":["r"]},{"start":{"row":15,"column":13},"end":{"row":15,"column":14},"action":"insert","lines":["t"]},{"start":{"row":15,"column":14},"end":{"row":15,"column":15},"action":"insert","lines":["s"]}],[{"start":{"row":15,"column":18},"end":{"row":15,"column":57},"action":"remove","lines":["mongoose.model(\"Linija\", linijaSchema);"],"id":6},{"start":{"row":15,"column":18},"end":{"row":15,"column":53},"action":"insert","lines":["mongoose.model(\"User\", UserSchema);"]}],[{"start":{"row":15,"column":6},"end":{"row":15,"column":7},"action":"remove","lines":["s"],"id":7}],[{"start":{"row":0,"column":35},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["v"]},{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["a"]},{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":1,"column":3},"end":{"row":1,"column":4},"action":"insert","lines":[" "],"id":9}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["p"],"id":10},{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":["a"]},{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["s"]},{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["s"]},{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":["p"]},{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"insert","lines":["o"]},{"start":{"row":1,"column":10},"end":{"row":1,"column":11},"action":"insert","lines":["r"]},{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":12},"action":"remove","lines":["passport"],"id":11},{"start":{"row":1,"column":4},"end":{"row":1,"column":25},"action":"insert","lines":["passportLocalMongoose"]}],[{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"insert","lines":[" "],"id":12},{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"insert","lines":["="]}],[{"start":{"row":1,"column":27},"end":{"row":1,"column":28},"action":"insert","lines":[" "],"id":13},{"start":{"row":1,"column":28},"end":{"row":1,"column":29},"action":"insert","lines":["r"]},{"start":{"row":1,"column":29},"end":{"row":1,"column":30},"action":"insert","lines":["e"]},{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"insert","lines":["q"]},{"start":{"row":1,"column":31},"end":{"row":1,"column":32},"action":"insert","lines":["u"]},{"start":{"row":1,"column":32},"end":{"row":1,"column":33},"action":"insert","lines":["i"]},{"start":{"row":1,"column":33},"end":{"row":1,"column":34},"action":"insert","lines":["r"]},{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"insert","lines":["e"]}],[{"start":{"row":1,"column":35},"end":{"row":1,"column":37},"action":"insert","lines":["()"],"id":14}],[{"start":{"row":1,"column":36},"end":{"row":1,"column":38},"action":"insert","lines":["\"\""],"id":15}],[{"start":{"row":1,"column":37},"end":{"row":1,"column":38},"action":"insert","lines":["p"],"id":16},{"start":{"row":1,"column":38},"end":{"row":1,"column":39},"action":"insert","lines":["a"]},{"start":{"row":1,"column":39},"end":{"row":1,"column":40},"action":"insert","lines":["s"]},{"start":{"row":1,"column":40},"end":{"row":1,"column":41},"action":"insert","lines":["s"]},{"start":{"row":1,"column":41},"end":{"row":1,"column":42},"action":"insert","lines":["p"]},{"start":{"row":1,"column":42},"end":{"row":1,"column":43},"action":"insert","lines":["o"]},{"start":{"row":1,"column":43},"end":{"row":1,"column":44},"action":"insert","lines":["r"]},{"start":{"row":1,"column":44},"end":{"row":1,"column":45},"action":"insert","lines":["t"]},{"start":{"row":1,"column":45},"end":{"row":1,"column":46},"action":"insert","lines":["-"]},{"start":{"row":1,"column":46},"end":{"row":1,"column":47},"action":"insert","lines":["l"]},{"start":{"row":1,"column":47},"end":{"row":1,"column":48},"action":"insert","lines":["o"]},{"start":{"row":1,"column":48},"end":{"row":1,"column":49},"action":"insert","lines":["c"]},{"start":{"row":1,"column":49},"end":{"row":1,"column":50},"action":"insert","lines":["a"]},{"start":{"row":1,"column":50},"end":{"row":1,"column":51},"action":"insert","lines":["l"]},{"start":{"row":1,"column":51},"end":{"row":1,"column":52},"action":"insert","lines":["-"]},{"start":{"row":1,"column":52},"end":{"row":1,"column":53},"action":"insert","lines":["m"]},{"start":{"row":1,"column":53},"end":{"row":1,"column":54},"action":"insert","lines":["o"]}],[{"start":{"row":1,"column":54},"end":{"row":1,"column":55},"action":"insert","lines":["n"],"id":17},{"start":{"row":1,"column":55},"end":{"row":1,"column":56},"action":"insert","lines":["g"]},{"start":{"row":1,"column":56},"end":{"row":1,"column":57},"action":"insert","lines":["o"]},{"start":{"row":1,"column":57},"end":{"row":1,"column":58},"action":"insert","lines":["o"]},{"start":{"row":1,"column":58},"end":{"row":1,"column":59},"action":"insert","lines":["s"]},{"start":{"row":1,"column":59},"end":{"row":1,"column":60},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":[";"],"id":18}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"remove","lines":[";"],"id":19},{"start":{"row":1,"column":62},"end":{"row":2,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":1,"column":62},"end":{"row":1,"column":63},"action":"insert","lines":[";"],"id":20}],[{"start":{"row":1,"column":63},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":21},{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["v"]}],[{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["a"],"id":22},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":[" "],"id":23}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"remove","lines":["var "],"id":24},{"start":{"row":2,"column":0},"end":{"row":8,"column":3},"action":"insert","lines":["var linijaSchema = new mongoose.Schema({","  prevoznik: String,","  trgnuvaOd: String,","  trgnuvaVo: String,","  destinacija: String,","  cena: Number","});"]}],[{"start":{"row":1,"column":63},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":25}],[{"start":{"row":9,"column":3},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":26}]]},"timestamp":1604319682639}