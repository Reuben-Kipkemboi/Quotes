import { Quotedetails } from './quotedetails';

describe('Quotedetails', () => {
  it('should create an instance', () => {
    expect(new Quotedetails(1, "East or west home is best", 23, 3, 'Belinda kross', 'Reuby and Reuby', new Date(2022, 3, 6))).toBeTruthy();
  });
});
