var images = document.getElementsByClassName("a")
for (i = 1; i <=images.length; i++)
{
    images[i-1].setAttribute("src","../ASSET/Images/Blackhole/"+i+".jpg")
    images[i-1].style.width="220px"
    images[i-1].style.height="220px"
}
console.log(images)
//this is for header
var indval=0;
var images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"]
        function inc()
        {
            indval++;
            if(indval>=images.length)
            {
                indval=0;
            document.getElementById("header").style.backgroundImage="url(../ASSET/Images/Blackhole/"+images[indval]+")";
            }
            else
            {
                document.getElementById("header").style.backgroundImage="url(../ASSET/Images/Blackhole/"+images[indval]+")";
            }
        }
        function dec()
        {
            indval--;
            if(indval<0)
            {
                indval=9;
            document.getElementById("header").style.backgroundImage="url(../ASSET/Images/Blackhole/"+images[indval]+")";
            }
            else
            {
                document.getElementById("header").style.backgroundImage="url(../ASSET/Images/Blackhole/"+images[indval]+")";
            }
        }
        function openImg(pic,name,info)
        {
            document.getElementById("subWindow").removeAttribute("style")
            document.getElementById("subWindoImg").src='../ASSET/Images/Blackhole/'+pic+".jpg"
            document.getElementById("imageHeading").innerHTML=name;
            document.getElementById("imgpara").innerHTML=info;
        }
        function closeImg()
        {
            document.getElementById("subWindow").setAttribute("style","display:none")
        }