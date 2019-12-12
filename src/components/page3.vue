<template>
<div>
    <div>
    <div class="nav">       
       <div class="left">
          <div class="nav-item"><img src="../assets/teampler_logo.png" width="100px" height="20px"></div>

       </div>
      
        
        <div class="middle">
            
            <div>
              <b-button variant="link" class="nav-item">홈</b-button>
            </div>
           <div>
             <b-button variant="link" class="nav-item">채팅</b-button>
           </div>
           <div>
             <b-button variant="link" class="nav-item"><b>할일관리</b></b-button>
           </div>
           <div>
             <b-button variant="link" class="nav-item">캘린더</b-button>
           </div>
           <div>
             <b-button variant="link" class="nav-item">팀정보</b-button>
           </div>
            
            
            
        </div>
        
        
        <div class="right">
           
            <div class="nav-item">
              <!--<div class="square">
            
            <div> 
              <b-button variant="link" linkclass="square1" style="color:gray">알림</b-button>
              </div>
          
                </div>-->
             
        <div class="nav-item" id=alram>설정</div>
        <div class="nav-item" id=log>로그아웃</div>
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" id="info"></b-img> 
            
       
        
     </div>
    </div>      
    </div>
    
    
  
   
    </div>


    
  
    <div class="body">
        <div class="title">
        <b>진행 중인 Task</b>
        </div>
    
    <div>
      <b-button variant="outline-secondary" class="task"id="first">
        <b>1차 발표 PPT 제작</b>
        <div class="task_detail">
            2019.11.30 18:00까지
        </div>
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" class="image"></b-img>


        </b-button>
    </div>
    
    <div>
    <b-button variant="outline-secondary" class="task" id="second">
        <b>1차 발표 자료조사</b>
        <div class="task_detail">
            Design Thinking Process 조사
        </div>
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" class="image"></b-img>

        </b-button>
    </div>
    
    <div>
    <b-button variant="outline-secondary" class="task" id="third"><router-link :to="{ path: 'Page4' }">
       <b>1차 발표 Script작성</b>
        <div class="task_detail">
            제작 완료된 Slide를 바탕으로 발표 Script 작성
        </div>
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" class="image"></b-img>
        </router-link>
        </b-button>
    </div>
    
    <div class="title">
        <b>시작 전인 Task</b>
    </div>
    
    <div>
      <b-button variant="outline-secondary" class="task" id="first">
        <b>1차 발표 PPT 제작</b>
        <div class="task_detail">
            2019.11.30 18:00까지
        </div>
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" class="image"></b-img>
        </b-button>
    </div>
    
    <div>
    <b-button variant="outline-secondary" class="task" id="second">
        <b>1차 발표 자료조사</b>
        <div class="task_detail">
            Design Thinking Process 조사
        </div>
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" class="image"></b-img>
        </b-button>
    </div>
    
    <div>
    <b-button variant="outline-secondary" class="task" id="third">
       <b>1차 발표 Script작성</b>
        <div class="task_detail">
            제작 완료된 Slide를 바탕으로 발표 Script 작성
        </div>
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" class="image"></b-img>
        </b-button>
    </div>
    
    <div class="title">
        <b>완료된 Task</b>
    </div>
    
    <div>
      <b-button variant="outline-secondary" class="task" id="first">
        <b>1차 발표 PPT 제작</b>
        <div class="task_detail">
            2019.11.30 18:00까지
        </div>
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" class="image"></b-img>
        </b-button>
    </div>
    
    <div>
    <b-button variant="outline-secondary" class="task" id="second">
        <b>1차 발표 자료조사</b>
        <div class="task_detail">
            Design Thinking Process 조사
        </div>
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" class="image"></b-img>
        </b-button>
    </div>
    
    <div>
    <b-button variant="outline-secondary" class="task" id="third">
       <b>1차 발표 Script작성</b>
        <div class="task_detail">
            제작 완료된 Slide를 바탕으로 발표 Script 작성
        </div>
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" class="image"></b-img>
        </b-button>
    </div>
 

    </div>
</div>
</template>

<style>
.title{
    font-size:17px;
    text-align:left;
    display:inline;
    position:relative;
    right:370px;
    bottom:5px;
}
.task{
    font-size:17px;
    width:400px;
    padding:15px;
    margin:10px;
    text-align:left;
    position:relative;
    outline:none;
    border:1px solid gray;
    border-radius:10px;
    height:90px;
    
}
.task_detail{
    font-size:12px;
    margin-top:5px;
}
#first{
    display:relative;
    transform:translate(-55%);
}
#second{
    display:relative;
    transform:translate(55%,-125%);
}
#third{
    display:relative;
    transform:translate(-55%,-120%);
}
.nav{
    height: 50px;
    border:1px solid gray;
    display: flex;
    align-items: center;
    font-size: 15px
    }
  .nav-item{display: flex;
    align-items: center;
    font-size: 13px;
    color:gray;
    }  
  .right{display: flex;
    position: relative;
    left:670px;
    }
  .middle{ 
    display: flex;
    position: relative;
    left:400px;
    }
  .left{
    display: flex;
    position: relative;
    left:330px;
    }
  .square{ 
    border: 0.3px solid gray;
    display: flex;
    align-items: center;
    font-size: 10px;
    height: 30px;
    width: 60px;
    
    
    }
  .square1{
    margin-left: 3px;
    
    }     
  
  
  
    #alram{
      position: relative;
      padding:10px;
      }
    
    .body{
        margin-top:50px;
    }
    .image{
        border:1px solid;
        border-radius:100%;
        display:float;
        position:relative;
        top:-50px;
        width:60px;
        margin-top:0px;
    }
    #info{
      border-radius:100%;
      width:30px;
      margin-left:5px;
    }
*{
    color:gray;
}
</style>