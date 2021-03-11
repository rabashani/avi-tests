const {add, sub} = require('./add');


describe("add", () => {
    test('adds 2 positive numbers , sums to a + b', () => {
        expect(add(0, 0)).toBe(0);
        expect(add(1, 2)).toBe(3);
        expect(add(2, 1)).toBe(3);
      });

      test('adds positive with zero , sums to a + b', () => {
        expect(add(0, 1)).toBe(1);
        expect(add(1, 0)).toBe(1);
      });

    test('adds string as one of the params , equal "invalid param"', () => {
        expect(add("aaa", "bbb")).toBe("invalid param");
        expect(add("aaa", 2)).toBe("invalid param");
        expect(add(1, "bbb")).toBe("invalid param");
      });

      test('adds non-integer , equal "invalid param', ()=>{
        expect(add(2.5, 1)).toBe("invalid param");
      })

      test('adds null with number, equal "invalid param"', () => {
        expect(add(null, 2)).toBe("invalid param");
        expect(add(1, null)).toBe("invalid param");
      });

    })


describe("sub", () => {
    test('subs 2 - 1 to equal 1', () => {
        expect(sub(2, 1)).toBe(1);
      });
})
