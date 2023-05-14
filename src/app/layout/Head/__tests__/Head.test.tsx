import { render, waitFor } from '@/test/test-utils';

import { Head } from '../Head';

test('should add proper page title and meta description', async () => {
  const title = 'characters';
  const titleSuffix = ' | Space Characters';
  const description = 'description';

  render(<Head title={title} description={description} />);
  await waitFor(() => expect(document.title).toEqual(title + titleSuffix));

  const metaDescription = document.querySelector("meta[name='description']");

  expect(metaDescription?.getAttribute('content')).toEqual(description);
});
