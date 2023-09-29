const myNum=[1,2,3,4,5,6,7,8,9,10]


//map function apply krne ke liye use hota h or filter true and false check krke

// const newNum=myNum.map((num)=>num+10);

// chaining


const newNum=myNum
                  .map((num)=>num*10)
                  .map((num)=>num+1)
                  .filter((num)=>num>20)


console.log(newNum)