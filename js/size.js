function windowSize (size) {
	// 当前窗口尺寸
	switch (size) {
		case 'width':
			return $(window).width()
			break
		case 'height':
			return $(window).height()
			break
		default:
			return [$(window).width(), $(window).height()]
	}
}
