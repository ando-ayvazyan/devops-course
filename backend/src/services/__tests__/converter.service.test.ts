import { digitsToWords } from '../converter.service';
import { chars_23, chars_675 } from '../../__mocks__/characterCombinations.mock';

describe('Converter service', () => {

  describe('digitsToWords', () => {

    it('should return appropriate character combinations for the given digits', () => {
      expect(digitsToWords('23')).toStrictEqual(chars_23);
    });

    it('should skip 0 and 1 digits', () => {
      expect(digitsToWords('675')).toStrictEqual(chars_675);
      expect(digitsToWords('16750')).toStrictEqual(chars_675);
    });

    // negative cases

    it('should return empty array for 0 and 1 digits', () => {
      expect(digitsToWords('0')).toStrictEqual([]);
      expect(digitsToWords('1')).toStrictEqual([]);
      expect(digitsToWords('10')).toStrictEqual([]);
    });

    it('should return empty array for non numeric characters', () => {
      expect(digitsToWords('  ')).toStrictEqual([]);
      expect(digitsToWords('$#^$*&%#')).toStrictEqual([]);
      expect(digitsToWords('@dfdf230011')).toStrictEqual(chars_23);
    });

  });

});
