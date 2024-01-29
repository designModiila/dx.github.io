//숫자 하이픈만 선택하여 허용
function checkNumberHypenValue(strValue, msg, num) 
{ 
	strValue = String(strValue).replace(/^\s+|\s+$/g, "");
	var strReg = /[^0123456789-]/g
		
   if (strReg.test(strValue))
   {
		alert(msg);
		return "N";
   }
}

//숫자만 허용 onkeyPress="javascript:checkInputNum();"
//oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" 

//천단위마다 콤마 생성
function addComma(data) {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 확장자가 이미지 파일인지 확인
function isImageFile(file) {
    var ext = file.name.split(".").pop().toLowerCase(); // 파일명에서 확장자를 가져온다. 
    return ($.inArray(ext, ["jpg", "jpeg", "gif", "png"]) === -1) ? false : true;
}

//공통 페이징
 function listPaging(totalData, dataPerPage, pageCount, currentPage) {
	
  totalPage = Math.ceil(totalData / dataPerPage); //총 페이지 수

  if(totalPage < pageCount){
    pageCount = totalPage;
  }

  let pageGroup = Math.ceil(currentPage / pageCount); // 페이지 그룹
  let last = pageGroup * pageCount; //화면에 보여질 마지막 페이지 번호

  if (last > totalPage) {
    last = totalPage;
  }

  let first = last - (pageCount - 1); //화면에 보여질 첫번째 페이지 번호
  let next = last + 1;
  let prev = first - 1;

  let pageHtml = "";
  
  pageHtml += "<div class='arrow prev'>";
  
  if (currentPage > 1) {
	  pageHtml += "<button id='first'><img src='/asset/img/sub/pagination_arrow02.png' alt=''></button>";
  }

  if (prev > 0) {
    pageHtml += "<button id='prev'><img src='/asset/img/sub/pagination_arrow01.png' alt=''></button>";
  }
  
  pageHtml += "</div>";
  
  pageHtml += "<ul class='num'>";
 //페이징 번호 표시
  for (var i = first; i <= last; i++) {
    if (currentPage == i) {
      pageHtml += "<li class='on'><a href='javascript:void(0);' id='" + i + "'>" + i + "</a></li>";
    } else {
      pageHtml += "<li><a href='javascript:void(0);' id='" + i + "'>" + i + "</a></li>";
    }
  }
  
  pageHtml += "</ul>";
  
  pageHtml += "<div class='arrow next'>";
  
  if (last < totalPage) {
    pageHtml += "<button id='next'><img src='/asset/img/sub/pagination_arrow01.png' alt=''></button>";
  }

  if (currentPage < totalPage) {
	  pageHtml += "<button id='last'><img src='/asset/img/sub/pagination_arrow02.png' alt=''></button>";
  }
  
  pageHtml += "</div>";

  $(".pagination").html(pageHtml);

  //페이징 번호 클릭 이벤트
  $(".pagination a, .pagination button").click(function () {
    let $id = $(this).attr("id");
    selectedPage = $(this).text();

    if ($id == "first") selectedPage = 1;
    if ($id == "next") selectedPage = next;
    if ($id == "prev") selectedPage = prev;
    if ($id == "last") selectedPage = totalPage;

    //전역변수에 선택한 페이지 번호를 담는다
    globalCurrentPage = selectedPage;

    //페이징 표시 재호출
    listPaging(totalData, dataPerPage, pageCount, selectedPage);

    //글 목록 표시 재호출
    app.listGo(selectedPage);

  });
}

//공백제거후 값이 있는지 확인후 리턴
function trimstr(strvalue) {
	
	var trimcheck = true;
	if ($.trim(strvalue) == "") {
		trimcheck = true;
	} else {
		trimcheck = false;
	}
	
	return trimcheck;
}

//공통 체크박스 
function checkboxAll() {
	 if ($("#checkAll").is(":checked")== true) {
		 $("input[id*=bno]:checkbox").each(function () {
			 $(this).prop("checked", true)
		 });
	 }
	 else if ($("#checkAll").is(":checked") == false) {
		 $("input[id*=bno]:checkbox").each(function () {
			 $(this).prop("checked", false);
		 });
	 }	
}

//날짜 일수 차이 계산
function getDateDiff(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  const diffDate = date1.getTime() - date2.getTime();
  return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
}

//시작날짜 종료날짜 체크
function startEndDateCheck(d1, d2) {
	var starttime1 = d1.replace(/-/gi, "")
	var endtime1 = d2.replace(/-/gi, "")

	if (parseInt(starttime1) > parseInt(endtime1)) {
		return false;
	} else {
		return true;	
	}
}

function setCookie(cookieName, value, exdays){
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
    document.cookie = cookieName + "=" + cookieValue;
}
 
function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}
 
function getCookie(cookieName) {
    cookieName = cookieName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';
    if(start != -1){
        start += cookieName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
}

function closePopupSet(val, id) {
	
	if(val == 'Y'){
		if ($('input:checkbox[id="checkpopup'+ id + '"]').is(":checked") == true) {
			setCookie( "pcookie" + id, "done" , 24 );
		}
	}
	
	$('#popupLayer'+id).hide();
}

var regExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;