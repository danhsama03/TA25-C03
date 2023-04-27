import { question } from "readline-sync";

export class Fraction {
    // Khai báo thuộc tính của đối tượng
    private tuSo: number;
    private mauSo: number;

    constructor(a: number = 0, b: number = 0) {
        this.tuSo = a;
        this.mauSo = b;
    }

    public scan(): void {
        this.tuSo = Number(question("Nhap tu so a: "));
        this.mauSo = Number(question("Nhap mau so b: "));
    }

    public print(): void {
        console.log("Phan so la: " + this.tuSo + "/" + this.mauSo);
    }

    public reduce(): void {
        const Ucln: any = this.ucln(this.tuSo, this.mauSo);
        this.tuSo = this.tuSo / Ucln;
        this.mauSo = this.mauSo / Ucln
    }

    public ucln(x: number, y: number): number {
        let a: number = Math.abs(x);
        let b: number = Math.abs(y);
        while (b) {
            const t = b;
            b = a % b;
            a = t;
        }
        const UCLN: number = a;
        return UCLN
    }

    public normalize(): void {
        if (this.tuSo / this.mauSo > 0) {
            console.log("Phan so duong")
        }
        if (this.tuSo / this.mauSo < 0) {
            console.log("Phan so am")
        }
        if (this.tuSo / this.mauSo == 0) {
            console.log("Phan so bang 0")
        }
    }

    public plus(fraction: Fraction): number {
        const Bcnn: number = this.bnnn(this.mauSo, fraction.mauSo);
        console.log(Bcnn);
        if (this.mauSo === Bcnn) {
            fraction.tuSo = fraction.tuSo * (Bcnn / fraction.mauSo);
        } else if (fraction.mauSo === Bcnn) {
            this.tuSo = this.tuSo * (Bcnn / this.mauSo);
        } else {
            this.tuSo = this.tuSo * (Bcnn / this.mauSo)
            fraction.tuSo = fraction.tuSo * (Bcnn / fraction.mauSo)
        }
        const plus: any = this.tuSo + fraction.tuSo;
        console.log("Phep cong cua phan so la: " + plus + "/" + Bcnn)
        return plus
    }

    public bnnn(x: number, y: number): number {
        let lar = Math.max(x, y);
        let small = Math.min(x, y);
        let i = lar;
        while (i % small !== 0) {
            i += lar;
        }
        return i;
    }

    public multiply(fraction: Fraction): number {
        const tuSo: number = this.tuSo * fraction.tuSo;
        const mauSo: number = this.mauSo * fraction.mauSo;
        console.log("Phep nhan x va y la: " + tuSo + "/" + mauSo);
        return mauSo;
    }

    public eual(fraction: Fraction): boolean {
        let flag: boolean = false;
        const number1: number = this.tuSo / this.mauSo;
        const number2: number = fraction.tuSo / fraction.mauSo;
        if ( number1 == number2) {
            flag = true;
            console.log("Bang nhau");
        } else {
            flag = false;
            console.log("Khong bang nhau");

        }
        return flag
    }

    public lessThan(fraction: Fraction): boolean {
        let flag: boolean = false;
        const number1: number = this.tuSo / this.mauSo;
        const number2: number = fraction.tuSo / fraction.mauSo;
        if ( number1 < number2) {
            flag = true;
            console.log("Be hon");
        } else {
            flag = false;
            console.log("Khong be hon");

        }
        return flag
    }
}