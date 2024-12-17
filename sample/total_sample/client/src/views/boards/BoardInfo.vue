<template>
    <div class="container">
        <div class="row">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" class="text-center table-primary">번호</th>
                        <td scope="col" class="text-center">{{ boardInfo.no  }}</td>
                        <th scope="col" class="text-center table-primary">작성일</th>
                        <td scope="col" class="text-center">{{ dateFormat(boardInfo.created_date, 'yyyy-MM-dd') }}</td>
                        <th scope="col" class="text-center table-primary">이름</th>
                        <td scope="col" class="text-center">{{ boardInfo.writer }}</td>
                    </tr>

                    <tr>
                        <th colspan="2" class="text-center table-primary">제목</th>
                        <td colspan="4">{{ boardInfo.title }}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="6" class="text-left" valign="top" height="200">
                            <pre
                                style="white-space: pre-wrap;border:none;background-color: white;">{{ boardInfo.content }}</pre>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="6" class="text-center">
                            <button class="btn btn-xs btn-info" @click="goToUpdateForm(boardInfo.no)">수정</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row">
            <!-- 해당 게시글의 댓글이 있다면 -->
            <CommentList v-if="boardInfo.comment > 0" 
                         v-bind:bno="boardInfo.no" />
            <!-- 해당 게시글에 댓글이 존재하지 않는다면 -->
            <div v-else class="card text-center">
                댓글 없음
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import CommentList from '@/components/CommentList.vue'
import userDateUtils from '@/utils/useDates.js';
import { ajaxUrl } from '@/utils/commons.js';

export default {
    data() {
        return {
            boardInfo: {}
        };
    },
    created() {
        let selectNo = this.$route.params.bno;
        this.getBoardInfo(selectNo);
    },
    methods: {
        async getBoardInfo(selectNo) {
           let result = 
            await axios.get(`${ajaxUrl}/boards/${selectNo}`)
                       .catch(err => console.log(err));
           this.boardInfo = result.data;           
        },
        dateFormat(value, format) {
            return userDateUtils.dateFormat(value, format);
        },
        goToUpdateForm(no) {
            this.$router.push({ name : 'boardForm' , query : { bno : no }});
        }
    },
    components : {
        CommentList
    }
}
</script>
