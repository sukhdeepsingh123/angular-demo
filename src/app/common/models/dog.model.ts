


export class Dog {

    name: string;
    breed: string;
    image: string;
    description: string;


    constructor(input: Dog) {
        Object.assign(this, input);
    }


}
