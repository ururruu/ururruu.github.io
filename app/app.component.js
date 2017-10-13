"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        //propositions = propositions;
        this.propositions = [
            {
                icon: 'browser.png',
                title: 'Cross-browser development',
                description: 'All modern browsers support.'
            },
            {
                icon: 'search-1.png',
                title: 'Pixel perfect development',
                description: 'Full match with mock-ups.'
            },
            {
                icon: 'devices.png',
                title: 'Responsive development',
                description: 'Good viewing at any device.'
            }
        ];
        this.contacts = [
            {
                icon: 'linkedin.png',
                link: 'https://www.linkedin.com/in/katya-dubinina-109754104/'
            },
            {
                icon: 'facebook.png',
                link: 'https://www.facebook.com/katia.dubinina'
            },
            {
                icon: 'skype.png'
            }
        ];
        this.projects = [
            {
                class: 'one',
                name: 'KORTX',
                mainDescription: 'Freelancing platform',
                extraDescription: 'Allows clients to interview, hire and work with freelancers and agencies.',
                done: 'Front-end developing of more than 30 web-pages, <br>back-end connection, <br>chat developing.',
                technologies: [
                    {
                        title: 'HTML5',
                        icon: 'html'
                    },
                    {
                        title: 'AngularJS',
                        icon: 'angular'
                    },
                    {
                        title: 'SCSS',
                        icon: 'sass'
                    },
                    {
                        title: 'Gulp',
                        icon: 'gulp'
                    }
                ],
                link: 'http://kweb.dev2.yarandin.com/#/login'
            },
            {
                class: 'two',
                name: 'crazyfatburn',
                mainDescription: 'Sports training platform',
                extraDescription: 'Allows clients to pass a course of sports training right from home.',
                done: 'Front-end developing of half of the web-pages,  <br> project deployment <br> ui/ux refinement.',
                technologies: [
                    {
                        title: 'HTML5',
                        icon: 'html'
                    },
                    {
                        title: 'AngularJS',
                        icon: 'angular'
                    },
                    {
                        title: 'SCSS',
                        icon: 'sass'
                    },
                    {
                        title: 'Gulp',
                        icon: 'gulp'
                    }
                ],
                link: 'http://crazyfatburn.dev2.yarandin.com/#/wall'
            },
            {
                class: 'three',
                name: '',
                mainDescription: 'Leaflux',
                extraDescription: 'Landing page adwertising bay leaf.',
                done: 'Front-end fixes, multilanguages.',
                technologies: [
                    {
                        title: 'HTML5',
                        icon: 'html'
                    },
                    {
                        title: 'SCSS',
                        icon: 'sass'
                    },
                    {
                        title: 'Gulp',
                        icon: 'gulp'
                    }
                ],
                link: 'http://alahno.dev2.yarandin.com/'
            },
            {
                class: 'four',
                name: '',
                mainDescription: 'Yarandin',
                extraDescription: 'Company web-site and blog.',
                done: 'Front-end fixes.',
                technologies: [
                    {
                        title: 'HTML5',
                        icon: 'html'
                    },
                    {
                        title: 'AngularJS',
                        icon: 'angular'
                    },
                    {
                        title: 'SCSS',
                        icon: 'sass'
                    },
                    {
                        title: 'Gulp',
                        icon: 'gulp'
                    }
                ],
                link: 'http://www.yarandin.com/en'
            }
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
        styleUrls: [
            'app.component.css'
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map