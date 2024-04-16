/*-------------------------------------------
共通部分
-------------------------------------------*/
// 見出しを浮き上がらせる
const heading = document.querySelector('.page-title');

const keyframes = {
	opacity:[0,1],
	translate:['0 50px',0],
};
const options = {
	duration:2000,
	easing:'ease',
};
heading.animate(keyframes,options);


/*-------------------------------------------
INDEX.html
-------------------------------------------*/
let path = location.pathname; // パス部分だけ取得
let paths = path.split('/'); // スラッシュで分解して配列にする
let file = paths[paths.length-1]; // 最後の要素を取得する

// 検索対象の文字列
let subject = file;

// トップページにのみ適用させる=single.htmlでは適用させない
if (subject.indexOf('single') == -1){
	// ローディング画面
	const loadingAreaLeft = document.querySelector('#loading-left');
	const loadingAreaRight = document.querySelector('#loading-right');

	const loading = {
		transform:['scaleX(1)','scaleX(0)'],
	};
	const loadindOptions = {
		duration:1000,
		easing:'ease',
		fill:'forwards',
	};

	window.addEventListener('load',() =>{
		// ローディング中（左）
		loadingAreaLeft.animate(loading,loadindOptions);

		// ローディング中（右）
		loadingAreaRight.animate(loading,loadindOptions);
	});
};

