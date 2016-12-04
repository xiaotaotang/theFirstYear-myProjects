// JavaScript Document
    var validator1;
    $(document).ready(function () {
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
                confirm_password: {
                    equalTo: "#password"
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
                confirm_password: {
                    equalTo: "两次输入密码不一致"
                }

            }
        });

    });
