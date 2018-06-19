var FBAbout = /** @class */ (function () {
    function FBAbout(url, overview, Work_and_education, Places_youve_lived, Contact_and_basic_info, Family_and_relationships, Details_about_you, Life_events) {
        this.url = url;
        this.overview = overview;
        this.Work_and_education = Work_and_education;
        this.Places_youve_lived = Places_youve_lived;
        this.Contact_and_basic_info = Contact_and_basic_info;
        this.Family_and_relationships = Family_and_relationships;
        this.Details_about_you = Details_about_you;
        this.Life_events = Life_events;
        this.A1 = url;
        this.B1 = overview;
        this.A2 = this.B1.recent_work;
        this.A3 = this.B1.recent_Uni;
        this.A4 = this.B1.recent_Place;
        this.A5 = this.B1.phone_number;
        this.A6 = this.B1.websites;
        this.A7 = this.B1.date_of_birth;
        this.A9 = this.B1.relationship;
        this.A10 = this.B1.name;
        this.A11 = this.B1.profile;
        this.B2 = Work_and_education;
        this.A12 = this.B2.WORK;
        this.A13 = this.B2.PROFESSIONAL_SKILLS;
        this.A14 = this.B2.UNIVERSITY;
        this.A15 = this.B2.HIGH_SCHOOL;
        this.B3 = Places_youve_lived;
        this.A16 = this.B3.CURRENT_CITY_AND_HOME_TOWN;
        this.A17 = this.B3.OTHER_PLACES_LIVED;
        this.B4 = Contact_and_basic_info;
        this.A19 = this.B4.Mobile_phones;
        this.A20 = this.B4.Email;
        this.A21 = this.B4.Facebook;
        this.A23 = this.B4.Social_links;
        this.A25 = this.B4.Date_of_birth;
        this.A26 = this.B4.Year_of_birth;
        this.A27 = this.B4.Gender;
        this.A28 = this.B4.interested_in;
        this.A29 = this.B4.language;
        this.A30 = this.B4.religious_views;
        this.B5 = Family_and_relationships;
        this.A31 = this.B5.RELATIONSHIP_STAT;
        this.A33 = this.B5.relationship;
        this.A34 = this.B5.name;
        this.A35 = this.B5.profile;
        this.B6 = Details_about_you;
        this.A36 = this.B6.ABOUT_YOU;
        this.A38 = this.B6.Nickname;
        this.A39 = this.B6.Maiden_name;
        this.A40 = this.B6.Alternative_spelling;
        this.A41 = this.B6.Married_name;
        this.A42 = this.B6.Fathers_name;
        this.A43 = this.B6.Birth_name;
        this.A44 = this.B6.Former_name;
        this.A45 = this.B6.Name_with_title;
        this.A46 = this.B6.Other;
        this.A47 = this.B6.FAVOURITE_QUOTES;
        this.A49 = this.B6.Blood_group;
        this.A50 = this.B6.Blood_RF;
        this.A51 = this.B6.Have_donated_blood;
        this.B7 = Life_events;
        this.A52 = this.B7.LIFE_EVENTS;
    } // constructor ends
    FBAbout.prototype.fbOverview = function (pass) {
        if (pass == FBAbout.password && this.url == FBAbout.url.O) {
            console.log(this.A2);
            console.log(this.A3);
            console.log(this.A4);
            console.log(this.A5);
            console.log(this.A6);
            console.log(this.A7);
            console.log("family members :");
            for (var i in this.A9) {
                console.log(this.A9[i] + ":" + this.A10[i] + "," + this.A11[i]);
            }
        }
    };
    FBAbout.prototype.fbWorkEducation = function (pass) {
        if (pass == FBAbout.password && this.url == FBAbout.url.WE) {
            console.log(this.A12);
            console.log(this.A13);
            console.log(this.A14);
            console.log(this.A15);
        }
        else {
            console.log("wrong pass");
        }
    };
    FBAbout.prototype.fbPlacesLive = function (pass) {
        if (pass == FBAbout.password && this.url == FBAbout.url.PL) {
            console.log(this.A16);
            console.log(this.A17);
        }
        else {
            console.log("wrong pass");
        }
    };
    FBAbout.prototype.fbContactInfo = function (pass) {
        if (pass == FBAbout.password && this.url == FBAbout.url.CBI) {
            console.log(this.A19);
            console.log(this.A20);
            console.log(this.A21);
            console.log(this.A23);
            console.log(this.A25);
            console.log(this.A26);
            console.log(this.A27);
            console.log(this.A28);
            console.log(this.A29);
            console.log(this.A30);
        }
        else {
            console.log("wrong pass");
        }
    };
    FBAbout.prototype.fbFamilyRelationship = function (pass) {
        if (pass == FBAbout.password && this.url == FBAbout.url.FR) {
            console.log(this.A31);
            for (var i in this.A33) {
                console.log(this.A33[i] + ":" + this.A34[i] + "," + this.A35[i]);
            }
        }
        else {
            console.log("wrong pass");
        }
    };
    FBAbout.prototype.fbDetails = function (pass) {
        if (pass == FBAbout.password && this.url == FBAbout.url.DY) {
            var beta = [];
            this.A36 = this.B6.ABOUT_YOU;
            beta[0] = this.A38;
            beta[1] = this.A39;
            beta[2] = this.A40;
            beta[3] = this.A41;
            beta[4] = this.A42;
            beta[5] = this.A43;
            beta[6] = this.A44;
            beta[7] = this.A45;
            beta[8] = this.A46;
            for (var i in beta) {
                if (beta[i] != undefined) {
                    console.log(beta[i]);
                }
            }
            console.log("" + this.A47);
            console.log("" + this.A49 + this.A50);
            console.log((this.A51 == true) ? "Yes,done donation before" : "No donation before");
        }
        else {
            console.log("wrong pass");
        }
    };
    FBAbout.prototype.fbLifeEvent = function (pass) {
        if (pass == FBAbout.password && this.url == FBAbout.url.LE) {
            for (var i in this.A52) {
                console.log(this.A52[i]);
            }
        }
        else {
            console.log("wrong pass");
        }
    };
    FBAbout.url = {
        O: "https://www.facebook.com/marxdrama/about?lst=100011200598589%3A100011200598589%3A1529365035&section=overview",
        WE: "https://www.facebook.com/marxdrama/about?lst=100011200598589%3A100011200598589%3A1529365035&section=education",
        PL: "https://www.facebook.com/marxdrama/about?lst=100011200598589%3A100011200598589%3A1529365035&section=living",
        CBI: "https://www.facebook.com/marxdrama/about?lst=100011200598589%3A100011200598589%3A1529365035&section=living",
        FR: "https://www.facebook.com/marxdrama/about?lst=100011200598589%3A100011200598589%3A1529365035&section=relationship",
        DY: "https://www.facebook.com/marxdrama/about?lst=100011200598589%3A100011200598589%3A1529365035&section=bio",
        LE: "https://www.facebook.com/marxdrama/about?lst=100011200598589%3A100011200598589%3A1529365035&section=year-overviews"
    };
    FBAbout.password = "porter123";
    return FBAbout;
}()); // class declaration ends
var button = function () {
    var Facebook;
    Facebook = new FBAbout("https://www.facebook.com/marxdrama/about?lst=100011200598589%3A100011200598589%3A1529365035&section=overview", { recent_work: "lorem ipsem",
        recent_Uni: "lorem ipsem",
        recent_Place: "lorem ipsem",
        phone_number: 12345,
        websites: ["https://hyu.com"],
        date_of_birth: "3.8.1997",
        relationship: ["father", "sister"],
        name: ["lorem", 'lorenina'],
        profile: ["https://www.facebook.com/profile.php?id=100011687492076", "https://www.facebook.com/profile.php?id=100011687492076"]
    }, {}, {}, {}, {}, {}, {});
    Facebook.fbOverview("porter123");
    Facebook = new FBAbout("https://www.facebook.com/marxdrama/about?lst=100011200598589%3A100011200598589%3A1529365035&section=education", {}, { WORK: ["heggen brothers", "toad company"], PROFESSIONAL_SKILLS: ["web developer", "cooking"],
        HIGH_SCHOOL: ["ABC school", "GFT institution"] }, {}, {}, {}, {}, {});
    Facebook.fbWorkEducation("porter123");
};
