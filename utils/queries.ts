export const FlashSalesQuery = `
    *[_type == "flashSales"]{
    ...productReference->{
        "name": productName,
        price,
        discount,
        "image": productImage.asset->url,
        desc}
}`;

export const BestSellingQuery = `
    *[_type == "flashSales"]{
    ...productReference->{
        "name": productName,
        price,
        discount,
        "image": productImage.asset->url,
        desc}
}`;