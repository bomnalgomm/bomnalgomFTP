$(function(){

	// tbody요소를 취득
	var tbody = $('#tbody');

	// data.json를 가져오기
	$.getJSON('data.json', function(people){

		// 배열내의 각 객체에 대해서 처리하기
		$.each(people, function(i, person){

			// 각 값에서, 텍스트를 취득
			var text_no = person.no;
			var text_name = person.name;
			var text_mail = person.mail;

			// tr요소를 만들기
			var tr = $('<tr />');

			// td요소를 만들기
			var no = $('<td />').text(text_no);
			var name = $('<td />').text(text_name);
			var mail = $('<td />').text(text_mail);

			// tr요소에 td요소를 추가
			tr.append(no);
			tr.append(name);
			tr.append(mail);

			// tbody에 tr요소를 append
			tbody.append(tr);

		});

	});

});
