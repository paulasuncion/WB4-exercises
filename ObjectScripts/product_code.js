function parsePartCode(partCode) {
    console.log(partCode.supplierCode + ":" + partCode.productNumber + "-" + partCode.size)
}

let partCode1 = {
    supplierCode: 123,
    productNumber: 123,
    size: 'S'
};

let partCode2 = {
    supplierCode: 456,
    productNumber: 456,
    size: "M"
};

let partCode3 = {
    supplierCode: 789,
    productNumber: 789,
    size: "L"
}

parsePartCode(partCode1);
parsePartCode(partCode2);
parsePartCode(partCode3);