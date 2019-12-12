2번입니다
<template>
<div>
    <div>
    <div class="nav">       
       <div class="left">
          <div class="nav-item">Teampler(Logo)</div>
       </div>
      
        
        <div class="middle">
            
            <div>
              <b-button variant="link" class="nav-item" >홈</b-button>
            </div>
           <div>
             <b-button variant="link" class="nav-item">채팅</b-button>
           </div>
           <div>
             <b-button variant="link" class="nav-item"><router-link :to="{ path: 'Page3' }">할일관리</router-link></b-button>
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
              <div class="square">
            
            <div> 
              <b-button variant="link" linkclass="square1" style="color:gray">알림</b-button>
              </div>
          
                </div>
             
        <div class="nav-item" id=alram>설정</div>
        <div class="nav-item" id=log>로그아웃</div>
            
       
        
     </div>
    </div>      
    </div>
    
    
  
   
    </div>


    
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
</template>

<style>
.title{
    font-size:1.5rem;
    text-align:left;
    display:inline;
    position:relative;
    right:540px;
    top:200px;
    
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
    
}
.task_detail{
    font-size:1rem;
    margin-top:5px;
}
#first{
    display:relative;
    transform:translate(-30%);
}
#second{
    display:relative;
    transform:translate(80%,-125%);
}
#third{
    display:relative;
    transform:translate(-30%,-120%);
}
.nav{
    height: 50px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    font-size: 15px
    }
  .nav-item{display: flex;
    align-items: center;
    font-size: 15px;
    color:gray;
    }  
  .right{display: flex;
    position: relative;
    left:610px;
    }
  .middle{ 
    display: flex;
    position: relative;
    left:160px;
    }
  .left{
    display: flex;
    position: relative;
    left:50px;
    }
  .square{ 
    border: 0.3px solid black;
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


    a1{
        font-size:2.0rem;
        text-align: left;
        position:relative;
        right:500px; top:100px;
    }
    a2{
        font-size:1.5rem;
        text-align: left;
        position:relative;
        right:520px; top:100px;
    }
    t1{
        color:dodgerblue;
        font-size:1.1rem;
        position: relative;
        right:100px;
        bottom:90px;
    }
    t2{
        color:tomato;
        font-size:1.1rem;
        position: relative;
        left:400px;
        bottom:90px;
    }
    t3{
        color:gray;
        font-size:1.1rem;
        position: relative;
        right:210px;
        top:30px;
    }
*{
    color:gray;
}
</style>