"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
var UserDto;
(function (UserDto) {
    let gender;
    (function (gender) {
        gender[gender["_0"] = 0] = "_0";
        gender[gender["_1"] = 1] = "_1";
        gender[gender["_2"] = 2] = "_2";
    })(gender = UserDto.gender || (UserDto.gender = {}));
    let availability;
    (function (availability) {
        availability[availability["_0"] = 0] = "_0";
        availability[availability["_1"] = 1] = "_1";
        availability[availability["_2"] = 2] = "_2";
        availability[availability["_3"] = 3] = "_3";
        availability[availability["_4"] = 4] = "_4";
    })(availability = UserDto.availability || (UserDto.availability = {}));
    let siteTheme;
    (function (siteTheme) {
        siteTheme[siteTheme["_0"] = 0] = "_0";
        siteTheme[siteTheme["_1"] = 1] = "_1";
        siteTheme[siteTheme["_2"] = 2] = "_2";
    })(siteTheme = UserDto.siteTheme || (UserDto.siteTheme = {}));
})(UserDto = exports.UserDto || (exports.UserDto = {}));
