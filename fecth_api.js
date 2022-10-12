#https://finance.vietstock.vn/doanh-nghiep-a-z?page=1 vào trang này rồi nhấn f12 mở trang console lên :3 dán code vào chạy
let data2 = []
    for( var i =1 ; i < 66 ; i++){
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            body: `catID=0&industryID=0&page=${i}&pageSize=50&type=0&code=&businessTypeID=0&orderBy=Code&orderDir=ASC&__RequestVerificationToken=rEuS_zRYHbRD0RMz6tsixJ1W-Kqx-hEgUnACQfs8B2wB-ZJzEd4Vux41lVUamqlwcwF-rYUCUIntWCWUj7wuVf8r5GN32i2Smyo6It-_KzSFWIZwTFwkFEN3EixajjjqHCM6VzpamqKY1fs-YRcczw2`
        };
        
        fetch('https://finance.vietstock.vn/data/corporateaz', options).then((res) => res.json()).then(data => {
        console.log(data);    
        data2.push(...data);
        });
    }

console.log("api " , data2);    
