*{
    box-sizing : border-box;
    margin: 0;
}
.slide-title{
    margin-left: 100px;
    margin-top: 100px;
}
.active{
    display: inline-block;
}
.inactive {
    display: none;
}
.cont{
    width: 414px;
    height: 896px;
    margin: auto;
    background-color: white;
    padding: 22px;
    display: flex;
    justify-content: center;
    text-align: center;
}
.slide-image {
    margin-top: 8%;
    position: absolute;
    /* object-fit: cover; */
    
    padding: 5px;
    margin-left: 3%;
   
}
.slide-image img {
    width: 300px;
   height: 200px;
    background-color: gray;
    margin-bottom: 93px;
}
.slide-last {
    text-align: center;
    padding:20px;
    position: absolute;
left: 26.88%;
right: 26.63%;
top: 73%;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
letter-spacing: 0.0025em;
color: #232628;
}
.slide-text {
    color: rgb(19, 18, 18);
    text-align: center;
    margin-left: 30%;
    margin-bottom: 47px;
}
.slide-title{
    margin-left: 100px;
    margin-top: 400px;
}
.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 65%;
    width: auto;
    padding: 1rem;
    margin-top:  1rem;
    font-weight: bold;
    margin-left: 39.2%;
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 130px;
font-size: 18px;
color: #FFFFFF;
position: absolute;
left: 5.57%;
right: 5.33%;
height: 48px;
width: 368px;
left: 23px;

border: none;
background: #FB7E00;


}
.arrows button{
    border-radius: 10px;
}
.prev:hover,
.next:hover {
    color: white;
    background-color: rgba(199, 25, 25, 0.6);
    transition: all 0.5s ease-in;
}
.next{
    right: 0;
    border-radius: 5px 0px 0px 5px;
}
.all-dots{
    width: 10%;
    height: 8%;
    margin-left: 5%;
    
    position: absolute;
    display: flex;
    top: 60%;
    justify-content: center;
}
.dot{
    cursor: pointer;
    height: 8px;
    width: 8px;
    margin: 0px 3px;
    background-color: #BFC0C2;
    border-radius:  50%;
    /* border: solid  #BFC0C2;; */
    display: inline-block; 
  
}
.active-dot,
.dot:hover {
    background-color:  #232628;;
}
