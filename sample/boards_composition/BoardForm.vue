<template>
    <div class="container">
        <form @submit.prevent >

            <label for="no">No.</label>
            <input type="text" id="no" v-model="boardInfo.no" readonly>

            <label for="title">제목</label>
            <input type="text" id="title"  v-model="boardInfo.title">

            <label for="writer">작성자</label>
            <input type="text" id="writer" v-model="boardInfo.writer">    

            <label for="content">내용</label>
            <textarea id="content" style="height:200px" v-model="boardInfo.content"></textarea>

            <label for="regdate">작성일자</label>
            <input type="text" id="regdate" v-model="boardInfo.created_date" >

            <button type="button" class="btn btn-xs btn-info" @click="isUpdated? boardUpdate() : boardInsert()">저장</button>

        </form>
    </div>
</template>
<script setup>
import axios from 'axios';
import userDateUtils from '@/utils/useDates.js';
import { ajaxUrl } from '@/utils/commons.js';

import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
const boardInfo = ref({
                no : '',
                title : '',
                writer : '',
                content : '',
                created_date : ''
            });
let isUpdated = ref(false);
const route = useRoute();
const getToday = () => userDateUtils.dateFormat(null, 'yyyy-MM-dd');

const getBoardInfo = async(selectNo) =>{
    let result = await axios.get(`${ajaxUrl}/boards/${selectNo}`)
                       .catch(err => console.log(err));
    boardInfo.value = result.data;     
    boardInfo.value.created_date = userDateUtils.dateFormat(boardInfo.value.created_date, 'yyyy-MM-dd');
}

onBeforeMount(()=>{
    let selectNo = route.query.bno;
    if(selectNo > 0){
        //수정
        getBoardInfo(selectNo);     
        isUpdated.value = true;      
    }else{
         //등록
        boardInfo.value.created_date = getToday();  
    }
});

const boardInsert = async ()=> {
    let obj = {
        title : boardInfo.value.title,
        writer : boardInfo.value.writer,
        content : boardInfo.value.content,
        created_date : boardInfo.value.created_date
    }

    let result = await axios.post(`${ajaxUrl}/boards`, obj)
                            .catch(err => console.log(err));
    let addRes = result.data;
    if(addRes.board_no > 0){
        alert('등록되었습니다.');
        boardInfo.value.no = addRes.board_no;
    }
}

const boardUpdate = async() => {
    let obj = {
        title : boardInfo.value.title,
        writer : boardInfo.value.writer,
        content : boardInfo.value.content,
        created_date : boardInfo.value.created_date
    }

    let result = await axios.put(`${ajaxUrl}/boards/${boardInfo.value.no}`, obj)
                            .catch(err => console.log(err));
    let updateRes = result.data;
    if(updateRes.result){
        alert('수정되었습니다.');
    }
}
</script>
<style scoped>
/* Style inputs with type="text", select elements and textareas */
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
button[type=button] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
button[type=button]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>