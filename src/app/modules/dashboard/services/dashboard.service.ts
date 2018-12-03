import { Injectable } from '@angular/core';
import { Dog } from '@app/common/models/dog.model';

const dogss = [
  {
    name: 'Tommy Dog',
    breed: 'Indian',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small,
     agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`,
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  },
  {
    name: 'Beagle',
    breed: 'Not Indian',
    description: ` Not only is the Beagle an excellent hunting dog and loyal companion, it is also happy-go-lucky,
    funny, and—thanks to its pleading expression—cute. 
    They were bred to hunt in packs, so they enjoy company and are generally easygoing.`,
    image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000937/Beagle-On-White-07.jpg'
  },
  {
    name: 'Bracco Italiano',
    breed: 'Italian',
    description: ` The Bracco Italiano is one of the oldest of the pointing breeds. It was introduced into the United States
     in the 1990s and
     has remained true to its heritage as a versatile gun dog. It is gentle in the home and tireless in the field.`,
    image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/07180319/bracco_on-white.jpg'
  },
  {
    name: 'Tommy Dog',
    breed: 'Indian',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small,
     agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`,
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  },
  {
    name: 'Beagle',
    breed: 'Not Indian',
    description: ` Not only is the Beagle an excellent hunting dog and loyal companion, it is also happy-go-lucky,
    funny, and—thanks to its pleading expression—cute. 
    They were bred to hunt in packs, so they enjoy company and are generally easygoing.`,
    image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000937/Beagle-On-White-07.jpg'
  },
  {
    name: 'Bracco Italiano',
    breed: 'Italian',
    description: ` The Bracco Italiano is one of the oldest of the pointing breeds. It was introduced into the United States
     in the 1990s and
     has remained true to its heritage as a versatile gun dog. It is gentle in the home and tireless in the field.`,
    image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/07180319/bracco_on-white.jpg'
  }
];
@Injectable()
export class DashboardService {

  constructor() {

  }



  getDogs() {
    const dogs: Dog[] = [];
    for (const dog of dogss) {
      dogs.push(new Dog(dog));
    }

    return dogs;

  }
}
