{"filter":false,"title":"sponser.route.js","tooltip":"/controllers/sponser.route.js","undoManager":{"mark":2,"position":2,"stack":[[{"start":{"row":0,"column":0},"end":{"row":47,"column":3},"action":"insert","lines":["//definição de constantes","const saltRounds = 10;","","","//rota de leitura","global.app.get('/user/read', function(req, res) {","    //chamada da função read que está no user.model ","    global.modelUser.read(function(err, data) {","        if (err) {","            // error handling code goes here","            console.log(\"ERROR : \", err);","        }","        else {","            //envio para o cliente dos dados retornados pelo model","            res.send(data);","            res.end('{\"success\" : \"Updated Successfully\", \"status\" : 200}');","        }","    });","});","//rota de gravação","global.app.post('/user/save', function(req, res) {","    console.log('body: ' + JSON.stringify(req.body));","    //chamada da função save que está no user.model e envio dos parâmetros","    var name = global.connect.con.escape(req.body.name);","    var email = global.connect.con.escape(req.body.email);","    var pass = global.connect.con.escape(req.body.pass);","    console.log(\"without hahsh:\" + pass);","    global.bcrypt.hash(pass, saltRounds).then(function(hash) {","        console.log(\"with hash:\" + hash);","        global.modelUser.save(name, email, hash);","    });","    //envio da mensagem de sucesso","    res.end('{\"success\" : \"Updated Successfully\", \"status\" : 200}');","});","global.app.put('/user/update', function(req, res) {","    console.log('body: ' + JSON.stringify(req.body));","    //chamada da função save que está no user.model e envio dos parâmetros","    var name = global.connect.con.escape(req.body.name);","    var email = global.connect.con.escape(req.body.email);","    var pass = global.connect.con.escape(req.body.pass);","    console.log(\"without hahsh:\" + pass);","    global.bcrypt.hash(pass, saltRounds).then(function(hash) {","        console.log(\"with hash:\" + hash);","        global.modelUser.save(name, email, hash);","    });","    //envio da mensagem de sucesso","    res.end('{\"success\" : \"Updated Successfully\", \"status\" : 200}');","});"],"id":1}],[{"start":{"row":5,"column":17},"end":{"row":5,"column":21},"action":"remove","lines":["user"],"id":2},{"start":{"row":5,"column":17},"end":{"row":5,"column":24},"action":"insert","lines":["speaker"]},{"start":{"row":6,"column":41},"end":{"row":6,"column":45},"action":"remove","lines":["user"]},{"start":{"row":6,"column":41},"end":{"row":6,"column":48},"action":"insert","lines":["speaker"]},{"start":{"row":7,"column":16},"end":{"row":7,"column":20},"action":"remove","lines":["User"]},{"start":{"row":7,"column":16},"end":{"row":7,"column":23},"action":"insert","lines":["speaker"]},{"start":{"row":20,"column":18},"end":{"row":20,"column":22},"action":"remove","lines":["user"]},{"start":{"row":20,"column":18},"end":{"row":20,"column":25},"action":"insert","lines":["speaker"]},{"start":{"row":22,"column":41},"end":{"row":22,"column":45},"action":"remove","lines":["user"]},{"start":{"row":22,"column":41},"end":{"row":22,"column":48},"action":"insert","lines":["speaker"]},{"start":{"row":29,"column":20},"end":{"row":29,"column":24},"action":"remove","lines":["User"]},{"start":{"row":29,"column":20},"end":{"row":29,"column":27},"action":"insert","lines":["speaker"]},{"start":{"row":34,"column":17},"end":{"row":34,"column":21},"action":"remove","lines":["user"]},{"start":{"row":34,"column":17},"end":{"row":34,"column":24},"action":"insert","lines":["speaker"]},{"start":{"row":36,"column":41},"end":{"row":36,"column":45},"action":"remove","lines":["user"]},{"start":{"row":36,"column":41},"end":{"row":36,"column":48},"action":"insert","lines":["speaker"]},{"start":{"row":43,"column":20},"end":{"row":43,"column":24},"action":"remove","lines":["User"]},{"start":{"row":43,"column":20},"end":{"row":43,"column":27},"action":"insert","lines":["speaker"]}],[{"start":{"row":5,"column":17},"end":{"row":5,"column":24},"action":"remove","lines":["speaker"],"id":3},{"start":{"row":5,"column":17},"end":{"row":5,"column":24},"action":"insert","lines":["sponser"]},{"start":{"row":6,"column":41},"end":{"row":6,"column":48},"action":"remove","lines":["speaker"]},{"start":{"row":6,"column":41},"end":{"row":6,"column":48},"action":"insert","lines":["sponser"]},{"start":{"row":7,"column":16},"end":{"row":7,"column":23},"action":"remove","lines":["speaker"]},{"start":{"row":7,"column":16},"end":{"row":7,"column":23},"action":"insert","lines":["sponser"]},{"start":{"row":20,"column":18},"end":{"row":20,"column":25},"action":"remove","lines":["speaker"]},{"start":{"row":20,"column":18},"end":{"row":20,"column":25},"action":"insert","lines":["sponser"]},{"start":{"row":22,"column":41},"end":{"row":22,"column":48},"action":"remove","lines":["speaker"]},{"start":{"row":22,"column":41},"end":{"row":22,"column":48},"action":"insert","lines":["sponser"]},{"start":{"row":29,"column":20},"end":{"row":29,"column":27},"action":"remove","lines":["speaker"]},{"start":{"row":29,"column":20},"end":{"row":29,"column":27},"action":"insert","lines":["sponser"]},{"start":{"row":34,"column":17},"end":{"row":34,"column":24},"action":"remove","lines":["speaker"]},{"start":{"row":34,"column":17},"end":{"row":34,"column":24},"action":"insert","lines":["sponser"]},{"start":{"row":36,"column":41},"end":{"row":36,"column":48},"action":"remove","lines":["speaker"]},{"start":{"row":36,"column":41},"end":{"row":36,"column":48},"action":"insert","lines":["sponser"]},{"start":{"row":43,"column":20},"end":{"row":43,"column":27},"action":"remove","lines":["speaker"]},{"start":{"row":43,"column":20},"end":{"row":43,"column":27},"action":"insert","lines":["sponser"]}]]},"ace":{"folds":[],"scrolltop":320,"scrollleft":0,"selection":{"start":{"row":33,"column":3},"end":{"row":33,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1524920094781,"hash":"dec00f5d94e07ab7b524f1d512c06f8f3f48de31"}