<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="commons/taglibs.jsp"%>
<%@ include file="commons/messages.jsp"%>

<body>
	 <div class="titleDiv">
	 	<div class="titleDiv_a">
			<img src="${ctx}/images/tb_1.png"  align="absmiddle" />
			<span>更新版本信息</span>
	    </div>
	    <div class="titleDiv_b"></div>
	 </div> 
<s:form action="updateVersion" namespace="/base" onsubmit="return checkSubmit()" id="form1" >
	<div class="data0">
		<div class="data1">
			<table class="dataTable" width="100%" border="0" cellspacing="0" cellpadding="0">
			    <s:hidden  name="version.id" id="id" />
				<tr>
					<td width="15%" align="center" class="dataTd" >版本号</td>
					<td width="60%" align="left" class="dataTd" >
					    <s:textfield id="version" name="version.version"/>
					</td> 
				</tr>
				<tr>
				    <td width="15%" align="center" class="dataTd" >下载地址</td>
					<td width="35%" align="left" class="dataTd" >
					    <s:textfield name="version.url" id="url"/>
					</td>
				</tr>
				<tr>   
				    <td width="15%" align="center" class="dataTd" >手机类型</td>
					<td width="35%" align="left" class="dataTd" >
					    <s:radio label="手机类型" name ="version.type" id="type"
					             list= "#{0:'&nbsp;iphone（用户端）',1:'&nbsp;android（用户端）',2:'&nbsp;android（司机端）'}"  
					             listKey="key" listValue="value" value="version.type" />
					</td>
				</tr>
				<tr>
					<td bgcolor="#edf2f8" colspan="8" align="center">
						<input	type="submit" class="inputBtn"   value="确定" style="cursor: pointer" />
                        <input	type="button" class="inputBtn"   value="返回" onclick="javaScript:history.go(-1)" style="cursor: pointer" />
					</td>
				</tr>				
			</table>
		</div>
	</div>
</s:form>
</body>
<script type="text/javascript">
function checkSubmit(){
	
	 var version=document.getElementById("version").value;
	 if(!checkNull(version)){
	      showErrorMsg("版本号不能为空");
	      return false;
	 }
	 return true;	
}
</script>