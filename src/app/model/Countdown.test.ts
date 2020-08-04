import { Countdown } from './Countdown';

describe('Countdown', () => {
  describe('#totalDurationInMilliseconds', () => {
    it('should calculate accurate duration', () => {
      const startDate = new Date('2020-07-20 00:00:00');
      const endDate = new Date('2020-07-22 13:35:27');
      const expected = 221727000;
      const cd = new Countdown(startDate, endDate, 'bogus');

      const duration = cd.totalDuration;

      expect(duration).toBe(expected);
    });
  });
});