import { Fraction } from "./fraction";

function mainFraction() {
    // Khởi tạo đối tượng mới
    const s: Fraction = new Fraction();

    // Test thử hàm scan
    s.scan();

    // Test thử hàm print
    // s.print();

    // Test thử hàm reduce
    // s.reduce()
    // s.print()

    // Test thử hàm normalize
    // s.normalize()

    // Test thử hàm plus
    const s2: Fraction = new Fraction(2, 4)
    // s.plus(s2)

    // Test thử hàm multiply
    // s.multiply(s2)

    // Test thử hàm equal
    // s.eual(s2)

    // Test thử hàm lessThan
    s.lessThan(s2)
};

mainFraction();