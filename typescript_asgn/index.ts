// defining a class
abstract class YouTubePage {

    constructor
    (
    // navbar {
        protected navbarIconCountry?: string,
        
        protected navbarIconMessagesNumber?: number,
        
        protected navbarIconAccount?: string,
        // }
    
        // video showing area {
        protected viewVideoTitle?: string,
    
        // video options {
        protected viewVideoURL?: string,
        protected viewVideoCopyVideoURL?: boolean,
    
        protected viewVideoURLAtCurrentTime?: string,
        protected viewVideoCopyURLAtCurrentTime?: boolean,
    
        protected viewVideoCopyEmbedCode?: string,
    
        protected viewVideoLoop?: boolean,
    
        protected viewVideoTroubleshootPlaybackIssues?: boolean,
    
        protected viewVideoDebugInfo?: string,
        protected viewVideoCopyDebugInfo?: boolean,
    
        protected viewVideoStats?: any,
        // }
    
        // Video footerbar {
        protected viewVideoArtist?: string,
    
        protected viewVideoLength?: any,
    
        protected viewVideoCurrentTime?: any,
       
        protected viewVideoScreenSize?: string,
    
        // video setting {
    
        protected viewVideoAutoPlay?: boolean,
    
        protected viewVideoAnnotations?: boolean,
    
        // videospeed {
        protected viewVideoSpeed?: string,
    
        protected viewVideoSpeedOptionValues?: string[],
        // }
    
        // subtitle { 
        protected viewVideoSubTitleAvailable?: boolean,
    
        protected viewVideoSubTitleSHowEnable?: boolean,
    
        protected viewVideoSubTitleLanguage?: string,
    
        protected viewVideoSubTitleLanguageAvailable?: string[],
    
        protected viewVideoSubTitleStyleOptions?: string[],
    
        protected viewVideoSubTitleStyleOptionsValues?: string[],
        // } 
    
        // resolution of video
        protected viewVideoScreenResolutionValues?: any[],
    
        protected viewVideoScreenResolution?: any,
    
        //}}}
        
       // video details area {
        protected viewVideoDetailsViews?: any,
    
        protected viewVideoDetailsLikes?: any,
    
        protected viewVideoDetailsDislikes?: any,
    
        protected viewVideoDetailsSubsribers?: any,
    
        protected viewVideoDetailsPublcationDay?: any,
    
        protected viewVideoDetailsDetails?: string,
        // }}
    
        // next video options {
        protected upNextAutoplay?: boolean,
    
        protected upNextVideoNumbers?: number,
    
        protected upNextVideoTitles?: string[],
    
        protected upNextVideoViews?: string[],
    
        protected upNextMixVideos?: string[],
        
        protected upNextMixVideosdetails?: string[],
        // }
    
        // comment box {
        protected commentBoxCommentsEnable?: boolean,
    
        protected commentBoxCommentsNumber?: number,
    
        protected commentBoxSortingMethod?: string,
    
        protected commentBoxCommentsUsernames?: string[],
    
        protected commentBoxCommentsContent?: string[],
    
        protected commentBoxCommentsPublicationTime?: string[],
        
        protected commentBoxCommentsIndividualLikes?: number[],
    
        protected commentBoxCommentsIndividualDislikes?: number[],
    
        protected commentBoxCommentsReplyPresent?: boolean[],
    
        protected commentBoxCommentsReplyNumbers?: number[],
    
        protected commentBoxCommentsReplies?: string[],
        // }
    ) 
{
        
    this.navbarIconCountry                   =navbarIconCountry                   ;                                                                                                                         
        
    this.navbarIconMessagesNumber                  =navbarIconMessagesNumber                  ;                                                                                                                          
    
    this.navbarIconAccount                   =navbarIconAccount                   ;                                                                                                                         
    

    
    this.viewVideoTitle                      =viewVideoTitle                      ;                                                                                                                      

    
    this.viewVideoURL                        =viewVideoURL                        ;                                                                                                                    

    this.viewVideoCopyVideoURL               =viewVideoCopyVideoURL               ;                                                                                                                             

    this.viewVideoURLAtCurrentTime           =viewVideoURLAtCurrentTime           ;                                                                                                                                 

    this.viewVideoCopyURLAtCurrentTime       =viewVideoCopyURLAtCurrentTime       ;                                                                                                                                     

    this.viewVideoCopyEmbedCode              =viewVideoCopyEmbedCode              ;                                                                                                                              

    this.viewVideoLoop                       =viewVideoLoop                       ;                                                                                                                     

    this.viewVideoTroubleshootPlaybackIssues =viewVideoTroubleshootPlaybackIssues ;                                                                                                                                           

    this.viewVideoDebugInfo                  =viewVideoDebugInfo                  ;                                                                                                                          

    this.viewVideoCopyDebugInfo              =viewVideoCopyDebugInfo              ;                                                                                                                              

    this.viewVideoStats                      =viewVideoStats                      ;                                                                                                                      
   

    this.viewVideoArtist                     =viewVideoArtist                     ;                                                                                                                       

    this.viewVideoLength                     =viewVideoLength                     ;                                                                                                                       

    this.viewVideoCurrentTime                =viewVideoCurrentTime                ;                                                                                                                            
   
    this.viewVideoScreenSize                 =viewVideoScreenSize                 ;                                                                                                                           

    

    this.viewVideoAutoPlay                   =viewVideoAutoPlay                   ;                                                                                                                         

    this.viewVideoAnnotations                =viewVideoAnnotations                ;                                                                                                                            

    
    this.viewVideoSpeed                      =viewVideoSpeed                      ;                                                                                                                      

    this.viewVideoSpeedOptionValues          =viewVideoSpeedOptionValues          ;                                                                                                                                  
    

    
    this.viewVideoSubTitleAvailable          =viewVideoSubTitleAvailable          ;                                                                                                                                  

    this.viewVideoSubTitleSHowEnable         =viewVideoSubTitleSHowEnable         ;                                                                                                                                   

    this.viewVideoSubTitleLanguage           =viewVideoSubTitleLanguage           ;                                                                                                                                 

    this.viewVideoSubTitleLanguageAvailable  =viewVideoSubTitleLanguageAvailable  ;                                                                                                                                          

    this.viewVideoSubTitleStyleOptions       =viewVideoSubTitleStyleOptions       ;                                                                                                                                     

    this.viewVideoSubTitleStyleOptionsValues =viewVideoSubTitleStyleOptionsValues ;                                                                                                                                           
    

    
    this.viewVideoScreenResolutionValues     =viewVideoScreenResolutionValues     ;                                                                                                                                       

    this.viewVideoScreenResolution           =viewVideoScreenResolution           ;                                                                                                                                 

    
    
   
    this.viewVideoDetailsViews               =viewVideoDetailsViews               ;                                                                                                                             

    this.viewVideoDetailsLikes               =viewVideoDetailsLikes               ;                                                                                                                             

    this.viewVideoDetailsDislikes            =viewVideoDetailsDislikes            ;                                                                                                                                

    this.viewVideoDetailsSubsribers          =viewVideoDetailsSubsribers          ;                                                                                                                                  

    this.viewVideoDetailsPublcationDay       =viewVideoDetailsPublcationDay       ;                                                                                                                                     

    this.viewVideoDetailsDetails             =viewVideoDetailsDetails             ;                                                                                                                               
    

    
    this.upNextAutoplay                      =upNextAutoplay                      ;                                                                                                                      

    this.upNextVideoNumbers                  =upNextVideoNumbers                  ;                                                                                                                          

    this.upNextVideoTitles                   =upNextVideoTitles                   ;                                                                                                                         

    this.upNextVideoViews                    =upNextVideoViews                    ;                                                                                                                        

    this.upNextMixVideos                     =upNextMixVideos                     ;                                                                                                                       
    
    this.upNextMixVideosdetails              =upNextMixVideosdetails              ;                                                                                                                              
    

    
    this.commentBoxCommentsEnable            =commentBoxCommentsEnable            ;                                                                                                                                

    this.commentBoxCommentsNumber            =commentBoxCommentsNumber            ;                                                                                                                                

    this.commentBoxSortingMethod             =commentBoxSortingMethod             ;                                                                                                                               

    this.commentBoxCommentsUsernames         =commentBoxCommentsUsernames         ;                                                                                                                                   

    this.commentBoxCommentsContent           =commentBoxCommentsContent           ;                                                                                                                                 

    this.commentBoxCommentsPublicationTime   =commentBoxCommentsPublicationTime   ;                                                                                                                                         
    
    this.commentBoxCommentsIndividualLikes   =commentBoxCommentsIndividualLikes   ;                                                                                                                                         

    this.commentBoxCommentsIndividualDislikes=commentBoxCommentsIndividualDislikes;                                                                                                                                            

    this.commentBoxCommentsReplyPresent      =commentBoxCommentsReplyPresent      ;                                                                                                                                      

    this.commentBoxCommentsReplyNumbers      =commentBoxCommentsReplyNumbers      ;                                                                                                                                      

    this.commentBoxCommentsReplies           =commentBoxCommentsReplies           ;                                                                                                                                 
    


}// end constructor
}// end class 

class Navbar extends YouTubePage {
  
    constructor( navbarIconCountry: string,
        navbarIconMessagesNumber: number,
        navbarIconAccount: string)
        {super(navbarIconCountry,navbarIconMessagesNumber,navbarIconAccount)}
        Country() : void{
          console.log(this.navbarIconCountry);
          
        }
        messageNumber(): void {
            console.log(this.navbarIconMessagesNumber);
        }
        userName(): void {
            console.log(this.navbarIconAccount);
            
        }
}
let navbar: Navbar;
navbar = new Navbar("India",5,"sdarkie9")
navbar.Country()
navbar.messageNumber()
navbar.userName()