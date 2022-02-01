const request = require("request");

class RequisicoesAPI {

  token = '54:24e566852d09448307b8b5d6aa42f0898429a5e396f5b35755bb2683086680d1';
  host = 'http://192.168.29.168/webservice/v1/';

  listar = () => {

    let options = { method: 'GET',
      url: this.host+"cliente",
      headers:
        {
          'Content-Type':'application/json',
          Authorization:'Basic ' + new Buffer.from(this.token).toString('base64'),
          ixcsoft:'listar'
        },
      body:
        { 
          "qtype":"cliente.id", 
          "query":"",
          "oper":"!=",
          "page":"1",
          "rp":"20",
          "sortname":"cliente.id",
          "sortorder":"asc"
        },
      json: true
      };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
        console.log(body);

    });
  }
}
module.exports = RequisicoesAPI;
                    
                    

