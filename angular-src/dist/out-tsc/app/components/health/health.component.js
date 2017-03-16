var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
var HealthComponent = (function () {
    function HealthComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HealthComponent.prototype.ngOnInit = function () {
    };
    return HealthComponent;
}());
HealthComponent = __decorate([
    Component({
        selector: 'app-health',
        templateUrl: './health.component.html',
        styleUrls: ['./health.component.css']
    }),
    __metadata("design:paramtypes", [AuthService, Router])
], HealthComponent);
export { HealthComponent };
//# sourceMappingURL=../../../../../src/app/components/health/health.component.js.map