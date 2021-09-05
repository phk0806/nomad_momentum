const quotes = [
    {
        quote : "삶이 있는 한 희망은 있다.",
        author : "키케로"    
    },
    {
        quote : "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
        author : "찰리 채플린"    
    },
    {
        quote : "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
        author : "이드리스 샤흐"    
    },
    {
        quote : "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
        author : "L.론허바드"    
    },
    {
        quote : "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다",
        author : "제임스 오펜하임"    
    },
    {
        quote : "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다",
        author : "랄프 왈도 에머슨"    
    },
    {
        quote : "피할수 없으면 즐겨라",
        author : "로버트 엘리엇"    
    },
    {
        quote : "삶은 소유물이 아니라 순간 순간의 있음이다 영원한 것이 어디 있는가 모두가 한때일뿐 그러나 그 한때를 최선을 다해 최대한으로 살수 있어야 한다 삶은 놀라운 신비요 아름다움이다.",
        author : "법정스님"    
    },
    {
        quote : "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.",
        author : "헬렌 켈러"    
    },
    {
        quote : "인생이란 학교에는 불행 이란 훌륭한 스승이 있다. 그 스승 때문에 우리는 더욱 단련되는 것이다.",
        author : "프리체"    
    },
];

const quote = document.querySelector("#quote div:first-child")
const author = document.querySelector("#quote div:last-child")

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;


