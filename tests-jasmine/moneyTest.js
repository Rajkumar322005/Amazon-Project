import { format_money } from "../script/utils/money.js";

describe('test Suite: formatCurrency',()=>{
    it('converts cents into dollers',()=>{
        expect(format_money(2095)).toEqual('20.95');
    });
    it('works with 0',()=>{
        expect(format_money(0)).toEqual('0.00');
    });
    it('final check',()=>{
        expect(format_money(2000.5)).toEqual("20.01")
    });
});