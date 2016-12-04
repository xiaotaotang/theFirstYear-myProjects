// JavaScript Document    var validator1;
	/*验证码生成函数*/
	function creatCodes(){
	//定义一个数组，存储所有构成验证码的字符
	var allCodes=["0","1","2","3","4","5","6","7","8","9",
					"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","s","y","z",
					"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var codes="";//定义验证码
	var codesLength=4;//定义验证码的长度为4
	for(var i=0;i<codesLength;i++){
									var charIndex=Math.floor(Math.random()*62);
									codes+=allCodes[charIndex];//通过索引获得指定的数组字符作为验证码的元素
		}
	$("#creatCodes").html(codes);
	}

    $(document).ready(function () {
		/*生成验证码*/
		creatCodes();
		$("#creatCodes").click(creatCodes);
		/*表单的验证*/
        validator1 = $("#register_form").validate({
           
            rules: {
                userName: {
                    required: true,
                    minlength: 2,
                    maxlength: 10,
					remote:"json/remote.json"
                },
                password: {
                    required: true,
                    minlength: 6,
                    maxlength: 16
                },
                codes: {
					required: true,
                    equalTo:$("creatCodes").html()
                }
            },
            messages: {
                userName: {
                    required: '请输入用户名',
                    minlength: '用户名不能小于2个字符',
                    maxlength: '用户名不能超过10个字符',
                    remote: '用户名不存在'
                },
                password: {
                    required: '请输入密码',
                    minlength: '密码不能小于6个字符',
                    maxlength: '密码不能超过16个字符'
                },
                codes: {
					required: '请输入验证码',
                    equalTo: "验证码不匹配"
                }

            }
        });

    });
