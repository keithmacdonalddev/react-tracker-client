import classname from './loader.module.css';

const Loader = () => {
	return (
		<div className={classname.container}>
			<div className={classname.loading}>
				<span className={classname.text}>Loading</span>
				<div className={classname.percent}>
					<div className={classname.progress}></div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
