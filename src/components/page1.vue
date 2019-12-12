1페이지

<template>
<div>
    <div>
    <div class="nav">       
       <div class="left">
          <div class="nav-item">teampler</div>
       </div>
      
        
        <div class="middle">
            
            <div>
              <b-button variant="link" class="nav-item" >홈</b-button>
            </div>
           <div>
             <b-button variant="link" class="nav-item">채팅</b-button>
           </div>
           <div>
             <b-button variant="link" class="nav-item">할일관리</b-button>
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
        <a1><b>김민재님,</b></a1><br>
        <a2>오늘 2건의 할 일이 있습니다.</a2>
    </div>
    
    <div id="todolist">
        <e1>GCP 사례조사 자료 수집</e1>
        <e2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>세계와 시민</b><br></e2>
        <e3>Design Thinking 프로세스 조사</e3>
        <e4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>디자인적 사고</b></e4>
    </div>    
    <div class="title">
        <b>참여중인 팀플</b>
    </div>
    
    <div>
      <b-button variant="outline-secondary" class="task" id="first"><router-link :to="{ path: 'Page2' }">
        <b>디자인적 사고</b>
        <div class="task_detail">
            김선철 교수님
        </div>
        </router-link>
        </b-button>
    </div>
    
    <div>
    <b-button variant="outline-secondary" class="task" id="second">
        <b>세계와 시민</b>
        <div class="task_detail">
            박숙경 교수님
        </div>
        </b-button>
    </div>
    
    <div>
    <b-button variant="outline-secondary" class="task" id="third">
       <b>웹/파이썬 프로그래밍</b>
        <div class="task_detail">
            닥터리 교수님
        </div>
        </b-button>
    </div>
    
</div>
</template>

<style>
.title{
    font-size:1.5rem;
    text-align:left;
    display:inline;
    position:relative;
    right:520px;
    top:200px;
    
}
.task{
    font-size:1.2rem;
    width:550px;
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
    transform:translate(-23%);
}
#second{
    display:relative;
    transform:translate(80%,-125%);
}
#third{
    display:relative;
    transform:translate(-23%,-120%);
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
        font-size:40px;
        text-align: left;
        position:relative;
        right:530px; top:100px;
    }
    a2{
        font-size:40px;
        text-align: left;
        position:relative;
        right:355px; top:100px;
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
    #todolist{
        font-size:1.2rem;
        border: 0.6px solid gray;
        width:1200px;
        padding:30px;
        border-radius:10px;
        text-align: left;
        position:relative;
        left:10%; top:150px;
        
    }
*{
    color:gray;
}
</style>