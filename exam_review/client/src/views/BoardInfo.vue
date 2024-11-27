<template>
    <div class="container">
        <div class="row">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" class="text-center table-primary">번호</th>
                        <td scope="col" class="text-center">{{ boardInfo.no }}</td>
                        <th scope="col" class="text-center table-primary">작성일</th>
                        <td scope="col" class="text-center">{{ boardInfo.created_date }}</td>
                        <th scope="col" class="text-center table-primary">이름</th>
                        <td scope="col" class="text-center">{{ boardInfo.writer }}</td>
                    </tr>

                    <tr>
                        <th colspan="2" class="text-center table-primary">제목</th>
                        <td colspan="4">{{  }}</td>
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
            <!-- 자식 컴포넌트는 부모가 다 그려지고 나서 로딩된다 왜냐? if디렉티브로 부모가 생성되는 시점과 자식이 생성되는 시점을 분리 시켰기 때문이다 -->
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
import CommentList from '../components/CommentList.vue'

export default {
    data() {
        return {
            boardInfo: {}
        };
    },
    created() {
        let searchNo = this.$route.params.bno;
        this.getBoardInfo(searchNo);
    },
    methods: {
        async getBoardInfo(searchNo) {
            let result = await axios.get(`/api/boards/${searchNo}`)
                                    .catch(err => console.log(err));
            this.boardInfo = result.data;
        },
        dateFormat(value, format) {
            let date = value == null ? new Date() : new Date(value);

            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2);
            let day = ('0' + date.getDate()).slice(-2);

            let result = format.replace('yyyy', year)
                .replace('MM', month)
                .replace('dd', day);
            return result;
        },
        goToUpdateForm(no) {
            this.$router.push({ name : 'boardForm', query : { bno : no } })
        }
    },
    components : {
        CommentList
    }
}
</script>
