<script>
	import { Provider } from 'svelte-redux-connect';
	import { store } from './redux/store.js';
	import Articles from './Articles';
</script>

<Provider {store}>
	<Articles />
</Provider>

