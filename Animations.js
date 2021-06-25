<html>
    <head>
        <title>Animations</title>
        <script>
            var opacity=0;
            var intervalId=0
            function fadeOut()
            {
                intervalId=setInterval(hide,200);

            }
            function hide()
            {
                var img=document.getElementById("img1");
                opacity=Number(window.getComputedStyle(img).getPropertyValue("opacity"));
                if(opacity>0)
                {
                    opacity=opacity-0.1;
                    img.style.opacity=opacity;
                }
                else{
                    clearInterval(intervalId);
                }
            }
            function fadeIn()
            {
                intervalId=setInterval(show,200);
            }
            function show()
            {
                var img=document.getElementById("img1");
                opacity=Number(window.getComputedStyle(img).getPropertyValue("opacity"));
                if(opacity<1)
                {
                    opacity=opacity+0.1;
                    img.style.opacity=opacity;
                }
                else
                {
                    clearInterval(intervalId);
                }
            }
        </script>               
        <body>
            <button onclick="fadeOut()" id="out">Fade Out</button>
            <br><br>
            <img id="img1" src="Screenshot (44).png" width="300"/>
            <br><br>
            <button onclick="fadeIn()" id="in">Fade IN</button>
        </body>
    </head>
</html>
