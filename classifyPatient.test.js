const classifyPatient = require('./classifyPatient');

describe('classifyPatient function', () => {
  test.each([
    [120, 80, 90, 'White'],
    [135, 85, 110, 'Green'],
    [170, 95, 145, 'Yellow'],
    [185, 100, 165, 'Orange'],
    [190, 110, 220, 'Red'],
  ])(
    'เมื่อ systolic = %i, diastolic = %i, sugar = %i คำตอบจะเป็น %o',
    (systolic, diastolic, sugar, expected) => {
      expect(classifyPatient(systolic, diastolic, sugar)).toBe(expected);
    }
  );
});
