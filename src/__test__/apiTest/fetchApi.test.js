import { fetchApi } from '../../Redux/pollution/pollutionSlice';

describe('fetching from api', () => {
  test('data type', async () => {
    const data = await fetchApi();
    expect(data).toBeInstanceOf(Object);
  });

  test('data contains object indeed', async () => {
    const data = await fetchApi();
    expect.objectContaining(data);
  });
});
