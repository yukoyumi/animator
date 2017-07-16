import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {InAppBrowser} from '@ionic-native/in-app-browser';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    animatetype: string = '';
    classhere: string = '';

    constructor(private iab: InAppBrowser) {
    }

    ionViewDidLoad() {
        let promise = new Observable((observer) => {
            document.getElementById("animatediv").addEventListener("animationend", function () {
                observer.next(1);
            });
        });
        promise.subscribe(res => this.classhere = '');
    }


    delaybeforeanimation() {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve('')
            }, 500);
        });
    }

    animate() {
        this.delaybeforeanimation().then(res => {
            this.classhere = this.animatetype + ' animated';
        });
    }

    visitrepo() {
        this.iab.create('https://github.com/ionicninja/animator', '_blank', 'location=no');
    }


}
