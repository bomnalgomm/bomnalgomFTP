$(function(){

	// tbody요소를 취득
	var tbody = $('#tbody');

	// data.xml을 가져 오기
	$.ajax({
		url: 'data.xml',
		dataType: 'xml',
		success: function(xml){
			
			// xml도큐먼트를 jQuery객체화
			var people = $(xml);

			// 안에 있는 person요소 각각에 대해서 처리하기
			people.find('person').each(function(){

				// person요소를 jQuery객체화
				var person = $(this);

				// 각각의 자식요소를 취득하여, 텍스트를 취득
				var text_no = person.find('no').text();
				var text_name = person.find('name').text();
				var text_mail = person.find('mail').text();

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

		}
	});

});
