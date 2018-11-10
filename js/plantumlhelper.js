class PlantUMLHelper {
    constructor() {
    }

    renderPlantUMLOnline(server, format, text, callback, data) {
        let httpGet = function(url, type, callback) {
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", url);
            xmlHttp.responseType = type;

            xmlHttp.onload = function() {
                callback(xmlHttp.response);
            };

            xmlHttp.send(null);
        };

        let getPlantUMLOnlineURL = function(server, format, text) {
            var s = unescape(encodeURIComponent(text));
            var arr = [];
            for (var i = 0; i < s.length; i++) {
                arr.push(s.charCodeAt(i));
            }

            var compressor = new Zopfli.RawDeflate(arr);
            var compressed = compressor.compress();
            var url = server + "/" + format + "/" + encode64_(compressed);
            return url;
        };

        let url = getPlantUMLOnlineURL(server, format, text);
        if (format == 'png') {
            httpGet(url, 'blob', function(resp) {
                var blob = resp;
                var reader = new FileReader();
                reader.onload = function () {
                    var dataUrl = reader.result;
                    var png = dataUrl.substring(dataUrl.indexOf(',') + 1);
                    callback(data, format, png);
                };

                reader.readAsDataURL(blob);
            });
        } else if (format == 'svg') {
            httpGet(url, 'text', function(resp) {
                callback(data, format, resp);
            });
        }
    }
}

export default PlantUMLHelper;
