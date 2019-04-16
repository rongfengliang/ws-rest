
const jmespath =  require("jmespath");
const fetch = require('node-fetch');
fetch('http://localhost:8080/app.json')
.then(res => res.json())
.then(body =>   {
    let result = jmespath.search(body,"length(hosts.data[*].data)");
    console.log(JSON.stringify(result))
}
);



