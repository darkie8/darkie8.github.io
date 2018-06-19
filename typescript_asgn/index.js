// defining a class
var YouTubePage = /** @class */ (function () {
    function YouTubePage(youtube) {
        this.youtube = youtube;
        this.appnavbarIconCountry = youtube.navbarIconCountry;
        this.appnavbarIconMessagesIndex = youtube.navbarIconMessagesIndex;
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
        this.appupNextVideos = youtube.upNextVideos;
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
    // country 
    YouTubePage.prototype.country = function () {
        console.log(this.appnavbarIconCountry);
    };
    YouTubePage.prototype.navbarAccount = function () {
        var _this = this;
        var array = YouTubePage.account.filter(function (object) {
            return object.email == _this.appnavbarIconAccount &&
                object.password == _this.appnavbarIconAccountPass;
        });
        console.log((array.length > 0) ? JSON.stringify(array) : "can not be logged in");
    };
    YouTubePage.prototype.navbarMessage = function () {
        console.log((this.appnavbarIconMessagesAvailable == "false") ? "Message not available" :
            ((this.appnavbarIconMessagesAvailable == "true" && this.appnavbarIconMessagesIndex < YouTubePage.messages.length &&
                this.appnavbarIconMessagesIndex >= 0) ?
                YouTubePage.messages[this.appnavbarIconMessagesIndex] :
                ((this.appnavbarIconMessagesIndex == "all") ?
                    JSON.stringify(YouTubePage.messages) : "Not Accessable")));
    };
    YouTubePage.prototype.copyURL = function () {
        console.log((this.appviewVideoCopyVideoURL == true) ? this.appviewVideoURL + ":" + YouTubePage.videoURL : "not assigned");
    };
    YouTubePage.prototype.copyURLct = function (ct) {
        var total = YouTubePage.video_length.hour * 60 + YouTubePage.video_length.min * 60 + YouTubePage.video_length.sec;
        console.log(total);
        if (total >= ct) {
            console.log((this.appviewVideoCopyURLAtCurrentTime == true) ? this.appviewVideoURLAtCurrentTime + ": https://youtu.be/yCk9VAxEpD0?t=" + ct : "not assigned");
        }
        else {
            console.log("doesnt exist");
        }
    };
    Object.defineProperty(YouTubePage.prototype, "viewVideoTitle", {
        get: function () {
            return this.appviewVideoTitle;
        },
        set: function (newTitle) {
            if (YouTubePage.videoURL == this.appviewVideoURL) {
                this.appviewVideoTitle = newTitle;
            }
            else {
                console.log("On same webpage");
            }
        },
        enumerable: true,
        configurable: true
    });
    // video title
    YouTubePage.prototype.videotitle = function () {
        console.log("the current title is " + this.appviewVideoTitle);
    };
    YouTubePage.prototype.videoOtherDetail = function () {
        console.log((this.appviewVideoLoop == true) ? "Loop Playback" : "will proceed to next video");
        console.log((this.appviewVideoCopyEmbedCode == true) ? "embed code: " + YouTubePage.embedcode : "Not clicked");
        console.log((this.appviewVideoCopyDebugInfo == true) ? "DebuggerInfo: " + this.appviewVideoDebugInfo : "False click");
        console.log((this.appviewVideoStats == true) ? "Show" : "problem arising");
        console.log((this.appviewVideoTroubleshootPlaybackIssues == true) ?
            "troubleshoot proceeding" : "Problem is still there");
    };
    // defining scrrensize and speed
    YouTubePage.prototype.screenReseandSpeed = function () {
        var _this = this;
        var array = YouTubePage.screenRes.filter(function (obj) {
            for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
                var x = obj_1[_i];
                return x == _this.appviewVideoScreenResolution;
            }
        });
        var yu = (array[0] == YouTubePage.screenRes[0]) ? "Normal" : "HD";
        console.log((array[0].length > 0) ? "THe video resolution is " + yu + " " + this.appviewVideoScreenResolution + "p"
            : "such resolution doesn't exist");
        console.log(this.appviewVideoSpeed);
    };
    // video details 
    YouTubePage.prototype.showDetails = function () {
        console.log(this.appviewVideoDetailsViews);
        console.log(this.appviewVideoDetailsLikes);
        console.log(this.appviewVideoDetailsSubsribers);
        console.log(this.appviewVideoDetailsPublcationDay);
        console.log(this.appviewVideoDetailsDetails);
    };
    YouTubePage.prototype.nextVideos = function () {
        console.log(this.appupNextVideoNumbers);
        console.log(this.appupNextVideos);
        console.log(this.appupNextMixVideos);
    };
    YouTubePage.prototype.commentBox = function () {
        if (this.appcommentBoxCommentsEnable == true) {
            console.log(this.appcommentBoxCommentsNumber);
            console.log(this.appcommentBoxCommentsUsernames);
            console.log(this.appcommentBoxCommentsContent);
        }
    };
    // acount check
    YouTubePage.account = [{ email: "sayan1@gmail.com", password: "porter1" },
        { email: "sayan2@gmail.com", password: "porter2" }, { email: "sayan3@gmail.com", password: "porter3" }];
    // message check
    YouTubePage.messages = [{ sender: "android1", content: "hello" }, { sender: "android2", content: "hello how are you" }, { sender: "android3", content: "send me over here" }];
    // videourl copy
    YouTubePage.videoURL = "https://youtu.be/yCk9VAxEpD0";
    // videourl copy in a certain time
    YouTubePage.video_length = { hour: 0, min: 5, sec: 14 };
    YouTubePage.embedcode = "<iframe width=\"854\" height=\"480\" src=\"https://www.youtube.com/embed/yCk9VAxEpD0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>";
    YouTubePage.screenRes = [[144, 240, 360, 480], [720, 1080, 1440, 4320]];
    return YouTubePage;
}()); // end class 
var button2 = function () {
    var eml = prompt("input email", "exmpl@qwrt.com");
    var pss = prompt("input pass", "password");
    var account;
    account = new YouTubePage({ navbarIconAccount: "" + eml, navbarIconAccountPass: "" + pss });
    account.navbarAccount();
    var messgavl = prompt("Is message available?");
    var mssgindx = prompt("What do you want to access?", "number/all");
    var message;
    message = new YouTubePage({ navbarIconMessagesAvailable: "" + messgavl, navbarIconMessagesIndex: "" + mssgindx });
    message.navbarMessage();
    var youtubemethods;
    // country
    var country = prompt("Couuntry name", "example");
    youtubemethods = new YouTubePage({ navbarIconCountry: "" + country });
    youtubemethods.country();
    // copy video url
    youtubemethods = new YouTubePage({ viewVideoCopyVideoURL: true, viewVideoURL: "here is the URL" });
    youtubemethods.copyURL();
    // copy video url at time
    youtubemethods = new YouTubePage({ viewVideoCopyURLAtCurrentTime: true, viewVideoURLAtCurrentTime: "here is the URL" });
    youtubemethods.copyURLct(Math.round(Math.random() * 350));
    // changing title as set has benn used ,condition is the url
    youtubemethods = new YouTubePage({ viewVideoURL: "https://youtu.be/yCk9VAxEpD0" });
    youtubemethods.viewVideoTitle = "Kung Fu Panda Training Scene - HD";
    youtubemethods.videotitle();
    // without url
    youtubemethods = new YouTubePage({});
    youtubemethods.viewVideoTitle = "Kung Fu Panda Training Scene - HD";
    youtubemethods.videotitle();
    // other details
    youtubemethods = new YouTubePage({ viewVideoLoop: true, viewVideoTroubleshootPlaybackIssues: false,
        viewVideoCopyEmbedCode: true, viewVideoCopyDebugInfo: true, viewVideoDebugInfo: "{\n        \"ns\": \"yt\",\n        \"el\": \"detailpage\",\n        \"cpn\": \"ZWnTVkFMT96dtxTn\",\n        \"docid\": \"yCk9VAxEpD0\",\n        \"ver\": 2,\n        \"referrer\": \"https://www.youtube.com/watch?v=yCk9VAxEpD0\",\n        \"cmt\": \"5.176\",\n        \"plid\": \"AAVu4KNlNgpBy-WM\",\n        \"ei\": \"WA0nW729FM--1gKFjbCwAg\",\n        \"fmt\": \"247\",\n        \"fs\": \"0\",\n        \"rt\": \"2459.257\",\n        \"of\": \"HaYoKwu5IXCk5C__eJUzaA\",\n        \"euri\": \"\",\n        \"lact\": 4,\n        \"cl\": \"200515831\",\n        \"mos\": 0,\n        \"state\": \"4\",\n        \"vm\": \"CAEQARgE\",\n        \"volume\": 100,\n        \"c\": \"WEB\",\n        \"cver\": \"2.20180614\",\n        \"cplayer\": \"UNIPLAYER\",\n        \"cbr\": \"Opera\",\n        \"cbrver\": \"53.0.2907.99\",\n        \"cos\": \"Windows\",\n        \"cosver\": \"6.1\",\n        \"hl\": \"en_US\",\n        \"cr\": \"IN\",\n        \"len\": \"314.861\",\n        \"fexp\": \"23708904,23708906,23708910,23710476,23712544,23721698,23721898,23727195,23729689,23732214,23733751,23735347,23736402,23737531,23738491,23739764,23740493,23741011,23741719,23744176,23746304,9449243,9470250,9471235,9472490,9485000\",\n        \"feature\": \"related\",\n        \"afmt\": \"251\",\n        \"vct\": \"5.176\",\n        \"vd\": \"314.861\",\n        \"vpl\": \"0.000-5.176,\",\n        \"vbu\": \"0.000-116.779,\",\n        \"vpa\": \"1\",\n        \"vsk\": \"0\",\n        \"ven\": \"0\",\n        \"vpr\": \"1\",\n        \"vrs\": \"4\",\n        \"vns\": \"2\",\n        \"vec\": \"null\",\n        \"vvol\": \"1\",\n        \"totalVideoFrames\": 129,\n        \"droppedVideoFrames\": 4,\n        \"lct\": \"5.176\",\n        \"lsk\": false,\n        \"lmf\": false,\n        \"lbw\": \"2593430.794\",\n        \"lhd\": \"0.115\",\n        \"lst\": \"0.000\",\n        \"laa\": \"itag=251,seg=11,range=1733009-1897860,time=110.0-120.0,off=0,len=164852,end=1\",\n        \"lva\": \"itag=247,seg=21,range=10328345-11239797,time=111.5-116.8,off=0,len=911453,end=1\",\n        \"lar\": \"itag=251,seg=12,range=1897861-2065458,time=120.0-130.0,off=0,len=167598,end=1\",\n        \"lvr\": \"itag=247,seg=24,range=12626973-12893448,time=127.4-132.7,off=0,len=266476,end=1\",\n        \"lvh\": \"r1---sn-hxbicxa5cc5oq-jj0l\",\n        \"lab\": \"0.000-120.001,\",\n        \"lvb\": \"0.000-116.779,\",\n        \"ismb\": 3900000,\n        \"relative_loudness\": \"-8.169\",\n        \"optimal_format\": \"720p\",\n        \"user_qual\": \"hd720\",\n        \"debug_videoId\": \"yCk9VAxEpD0\",\n        \"0sz\": false,\n        \"op\": \"\",\n        \"yof\": false,\n        \"dis\": \"\",\n        \"gpu\": \"ANGLE_(Intel(R)_HD_Graphics_3000_Direct3D9Ex_vs_3_0_ps_3_0)\",\n        \"cgr\": true,\n        \"debug_playbackQuality\": \"hd720\",\n        \"debug_date\": \"Mon Jun 18 2018 07:50:38 GMT+0530 (India Standard Time)\"\n      }", viewVideoStats: true });
    youtubemethods.videoOtherDetail();
    youtubemethods = new YouTubePage({ viewVideoScreenResolution: 720, viewVideoSpeed: .75 });
    youtubemethods.screenReseandSpeed();
};
