<!DOCTYPE html>
<html>
<head>
    <script>
        window.onload=function(){
            function handMessage(event){
                event = event || window.event;
                // //验证是否来自预期内的域，如果不是不做处理，这样也是为了安全方面考虑
                //if(event.origin === 'http://www.postmessage1.com'){
                    //document.getElementById('divMessage').innerHTML = event.data;
                    document.cookie = event.data;
                    //alert(event.data);
                //}
            }
            function storageEvent(e){
                console.log(e);
                parent.postMessage(e,"http://10.12.43.168");
            }
            // //给window对象绑定message事件处理
            if(window.addEventListener){
                window.addEventListener("message", handMessage, false);
                window.addEventListener("storage", storageEvent, true);
            }
            else{
                window.attachEvent("onmessage", handMessage);
                window.attachEvent("storage", storageEvent);
            }

            parent.postMessage("ready","http://10.12.43.168");
        }        
    </script>
</head>
<body>
我是不同域的iframe页面，下面是接受到的消息内容
<div id="divMessage"></div>
</body>
</html>