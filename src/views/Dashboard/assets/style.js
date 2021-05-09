const toggleStyle = (bool) => {
	if (bool) {
		return {
			toggle: {
				top: '16px',
				left: '86%',
				zIndex: '99999',
				transition: 'All 300ms',
				background: '#f2f2f5',
				borderRadius: '50%',
				border: '2px solid #f2f2f5',
				fontSize: '16px',
				boxShadow:
					'inset 0 0 2px 1px rgba(0,0,0,0.1), inset 0 0 7px rgba(0,0,0,0.1),  inset 0 0 7px rgba(0,0,0,0.2)',
				height: '35px',
				width: '35px',
			},
		};
	} else {
		return {
			toggle: {
				top: null,
				left: null,
				zIndex: null,
				transition: null,
				background: null,
				borderRadius: null,
				border: null,
				fontSize: null,
				boxShadow: null,
				height: null,
				width: null,
			},
		};
	}
};

export { toggleStyle };
