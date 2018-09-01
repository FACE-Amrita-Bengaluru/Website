$(document).ready(function(){

/*==========================================================*/
/* Syntax highlighter
/*==========================================================*/

	SyntaxHighlighter.config.clipboardSwf = 'assets/clipboard.swf';
	SyntaxHighlighter.all();

/*==========================================================*/
/* Scrollspy
/*==========================================================*/

	$('#doc-content').scrollspy({
		target: '#doc-menu'
	});

	$('#doc-content').scroll(function(){
		$('#doc-content').scrollspy('refresh');
	});

/*==========================================================*/
/* LocalScroll
/*==========================================================*/

	$('#doc-menu').localScroll({
		target:'#doc-content',
		axis: 'y'
	});

	$('body').localScroll({
		axis: 'y'
	});

});