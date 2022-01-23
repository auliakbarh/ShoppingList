import Config from '@/config';

test('configuration test', () => {
  expect(Config.env).toMatchSnapshot();
});
