window.addEventListener('DOMContentLoaded', function() {

	let mobileBrowser;

	function mobileBrowserCheck() {
//Проверка на конкретный мобильный браузер
		let isMobile = {
		   Android: function() {
		    	return navigator.userAgent.match(/Android/i);
		  	},
		    BlackBerry: function() {
		        return navigator.userAgent.match(/BlackBerry/i);
		    },
		    iOS: function() {
		        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		    },
		    Opera: function() {
		        return navigator.userAgent.match(/Opera Mini/i);
		    },
		    Windows: function() {
		        return navigator.userAgent.match(/IEMobile/i);
		    },
		    //Проверка на любой мобильный браузер
		    any: function() {
		        return (isMobile.Android() || isMobile.BlackBerry() 
		        		|| isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		    }
		};
//Возврат функцией true, если браузер мобильный
		if(isMobile.any()){
			mobileBrowser = true;
			document.write('Мобильный браузер');
		} else {
			document.write('Не мобильный браузер');
		}
	};
	mobileBrowserCheck();
});