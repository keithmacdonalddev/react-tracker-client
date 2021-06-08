import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store/store';
import App from 'components/App/App';
import { ErrorBoundary } from 'react-error-boundary';
import 'animate.css';

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundary
			FallbackComponent={ErrorFallback}
			onReset={() => {
				// reset the state of your app so the error doesn't happen again
			}}>
			<App />
		</ErrorBoundary>
	</Provider>,
	document.querySelector('#root'),
);

function ErrorFallback({ error, resetErrorBoundary, data }) {
	return (
		<div role='alert'>
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
}
