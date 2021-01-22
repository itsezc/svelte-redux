import Articles from 'Articles.svelte';
import { render, fireEvent } from '@testing-library/svelte';

it ('Renders', async () => {
	const { getByText, getByTestId } = render(Articles);

	const articles = getByText('articles');

	expect(articles.length).toBe(1);

	const input = getByTestId('add_input');
	input.textContent = 'Another article';

	expect(input.textContent).toBe('Another article');

	await fireEvent.click('submit_input');

	expect(articles.length).toBe(2);
})