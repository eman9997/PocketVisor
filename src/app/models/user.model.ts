


export interface User{
    
    email: string;
    nameFirst:string;
    nameLast:string;

    Accounts: {
        [key: number]: Accounts
    };

}
export interface Accounts{
    balance: number;
    accountType:string;
    myDate: string;
    APR: number;
}


// interface Item {
//     id: number;
//     size: number;
// }
// interface Example {
//     name: string;
//     items: {
//         [key: string]: Item
//     };
// }

// var obj: Example = {
//     name: "test",
//     items: {
//         "a": {
//             id: 1,
//             size: 10
//         },
//         "b": {
//             id: 2,
//             size: 34
//         }
//     }
// }