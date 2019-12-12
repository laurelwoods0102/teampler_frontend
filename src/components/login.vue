<template>
 <div>
    
    <body>
      <b-form-input v-model="exName" type='text' placeholder='아이디'>Name</b-form-input>
      <b-form-input v-model="exStuId" type='password' placeholder='비밀번호'>StudentID</b-form-input>
      <b-button style="width:300px" id="button"><router-link :to="{ path: 'Page1' }">로그인</router-link></b-button>
      <br></br>
      <div id = "forget">아이디/ 비밀번호를 잊으셨나요? </div>
      <div id = "join">회원가입</div>
    </body>
  </div>
</template>

<script>
export default {
  name: 'MyVue',
  data () {
    return {
      userName: null,
      exName: null,
      exStuId: null
    }
  },
  created () {
    this.axios.get('http://127.0.0.1:8000/Example/1/')
    .then((response) => { 
      console.log(response.data)
      this.userName = response.data.name
    })
  },
  methods: {
    searchExample: function (inputName) {
      this.axios.get('http://127.0.0.1:8000/Example/search/', { params : { name: inputName }})
      .then((response) => {
        console.log(response.data)
        return response.data.student_id
      })
      .catch((error) => {
        console.log('Not found')
      })
    },
    inputExample: function (inputName, inputStuId) {
      this.axios.post('http://127.0.0.1:8000/Example/', { params: { name: inputName, student_id: inputStuId }})
      .then((response) => {
        console.log(response.status_code)
      })
    }
  }
}
</script>

<style>

.form-control{
  width:300px;
  height:30px;
  margin:auto;
}
#__BVID__5{
    margin_bottom:5px;;
}
#__BVID__6{
  margin-top:10px;
  margin-bottom:10px;
}
a{
  color:white;
}
a:hover{
  color:white;
}
#forget{
  margin-top:10px;
}
#join{
  margin-top:13px;
  color:#7030A0;
}
#button{
  background-color:#7030A0;
}
body{
  text-align:center !important;
  margin-top:10px;
}


</style>