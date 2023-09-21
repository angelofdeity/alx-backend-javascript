const calculateNumber = require("./0-calcul.js");
const assert = require("assert");

describe("calculateNumber", () => {
  it("should return 4 when adding 1 and 3", () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it("should return 5 when adding 1 and 3.7", () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it("should return 5 when adding 1.2 and 3.7", () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it("should return 6 when adding 1.5 and 3.7", () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it("should return 0 when adding 0.1 and 0.3", () => {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
  });
  it("should return -4 when adding -1 and -3", () => {
    assert.strictEqual(calculateNumber(-1, -3), -4);
  });
  it("should return -5 when adding -1 and -3.7", () => {
    assert.strictEqual(calculateNumber(-1, -3.7), -5);
  });
  it("should return -5 when adding -1.2 and -3.7", () => {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });
  it("should return -5 when adding -1.5 and -3.7", () => {
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  });
  it("should return -0 when adding -0.1 and -0.3", () => {
    assert.strictEqual(calculateNumber(-0.1, -0.3), -0);
  });
  it("should return 0 when adding 0.1 and -0.3", () => {
    assert.strictEqual(calculateNumber(0.1, -0.3), 0);
  });
  it("should return 0 when adding -0.1 and 0.3", () => {
    assert.strictEqual(calculateNumber(-0.1, 0.3), 0);
  });
  it("should return -1195 when adding -251.92 and -943.41", () => {
    assert.strictEqual(calculateNumber(-251.92, -943.41), -1195);
  });
  it("should return -1256 when adding -276.36 and -980.38", () => {
    assert.strictEqual(calculateNumber(-276.36, -980.38), -1256);
  });
  it("should return -475 when adding -554.03 and 78.86", () => {
    assert.strictEqual(calculateNumber(-554.03, 78.86), -475);
  });
  it("should return -305 when adding -704.77 and 399.58", () => {
    assert.strictEqual(calculateNumber(-704.77, 399.58), -305);
  });
  it("should return -210 when adding 566.03 and -776.27", () => {
    assert.strictEqual(calculateNumber(566.03, -776.27), -210);
  });
  it("should return -1460 when adding -927.59 and -532.1", () => {
    assert.strictEqual(calculateNumber(-927.59, -532.1), -1460);
  });
  it("should return -440 when adding -67.88 and -371.53", () => {
    assert.strictEqual(calculateNumber(-67.88, -371.53), -440);
  });
  it("should return -1380 when adding -484.66 and -894.81", () => {
    assert.strictEqual(calculateNumber(-484.66, -894.81), -1380);
  });
  it("should return 252 when adding 511.61 and -259.64", () => {
    assert.strictEqual(calculateNumber(511.61, -259.64), 252);
  });
  it("should return 1426 when adding 736.93 and 688.73", () => {
    assert.strictEqual(calculateNumber(736.93, 688.73), 1426);
  });
  it("should return 255 when adding -322.38 and 576.61", () => {
    assert.strictEqual(calculateNumber(-322.38, 576.61), 255);
  });
  it("should return -1143 when adding -294.68 and -848.11", () => {
    assert.strictEqual(calculateNumber(-294.68, -848.11), -1143);
  });
  it("should return -439 when adding -796.4 and 356.69", () => {
    assert.strictEqual(calculateNumber(-796.4, 356.69), -439);
  });
  it("should return 583 when adding 260.08 and 322.88", () => {
    assert.strictEqual(calculateNumber(260.08, 322.88), 583);
  });
  it("should return -1200 when adding -423.68 and -776.41", () => {
    assert.strictEqual(calculateNumber(-423.68, -776.41), -1200);
  });
  it("should return 4 when adding -45.83 and 49.61", () => {
    assert.strictEqual(calculateNumber(-45.83, 49.61), 4);
  });
  it("should return 963 when adding 753.53 and 208.83", () => {
    assert.strictEqual(calculateNumber(753.53, 208.83), 963);
  });
  it("should return 66 when adding 936.61 and -871.15", () => {
    assert.strictEqual(calculateNumber(936.61, -871.15), 66);
  });
  it("should return -1065 when adding -366.14 and -699.01", () => {
    assert.strictEqual(calculateNumber(-366.14, -699.01), -1065);
  });
  it("should return 1187 when adding 613.85 and 573.06", () => {
    assert.strictEqual(calculateNumber(613.85, 573.06), 1187);
  });
  it("should return -1255 when adding -302.8 and -952.16", () => {
    assert.strictEqual(calculateNumber(-302.8, -952.16), -1255);
  });
  it("should return 505 when adding 704.53 and -199.86", () => {
    assert.strictEqual(calculateNumber(704.53, -199.86), 505);
  });
  it("should return -99 when adding 682.0 and -781.33", () => {
    assert.strictEqual(calculateNumber(682.0, -781.33), -99);
  });
  it("should return 168 when adding 228.43 and -60.0", () => {
    assert.strictEqual(calculateNumber(228.43, -60.0), 168);
  });
  it("should return 256 when adding -402.0 and 658.4", () => {
    assert.strictEqual(calculateNumber(-402.0, 658.4), 256);
  });
  it("should return -66 when adding 528.97 and -594.68", () => {
    assert.strictEqual(calculateNumber(528.97, -594.68), -66);
  });
  it("should return -811 when adding -659.38 and -151.79", () => {
    assert.strictEqual(calculateNumber(-659.38, -151.79), -811);
  });
  it("should return 576 when adding 283.46 and 293.38", () => {
    assert.strictEqual(calculateNumber(283.46, 293.38), 576);
  });
  it("should return 233 when adding -241.61 and 475.27", () => {
    assert.strictEqual(calculateNumber(-241.61, 475.27), 233);
  });
  it("should return -674 when adding -553.25 and -121.38", () => {
    assert.strictEqual(calculateNumber(-553.25, -121.38), -674);
  });
  it("should return -697 when adding -474.08 and -222.89", () => {
    assert.strictEqual(calculateNumber(-474.08, -222.89), -697);
  });
  it("should return 1546 when adding 669.03 and 876.94", () => {
    assert.strictEqual(calculateNumber(669.03, 876.94), 1546);
  });
  it("should return 374 when adding 62.6 and 311.17", () => {
    assert.strictEqual(calculateNumber(62.6, 311.17), 374);
  });
  it("should return -1111 when adding -498.99 and -611.97", () => {
    assert.strictEqual(calculateNumber(-498.99, -611.97), -1111);
  });
  it("should return -887 when adding -351.48 and -535.94", () => {
    assert.strictEqual(calculateNumber(-351.48, -535.94), -887);
  });
  it("should return 55 when adding 801.22 and -746.27", () => {
    assert.strictEqual(calculateNumber(801.22, -746.27), 55);
  });
  it("should return -558 when adding -375.23 and -183.27", () => {
    assert.strictEqual(calculateNumber(-375.23, -183.27), -558);
  });
  it("should return 1007 when adding 175.68 and 830.63", () => {
    assert.strictEqual(calculateNumber(175.68, 830.63), 1007);
  });
  it("should return -812 when adding -283.47 and -529.19", () => {
    assert.strictEqual(calculateNumber(-283.47, -529.19), -812);
  });
  it("should return 1715 when adding 827.86 and 887.24", () => {
    assert.strictEqual(calculateNumber(827.86, 887.24), 1715);
  });
  it("should return 275 when adding 126.53 and 148.17", () => {
    assert.strictEqual(calculateNumber(126.53, 148.17), 275);
  });
  it("should return 373 when adding -49.57 and 422.98", () => {
    assert.strictEqual(calculateNumber(-49.57, 422.98), 373);
  });
  it("should return -175 when adding -119.21 and -56.49", () => {
    assert.strictEqual(calculateNumber(-119.21, -56.49), -175);
  });
  it("should return 973 when adding 467.75 and 504.88", () => {
    assert.strictEqual(calculateNumber(467.75, 504.88), 973);
  });
  it("should return 855 when adding 219.18 and 635.84", () => {
    assert.strictEqual(calculateNumber(219.18, 635.84), 855);
  });
  it("should return 764 when adding -120.23 and 884.11", () => {
    assert.strictEqual(calculateNumber(-120.23, 884.11), 764);
  });
  it("should return 880 when adding 468.2 and 412.2", () => {
    assert.strictEqual(calculateNumber(468.2, 412.2), 880);
  });
  it("should return -1217 when adding -513.72 and -703.06", () => {
    assert.strictEqual(calculateNumber(-513.72, -703.06), -1217);
  });
  it("should return 175 when adding -184.59 and 360.48", () => {
    assert.strictEqual(calculateNumber(-184.59, 360.48), 175);
  });
  it("should return 391 when adding -456.23 and 847.08", () => {
    assert.strictEqual(calculateNumber(-456.23, 847.08), 391);
  });
  it("should return -474 when adding -12.45 and -462.38", () => {
    assert.strictEqual(calculateNumber(-12.45, -462.38), -474);
  });
  it("should return 30 when adding 586.21 and -556.28", () => {
    assert.strictEqual(calculateNumber(586.21, -556.28), 30);
  });
  it("should return 101 when adding 784.98 and -683.55", () => {
    assert.strictEqual(calculateNumber(784.98, -683.55), 101);
  });
  it("should return -66 when adding 113.39 and -179.34", () => {
    assert.strictEqual(calculateNumber(113.39, -179.34), -66);
  });
  it("should return 546 when adding 305.49 and 240.67", () => {
    assert.strictEqual(calculateNumber(305.49, 240.67), 546);
  });
  it("should return 487 when adding 126.21 and 360.86", () => {
    assert.strictEqual(calculateNumber(126.21, 360.86), 487);
  });
  it("should return 524 when adding 236.37 and 287.6", () => {
    assert.strictEqual(calculateNumber(236.37, 287.6), 524);
  });
  it("should return -117 when adding -97.59 and -18.59", () => {
    assert.strictEqual(calculateNumber(-97.59, -18.59), -117);
  });
  it("should return 374 when adding -298.6 and 673.43", () => {
    assert.strictEqual(calculateNumber(-298.6, 673.43), 374);
  });
  it("should return -302 when adding -66.6 and -234.84", () => {
    assert.strictEqual(calculateNumber(-66.6, -234.84), -302);
  });
  it("should return -587 when adding -208.86 and -378.37", () => {
    assert.strictEqual(calculateNumber(-208.86, -378.37), -587);
  });
  it("should return 14 when adding -504.07 and 517.95", () => {
    assert.strictEqual(calculateNumber(-504.07, 517.95), 14);
  });
  it("should return -1676 when adding -846.98 and -829.21", () => {
    assert.strictEqual(calculateNumber(-846.98, -829.21), -1676);
  });
  it("should return 895 when adding 531.11 and 364.45", () => {
    assert.strictEqual(calculateNumber(531.11, 364.45), 895);
  });
  it("should return -986 when adding 5.68 and -991.63", () => {
    assert.strictEqual(calculateNumber(5.68, -991.63), -986);
  });
  it("should return -770 when adding -243.1 and -526.95", () => {
    assert.strictEqual(calculateNumber(-243.1, -526.95), -770);
  });
  it("should return -323 when adding -248.97 and -74.45", () => {
    assert.strictEqual(calculateNumber(-248.97, -74.45), -323);
  });
  it("should return 49 when adding -519.97 and 568.63", () => {
    assert.strictEqual(calculateNumber(-519.97, 568.63), 49);
  });
  it("should return 868 when adding 936.31 and -67.62", () => {
    assert.strictEqual(calculateNumber(936.31, -67.62), 868);
  });
  it("should return 894 when adding 464.5 and 428.69", () => {
    assert.strictEqual(calculateNumber(464.5, 428.69), 894);
  });
  it("should return -641 when adding -67.16 and -574.34", () => {
    assert.strictEqual(calculateNumber(-67.16, -574.34), -641);
  });
  it("should return -1102 when adding -706.07 and -396.1", () => {
    assert.strictEqual(calculateNumber(-706.07, -396.1), -1102);
  });
  it("should return -1094 when adding -675.51 and -418.02", () => {
    assert.strictEqual(calculateNumber(-675.51, -418.02), -1094);
  });
  it("should return 1172 when adding 653.73 and 518.21", () => {
    assert.strictEqual(calculateNumber(653.73, 518.21), 1172);
  });
  it("should return -683 when adding -438.02 and -245.04", () => {
    assert.strictEqual(calculateNumber(-438.02, -245.04), -683);
  });
  it("should return -70 when adding 793.34 and -862.81", () => {
    assert.strictEqual(calculateNumber(793.34, -862.81), -70);
  });
  it("should return 1362 when adding 596.06 and 765.9", () => {
    assert.strictEqual(calculateNumber(596.06, 765.9), 1362);
  });
  it("should return -1334 when adding -420.24 and -914.48", () => {
    assert.strictEqual(calculateNumber(-420.24, -914.48), -1334);
  });
  it("should return -496 when adding -332.43 and -163.96", () => {
    assert.strictEqual(calculateNumber(-332.43, -163.96), -496);
  });
  it("should return -1445 when adding -659.63 and -784.67", () => {
    assert.strictEqual(calculateNumber(-659.63, -784.67), -1445);
  });
  it("should return -905 when adding -578.35 and -326.71", () => {
    assert.strictEqual(calculateNumber(-578.35, -326.71), -905);
  });
  it("should return 569 when adding -368.02 and 936.88", () => {
    assert.strictEqual(calculateNumber(-368.02, 936.88), 569);
  });
  it("should return 190 when adding -275.46 and 464.95", () => {
    assert.strictEqual(calculateNumber(-275.46, 464.95), 190);
  });
  it("should return -230 when adding 526.68 and -757.42", () => {
    assert.strictEqual(calculateNumber(526.68, -757.42), -230);
  });
  it("should return -607 when adding -208.54 and -398.16", () => {
    assert.strictEqual(calculateNumber(-208.54, -398.16), -607);
  });
  it("should return 173 when adding 414.75 and -241.7", () => {
    assert.strictEqual(calculateNumber(414.75, -241.7), 173);
  });
  it("should return 168 when adding 717.37 and -549.02", () => {
    assert.strictEqual(calculateNumber(717.37, -549.02), 168);
  });
  it("should return -215 when adding 180.92 and -395.8", () => {
    assert.strictEqual(calculateNumber(180.92, -395.8), -215);
  });
  it("should return -240 when adding 467.9 and -707.84", () => {
    assert.strictEqual(calculateNumber(467.9, -707.84), -240);
  });
  it("should return 177 when adding -430.0 and 607.43", () => {
    assert.strictEqual(calculateNumber(-430.0, 607.43), 177);
  });
  it("should return 476 when adding -406.21 and 882.11", () => {
    assert.strictEqual(calculateNumber(-406.21, 882.11), 476);
  });
  it("should return 1202 when adding 961.68 and 240.33", () => {
    assert.strictEqual(calculateNumber(961.68, 240.33), 1202);
  });
  it("should return 1646 when adding 934.84 and 711.25", () => {
    assert.strictEqual(calculateNumber(934.84, 711.25), 1646);
  });
  it("should return 273 when adding -649.08 and 922.14", () => {
    assert.strictEqual(calculateNumber(-649.08, 922.14), 273);
  });
  it("should return -545 when adding -680.89 and 135.87", () => {
    assert.strictEqual(calculateNumber(-680.89, 135.87), -545);
  });
  it("should return 188 when adding -688.58 and 876.64", () => {
    assert.strictEqual(calculateNumber(-688.58, 876.64), 188);
  });
  it("should return 411 when adding -297.67 and 709.26", () => {
    assert.strictEqual(calculateNumber(-297.67, 709.26), 411);
  });
  it("should return 987 when adding 978.42 and 8.65", () => {
    assert.strictEqual(calculateNumber(978.42, 8.65), 987);
  });
  it("should return 1134 when adding 955.53 and 177.84", () => {
    assert.strictEqual(calculateNumber(955.53, 177.84), 1134);
  });
  it("should return 470 when adding 351.06 and 119.4", () => {
    assert.strictEqual(calculateNumber(351.06, 119.4), 470);
  });
});
