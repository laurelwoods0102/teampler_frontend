<template>
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
              <b-button variant="link" linkclass="square1">알림</b-button>
              </div>
          
                </div>
             
        <div class="nav-item" id=alram>설정</div>
        <div class="nav-item" id=log>로그아웃</div>
            
       
        
     </div>
    </div>      
    </div>
    
    
    <div class="big-title">
        
         <div class="title1">1차 발표 Script 제작</div>
         <div class="title2">2019.11.30.18:00까지</div>
         
    <div class="title3">
       
       
        <div class="title3-1">요청사항: 기존 Slide 내용에 교수님께서 말씀해주신 부분 강조해서 새로 Script 작성 부탁드립니다.</div>
        <div class="title3-2">문장 숨고르는 부분마다 슬래쉬 넣어서 작업해주세요!</div>
        </div>
        
        
    </div>
    
    
    
    
    
    
    
    
    <div class="html">
    
    <dive class="word">
      <p>++>추가>An application server is a software framework that provides both facilities </p>
      <p>to create web applications and a server environment to run them.</p>

    </dive>

    
    
    
    
    </div>
    
    <div class="profile">
        
        
        <div class="pic">profile</div>
        
        
        
    </div>
    
    <div class="name">김민재</div>
        <div>
        <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
        </div>

        <div>
          <b-button variant="outline-dark" id="submit">제출</b-button>
        </div>

        <div>
           <b-button variant="link" id="rollback">뒤로가기</b-button>
       </div>

         <div>
          <b-form-textarea
             id="textarea"
             v-model="text"
             placeholder="댓글"
             rows="3"
             max-rows="6">
          </b-form-textarea>

           <pre class="mt-3 mb-0">{{ text }}</pre>
        </div>
         
       <b-button variant="outline-dark" id=jack>작성</b-button>
   
   <div class="line"></div>

   <div class="comment"><p>최대한 빨리 추가해주세요, 감사합니다.</p></div>


    <div class="jae">
    
    <div class="chool">제출이 완료되었습니다!</div>
    <div class="dad" b-button variant="light">닫기</b-button></div>
    </div>
   
    <div class="wang">

    <div class="ryog">완료</div>



    </div>





    </div>

  </template>

<style>
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
    }  
  .right{display: flex;
    position: relative;
    left:610px;
    }
  .middle{ 
    display: flex;
    position: relative;
    left:160px;
    color:black;
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
  .big-title{
    text-align:left;
    position: relative;
    left:52px;
    top:25px; 
    }
  .title1{
    font-size: 27px;
    font-weight: bold;
    }
  .title2{
    font-size:20px; 
    }
  .title3{
    position: relative;
    top:20px;
    font-size: 12px;
    }
  .html{
    height: 160px;
    border: 1px solid black;
      
    display: flex;
    align-items: center;
    margin-left: 52px;
    margin-right: 52px;
    font-size: 15px;

    position: relative;
    top:70px;
    }
  
  
  .word{position: relative;
          left:55px;
      font-size: 25px;}
  
  
  .profile{display: flex;}
  
  .pic{font-size: 10px;
          height: 40px;
        border: 1px solid black;
      margin-left: 60px;
    margin-right: 950px;
        border-radius: 50px;
    padding: 5px;
        padding-top:11px;
        padding-bottom: 1px;
    position: relative;
          top:500px;}
  
  
  .name{font-size:17px; 
      display: flex;
      position: relative;
          left:110px;
            top:470px;}

    .mt-3{ position: relative;
          left:53px;
          top:22px;}
    #submit{
      position: relative;
      left: 550px;
    }

    #rollback{position: relative;
      right:548px;}

    #textarea{
      position: relative;
      top:50px;
      width:1160px;
      margin-left: 50px; 
      }

    #jack{
      position: relative;
      top:50px;
      left:550px;}


    #alram{
      position: relative;
      padding:10px;
      }
    
    .line{
      border:0.5px solid black;
      width:1160px;
      margin-left:50px;
      position:relative;
      bottom:120px;
    }
    
    .comment{   
      border:0.5px solid black;
      width:1068px;
      height: 50px;
      margin-left:50px;
      position:relative;
      top:230px;
      left:80px;   
      border-radius: 10px;
      text-align: left;
    }
    .comment > p {
      margin-top: 10px;
      margin-left: 10px;
    }

 .jae{height: 150px;
            width: 450px;
            border: 1px solid black;
            display: flex;
            align-items: center;
            background-color: white;
            position: relative;
            left:400px;
            bottom:600px;}
        
        .chool{position: relative;
            left:120px;
        bottom:20px;
        font-size:20px;
        font-weight: bolder;}
        
        .dad{position: relative;
            top:30px;
        right:10px;}
        
        .wang{height: 20px;
            width: 50px;
            border: 1px solid black;
            display: flex;
            position: relative;
            left:1170px;
            bottom:800px;
            border-radius: 3px;
            margin-top:10px;}

        .ryog{position: relative;
            margin-left: 10px;
            font-size: 12px;
            padding: 1px;
            



        }

</style>