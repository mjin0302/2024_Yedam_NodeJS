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
                <tr :key="i" v-for="(board, i) in boardList" @click="goToDetail(board.no)">
                    <td>{{ board.no }}</td>
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
import userDateUtils from '@/utils/useDates.js';
import { ajaxUrl } from '@/utils/commons.js';

export default {
    data() {
        return {
            boardList: []
        };
    },
    created() {
        this.getBoardList();
    },
    methods: {
        async getBoardList() {            
            let result = await axios.get(`${ajaxUrl}/boards`)
                                    .catch(err => console.log(err));
            this.boardList = result.data;
        },
        goToDetail(boardNo) {
            this.$router.push({ name : 'boardInfo', params : { bno : boardNo }});
        },
        dateFormat(value, format) {
            return userDateUtils.dateFormat(value, format);
        }
    }
}
</script>
<style scoped>
table * {
    text-align: center;
}
</style>
