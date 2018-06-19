// defining a class
 class YouTubePage {

    protected appnavbarIconCountry                   :any
    protected appnavbarIconMessagesIndex             :any
    protected appnavbarIconMessagesAvailable         :any
    protected appnavbarIconAccount                   :any
    protected appnavbarIconAccountPass               :any
    protected appviewVideoTitle                      :any
    protected appviewVideoURL                        :any
    protected appviewVideoCopyVideoURL               :any
    protected appviewVideoURLAtCurrentTime           :any
    protected appviewVideoCopyURLAtCurrentTime       :any
    protected appviewVideoCopyEmbedCode              :any
    protected appviewVideoLoop                       :any
    protected appviewVideoTroubleshootPlaybackIssues :any
    protected appviewVideoDebugInfo                  :any
    protected appviewVideoCopyDebugInfo              :any
    protected appviewVideoStats                      :any
    protected appviewVideoArtist                     :any
    protected appviewVideoLength                     :any
    protected appviewVideoCurrentTime                :any
    protected appviewVideoScreenSize                 :any
    protected appviewVideoAutoPlay                   :any
    protected appviewVideoAnnotations                :any
    protected appviewVideoSpeed                      :any
    protected appviewVideoSpeedOptionValues          :any
    protected appviewVideoSubTitleAvailable          :any
    protected appviewVideoSubTitleSHowEnable         :any
    protected appviewVideoSubTitleLanguage           :any
    protected appviewVideoSubTitleLanguageAvailable  :any
    protected appviewVideoSubTitleStyleOptions       :any
    protected appviewVideoSubTitleStyleOptionsValues :any
    protected appviewVideoScreenResolutionValues     :any
    protected appviewVideoScreenResolution           :any
    protected appviewVideoDetailsViews               :any
    protected appviewVideoDetailsLikes               :any
    protected appviewVideoDetailsDislikes            :any
    protected appviewVideoDetailsSubsribers          :any
    protected appviewVideoDetailsPublcationDay       :any
    protected appviewVideoDetailsDetails             :any
    protected appupNextAutoplay                      :any
    protected appupNextVideoNumbers                  :any
    protected appupNextVideos                   :any
    protected appupNextVideoViews                    :any
    protected appupNextMixVideos                     :any
    protected appupNextMixVideosdetails              :any
    protected appcommentBoxCommentsEnable            :any
    protected appcommentBoxCommentsNumber            :any
    protected appcommentBoxSortingMethod             :any
    protected appcommentBoxCommentsUsernames         :any
    protected appcommentBoxCommentsContent           :any
    protected appcommentBoxCommentsPublicationTime   :any
    protected appcommentBoxCommentsIndividualLikes   :any
    protected appcommentBoxCommentsIndividualDislikes:any
    protected appcommentBoxCommentsReplyPresent      :any
    protected appcommentBoxCommentsReplyNumbers      :any
    protected appcommentBoxCommentsReplies           :any
     

    constructor
    (protected youtube:{
    // navbar {
        navbarIconCountry?: string,
        
        navbarIconMessagesAvailable?: any,

        navbarIconMessagesIndex?: any,
        
        navbarIconAccount?: string,

        navbarIconAccountPass?: string,
        // }
    
        // video showing area {
        viewVideoTitle?: string,
    
        // video options {
        viewVideoURL?: string,
        viewVideoCopyVideoURL?: boolean,
    
        viewVideoURLAtCurrentTime?: string,
        viewVideoCopyURLAtCurrentTime?: boolean,
    
        viewVideoCopyEmbedCode?: boolean,
    
        viewVideoLoop?: boolean,
    
        viewVideoTroubleshootPlaybackIssues?: boolean,
    
        viewVideoDebugInfo?: string,
        viewVideoCopyDebugInfo?: boolean,
    
        viewVideoStats?: boolean,
        // }
    
        // Video footerbar {
        viewVideoArtist?: string,
    
        viewVideoLength?: any,
    
        viewVideoCurrentTime?: any,
       
        viewVideoScreenSize?: any,
    
        // video setting {
    
        viewVideoAutoPlay?: boolean,
    
        viewVideoAnnotations?: boolean,
    
        // videospeed {
        viewVideoSpeed?: number,
    
        viewVideoSpeedOptionValues?: string[],
        // }
    
        // subtitle { 
        viewVideoSubTitleAvailable?: boolean,
    
        viewVideoSubTitleSHowEnable?: boolean,
    
        viewVideoSubTitleLanguage?: string,
    
        viewVideoSubTitleLanguageAvailable?: string[],
    
        viewVideoSubTitleStyleOptions?: string[],
    
        viewVideoSubTitleStyleOptionsValues?: string[],
        // } 
    
        // resolution of video
        viewVideoScreenResolutionValues?: any[],
    
        viewVideoScreenResolution?: any,
    
        //}}}
        
       // video details area {
        viewVideoDetailsViews?: any,
    
        viewVideoDetailsLikes?: any,
    
        viewVideoDetailsDislikes?: any,
    
        viewVideoDetailsSubsribers?: any,
    
        viewVideoDetailsPublcationDay?: any,
    
        viewVideoDetailsDetails?: string,
        // }}
    
        // next video options {
        upNextAutoplay?: boolean,
    
        upNextVideoNumbers?: number,
    
        upNextVideos?: string[],
    
        upNextVideoViews?: string[],
    
        upNextMixVideos?: string[],
        
        upNextMixVideosdetails?: string[],
        // }
    
        // comment box {
        commentBoxCommentsEnable?: boolean,
    
        commentBoxCommentsNumber?: number,
    
        commentBoxSortingMethod?: string,
    
        commentBoxCommentsUsernames?: string[],
    
        commentBoxCommentsContent?: string[],
    
        commentBoxCommentsPublicationTime?: string[],
        
        commentBoxCommentsIndividualLikes?: number[],
    
        commentBoxCommentsIndividualDislikes?: number[],
    
        commentBoxCommentsReplyPresent?: boolean[],
    
        commentBoxCommentsReplyNumbers?: number[],
    
        commentBoxCommentsReplies?: string[],
        // }
    }) 
{
        
    this.appnavbarIconCountry                   =youtube.navbarIconCountry                   ;                                                                                                                         
        
    this.appnavbarIconMessagesIndex                   =youtube.navbarIconMessagesIndex                  ;
    
    this.appnavbarIconMessagesAvailable                   =youtube.navbarIconMessagesAvailable                   ;
    
    this.appnavbarIconAccount                   =youtube.navbarIconAccount                   ;  
    
    this.appnavbarIconAccountPass                   =youtube.navbarIconAccountPass                   ;
    

    
    this.appviewVideoTitle                      =youtube.viewVideoTitle                      ;                                                                                                                      

    
    this.appviewVideoURL                        =youtube.viewVideoURL                        ;                                                                                                                    

    this.appviewVideoCopyVideoURL               =youtube.viewVideoCopyVideoURL               ;                                                                                                                             

    this.appviewVideoURLAtCurrentTime           =youtube.viewVideoURLAtCurrentTime           ;                                                                                                                                 

    this.appviewVideoCopyURLAtCurrentTime      =youtube.viewVideoCopyURLAtCurrentTime       ;                                                                                                                                     

    this.appviewVideoCopyEmbedCode              =youtube.viewVideoCopyEmbedCode              ;                                                                                                                              

    this.appviewVideoLoop                       =youtube.viewVideoLoop                       ;                                                                                                                     

    this.appviewVideoTroubleshootPlaybackIssues =youtube.viewVideoTroubleshootPlaybackIssues ;                                                                                                                                           

    this.appviewVideoDebugInfo                  =youtube.viewVideoDebugInfo                  ;                                                                                                                          

    this.appviewVideoCopyDebugInfo              =youtube.viewVideoCopyDebugInfo              ;                                                                                                                              

    this.appviewVideoStats                      =youtube.viewVideoStats                      ;                                                                                                                      
   

    this.appviewVideoArtist                     =youtube.viewVideoArtist                     ;                                                                                                                       

    this.appviewVideoLength                     =youtube.viewVideoLength                     ;                                                                                                                       

    this.appviewVideoCurrentTime                =youtube.viewVideoCurrentTime                ;                                                                                                                            
   
    this.appviewVideoScreenSize                 =youtube.viewVideoScreenSize                 ;                                                                                                                           

    

    this.appviewVideoAutoPlay                   =youtube.viewVideoAutoPlay                   ;                                                                                                                         

    this.appviewVideoAnnotations                =youtube.viewVideoAnnotations                ;                                                                                                                            

    
    this.appviewVideoSpeed                      =youtube.viewVideoSpeed                      ;                                                                                                                      

    this.appviewVideoSpeedOptionValues          =youtube.viewVideoSpeedOptionValues          ;                                                                                                                                  
    

    
    this.appviewVideoSubTitleAvailable          =youtube.viewVideoSubTitleAvailable          ;                                                                                                                                  

    this.appviewVideoSubTitleSHowEnable         =youtube.viewVideoSubTitleSHowEnable         ;                                                                                                                                   

    this.appviewVideoSubTitleLanguage           =youtube.viewVideoSubTitleLanguage           ;                                                                                                                                 

    this.appviewVideoSubTitleLanguageAvailable  =youtube.viewVideoSubTitleLanguageAvailable  ;                                                                                                                                          

    this.appviewVideoSubTitleStyleOptions       =youtube.viewVideoSubTitleStyleOptions       ;                                                                                                                                     

    this.appviewVideoSubTitleStyleOptionsValues =youtube.viewVideoSubTitleStyleOptionsValues ;                                                                                                                                           
    

    
    this.appviewVideoScreenResolutionValues     =youtube.viewVideoScreenResolutionValues     ;                                                                                                                                       

    this.appviewVideoScreenResolution           =youtube.viewVideoScreenResolution           ;                                                                                                                                 

    
    
   
    this.appviewVideoDetailsViews               =youtube.viewVideoDetailsViews               ;                                                                                                                             

    this.appviewVideoDetailsLikes               =youtube.viewVideoDetailsLikes               ;                                                                                                                             

    this.appviewVideoDetailsDislikes            =youtube.viewVideoDetailsDislikes            ;                                                                                                                                

    this.appviewVideoDetailsSubsribers          =youtube.viewVideoDetailsSubsribers          ;                                                                                                                                  

    this.appviewVideoDetailsPublcationDay       =youtube.viewVideoDetailsPublcationDay       ;                                                                                                                                     

    this.appviewVideoDetailsDetails             =youtube.viewVideoDetailsDetails             ;                                                                                                                               
    

    
    this.appupNextAutoplay                      =youtube.upNextAutoplay                      ;                                                                                                                      

    this.appupNextVideoNumbers                  =youtube.upNextVideoNumbers                  ;                                                                                                                          

    this.appupNextVideos                   =youtube.upNextVideos                   ;                                                                                                                         

    this.appupNextVideoViews                    =youtube.upNextVideoViews                    ;                                                                                                                        

    this.appupNextMixVideos                     =youtube.upNextMixVideos                     ;                                                                                                                       
    
    this.appupNextMixVideosdetails              =youtube.upNextMixVideosdetails              ;                                                                                                                              
    

    
    this.appcommentBoxCommentsEnable            =youtube.commentBoxCommentsEnable            ;                                                                                                                                

    this.appcommentBoxCommentsNumber            =youtube.commentBoxCommentsNumber            ;                                                                                                                                

    this.appcommentBoxSortingMethod             =youtube.commentBoxSortingMethod             ;                                                                                                                               

    this.appcommentBoxCommentsUsernames         =youtube.commentBoxCommentsUsernames         ;                                                                                                                                   

    this.appcommentBoxCommentsContent           =youtube.commentBoxCommentsContent           ;                                                                                                                                 

    this.appcommentBoxCommentsPublicationTime   =youtube.commentBoxCommentsPublicationTime   ;                                                                                                                                         
    
    this.appcommentBoxCommentsIndividualLikes   =youtube.commentBoxCommentsIndividualLikes   ;                                                                                                                                         

    this.appcommentBoxCommentsIndividualDislikes=youtube.commentBoxCommentsIndividualDislikes;                                                                                                                                            

    this.appcommentBoxCommentsReplyPresent      =youtube.commentBoxCommentsReplyPresent      ;                                                                                                                                      

    this.appcommentBoxCommentsReplyNumbers      =youtube.commentBoxCommentsReplyNumbers      ;                                                                                                                                      

    this.appcommentBoxCommentsReplies           =youtube.commentBoxCommentsReplies           ;                                                                                                                                 
    


}// end constructor

// country 
country():void{
    console.log(this.appnavbarIconCountry)
}

// acount check
static account = [{email:`sayan1@gmail.com`,password:`porter1`}
,{email:`sayan2@gmail.com`,password:`porter2`},{email:`sayan3@gmail.com`,password:`porter3`}]
navbarAccount():void {
   let array = YouTubePage.account.filter((object)=>{
       return object.email== this.appnavbarIconAccount &&
        object.password== this.appnavbarIconAccountPass;
   })
   console.log((array.length>0)?JSON.stringify(array):`can not be logged in`);
   
    }
    // message check
    static messages =[{sender:`android1`,content:`hello`},{sender:`android2`,content:`hello how are you`},{sender:`android3`,content:`send me over here`}]
navbarMessage():void {
    console.log((this.appnavbarIconMessagesAvailable== `false`)?`Message not available`:
    ((this.appnavbarIconMessagesAvailable== `true` && this.appnavbarIconMessagesIndex<YouTubePage.messages.length &&
        this.appnavbarIconMessagesIndex>=0)?
        YouTubePage.messages[this.appnavbarIconMessagesIndex]:
    ((this.appnavbarIconMessagesIndex== `all`)?
    JSON.stringify(YouTubePage.messages):`Not Accessable`)));
}
// videourl copy
static videoURL = `https://youtu.be/yCk9VAxEpD0`
copyURL():void{
    
console.log((this.appviewVideoCopyVideoURL  == true)?`${this.appviewVideoURL}:${YouTubePage.videoURL}`:`not assigned`);

}
// videourl copy in a certain time
static video_length = {hour:0,min:5,sec:14}
copyURLct(ct:number){

    let total = YouTubePage.video_length.hour*60+YouTubePage.video_length.min*60+YouTubePage.video_length.sec
    console.log(total);
    
    if(total >= ct)
    {console.log((this.appviewVideoCopyURLAtCurrentTime == true)?`${this.appviewVideoURLAtCurrentTime}: https://youtu.be/yCk9VAxEpD0?t=${ct}`:`not assigned`);
} else {
    console.log(`doesnt exist`);
    
}

}
get viewVideoTitle() {
  return this.appviewVideoTitle
}
set viewVideoTitle(newTitle:string){
    if(YouTubePage.videoURL== this.appviewVideoURL)
    {
         this.appviewVideoTitle = newTitle
         
    }else {
        console.log(`On same webpage`);
        
    }   
}
// video title
videotitle():void{
        console.log(`the current title is ${this.appviewVideoTitle}`)
}
static embedcode = `<iframe width="854" height="480" src="https://www.youtube.com/embed/yCk9VAxEpD0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
videoOtherDetail():void {

console.log((this.appviewVideoLoop == true)?`Loop Playback`:`will proceed to next video`)
console.log((this.appviewVideoCopyEmbedCode == true)?`embed code: ${YouTubePage.embedcode}`:`Not clicked`);
console.log((this.appviewVideoCopyDebugInfo == true)?`DebuggerInfo: ${this.appviewVideoDebugInfo}`:`False click`);
console.log((this.appviewVideoStats == true)?`Show`:`problem arising`);
console.log((this.appviewVideoTroubleshootPlaybackIssues == true)?
`troubleshoot proceeding`:`Problem is still there`);
}
static screenRes:any[] = [[144,240,360,480],[720,1080,1440,4320]]
// defining scrrensize and speed
screenReseandSpeed():void {
    let array = YouTubePage.screenRes.filter((obj)=>{
        for(let x of obj){
            return x == this.appviewVideoScreenResolution
        }
    }    
    )
    let yu = (array[0]==YouTubePage.screenRes[0])?`Normal`:`HD`
    console.log((array[0].length>0)?`THe video resolution is ${yu} ${this.appviewVideoScreenResolution}p`
    :`such resolution doesn't exist`) 
    console.log(this.appviewVideoSpeed);
    
}
// video details 
showDetails():void{
    console.log(this.appviewVideoDetailsViews);
    console.log(this.appviewVideoDetailsLikes);
    console.log(this.appviewVideoDetailsSubsribers);
    console.log(this.appviewVideoDetailsPublcationDay);
    console.log(this.appviewVideoDetailsDetails);
}
nextVideos():void{
    console.log(this.appupNextVideoNumbers);

    console.log(this.appupNextVideos)
    console.log(this.appupNextMixVideos);
    
    
}

commentBox():void {
if(this.appcommentBoxCommentsEnable== true){
    console.log(this.appcommentBoxCommentsNumber)
    console.log(this.appcommentBoxCommentsUsernames)
    console.log(this.appcommentBoxCommentsContent);
}
}

}// end class 
let button2 =()=>
{let eml = prompt(`input email`,`exmpl@qwrt.com`);
let pss = prompt(`input pass`,`password`)
let account: YouTubePage;
account = new YouTubePage({navbarIconAccount:`${eml}`,navbarIconAccountPass:`${pss}`})
account.navbarAccount()

let messgavl = prompt(`Is message available?`)
let mssgindx = prompt(`What do you want to access?`,`number/all`)
let message : YouTubePage;
message = new YouTubePage({navbarIconMessagesAvailable:`${messgavl}`,navbarIconMessagesIndex:`${mssgindx}`})
message.navbarMessage()

let youtubemethods: YouTubePage
// country
let country = prompt(`Couuntry name`,`example`)
youtubemethods = new YouTubePage({navbarIconCountry: `${country}`})
youtubemethods.country()

// copy video url
youtubemethods = new YouTubePage({viewVideoCopyVideoURL: true,viewVideoURL: `here is the URL`})
youtubemethods.copyURL()

// copy video url at time

youtubemethods = new YouTubePage({viewVideoCopyURLAtCurrentTime: true,viewVideoURLAtCurrentTime: `here is the URL`})
youtubemethods.copyURLct(Math.round(Math.random()*350))

// changing title as set has benn used ,condition is the url
youtubemethods = new YouTubePage({viewVideoURL: `https://youtu.be/yCk9VAxEpD0`})
youtubemethods.viewVideoTitle = `Kung Fu Panda Training Scene - HD`
youtubemethods.videotitle()

// without url
youtubemethods = new YouTubePage({})
youtubemethods.viewVideoTitle = `Kung Fu Panda Training Scene - HD`
youtubemethods.videotitle()

// other details
youtubemethods = new YouTubePage({viewVideoLoop: true,viewVideoTroubleshootPlaybackIssues: false,
    viewVideoCopyEmbedCode: true,viewVideoCopyDebugInfo: true,viewVideoDebugInfo: `{
        "ns": "yt",
        "el": "detailpage",
        "cpn": "ZWnTVkFMT96dtxTn",
        "docid": "yCk9VAxEpD0",
        "ver": 2,
        "referrer": "https://www.youtube.com/watch?v=yCk9VAxEpD0",
        "cmt": "5.176",
        "plid": "AAVu4KNlNgpBy-WM",
        "ei": "WA0nW729FM--1gKFjbCwAg",
        "fmt": "247",
        "fs": "0",
        "rt": "2459.257",
        "of": "HaYoKwu5IXCk5C__eJUzaA",
        "euri": "",
        "lact": 4,
        "cl": "200515831",
        "mos": 0,
        "state": "4",
        "vm": "CAEQARgE",
        "volume": 100,
        "c": "WEB",
        "cver": "2.20180614",
        "cplayer": "UNIPLAYER",
        "cbr": "Opera",
        "cbrver": "53.0.2907.99",
        "cos": "Windows",
        "cosver": "6.1",
        "hl": "en_US",
        "cr": "IN",
        "len": "314.861",
        "fexp": "23708904,23708906,23708910,23710476,23712544,23721698,23721898,23727195,23729689,23732214,23733751,23735347,23736402,23737531,23738491,23739764,23740493,23741011,23741719,23744176,23746304,9449243,9470250,9471235,9472490,9485000",
        "feature": "related",
        "afmt": "251",
        "vct": "5.176",
        "vd": "314.861",
        "vpl": "0.000-5.176,",
        "vbu": "0.000-116.779,",
        "vpa": "1",
        "vsk": "0",
        "ven": "0",
        "vpr": "1",
        "vrs": "4",
        "vns": "2",
        "vec": "null",
        "vvol": "1",
        "totalVideoFrames": 129,
        "droppedVideoFrames": 4,
        "lct": "5.176",
        "lsk": false,
        "lmf": false,
        "lbw": "2593430.794",
        "lhd": "0.115",
        "lst": "0.000",
        "laa": "itag=251,seg=11,range=1733009-1897860,time=110.0-120.0,off=0,len=164852,end=1",
        "lva": "itag=247,seg=21,range=10328345-11239797,time=111.5-116.8,off=0,len=911453,end=1",
        "lar": "itag=251,seg=12,range=1897861-2065458,time=120.0-130.0,off=0,len=167598,end=1",
        "lvr": "itag=247,seg=24,range=12626973-12893448,time=127.4-132.7,off=0,len=266476,end=1",
        "lvh": "r1---sn-hxbicxa5cc5oq-jj0l",
        "lab": "0.000-120.001,",
        "lvb": "0.000-116.779,",
        "ismb": 3900000,
        "relative_loudness": "-8.169",
        "optimal_format": "720p",
        "user_qual": "hd720",
        "debug_videoId": "yCk9VAxEpD0",
        "0sz": false,
        "op": "",
        "yof": false,
        "dis": "",
        "gpu": "ANGLE_(Intel(R)_HD_Graphics_3000_Direct3D9Ex_vs_3_0_ps_3_0)",
        "cgr": true,
        "debug_playbackQuality": "hd720",
        "debug_date": "Mon Jun 18 2018 07:50:38 GMT+0530 (India Standard Time)"
      }`,viewVideoStats: true})
      youtubemethods.videoOtherDetail()

      youtubemethods = new YouTubePage({viewVideoScreenResolution:720,viewVideoSpeed:.75})
      youtubemethods.screenReseandSpeed()}
      