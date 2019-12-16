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
    
             
        <div class="nav-item" id=alram>설정</div>
        <div class="nav-item" id=log>로그아웃</div>
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" class="info"></b-img>

       
        
     </div>
</div>
  
   
    </div>


    
  
    <div class="body">
        <div class="ongoing">
        <b>진행 중인 Task</b>
        </div>
    <b-button variant="link" class="new" ><router-link :to="{ path: 'task1' }"><a>새로운 Task추가</a></router-link></b-button>
    <div>
      <b-button variant="outline-secondary" class="task"id="first">
        1차 발표 PPT 제작
        <div class="task_detail">
            2019.11.30 18:00까지
        </div>
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" class="image"></b-img>


        </b-button>
    </div>
    
    <div>
    <b-button variant="outline-secondary" class="task" id="second">
        1차 발표 자료조사
        <div class="task_detail">
            Design Thinking Process 조사
        </div>
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" class="image"></b-img>

        </b-button>
    </div>
    
    <div>
    <b-button variant="outline-secondary" class="task" id="third"><router-link :to="{ path: 'Page4' }">
       <a>1차 발표 Script작성</a>
        <c><div class="task_detail">
            제작 완료된 Slide를 바탕으로 발표 Script 작성
        </div></c>
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" class="image"></b-img>
        </router-link>
        </b-button>
    </div>
    
    <div class="title">
        <b>시작 전인 Task</b>
    </div>
    
    <div>
      <b-button variant="outline-secondary" class="task" id="first">
        1차 발표 PPT 제작
        <div class="task_detail">
            2019.11.30 18:00까지
        </div>
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" class="image"></b-img>
        </b-button>
    </div>
    
    <div>
    <b-button variant="outline-secondary" class="task" id="second">
        1차 발표 자료조사
        <div class="task_detail">
            Design Thinking Process 조사
        </div>
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" class="image"></b-img>
        </b-button>
    </div>
    
    <div>
    <b-button variant="outline-secondary" class="task" id="third">
       1차 발표 Script작성
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
        1차 발표 PPT 제작
        <div class="task_detail">
            2019.11.30 18:00까지
        </div>
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" class="image"></b-img>
        </b-button>
    </div>
    
    <div>
    <b-button variant="outline-secondary" class="task" id="second">
        1차 발표 자료조사
        <div class="task_detail">
            Design Thinking Process 조사
        </div>
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" class="image"></b-img>
        </b-button>
    </div>
    
    <div>
    <b-button variant="outline-secondary" class="task" id="third">
       1차 발표 Script작성
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
    right:480px;
    bottom:5px;
}
.ongoing{
    font-size:17px;
    text-align:left;
    display:inline;
    position:relative;
    right:430px;
    bottom:5px;
    
}
.task{
    font-size:17px;
    width:500px;
    padding:20px;
    margin:10px;
    text-align:left;
    position:relative;
    outline:none;
    border:0.5px solid #D5D5D5;
    border-radius:10px;
    height:90px;
    color: #2c3e50;
    
}
.task_detail{
    font-size:12px;
    margin-top:5px;
    padding-left:3px;
    font-weight:lighter;
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
    height: 70px;
    display: flex;
    align-items: center;
    font-size: 20px;
    box-shadow:0px 1px 10px lightgray;
    
    }
  .nav-item{display: flex;
    align-items: center;
    font-size: 12px;
    color:#707070;
    padding:17px;}  

  .right{display: flex;
    position: relative;
    left:540px;
    
    }
  .middle{ 
    display: flex;
    position: relative;
    left:200px;
    }
  .left{
    display: flex;
    position: relative;
    left:80px;
    }

  .info{
      border-radius:100%;
      width:35px;
      height:35px;
      margin-top:10px;
 
    }
     #log{
      padding-left:5px;
    }
 

    
    .body{
        margin-top:50px;
    }
    .image{
        border-radius:100%;
        display:float;
        position:relative;
        top:-50px;
        width:50px;
        margin-top:0px;
    }
    a,c:visited{
      color: #2c3e50;
    }
    .new{
      color: #2c3e50;
      position:relative;
      transform:translate(350%);
      font-size:13px;
     
    }
   
</style>