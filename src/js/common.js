$(function() {

	/* Отправка заявки */
	$("#contacts__form").submit(function() {
		$.ajax({
			type: "POST",
			url: "php/post.php",
			data: $(this).serialize()
		}).done(function() { //Если все хорошо, показываем сообщение об отправки и очищаем поля
			$(".contacts__massage").addClass("active").css('display', 'flex').hide().fadeIn(); 
			setTimeout(function(){ 
				jQuery("#contacts__form").trigger("reset"); 
				$(".contacts__massage").removeClass('active').fadeOut(); 
			}, 3000); 
		});
		return false;
	});




});