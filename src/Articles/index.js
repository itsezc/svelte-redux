import { connect } from 'svelte-redux-connect';
import Articles from './Articles.svelte';

const mapDispatchToProps = dispath => ({
	addArticle: (articleName) => dispath({
		type: 'ADD_ARTICLE',
		payload: { name: articleName }
	}),
})

const mapStateToProps = state => ({
	articles: state.articles.list
})

export default connect(mapStateToProps, mapDispatchToProps)(Articles);