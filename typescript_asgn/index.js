// defining a class
var YouTubePage = /** @class */ (function () {
    function YouTubePage(youtube) {
        this.youtube = youtube;
        this.appnavbarIconCountry = youtube.navbarIconCountry;
        this.appnavbarIconMessagesNumber = youtube.navbarIconMessagesNumber;
        this.appnavbarIconMessagesAvailable = youtube.navbarIconMessagesAvailable;
        this.appnavbarIconAccount = youtube.navbarIconAccount;
        this.appnavbarIconAccountPass = youtube.navbarIconAccountPass;
        this.appviewVideoTitle = youtube.viewVideoTitle;
        this.appviewVideoURL = youtube.viewVideoURL;
        this.appviewVideoCopyVideoURL = youtube.viewVideoCopyVideoURL;
        this.appviewVideoURLAtCurrentTime = youtube.viewVideoURLAtCurrentTime;
        this.appviewVideoCopyURLAtCurrentTime = youtube.viewVideoCopyURLAtCurrentTime;
        this.appviewVideoCopyEmbedCode = youtube.viewVideoCopyEmbedCode;
        this.appviewVideoLoop = youtube.viewVideoLoop;
        this.appviewVideoTroubleshootPlaybackIssues = youtube.viewVideoTroubleshootPlaybackIssues;
        this.appviewVideoDebugInfo = youtube.viewVideoDebugInfo;
        this.appviewVideoCopyDebugInfo = youtube.viewVideoCopyDebugInfo;
        this.appviewVideoStats = youtube.viewVideoStats;
        this.appviewVideoArtist = youtube.viewVideoArtist;
        this.appviewVideoLength = youtube.viewVideoLength;
        this.appviewVideoCurrentTime = youtube.viewVideoCurrentTime;
        this.appviewVideoScreenSize = youtube.viewVideoScreenSize;
        this.appviewVideoAutoPlay = youtube.viewVideoAutoPlay;
        this.appviewVideoAnnotations = youtube.viewVideoAnnotations;
        this.appviewVideoSpeed = youtube.viewVideoSpeed;
        this.appviewVideoSpeedOptionValues = youtube.viewVideoSpeedOptionValues;
        this.appviewVideoSubTitleAvailable = youtube.viewVideoSubTitleAvailable;
        this.appviewVideoSubTitleSHowEnable = youtube.viewVideoSubTitleSHowEnable;
        this.appviewVideoSubTitleLanguage = youtube.viewVideoSubTitleLanguage;
        this.appviewVideoSubTitleLanguageAvailable = youtube.viewVideoSubTitleLanguageAvailable;
        this.appviewVideoSubTitleStyleOptions = youtube.viewVideoSubTitleStyleOptions;
        this.appviewVideoSubTitleStyleOptionsValues = youtube.viewVideoSubTitleStyleOptionsValues;
        this.appviewVideoScreenResolutionValues = youtube.viewVideoScreenResolutionValues;
        this.appviewVideoScreenResolution = youtube.viewVideoScreenResolution;
        this.appviewVideoDetailsViews = youtube.viewVideoDetailsViews;
        this.appviewVideoDetailsLikes = youtube.viewVideoDetailsLikes;
        this.appviewVideoDetailsDislikes = youtube.viewVideoDetailsDislikes;
        this.appviewVideoDetailsSubsribers = youtube.viewVideoDetailsSubsribers;
        this.appviewVideoDetailsPublcationDay = youtube.viewVideoDetailsPublcationDay;
        this.appviewVideoDetailsDetails = youtube.viewVideoDetailsDetails;
        this.appupNextAutoplay = youtube.upNextAutoplay;
        this.appupNextVideoNumbers = youtube.upNextVideoNumbers;
        this.appupNextVideoTitles = youtube.upNextVideoTitles;
        this.appupNextVideoViews = youtube.upNextVideoViews;
        this.appupNextMixVideos = youtube.upNextMixVideos;
        this.appupNextMixVideosdetails = youtube.upNextMixVideosdetails;
        this.appcommentBoxCommentsEnable = youtube.commentBoxCommentsEnable;
        this.appcommentBoxCommentsNumber = youtube.commentBoxCommentsNumber;
        this.appcommentBoxSortingMethod = youtube.commentBoxSortingMethod;
        this.appcommentBoxCommentsUsernames = youtube.commentBoxCommentsUsernames;
        this.appcommentBoxCommentsContent = youtube.commentBoxCommentsContent;
        this.appcommentBoxCommentsPublicationTime = youtube.commentBoxCommentsPublicationTime;
        this.appcommentBoxCommentsIndividualLikes = youtube.commentBoxCommentsIndividualLikes;
        this.appcommentBoxCommentsIndividualDislikes = youtube.commentBoxCommentsIndividualDislikes;
        this.appcommentBoxCommentsReplyPresent = youtube.commentBoxCommentsReplyPresent;
        this.appcommentBoxCommentsReplyNumbers = youtube.commentBoxCommentsReplyNumbers;
        this.appcommentBoxCommentsReplies = youtube.commentBoxCommentsReplies;
    } // end constructor
    YouTubePage.prototype.navbarAccount = function () {
        var _this = this;
        var array = YouTubePage.account.filter(function (object) {
            return object.email == _this.appnavbarIconAccount &&
                object.password == _this.appnavbarIconAccountPass;
        });
        console.log((array.length > 0) ? JSON.stringify(array) : "can not be logged in");
    };
    YouTubePage.account = [{ email: "sayan1@gmail.com", password: "porter1" },
        { email: "sayan2@gmail.com", password: "porter2" }, { email: "sayan3@gmail.com", password: "porter3" }];
    return YouTubePage;
}()); // end class 
var eml = prompt("input email", "exmpl@qwrt.com");
var pss = prompt("input pass", "password");
var account;
account = new YouTubePage({ navbarIconAccount: "" + eml, navbarIconAccountPass: "" + pss });
account.navbarAccount();
