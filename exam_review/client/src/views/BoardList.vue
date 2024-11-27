<template>
    <div class="container">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일자</th>
                    <th>댓글 수</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="board.no" v-for="(board) in boardList" 
                                    @click="goToDetail(board.no)">
                    <td>{{ board.no  }}</td>
                    <td>{{ board.title }}</td>
                    <td>{{ board.writer }}</td>
                    <td>{{ dateFormat(board.created_date, 'yyyy-MM-dd') }}</td>
                    <td>{{ board.comment }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            boardList: []
        };
    },
    created() {
        // 서버와 통신(=> axios), 값 초기화
        this.getBoardList();
    },
    methods: {
        async getBoardList() {            
            let result = await axios.get('/api/boards')
                                    .catch(err => console.log(err));
            this.boardList = result.data; // data => 서버로 부터 받은 실제 데이터
        },
        goToDetail(boardNo) {
            // 선택한 게시글의 상세정보 페이지를 요청 => this.$router // router 폴더 밑에 검색
            this.$router.push({ name : 'boardInfo', params : { bno : boardNo } });
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
        }
    }
}
</script>
<style scoped>
table * {
    text-align: center;
}
</style>
