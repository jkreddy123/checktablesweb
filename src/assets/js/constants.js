const API_KEY ='AIzaSyDoB56l16QlQ7ahzYf0r4I45fqoSsMrJWU';
const GCPBUCKET ='tablesspeech'
const PROJECT_ID = 'mlkaggle-288509'
const PRIVATE_KEY_ID = "30da3073be607591acfe513fc01e23390fbe1f62"
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCVt+y/b7s4biQ/\nHVbGSqId5LdglUvu1g8jwkh9YFc9ZFN4EEfv3pO6uiTxkfzWs5gA7Qgb2nT0Vgs5\n9qw+UUZn9OpjcT+oG3zE5K0xIluwZMmdPy9jY/f+C1zI6LyrxlYr0p/Ra50RyVIF\nSh/LCxkcrUIz5wwndKWjULpNtj2X6TP+0ClZCcOnOY4jV+zDBAQcmRCEAHAo59+H\nVlXEklxN+hecuGrySYhd0c9Zoc6Ny3mx4++HfckEdvtWhfVWSeT9/J+57o0m9Odn\n4qAFs33Gkt0Q8UP1TebnmIqz4R5445O3ZC4BOrUw631NrjbERdz2hajEo6/wWd+R\nWWifDQWVAgMBAAECggEABq10XrlyBTtMXJBHbYKopmKsFx+xik570GF68DSaz38p\nBeLcAoPP3PUubqPPPhg2gFwSD4P30WoBCC3LUuA3Hq3awmKrryjCsNluLBHXOw/T\nujK2P12XEvqYwdE3kQXAlCXJwQJmuANdqCS9NEYjcZb8q+nzLdNTC+yu0oZ9Ssgn\nbizvpVJZqkjUaWpPEjSBLa2H9cto96VwsGbGsaEN10FodYSaNwEGKkIEq7dWFZPM\nunf23526UXBXT/DWY0BOepX4CwZacB3/zq4F5wksDrRVDXV4YdEbgQUiJjz411kf\n7yzKv3NjF/THiSuk6m+NRsKwVgpJ7V5Yocl+URqDQQKBgQDPj8FP5bJ9tVhF8Ibu\n2vEhOxR/kP6v57yBzy932j4aSEbfkd50q8VVOIkIbwpjUB2yWFaq4CoWKEF+5wlo\nfUUjZh2Vc/7N1SWh0PH4UnobMuaUy1KmUV8M0c+LqkIrIesbDu/vvioppHk/mbTr\nRTMZEjqGZlowamsMTit+wP0N8QKBgQC4qHqtdlGrTu9/LZYBzXx5xHdfhl+osLZU\nAv44hsV1lJxinQTmdS0hFEcIGZ87KpilFQCrmSx30NpsYik7TUQDdrnwLK2rqQCW\nMUXogUvbRk36hKHexpKDXlWMn7l7EAhi6WAxoQcJ5fclcojrrOzHt84luFp9457z\newuSlY9d5QKBgQCllo4ma52mZFJ0GZvMWqccV8HWs5o8Q6hD90JrX5VD6n2ARyMt\n+QuJHX1VWSD0cin+6jLaR9PLsXnu/+qljarmvsTDQrL5Cx7mpYclEMeRg14pPrxF\nK42k8I2fYsk/F+Q0xgntPcztQ+XnM3z+ZUqKqdw+9NDm5z9XpdVVXimEQQKBgGvb\nvQxk9/8f9DRM5DnZVMOrRi69xlI6JcWcmfFahyvOyimvnZUfDGUt+u94R9G/Z7nF\nMscIiTjS/UIhdAP3daqwRptK/YYvCPCxhyvvmedSgWm63vHI+vtQtpeVFDoVe1CL\nEGzsqbfWYy20YNWIBCYD7p2JuRGfStDdJj1QrpUhAoGBAJzVn97R8FHgDUOUzFiw\nCHBzFmhLG94GCMBe+wz4k85dcGs147J+hpYWXY4rDk5Y4I5MjlLvlOW5D+mDmiyM\n+0tcbIqisKq6BOSO8GWzXALxyd1A+42Y7IGEJwTEpNIF6milJhlcRoxkxmP+dLJj\nN2EuiRxfQOgaxh7h1NZmrrJv\n-----END PRIVATE KEY-----\n"
const CLIENT_EMAIL = "55325708385-compute@developer.gserviceaccount.com"
const CLIENT_ID = "115559574627752335027"
const CLIENT_X509_CERT_URL = "https://www.googleapis.com/robot/v1/metadata/x509/55325708385-compute%40developer.gserviceaccount.com"
if (localStorage.getItem("englishaccent") === null) {
  localStorage.setItem("englishaccent","en-IN");
}
if (localStorage.getItem("action") === null) {
  localStorage.setItem("action","input.welcome");
}
