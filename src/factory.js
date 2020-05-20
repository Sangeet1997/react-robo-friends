import faker from "faker"

let imgId = 101;
let robots = [];

for(let i = 0;i<80;i++)
{
    robots[i]={
        id : (i+1),
        imgId : imgId++,
        name : faker.name.findName(),
        username : faker.internet.userName(),
        email : faker.phone.phoneNumber(),
        }
}

export {robots};
