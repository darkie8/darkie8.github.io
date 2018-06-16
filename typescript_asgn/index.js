var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// defining a class
var YouTubePage = /** @class */ (function () {
    function YouTubePage(
    // navbar {
    navbarIconCountry, navbarIconMessagesNumber, navbarIconAccount, 
    // }
    // video showing area {
    viewVideoTitle, 
    // video options {
    viewVideoURL, viewVideoCopyVideoURL, viewVideoURLAtCurrentTime, viewVideoCopyURLAtCurrentTime, viewVideoCopyEmbedCode, viewVideoLoop, viewVideoTroubleshootPlaybackIssues, viewVideoDebugInfo, viewVideoCopyDebugInfo, viewVideoStats, 
    // }
    // Video footerbar {
    viewVideoArtist, viewVideoLength, viewVideoCurrentTime, viewVideoScreenSize, 
    // video setting {
    viewVideoAutoPlay, viewVideoAnnotations, 
    // videospeed {
    viewVideoSpeed, viewVideoSpeedOptionValues, 
    // }
    // subtitle { 
    viewVideoSubTitleAvailable, viewVideoSubTitleSHowEnable, viewVideoSubTitleLanguage, viewVideoSubTitleLanguageAvailable, viewVideoSubTitleStyleOptions, viewVideoSubTitleStyleOptionsValues, 
    // } 
    // resolution of video
    viewVideoScreenResolutionValues, viewVideoScreenResolution, 
    //}}}
    // video details area {
    viewVideoDetailsViews, viewVideoDetailsLikes, viewVideoDetailsDislikes, viewVideoDetailsSubsribers, viewVideoDetailsPublcationDay, viewVideoDetailsDetails, 
    // }}
    // next video options {
    upNextAutoplay, upNextVideoNumbers, upNextVideoTitles, upNextVideoViews, upNextMixVideos, upNextMixVideosdetails, 
    // }
    // comment box {
    commentBoxCommentsEnable, commentBoxCommentsNumber, commentBoxSortingMethod, commentBoxCommentsUsernames, commentBoxCommentsContent, commentBoxCommentsPublicationTime, commentBoxCommentsIndividualLikes, commentBoxCommentsIndividualDislikes, commentBoxCommentsReplyPresent, commentBoxCommentsReplyNumbers, commentBoxCommentsReplies) {
        this.navbarIconCountry = navbarIconCountry;
        this.navbarIconMessagesNumber = navbarIconMessagesNumber;
        this.navbarIconAccount = navbarIconAccount;
        this.viewVideoTitle = viewVideoTitle;
        this.viewVideoURL = viewVideoURL;
        this.viewVideoCopyVideoURL = viewVideoCopyVideoURL;
        this.viewVideoURLAtCurrentTime = viewVideoURLAtCurrentTime;
        this.viewVideoCopyURLAtCurrentTime = viewVideoCopyURLAtCurrentTime;
        this.viewVideoCopyEmbedCode = viewVideoCopyEmbedCode;
        this.viewVideoLoop = viewVideoLoop;
        this.viewVideoTroubleshootPlaybackIssues = viewVideoTroubleshootPlaybackIssues;
        this.viewVideoDebugInfo = viewVideoDebugInfo;
        this.viewVideoCopyDebugInfo = viewVideoCopyDebugInfo;
        this.viewVideoStats = viewVideoStats;
        this.viewVideoArtist = viewVideoArtist;
        this.viewVideoLength = viewVideoLength;
        this.viewVideoCurrentTime = viewVideoCurrentTime;
        this.viewVideoScreenSize = viewVideoScreenSize;
        this.viewVideoAutoPlay = viewVideoAutoPlay;
        this.viewVideoAnnotations = viewVideoAnnotations;
        this.viewVideoSpeed = viewVideoSpeed;
        this.viewVideoSpeedOptionValues = viewVideoSpeedOptionValues;
        this.viewVideoSubTitleAvailable = viewVideoSubTitleAvailable;
        this.viewVideoSubTitleSHowEnable = viewVideoSubTitleSHowEnable;
        this.viewVideoSubTitleLanguage = viewVideoSubTitleLanguage;
        this.viewVideoSubTitleLanguageAvailable = viewVideoSubTitleLanguageAvailable;
        this.viewVideoSubTitleStyleOptions = viewVideoSubTitleStyleOptions;
        this.viewVideoSubTitleStyleOptionsValues = viewVideoSubTitleStyleOptionsValues;
        this.viewVideoScreenResolutionValues = viewVideoScreenResolutionValues;
        this.viewVideoScreenResolution = viewVideoScreenResolution;
        this.viewVideoDetailsViews = viewVideoDetailsViews;
        this.viewVideoDetailsLikes = viewVideoDetailsLikes;
        this.viewVideoDetailsDislikes = viewVideoDetailsDislikes;
        this.viewVideoDetailsSubsribers = viewVideoDetailsSubsribers;
        this.viewVideoDetailsPublcationDay = viewVideoDetailsPublcationDay;
        this.viewVideoDetailsDetails = viewVideoDetailsDetails;
        this.upNextAutoplay = upNextAutoplay;
        this.upNextVideoNumbers = upNextVideoNumbers;
        this.upNextVideoTitles = upNextVideoTitles;
        this.upNextVideoViews = upNextVideoViews;
        this.upNextMixVideos = upNextMixVideos;
        this.upNextMixVideosdetails = upNextMixVideosdetails;
        this.commentBoxCommentsEnable = commentBoxCommentsEnable;
        this.commentBoxCommentsNumber = commentBoxCommentsNumber;
        this.commentBoxSortingMethod = commentBoxSortingMethod;
        this.commentBoxCommentsUsernames = commentBoxCommentsUsernames;
        this.commentBoxCommentsContent = commentBoxCommentsContent;
        this.commentBoxCommentsPublicationTime = commentBoxCommentsPublicationTime;
        this.commentBoxCommentsIndividualLikes = commentBoxCommentsIndividualLikes;
        this.commentBoxCommentsIndividualDislikes = commentBoxCommentsIndividualDislikes;
        this.commentBoxCommentsReplyPresent = commentBoxCommentsReplyPresent;
        this.commentBoxCommentsReplyNumbers = commentBoxCommentsReplyNumbers;
        this.commentBoxCommentsReplies = commentBoxCommentsReplies;
        this.navbarIconCountry = navbarIconCountry;
        this.navbarIconMessagesNumber = navbarIconMessagesNumber;
        this.navbarIconAccount = navbarIconAccount;
        this.viewVideoTitle = viewVideoTitle;
        this.viewVideoURL = viewVideoURL;
        this.viewVideoCopyVideoURL = viewVideoCopyVideoURL;
        this.viewVideoURLAtCurrentTime = viewVideoURLAtCurrentTime;
        this.viewVideoCopyURLAtCurrentTime = viewVideoCopyURLAtCurrentTime;
        this.viewVideoCopyEmbedCode = viewVideoCopyEmbedCode;
        this.viewVideoLoop = viewVideoLoop;
        this.viewVideoTroubleshootPlaybackIssues = viewVideoTroubleshootPlaybackIssues;
        this.viewVideoDebugInfo = viewVideoDebugInfo;
        this.viewVideoCopyDebugInfo = viewVideoCopyDebugInfo;
        this.viewVideoStats = viewVideoStats;
        this.viewVideoArtist = viewVideoArtist;
        this.viewVideoLength = viewVideoLength;
        this.viewVideoCurrentTime = viewVideoCurrentTime;
        this.viewVideoScreenSize = viewVideoScreenSize;
        this.viewVideoAutoPlay = viewVideoAutoPlay;
        this.viewVideoAnnotations = viewVideoAnnotations;
        this.viewVideoSpeed = viewVideoSpeed;
        this.viewVideoSpeedOptionValues = viewVideoSpeedOptionValues;
        this.viewVideoSubTitleAvailable = viewVideoSubTitleAvailable;
        this.viewVideoSubTitleSHowEnable = viewVideoSubTitleSHowEnable;
        this.viewVideoSubTitleLanguage = viewVideoSubTitleLanguage;
        this.viewVideoSubTitleLanguageAvailable = viewVideoSubTitleLanguageAvailable;
        this.viewVideoSubTitleStyleOptions = viewVideoSubTitleStyleOptions;
        this.viewVideoSubTitleStyleOptionsValues = viewVideoSubTitleStyleOptionsValues;
        this.viewVideoScreenResolutionValues = viewVideoScreenResolutionValues;
        this.viewVideoScreenResolution = viewVideoScreenResolution;
        this.viewVideoDetailsViews = viewVideoDetailsViews;
        this.viewVideoDetailsLikes = viewVideoDetailsLikes;
        this.viewVideoDetailsDislikes = viewVideoDetailsDislikes;
        this.viewVideoDetailsSubsribers = viewVideoDetailsSubsribers;
        this.viewVideoDetailsPublcationDay = viewVideoDetailsPublcationDay;
        this.viewVideoDetailsDetails = viewVideoDetailsDetails;
        this.upNextAutoplay = upNextAutoplay;
        this.upNextVideoNumbers = upNextVideoNumbers;
        this.upNextVideoTitles = upNextVideoTitles;
        this.upNextVideoViews = upNextVideoViews;
        this.upNextMixVideos = upNextMixVideos;
        this.upNextMixVideosdetails = upNextMixVideosdetails;
        this.commentBoxCommentsEnable = commentBoxCommentsEnable;
        this.commentBoxCommentsNumber = commentBoxCommentsNumber;
        this.commentBoxSortingMethod = commentBoxSortingMethod;
        this.commentBoxCommentsUsernames = commentBoxCommentsUsernames;
        this.commentBoxCommentsContent = commentBoxCommentsContent;
        this.commentBoxCommentsPublicationTime = commentBoxCommentsPublicationTime;
        this.commentBoxCommentsIndividualLikes = commentBoxCommentsIndividualLikes;
        this.commentBoxCommentsIndividualDislikes = commentBoxCommentsIndividualDislikes;
        this.commentBoxCommentsReplyPresent = commentBoxCommentsReplyPresent;
        this.commentBoxCommentsReplyNumbers = commentBoxCommentsReplyNumbers;
        this.commentBoxCommentsReplies = commentBoxCommentsReplies;
    } // end constructor
    return YouTubePage;
}()); // end class 
var Navbar = /** @class */ (function (_super) {
    __extends(Navbar, _super);
    function Navbar(navbarIconCountry, navbarIconMessagesNumber, navbarIconAccount) {
        return _super.call(this, navbarIconCountry, navbarIconMessagesNumber, navbarIconAccount) || this;
    }
    Navbar.prototype.Country = function () {
        console.log(this.navbarIconCountry);
    };
    Navbar.prototype.messageNumber = function () {
        console.log(this.navbarIconMessagesNumber);
    };
    Navbar.prototype.userName = function () {
        console.log(this.navbarIconAccount);
    };
    return Navbar;
}(YouTubePage));
var navbar;
navbar = new Navbar("India", 5, "sdarkie9");
navbar.Country();
navbar.messageNumber();
navbar.userName();
