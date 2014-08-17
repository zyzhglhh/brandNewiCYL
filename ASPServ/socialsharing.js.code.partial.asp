<!DOCTYPE html>
<html>
<head>
    <script>
        window.onload=function(){
            var sharing = location.href + '<$separate$>'
                        + document.title + '<$separate$>'
                        + document.title + '<$separate$>'
                        + document.getElementsByTagName('img')[0].src;

            if (!!sharing) {
                parent.postMessage(sharing,"*");
            }
        }        
    </script>
</head>
<body>
</body>
</html>