 function get_JWT_token(){
    postJWT(getJWT(), function(response){
      token = JSON.parse(response).access_token;
      console.log("JWT token",token);
      var sessiontoken = token;
      var sessiontime = new Date().getTime();
      localStorage.setItem("sessiontoken", sessiontoken);
       localStorage.setItem("sessiontime", sessiontime);
      //localStorage.getItem("myBtnState");
    });
 }
      
 function postJWT(jwt, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200 && callback) {
                callback(this.responseText);
                console.log(this.responseText);
                return;
            }
            if (console) console.log(this.responseText);
        }
    };
    var parameters = "grant_type=" + encodeURIComponent("urn:ietf:params:oauth:grant-type:jwt-bearer") + "&assertion=" + encodeURIComponent(jwt);
    xhttp.open("POST", "https://www.googleapis.com/oauth2/v4/token", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(parameters);
}

function getCert() {
    var cert = //your json key (downloaded earlier) goes here
     {
        "type": "service_account",
  	"project_id": PROJECT_ID,
  	"private_key_id": PRIVATE_KEY_ID,
  	"private_key": PRIVATE_KEY,
  	"client_email": CLIENT_EMAIL,
  	"client_id": CLIENT_ID,
  	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
  	"token_uri": "https://oauth2.googleapis.com/token",
  	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  	"client_x509_cert_url": CLIENT_X509_CERT_URL
     };      
    return cert;
}
function getJWT() {

    //var imported = document.createElement('script');
    //imported.src = 'jsrsasign-all-min.js';
    //document.head.appendChild(imported);

    var cert = getCert();
    var key = KEYUTIL.getKey(cert.private_key);
    var headers = { "alg": "RS256", "typ": "JWT" };
    var issued = Math.floor(new Date().getTime()/1000);

    var claims = {
        "iss": cert.client_email,
        "scope": "https://www.googleapis.com/auth/dialogflow",
        "aud": "https://www.googleapis.com/oauth2/v4/token",
        "exp": issued + 3600,
        "iat": issued
    };

    var jwt = KJUR.jws.JWS.sign(headers.alg, headers, JSON.stringify(claims), key);
    return jwt;
}

function jsonToStructProto(json) {
  const fields = {};
  for (let k in json) {
    fields[k] = jsonValueToProto(json[k]);
  }

  return {fields};
}

const JSON_SIMPLE_TYPE_TO_PROTO_KIND_MAP = {
  [typeof 0]: 'numberValue',
  [typeof '']: 'stringValue',
  [typeof false]: 'boolValue',
};

const JSON_SIMPLE_VALUE_KINDS = new Set([
  'numberValue',
  'stringValue',
  'boolValue',
]);

function jsonValueToProto(value) {
  const valueProto = {};

  if (value === null) {
    valueProto.kind = 'nullValue';
    valueProto.nullValue = 'NULL_VALUE';
  } else if (value instanceof Array) {
    valueProto.kind = 'listValue';
    valueProto.listValue = {values: value.map(jsonValueToProto)};
  } else if (typeof value === 'object') {
    valueProto.kind = 'structValue';
    valueProto.structValue = jsonToStructProto(value);
  } else if (typeof value in JSON_SIMPLE_TYPE_TO_PROTO_KIND_MAP) {
    const kind = JSON_SIMPLE_TYPE_TO_PROTO_KIND_MAP[typeof value];
    valueProto.kind = kind;
    valueProto[kind] = value;
  } else {
    console.warn('Unsupported value type ', typeof value);
  }
  return valueProto;
}

