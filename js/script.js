var frm = $('#register-form');
frm.submit(function (e) {
    var recaptcha = $("#g-recaptcha-response").val();
    if (recaptcha === "") {
        e.preventDefault();
        alert("Vui lòng kiểm tra biểu mẫu. Error: Please check the Recaptcha.");
    }
    else {
        e.preventDefault();
        $.ajax({
            type: 'GET',
            beforeSend: function(){
                $("input").prop('disabled', true);
                $("#submit-form").attr("disabled", true);
            },
            url: 'https://script.google.com/macros/s/AKfycbzz1ln-hKlSDTjRpf2bHmiKJ3L8dweVAXHaBJram28dFUjrBLtXtsAm9SdzuQ77vA7TFg/exec',
            data: frm.serialize(),
            success: function (data) {
                $('#SuccessModal').modal('show');
            },
            error: function (data) {
                $('#FailModal').modal('show');
            },
            complete: function(){
                $("input").prop('disabled', false);
                $("#submit-form").attr("disabled", false);
                $('#register-form')[0].reset();
            }
        });
    }
});

var countDownDate = new Date("Apr 07, 2021 23:59:59").getTime();
    var x = setInterval(function() 
    {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("countdown").innerHTML = days + " ngày " + hours + " giờ "
  + minutes + " phút " + seconds + " giây"; 
      if (distance < 0) 
      {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "ĐÃ HẾT HẠN ĐĂNG KÝ";
        document.getElementById("submit-form").disabled = true;
      }
    }, 1000);