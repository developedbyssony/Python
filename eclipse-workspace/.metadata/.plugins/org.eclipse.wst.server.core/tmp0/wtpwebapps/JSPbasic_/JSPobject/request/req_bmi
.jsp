<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("utf-8");
	String strCm = request.getParameter("cm");
	String strKg = request.getParameter("kg");
	int a = Integer.parseInt(strCm);
	int b = Integer.parseInt(strKg);
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	키는? <%= a %> <br />
	몸무게는? <%= b %> <br />
	BMI 지수는? <%=  b / ((0.01 * a) * (0.01 * a)) %>  <br />
	<% if(b / ((0.01 * a) * (0.01 * a)) > 23) { %> 
	당신은 과체중입니다. <% } else { %>
	당신은 정상체중입니다. <% } %>
</body>
</html>