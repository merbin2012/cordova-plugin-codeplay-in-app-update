<h1>Code Play Share apk</h1>

Developed  by <a target="_blank" href="https://play.google.com/store/apps/details?id=com.HTML.AngularJS.Codeplay">HTML Code Play</a> and this plugin is used for share your current own apk through any other sharing applications for your cordova applications.

<h2>Git URL</h2>
https://github.com/merbin2012/cordova-plugin-codeplay-in-app-update


<h2>How to Instalation?</h2>
<h4>Using the Cordova CLI</h4>
<blockquote>
  $ cordova plugin add cordova-plugin-codeplay-in-app-update
</blockquote>


<h4>Using the phonegap CLI</h4>
<blockquote>
  $ phonegap local plugin add cordova-plugin-codeplay-in-app-update
</blockquote>

<h2>How to Uninstall?</h2>
<h4>Using the Cordova CLI</h4>
<blockquote>
  $ cordova plugin rm cordova-plugin-codeplay-in-app-update
</blockquote>

<h4>Using the phonegap CLI</h4>
<blockquote>
  $ phonegap local plugin rm cordova-plugin-codeplay-in-app-update
</blockquote>



<h2>Check app update available or not</h2>

<h4>Syntax</h4>

```javascript
cordova.plugins.inappupdate.isUpdateAvailable(success,fail);
```

<h4>Example</h4>

```javascript
cordova.plugins.inappupdate.isUpdateAvailable(success,fail);

function success(result)
{
 	if(JSON.parse(result))
	{
		alert("App update available");
	}
	else
	{
		alert("No app update available");
	}
}
function fail(result)
{
 console.log(result);
}
```



<h2>Start flexible Update</h2>

<h4>Syntax</h4>

```javascript
cordova.plugins.inappupdate.update("flexible",function(){},function(){});
```



<h4>Screenshot</h4>
<p  align="center">
  <img src="https://4.bp.blogspot.com/-FvX5pBM-4kI/XZoL12L_jzI/AAAAAAAAP7M/is_sR5nHqaIyg4NeN2omg2aW-GBF4Nq1gCLcBGAsYHQ/s1600/2.png" width="350">
</p>




<h2>Start immediate Update</h2>

<h4>Syntax</h4>

```javascript
cordova.plugins.inappupdate.update("immediate",function(){},function(){});
```



<h4>Screenshot</h4>
<p  align="center">
  <img src="https://2.bp.blogspot.com/-zwT-thsMsZM/XZoL1PpZbpI/AAAAAAAAP7I/00SG2mrnzQU6wcjHCf17j94hgSakI0RGgCLcBGAsYHQ/s1600/1.png" width="350">
</p>









<h2>Support Platfrom</h2>
<ul>
<li>Android</li>
</ul>

<h2>Our Apps</h2>
https://play.google.com/store/apps/details?id=com.HTML.AngularJS.Codeplay

https://play.google.com/store/apps/details?id=sql.code.play

https://play.google.com/store/apps/details?id=html.editor.codeplay

https://play.google.com/store/apps/details?id=php.code.play

https://play.google.com/store/apps/details?id=cordova.code.play

https://play.google.com/store/apps/details?id=com.kids.learning.master

