
$(document).ready(function () {
  /*console.log(localStorage.getItem('login'));
  if (localStorage.getItem('login') === 'login') {
    $('#loginBtn').hide();
    $('#signUpBtn').hide();
    $('#logoutBtn').show();
    $('#mypageBtn').show();
    
  } else {
    $('#loginBtn').show();
    $('#signUpBtn').show();
    $('#logoutBtn').hide();
    $('#mypageBtn').hide();
  }

  $('#login-btn').click(function () {
    $.ajax({
      url: './xml/userInfo.xml',
      dataType: 'xml',
      success: function (result) {
        const id = $('#login_id').val();
        const passwd = $('#login_pw').val();
        if ($(result).find('member').length > 0) {
          $(result)
            .find('member')
            .each(function (index, value) {
              if (
                id === $(value).find('id').text() &&
                passwd === $(value).find('password').text()
              ) {
                localStorage.setItem('login', 'login');
                
                return false;
              } else {
                alert('등록되지 않은 계정이거나 비밀번호가 잘못되었습니다.');
                return false;
              }
            });
        }
      },
    });
  });

  $('#logoutBtn').on(function () {
    localStorage.setItem('login', 'logout');
    location.href = 'signup.html';
  });*/
  
/*  
  $('#inputuserID').keyup(function(event){
	     var sid = $("#loginID").val();
	     if(sid=="ad")
	     {
	    	$('#warning-id').text("잘못된 아이디입니다.");	    	 
	     }else{
	    	 $('#warning-id').empty();
	    	  }
	     });	
*/
  var specialCheck = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
	$('#userpwd').keyup(function(event){
		var spw = $("#userpwd").val();
	     if(specialCheck.test(spw))
	     {
	    	 if($('#warning-pw').length<1){
	    		 $("#signupInputPw").append("<div class='col-md-8'  id='warning-pw'>잘못된 비밀번호입니다.</div>");
	    	 }else{
	    		 $('#warning-pw').text("잘못된 비밀번호입니다.");
	    	 }
	     }
	     else if(spw.length<6){
	    	 if($('#warning-pw').length<1){
	    		 $("#signupInputPw").append("<div class='col-md-8' id='warning-pw'>비밀번호는 6자 이상이어야합니다.</div>");
	    	 }else{
	    		 $('#warning-pw').text("비밀번호는 6자 이상이어야합니다.");
	    	 }
	     }
	     else{
	    	 $('#warning-pw').remove();
	     }
	});
	
/*	$('#secession').click(function () {
	   confirm("기존에 저장된 회원정보가 모두 삭제됩니다.\n 정말 탈퇴하시겠습니까?");
	  });*/
});
