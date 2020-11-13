$(document).ready(function(){

	var n = '#nav_list', no = 'nav-open';

	$('#nav-menu').click(function(){
		// ($('a.buy-now')).css('bottom', '-65px');
		if($(n).hasClass(no)){
			// $(n).removeClass(no);
			$(n).animate({height:0},300);
			setTimeout(function(){
				$(n).removeClass(no).removeAttr('style');

			}, 320);
		}
		else{
			// $(n).addClass(no);
			// get in var newH the auto generated height for drop down menu
			var newH = $(n).css('height', 'auto').height();


			// when the nav-menu is not clicked nav's height is 0
			$(n).height(0).animate({height:newH}, 300);
			// 300 milisec

			// removing the atribute style that was added in our dom
			setTimeout(function(){
				$(n).addClass(no).removeAttr('style');

			}, 320);
			// 320 milisec to be sure that all animations was completed
		}
	});


	var table_login = $('section#login_style form table');
	// console.log(table_login);
	// table_login.find('input:text').attr('type', 'email');

});

// window.onload = function(){
	

// }