<%value1="dddd1"
value2="dddd2"
dim callback
callback1=request("callback")
dim response1
response1= callback&"({err_code:0, err_msg:""success"", data:{username:"""&VALUE1&""",password:"""&VALUE2&""", token:""whatever""}})"

Response.Write response1 %>
