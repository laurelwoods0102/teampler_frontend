<template>
<div>
    <div>
    <div class="nav">       
       <div class="left">
          <div class="nav-item"><img src="../assets/teampler_logo.png" width="100px" height="20px">
          </div>
       </div>
      
        
        <div class="middle">
            
            <div>
              <b-button variant="link" class="nav-item" >홈</b-button>
            </div>
           <div>
             <b-button variant="link" class="nav-item">채팅</b-button>
           </div>
           <div>
             <b-button variant="link" class="nav-item"><router-link :to="{ path: 'Page3' }"><a>할일관리</a></router-link></b-button>
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


  <div class="graybox">
    <div id="subject" >
        <a1><b>디자인적사고</b></a1><br>
        <a2>김선철 교수님</a2>
    </div>
    
    
    <div class="title">
        <b>나의 Task</b>
    </div>
    
    <div>
      <b-button variant="outline-secondary" class="task" id="first">
        <b>1차 발표 PPT 제작</b>
        <div class="task_detail">
            2019.11.30 18:00까지
        </div>
        </b-button>
    </div>
    
    <div>
    <b-button variant="outline-secondary" class="task" id="second">
        <b>1차 발표 자료조사</b>
        <div class="task_detail">
            Design Thinking Process 조사
        </div>
        </b-button>
    </div>
    
    <div>
    <b-button variant="outline-secondary" class="task" id="third">
       <b>1차 발표 Script작성</b>
        <div class="task_detail">
            제작 완료된 Slide를 바탕으로 발표 Script 작성
        </div>
        </b-button>
    </div>
    <t1>진행중</t1>
    <t2>시작전</t2>
    <t3>완료됨</t3>
  </div>
</div>
</template>

<style>
.title{
    font-size:1.5rem;
    text-align:left;
    display:inline;
    position:relative;
    right:522px;
    bottom:60px;
    
}
.task{
    font-size:1.2rem;
    width:500px;
    padding:15px;
    margin:10px;
    text-align:left;
    position:relative;
    right:200px;
    top:200px;
    border-radius:5px;
    
}
.task_detail{
    font-size:1rem;
    margin-top:5px;
}
#first{
    display:relative;
    transform:translate(-25%,-220%);
}
#second{
    display:relative;
    transform:translate(90%,-342%);
}
#third{
    display:relative;
    transform:translate(-25%,-320%);
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
    a:visited{
      color:#707070;
    }
    .body{
        margin-top:50px;
    }
 
    a1{
        font-size:35px;
        text-align: left;
        position:relative;
        right:472px; bottom:150px;
    }
    a2{
        font-size:35px;
        text-align: left;
        position:relative;
        right:469px; bottom:150px;
    }
    t1{
        color:#007CB4;
        border:1px solid #007CB4;;
        font-size:1.1rem;
        position: relative;
        right:62px;
        bottom:285px;
        border-radius:5px;
    }
    t2{
        color:#ff4E4E;
        border:1px solid #ff4E4E;
        font-size:1.1rem;
        position: relative;
        left:450px;
        bottom:285px;
        border-radius:5px;
    }
    t3{
        color:#4d4d4d;
        border:1px solid #4d4d4d;
        font-size:1.1rem;
        position: relative;
        right:177px;
        bottom:158px;
        border-radius:5px;
    }
    .graybox{
      background:#FAFAFA;
      position:relative;
      top:250px;
    }

*{
    
}
</style>