const express =  require('express');
const gameRouter = express.Router()

gameRouter.use((req, res, next) => {
    console.log(' ### 게시판 서버 ###');
    next();
});

module.exports = gameRouter;