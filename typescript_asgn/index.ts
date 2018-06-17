// defining a class
 class YouTubePage {

    protected appnavbarIconCountry                   :any
    protected appnavbarIconMessagesNumber            :any
    protected appnavbarIconMessagesAvailable            :any
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
    protected appupNextVideoTitles                   :any
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
        
        navbarIconMessagesAvailable?: boolean,

        navbarIconMessagesNumber?: number,
        
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
    
        viewVideoCopyEmbedCode?: string,
    
        viewVideoLoop?: boolean,
    
        viewVideoTroubleshootPlaybackIssues?: boolean,
    
        viewVideoDebugInfo?: string,
        viewVideoCopyDebugInfo?: boolean,
    
        viewVideoStats?: any,
        // }
    
        // Video footerbar {
        viewVideoArtist?: string,
    
        viewVideoLength?: any,
    
        viewVideoCurrentTime?: any,
       
        viewVideoScreenSize?: string,
    
        // video setting {
    
        viewVideoAutoPlay?: boolean,
    
        viewVideoAnnotations?: boolean,
    
        // videospeed {
        viewVideoSpeed?: string,
    
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
    
        upNextVideoTitles?: string[],
    
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
        
    this.appnavbarIconMessagesNumber                   =youtube.navbarIconMessagesNumber                  ;
    
    this.appnavbarIconMessagesAvailable                   =youtube.navbarIconMessagesAvailable                   ;
    
    this.appnavbarIconAccount                   =youtube.navbarIconAccount                   ;  
    
    this.appnavbarIconAccountPass                   =youtube.navbarIconAccountPass                   ;
    

    
    this.appviewVideoTitle                      =youtube.viewVideoTitle                      ;                                                                                                                      

    
    this.appviewVideoURL                        =youtube.viewVideoURL                        ;                                                                                                                    

    this.appviewVideoCopyVideoURL               =youtube.viewVideoCopyVideoURL               ;                                                                                                                             

    this.appviewVideoURLAtCurrentTime           =youtube.viewVideoURLAtCurrentTime           ;                                                                                                                                 

    this.appviewVideoCopyURLAtCurrentTime       =youtube.viewVideoCopyURLAtCurrentTime       ;                                                                                                                                     

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

    this.appupNextVideoTitles                   =youtube.upNextVideoTitles                   ;                                                                                                                         

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
static account = [{email:`sayan1@gmail.com`,password:`porter1`}
,{email:`sayan2@gmail.com`,password:`porter2`},{email:`sayan3@gmail.com`,password:`porter3`}]
navbarAccount():void {
   let array = YouTubePage.account.filter((object)=>{
       return object.email== this.appnavbarIconAccount &&
        object.password== this.appnavbarIconAccountPass;
   })
   console.log((array.length>0)?JSON.stringify(array):`can not be logged in`);
   
    }

}// end class 
let eml = prompt(`input email`,`exmpl@qwrt.com`);
let pss = prompt(`input pass`,`password`)
let account: YouTubePage;
account = new YouTubePage({navbarIconAccount:`${eml}`,navbarIconAccountPass:`${pss}`})
account.navbarAccount()


