const {
    calculateSquareRoot,
    calculateSquare,
    calculateReciprocal,
    naturalLog,
    sine,
    cosine,
    tangent,
} = require('./calculator');

describe('Calculator functions', () => {
    it('should calculate the square root of a number', () => {
        expect(calculateSquareRoot(9)).toBe(3);
        expect(calculateSquareRoot(25)).toBe(5);
    });

    it('should calculate the square of a number', () => {
        expect(calculateSquare(3)).toBe(9);
        expect(calculateSquare(5)).toBe(25);
    });

    it('should calculate the reciprocal of a number', () => {
        expect(calculateReciprocal(2)).toBe(0.5);
        expect(calculateReciprocal(4)).toBe(0.25);
    });

    it('should calculate the natural log of a number', () => {
        expect(naturalLog(2.71828)).toBeCloseTo(1, 5);
    });

    it('should calculate the sine of a number (in radians)', () => {
        expect(sine(0)).toBe(0);
        expect(sine(Math.PI / 2)).toBeCloseTo(1, 5);
    });

    it('should calculate the cosine of a number (in radians)', () => {
        expect(cosine(0)).toBeCloseTo(1, 5);
        expect(cosine(Math.PI)).toBeCloseTo(-1, 5);
    });

    it('should calculate the tangent of a number (in radians)', () => {
        expect(tangent(0)).toBe(0);
        expect(tangent(Math.PI / 4)).toBeCloseTo(1, 5);
    });
});
